import { Component, OnInit } from '@angular/core';
import { todoService } from 'src/app/todo-services';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  constructor(private t:todoService) { }
  list=[]
  ngOnInit() {
    this.list=this.t.getlist();
  }
  

}
