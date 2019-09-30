import { Injectable } from "@angular/core";
@Injectable()

export class todoService{
    list=[]
    static  n=0;
    additem(item){
        this.list.push(item);
        todoService.n=todoService.n+1;
    }
    
    getlist(){
        return this.list;
    }
    getlen(){
        return todoService.n;
    }
}