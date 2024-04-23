import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import products, { Product } from '../../products';

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map(index => ({
    ...products[index],
    quantity: 1,
  }))
});

// Extending the Express request to include user details
interface RequestWithUser extends Request {
  user: {
    userId: number;
  };
}

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    1: initialCart([0, 2, 4]),
    2: initialCart([1, 3, 4]),
  };

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Req() req: RequestWithUser): Promise<Cart> {
    return this.carts[req.user?.userId] ?? { cartItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Req() req: RequestWithUser, @Body() body: { id: number }): Promise<Cart> {
    const cart = this.carts[req.user?.userId];
    if (!cart) {
      this.carts[req.user.userId] = { cartItems: [] }; // Initialize if not existing
    }
    
    const product = products.find((product) => product.id === body.id);
    if (!product) {
      throw new Error('Product not found'); // Better error handling
    }

    const cartItem = cart.cartItems.find((item) => item.id === body.id);
    if (cartItem) {
      cartItem.quantity += 1; // Increment quantity if the product exists in cart
    } else {
      cart.cartItems.push({ ...product, quantity: 1 }); // Add new product to cart
    }
    return cart;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async destroy(@Req() req: RequestWithUser): Promise<Cart> {
    this.carts[req.user?.userId] = { cartItems: [] }; // Reset the cart
    return this.carts[req.user?.userId];
  }
}
