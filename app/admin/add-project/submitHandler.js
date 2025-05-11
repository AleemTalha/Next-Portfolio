'use server'

import cloudinary from '@/config/cloudinary'
import { Readable } from 'stream'
import crypto from 'crypto'

const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || 'http://localhost:3000'

const generateUniqueFileName = (originalName) => {
  const timestamp = Date.now()
  const randomString = crypto.randomBytes(6).toString('hex')
  const fileExtension = originalName.split('.').pop()
  return `${timestamp}-${randomString}.${fileExtension}`
}

const streamUpload = (fileBuffer, filename) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'project-images',
        resource_type: 'image',
        public_id: filename.split('.')[0],
      },
      (error, result) => {
        if (result) resolve(result)
        else reject(error)
      }
    )

    const readable = new Readable()
    readable.push(fileBuffer)
    readable.push(null)
    readable.pipe(stream)
  })
}

export const submitHandler = async (data, imageFile) => {
  const slug = data.title.toLowerCase().replace(/ /g, '-')
  let uploadedImage = null

  if (imageFile) {
    const buffer = Buffer.from(await imageFile.arrayBuffer())
    const uniqueFileName = generateUniqueFileName(imageFile.name)

    try {
      const uploadResult = await streamUpload(buffer, uniqueFileName)
      uploadedImage = uploadResult.secure_url
    } catch (error) {
      throw new Error('Image upload failed')
    }
  }

  const formData = {
    ...data,
    slug,
    image: uploadedImage,
    technologies: data.technologies.split(',').map(tech => tech.trim()),
    tags: data.tags.split(',').map(tag => tag.trim())
  }

  try {
    const response = await fetch(`${baseUrl}/api/add-project`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) throw new Error('Failed to save project')
    return await response.json()
  } catch (error) {
    throw error
  }
}
