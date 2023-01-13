import {
	GraphQLID,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLString,
} from "graphql";
import ClientModel from "../models/Client";

const ClientType = new GraphQLObjectType({
	name: "Client",
	fields: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
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
	},
});

const schema = new GraphQLSchema({
	query: RootQuery,
});

export default schema;
