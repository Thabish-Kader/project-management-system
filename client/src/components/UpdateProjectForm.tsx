import { useMutation } from "@apollo/client";
import React, { useState } from "react";

import { GET_PROJECT } from "../queries/projectQueries";
import { UPDATE_PROJECT } from "../mutations/projectMutations";

type Props = {
	project: TProject;
};
export const UpdateProjectForm = ({ project }: Props) => {
	const [name, setName] = useState(project.name);
	const [description, setDescription] = useState(project.description);
	const [status, setStatus] = useState("");
	const [updateProject] = useMutation(UPDATE_PROJECT, {
		variables: { id: project.id, name, description, status },
		refetchQueries: [
			{
				query: GET_PROJECT,
				variables: { id: project.id, name, description, status },
			},
		],
	});
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name || !description || !status) {
			return alert("Fields are emplty");
		}
		updateProject({
			variables: { id: project.id, name, description, status },
		});
	};

	return (
		<div className="mt-5 ">
			<h3>Update Project Details</h3>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="form-label">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Description</label>
					<textarea
						className="form-control"
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</div>
				<div className="mb-3">
					<label className="form-label">Status</label>
					<select
						id="status"
						className="form-select"
						value={status}
						onChange={(e) => setStatus(e.target.value)}
					>
						<option value="new">Not Started</option>
						<option value="progress">In Progress</option>
						<option value="completed">Completed</option>
					</select>
				</div>
				<button className="btn btn-primary" type="submit">
					Update
				</button>
			</form>
		</div>
	);
};
