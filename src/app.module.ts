import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeModule } from './recipes/recipes.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/recipes'),
    MongooseModule.forRoot(
      'mongodb+srv://tata:zqSO19SRzfmzBVtM@cluster0.8jsir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    RecipeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
