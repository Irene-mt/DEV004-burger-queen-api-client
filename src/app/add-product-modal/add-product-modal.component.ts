import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent {
  productForm!: FormGroup;
  messageConfirm!: string;

  constructor(
    private fb: FormBuilder,
    public products: ProductsService,

  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      type: ['', Validators.required]
    })
  }

  addProduct(){
    this.products.addProduct(this.productForm.value)
      .subscribe(
        (res) => {
          console.log(res);
          this.messageConfirm = 'Product created!'
          setTimeout(() => {
            location.reload();
          }, 2000);

        }),
      (err: Error) => {
        console.log(err);
        this.messageConfirm = 'Something went wrong!';
        this.ngOnInit();
      }
  }
}
