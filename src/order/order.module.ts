import { Module } from '@nestjs/common';
import { OrdersController } from './order.controller';
import { OrdersService } from './order.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [OrdersService, PrismaService],
  controllers: [OrdersController],
})
export class OrderModule {}
