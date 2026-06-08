import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string = '';

  @IsNumber()
  @Min(0)
  price: number = 0;

  @IsNumber()
  @Min(0)
  stock: number = 0;

  // Campos extra del frontend (opcionales, el backend los ignora si no hay columna)
  @IsOptional()
  @IsString()
  tipo?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  @IsNumber()
  purchasePrice?: number;
}
