// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todosActions from '../actions/todos';

type Props = {
  todos: Array,
  getTodoLists: Function,
  createNewTodoList: Function
};

class HomePage extends Component<Props> {
  props: Props;

  componentDidMount(){
    this.props.getTodoLists()
  }

  insert = () => {
    const id = Math.floor(Date.now() / 1000)
    const data = {
      id,
      name: 'TODO' + id,
      creationDate: new Date()
    }
    this.props.createNewTodoList(data)
  }
  
  render() {

    const {todos } = this.props;
    console.log(todos)
    return (
      <div><button onClick={this.insert} >insert</button></div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(todosActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
