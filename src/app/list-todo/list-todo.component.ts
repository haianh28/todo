import { Component, OnInit } from '@angular/core';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {


  // todo={
  //   id:'1',
  //   decription:'chào các bạn'
  // }
  listTodo = [
   new Todo(1, "xin chào mọi người ",false,new Date()),
   new Todo(2, "xin chào mọi người ",false,new Date()),
   new Todo(3, "xin chào mọi người ",false,new Date()),
   new Todo(4, "xin chào mọi người ",false,new Date()),
   new Todo(5, "xin chào mọi người ",false,new Date()),
   new Todo(6, "xin chào mọi người ",false,new Date())
  ]
  constructor() { }

  ngOnInit() {
  }

}
