import * as Koa from 'koa';

import * as bodyParser from 'koa-bodyparser';

import { taskRoutes } from './routes/tasks';

const app = new Koa();

const PORT = process.env.PORT || 8000;

app.use(bodyParser());

app.use(taskRoutes);

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
});