import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  product: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService
  ) {
    activatedRoute.params.subscribe((data: any) => {
      dashboardService.getProduct(data.id).subscribe((res: any) => {
        this.product = res.data;
      });
    });
  }
  // ⭐ Generate stars based on rating (supports half-stars)
getStars(rating: number): string {
  const fullStars = Math.floor(rating);       // Example: 4.7 → 4
  const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Example: 4.7 → 1 half star
  const emptyStars = 5 - fullStars - halfStar;

  let stars = '★'.repeat(fullStars);   // Full stars
  stars += halfStar ? '☆' : '';        // Half star (use ☆ as half-star)
  stars += '✩'.repeat(emptyStars);     // Empty stars

  return stars;
}
getDiscountPercent(price: number, discountPrice: number): number {
  if (!discountPrice || discountPrice >= price) return 0;

  const discount = price - discountPrice;
  return Math.round((discount / price) * 100);
}

}

