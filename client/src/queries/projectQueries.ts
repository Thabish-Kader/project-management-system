import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
	query getProjects {
		projects {
			id
			name
			description
			status

			client {
				id
				name
				phone
				email
			}
		}
	}
`;

export const GET_PROJECT = gql`
	query getProject($id: ID!) {
		project(id: $id) {
			id
			name
			description
			status

			client {
				id
				name
				phone
				email
			}
		}
	}
`;
