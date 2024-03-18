import mongoose, { Document, Schema } from "mongoose";

export interface IContact extends Document {
    firstname: string;
    lastname: string;
    company: string;
    email: string;
}

const contactSchema: Schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    company: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    }
});

const Contact = mongoose.models.Contact || mongoose.model<IContact>('Contact', contactSchema);

export default Contact;