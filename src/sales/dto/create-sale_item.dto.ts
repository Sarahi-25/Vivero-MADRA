import { IsNumber, Min } from 'class-validator';

export class CreateSaleItemDto {
  @IsNumber()
  productId: number = 0;

  @IsNumber()
  @Min(1)
  quantity: number = 1;
}
