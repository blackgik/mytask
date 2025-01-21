import { tables } from "../db/db.tables";
import { task_model } from "./task.model";

const tableCheckFunctions = [
	{ tableName: tables.tasks, checkFunction: task_model }
];

export const createTableSchema = async () => {
	try {
		const schemaIndices: string[] = [];

		await Promise.all(
			tableCheckFunctions.map(async ({ tableName, checkFunction }) => {
				try {
					const data = await checkFunction({ tableName });
					if (data) {
						schemaIndices.push("1");
					}
				} catch (err) {
					schemaIndices.push("0");
					console.error(err);
				}
			})
		);

		const isConnected = schemaIndices.every((item) => item === "1");

		if (isConnected) console.log("🔥 Databases plugged in successfully 🔥");
	} catch (err) {
		console.log(err);
	}
};
