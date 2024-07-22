import { Request, Response } from 'express';
import { envioSeleccionado } from '../models/consults/selectEnvio.model';
import { IGuiaEnvioSelected, IRegistroCarga, IGuiaEnvioProgress } from '../interfaces/Guias';

export const guiaSeleccionadaEnvio = async (req: Request, res: Response): Promise<Response> => {
  const { id, id_num_guia, tipo_usuario } = req.params;
  console.log(id, tipo_usuario);

  try {

    const dataGuia: IRegistroCarga[] = await envioSeleccionado.extraerWithIdGuia(id_num_guia);
    if (!dataGuia || dataGuia.length === 0) {
      return res.status(404).json({ message: "Guia no encontrada" })
    }

    const { id_orden_servicio_registro_carga, id_destino_registro_carga } = dataGuia[0];
    console.log(id_orden_servicio_registro_carga, id_destino_registro_carga);

    const dataEnvioGuia = await envioSeleccionado.dataEnvio(id_orden_servicio_registro_carga, id_destino_registro_carga);
    if (dataEnvioGuia.length > 0) {
      dataEnvioGuia[0].id_guia = id_orden_servicio_registro_carga;
    }

    console.log(dataEnvioGuia);

    const dataProgressGuia: IGuiaEnvioProgress[] = await envioSeleccionado.dataProgressEnvio(parseInt(id), id_num_guia, tipo_usuario);

    return res.status(200).json({ dataEnvioGuia, dataProgressGuia });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}