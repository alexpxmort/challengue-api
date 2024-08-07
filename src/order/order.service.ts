import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Customer, OrderItem } from './order.interface';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(customer: Customer, items: OrderItem[]) {
    let customerId = (
      await this.prisma.customer.findUnique({
        where: { email: customer.email },
      })
    )?.id;

    if (!customerId) {
      const newCustomer = await this.prisma.customer.create({
        data: customer,
      });
      customerId = newCustomer.id;
    }

    const itemCreationPromises = items.map(async (item) => {
      let categoryId = (
        await this.prisma.category.findUnique({
          where: { name: item.category },
        })
      )?.id;

      if (!categoryId) {
        const newCategory = await this.prisma.category.create({
          data: { name: item.category },
        });
        categoryId = newCategory.id;
      }

      let productId = item.id;

      if (!productId) {
        const newProduct = await this.prisma.product.create({
          data: {
            category: { connect: { id: categoryId } },
            image: item.image,
            material: item.material,
            description: item.description || '',
            name: item.name,
            price: item.price,
            departament: item.department,
          },
        });
        productId = newProduct.id;
      }

      return {
        product: { connect: { id: productId } },
        quantity: item.quantity,
        price: item.price,
      };
    });

    const createdItems = await Promise.all(itemCreationPromises);

    const total = createdItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    const order = await this.prisma.order.create({
      data: {
        customer: { connect: { id: customerId } },
        total,
        items: {
          create: createdItems,
        },
      },
      include: { items: true },
    });

    return order;
  }
}
