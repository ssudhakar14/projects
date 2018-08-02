import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { SignUpPage } from '../sign-up/sign-up.page'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

	loginForm: FormGroup;

	constructor(public formBuilder: FormBuilder, public router: Router) { 
		this.loginForm = this.formValidation();
	}

	ngOnInit() {

	}

	formValidation() {		
		return this.formBuilder.group({
			username: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(25)]],
			password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
			remember: false
	    });
	};

	submit() {
		if(!this.loginForm.valid) return;
		this.router.navigate(['/home/about']);	
	}

}
