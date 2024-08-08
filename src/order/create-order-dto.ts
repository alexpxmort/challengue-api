import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
  IsEmail,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class Customer {
  @ApiProperty({ description: 'Customer name', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Customer email',
    example: 'john.doe@example.com',
  })
  @IsEmail({}, { message: 'Invalid email format' })
  @IsString()
  @IsNotEmpty()
  email: string;
}

export class OrderItem {
  @ApiProperty({ description: 'Quantity of the item', example: 3 })
  @IsNumber()
  quantity: number;

  @ApiProperty({ description: 'Price of the item', example: 29.99 })
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'Name of the item', example: 'test' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Image of the item', example: 'test' })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({
    description: 'Category of the item',
    example: 'Fantastic',
    required: false,
  })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({
    description: 'Material of the item',
    example: 'Metal',
    required: false,
  })
  @IsString()
  @IsOptional()
  material?: string;

  @ApiProperty({
    description: 'Department of the item',
    example: 'Grocery',
    required: false,
  })
  @IsString()
  @IsOptional()
  department?: string;
}

export class CreateOrderDto {
  @ApiProperty({ type: Customer, description: 'Customer details' })
  @ValidateNested()
  @Type(() => Customer)
  @IsNotEmpty()
  customer: Customer;

  @ApiProperty({ type: [OrderItem], description: 'List of order items' })
  @ValidateNested({ each: true })
  @Type(() => OrderItem)
  @IsNotEmpty()
  items: OrderItem[];
}
