import { AppDataSource } from "../../config/dbConfig";
import { queriesSelectRecojo } from "../../sql/recojo.queries";
import { queriesSelectEnvio } from "../../sql/envio.queries";
import { IGuiaRecojo, IGuiaEnvioSelected, IRegistroCarga } from "../../interfaces/Guias";

export const recojoSeleccionado = {
  async dataRecojo(id: number, id_orden: string, tipo_usuario: string): Promise<IGuiaRecojo[]> {

    let query: string;

    if (tipo_usuario === 'proveedor') {
      query = queriesSelectRecojo.proveedor;
    } else if (tipo_usuario === 'auxiliar') {
      query = queriesSelectRecojo.auxiliar;
    } else {
      throw new Error("Tipo de usuario no reconocido");
    }

    console.log(query)
    const dataRecojoGuia = await AppDataSource.query(query, [id, id_orden]);
    return dataRecojoGuia;

  },

  async extraerWithIdOrden(id_orden: string): Promise<IRegistroCarga[]> {
    const dataRecojo = await AppDataSource.query("SELECT * FROM registros_cargas WHERE id_orden_servicio_registro_carga = ?", [id_orden])
    return dataRecojo;
  },

  async dataUserGuias(id_orden: string, id_destino: string): Promise<IGuiaEnvioSelected[]> {
    const cod = id_orden.split('-');
    let queryIndex: number;

    if (cod[0] === 'C1') {
      queryIndex = 0;
    } else if (cod[0] === 'C2') {
      console.log("SALIO C2")
      queryIndex = 1;
    } else if (cod[0] === 'OS1') {
      queryIndex = 2;
    } else if (cod[0] === 'OS2') {
      queryIndex = 3;
    } else {
      throw new Error("Prefijo de id_orden no reconocido")
    }

    const query = queriesSelectEnvio[queryIndex];
    console.log("QUERY: ", queryIndex);
    console.log(query);
    const dataEnvioGuia = await AppDataSource.query(query, [id_orden, id_destino]);
    return dataEnvioGuia;
  },

}