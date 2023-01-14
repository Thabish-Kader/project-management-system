import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import { ClientRow } from "./ClientRow";
import { Spinner } from "./Spinner";

type TClients = {
	clients: TClient[];
};

export const Clients = () => {
	const { loading, error, data } = useQuery<TClients>(GET_CLIENTS);

	if (loading) return <Spinner />;
	if (error) return <p>Something went wrong</p>;

	return (
		<>
			{!loading && !error && (
				<table className="table table-hover mt-3">
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
			)}
		</>
	);
};
