import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.page.html',
	styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
	signUpForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private router: Router) { 
		this.signUpForm = this.formValidation();
	}

  	ngOnInit() {
  	}

  	formValidation() {
  		return this.formBuilder.group({
  			name: ['',[Validators.required]],
  			mobileNumber: ['',[Validators.required, Validators.minLength(10)]],
  			email: ['',[Validators.required]],
  			password: ['',[Validators.required, Validators.minLength(8)]],
  			confirmPassword: ['',[Validators.required, Validators.minLength(8)]]
  		})
  	}

  	createUser() {
  		if(!this.signUpForm.valid) return;
  		this.router.navigate(['/home/about']);
  	}

}
