import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuitarService } from '../utils/guitar.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  guitars: Guitar[] = [];

  constructor(private guitarService: GuitarService, private router: Router) {
  }

  getGuitars() {
    this.guitarService.getGuitars().subscribe({
      next: msg => {
        this.guitars = Object.values(msg)
      },
      error: err => console.log(err)
    })
  }

  goToGuitarDetails(guitar: any) {
    localStorage.setItem('guitar', JSON.stringify(guitar))
    this.router.navigate(['/guitar/'+ guitar.product_id])
  }

  ngOnInit() {
    this.getGuitars()
  }
}


interface Guitar {
  _id: string;
  product_id: string;
  brand: string;
  model: string;
  type: string;
  color: string;
  price: number;
  image_url: string;
  created_at: string;
  updated_at: string;
  __v: number;
}
