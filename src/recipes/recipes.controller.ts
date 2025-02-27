import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateRecipeDto } from './create-recipe.dto';
import { RecipeService } from './recipes.service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipeService.createRecipe(createRecipeDto);
  }

  @Get()
  async findAll() {
    return this.recipeService.getRecipes();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.recipeService.getRecipeById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRecipeDto: CreateRecipeDto) {
    return this.recipeService.updateRecipe(id, updateRecipeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.recipeService.deleteRecipe(id);
  }
}
