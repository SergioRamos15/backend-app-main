export const queriesRecojo = {
  proveedor: `
    SELECT * FROM asignacion_recojos ar
    LEFT JOIN estados_recojos e ON ar.id_orden_servicio_recojo = e.id_orden_servicio_estado_recojo
    LEFT JOIN proveedores p ON ar.id_proveedor_recojo = p.id WHERE p.id = ?;
  `,
  auxiliar: `
    SELECT * FROM asignacion_recojos ar
    LEFT JOIN estados_recojos e ON ar.id_orden_servicio_recojo = e.id_orden_servicio_estado_recojo
    LEFT JOIN usuarios u ON ar.id_auxiliar_recojo = u.id
    WHERE u.cargo_usuario = ? AND u.id = ?;
  `,
}

export const queriesSelectRecojo = {

  proveedor: `
  SELECT * FROM asignacion_recojos a
  LEFT JOIN estados_recojos e
  ON e.id_orden_servicio_estado_recojo = a.id_orden_servicio_recojo
  WHERE id_proveedor_recojo = ? AND a.id_orden_servicio_recojo = ?
  ORDER BY a.id DESC;
  `,
  auxiliar: `
  SELECT * FROM asignacion_recojos a
  LEFT JOIN estados_recojos e
  ON e.id_orden_servicio_estado_recojo = a.id_orden_servicio_recojo
  WHERE a.id_auxiliar_recojo = ? AND a.id_orden_servicio_recojo = ?
  ORDER BY a.id DESC;
  `
  
}
