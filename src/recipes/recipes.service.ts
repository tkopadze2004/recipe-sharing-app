import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe } from './recipes.schema';
import { CreateRecipeDto } from './create-recipe.dto';

@Injectable()
export class RecipeService {
  constructor(@InjectModel(Recipe.name) private recipeModel: Model<Recipe>) {}

  async createRecipe(dto: CreateRecipeDto): Promise<Recipe> {
    const newRecipe = new this.recipeModel(dto);
    return newRecipe.save();
  }

  async getRecipes(): Promise<Recipe[]> {
    const recipes = await this.recipeModel.find().exec();
    if (!recipes) {
      throw new Error('Recipes not found');
    }
    return recipes;
  }

  async getRecipeById(id: string): Promise<Recipe> {
    const recipe = await this.recipeModel.findById(id).exec();

    if (!recipe) {
      throw new Error('Recipe not found');
    }
    return recipe;
  }

  async updateRecipe(id: string, dto: CreateRecipeDto): Promise<Recipe> {
    const updatedRecipe = await this.recipeModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!updatedRecipe) {
      throw new Error('Recipe not found');
    }
    return updatedRecipe;
  }

  async deleteRecipe(id: string): Promise<Recipe> {
    const deleteRecipe = await this.recipeModel.findByIdAndDelete(id).exec();
    if (!deleteRecipe) {
      throw new Error('Recipe not found');
    }
    return deleteRecipe;
  }
}
