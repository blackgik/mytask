import { Request, Response } from "express";
import { TaskCreationType } from "../validators/task.schema";
import { taskCreation } from "../services/task.service";
import appResponse from "../lib/appResponse";

export const newTaskCreationHandler = async (
	req: Request<{}, {}, TaskCreationType>,
	res: Response
) => {
	const { body } = req;

	const response = await taskCreation({ body });

	res.send(appResponse("Created successfully", response));
};
