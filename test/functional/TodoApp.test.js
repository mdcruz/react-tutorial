
suite('Todo Application', function () {
    test('should add a new todo item', function () {
        browser.url('/')
            .setValue('.todoField', 'New todo item')
            .click('#addTodoButton')
            .element('<label>')
            .getText()
            .should.be.equal('New todo item');
    })

    test('should mark a todo item as complete', function () {
        browser.url('/')
            .setValue('.todoField', 'New todo item')
            .click('#addTodoButton')
            .click('[type="checkbox"]')
            .click('.COMPLETED_TODOS')
            .element('<label>')
            .getText()
            .should.be.equal('New todo item');
            
       browser.click('.ACTIVE_TODOS')
            .element('<li>')
            .getText()
            .should.be.equal('Nothing to see here');
    })

    test('should delete a todo item successfully', function () {
        browser.url('/')
            .setValue('.todoField', 'New todo item')
            .click('#addTodoButton')
            .click('#deleteButton')
            .element('<li>')
            .getText()
            .should.be.equal('Nothing to see here');
    })
})