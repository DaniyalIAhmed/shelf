import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route";
import { connectDB } from "./configs/db.config";

//Config
dotenv.config();

//Constants
const port = process.env.PORT || 3000;
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use(`/api/${process.env.API_VERSION||"v1"}/auth`, authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB();
});