import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/product/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { take } from 'rxjs/operators';
import { MyValidators } from 'src/app/utils/validators/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productSer: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {
    this.buildForm();
   }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) =>{
      this.id = params.id.toString();
      this.productSer.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  saveProduct(event: Event) {
    if (this.form.valid) {
      const product = this.form.value;
      this.productSer.updateProduct(this.id, product).pipe(take(1)).subscribe((newProduct) => {
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
