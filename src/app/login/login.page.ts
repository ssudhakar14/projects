import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

	loginForm: FormGroup;

	constructor(public formBuilder: FormBuilder) { 
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

}
