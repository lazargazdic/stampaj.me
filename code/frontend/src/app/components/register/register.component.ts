
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private router = inject(Router);
  private userService = inject(UserService);

  registerForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder){
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      contactNumber: ['', [Validators.pattern(/^\+?[0-9]*$/)]],
      address: this.fb.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        postalCode: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
        country: ['', [Validators.required]]
      })
    })
  }

  register(){
    if (this.registerForm.valid){
      this.userService.register(this.registerForm.value).subscribe({
        next: (user) => {
          this.successMessage = 'Registration successful';
          alert(JSON.stringify(user));
          this.errorMessage = null;
        },
        error: (error) => {
          if (error.status === 400){
            this.errorMessage = 'User already exists';
          }
          else{
            this.errorMessage = 'Error registering';
          }
          this.successMessage = null;
        }
      });
    }
  }

}
