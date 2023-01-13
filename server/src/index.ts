import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import { dbConnect } from "./config/db";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// connect to database
dbConnect();

app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		graphiql: process.env.NODE_ENV === "development",
	})
);

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
