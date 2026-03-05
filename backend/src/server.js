import express from "express";
import dotenv from "dotenv";
import participationRoutes from "./routes/participationRoutes.js";
import { connectDB } from "./config/db.js";
import dns from "node:dns";
import cors from "cors";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());

app.use(express.json());
app.use("/", participationRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });
});
