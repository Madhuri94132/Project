import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  Product } from '../product';
import { Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
@Input() products:Product | undefined;
@Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
