import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class Recipes {
    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true })
    animalType: string;
  
    @Prop({ required: true })
    foodType: string;
  
    @Prop({ type: Number, default: 0 })
    thanksCount: number;
  }
  
export const RecipeSchema = SchemaFactory.createForClass(Recipes);
