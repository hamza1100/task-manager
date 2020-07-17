
import * as taskRepo from '../repositories/tasks';
import { TaskAttributes } from "../models/tasks";
import { IUpdateTask } from '../interfaces/task';
import { createTaskSchema, getSingleTaskSchema, updateTaskSchema, deleteTaskSchema } from '../validations/schemas/tasks';
import * as Boom from 'boom';

export const get = async (task: string) => {
    const { error, value } = getSingleTaskSchema.validate({task: task});
    if (error) {
        return Boom.notFound(error.message);
    }
    console.log(value);
    return await taskRepo.get(value.task);
}

export const getAll = async () => {
    return await taskRepo.getAll();
}

export const create = async (payload: TaskAttributes) => {
    const { error, value } = createTaskSchema.validate(payload);
    if (error) {
        return Boom.notFound(error.message);
    }
    return await taskRepo.create(value);
}

export const updateTask = async (payload: IUpdateTask) => {
    const { error } = updateTaskSchema.validate({isActive: payload.isActive});
    if (error) {
        return Boom.notFound(error.message);
    }
    return await taskRepo.updateTask(payload);
}

export const deleteTask = async (task: string) => {
    const { error, value } = deleteTaskSchema.validate({task: task});
    if (error) {
        return Boom.notFound(error.message);
    }
    return await taskRepo.deleteTask(value.task);
}