import TodoActions from 'TodoActions';

describe('TodoActions', () => {
    let todoActions;

    beforeEach( () => {
        todoActions = new TodoActions();
    });

    it('should add a new todo successfully', () => {
        var descriptionText = 'New todo';
        todoActions.addTodo(descriptionText);

        var todoItems = todoActions.getAllTodos();

        expect(todoItems).toHaveLength(1);
        expect(todoItems[0].descriptionText).toEqual('New todo');
    }); 

    it('should mark todo item as complete', () => {
        var descriptionText = 'New todo';
        todoActions.addTodo(descriptionText);

        var todoItem = todoActions.getAllTodos()[0];

        todoActions.completeTodo(todoItem.id);

        expect(todoItem.isDone).toBe(true);
    });

    it('should remove todo item successfully', () => {
        var descriptionText = 'New todo';
        todoActions.addTodo(descriptionText);

        var todoItem = todoActions.getAllTodos()[0];

        todoActions.removeTodo(todoItem.id);

        expect(todoActions.getAllTodos()).toHaveLength(0);
    });
});