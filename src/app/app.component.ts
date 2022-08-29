import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  products: Product[] = [
    {
      id: '1',
      name: 'dreamercatcher',
      price: 565,
      image: './assets/images/dreamercatcher.jpg'
    },
    {
      id: '2',
      name: 'heart',
      price: 356,
      image: './assets/images/heart.jpg'
    },
    {
      id: '3',
      name: 'lips',
      price: 34,
      image: './assets/images/lips.jpg'
    },
    {
      id: '4',
      name: 'rock',
      price: 23,
      image: './assets/images/rock.jpg'
    },
    {
      id: '5',
      name: 'rainbow',
      price: 34,
      image: './assets/images/rainbow.jpg'
    },
    {
      id: '6',
      name: 'love',
      price: 3434,
      image: './assets/images/love.jpg'
    }
  ]

  onLoaded(img: string) {
    console.log('father log', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
