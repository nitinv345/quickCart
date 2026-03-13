export const categories = [
  {
    title: "Dairy, Bread & Eggs",
    slug: "dairy",
    items: [
      {
        id: 1,
        name: "Amul Taaza Milk",
        size: "500 ml",
        price: 29,
        time: "17 MINS",
        img: "https://m.media-amazon.com/images/I/71mQ9c3Y0CL._SL1500_.jpg"
      },
      {
        id: 2,
        name: "Gokul Full Cream Milk",
        size: "500 ml",
        price: 38,
        time: "17 MINS",
        img: "https://m.media-amazon.com/images/I/61d5p9z2ZCL._SL1500_.jpg"
      }
    ]
  },

  {
    title: "Snacks & Munchies",
    slug: "snacks",
    items: [
      {
        id: 10,
        name: "Cheetos Flamin Hot",
        size: "28 g",
        price: 132,
        time: "17 MINS",
        img: "https://m.media-amazon.com/images/I/81rE3aYy7HL._SL1500_.jpg"
      },
      {
        id: 11,
        name: "Protein Chef Peanuts",
        size: "50 g",
        price: 69,
        time: "17 MINS",
        img: "https://m.media-amazon.com/images/I/61O0s3x+uSL._SL1500_.jpg"
      }
    ]
  }
];

// Flat list for searches and compatibility
export const products = categories.flatMap(cat => 
  cat.items.map(item => ({ ...item, category: cat.title }))
);
