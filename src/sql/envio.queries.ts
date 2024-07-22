export const queriesEnvio = [
   `
  SELECT 
     de.*,
     d.*,
     p.representante_proveedor,
     e.proceso_estado_guia,
     e.num_intento_estado_guia
  FROM despachos_envios de
  LEFT JOIN despachos d ON d.id_num_manifiesto_despacho = de.id_num_manifiesto_despacho_envio
  LEFT JOIN proveedores p ON p.id = de.id_agente_despacho_envio
  LEFT JOIN estados_guias e 
     ON e.id_num_guia_estado_guia = de.id_num_guia_despacho_envio
     AND e.num_intento_estado_guia = (
        SELECT MAX(num_intento_estado_guia)
        FROM estados_guias
        WHERE id_num_guia_estado_guia = de.id_num_guia_despacho_envio
     )
  WHERE id_num_manifiesto_despacho_envio != '0' 
     AND id_agente_despacho_envio = ?;`,

   `
  SELECT
     de.*,
     d.*,
     p.representante_proveedor,
     e.proceso_estado_guia,
     e.num_intento_estado_guia
  FROM despachos_envios de
  LEFT JOIN despachos d ON d.id_num_manifiesto_despacho = de.id_num_manifiesto_despacho_envio
  LEFT JOIN proveedores p ON p.id = de.id_agente_despacho_envio 
  OR p.id = de.id_transportista_despacho_envio
  LEFT JOIN estados_guias e 
     ON e.id_num_guia_estado_guia = de.id_num_guia_despacho_envio
     AND e.num_intento_estado_guia = (
        SELECT MAX(num_intento_estado_guia)
        FROM estados_guias
        WHERE id_num_guia_estado_guia = de.id_num_guia_despacho_envio
     )
  WHERE de.id_num_manifiesto_despacho_envio != '0'
     AND de.id_agente_despacho_envio IS NULL
     AND de.id_transportista_despacho_envio = ?;`,

   `
  SELECT 
     de.*, 
     d.*, 
     u.colaborador_usuario,
     e.estado_mercancia_estado_guia
  FROM despachos_envios de
  LEFT JOIN despachos d ON d.id_num_manifiesto_despacho = de.id_num_manifiesto_despacho_envio
  LEFT JOIN usuarios u ON u.id = d.id_auxiliar_despacho
  LEFT JOIN estados_guias e 
     ON e.id_num_guia_estado_guia = de.id_num_guia_despacho_envio
     AND e.num_intento_estado_guia = (
        SELECT MAX(num_intento_estado_guia)
        FROM estados_guias
        WHERE id_num_guia_estado_guia = de.id_num_guia_despacho_envio
     )
  WHERE de.id_num_manifiesto_despacho_envio != '0' 
     AND de.id_agente_despacho_envio IS NULL
     AND de.id_transportista_despacho_envio IS NULL 
     AND d.id_auxiliar_despacho = ?;`
]

export const queriesSelectEnvio = [
   `
      SELECT 
         cd.telefono_cotizacion_destino AS telefono,
         cd.direccion_cotizacion_destino AS direccion,
         ub_cd.DEPARTAMENTO AS 'departamento_destino',
         ub_cd.PROVINCIA AS 'provincia_destino',
         ub_cd.DESTINO AS 'distrito_destino',
         cd.referencias_cotizacion_destino AS referencias,
         cd.contenido_mercancia_cotizacion_destino AS contenido_mercancia,
         cd.cantidad_mercancia_cotizacion_destino AS cantidad_mercancia
      FROM cotizaciones_destinos cd
      INNER JOIN clientes c ON cd.id_cliente_cotizacion_destino = c.id
      INNER JOIN ubigeo ub ON ub.UBIGEO = c.ubigeo_cliente
      INNER JOIN ubigeo ub_cd ON ub_cd.UBIGEO = cd.ubigeo_cotizacion_destino
      INNER JOIN areas ar ON cd.id_area_cotizacion_destino = ar.id        
      WHERE cd.id_cotizacion_cotizacion_destino = ? AND cd.id = ?`,
   `
      SELECT 
         cd.telefono_punto_venta_destino AS telefono,
         cd.direccion_punto_venta_destino AS direccion,
         ub_cd.DEPARTAMENTO AS 'departamento_destino',
         ub_cd.PROVINCIA AS 'provincia_destino',
         ub_cd.DESTINO AS 'distrito_destino',
         cd.referencias_punto_venta_destino AS referencias,
         cd.contenido_mercancia_punto_venta_destino AS contenido_mercancia,
         cd.cantidad_mercancia_punto_venta_destino AS cantidad_mercancia
      FROM punto_ventas_destinos cd
      INNER JOIN clientes c ON cd.id_cliente_punto_venta_destino = c.id
      INNER JOIN ubigeo ub ON ub.UBIGEO = c.ubigeo_cliente
      INNER JOIN ubigeo ub_cd ON ub_cd.UBIGEO = cd.ubigeo_punto_venta_destino
      INNER JOIN areas ar ON cd.id_area_punto_venta_destino = ar.id
      WHERE cd.id_punto_venta_destino = ? AND cd.id = ?`,
   `
      SELECT 
         cd.telefono_exc_registro_envio_destino AS telefono,
         cd.direccion_registro_envio_destino AS direccion,
         ub_cd.DEPARTAMENTO AS 'departamento_destino',
         ub_cd.PROVINCIA AS 'provincia_destino',
         ub_cd.DESTINO AS 'distrito_destino',
         cd.referencias_registro_envio_destino AS referencias,
         cd.contenido_mercancia_registro_envio_destino AS contenido_mercancia,
         cd.cantidad_mercancia_registro_envio_destino AS cantidad_mercancia
      FROM registro_envio_destinos cd
      INNER JOIN clientes c ON cd.id_cliente_registro_envio_destino = c.id
      INNER JOIN ubigeo ub ON ub.UBIGEO = c.ubigeo_cliente
      INNER JOIN ubigeo ub_cd ON ub_cd.UBIGEO = cd.ubigeo_registro_envio_destino
      INNER JOIN areas ar ON cd.id_area_registro_envio_destino = ar.id
      WHERE cd.id_registro_envio_destino = ? AND cd.id = ?`,
   `
      SELECT 
         cd.telefono_registro_masivo_destino AS telefono,
         cd.direccion_registro_masivo_destino AS direccion,
         ub_cd.DEPARTAMENTO AS 'departamento_destino',
         ub_cd.PROVINCIA AS 'provincia_destino',
         ub_cd.DESTINO AS 'distrito_destino',
         cd.referencias_registro_masivo_destino AS referencias,
         cd.contenido_mercancia_registro_masivo_destino AS contenido_mercancia,
         cd.cantidad_mercancia_registro_masivo_destino AS cantidad_mercancia
      FROM registro_masivo_destinos cd
      INNER JOIN clientes c ON cd.id_cliente_registro_masivo_destino = c.id
      INNER JOIN ubigeo ub ON ub.UBIGEO = c.ubigeo_cliente
      INNER JOIN ubigeo ub_cd ON ub_cd.UBIGEO = cd.ubigeo_registro_masivo_destino
      INNER JOIN areas ar ON cd.id_area_registro_masivo_destino = ar.id        
      WHERE cd.id_registro_masivo_destino = ? AND cd.id = ?`
]

export const dataProgressEnvio = [
   `
   SELECT de.*, d.*, p.representante_proveedor, e.proceso_estado_guia, e.num_intento_estado_guia
   FROM
     despachos_envios de
     LEFT JOIN despachos d ON d.id_num_manifiesto_despacho = de.id_num_manifiesto_despacho_envio
     LEFT JOIN proveedores p ON p.id = de.id_agente_despacho_envio
     LEFT JOIN estados_guias e ON e.id_num_guia_estado_guia = de.id_num_guia_despacho_envio
   WHERE
     id_num_manifiesto_despacho_envio != '0'
     AND id_agente_despacho_envio = ?
     AND de.id_num_guia_despacho_envio = ?;
   `,
   `
   SELECT de.*, d.*, p.representante_proveedor, e.proceso_estado_guia, e.num_intento_estado_guia
   FROM
     despachos_envios de
     LEFT JOIN despachos d ON d.id_num_manifiesto_despacho = de.id_num_manifiesto_despacho_envio
     LEFT JOIN proveedores p ON p.id = de.id_transportista_despacho_envio
     LEFT JOIN estados_guias e ON e.id_num_guia_estado_guia = de.id_num_guia_despacho_envio
   WHERE
     de.id_num_manifiesto_despacho_envio != '0'
     AND de.id_agente_despacho_envio IS NULL
     AND de.id_transportista_despacho_envio = ?
     AND de.id_num_guia_despacho_envio = ?;
   `,
   `
   SELECT d.*, u.colaborador_usuario, e.estado_mercancia_estado_guia, e.proceso_estado_guia, e.num_intento_estado_guia
   FROM
     despachos_envios de
     LEFT JOIN despachos d ON d.id_num_manifiesto_despacho = de.id_num_manifiesto_despacho_envio
     LEFT JOIN usuarios u ON u.id = d.id_auxiliar_despacho
     LEFT JOIN estados_guias e ON e.id_num_guia_estado_guia = de.id_num_guia_despacho_envio
   WHERE
     de.id_num_manifiesto_despacho_envio != '0'
     AND de.id_agente_despacho_envio IS NULL
     AND de.id_transportista_despacho_envio IS NULL
     AND d.id_auxiliar_despacho = ?
     AND de.id_num_guia_despacho_envio = ?;
   `,
];



