import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'
import TodoActions from './library/TodoActions'

const todoActions = new TodoActions();

ReactDOM.render(<TodoApp todoActions={todoActions}/>, document.getElementById('app'))