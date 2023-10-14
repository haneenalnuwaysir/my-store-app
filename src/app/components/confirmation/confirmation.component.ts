import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/model/address';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name!: string | null;
  totals!: number;
  confirm: Address = {
    firstName: '' ,
    address:'',
    credit:0,

  };
  constructor(private route: ActivatedRoute, private cartService: CartService) {}
  ngOnInit(): void {
    this.confirm = this.cartService.getAddress();
    // this.confirm.firstName ;
    // this.name = this.confirm.firstName;
    // this.route.paramMap.subscribe((params) => {
    //   this.name = params.get('firstName');
    // //   this.totals = Number(params.get('totals'));
    // });
  }

}
