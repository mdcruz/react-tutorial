import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from 'TodoApp';
import TodoActions from 'TodoActions';
import { shallow, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Component: TodoApp', () => {
    const todoActions = new TodoActions();

    it('should match its empty snapshot', () => {
        mount(<TodoApp todoActions={todoActions} />);
    });
});