import { dbconnection } from "../db/connections";

export const task_model = async ({
	tableName
}: {
	tableName: string;
}): Promise<boolean> => {
	const hasTable = await dbconnection.schema.hasTable(tableName);

	if (hasTable) {
		return true;
	}

	const createTable: boolean | any | string =
		await dbconnection.schema.createTable(tableName, (table) => {
			table.uuid("id").primary().notNullable();
			table.string("name").notNullable();
			table.string("description").notNullable();

			table.timestamps(true, true);
		});

	if (!createTable) {
		return false;
	}

	return true;
};
