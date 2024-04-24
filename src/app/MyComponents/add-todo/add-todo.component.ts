import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  desc:any;
  title: any;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();  

  constructor(){}

  ngOnInit(): void{
  }
  onSubmit(){
    const todo = {
      sno : 8,
      title:this.title,
      desc: this.desc,
      active:true
    }
    this.title=''
    this.desc=''
    this.todoAdd.emit(todo);
  }
}
