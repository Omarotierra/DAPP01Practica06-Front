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
  empleadoSelected: Empleado | null = null;
  showPassword: boolean = false;

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

  deleteEmpleado(clave: number): void {
    this.empleadosService.deleteEmpleado(clave).subscribe(() => {
      this.loadEmpleados();
    });
  }

 
  buscarEmpleado(): void {
    if (this.empleadoClave !== null) {
      this.empleadosService.getEmpleado(this.empleadoClave).subscribe(
        data => {
          this.empleados = [data];
          this.errorMessage = null;
        },
        error => {
          this.errorMessage = 'Empleado no encontrado';
          this.empleados = [];
        }
      );
    }
  }
  
  resetTable(): void {
    this.loadEmpleados();
    this.resetForm();
    this.empleadoDetail = null;
    this.errorMessage = null;
    this.empleadoClave = null;
    this.empleadoSelected= null;
  }


  resetForm(): void {
    this.empleado = { nombre: '', direccion: '', telefono: '', email: '', password: '' };
  }

  selectEmpleado(clave: number, empleado: Empleado): void {
    this.empleadoSelected = { 
      clave: clave,
      nombre: empleado.nombre,
      direccion: empleado.direccion,
      telefono: empleado.telefono,
      email: empleado.email
    };
    this.empleado = { ...this.empleadoSelected };
  }

  updateEmpleado(clave: number): void { 
      this.empleadosService.updateEmpleado(clave, this.empleado).subscribe(
        () => {
          this.loadEmpleados();
          this.resetForm();
          this.empleadoSelected = null;
        },
        error => {
          this.errorMessage = 'Error al actualizar empleado';
        }
      );
  }
  

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }
}
