// import * as mongoose from 'mongoose';

import { Document, Model, Schema } from 'mongoose';

import mongoose from './index';

const taskSchema = new Schema({
    task: { type: String, auto: true, required: true},
    description: {type: String, required: true},
    isActive: {type: Boolean, default: true},
    isDeleted: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()}
}, {_id: true, versionKey: false, collection: 'task', });

export interface ITasksAttributes {
    task: string,
    description: string,
    isActive?: boolean,
    isDeleted?: boolean
}

export interface ITaskModel extends Document, ITasksAttributes {  }

export const Task: Model<ITaskModel> = mongoose.model('task', taskSchema);