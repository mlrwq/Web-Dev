import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product-model';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  liked: boolean = false;
  selectImgIdx: number = 0;

  setMainImg(index: number): void {
    this.selectImgIdx = index;
  }

  onLike(): void {
    this.product.likes++;
    this.liked = true;
    setTimeout(() => {this.liked = false;}, 300);
  }
  onDelete(): void {
    if (confirm(`Do you really want to delete "${this.product.name}"?`)){
      this.deleteProduct.emit(this.product.id);
    }
  }
  

  shareOnWhatsApp(){
    const message = encodeURIComponent(`Check this out: ${this.product.name} - ${this.product.link}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }
  shareOnTelegram(){
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Check this out: ${this.product.name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
