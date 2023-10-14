import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  form:any;
  allInputsValid: boolean = false;
  createForm!: FormGroup;
  submitted = false;
  confirm: Address = {
    firstName: '',
    address:'',
    credit:0 ,
  
  };
  @Output() userInfo = new EventEmitter();
  constructor( private route: Router , private cartService:CartService) {
    this.confirm = {
      firstName: '',
      address:'',
      credit: 0,
    };

  }

  ngOnInit() {}
  // checkAllInputsValid() {
  //   this.allInputsValid = this.form.valid;
  // }

  onSubmit(data: Address) {
    // if (this.allInputsValid) {
      this.confirm = data;
      alert(`Thanks for the order ${data.firstName}!`);
      this.cartService.clearCartProduct();
      this.route.navigate(['success']);
   
        // } else {
        //   alert('There is somthing wrong with your');
        // }

  }

  // get firstName() {
  //   return this.createForm.get('firstName');
  // }
  // get address() {
  //   return this.createForm.get('address');
  // }
  // get credit() {
  //   return this.createForm.get('credit');
  // }

  OnlyNumbersAllowed(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    else return true;
  }

}
