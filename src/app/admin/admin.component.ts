import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';   // ⭐ ADD THIS
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  products: any[] = [];
  
  deleteProduct(id:string){
    this.dashboardService.deleteProduct(id).subscribe(
    (data:any)=>{
       alert("deleted successfully");
       location.reload();
    },
    (er:any)=>{
         alert("internal server error");
    }
  )
  }


  productForm:FormGroup= new FormGroup(
    {
      name: new FormControl(),
      category: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      discountPrice: new FormControl(),
      stock: new FormControl(),
      imageUrl: new FormControl(),
      brand: new FormControl(),
      deliveryCharges: new FormControl(),
      deliveryDays: new FormControl(),
      rating: new FormControl(),
      color: new FormControl(),
      seller: new FormControl(),
      
    }
    
  )

   constructor(private dashboardService: DashboardService) {
    this.loadProducts();
  }

  submit(){
    console.log(this.productForm.value);
    this.dashboardService.AdminComponent(this.productForm.value).subscribe(
      (res:any)=>{
        alert("created successfully");
        location.reload();
        
      },
      (err:any)=>{
        alert(err.message);
      }
    )
  }

 

  loadProducts() {
    this.dashboardService.getProducts().subscribe((res: any) => {
      this.products = res.data;
    });
  }
}

