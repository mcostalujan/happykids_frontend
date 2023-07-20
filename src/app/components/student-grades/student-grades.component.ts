import { AlumnoCapacidadService } from './../../service/alumno-capacidad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoNotaCapaDTO } from 'src/app/dto/alumnoNotaCapaDTO';
import { DetalleAlumnoCapacidad } from 'src/app/dto/detalleAlumnoCapacidad';
import { DetalleAlumnoCompetencia } from 'src/app/dto/detalleAlumnoCompetencia';
import { DetalleAlumnoPorClase } from 'src/app/dto/detalleAlumnosPorClase';
import { AlumnoCompetenciaService } from 'src/app/service/alumno-competencia.service';
import { AlumnoProgresoService } from 'src/app/service/alumnoProgreso.service';

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.css']
})
export class StudentGradesComponent implements OnInit{

  public alumnoActual: DetalleAlumnoPorClase;
  public detallesAlumnoCapacidadActual: DetalleAlumnoCapacidad[];
  public detallesAlumnoCompetenciaActual: DetalleAlumnoCompetencia[];
  public idAlumnoActual: string;
  public idClaseActual: string;
  public idAcompeActual: string;
  public modalOpened: boolean;
  public descCompe: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alumnoProgresoService: AlumnoProgresoService,
    private alumnoCompetenciaService: AlumnoCompetenciaService,
    private alumnoCapacidadService: AlumnoCapacidadService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.modalOpened = false;
      // console.log('param => ', params['idClase']);
      // this.openGradingModal('');
      this.alumnoActual = new DetalleAlumnoPorClase();
      this.alumnoActual.var1NameAlum = '';
      this.idClaseActual = params['idClase'];
      this.idAlumnoActual = params['idAlum'];
      this.getDetalleAlumnoPorClase();
      this.getDetalleACompeByIdClaseAndIdAlumno();
      // console.log(this.idClaseActual);
    });
  }

  ///prueba
  public exportarBarChartNumUsuByGrado(): void {
    this.alumnoProgresoService
      .exportarInformeAcademicoAlumno('','')
      .subscribe((response) => {
        const blob = new Blob([response.body], { type: 'application/octet-stream' });
        var downloadURL = window.URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = downloadURL;
        link.download = 'InformeAcademicoAnual.docx';
        link.click();
      });
  }




  public goToAssignedCourses() {
    this.router.navigate(['/assigned-courses']);
  }

  public getDetalleACompeByIdClaseAndIdAlumno(): void {
    this.alumnoCompetenciaService
      .getDetalleACompeByIdClaseAndIdAlumno(this.idClaseActual, this.idAlumnoActual)
      .subscribe((response: DetalleAlumnoCompetencia[]) => {
        this.detallesAlumnoCompetenciaActual = response;
        // console.log(this.detallesAlumnoCompetenciaActual);
      });
  }

  public getDetalleAlumnoPorClase(): void {
    this.alumnoProgresoService
      .getDetalleAlumnoByIdClaseAndIdAlumno(this.idClaseActual, this.idAlumnoActual)
      .subscribe((response: DetalleAlumnoPorClase) => {
        this.alumnoActual = response;
        // console.log(this.alumnoActual);
      });
  }

  public getDetalleCapacidadesAcompe(): void {
    // console.log(this.idAcompeActual);
    this.alumnoCapacidadService
      .getDetalleCapacidadPorAcompe(this.idAcompeActual)
      .subscribe((response: DetalleAlumnoCapacidad[]) => {
        this.detallesAlumnoCapacidadActual = response;
        // console.log(this.detallesAlumnoCapacidadActual);
      });
  }

  public manageGrades(idAlum: string): void {
    this.router.navigate(['/students-grades'], {
      queryParams: { idAlum: idAlum }
      // ,skipLocationChange: true
    });
  }


  public openGradingModal(descCompe: string, idAcompe: string): void {
    this.idAcompeActual = idAcompe;
    this.descCompe = descCompe;
    // console.log(this.idAcompeActual);
    this.getDetalleCapacidadesAcompe();
    this.clickButton('openCapacidadesModal');
  }

  private clickButton(buttonId: string): void {
    this.modalOpened = true;
    document.getElementById(buttonId).click();
  }



    public updateNotaCapa(): void {

      for (let detalleAlnocTemp of this.detallesAlumnoCapacidadActual) {
        console.log('ALNOC TEMP => ' + detalleAlnocTemp);
        this.alumnoCapacidadService
        .updateNotaCapa(detalleAlnocTemp.idAcompe,
           detalleAlnocTemp.idCapacidad,
           detalleAlnocTemp.notaCapacidad)
        .subscribe((response: AlumnoNotaCapaDTO) => {
          // console.log(response);
        });
      }
      // this.clickButton('openCapacidadesModal');
  }

}
