import {
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
	name: "Client",
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
	},
});

const schema = new GraphQLSchema({
	query: RootQuery,
});

export default schema;
