import {Todo} from './todo';

export class App {
  constructor() {
    this.message = 'To Do List!';
    this.todoList = [];
    this.todoList.push(new Todo('Clean my room'));
    this.todoList.push(new Todo('Walk the dog'));
    this.todoList.push(new Todo('Take thrash out'));
    this.newItem = '';
  }
  addTodo = () => {
    if (this.newItem !== '') {
      this.todoList.push(new Todo(this.newItem));
    }
    this.newItem = '';
  }
  removeItem = (todo) => {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }
}
