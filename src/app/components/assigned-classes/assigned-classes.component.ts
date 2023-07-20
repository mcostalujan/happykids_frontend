import { ClaseDocenteService } from './../../service/clase-docente.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleClaseDto } from 'src/app/dto/detalleClase';
import { DetalleClasesDocente } from 'src/app/dto/detalleClasesDocente';
import { ClaseService } from 'src/app/service/clase.service';

import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-assigned-classes',
  templateUrl: './assigned-classes.component.html',
  styleUrls: ['./assigned-classes.component.css'],
})
export class AssignedClassesComponent implements OnInit{
  title = 'Card View Demo';
  docenteName: string;

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }


  public clases: DetalleClasesDocente[];

  constructor(private router: Router, private claseDocenteService: ClaseDocenteService) {}

  ngOnInit(): void {
    this.getDetalleClasesDocente();
    this.docenteName = '';
  }

  public getDetalleClasesDocente(): void {
    this.claseDocenteService
      .getDetalleClasesDocente('','')
      .subscribe((response: DetalleClasesDocente[]) => {
          this.clases = response;
          this.docenteName = this.clases[0].val1NameDoc + ' ' +
                              this.clases[1].valLastMatDoc + ' ' +
                              this.clases[0].valLastPatDoc;
          // console.log(this.clases);
      });
  }

  public manageStudents(idClaseParam:string): void {
    // console.log(idClaseParam);
    this.router.navigate(['/enrolled-students'], {
      queryParams: { idClase: idClaseParam }
      // ,skipLocationChange: true
    });
  }

}
