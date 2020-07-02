import * as Router from 'koa-router';
import { Middleware } from 'koa';

import * as taskController from '../controllers/tasks';

const router = new Router();

router.get('/task/:task', taskController.getTask);

router.get('/', taskController.getAllTasks);

router.post('/', taskController.postTask);

router.put('/task/:task', taskController.updateTask);

router.delete('/task/:task', taskController.deleteTask);

export const taskRoutes:Middleware = router.routes();