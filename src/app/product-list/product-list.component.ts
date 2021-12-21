import { Component, OnInit } from '@angular/core';
import { product } from '.././product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products = product; 
 share(){
   window.alert('This product has been Shared');
 }
 onNotify() {
  window.alert('You will be notified when the product goes on sale');
}
  constructor() { }

  ngOnInit(): void {
  }

}
