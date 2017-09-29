import React from 'react';
import TodoApp from 'TodoApp';
import TodoActions from 'TodoActions';

import renderer from 'react-test-renderer';

test('TodoApp component renders correctly', () => {
    const todoActions = new TodoActions();
    const rendered = renderer.create(<TodoApp todoActions={todoActions} />);

    expect(rendered.toJSON()).toMatchSnapshot();
});