import { IsString, IsArray, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsNotEmpty()
  ingredients: string[];

  @IsString()
  @IsNotEmpty()
  instructions: string;

  @IsUrl()
  @IsNotEmpty()
  image: string;
}
