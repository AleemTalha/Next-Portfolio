import projectModel from "@/models/project.models";
import connectDB from "@/utils/dbConnect";

export async function GET(request) {
  await connectDB();
  console.log("GET /api/projects called");

  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = 10;
    const skip = (page - 1) * limit;
    console.log("Working there")
    const [projects, total] = await Promise.all([
      projectModel.find({}).skip(skip).limit(limit).lean(),
      projectModel.countDocuments()
    ]);

    const totalPages = Math.ceil(total / limit);
    const isLastPage = page >= totalPages;

    return Response.json(
      {
        success: true,
        page,
        totalPages,
        totalProjects: total,
        isLastPage,
        projects
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error fetching paginated projects:", error);
    return Response.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
