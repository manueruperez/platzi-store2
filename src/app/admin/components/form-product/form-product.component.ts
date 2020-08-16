import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/product/products.service';
import { take } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { MyValidators } from 'src/app/utils/validators/validators';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productSer: ProductsService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit() {
  }

  saveProduct(event: Event) {
    if (this.form.valid) {
      const product = this.form.value;
      this.productSer.createProduct(product).pipe(take(1)).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/product']);
      });
    }
    event.preventDefault();
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  get priceField(){
    return this.form.get('price');
  }

}
