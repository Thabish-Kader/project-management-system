import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECTS } from "../queries/projectQueries";

type Projects = {
	projects: TProject[];
};

export const Projects = () => {
	const { data, loading, error } = useQuery(GET_PROJECTS);

	return <div>Projects</div>;
};
