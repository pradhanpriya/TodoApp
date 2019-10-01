import { Injectable } from "@angular/core";
@Injectable()

export class todoService{
    list=[]
    additem(item){
        this.list.push(item);
    }
    
    getlist(){
        return this.list;
    }
    delTodo(todo){
        this.list.splice(todo);
    }
}