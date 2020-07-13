import * as mongoose from 'mongoose';


const db_link = "mongodb://mongo:27017/tasks";

mongoose.connect(db_link, (err) => {
    if (err) {
        console.error("Error occurred while connecting to DB!");
    }
    else
        console.log("Database connection established successfully");
});

export default mongoose;