import { TaskAttributes } from "../models/tasks";
import { IUpdateTask } from "../interfaces/task";
import { Models } from "../models";

export const get = async (task: string) => {        // can be changed from task string to uID if front-end is created
    return await  Models.Task.findOne({
        where: {
            task: task
        }
    });
}

export const getAll = async () => {
    return await Models.Task.findAll();
}

export const create = async (payload: TaskAttributes) => {
    return await Models.Task.create(payload);
}

export const updateTask = async (payload: IUpdateTask) => {
    return await Models.Task.update({
        isActive: payload.isActive, 
    }, { where: {
        task: payload.task
        }
    });
}

export const deleteTask = async (task: string) => {
    return await Models.Task.destroy({
        where : {
            task: task
        } 
    })
}