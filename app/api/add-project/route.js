import dbConnect from '@/utils/dbConnect'; // Import database connection utility
import Project from '@/models/project.models'; // Import the Project model

export const config = {
  api: {
    bodyParser: true, // Enable body parsing for JSON data
  },
};

export async function POST(req) {
  try {
    await dbConnect(); 
    console.log("Working in add-project route");
    const body = await req.json(); 

    const newProject = await Project.create(body);

    return new Response(
      JSON.stringify({ message: 'Project added successfully', project: newProject }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding project:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to add project' }),
      { status: 500 }
    );
  }
}
