import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'despachos' })
export class Despacho {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 11, type: 'char' })
  id_num_manifiesto_despacho!: string;

  @Column({ nullable: true })
  id_transportista_despacho?: number;

  @Column({ length: 11, type: 'char' })
  guia_transportista_despacho!: string;

  @Column({ length: 250, nullable: true })
  conductor_despacho?: string;

  @Column({ nullable: true })
  id_conductor_despacho?: number;

  @Column({ length: 250, nullable: true })
  auxiliar_despacho?: string;

  @Column({ nullable: true })
  id_auxiliar_despacho?: number;

  @Column({ length: 11, type: 'char' })
  ubigeo_despacho!: string;

  @Column({ length: 250, nullable: true })
  placa_despacho?: string;

  @Column({ length: 250, nullable: true })
  tipo_vehiculo_despacho?: string;

  @Column({ nullable: true })
  id_vehiculo_despacho?: number;

  @Column({ nullable: true })
  cantidad_bultos_despacho?: number;

  @Column({ nullable: true })
  id_creador_despacho?: number;

  @Column({ type: 'date', nullable: true })
  fecha_creado?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  fecha_actualizado!: Date;
}
