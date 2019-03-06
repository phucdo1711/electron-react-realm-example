// @flow
import { GET_TODOLISTS, NEW_TODOLIST } from '../actions/todos';
import type { Action } from './types';

const initialState = []

export default function todos(state: Array = initialState, action: Action) {
  switch (action.type) {
      case GET_TODOLISTS: 
        return action.todoLists
      case NEW_TODOLIST: 
        return [...state, action.newTodoList]
      default:
        return state;
  }
}
