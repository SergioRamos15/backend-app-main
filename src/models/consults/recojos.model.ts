import { AppDataSource } from "../../config/dbConfig"
import { IGuiaRecojo } from "../../interfaces/Guias"
import { queriesRecojo } from "../../sql/recojo.queries"

export const listarRecojos = async (id: number, tipo_usuario: string): Promise<IGuiaRecojo[]> => {

  let dataRecojo: IGuiaRecojo[] = []

  if (tipo_usuario === 'proveedor') {
    dataRecojo = await AppDataSource.query(queriesRecojo.proveedor, [id]);
  } else if (tipo_usuario === 'auxiliar') {
    dataRecojo = await AppDataSource.query(queriesRecojo.auxiliar, [tipo_usuario, id]);
  } else {
    throw new Error('Tipo de usuario no válido');
  }

  return dataRecojo;

}