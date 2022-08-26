import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  title = 'angular app'
  // products: IProduct[] = []
  loading: boolean = false
  // products$: Observable<IProduct[]>
  term = ''


  constructor(
    public productService: ProductsService,
    public modalService:ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productService.getAll().pipe(
    //   tap(()=> this.loading = false)
    // )
    this.productService.getAll().subscribe(() => {
      this.loading = false
    })
  }

}
