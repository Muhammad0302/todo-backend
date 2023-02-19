import express from "express";
import {
	addTodo,
	getSpecificTodo,
	deleteSingleTodo,
	updateSingleTodo,
	viewAllTodo,
	deleteAllTodo,
} from "../controllers/todoController.js";
const router = express.Router();

// todo table routes
router.post("/add", addTodo);
router.get("/get/:id", getSpecificTodo);
router.delete("/delete/:id", deleteSingleTodo);
router.put("/update/:id", updateSingleTodo);
router.get("/viewAll", viewAllTodo);
router.delete("/deleteAll", deleteAllTodo);

export default router;
