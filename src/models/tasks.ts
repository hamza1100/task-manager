import * as Sequelize from 'sequelize';
import * as DataTypes from 'sequelize';

export interface TaskAttributes {
    task: string;
    description: string;
    isActive: boolean;
    isDeleted: boolean;
}

export interface TaskInstance extends Sequelize.Instance<TaskAttributes> {
    task: string;
    description: string;
    isActive: boolean;
    isDeleted: boolean;
}

export interface TaskModel extends Sequelize.Model<TaskInstance, TaskAttributes> { }

export function define(conn: Sequelize.Sequelize): TaskModel {
    return conn.define('Task', {
        task: DataTypes.STRING,
        description: DataTypes.STRING,
        isActive: DataTypes.BOOLEAN,
        isDeleted: DataTypes.BOOLEAN
    });
}
