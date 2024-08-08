import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs/operators';
import { from, lastValueFrom, of } from 'rxjs';
import { Product } from './product.interface';

interface ApiResponse<T> {
  data: T;
}

@Injectable()
export class ProductsService {
  private readonly apiUrl =
    'https://616d6bdb6dacbb001794ca17.mockapi.io/devnology/';
  private providers = ['european_provider', 'brazilian_provider'];

  constructor(private readonly httpService: HttpService) {}

  findAll() {
    const requests = this.providers.map((provider) => {
      const url = `${this.apiUrl}/${provider}`;
      return this.httpService
        .get<ApiResponse<Product[]>>(url)
        .pipe(catchError(() => of({ data: [] as Product[] })));
    });

    return from(
      Promise.all(requests.map((request) => lastValueFrom(request))),
    ).pipe(
      map((responses: ApiResponse<any[]>[]) =>
        responses.flatMap((response) =>
          response.data.map((product) => ({
            name: product.name ?? product.nome ?? '',
            category: product.category ?? product.categoria ?? '',
            price: product.price ?? product.preco ?? 0,
            description: product.description ?? product.descricao ?? '',
            image: product.image ?? product.imagem ?? '',
            department: product.department ?? product.departamento ?? '',
            material: product.material ?? '',
            gallery: product.gallery ?? [],
            hasDiscount: product.hasDiscount ?? false,
            discountValue: product.discountValue ?? 0,
            details: product.details ?? null,
          })),
        ),
      ),
    );
  }
}
