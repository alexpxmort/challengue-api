// src/orders/orders.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { Order } from '@prisma/client';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { OrdersService } from './order.service';
import { CreateOrderDto } from './create-order-dto';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully created.',
    type: CreateOrderDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @ApiBody({
    description: 'Create a new order',
    type: CreateOrderDto,
  })
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return await this.ordersService.createOrder(
      createOrderDto.customer,
      createOrderDto.items,
    );
  }
}
