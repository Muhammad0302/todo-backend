import mongoose from "mongoose";
const TodoData = new mongoose.Schema(
	{
		todoDesc: {
			type: String,
		},
		todoResponsible: {
			type: String,
		},
		todoPriority: {
			type: String,
		},
		todoCompleted: {
			type: Boolean,
		},
	},
	{ timestamps: true }
);

const Todo = mongoose.model("Todo", TodoData);
export default Todo;
