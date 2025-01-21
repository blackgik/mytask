import { Router } from "express";
import taskRoute from "./todoAppRoute";

export const routerIndex = (route: Router) => {
	route.use("/task", taskRoute);
	return route;
};
