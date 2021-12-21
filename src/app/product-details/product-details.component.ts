import { Component, OnInit } from '@angular/core';
import { Product,product } from '../product';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  Produc : any = product ;
  constructor( private route: ActivatedRoute,private crtservice:CartService) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.Produc = product.find(prod => prod.id === productIdFromRoute);
  }

  addToCart(product:Product ) {
    this.crtservice.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
