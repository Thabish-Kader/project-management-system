import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Clients } from "./components/Clients";

const client = new ApolloClient({
	uri: "http://localhost:5001/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<Navbar />
				<div className="">
					<Clients />
				</div>
			</ApolloProvider>
		</>
	);
}

export default App;
