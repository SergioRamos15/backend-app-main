import { AppDataSource } from "../../config/dbConfig";
import { queriesSelectRecojo } from "../../sql/recojo.queries";
import { IGuiaRecojo } from "../../interfaces/Guias";

export const recojoSeleccionado = {
  async dataRecojo(id: number, id_orden: string, tipo_usuario: string): Promise<IGuiaRecojo[]> {

    let query: string;

    if(tipo_usuario === 'proveedor') {
      query = queriesSelectRecojo.proveedor;
    } else if(tipo_usuario === 'auxiliar') {
      query = queriesSelectRecojo.auxiliar;
    } else {
      throw new Error("Tipo de usuario no reconocido");
    }

    console.log(query)
    const dataRecojoGuia = await AppDataSource.query(query, [id, id_orden]);
    return dataRecojoGuia;

  }
}