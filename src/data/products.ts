export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Tomato",
    category: "Vegetables",
    price: 40,
    img: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469"
  },
  {
    id: 2,
    name: "Potato",
    category: "Vegetables",
    price: 30,
    img: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31"
  },
  {
    id: 3,
    name: "Carrot",
    category: "Vegetables",
    price: 50,
    img: "https://images.unsplash.com/photo-1447175008436-170170753c84"
  },
  {
    id: 4,
    name: "Apple",
    category: "Fruits",
    price: 120,
    img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6"
  },
  {
    id: 5,
    name: "Orange",
    category: "Fruits",
    price: 90,
    img: "https://images.unsplash.com/photo-1547514701-42782101795e"
  },
  {
    id: 6,
    name: "Milk",
    category: "Dairy",
    price: 60,
    img: "https://images.unsplash.com/photo-1550583724-125581fe2f8a"
  },
  {
    id: 7,
    name: "Cheese",
    category: "Dairy",
    price: 250,
    img: "https://images.unsplash.com/photo-1486297678162-ad2a19b0584b"
  },
  {
    id: 8,
    name: "Potato Chips",
    category: "Snacks",
    price: 20,
    img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b"
  },
  {
    id: 9,
    name: "Cola",
    category: "Beverages",
    price: 40,
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97"
  },
  {
    id: 10,
    name: "Dish Soap",
    category: "Cleaning",
    price: 80,
    img: "https://images.unsplash.com/photo-1584622781564-1d9876a125b1"
  }
];
