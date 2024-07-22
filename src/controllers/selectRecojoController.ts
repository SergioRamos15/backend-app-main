import { Request, Response } from 'express';
import { recojoSeleccionado } from '../models/consults/selectRecojo.model';
import { IGuiaRecojo } from '../interfaces/Guias';

export const guiaSeleccionadoRecojo = async (req: Request, res: Response): Promise<Response> => {
  const { id, id_orden, tipo_usuario } = req.params;
  console.log(id, id_orden, tipo_usuario);

  try {
    let dataGuiaRecojo: IGuiaRecojo | undefined;

    const dataGuia: IGuiaRecojo[] = await recojoSeleccionado.dataRecojo(parseInt(id), id_orden, tipo_usuario);
    if (!dataGuia || dataGuia.length === 0) {
      return res.status(404).json({ message: "Guia no encontrada" })
    }

    console.log(dataGuia)

    dataGuiaRecojo = dataGuia.find(guia => guia.id_orden_servicio_recojo === id_orden);

    console.log(dataGuiaRecojo);
    return res.status(200).json({ dataGuiaRecojo });

  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

}
