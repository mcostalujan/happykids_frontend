import { PeriodoService } from './../../../service/periodo.service';
import { SeccionService } from './../../../service/seccion.service';
import { GradoService } from './../../../service/grado.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradoDisponibleDTO } from 'src/app/dto/gradoDisponibleDTO';
import { NivelDisponibleDTO } from 'src/app/dto/nivelDisponibleDTO';
import { SeccionDiponibleDTO } from 'src/app/dto/seccionDisponibleDTO';
import { NivelService } from 'src/app/service/nivel.service';

@Component({
  selector: 'app-informe-academico',
  templateUrl: './informe-academico.component.html',
  styleUrls: ['./informe-academico.component.css']
})
export class InformeAcademicoComponent implements OnInit{

  public niveles: NivelDisponibleDTO[];
  public grados: GradoDisponibleDTO[];
  public secciones: SeccionDiponibleDTO[];
  public years: String[];

  public idNivelActual: string;
  public idGradoActual: string;
  public idSeccionActual: string;
  public yearActual: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nivelService: NivelService,
    private gradoService: GradoService,
    private seccionService: SeccionService,
    private periodoService: PeriodoService
  ) {}

  ngOnInit(): void {
    this.niveles = [];
    this.grados = [];
    this.secciones = [];
    this.idNivelActual = '';
    this.idGradoActual = '';
    this.idSeccionActual = '';
    this.yearActual = '';
    this.loadNiveles();
    this.loadYears();
  }


  public loadYears():void{
    this.periodoService
    .getYearsDisponibles()
    .subscribe((response: String[]) => {
      this.years = response;
      console.log(this.years);
    });
  }

public loadNiveles():void{
  this.nivelService
  .getNivelesDisponibles()
  .subscribe((response: NivelDisponibleDTO[]) => {
    this.niveles = response;
    console.log(this.niveles);
  });
}

public loadGradosByNivel(): void {

  this.secciones = [];
  this.idSeccionActual = '';
  this.gradoService
    .getGradosDisponiblesByNivel(this.idNivelActual)
    .subscribe((response: GradoDisponibleDTO[]) => {
      this.grados = response;
      console.log(this.grados);
    });
}



public loadSeccionesByGradoAndNivel(): void {
  this.seccionService
    .getSeccionesDisponiblesByNivelAndGrado(this.idNivelActual, this.idGradoActual)
    .subscribe((response: SeccionDiponibleDTO[]) => {
      this.secciones = response;
      console.log(this.secciones);
    });
}

public manageEstudiantesByNivelGradoSecciYear():void{
  console.log(this.idNivelActual);
  console.log(this.idGradoActual);
  console.log(this.idSeccionActual);
  console.log(this.yearActual);

  this.router.navigate(['/reporte/informe-academico/listado'], {
    queryParams: { idNivel: this.idNivelActual,
      idGrado: this.idGradoActual,
      idSeccion: this.idSeccionActual,
      year: this.yearActual,
    }
    // ,skipLocationChange: true
  });

}



}
