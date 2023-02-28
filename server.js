import express from "express";
const app = express();
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./db.js";
import cors from "cors";
dotenv.config();

import todoRoutes from "./routes/todoRoutes.js";

connectDb();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/todo", todoRoutes);
app.get("/", (req, res) => {
	res.json({ message: "Hello World" });
});

const PORT = process.env.PORT;

app.listen(
	PORT,
	"api.aemsig.com",
	() => console.log("Server running at http://api.aemsig.com:80")
	// console.log(`Server is Running on Port ${PORT}`)
);
