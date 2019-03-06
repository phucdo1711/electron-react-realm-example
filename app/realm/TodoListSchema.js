import { TODOLIST_SCHEMA, TODO_SCHEMA } from "./contants";

export default  {
    name: TODOLIST_SCHEMA, 
    primaryKey: 'id', 
    properties: {
        id: 'int', 
        name: 'string', 
        creationDate: 'date', 
        todos: {
            type: 'list', 
            objectType: TODO_SCHEMA
        }
    }
}