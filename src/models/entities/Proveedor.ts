import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('proveedores')
export class Proveedor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  dni_proveedor!: string;

  @Column()
  razon_social_proveedor!: string;

  @Column()
  representante_proveedor!: string;

  
  @Column()
  clave_proveedor!: string;

  @Column()
  tipo_proveedor!: string;

  @Column()
  tipo_servicio_proveedor!: string;

  @Column()
  ubigeo_proveedor!: string;

  @Column()
  direccion_proveedor!: string;

  @Column()
  referencias_proveedor!: string;

  @Column()
  contacto_proveedor!: string;

  @Column()
  telefono_proveedor!: string;

  @Column()
  email_proveedor!: string;

  @Column({ default: '1' })
  estado!: string;

  @Column()
  fecha_creado!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_actualizado!: Date;
}
