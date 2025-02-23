import React, { useState } from 'react';
import { CookingPot, Clock, Users, ChefHat } from 'lucide-react';

export function UploadRecipe() {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    cookingTime: '',
    servings: '',
    difficulty: 'Easy',
    category: '',
    ingredients: [''],
    instructions: [''],
    imageUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle recipe upload logic here
  };

  const addIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, '']
    });
  };

  const addInstruction = () => {
    setRecipe({
      ...recipe,
      instructions: [...recipe.instructions, '']
    });
  };

  const updateIngredient = (index: number, value: string) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = value;
    setRecipe({
      ...recipe,
      ingredients: newIngredients
    });
  };

  const updateInstruction = (index: number, value: string) => {
    const newInstructions = [...recipe.instructions];
    newInstructions[index] = value;
    setRecipe({
      ...recipe,
      instructions: newInstructions
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <CookingPot className="w-8 h-8 text-orange-500" />
          <h1 className="text-2xl font-bold ml-2">Upload New Recipe</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
            <input
              type="text"
              value={recipe.title}
              onChange={(e) => setRecipe({...recipe, title: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={recipe.description}
              onChange={(e) => setRecipe({...recipe, description: e.target.value})}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <Clock className="w-4 h-4 inline mr-1" />
                Cooking Time (minutes)
              </label>
              <input
                type="number"
                value={recipe.cookingTime}
                onChange={(e) => setRecipe({...recipe, cookingTime: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                <Users className="w-4 h-4 inline mr-1" />
                Servings
              </label>
              <input
                type="number"
                value={recipe.servings}
                onChange={(e) => setRecipe({...recipe, servings: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                <ChefHat className="w-4 h-4 inline mr-1" />
                Difficulty
              </label>
              <select
                value={recipe.difficulty}
                onChange={(e) => setRecipe({...recipe, difficulty: e.target.value as 'Easy' | 'Medium' | 'Hard'})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                required
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              value={recipe.category}
              onChange={(e) => setRecipe({...recipe, category: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              value={recipe.imageUrl}
              onChange={(e) => setRecipe({...recipe, imageUrl: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ingredients</label>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => updateIngredient(index, e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder={`Ingredient ${index + 1}`}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addIngredient}
              className="mt-2 text-sm text-orange-500 hover:text-orange-600"
            >
              + Add Ingredient
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
            {recipe.instructions.map((instruction, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={instruction}
                  onChange={(e) => updateInstruction(index, e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder={`Step ${index + 1}`}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addInstruction}
              className="mt-2 text-sm text-orange-500 hover:text-orange-600"
            >
              + Add Instruction
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Upload Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}