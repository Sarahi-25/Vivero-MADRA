import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Sale } from '../../sales/entities/sale.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  name: string = '';

  @Column({ unique: true })
  email: string = '';

  @Column()
  password: string = '';

  // ── Campos extra de personal ──────────────────────────
  @Column({ nullable: true })
  telefono: string = '';

  @Column({ nullable: true, default: 'Empleado' })
  rol: string = 'Empleado';

  @Column({ nullable: true, default: 'Matutino' })
  turno: string = 'Matutino';

  @Column({ nullable: true, default: 'Activo' })
  estado: string = 'Activo';

  @Column({ nullable: true })
  direccion: string = '';

  
@Column({ type: 'date', nullable: true, default: null })
fechaIngreso: string | null = null;   

@OneToMany(() => Sale, sale => sale.user, { cascade: true, onDelete: 'CASCADE' })
sales: Sale[];                        
}
