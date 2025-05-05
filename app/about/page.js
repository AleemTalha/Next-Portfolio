"use client"
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      this is about
      <button>
        hover
      </button>
      <Link href="/">
        home
      </Link>
    </div>
  )
}

export default page
