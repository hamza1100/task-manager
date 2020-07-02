import { ITasksAttributes } from "../models/tasks";


export const getProperties = async (properties: any) => {
    let availableProperties: {} = {};
    const index = 0;
    // console.log('properties' ,properties);
    const pp = Object.assign({}, properties);
    console.log('pp', pp);

    for (const property of pp) {
        if (!property) {
            delete pp[property];
        }
    }

    console.log('after processing properties:', pp);


    // for(let property of properties) {
    //     console.log('property: ', property);
    // }
    return {};
}