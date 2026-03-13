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
      },
      {
        id: 3,
        name: "Organic Brown Eggs",
        size: "6 units",
        price: 95,
        img: "https://images.unsplash.com/photo-1582722134963-c3a127852a62?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 4,
        name: "Salted Butter - Amul",
        size: "100 g",
        price: 58,
        img: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 5,
        name: "Paneer - Malai",
        size: "200 g",
        price: 110,
        img: "https://images.unsplash.com/photo-1563636619-e910ef2a844b?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 6,
        name: "Greek Yogurt - Blueberry",
        size: "100 g",
        price: 45,
        img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 7,
        name: "Whole Wheat Bread",
        size: "400 g",
        price: 50,
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
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
        img: "https://images.unsplash.com/photo-1507484467459-0c2969068255?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 12,
        name: "Pringles Sour Cream",
        size: "107 g",
        price: 105,
        img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 13,
        name: "Hide & Seek Biscuits",
        size: "100 g",
        price: 35,
        img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 14,
        name: "Roasted Cashews - Salted",
        size: "100 g",
        price: 180,
        img: "https://images.unsplash.com/photo-1507484467459-0c2969068255?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 15,
        name: "Milk Chocolate - Dark",
        size: "80 g",
        price: 150,
        img: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 16,
        name: "Popcorn - Butter Magic",
        size: "50 g",
        price: 40,
        img: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=400&q=80"
      }
    ]
  }
];

export const products = categories.flatMap(cat => 
  cat.items.map(item => ({ ...item, category: cat.title }))
);
