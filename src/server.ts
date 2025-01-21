import "express-async-errors";
import express from "express";
import cors from "cors";
import { env } from "./envs/env.config";
import { routerIndex } from "./routes";
import { createTableSchema } from "./models";
import { Error_Handler } from "./middlewares/error.handler";
import { NotFoundError } from "./lib/appErrors";

const app = express();

const route = express.Router();
const router = routerIndex(route);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const baseUrl = "/api/v1/todo";

app.use(baseUrl, router);

app.use("*", (req, res) => {
	throw new NotFoundError("Source not found. Check postman for updates");
});

app.use(Error_Handler);

app.listen(env.port, async () => {
	await createTableSchema();
	console.log("listening on port " + env.port);
});
