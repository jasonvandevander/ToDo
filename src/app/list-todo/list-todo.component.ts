import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { animation } from '@angular/animations';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: Boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos: Todo[] | any  
    //= [
    //   new Todo(1, 'Learn to Dance', false, new Date()),
    //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
    //   new Todo(3, 'Visit Florida', false, new Date())
    //   // {id : 1 , description : },
    //   // {id : 2 , description : },
    //   // {id : 3 , description : 'Visit Florida'}
    // ] 
    // todo = {
    //   id : 1,
    //   description: 'Learn to Dance'
    // }
    //= [
    //   new Todo(1, 'Learn to Dance', false, new Date()),
    //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
    //   new Todo(3, 'Visit Florida', false, new Date())
    //   // {id : 1 , description : },
    //   // {id : 2 , description : },
    //   // {id : 3 , description : 'Visit Florida'}
    // ] 
    // todo = {
    //   id : 1,
    //   description: 'Learn to Dance'
    // }
    

    //= [
    //   new Todo(1, 'Learn to Dance', false, new Date()),
    //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
    //   new Todo(3, 'Visit Florida', false, new Date())
    //   // {id : 1 , description : },
    //   // {id : 2 , description : },
    //   // {id : 3 , description : 'Visit Florida'}
    // ] 
    // todo = {
    //   id : 1,
    //   description: 'Learn to Dance'
    // }

//= [
//   new Todo(1, 'Learn to Dance', false, new Date()),
//   new Todo(2, 'Become an Expert at Angular', false, new Date()),
//   new Todo(3, 'Visit Florida', false, new Date())
//   // {id : 1 , description : },
//   // {id : 2 , description : },
//   // {id : 3 , description : 'Visit Florida'}
// ] 

// todo = {
//   id : 1,
//   description: 'Learn to Dance'
// }

constructor(private todoService:TodoDataService) { }

ngOnInit() {
  this.todoService.retrieveAllTodos('Jason').subscribe(response => {console.log(response); this.todos = response;})
}

}


