import { Request, Response, Router } from 'express';
import { newTaskCreationHandler } from '../controllers/task.controller';
import { TaskCreationSchema } from '../validators/task.schema';
import validators from '../validators';

const taskRoute = Router();

taskRoute.post('/new-task', validators(TaskCreationSchema), newTaskCreationHandler);
taskRoute.get('/building-docker', (req: Request, res: Response) => {
	res.send({message: "Docker is already running live 🔥🔥🔥"})
});

export default taskRoute;
