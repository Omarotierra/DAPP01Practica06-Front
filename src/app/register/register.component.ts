import { Component } from '@angular/core';
import { EmpleadosService } from '../service/empleados.service';
import { Empleado } from '../service/empleado.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  empleado: Empleado = { nombre: '', direccion: '', telefono: '', email: '', password: '' };
  errorMessage: string | null = null;
  showPassword: boolean = false;

  constructor(private empleadosService: EmpleadosService, private router: Router) { }

  registerEmpleado(): void {
    this.empleadosService.registerEmpleado(this.empleado).subscribe(
      () => {
        this.resetForm();
        this.router.navigate(['/login']); 
      },
      error => {
        this.errorMessage = 'Error al registrar empleado';
      }
    );
  }

  resetForm(): void {
    this.empleado = { nombre: '', direccion: '', telefono: '', email: '', password: '' };
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }
}
