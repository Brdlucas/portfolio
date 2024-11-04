import mongoose, { Document, Schema } from "mongoose";

export interface IProject extends Document {
    title: string;
    image: string;
    description: string;
    link: string;
    language: string;
    date: string;
}

const projectSchema: Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    link: {
        type: String,
        required: true,
    },

    language: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    }
});

const Project = mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);

export default Project;