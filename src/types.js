export interface Recipe {
  id: string;
  title: string;
  description: string;
  cookingTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  category: string;
}

export interface User {
  id: string;
  email: string;
  phone: string;
  name: string;
}