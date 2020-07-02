import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/tasks', {useNewUrlParser: true});

mongoose.connection.on('error', () => {
    console.log('Failed to create a connection');
});

mongoose.connection.once('open', () => {
    console.log('Connected Successfully!');
});

export default mongoose;