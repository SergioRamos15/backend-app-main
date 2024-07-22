import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'asignacion_recojos' })
export class AsignacionRecojo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 11, type: 'char' })
  id_orden_servicio_recojo!: string;

  @Column({ nullable: true })
  id_proveedor_recojo?: number;

  @Column({ length: 11, type: 'char', nullable: true })
  dni_conductor_recojo?: string;

  @Column({ length: 250, nullable: true })
  nombre_conductor_recojo?: string;

  @Column({ length: 11, type: 'char', nullable: true })
  dni_auxiliar_recojo?: string;

  @Column({ length: 250, nullable: true })
  nombre_auxiliar_recojo?: string;

  @Column({ nullable: true })
  id_conductor_recojo?: number;

  @Column({ nullable: true })
  id_auxiliar_recojo?: number;

  @Column({ type: 'date', nullable: true })
  fecha_creado?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  fecha_actualizado!: Date;
}
