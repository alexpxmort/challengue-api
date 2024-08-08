import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import {
  AXIOS_INSTANCE_TOKEN,
  mockAxiosInstance,
} from '../../test/mocks/axios';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [ProductsController],
      providers: [
        ProductsService,
        HttpService,
        {
          provide: AXIOS_INSTANCE_TOKEN,
          useValue: mockAxiosInstance,
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
