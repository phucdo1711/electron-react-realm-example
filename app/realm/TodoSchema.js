import { TODO_SCHEMA } from "./contants";

export default {
    name: TODO_SCHEMA, 
    primaryKey: 'id', 
    properties: {
        id: 'int', 
        name: {
            type: 'string', 
            indexed: true
        }, 
        done: {
            type: 'string', 
            default: false
        }
    }
}