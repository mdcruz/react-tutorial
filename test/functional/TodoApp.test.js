var expect = require('chai').expect;

describe('Todo Application', function () {
    it('should add a new todo item', function () {
        browser.url('/')
            .element('.todoField')
            .setValue('New todo item')
            .click('#addTodoButton');

        var todoValue = browser.element('<label>').getText();

        expect(todoValue).to.equal('New todo item');
    })
})