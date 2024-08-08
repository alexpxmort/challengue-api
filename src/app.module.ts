import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { HttpModule } from '@nestjs/axios';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PrismaModule, ProductsModule, HttpModule, OrderModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
