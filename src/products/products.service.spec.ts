import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { of } from 'rxjs';

describe('ProductsService', () => {
  let service: ProductsService;

  const mockProducts = [
    {
      name: 'Product 1',
      category: 'Category 1',
      price: 100,
      description: 'Description 1',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        ProductsService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn().mockImplementation(() => {
              const mockResponse = {
                data: mockProducts,
                status: 200,
                statusText: 'OK',
                headers: {},
                config: {},
              };
              return of(mockResponse);
            }),
          },
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call HttpService.get() and return a list of products', async () => {
    const result = await service.findAll().toPromise();

    expect(result).toHaveLength(2);
  });
});
