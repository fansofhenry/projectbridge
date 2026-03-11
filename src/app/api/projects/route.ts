import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

// GET /api/projects — list all projects
export async function GET() {
  if (!supabase) {
    return NextResponse.json(
      { error: "Database not configured. Using sample data." },
      { status: 503 }
    );
  }

  const { data, error } = await supabase
    .from("projects")
    .select(`
      *,
      project_members ( id, user_id, role, joined_at, users:user_id ( id, display_name, email, skills, disciplines, program_affiliation ) ),
      milestones ( * )
    `)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST /api/projects — create a new project
export async function POST(request: Request) {
  if (!supabase) {
    // Gracefully handle missing DB — return fake success for demo
    return NextResponse.json(
      { message: "Project saved (demo mode — database not connected yet)" },
      { status: 201 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { title, problem, description, skills, disciplines, time_commitment } = body;

  if (!title?.trim()) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const slug = slugify(title) + "-" + Date.now().toString(36);

  const { data, error } = await supabase
    .from("projects")
    .insert([
      {
        title: title.trim(),
        slug,
        description: description?.trim() || "",
        problem_statement: problem?.trim() || "",
        status: "idea",
        disciplines: Array.isArray(disciplines) ? disciplines : [],
        skills_needed: Array.isArray(skills) ? skills : [],
        time_commitment: time_commitment || "steady",
        quarter: "Spring 2026",
      },
    ])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
