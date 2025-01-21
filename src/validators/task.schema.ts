import Joi from "joi";

export const TaskCreationSchema = Joi.object({
	name: Joi.string().required(),
	description: Joi.string().required()
});

export type TaskCreationType = {
	name: string;
	description: string;
};
