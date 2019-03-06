import Realm from 'realm'
import Todo from './TodoSchema'
import TodoList from './TodoListSchema';

const databaseOptions = {schema: [Todo, TodoList]}

export default () => Realm.open(databaseOptions)