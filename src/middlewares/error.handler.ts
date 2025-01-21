import { Response, Request, NextFunction } from "express";
import appResponse from "../lib/appResponse";

const isProduction = process.env.NODE_ENV === "production";

const errorNames = [
	"CastError",
	"JsonWebTokenError",
	"TokenExpiredError",
	"ValidationError",
	"SyntaxError",
	"MongoError",
	"ZodError"
];

export const Error_Handler = function (
	error: any,
	req: any,
	res: any,
	next: any
) {
	if (error.name === "TaskError" || error.isOperational) {
		if (Object.keys(error).includes("sqlMessage")) {
			console.error(error);
			return res
				.status(503)
				.send(
					appResponse(
						"Database cannot accept your query. Check your insertion or extraction methods",
						null,
						false
					)
				);
		}
		return res
			.status(error.statusCode)
			.send(appResponse(error.message, null, false));
	}

	if (errorNames.includes(error.name)) {
		if (error.name === "TokenExpiredError") {
			return res
				.status(400)
				.send(
					appResponse(
						"Token has expired, Request a reset password again",
						null,
						false
					)
				);
		}

		return res.status(400).send(appResponse(error.message, null, false));
	}

	if (error.name === "Error" && Object.keys(error).includes("sqlMessage")) {
		console.error(error);
		return res
			.status(503)
			.send(
				appResponse(
					"Database cannot accept your query. Check your insertion or extraction methods",
					null,
					false
				)
			);
	}

	const message = isProduction
		? "An unexpected error has occured. Please, contact the administrator"
		: error.message;

	return res.status(500).send(appResponse(message, null, false));
};
