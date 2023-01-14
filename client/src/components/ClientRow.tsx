import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENTS } from "../mutations/clientMutation";
import { GET_CLIENTS } from "../queries/clientQueries";
type Props = {
	client: TClient;
};

export const ClientRow = ({ client }: Props) => {
	const [deleteClient] = useMutation(DELETE_CLIENTS, {
		variables: {
			id: client.id,
		},
		refetchQueries: [{ query: GET_CLIENTS }],
	});
	return (
		<tr>
			<td>{client.name}</td>
			<td>{client.email}</td>
			<td>{client.phone}</td>
			<td>
				<button
					onClick={() => deleteClient()}
					className="btn btn-danger btn-sm"
				>
					<FaTrash />
				</button>
			</td>
		</tr>
	);
};
