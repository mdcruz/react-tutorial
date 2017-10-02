import React from 'react';
import TodoApp from 'TodoApp';
import TodoActions from 'TodoActions';
import VisibleTodoList from 'VisibleTodoList';
import SingleTodo from 'SingleTodo';
import renderer from 'react-test-renderer';

describe('TodoApp component', () => {
    it('should render correctly', () => {
        const todoActions = new TodoActions();
        const rendered = renderer.create(<TodoApp todoActions={todoActions} />);
    
        expect(rendered.toJSON()).toMatchSnapshot();
    })
})

describe('SingleTodo component', () => {
    it('should render correctly', () => {
        const rendered = renderer.create(<SingleTodo />);
        expect(rendered.toJSON()).toMatchSnapshot();
    })
})

describe('VisibleTodoList component', () => {
    it('should render correctly', () => {
        const todoActions = new TodoActions();
        const rendered = renderer.create(<VisibleTodoList 
            visibleTodos = {todoActions.getAllTodos()}
            visibilityFilter = "test filter" />);
    
        expect(rendered.toJSON()).toMatchSnapshot();
    })
})