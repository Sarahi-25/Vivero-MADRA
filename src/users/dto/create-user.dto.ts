import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string = '';

  @IsEmail()
  email: string = '';

  @IsNotEmpty()
  @MinLength(6)
  password: string = '';

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsString()
  rol?: string;

  @IsOptional()
  @IsString()
  turno?: string;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsString()
  fechaIngreso?: string;
}
