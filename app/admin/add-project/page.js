"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { submitHandler } from "./submitHandler";
import Image from "next/image";
import Loading from "@/components/Loading";

const Page = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(false);
      
      await submitHandler(data, imageFile);
      
      setSuccess(true);
      reset();
      setImageFile(null);
      setImagePreview(null);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)] px-4 py-10">
      <div className="max-w-5xl mx-auto bg-[var(--card-bg)] p-10 rounded-2xl shadow-lg border border-[var(--border-color)]">
        <h1 className="text-4xl font-bold text-[var(--bold-text-color)] mb-10 text-center">
          Add a New Project
        </h1>

        

        {success && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Project added successfully!
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Image Upload First */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold">Project Image</label>
            <div
              {...getRootProps()}
              className="w-[400px] h-[220px] mx-auto border-2 border-dashed border-[var(--border-color)] p-2 rounded-lg text-center cursor-pointer hover:border-[var(--highlight)] transition bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center"
            >
              <input {...getInputProps()} />
              {imagePreview ? (
                <div className="relative w-[400px] h-[220px] overflow-hidden rounded border border-[var(--border-color)]">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    width={400}
                    height={220}
                    className="object-cover w-full h-full rounded"
                  />
                </div>
              ) : (
                <div className="text-gray-500">Drag & drop an image here, or click to select</div>
              )}
            </div>
            {imageFile && (
              <p className="mt-2 text-sm text-[var(--highlight)] font-semibold text-center">
                {imageFile.name}
              </p>
            )}
          </div>

          {/* Title */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="w-full bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)] p-3 rounded focus:ring-2 focus:ring-[var(--highlight)]"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold">Description</label>
            <textarea
              {...register("description")}
              rows={4}
              className="w-full bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)] p-3 rounded focus:ring-2 focus:ring-[var(--highlight)]"
            />
          </div>

          {/* Details */}
          <div>
            <label className="block mb-2 font-semibold">Details</label>
            <textarea
              {...register("details")}
              rows={4}
              className="w-full bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)] p-3 rounded focus:ring-2 focus:ring-[var(--highlight)]"
            />
          </div>

          {/* Dates */}
          <div>
            <label className="block mb-2 font-semibold">Start Date</label>
            <input
              type="date"
              {...register("startDate")}
              className="w-full bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)] p-3 rounded focus:ring-2 focus:ring-[var(--highlight)]"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">End Date</label>
            <input
              type="date"
              {...register("endDate")}
              className="w-full bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)] p-3 rounded focus:ring-2 focus:ring-[var(--highlight)]"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block mb-2 font-semibold">Status</label>
            <select
              {...register("status")}
              className="w-full bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)] p-3 rounded focus:ring-2 focus:ring-[var(--highlight)]"
            >
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Featured */}
          <div className="flex items-center gap-2 mt-6">
            <input type="checkbox" {...register("featured")} />
            <label className="font-medium">Mark as Featured</label>
          </div>

          {/* Technologies */}
          <div>
            <label className="block mb-2 font-semibold">Technologies</label>
            <input
              type="text"
              {...register("technologies")}
              placeholder="React, Node.js, MongoDB"
              className="w-full bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)] p-3 rounded focus:ring-2 focus:ring-[var(--highlight)]"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block mb-2 font-semibold">Tags</label>
            <input
              type="text"
              {...register("tags")}
              placeholder="Web, FullStack, API"
              className="w-full bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)] p-3 rounded focus:ring-2 focus:ring-[var(--highlight)]"
            />
          </div>

          {/* Link */}
          <div>
            <label className="block mb-2 font-semibold">Live Link</label>
            <input
              type="url"
              {...register("link")}
              className="w-full bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)] p-3 rounded focus:ring-2 focus:ring-[var(--highlight)]"
            />
          </div>

          {/* Repository */}
          <div>
            <label className="block mb-2 font-semibold">Repository</label>
            <input
              type="url"
              {...register("repository")}
              className="w-full bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)] p-3 rounded focus:ring-2 focus:ring-[var(--highlight)]"
            />
          </div>

          {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-[var(--button-bg)] text-[var(--button-text)] py-3 px-4 rounded font-semibold transition ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
              }`}
            >
              {isLoading ? 'Saving...' : 'Submit Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
