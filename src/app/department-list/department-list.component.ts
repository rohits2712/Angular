import { Component, OnInit } from '@angular/core';
import { department } from 'src/department';
import{Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department list</h3>
    <ul class= "items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class= "badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
 departments:department[] = [
  {
    id:1,
    name:'Angular'  
  },
  {
    id:2,
    name:'C#'
  },
  {
    id:3,
    name:'.NET'
  },
]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect(department){
    this.router.navigate(['/departments', department.id]) //pass linked  parameter array  
  }

}
