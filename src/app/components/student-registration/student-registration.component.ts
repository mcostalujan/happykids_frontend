import { AlumnoDto } from './../../dto/alumnoDto';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { AlumnoService } from 'src/app/service/alumno.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
})
export class StudentRegistrationComponent {

  public alumnoDto: AlumnoDto;

  constructor(
    private alumnoService: AlumnoService,
    private notificationService: NotificationService,
    private router: Router) {}

  public onRegister(alumnoDto: AlumnoDto){
    // console.log(alumnoDto);
    this.alumnoService.registerAlumno(alumnoDto).subscribe(
      (response: AlumnoDto) => {
        this.sendNotification(NotificationType.SUCCESS, `Alumno registrada exitosamente`);
      },
      (errorResponse: HttpErrorResponse) => {
        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
      }
    );
  }

  public goToAssignedClasses(){
    this.router.navigate(['/assigned-classes']);
  }

  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'Ocurrió un error. Inténtalo de nuevo.');
    }
  }

}
