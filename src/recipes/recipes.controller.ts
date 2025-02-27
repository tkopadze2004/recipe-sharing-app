import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('recipes')
export class RecipesController {
    @Get()
    async recipes (){
        return 'hellooo'
    }

    @Post()
    async createRecipe(){
        return ' recipe created successfully'
    }

    @Put(':id')
    async feedAnimal(@Param('id') id: string) {
      return 'recipe edited successfully';
    }

    @Delete()
    async deleteRecipe(@Param('id') id: string) {
        return 'Recipe deleted successfully';
    }
    
}
