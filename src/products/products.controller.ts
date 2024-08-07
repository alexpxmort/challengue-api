import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.interface'; // Importe o tipo Product
import { Observable } from 'rxjs';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':providerName')
  findAll(@Param('providerName') providerName: string): Observable<Product[]> {
    return this.productsService.findAll(providerName);
  }

  @Get(':providerName/:id')
  findById(
    @Param('providerName') providerName: string,
    @Param('id') id: number,
  ): Observable<Product> {
    return this.productsService.findById(providerName, id);
  }
}
