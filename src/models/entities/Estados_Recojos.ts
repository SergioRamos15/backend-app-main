import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'estados_recojos' })
export class EstadoRecojo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 11, type: 'char' })
  id_orden_servicio_estado_recojo!: string;

  @Column({ length: 11, type: 'char' })
  proceso_estado_recojo!: string;

  @Column({ length: 11, type: 'char' })
  estado_mercancia_estado_recojo!: string;

  @Column({ length: 250 })
  comentario_estado_recojo!: string;

  @Column({ length: 250, nullable: true })
  imagen_estado_recojo?: string;

  @Column()
  id_creador_estado_recojo!: number;

  @Column({ type: 'date', nullable: true })
  fecha_creado?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  fecha_actualizado!: Date;
}
