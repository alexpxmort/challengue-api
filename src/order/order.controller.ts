// src/orders/orders.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { Order } from '@prisma/client';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { OrdersService } from './order.service';
import { CreateOrderDto } from './order.interface';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiBody({
    description: 'Create a new order',
  })
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return await this.ordersService.createOrder(
      createOrderDto.customer,
      createOrderDto.items,
    );
  }
}
