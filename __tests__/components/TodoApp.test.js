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

    it('should show form for adding todos', () => {
        const todoWrapper = mount(<TodoApp todoActions={todoActions} />);
        const formElement = todoWrapper.find('.addTodoForm');

        expect(formElement).toHaveLength(1);
        expect(formElement.instance().children).toHaveLength(2);
        expect(formElement.instance().children[0].type).toBe('text');
        expect(formElement.instance().children[1].type).toBe('submit');
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

    it('should call the change visibility onclick callback correctly', () => {
        const todoWrapper = shallow(<TodoApp todoActions={todoActions} />);
        const handleClickSpy = jest.spyOn(todoWrapper.instance(), 'changeVisibilityFilter');
        todoWrapper.find('.ACTIVE_TODOS').simulate('click');
        
        expect(handleClickSpy).toHaveBeenCalled();
        expect(handleClickSpy).toHaveBeenCalledTimes(1);
    });

    it('should call the add todo onsubmit callback correctly', () => {
        const todoWrapper = shallow(<TodoApp todoActions={todoActions} />);
        const handleClickSpy = jest.spyOn(todoWrapper.instance(), 'addTodo');
        todoWrapper.find('.addTodoForm').simulate('submit', {
            preventDefault: () => { }
        });

        expect(handleClickSpy).toHaveBeenCalled();
        expect(handleClickSpy).toHaveBeenCalledTimes(1);
    });

    it('should call the text onchange callback correctly', () => {
        const todoWrapper = shallow(<TodoApp todoActions={todoActions} />);
        const handleChangeSpy = jest.spyOn(todoWrapper.instance(), 'handleChange');
        todoWrapper.find('.todoField').simulate('change', {
            target: () => { }
        });

        expect(handleChangeSpy).toHaveBeenCalled();
        expect(handleChangeSpy).toHaveBeenCalledTimes(1);
    });
});