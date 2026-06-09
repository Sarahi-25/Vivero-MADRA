import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { SaleDetailsModule } from './sale_details/sale_details.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { Sale } from './sales/entities/sale.entity';
import { SaleDetail } from './sale_details/entities/sale_detail.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://db:inQSL2QDSEHfYjnvNKfuZZ6c8lAfwL31@dpg-d8jhoh67r5hc73dt86c0-a.oregon-postgres.render.com/db_42qo',
      entities: [User, Product, Sale, SaleDetail],
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    
    UsersModule,       // ← faltaban estos
    ProductsModule,
    SalesModule,
    SaleDetailsModule,
    AuthModule,
  ],
})
export class AppModule {}