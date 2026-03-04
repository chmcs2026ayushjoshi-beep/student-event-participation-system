import mongoose from "mongoose";

const participationSchema = new mongoose.Schema(
{
    studentName: {
        type: String,
        required: true,
    },
    rollNum: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    eventTitle: {
        type: String,
        required: true,
    },
    eventCategory: {
        type: String,
        required: true,
    },
    eventDate: {
        type: Date,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    registrationDate: {
        type: Date,
        required: true,
    }
},
{ timestamps: true })

const Participation = mongoose.model("Participation", participationSchema)
export default Participation
