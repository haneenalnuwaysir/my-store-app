import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  createForm!: FormGroup;
  submitted = false;
  @Output() userInfo = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required]],
      credit: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.userInfo.emit(this.createForm.value);
  }

  get firstName() {
    return this.createForm.get('firstName');
  }
  get address() {
    return this.createForm.get('address');
  }
  get credit() {
    return this.createForm.get('credit');
  }

  OnlyNumbersAllowed(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    else return true;
  }

}
