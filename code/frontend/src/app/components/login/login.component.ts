import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private router = inject(Router);
  private userService = inject(UserService);

  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(){
    if (this.loginForm && this.loginForm.valid){
      this.userService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (user) => {
            alert(user);
          },
        error: (error) => {
          if (error.status === 404){
            this.errorMessage = 'User not found';
          }
          else if (error.status === 401){
            this.errorMessage = 'Incorrect password';
          }
          else{
            this.errorMessage = 'Error logging in';
          }
          },
        complete: () => {
              alert('Login successful');
              //this.router.navigate(['home']);
            }
        });
    }
  }
}

