interface Card {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  sale: boolean;
  description: string;
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
  { 
    id: 1, 
    image: product1, 
    title: "Barberton Daisy", 
    price: 119, 
    category: "House Plants", 
    sale: true,
    description: "The Barberton Daisy is a stunning houseplant known for its vibrant, daisy-like flowers that bring a burst of color to any indoor space. With its lush green foliage and long-lasting blooms, this plant is perfect for brightening up your home or office. It thrives in bright, indirect light and requires moderate watering, making it an excellent choice for both novice and experienced plant enthusiasts."
  },
  { 
    id: 2, 
    image: product2, 
    title: "Angel Wing Begonia", 
    price: 169, 
    category: "House Plants", 
    sale: false,
    description: "The Angel Wing Begonia is a graceful houseplant admired for its uniquely shaped leaves that resemble delicate wings. Its striking foliage, often adorned with silver spots or red undersides, adds an elegant touch to any interior. This begonia prefers bright, indirect sunlight and consistent moisture, making it a beautiful and relatively low-maintenance addition to your plant collection."
  },
  { 
    id: 3, 
    image: product3, 
    title: "African Violet", 
    price: 199, 
    category: "Potter Plants", 
    sale: true,
    description: "The African Violet is a charming, compact plant celebrated for its soft, velvety leaves and clusters of delicate purple, pink, or white flowers. Ideal for small spaces, this plant blooms year-round with proper care, adding a touch of elegance to windowsills or tabletops. It thrives in moderate light and requires careful watering to keep its soil consistently moist but not soggy."
  },
  { 
    id: 4, 
    image: product4, 
    title: "Beach Spider Lily", 
    price: 129, 
    category: "Potter Plants", 
    sale: false,
    description: "The Beach Spider Lily is an eye-catching plant with its striking white, star-shaped flowers and long, slender leaves. Its exotic appearance makes it a standout choice for indoor or outdoor settings, evoking a tropical ambiance. This plant prefers bright light and well-drained soil, and its low-maintenance nature makes it suitable for gardeners of all skill levels."
  },
  { 
    id: 5, 
    image: product5, 
    title: "Blushing Bromeliad", 
    price: 139, 
    category: "Seeds", 
    sale: true,
    description: "The Blushing Bromeliad is a vibrant, tropical plant known for its bold red and green foliage that forms a stunning rosette. This plant adds a splash of color to any space and is perfect for creating a tropical vibe indoors. It thrives in bright, indirect light and requires minimal watering, as it stores water in its central cup, making it an easy-care option for plant lovers."
  },
  { 
    id: 6, 
    image: product6, 
    title: "Aluminum Plant", 
    price: 179, 
    category: "Seeds", 
    sale: false,
    description: "The Aluminum Plant is a unique houseplant prized for its shimmering, silver-patterned leaves that create a striking visual effect. Its compact size and lush foliage make it an excellent choice for desks, shelves, or small spaces. This plant prefers bright, indirect light and moderate watering, offering a low-maintenance yet visually appealing option for indoor gardening."
  },
  { 
    id: 7, 
    image: product7, 
    title: "Bird's Nest Fern", 
    price: 99, 
    category: "Big Plants", 
    sale: true,
    description: "The Bird's Nest Fern is a lush, green fern with wide, wavy fronds that form a rosette resembling a bird’s nest. This large plant is perfect for adding a touch of nature to your home or office, creating a serene and inviting atmosphere. It thrives in low to medium light and prefers consistently moist soil, making it a great choice for those seeking a bold, low-maintenance plant."
  },
  { 
    id: 8, 
    image: product8, 
    title: "Broadleaf Lady Palm", 
    price: 59, 
    category: "Big Plants", 
    sale: false,
    description: "The Broadleaf Lady Palm is a sophisticated indoor palm with broad, fan-like leaves that bring a tropical elegance to any space. Its compact size and easy-care nature make it ideal for beginners and seasoned plant owners alike. This palm thrives in low to bright indirect light and requires moderate watering, offering a timeless addition to your indoor jungle."
  },
  { 
    id: 9, 
    image: product9, 
    title: "Chinese Evergreen", 
    price: 39, 
    category: "Succulents", 
    sale: true,
    description: "The Chinese Evergreen is a resilient and versatile houseplant known for its vibrant, variegated leaves in shades of green, silver, and red. Its adaptability to low light and minimal watering needs make it a favorite for beginners. This plant not only enhances your home’s aesthetic but also purifies the air, making it a practical and beautiful choice for any indoor setting."
  },
];

export default card;
export type { Card };