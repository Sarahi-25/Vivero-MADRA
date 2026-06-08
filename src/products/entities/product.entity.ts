import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SaleDetail } from '../../sale_details/entities/sale_detail.entity';

@Entity('products')
export class Product {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column('decimal', {
    precision: 10,
    scale: 2,
  })
  price!: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    default: 0,
  })
  purchasePrice!: number;

  @Column()
  stock!: number;

  @Column({ nullable: true, default: 'Ornamental' })
  tipo!: string;

  @Column({ nullable: true, default: '' })
  color!: string;

  @Column({ nullable: true, default: 'Sana' })
  estado!: string;

  @OneToMany(
    () => SaleDetail,
    detail => detail.product,
  )
  saleDetails!: SaleDetail[];
}
