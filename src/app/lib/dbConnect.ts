import mongoose from "mongoose";


const connection: { isConnected?: number } = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI est non défini');
    }

    const db = await mongoose.connect(process.env.MONGODB_URI!);

    connection.isConnected = db.connections[0].readyState;;
}

export default dbConnect;