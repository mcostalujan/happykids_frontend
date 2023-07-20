import { AlumnoProgresoService } from './../../service/alumnoProgreso.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleAlumnoReporteAnual } from 'src/app/dto/detalleAlumnoReporteAnual';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-listado-alumnos-iaa',
  templateUrl: './listado-alumnos-iaa.component.html',
  styleUrls: ['./listado-alumnos-iaa.component.css']
})
export class ListadoAlumnosIaaComponent implements OnInit{

  public alumnos: DetalleAlumnoReporteAnual[];
  public idNivelActual: string;
  public idGradoActual: string;
  public idSeccionActual: string;
  public yearActual: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alumnoService: AlumnoService,
    private alumnoProgresoService :AlumnoProgresoService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // console.log('param => ', params['idClase']);
      this.idNivelActual = params['idNivel'];
      this.idGradoActual = params['idGrado'];
      this.idSeccionActual = params['idSeccion'];
      this.yearActual = params['year'];

      this.getDetalleAlumnosReporteAnual();
      // console.log(this.idClaseActual);
    });
  }


  public getDetalleAlumnosReporteAnual(): void {
    this.alumnoService
      .getAlumnosByParamsReporteAnual(this.idNivelActual, this.idGradoActual, this.idSeccionActual, this.yearActual)
      .subscribe((response: DetalleAlumnoReporteAnual[]) => {
        this.alumnos = response;
        // console.log(this.alumnos);
      });
  }

  public exportReporteAnual(idAlum: string): void {
    this.alumnoProgresoService
      .exportarInformeAcademicoAlumno(idAlum, this.yearActual)
      .subscribe((response) => {
        const blob = new Blob([response.body], { type: 'application/octet-stream' });
        var downloadURL = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = downloadURL;
        link.download = 'InformeAcademicoAnual.docx';
        link.click();
      });
  }

}
