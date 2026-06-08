import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsNumber, ValidateNested } from 'class-validator';
import { CreateSaleItemDto } from './create-sale_item.dto';

export class CreateSaleDto {
  @IsNumber()
  userId: number = 0;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateSaleItemDto)
  items: CreateSaleItemDto[] = [];
}
