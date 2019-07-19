import{NgModule} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
    {path:'departments', component:DepartmentListComponent},
    {path:'employeelist', component:EmployeeListComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents =[DepartmentListComponent,EmployeeListComponent]; 
//Exporting as we dont want the route imports line above DepartmentListComponent, EmployeeListComponent
// Then in app module we import it, Recommended good practice.
//  Now anytime we add new component for routing, we just need to specify in routingcomponents

