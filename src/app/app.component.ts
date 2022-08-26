import {Component, OnInit} from '@angular/core';
import {IProduct} from "./modules/product";
import {ProductsService} from "./services/products.service";
import {products} from "./data/products";
import {Observable, tap} from "rxjs";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
