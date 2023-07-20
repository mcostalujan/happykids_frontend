import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedClassesComponent } from './components/assigned-classes/assigned-classes.component';
import { AssignedCoursesComponent } from './components/assigned-courses/assigned-courses.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchClassesComponent } from './components/search-classes/search-classes.component';
import { EnrolledStudentsComponent } from './components/enrolled-students/enrolled-students.component';
import { StudentGradesComponent } from './components/student-grades/student-grades.component';
import { InformeAcademicoComponent } from './components/report/informe-academico/informe-academico.component';
import { ListadoAlumnosIaaComponent } from './components/listado-alumnos-iaa/listado-alumnos-iaa.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'enrolled-students', component: EnrolledStudentsComponent},
  { path: 'reporte/informe-academico', component: InformeAcademicoComponent},
  { path: 'reporte/informe-academico/listado', component: ListadoAlumnosIaaComponent},
  { path: 'students-grades', component: StudentGradesComponent},
  { path: 'student-registration', component: StudentRegistrationComponent},
  { path: 'assigned-classes', component: AssignedClassesComponent},
  { path: 'search-classes', component: SearchClassesComponent},
  { path: 'assigned-courses', component: AssignedCoursesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
