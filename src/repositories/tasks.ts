import { Task, ITasksAttributes } from "../models/tasks";
import { IUpdateTask } from "../interfaces/task";

export const get = async (task: string) => {
    return await Task.findOne({"task": task});
}

export const getAll = async () => {
    return await Task.find();
}

export const create = async (payload: ITasksAttributes) => {
    return await Task.create(payload);
}

export const updateTask = async (payload: IUpdateTask) => {
    return await Task.findOneAndUpdate({"task": payload.task}, {
        ...payload
    }, {});
}

export const deleteTask = async (task: string) => {
    return await Task.findOneAndDelete({'task': task});
}