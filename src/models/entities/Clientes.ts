import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'clientes' })
export class Cliente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 11, type: 'char' })
  dni_cliente!: string;

  @Column({ length: 250 })
  razon_social_cliente!: string;

  @Column({ length: 250 })
  representante_cliente!: string;

  @Column({ length: 250 })
  clave_cliente!: string;

  @Column()
  id_vendedor_usuario_cliente!: number;

  @Column({ type: 'decimal', precision: 15, scale: 4 })
  limite_credito_cliente!: number;

  @Column({ type: 'decimal', precision: 15, scale: 4 })
  alerta_credito_cliente!: number;

  @Column({ length: 11, type: 'char' })
  ubigeo_cliente!: string;

  @Column({ length: 250 })
  direccion_cliente!: string;

  @Column({ length: 250 })
  referencias_cliente!: string;

  @Column({ length: 250 })
  contacto_cliente!: string;

  @Column({ length: 9, type: 'char' })
  telefono_cliente!: string;

  @Column({ length: 250 })
  email_cliente!: string;

  @Column({ length: 250 })
  area_cliente!: string;

  @Column({ length: 250 })
  logo_cliente!: string;

  @Column({ nullable: true })
  id_creador_cliente?: number;

  @Column({ length: 1, type: 'char', default: '1' })
  estado!: string;

  @Column({ type: 'date' })
  fecha_creado!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_actualizado!: Date;
}
