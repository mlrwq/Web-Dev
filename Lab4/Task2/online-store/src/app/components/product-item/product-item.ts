import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product!: Product;
  selectImgIdx: number = 0;

  shareOnWhatsApp(){
    const message = encodeURIComponent(`Check this out: ${this.product.name} - ${this.product.link}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }
  shareOnTelegram(){
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Check this out: ${this.product.name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  setMainImg(index: number){
    this.selectImgIdx = index;
  }
}
