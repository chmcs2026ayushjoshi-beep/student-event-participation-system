import Participation from "../models/participationModel.js";
import mongoose from "mongoose";

export async function getAllParticipations(_, res) {
    try {
        const records = await Participation.find().sort({ createdAt: -1 });
        res.status(200).json(records);
    } catch (error) {
        console.error("Error in getAllParticipations controller", error);
        res.status(500).json({ message: "Internal server error"});
    }
}
export async function getParticipationById(req, res) {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const record = await Participation.findById(id);
        if (!record) return res.status(404).json({ message: "Record not found" });

        res.status(200).json(record);
    } catch (error) {
        console.error("Error in getParticipationById controller", error);
        res.status(500).json({ message: "Internal server error"});
    }}


export async function createParticipation(req, res) {
    try {
        const { studentName, rollNum, department, year, eventTitle, eventCategory, eventDate, venue, registrationDate } = req.body;

        if (!studentName || !rollNum || !department || !year || !eventTitle || !eventCategory || !eventDate || !venue || !registrationDate){
            return res.status(404).json({message: 'All fields are required'});
        }

        const participation = new Participation({ studentName, rollNum, department, year, eventTitle, eventCategory, eventDate, venue, registrationDate });
        const savedRecord = await participation.save();
        res.status(201).json({ savedRecord });
    } catch (error) {
        console.error("Error in createParticipation controller", error);
        res.status(500).json({ message: "Internal server error"});
    }
}

export async function updateParticipation(req, res) {
    try {
        const { studentName, rollNum, department, year, eventTitle, eventCategory, eventDate, venue, registrationDate } = req.body;

        const updatedRecord = await Participation.findByIdAndUpdate(
            req.params.id,
            { studentName, rollNum, department, year, eventTitle, eventCategory, eventDate, venue, registrationDate },
            { new:true }
        );

        if (!updatedRecord) return res.status(404).json({ message: "Record not found"});
        res.status(200).json(updatedRecord);
    } catch (error) {
        console.error("Error in updateParticipation controller", error);
        res.status(500).json ({ message: "Internal server error"});
    }
}

export async function deleteParticipation(req, res) {
    try {
        const deletedRecord = await Participation.findByIdAndDelete(req.params.id);
        if (!deletedRecord) return res.status(404).json({message: "Record not found"});
        res.status(200).json({ message : "Participation deleted successfully"});
    } catch (error) {
        console.error("Error in deleteParticipation controller", error);
        res.status(500).json({ message: "Internal server error"});
    }
}
