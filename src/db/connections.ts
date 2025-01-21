import knex, { Knex } from "knex";
import { configConnection } from "./connections.dto";
import { env } from "../envs/env.config";

/** MySQL Configuration */
const MYCONFIG: configConnection | any = {
	host: env.MYSQL_HOST,
	port: env.MYPORT,
	user: env.MYSQL_USER,
	password: env.MYPASS,
	database: env.MYSQL_DATABASE
};

const databaseName = "todos";

/** Connection to MySQL Database */
export const dbconnection: Knex = knex({
	client: "mysql",
	version: "8.0",
	connection: MYCONFIG,
	pool: { min: 0, max: 50 },
	debug: false
});

export const createDatabase = () => {
	dbconnection
		.raw(`CREATE DATABASE IF NOT EXISTS ??`, [databaseName])
		.then(() => {
			console.log(
				`⛳️⛳️${databaseName.toUpperCase()} database created successfully⛳️⛳️`
			);
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			dbconnection.destroy();
		});
};
