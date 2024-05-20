import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../service/empleados.service';
import { Empleado } from '../service/empleado.model';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];
  empleado: Empleado = { nombre: '', direccion: '', telefono: '', email: '', password: '' };
  empleadoClave: number | null = null;
  empleadoDetail: Empleado | null = null;
  errorMessage: string | null = null;

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.loadEmpleados();
  }

  loadEmpleados(): void {
    this.empleadosService.getEmpleados().subscribe(data => {
      this.empleados = data;
      console.log(this.empleados);
    });
  }

  addEmpleado(): void {
    this.empleadosService.addEmpleado(this.empleado).subscribe(
      () => {
        this.loadEmpleados();
        this.resetForm();
      },
      error => {
        this.errorMessage = 'Error al añadir empleado';
      }
    );
  }

  deleteEmpleado(id: number): void {
    this.empleadosService.deleteEmpleado(id).subscribe(() => {
      this.loadEmpleados();
    });
  }
/*
  buscarEmpleado(): void {
    if (this.empleadoClave !== null) {
      this.empleadosService.getEmpleado(this.empleadoClave).subscribe(
        data => {
          this.empleadoDetail = data;
        },
        error => {
          this.errorMessage = 'Empleado no encontrado';
          this.empleadoDetail = null;
        }
      );
    }
  }
*/
  buscarEmpleado(): void {
    if (this.empleadoClave !== null) {
      this.empleadosService.getEmpleado(this.empleadoClave).subscribe(
        data => {
          this.empleados = [data]; // Solo el registro buscado se agrega a la matriz empleados
          this.errorMessage = null; // Limpiar el mensaje de error si lo hay
        },
        error => {
          this.errorMessage = 'Empleado no encontrado';
          this.empleados = []; // Limpiar la matriz empleados si hay un error
        }
      );
    }
  }
  
  resetTable(): void {
    this.loadEmpleados();
    this.empleadoDetail = null; // Limpiar el detalle del empleado si está visible
    this.errorMessage = null; // Limpiar cualquier mensaje de error
  }
  

  resetForm(): void {
    this.empleado = { nombre: '', direccion: '', telefono: '', email: '', password: '' };
  }
}
