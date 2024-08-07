// src/products/products.service.ts

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from './product.interface';

@Injectable()
export class ProductsService {
  private readonly apiUrl =
    'https://616d6bdb6dacbb001794ca17.mockapi.io/devnology/';

  constructor(private readonly httpService: HttpService) {}

  findAll(providerName: string): Observable<Product[]> {
    const url = `${this.apiUrl}`;
    return this.httpService.get(`${url}/${providerName}`).pipe(
      map((response) => response.data), // Extrai os dados da resposta
    );
  }

  findById(providerName: string, id: number): Observable<Product> {
    const url = `${this.apiUrl}/${providerName}/${id}`;
    return this.httpService.get(url).pipe(
      map((response) => response.data), // Extrai os dados da resposta
    );
  }
}
