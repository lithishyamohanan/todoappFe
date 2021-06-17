import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  newAct:any='';
  items:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  addTask(){
    if (this.newAct == '') {
    }
    else {
        this.items.push(this.newAct);
        this.newAct = '';
    }
  }
  deleteTask(index:any){
    this.items.splice(index, 1);
  }
}
