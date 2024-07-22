import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  dni_usuario!: string;

  @Column()
  clave_usuario!: string;

  @Column()
  colaborador_usuario!: string;

  @Column()
  brevete_usuario!: string;

  @Column()
  telefono_usuario!: string;

  @Column()
  email_usuario!: string;

  @Column()
  area_usuario!: string;

  @Column()
  cargo_usuario!: string;

  @Column()
  foto_usuario!: string;

  @Column({ default: '1' })
  estado!: string;

  @Column()
  fecha_creado!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_actualizado!: Date;
}