import Joi = require("@hapi/joi");
import { string, boolean } from "@hapi/joi";

export const createTaskSchema = Joi.object({
    task: string().required(),
    description: string().required(),
    isActive: boolean(),
    isDeleted: boolean()
});

export const updateTaskSchema = Joi.object({
    isActive: boolean().required()
});

export const getSingleTaskSchema = Joi.object({
    task: string().required()
});

export const deleteTaskSchema = Joi.object({
    task: string().required()
});