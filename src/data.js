import { Recipe } from './types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Margherita Pizza',
    description: 'A traditional Italian pizza with fresh basil, mozzarella, and tomatoes.',
    cookingTime: 30,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '2 cups all-purpose flour',
      '1 cup warm water',
      'Fresh mozzarella',
      'Fresh basil leaves',
      'Tomato sauce',
      'Olive oil'
    ],
    instructions: [
      'Prepare the pizza dough and let it rise',
      'Preheat oven to 450°F (230°C)',
      'Roll out the dough',
      'Add sauce, cheese, and toppings',
      'Bake for 12-15 minutes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
    category: 'Italian'
  },
  {
    id: '2',
    title: 'Avocado Toast',
    description: 'Creamy avocado on toasted sourdough with a hint of lemon and chili flakes.',
    cookingTime: 10,
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 slices sourdough bread',
      '1 ripe avocado',
      'Lemon juice',
      'Red chili flakes',
      'Salt and pepper'
    ],
    instructions: [
      'Toast the bread until golden',
      'Mash the avocado with lemon juice',
      'Spread on toast',
      'Season with salt, pepper, and chili flakes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2',
    category: 'Breakfast'
  },
  {
    id: '3',
    title: 'Chicken Tikka Masala',
    description: 'Rich and creamy curry with tender chicken pieces in a spiced tomato sauce.',
    cookingTime: 45,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'Chicken breast',
      'Yogurt',
      'Tomato sauce',
      'Heavy cream',
      'Garam masala',
      'Various spices'
    ],
    instructions: [
      'Marinate chicken in yogurt and spices',
      'Grill or bake chicken until cooked',
      'Prepare the sauce with tomatoes and cream',
      'Combine chicken with sauce',
      'Simmer until thick'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db',
    category: 'Indian'
  },
  {
    id: '4',
    title: 'Sushi Roll',
    description: 'Fresh and delicious California roll with crab, avocado, and cucumber.',
    cookingTime: 40,
    servings: 3,
    difficulty: 'Hard',
    ingredients: [
      'Sushi rice',
      'Nori sheets',
      'Crab meat',
      'Avocado',
      'Cucumber',
      'Rice vinegar'
    ],
    instructions: [
      'Prepare sushi rice',
      'Layer nori with rice',
      'Add fillings',
      'Roll tightly',
      'Cut into pieces'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    category: 'Japanese'
  },
  {
    id: '5',
    title: 'Greek Salad',
    description: 'Fresh Mediterranean salad with feta cheese and olives.',
    cookingTime: 15,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'Cucumber',
      'Tomatoes',
      'Red onion',
      'Feta cheese',
      'Kalamata olives',
      'Olive oil'
    ],
    instructions: [
      'Chop vegetables',
      'Combine in bowl',
      'Add feta and olives',
      'Dress with olive oil',
      'Season to taste'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
    category: 'Mediterranean'
  },
  {
    id: '6',
    title: 'Beef Tacos',
    description: 'Authentic Mexican tacos with seasoned ground beef and fresh toppings.',
    cookingTime: 25,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'Ground beef',
      'Taco seasoning',
      'Corn tortillas',
      'Lettuce',
      'Tomatoes',
      'Cheese'
    ],
    instructions: [
      'Brown the beef',
      'Add seasoning',
      'Warm tortillas',
      'Assemble tacos',
      'Add toppings'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b',
    category: 'Mexican'
  },
  {
    id: '7',
    title: 'Chocolate Chip Cookies',
    description: 'Classic homemade cookies with gooey chocolate chips.',
    cookingTime: 20,
    servings: 24,
    difficulty: 'Easy',
    ingredients: [
      'Flour',
      'Butter',
      'Sugar',
      'Eggs',
      'Chocolate chips',
      'Vanilla extract'
    ],
    instructions: [
      'Cream butter and sugar',
      'Add eggs and vanilla',
      'Mix in dry ingredients',
      'Add chocolate chips',
      'Bake until golden'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
    category: 'Desserts'
  },
  {
    id: '8',
    title: 'Pad Thai',
    description: 'Classic Thai stir-fried rice noodles with shrimp and peanuts.',
    cookingTime: 35,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'Rice noodles',
      'Shrimp',
      'Tofu',
      'Bean sprouts',
      'Peanuts',
      'Tamarind sauce'
    ],
    instructions: [
      'Soak noodles',
      'Stir-fry shrimp and tofu',
      'Add noodles and sauce',
      'Mix in vegetables',
      'Garnish with peanuts'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
    category: 'Thai'
  },
  {
    id: '9',
    title: 'Mushroom Risotto',
    description: 'Creamy Italian rice dish with mushrooms and parmesan.',
    cookingTime: 40,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'Arborio rice',
      'Mushrooms',
      'White wine',
      'Chicken stock',
      'Parmesan cheese',
      'Butter'
    ],
    instructions: [
      'Sauté mushrooms',
      'Toast rice',
      'Add wine and stock gradually',
      'Stir until creamy',
      'Finish with parmesan'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
    category: 'Italian'
  },
  {
    id: '10',
    title: 'Berry Smoothie Bowl',
    description: 'Healthy breakfast bowl with mixed berries and granola.',
    cookingTime: 10,
    servings: 1,
    difficulty: 'Easy',
    ingredients: [
      'Mixed berries',
      'Banana',
      'Greek yogurt',
      'Honey',
      'Granola',
      'Chia seeds'
    ],
    instructions: [
      'Blend fruits and yogurt',
      'Pour into bowl',
      'Top with granola',
      'Add fresh berries',
      'Drizzle with honey'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1490323914169-4d5db28abf90',
    category: 'Breakfast'
  },
  {
    id: '11',
    title: 'Beef Burger',
    description: 'Juicy homemade burger with all the classic toppings.',
    cookingTime: 25,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'Ground beef',
      'Burger buns',
      'Lettuce',
      'Tomato',
      'Cheese',
      'Onion'
    ],
    instructions: [
      'Form beef patties',
      'Season well',
      'Grill to preference',
      'Toast buns',
      'Assemble burger'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    category: 'American'
  },
  {
    id: '12',
    title: 'Vegetable Stir Fry',
    description: 'Quick and healthy Asian-style vegetable medley.',
    cookingTime: 20,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'Mixed vegetables',
      'Tofu',
      'Soy sauce',
      'Ginger',
      'Garlic',
      'Sesame oil'
    ],
    instructions: [
      'Prep vegetables',
      'Cook tofu until crispy',
      'Stir-fry vegetables',
      'Add sauce',
      'Combine all ingredients'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
    category: 'Asian'
  },
  {
    id: '13',
    title: 'French Onion Soup',
    description: 'Classic French soup with caramelized onions and melted cheese.',
    cookingTime: 60,
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      'Onions',
      'Beef broth',
      'French bread',
      'Gruyere cheese',
      'Butter',
      'White wine'
    ],
    instructions: [
      'Caramelize onions',
      'Add wine and broth',
      'Simmer soup',
      'Top with bread and cheese',
      'Broil until golden'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548',
    category: 'French'
  },
  {
    id: '14',
    title: 'Salmon Poke Bowl',
    description: 'Fresh Hawaiian-style bowl with raw salmon and rice.',
    cookingTime: 20,
    servings: 2,
    difficulty: 'Medium',
    ingredients: [
      'Sushi-grade salmon',
      'Sushi rice',
      'Avocado',
      'Cucumber',
      'Soy sauce',
      'Sesame seeds'
    ],
    instructions: [
      'Cook sushi rice',
      'Cube salmon',
      'Prepare vegetables',
      'Make sauce',
      'Assemble bowl'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    category: 'Hawaiian'
  },
  {
    id: '15',
    title: 'Homemade Pasta',
    description: 'Fresh Italian pasta made from scratch with simple ingredients.',
    cookingTime: 45,
    servings: 4,
    difficulty: 'Hard',
    ingredients: [
      'Flour',
      'Eggs',
      'Olive oil',
      'Salt',
      'Semolina flour',
      'Water'
    ],
    instructions: [
      'Mix ingredients',
      'Knead dough',
      'Rest dough',
      'Roll and cut pasta',
      'Cook in boiling water'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77',
    category: 'Italian'
  },
  {
    id: '16',
    title: 'Apple Pie',
    description: 'Classic American dessert with flaky crust and spiced apples.',
    cookingTime: 75,
    servings: 8,
    difficulty: 'Medium',
    ingredients: [
      'Apples',
      'Pie crust',
      'Sugar',
      'Cinnamon',
      'Butter',
      'Lemon juice'
    ],
    instructions: [
      'Prepare pie crust',
      'Slice and season apples',
      'Fill pie',
      'Add top crust',
      'Bake until golden'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a9',
    category: 'Desserts'
  },
  {
    id: '17',
    title: 'Quinoa Buddha Bowl',
    description: 'Healthy grain bowl with roasted vegetables and tahini dressing.',
    cookingTime: 30,
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      'Quinoa',
      'Sweet potato',
      'Chickpeas',
      'Kale',
      'Avocado',
      'Tahini'
    ],
    instructions: [
      'Cook quinoa',
      'Roast vegetables',
      'Prepare dressing',
      'Massage kale',
      'Assemble bowl'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
    category: 'Vegetarian'
  }
];