import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from '@/modules/users/users.module';
import { ReviewsModule } from '@/modules/reviews/reviews.module';
import { RestaurantsModule } from '@/modules/restaurants/restaurants.module';
import { OrdersModule } from '@/modules/orders/orders.module';
import { OrderDetailModule } from '@/modules/order.detail/order.detail.module';
import { MenuItemsModule } from '@/modules/menu.items/menu.items.module';
import { MenusModule } from '@/modules/menus/menus.module';
import { MenuItemOptionsModule } from '@/modules/menu.item.options/menu.item.options.module';
import { LikesModule } from '@/modules/likes/likes.module';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [
    ReviewsModule,
    RestaurantsModule,
    OrdersModule,
    OrderDetailModule,
    MenuItemsModule,
    MenusModule,
    MenuItemOptionsModule,
    LikesModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
