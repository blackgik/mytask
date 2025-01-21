import Joi, { ValidationResult } from "joi";
import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../lib/appErrors";

export default (schema: Joi.Schema, source: string = "body") =>
	(req: Request, res: Response, next: NextFunction) => {
		const data = req[source as keyof Request] || {};
		const errors: string[] | ValidationResult = validate(data, schema);

		if (Array.isArray(errors) && errors.length > 0) {
			throw new BadRequestError(errors[0]);
		}

		next();
	};

function validate(data: any, schema: Joi.Schema): string[] | ValidationResult {
	const { error } = schema.validate(data);

	if (!error) {
		return [];
	}

	return error.details.map((error) => error.message);
}
