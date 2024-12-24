import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private _router:Router, private _AuthService:AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this._AuthService.Login(username, password).subscribe(
        res => {
          console.log("res",res);
          if (res.code !== null) {
            this._AuthService.saveSession(res);  // Almacenar el token y datos
            this._router.navigateByUrl('/layout');
          } else {
            Swal.fire('Error', res.message, 'error');
          }
        },
        error => {
          Swal.fire('Error', error, 'error');
        }
      );
    }
  }
}

