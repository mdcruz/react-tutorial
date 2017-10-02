import Todo from 'TodoObject'

describe('Todo object', () => {
    it('should create a Todo object correctly', () => {
        const newTodo = new Todo('test todo');
        expect(newTodo.descriptionText).toBe('test todo');
        expect(newTodo.isDone).toBe(false);
    }); 
});