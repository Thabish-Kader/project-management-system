import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	phone: {
		type: String,
	},
});

const ClientModel = mongoose.model("Client", ClientSchema);

export default ClientModel;
