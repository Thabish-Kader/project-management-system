import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { GET_PROJECTS } from "../queries/projectQueries";
import { DELETE_PROJECT } from "../mutations/projectMutations";
type Props = {
	projectId: string;
};
export const DeleteProjectButton = ({ projectId }: Props) => {
	const navigate = useNavigate();
	const [deleteProject] = useMutation(DELETE_PROJECT, {
		variables: { id: projectId },
		onCompleted: () => navigate("/"),
		refetchQueries: [{ query: GET_PROJECTS }],
	});
	return (
		<div onClick={() => deleteProject()} className="d-flex mt-5 ms-auto">
			<button className="btn btn-danger">
				<FaTrash /> Delete Project
			</button>
		</div>
	);
};
