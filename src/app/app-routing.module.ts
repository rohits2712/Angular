import{NgModule} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
    // {path:'', component:DepartmentListComponent},//setting default
    {path:'', redirectTo:'/departments', pathMatch:'full'},
    {path:'departments', component:DepartmentListComponent},
    {path:'departments/:id', 
        component:DepartmentDetailComponent,
        children:[
            {path:'overview', component:DepartmentOverviewComponent},
            {path:'contact', component:DepartmentContactComponent}

        ]
    },
    {path:'employeelist', component:EmployeeListComponent},
    {path:'**', component:PageNotFoundComponent},
//wild card route to be always at the end
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents =[DepartmentListComponent,
    EmployeeListComponent,DepartmentDetailComponent,PageNotFoundComponent,DepartmentContactComponent,DepartmentOverviewComponent]; 
//Exporting as we dont want the route imports line above DepartmentListComponent, EmployeeListComponent
// Then in app module we import it, Recommended good practice.
//  Now anytime we add new component for routing, we just need to specify in routingcomponents

