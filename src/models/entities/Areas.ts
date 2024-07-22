import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'areas'})
export class Area {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  id_cliente_area!: number;

  @Column({ length: 250 })
  nombre_area!: string;

  @Column({ length: 250 })
  contacto_area!: string;

  @Column({ length: 250 })
  cargo_contacto_area!: string;

  @Column({ length: 9, type: 'char' })
  telefono_area!: string;

  @Column({ length: 250 })
  email_area!: string;

  @Column({ length: 250 })
  contacto_extra_area!: string;

  @Column({ length: 9, type: 'char' })
  telefono_extra_area!: string;

  @Column({ length: 250 })
  email_extra_area!: string;

  @Column({ nullable: true })
  id_creador_area?: number;

  @Column({ length: 1, type: 'char', default: '1' })
  estado!: string;

  @Column({ type: 'date' })
  fecha_creado!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_actualizado!: Date;
}
