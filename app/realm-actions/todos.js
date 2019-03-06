import realm from '../realm';
import { TODOLIST_SCHEMA } from '../realm/contants';

export const queryAllTodoLists = () => new Promise((resolve, reject) => {
    realm().then(rm => {
        const allTodoLists = rm.objects(TODOLIST_SCHEMA);
        resolve(Array.from(allTodoLists))
    }).catch(error => reject(error))
})

export const insertNewTodoList = (newTodoList) => new Promise((resolve, reject) => {
    realm().then(rm => {
        rm.write(() => {
            rm.create(TODOLIST_SCHEMA, newTodoList);
            resolve(newTodoList);
        }) 
    }).catch(err => reject(err))
})