import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      trim: true,
    },
    details: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['in progress', 'completed'],
      default: 'in progress',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    technologies: {
      type: [String], // Array of strings
    },
    tags: {
      type: [String], // Array of strings
    },
    image: {
      type: String, // URL of the uploaded image
    },
    link: {
      type: String, // Live project link
    },
    repository: {
      type: String, // Repository link
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
