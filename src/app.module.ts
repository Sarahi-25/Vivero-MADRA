import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { SaleDetailsModule } from './sale_details/sale_details.module';
import { User } from './users/entities/user.entity';
import { Sale } from './sales/entities/sale.entity';
import { SaleDetail } from './sale_details/entities/sale_detail.entity';
import { Product } from './products/entities/product.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // ══════════════════════════════════════════════════
      //  ▼▼▼  CAMBIA SOLO ESTA LÍNEA con tu contraseña  ▼▼▼
      host:     process.env.DB_HOST     || 'localhost',
      port:     Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '727225',
      database: process.env.DB_NAME     || 'pi_db',
      // ══════════════════════════════════════════════════
      entities: [User, Sale, SaleDetail, Product],
      autoLoadEntities: true,
      synchronize: true,  // crea las tablas automáticamente
    }),
    UsersModule,
    ProductsModule,
    SalesModule,
    SaleDetailsModule,
    AuthModule,
  ],
})
export class AppModule {}
