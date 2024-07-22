import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'registro_envios' })
export class RegistroEnvio {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 11, type: 'char' })
  id_registro_envios!: string;

  @Column()
  id_cliente_registro_envios!: number;

  @Column()
  id_area_registro_envios!: number;

  @Column()
  cantidad_destinos_registro_envios!: number;

  @Column({ length: 11, type: 'char' })
  recibo_registro_envios!: string;

  @Column({ type: 'decimal', precision: 12, scale: 1 })
  sub_total_registro_envios!: number;

  @Column({ type: 'decimal', precision: 12, scale: 1 })
  igv_registro_envios!: number;

  @Column({ type: 'decimal', precision: 12, scale: 1 })
  precio_total_registro_envios!: number;

  @Column({ length: 1, type: 'char', default: '0' })
  validacion_registro_envios!: string;

  @Column()
  id_creador_registro_envios!: number;

  @Column({ length: 1, type: 'char', default: '1' })
  estado!: string;

  @Column({ type: 'date' })
  fecha_creado!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  fecha_actualizado!: Date;
}
