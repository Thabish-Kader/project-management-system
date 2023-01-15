import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
	mutation addproject(
		$name: String!
		$description: String!
		$status: ProjectStatus!
		$clientId: ID!
	) {
		addProject(
			name: $name
			description: $description
			status: $status
			clientId: $clientId
		) {
			id
			name
			description
			status
			client {
				name
				id
				email
				phone
			}
		}
	}
`;

export const DELETE_PROJECT = gql`
	mutation deleteProject($id: ID!) {
		deleteProject(id: $id) {
			id
			name
		}
	}
`;

export const UPDATE_PROJECT = gql`
	mutation updateProject(
		$id: ID!
		$name: String!
		$description: String!
		$status: ProjectStatusUpdated!
	) {
		updateProject(
			id: $id
			name: $name
			description: $description
			status: $status
		) {
			id
			name
			description
			status
			client {
				name
				id
				email
				phone
			}
		}
	}
`;
