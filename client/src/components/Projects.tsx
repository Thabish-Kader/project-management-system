import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECTS } from "../queries/projectQueries";
import { Spinner } from "./Spinner";
import { ProjectCard } from "./ProjectCards";

type Projects = {
	projects: TProject[];
};

export const Projects = () => {
	const { data, loading, error } = useQuery<Projects>(GET_PROJECTS);
	if (loading) return <Spinner />;
	if (error) return <p>Something went wrong</p>;
	return (
		<>
			{data?.projects.length! > 0 ? (
				<div className="row gap-3 mt-2 ">
					{data?.projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			) : (
				<p>No Projects</p>
			)}
		</>
	);
};
