import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleClaseDto } from 'src/app/dto/detalleClase';
import { ClaseService } from 'src/app/service/clase.service';

@Component({
  selector: 'app-search-classes',
  templateUrl: './search-classes.component.html',
  styleUrls: ['./search-classes.component.css']
})
export class SearchClassesComponent implements OnInit{
  public clases: DetalleClaseDto[];

  constructor(private router: Router, private claseService: ClaseService) {}

  ngOnInit(): void {
    this.getDetalleClases();
  }

  public goToAssignedCourses() {
    this.router.navigate(['/assigned-courses']);
  }

  public getDetalleClases(): void {
    this.claseService
      .getDetalleClases()
      .subscribe((response: DetalleClaseDto[]) => {
          this.clases = response;
          // console.log(this.clases);
      });
  }
}
