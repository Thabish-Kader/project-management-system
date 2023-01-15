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
