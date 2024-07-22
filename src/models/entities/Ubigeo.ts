import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'ubigeo' })
export class Ubigeo {
  @PrimaryColumn()
  UBIGEO!: number;

  @Column({ type: 'text', nullable: true })
  DEPARTAMENTO?: string;

  @Column({ type: 'text', nullable: true })
  PROVINCIA?: string;

  @Column({ type: 'text', nullable: true })
  DESTINO?: string;

  @Column({ type: 'text', nullable: true })
  Zona?: string;

  @Column({ nullable: true })
  id?: number;
}
