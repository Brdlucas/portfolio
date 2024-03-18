import dbConnect from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import Contact from "@/app/models/Contact";

export async function POST(req: any) {
    // Établir la connexion à la base de données
    await dbConnect();

    try {
        // Assumer que les données du projet sont envoyées dans le corps de la requête au format JSON
        const contact = await req.json();

        // Créer un nouveau projet dans la base de données avec les données reçues
        const newContact = await Contact.create(contact);

        // Renvoyer le projet nouvellement créé avec un statut de réussite
        return new NextResponse(JSON.stringify(newContact), { status: 201 });
    } catch (err: any) {
        // Gestion des erreurs et renvoi d'une réponse avec le message d'erreur
        return new NextResponse(JSON.stringify({ error: err.message }), { status: 400 });
    }
}