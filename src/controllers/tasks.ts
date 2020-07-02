import { Context } from 'koa';
import * as taskService from '../services/tasks';
import { getProperties } from '../lib/helpers';
import { ITasksAttributes } from '../models/tasks';
import { IUpdateTask } from '../interfaces/task';

export const getTask = async (ctx: Context) => {
    const task = ctx.params.task;
    const response = await taskService.get(task);
    ctx.body = {
        meta: {
            status: ctx.status // fix this
        },
        data: response
    }
}

export const getAllTasks = async (ctx: Context) => {
    const response = await taskService.getAll();
    ctx.body = {
        meta: {
            status: ctx.status  // fix this
        },
        data: response
    };
}

export const postTask = async (ctx: Context) => {
    const payload: ITasksAttributes = {
        task: ctx.request.body.task,
        description: ctx.request.body.description,
      };

    const response = await taskService.create(payload);
    ctx.body = {
        meta: {
            status: ctx.status // fix this
        },
        data: response
    }
}

export const updateTask = async (ctx: Context) => {
    const payload: IUpdateTask = {
        task: ctx.params.task,
        isActive: ctx.request.body.isActive
    }

    const response = await taskService.updateTask(payload);
    ctx.body = {
        meta: {
            status: ctx.status // fix this
        },
        data: response
    };
}

export const deleteTask = async (ctx: Context) => {
    const task = ctx.params.task;
    const response = await taskService.deleteTask(task);
    ctx.body = {
        meta: {
            status: ctx.status // fix this
        },
        data: response
    };
}
