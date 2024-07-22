import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'despachos_envios' })
export class DespachoEnvio {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  id_transportista_despacho_envio?: number;

  @Column({ length: 11, type: 'char' })
  id_num_manifiesto_despacho_envio!: string;

  @Column({ length: 11, type: 'char' })
  id_num_guia_despacho_envio!: string;

  @Column({ nullable: true })
  id_agente_despacho_envio?: number;

  @Column()
  id_creador_despacho!: number;

  @Column({ type: 'date', nullable: true })
  fecha_creado?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  fecha_actualizado!: Date;
}
