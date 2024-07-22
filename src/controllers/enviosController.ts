import { Request, Response } from "express";
import { listarEnvios } from "../models/consults/envios.model";

interface Guia {
  id_num_guia_despacho_envio: string;
  proceso_estado_guia: string;
  colaborador_usuario?: string;
  representante_proveedor?: string;
  last_guia?: string;
  estado_guia?: string;
  nom_usuario?: string;
}

export const listarGuiasEnvios = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id)
  try {
    const dataEnvio: Guia[] = await listarEnvios(parseInt(id));

    dataEnvio.forEach((guia: Guia) => {
      guia.last_guia = guia.id_num_guia_despacho_envio;
      guia.estado_guia = guia.proceso_estado_guia;
      guia.nom_usuario = guia.colaborador_usuario || guia.representante_proveedor;
    });

    console.log(dataEnvio)
    res.status(200).json({ dataEnvio });

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
