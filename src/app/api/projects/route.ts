import { NextResponse } from "next/server";
import dbConnect from "../../lib/dbConnect";
import Project from "../../models/Project";


export async function GET() {
    await dbConnect();

    try {
        const projects = await Project.find({});

        return NextResponse.json(projects);
    } catch (err: any) {
        return NextResponse.json({ error: err.message });
    }
}