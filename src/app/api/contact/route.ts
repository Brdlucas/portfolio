import dbConnect from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import Contact from "@/app/models/Contact";

export async function POST(req: any) {
    await dbConnect();

    try {
        const contact = await req.json();

        const newContact = await Contact.create(contact);

        return new NextResponse(JSON.stringify(newContact), { status: 201 });
    } catch (err: any) {

        return new NextResponse(JSON.stringify({ error: err.message }), { status: 400 });
    }
}