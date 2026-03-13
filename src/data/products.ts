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
        img: "https://images.unsplash.com/photo-1550583724-125581fe2f8a?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 2,
        name: "Gokul Full Cream Milk",
        size: "500 ml",
        price: 38,
        img: "https://images.unsplash.com/photo-1563636619-e910ef2a844b?auto=format&fit=crop&w=400&q=80"
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
        img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 11,
        name: "Protein Chef Peanuts",
        size: "50 g",
        price: 69,
        img: "https://images.unsplash.com/photo-1512411232841-f6334f59fc92?auto=format&fit=crop&w=400&q=80"
      }
    ]
  }
];

export const products = categories.flatMap(cat => 
  cat.items.map(item => ({ ...item, category: cat.title }))
);
