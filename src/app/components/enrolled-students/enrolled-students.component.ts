import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleAlumnoPorClase } from 'src/app/dto/detalleAlumnosPorClase';
import { NotificationType } from 'src/app/enum/notification-type.enum';
import { AlumnoCapacidadService } from 'src/app/service/alumno-capacidad.service';
import { AlumnoProgresoService } from 'src/app/service/alumnoProgreso.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-enrolled-students',
  templateUrl: './enrolled-students.component.html',
  styleUrls: ['./enrolled-students.component.css'],
})
export class EnrolledStudentsComponent {
  public alumnos: DetalleAlumnoPorClase[];
  public idClaseActual: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alumnoProgresoService: AlumnoProgresoService,
    private alumnoCapacidadService: AlumnoCapacidadService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // console.log('param => ', params['idClase']);
      this.idClaseActual = params['idClase'];
      this.getDetalleAlumnosPorClase();
      // console.log(this.idClaseActual);
    });
  }

  public goToAssignedCourses() {
    this.router.navigate(['/assigned-courses']);
  }

  public getDetalleAlumnosPorClase(): void {
    this.alumnoProgresoService
      .getDetalleAlumnosPorClase(this.idClaseActual)
      .subscribe((response: DetalleAlumnoPorClase[]) => {
        this.alumnos = response;
        // console.log(this.alumnos);
      });
  }

  public manageGrades(idAlum: string, idClase: string): void {
    this.router.navigate(['/students-grades'], {
      queryParams: { idClase: idClase, idAlum: idAlum }
      // ,skipLocationChange: true
    });
  }

  public managePromedioByClaseAprog(): void{
    for (let alumno of this.alumnos) {
      this.alumnoCapacidadService
      .calculoPromedioCapacidadadesPorIdClaseIdAprog(alumno.idClase.toString(), alumno.idAprog.toString())
      .subscribe((response: any[]) => {
        // console.log(response);
      });
    }
    this.sendNotification(NotificationType.SUCCESS, 'Se promediaron las notas correctamente.');
  }


  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'Ocurrió un error. Inténtalo de nuevo.');
    }
  }


  // @HostListener('window:popstate', ['$event'])
  // onPopState(event: any) {
  //   this.router.navigate(['/assigned-classes'], {
  //     skipLocationChange: true
  //   });
  // }
}
