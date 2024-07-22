import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'estados_guias' })
export class EstadoGuia {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 11, type: 'char' })
  id_num_guia_estado_guia!: string;

  @Column({ length: 11 })
  num_intento_estado_guia!: string;

  @Column({ length: 11 })
  proceso_estado_guia!: string;

  @Column({ length: 250 })
  estado_mercancia_estado_guia!: string;

  @Column({ type: 'date' })
  fecha_proceso_estado_guia!: Date;

  @Column({ length: 250 })
  comentario_estado_guia!: string;

  @Column({ length: 250, nullable: true })
  imagen_1_estado_guia?: string;

  @Column({ length: 250, nullable: true })
  imagen_2_estado_guia?: string;

  @Column({ length: 250, nullable: true })
  imagen_3_estado_guia?: string;

  @Column({ length: 250, nullable: true })
  imagen_4_estado_guia?: string;

  @Column({ length: 250, nullable: true })
  imagen_5_estado_guia?: string;

  @Column({ length: 250, nullable: true })
  imagen_6_estado_guia?: string;

  @Column({ nullable: true })
  id_creador_estado_guia?: number;

  @Column({ type: 'date', nullable: true })
  fecha_creado?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  fecha_actualizado!: Date;
}
