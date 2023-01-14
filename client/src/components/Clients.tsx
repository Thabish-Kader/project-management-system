import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";

export const Clients = () => {
	const { loading, error, data } = useQuery(GET_CLIENTS);
	console.log(data);
	return <div>Clients</div>;
};
