import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  products: any[] = [];
  selectedSort: string = "";
  term: string = "";

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {
    this.dashboardService.getProducts().subscribe(
      (res: any) => {
        this.products = res.data;
      },
      (err:any) => {
        alert("internal server error");
      }
    );
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }

  getStars(rating: number) {
    let stars = "";
    stars += "★".repeat(Math.floor(rating));
    if (rating % 1 >= 0.5) stars += "⯨";
    stars += "☆".repeat(5 - stars.length);
    return stars;
  }

  getDiscountPercent(price: number, discountPrice: number): number {
    return Math.round(((price - discountPrice) / price) * 100);
  }

  filterProducts() {
    this.dashboardService.filterProducts(this.term).subscribe(
      (res: any) => {
        this.products = res.data;
      },
      () => alert("internal server error")
    );
  }

  sortProducts() {
    if (!this.selectedSort) return;

    if (this.selectedSort === "low-high") {
      this.products.sort((a, b) => a.discountPrice - b.discountPrice);
    } else if (this.selectedSort === "high-low") {
      this.products.sort((a, b) => b.discountPrice - a.discountPrice);
    } else if (this.selectedSort === "a-z") {
      this.products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.selectedSort === "z-a") {
      this.products.sort((a, b) => b.name.localeCompare(a.name));
    }
  }
  limit:number=10;
  page:number=1;
  limitproducts(){
    this.dashboardService.limitproducts(this.limit,this.page).subscribe(
      (res:any)=>{
        this.products=res.data;
      }
    )
  }

  updateRating(rating:number){
    alert("new rating is" + rating);
  }

}
