import { Controller, Get } from '@nestjs/common';

@Controller('recipes')
export class RecipesController {
    @Get()
    async recipes (){
        return 'hellooo'
    }
}
