import { Component, OnInit } from '@angular/core';
import { todoService } from 'src/app/todo-services';



@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit{

  constructor(private t:todoService) { }
  item=" "
  show(){
    this.t.additem(this.item);
    
  }
  ngOnInit() {
  }

}
