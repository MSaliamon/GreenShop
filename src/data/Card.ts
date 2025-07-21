interface Card {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  sale: boolean; // додано
}

import product1 from '../assets/homepage/png/product1.png';
import product2 from '../assets/homepage/png/product2.png';
import product3 from '../assets/homepage/png/product3.png';
import product4 from '../assets/homepage/png/product4.png';
import product5 from '../assets/homepage/png/product5.png';
import product6 from '../assets/homepage/png/product6.png';
import product7 from '../assets/homepage/png/product7.png';
import product8 from '../assets/homepage/png/product8.png';
import product9 from '../assets/homepage/png/product9.png';

const card: Card[] = [
  { id: 1, image: product1, title: "Barberton Daisy", price: 119, category: "House Plants", sale: true },
  { id: 2, image: product2, title: "Angel Wing Begonia", price: 169, category: "House Plants", sale: false },
  { id: 3, image: product3, title: "African Violet", price: 199, category: "Potter Plants", sale: true },
  { id: 4, image: product4, title: "Beach Spider Lily", price: 129, category: "Potter Plants", sale: false },
  { id: 5, image: product5, title: "Blushing Bromeliad", price: 139, category: "Seeds", sale: true },
  { id: 6, image: product6, title: "Aluminum Plant", price: 179, category: "Seeds", sale: false },
  { id: 7, image: product7, title: "Bird's Nest Fern", price: 99, category: "Big Plants", sale: true },
  { id: 8, image: product8, title: "Broadleaf Lady Palm", price: 59, category: "Big Plants", sale: false },
  { id: 9, image: product9, title: "Chinese Evergreen", price: 39, category: "Succulents", sale: true },
];

export default card;
