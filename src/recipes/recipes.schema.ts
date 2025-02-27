import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Recipe extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [String], required: true })
  ingredients: string[];

  @Prop({ required: true })
  instructions: string;

  @Prop({ required: true })
  image: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
