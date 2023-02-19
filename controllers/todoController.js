import Todo from "../models/todoModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// add todo data

const addTodo = asyncHandler(async (req, res) => {
	try {
		const { todoDesc, todoCompleted, todoResponsible, todoPriority } = req.body;
		const todoData = new Todo({
			todoDesc,
			todoCompleted,
			todoResponsible,
			todoPriority,
		});

		const response = await todoData.save();
		res.status(200).json({
			success: true,
			message: "todo added successfully",
			data: response,
		});
	} catch (error) {
		res.status(403).json({
			success: false,
			message: error,
		});
	}
});

// Get specfic todo

const getSpecificTodo = asyncHandler(async (req, res) => {
	try {
		const id = req.params.id;
		const response = await Todo.findById(id);

		res.status(200).json({
			success: true,
			data: response,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error,
		});
	}
});

// Delete single todo

const deleteSingleTodo = asyncHandler(async (req, res) => {
	try {
		const response = await Todo.deleteOne({ _id: req.params.id });

		res.status(200).json({
			success: true,
			message: "Todo deleted successfully",
			data: response,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error,
		});
	}
});

// update single todo

const updateSingleTodo = asyncHandler(async (req, res) => {
	try {
		const { todoDesc, todoResponsible, todoPriority, todoCompleted } = req.body;
		const updatedTodo = await Todo.findByIdAndUpdate(
			req.params.id,
			{
				todoDesc,
				todoResponsible,
				todoPriority,
				todoCompleted,
			},
			{ new: true }
		);
		if (!updatedTodo) {
			return res.status(404).send("Todo not found");
		}
		res.status(200).json({
			success: true,
			message: "Todo updated successfully",
			data: updatedTodo,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error,
		});
	}
});

// view all todo

const viewAllTodo = asyncHandler(async (req, res) => {
	try {
		const allTodo = await Todo.find({});
		res.status(200).json({
			success: true,
			data: allTodo,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error,
		});
	}
});

// delete all todo

const deleteAllTodo = asyncHandler(async (req, res) => {
	try {
		const allTodo = await Todo.deleteMany({});
		res.status(200).json({
			success: true,
			message: "All todo deleted successfully",
			data: allTodo,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error,
		});
	}
});

export {
	addTodo,
	getSpecificTodo,
	deleteSingleTodo,
	updateSingleTodo,
	viewAllTodo,
	deleteAllTodo,
};
