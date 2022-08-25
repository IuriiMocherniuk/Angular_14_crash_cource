import {Component, OnInit} from '@angular/core';
import {IProduct} from "./modules/product";
import {ProductsService} from "./services/products.service";
import {products} from "./data/products";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular app'
  // products: IProduct[] = []
  loading: boolean = false
  products$: Observable<IProduct[]>
  term = ''


  constructor(private productService: ProductsService) {
    }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productService.getAll().pipe(
      tap(()=> this.loading = false)
    )
    // this.productService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false
    // })
  }


}
