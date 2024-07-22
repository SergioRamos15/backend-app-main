//! Envio
export interface IGuiaEnvio {
  id_num_guia_despacho_envio: string;
  proceso_estado_guia: string;
  colaborador_usuario?: string;
  representante_proveedor?: string;
  last_guia?: string;
  estado_guia?: string;
  nom_usuario?: string;
}

export interface IGuiaEnvioSelected {
  telefono: string;
  direccion: string;
  departamento_destino: string;
  provincia_destino: string;
  distrito_destino: string;
  referencias: string;
  contenido_mercancia: string;
  cantidad_mercancia: string;
  id_guia?: string;
}

export interface IGuiaEnvioProgress {
  id: number;
  id_transportista_despacho_envio: number | null;
  id_num_manifiesto_despacho_envio: string | null;
  id_num_guia_despacho_envio: string | null;
  id_agente_despacho_envio: number | null;
  id_creador_despacho: number | null;
  fecha_creado: string | null;
  fecha_actualizado: string | null;
  id_num_manifiesto_despacho: string | null;
  id_transportista_despacho: number | null;
  guia_transportista_despacho: string | null;
  conductor_despacho: string | null;
  id_conductor_despacho: number | null;
  auxiliar_despacho: string | null;
  id_auxiliar_despacho: number | null;
  ubigeo_despacho: string | null;
  placa_despacho: string | null;
  tipo_vehiculo_despacho: string | null;
  id_vehiculo_despacho: number | null;
  cantidad_bultos_despacho: number | null;
  peso_total_despacho: string | null;
  representante_proveedor: string | null;
  proceso_estado_guia: string | null;
  num_intento_estado_guia: string | null;
}


//! Recojo
export interface IGuiaRecojo {
  id: number;
  id_orden_servicio_recojo: string;
  id_proveedor_recojo?: number;
  id_auxiliar_recojo?: number;
  estado_mercancia_estado_recojo?: string;
  colaborador_usuario?: string;
  representante_proveedor?: string;
  last_guia?: string;
  estado_guia?: string;
  nom_usuario?: string;
}

export interface IRegistroCarga {
  id_orden_servicio_registro_carga: string;
  id_destino_registro_carga: string;
}

export interface IGuiaRecojoSelected {
  id: number;
  id_orden_servicio_recojo: string;
  id_proveedor_recojo: number;
  dni_conductor_recojo: string;
  nombre_conductor_recojo: string;
  dni_auxiliar_recojo: string;
  nombre_auxiliar_recojo: string;
  id_conductor_recojo: number | null;
  id_auxiliar_recojo: number | null;
  fecha_creado: Date;
  fecha_actualizado: Date;
  id_orden_servicio_estado_recojo: string;
  proceso_estado_recojo: string;
  estado_mercancia_estado_recojo: string;
  comentario_estado_recojo: string;
  imagen_estado_recojo: string;
  id_creador_estado_recojo: number;
  dni_proveedor: string;
  razon_social_proveedor: string;
  representante_proveedor: string;
  clave_proveedor: string;
  tipo_proveedor: string;
  tipo_servicio_proveedor: string;
  ubigeo_proveedor: string;
  direccion_proveedor: string;
  referencias_proveedor: string;
  contacto_proveedor: string;
  telefono_proveedor: string;
  email_proveedor: string;
  estado: string;
}



