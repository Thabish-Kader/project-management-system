import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	status: {
		type: String,
		enum: ["Not Started", "In Progress", "Completed"],
	},
	clientId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Client",
	},
});

const ProjectModel = mongoose.model("Project", ProjectSchema);

export default ProjectModel;
