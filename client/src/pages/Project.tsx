import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import { useParams } from "react-router-dom";

export const Project = () => {
	const { id } = useParams();

	const { data, loading, error } = useQuery(GET_PROJECT, {
		variables: { id },
	});
	console.log(data);
	return <div>Project</div>;
};
