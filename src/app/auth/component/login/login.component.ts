import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginRequest, LoginResponse } from '../../models/login.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    email = '';
    password = '';
    
    constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
    ) {}

    login(): void {
      const payload: LoginRequest = {
        email: this.email,
        password: this.password
      }

      this.authService.login(payload).subscribe({
        next: (response: LoginResponse) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/users']);
        },
        error: (err) => {
          console.error('erreur', err);
        }
      })
    }
  
}
