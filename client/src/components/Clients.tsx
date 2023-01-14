import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import { ClientRow } from "./ClientRow";

type TClients = {
	clients: TClient[];
};

export const Clients = () => {
	const { loading, error, data } = useQuery<TClients>(GET_CLIENTS);

	return (
		<table className="table table-secondary bg-slate">
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Phone</th>
				</tr>
			</thead>
			<tbody>
				{data?.clients.map((client) => (
					<ClientRow key={client.id} client={client} />
				))}
			</tbody>
		</table>
	);
};
