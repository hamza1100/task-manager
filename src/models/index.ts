import * as Sequelize from 'sequelize';
import * as tasks from './tasks';

const sequelize = new Sequelize('tasks', 'postgres', '10pearls', {
    host: 'localhost', // check this for docker
    dialect: 'postgres'
});

try {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully');
    });
} catch (error) {
    console.error('Unable to Connect to the database')
}

interface IModels extends Sequelize.Models {
    Task: tasks.TaskModel
}

export const Models: IModels = {
    Task: tasks.define(sequelize)
}

syncTaskTable();

async function syncTaskTable() {
    await Models.Task.sync();
}

export const Database: Sequelize.Sequelize = sequelize;
