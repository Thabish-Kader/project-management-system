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
