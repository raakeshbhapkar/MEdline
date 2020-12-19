import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-registration',
  templateUrl: './account-registration.component.html',
  styleUrls: ['./account-registration.component.scss']
})
export class AccountRegistrationComponent implements OnInit {
  public accountForm: FormGroup;
  public isFormValid = false;
  public isclick = false;
  private fromValue= null;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createAccount() {
  this.isclick = true;
   this.accountForm.markAllAsTouched();
    if (this.accountForm.valid) {
      this.isFormValid = true;
      this.fromValue = this.accountForm.value
    }
  }

  public modelCloseEmit() {
    this.isclick = false;
    this.isFormValid = false;
   
  }

  private createForm() {
     const emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    this.accountForm = this.fb.group({
      name: ['',[ Validators.required,  Validators.pattern('^[a-zA-Z ]*$')]],
      phone: ['', [Validators.required,  Validators.pattern("^[0-9]*$")]],
      ext: [''],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.pattern(emailRegEx)]]
    });
    }
  
  

}
