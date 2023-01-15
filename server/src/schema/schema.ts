import {
	GraphQLEnumType,
	GraphQLID,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLString,
} from "graphql";
import ClientModel from "../models/Client";
import ProjectModel from "../models/Project";

const ClientType = new GraphQLObjectType({
	name: "Client",
	fields: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
	},
});

const ProjectType = new GraphQLObjectType({
	name: "Projects",
	fields: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		status: { type: GraphQLString },
		client: {
			type: ClientType,
			resolve(parent, args) {
				return ClientModel.findById(parent.clientId);
			},
		},
	},
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		client: {
			type: ClientType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return ClientModel.findById(args.id);
			},
		},
		clients: {
			type: new GraphQLList(ClientType),
			resolve(parent, args) {
				return ClientModel.find();
			},
		},
		project: {
			type: ProjectType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return ProjectModel.findById(args.id);
			},
		},
		projects: {
			type: new GraphQLList(ProjectType),
			resolve(parent, args) {
				return ProjectModel.find();
			},
		},
	},
});

// mutations
const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		addClient: {
			type: ClientType,
			args: {
				name: { type: GraphQLNonNull(GraphQLString) },
				email: { type: GraphQLNonNull(GraphQLString) },
				phone: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				const client = new ClientModel({
					name: args.name,
					email: args.email,
					phone: args.phone,
				});
				return client.save();
			},
		},
		// delete client
		deleteClient: {
			type: ClientType,
			args: {
				id: { type: GraphQLNonNull(GraphQLID) },
			},
			resolve(parent, { id }) {
				ProjectModel.find({ clientId: id }).then((projects) => {
					projects.map((project) => project.remove());
				});
				return ClientModel.findByIdAndRemove(id);
			},
		},
		// add project
		addProject: {
			type: ProjectType,
			args: {
				name: { type: GraphQLNonNull(GraphQLString) },
				description: { type: GraphQLNonNull(GraphQLString) },
				status: {
					type: new GraphQLEnumType({
						name: "ProjectStatus",
						values: {
							new: {
								value: "Not Started",
							},
							progress: {
								value: "In Progress",
							},
							completed: {
								value: "Completed",
							},
						},
					}),
					defaultValue: "Not Started",
				},
				clientId: { type: GraphQLNonNull(GraphQLID) },
			},
			resolve(parent, { name, description, status, clientId }) {
				const project = new ProjectModel({
					name,
					description,
					status,
					clientId,
				});
				return project.save();
			},
		},
		// delete project
		deleteProject: {
			type: ProjectType,
			args: {
				id: { type: GraphQLNonNull(GraphQLID) },
			},
			resolve(parent, args) {
				return ProjectModel.findByIdAndRemove(args.id);
			},
		},
		//update project
		updateProject: {
			type: ProjectType,
			args: {
				id: { type: GraphQLNonNull(GraphQLID) },
				name: { type: GraphQLNonNull(GraphQLString) },
				description: { type: GraphQLNonNull(GraphQLString) },
				status: {
					type: new GraphQLEnumType({
						name: "ProjectStatusUpdated",
						values: {
							new: {
								value: "Not Started",
							},
							progress: {
								value: "In Progress",
							},
							completed: {
								value: "Completed",
							},
						},
					}),
				},
			},
			resolve(parent, args) {
				return ProjectModel.findByIdAndUpdate(
					args.id,
					{
						$set: {
							name: args.name,
							description: args.description,
							status: args.status,
						},
					},
					{ new: true }
				);
			},
		},
	},
});

const schema = new GraphQLSchema({
	query: RootQuery,
	mutation,
});

export default schema;
