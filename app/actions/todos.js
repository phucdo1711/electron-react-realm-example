// @flow
import type { GetState, Dispatch } from '../reducers/types';
import { queryAllTodoLists, insertNewTodoList} from '../realm-actions/todos';

export const GET_TODOLISTS = 'GET_TODOLISTS';
export const NEW_TODOLIST = 'NEW_TODOLIST';

export function getTodoLists() {
  return async (dispatch: Dispatch) => {
    try {
      const todoLists = await queryAllTodoLists();
      dispatch({
        type: GET_TODOLISTS,
        todoLists
      })
    } catch (error) {
      return
    }
  };
}


export const createNewTodoList = (newTodoList) => async (dispatch) => {
  console.log(newTodoList)
  try {
    const rs = await insertNewTodoList(newTodoList)
    return dispatch({
      type: NEW_TODOLIST,
      newTodoList
    })
  } catch (error) {
    console.log(error.message)
     return 
  }
}