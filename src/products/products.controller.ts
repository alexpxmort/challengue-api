import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.interface';
import { Observable } from 'rxjs';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  @ApiOperation({ summary: 'retrieve all products' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'sucess retrieve all products',
  })
  findAll(): Observable<Product[]> {
    return this.productsService.findAll();
  }
}
