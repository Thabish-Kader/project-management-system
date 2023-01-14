import { gql } from "@apollo/client";

const DELETE_CLIENTS = gql`
	mutation deleteClient($id: ID!) {
		deleteClient(id: $id) {
			id
			name
			email
			phone
		}
	}
`;

const ADD_CLIENTS = gql`
	mutation addClient($name: String!, $email: String!, $phone: String!) {
		addClient(name: $name, email: $email, phone: $phone) {
			id
			name
			phone
			email
		}
	}
`;

export { DELETE_CLIENTS, ADD_CLIENTS };
