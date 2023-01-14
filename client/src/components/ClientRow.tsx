import { FaTrash } from "react-icons/fa";
type Props = {
	client: TClient;
};

export const ClientRow = ({ client }: Props) => {
	return (
		<tr>
			<td>{client.name}</td>
			<td>{client.email}</td>
			<td>{client.phone}</td>
			<td>
				<button
					// onClick={() => deleteClient()}
					className="btn btn-danger btn-sm"
				>
					<FaTrash />
				</button>
			</td>
		</tr>
	);
};
