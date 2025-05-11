import projectModel from "@/models/project.models";
import connectDB from "@/utils/dbConnect";

export async function GET(req, { params }) {
  await connectDB();
  const { slug } = await params;
  console.log(`Fetching project with slug: ${slug}`);
  try {
    const project = await projectModel.findOne({ slug }).lean();
    if (!project) {
      return Response.json({ success: false, message: "Project not found" }, { status: 404 });
    }
    return Response.json({ success: true, project }, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching project by slug:", error);
    return Response.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
