import React from 'react';
import TodoApp from 'TodoApp';
import TodoActions from 'TodoActions';
import { shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: TodoApp', () => {
    let todoActions;

    beforeAll( () => {
        todoActions = new TodoActions();
    });

    it('should render without crashing', () => {
        mount(<TodoApp todoActions={todoActions} />);
    });

    it('should render the header text correctly', () => {
        const todoWrapper = mount(<TodoApp todoActions={todoActions} />);
        const h2Element = todoWrapper.find('.appTitle');

        expect(h2Element.text()).toBe('Minimal Todo App built with React');
    });

    it('should show button for adding todos', () => {
        const todoWrapper = mount(<TodoApp todoActions={todoActions} />);
        const buttonElement = todoWrapper.find('.addTodo');

        expect(buttonElement).toHaveLength(1);
    });

    it('should change the text label correctly when todo buttons are clicked', () => {
        const todoWrapper = mount(<TodoApp todoActions={todoActions} />);
        const allTodoButton = todoWrapper.find('.ALL_TODOS').simulate('click');
        
        expect(allTodoButton.text()).toBe('ALL TODOS');

        const completedTodoButton = todoWrapper.find('.COMPLETED_TODOS').simulate('click');
        expect(completedTodoButton.text()).toBe('COMPLETED TODOS');

        const activeTodoButton = todoWrapper.find('.ACTIVE_TODOS').simulate('click');
        expect(activeTodoButton.text()).toBe('ACTIVE TODOS');
    });
});