import { Component, OnInit } from '@angular/core';
import { department } from 'src/department';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department list</h3>
    <ul class= "items">
      <li (click)="onSelect(department)" [class.selected] = "IsSelectedId(department)" *ngFor="let department of departments">
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
public selectedId;

  constructor(private router:Router, private route:ActivatedRoute) {
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId=id;

    })

   }

  ngOnInit() {
  }
  onSelect(department){
    this.router.navigate(['/departments', department.id]) //pass linked  parameter array  
  }
  IsSelectedId(department)
  {
    return department.id == this.selectedId;
  }

}
