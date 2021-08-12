import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { AuthService } from '../providers/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  submitted: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toast: ToastrService,
    private authService: AuthService, 
    private spinner: NgxSpinnerService
  ) {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}
  authUser() {
    this.submitted = true;
    console.log(this.authForm);
    // this.spinner.show();
    // stop here if form is invalid
    if (this.authForm.invalid) {
      console.log(this.authForm.controls.email.errors);
      console.log(this.authForm.controls.password.errors);
      return;
    }
    this.spinner.show();
    this.userService
      .loginUser(
        this.authForm.controls.email.value,
        this.authForm.controls.password.value
      )
      .subscribe((data) => {
        let result: any = data;
        this.spinner.hide() ; 
        if (result.token) {
          //this.authService.setAuth(true);
          localStorage.setItem('token', result.token);
          // localStorage.setItem('fullname', result.user.fullname);
          localStorage.setItem('user', result.user);
          localStorage.setItem('admin', 'yes');
          this.authService.setIsAdmin(true);
          this.router.navigate(['/admin']);
          // this.spinner.hide();
        } else {
          this.toast.error(result.err, 'Error');
          // this.spinner.hide();
          // Swal.fire({
          //   title: "Erreur!",
          //   text: "Adresse ou mot de passe incorrecte",
          //   icon: "error",
          //   confirmButtonText: "OK",
          // });
        }

        console.log(result);
      });

    // display form values on success
  }
}
