var uuid = require('uuid');
  
export default class Todo {
    constructor (descriptionText, isDone, id) {
        this.descriptionText = descriptionText || '';
        this.isDone = isDone || false;
        this.id = id || uuid();
    }
}