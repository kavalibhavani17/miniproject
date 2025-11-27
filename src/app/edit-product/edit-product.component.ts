import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  productForm!: FormGroup;
  id: string = "";

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) {

    // Create form
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      discountPrice: [''],
      description: ['']
    });

    // Get Product ID
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id) {
        this.loadProduct();
      }
    });
  }

  loadProduct() {
    this.dashboardService.getProduct(this.id).subscribe((res: any) => {
      this.productForm.patchValue(res.data);
    });
  }

  submit() {
    if (this.id) {
      this.dashboardService.updateProducts(this.productForm.value, this.id)
        .subscribe(() => alert("Updated successfully"));
    }
  }
}
