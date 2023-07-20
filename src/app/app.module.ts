import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationModule } from './notification.module';
import { NotificationService } from './service/notification.service';
import { AssignedClassesComponent } from './components/assigned-classes/assigned-classes.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './components/body/body.component';
import { SublevelMenuComponent } from './components/sidebar/sublevel-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchClassesComponent } from './components/search-classes/search-classes.component';
import {MatChipsModule} from '@angular/material/chips';
import { EnrolledStudentsComponent } from './components/enrolled-students/enrolled-students.component';
import { StudentGradesComponent } from './components/student-grades/student-grades.component';
import { InformeAcademicoComponent } from './components/report/informe-academico/informe-academico.component';
import { ListadoAlumnosIaaComponent } from './components/listado-alumnos-iaa/listado-alumnos-iaa.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    StudentRegistrationComponent,
    AssignedClassesComponent,
    SidebarComponent,
    SublevelMenuComponent,
    DashboardComponent,
    SearchClassesComponent,
    EnrolledStudentsComponent,
    StudentGradesComponent,
    InformeAcademicoComponent,
    ListadoAlumnosIaaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotificationModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [NotificationService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
