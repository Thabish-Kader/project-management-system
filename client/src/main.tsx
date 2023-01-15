import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./pages/Error";
import { Project } from "./pages/Project";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
	},
	{
		path: "/projects/:id",
		element: <Project />,
		errorElement: <Error />,
	},
]);

const client = new ApolloClient({
	uri: "http://localhost:5001/graphql",
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<RouterProvider router={router} />
		</ApolloProvider>
	</React.StrictMode>
);
