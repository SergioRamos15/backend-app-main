import { Request, Response } from "express";
import { listarRecojos } from "../models/consults/recojos.model";
import { IGuiaRecojo } from "../interfaces/Guias";

export const listarGuiasRecojos = async (req: Request, res: Response): Promise<Response> => {
  const { id, tipo_usuario } = req.params;
  console.log(id, tipo_usuario)

  try {
    const dataRecojo: IGuiaRecojo[] = await listarRecojos(parseInt(id), tipo_usuario);

    dataRecojo.forEach((guia: IGuiaRecojo) => {
      guia.last_guia = guia.id_orden_servicio_recojo;
      guia.estado_guia = guia.estado_mercancia_estado_recojo;
      guia.nom_usuario = guia.colaborador_usuario || guia.representante_proveedor;
    });

    console.log(dataRecojo)
    return res.status(200).json({ dataRecojo });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}