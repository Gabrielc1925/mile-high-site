export const menuData = {
  pizza: {
    icon: '🍕',
    title: 'Pizza',
    id: 'pizza',
    description: 'Hand-tossed, fresh-made dough — classic pies to Mediterranean specialties',
    items: [
      {
        name: 'Cheese Pizza',
        badge: 'Classic',
        desc: 'Melted mozzarella on our signature sauce and fresh-made dough.',
        price: { sm: 7.99, lg: 9.99, xl: 11.99 }
      },
      {
        name: 'Honey Pizza',
        badge: 'House',
        desc: 'Sweet and savory drizzle of honey over creamy cheese.',
        price: { sm: 7.99, lg: 9.99, xl: 11.99 }
      },
      {
        name: 'Zatar Pizza',
        badge: 'Mediterranean',
        desc: 'Middle Eastern za\'atar herb blend on fresh dough.',
        price: { sm: 7.99, lg: 9.99, xl: 11.99 }
      },
      {
        name: 'Labneh with Zatar',
        badge: 'Mediterranean',
        desc: 'Creamy labneh cheese with aromatic za\'atar.',
        price: { sm: 7.99, lg: 9.99, xl: 11.99 }
      },
      {
        name: 'Supreme Pizza',
        badge: 'Combo',
        desc: 'Green peppers, onion, mushrooms, beef pepperoni, black olive.',
        price: { sm: 12.99, lg: 15.99, xl: 18.99 }
      },
      {
        name: 'Veggie Pizza',
        badge: 'Veggie',
        desc: 'Green peppers, onion, mushrooms, tomatoes, black olives.',
        price: { sm: 12.99, lg: 15.99, xl: 18.99 }
      },
      {
        name: 'Gyro Pizza',
        badge: '★ Specialty',
        desc: 'White sauce, grilled gyro lamb meat, feta, mozzarella.',
        price: { sm: 14.99, lg: 16.99, xl: 19.99 }
      },
      {
        name: 'Philly Steak Pizza',
        badge: '★ Specialty',
        desc: 'White sauce, steak, onion, mushrooms, mozzarella cheese.',
        price: { sm: 14.99, lg: 16.99, xl: 19.99 }
      },
      {
        name: 'Spinach Pizza',
        badge: '★ Specialty',
        desc: 'Green pepper, onion, spinach, tomato, white sauce.',
        price: { sm: 14.99, lg: 16.99, xl: 19.99 }
      },
      {
        name: 'Steak Pizza',
        badge: '★ Specialty',
        desc: 'Steak, green pepper, onion, mushroom, white sauce.',
        price: { sm: 14.99, lg: 16.99, xl: 19.99 }
      },
    ],
    sizeNote: '12" Med · 14" Lg · 16" XL · Add\'l toppings from $1.00',
  },

  calzones: {
    icon: '🫓',
    title: 'Calzones',
    id: 'calzones',
    description: 'Fresh dough, mozzarella & garlic, served with house-made marinara',
    items: [
      { name: 'Spinach Calzone', price: '$14.99', desc: 'Green pepper, onions, mushrooms, black olives, green peppers.' },
      { name: 'Gyro Calzone', price: '$14.99', desc: 'Gyro lamb meat, onion, mozzarella & feta cheese.' },
      { name: 'Chicken Shawarma Calzone', price: '$14.99', desc: 'Onion, green pepper, chicken, mozzarella cheese.' },
      { name: 'Beef Steak & Cheese', price: '$14.99', desc: 'Steak, cheese, fresh dough, housemade marinara.' },
      { name: 'Kabab & Cheese', price: '$14.99', desc: 'Seasoned kabab, melted cheese, housemade marinara.' },
      { name: 'Kabab with Labneh', price: '$14.99', desc: 'Kabab, creamy labneh, housemade marinara.' },
      { name: 'Falafel with Labneh', price: '$14.99', desc: 'Crispy falafel, labneh, housemade marinara.' },
      { name: 'Veggie Calzone', price: '$14.99', desc: 'Garden vegetables, fresh cheese, housemade marinara.' },
      { name: 'My Calzone', price: 'Custom', desc: 'Choose any 3 toppings from our full list.' },
    ]
  },

  grill: {
    icon: '🔥',
    title: 'Grill & Entrees',
    id: 'grill',
    description: 'Served with rice, salad, hummus, and pita bread',
    items: [
      { name: 'Chicken Shawarma', price: '$15.99', desc: 'Thinly sliced chicken marinated in savory garlic and oranges, with French fries & cabbage.' },
      { name: 'Meat Shawarma', price: '$15.99', desc: 'Thinly sliced beef marinated in savory garlic and oranges, with French fries & cabbage.' },
      { name: 'Gyro Plate', price: '$15.99', desc: 'Rotisserie broiled spiced lamb and beef, tzatziki sauce, French fries & cabbage.' },
      { name: 'Hummus with Shawarma', price: '$15.99', desc: 'Generous hummus with your choice of shawarma. Rice upon request.' },
      { name: 'Chicken Kabob', price: '$15.99', desc: 'Two skewers of grilled all-white chicken breast, lemon pepper, olive oil, grilled vegetables.' },
      { name: 'Mix Kabob', price: '$19.99', desc: 'Two skewers of kofta chicken kabob, grilled onions, peppers & tomato.' },
      { name: 'Mix Meat Combo', price: '$23.00', desc: 'Chicken kabob, kofta kabob, and chicken or beef shawarma with grilled tomato.' },
      { name: 'Grilled Fish', price: '$19.99', desc: 'Pompano fish grilled to perfection, served with rice, hummus, and salad.' },
      { name: 'Lamb Ghuzi', price: '$24.99', desc: 'Tender bone-in lamb slowly baked in savory tomato sauce with potatoes.' },
      { name: 'Lamb Shank', price: '$24.99', desc: 'Tender bone-in lamb shank baked in tomato sauce with carrots and potatoes.' },
      { name: 'Lamb Chops', price: '$24.99', desc: 'Grilled lamb ribs with Mediterranean spices.' },
      { name: 'Vegetarian Combo', price: '$15.99', desc: 'Falafel, hummus, fattoush salad, grape leaves.' },
    ]
  },

  sandwiches: {
    icon: '🥙',
    title: 'Sandwiches',
    id: 'sandwiches',
    description: 'Served with French fries, cabbage, and pickles',
    items: [
      { name: 'Chicken Shawarma', price: '$9.99', desc: 'Marinated chicken, garlic paste, wrapped in pita or tortilla.' },
      { name: 'Beef Shawarma', price: '$9.99', desc: 'Marinated beef, garlic paste, tahini, hummus, parsley, tomatoes.' },
      { name: 'Mile High Shawarma', price: '$9.99', desc: 'Our signature — marinated chicken, garlic paste, mayo & ketchup.' },
      { name: 'Shish Tawook', price: '$12.99', desc: 'Marinated chicken, garlic paste, mayo & ketchup in pita or tortilla.' },
      { name: 'Gyro Sandwich', price: '$9.99', desc: 'Spiced gyro, tzatziki sauce, lettuce, garlic, tomatoes.' },
      { name: 'Kafta Kabob', price: '$9.99', desc: 'Grilled ground lamb, onions, parsley, red bell pepper, on hummus with lettuce & tomatoes.' },
    ]
  },

  appetizers: {
    icon: '🌿',
    title: 'Appetizers',
    id: 'appetizers',
    description: 'Classic Mediterranean starters',
    items: [
      { name: 'Hummus', price: '$7.00', desc: 'Pureed chickpeas, tahini, lemon, paprika & olive oil. With pita.' },
      { name: 'Baba Ghanouj', price: '$7.00', desc: 'Roasted eggplant, tahini, pomegranate molasses, sumac & olive oil. With pita.' },
      { name: 'Fried Kibbeh (3)', price: '$9.00', desc: 'Bulgur wheat with sirloin, stuffed with ground beef and onions.' },
      { name: 'Grape Leaves (6)', price: '$7.00', desc: 'Seasoned grape leaves rolled with rice and spices.' },
      { name: 'Falafel (8)', price: '$7.00', desc: 'Fried chickpea patties with tahini dipping sauce.' },
      { name: 'Labneh', price: '$7.00', desc: 'Lebanese yogurt cheese, dry mint, olive oil. With pita.' },
      { name: 'Cheese Sambusek (5)', price: '$7.00', desc: 'Feta cheese, parsley, red pepper, eggs in deep-fried wonton.' },
      { name: 'Spinach Sambusek (5)', price: '$7.00', desc: 'Chopped spinach, walnuts, pomegranate in deep-fried wonton.' },
      { name: 'Chicken Wings (10)', price: '$9.99', desc: 'Ten crispy chicken wings.' },
      { name: 'Cheese Sticks (6)', price: '$5.99', desc: 'Six golden mozzarella cheese sticks.' },
    ]
  },

  sides: {
    icon: '🥗',
    title: 'Sides & Desserts',
    id: 'menu',
    description: 'Complete your meal',
    items: [
      { name: 'House Salad', price: '$4.00', desc: 'Fresh garden salad.' },
      { name: 'Rice', price: '$3.00', desc: 'Steamed seasoned rice.' },
      { name: 'French Fries', price: '$3.00', desc: 'Golden crispy fries.' },
      { name: 'Garlic Paste', price: '$5.00', desc: 'House-made savory garlic sauce.' },
      { name: 'Tzatziki', price: '$5.00', desc: 'Creamy Greek yogurt cucumber sauce.' },
      { name: 'Feta Cheese', price: '$5.00', desc: 'Crumbled feta cheese.' },
      { name: 'Baklava', price: '$3.50', desc: '🍯 Layers of phyllo pastry, nuts, and honey syrup.' },
      { name: 'Konafa', price: '$2.99', desc: '🍮 Shredded wheat filled with sweet cheese, rose water syrup.' },
    ]
  }
};
