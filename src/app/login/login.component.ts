import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted;
  myForm: FormGroup;
  error: boolean;
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.myForm = this.fb.group(
      {
        username: ['', Validators.required],
        pwd: ['', [Validators.required, Validators.minLength(6)]],
      }
    );
  }

  _formSubmit() {
    this.submitted = true;
    let user = this.myForm.value
    if (this.myForm.invalid) {
      return;
    }
    console.log(user)
    this.authService.login(user.username, user.pwd).subscribe(
      value => {
        if (!value) {
          this.error = true
          return
        }
        localStorage.setItem("login", "true")
        this.router.navigate(['./order-confirmation']);
      }
    )
  }

}
