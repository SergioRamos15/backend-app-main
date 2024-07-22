import { AppDataSource } from "../../config/dbConfig";
import { queriesSelectEnvio, dataProgressEnvio } from "../../sql/envio.queries";
import { IGuiaEnvioSelected, IRegistroCarga, IGuiaEnvioProgress } from "../../interfaces/Guias";

export const envioSeleccionado = {
  async extraerWithIdGuia(id_num_guia: string): Promise<IRegistroCarga[]> {
    const dataEnvio = await AppDataSource.query("SELECT * FROM registros_cargas WHERE id_num_guia_registro_carga = ?", [id_num_guia])
    return dataEnvio;
  },

  async dataEnvio(id_orden: string, id_destino: string): Promise<IGuiaEnvioSelected[]> {
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

  async dataProgressEnvio(id: number, id_num_guia: string, tipo: string): Promise<IGuiaEnvioProgress[]> {
    let dataProgress: IGuiaEnvioProgress[];

    if (tipo === 'proveedor') {
      dataProgress = await AppDataSource.query(dataProgressEnvio[0], [id, id_num_guia]);
      if (!dataProgress.length) {
        dataProgress = await AppDataSource.query(dataProgressEnvio[1], [id, id_num_guia]);
      }
      return dataProgress;
    } else if (tipo === 'auxiliar') {
      dataProgress = await AppDataSource.query(dataProgressEnvio[2], [id, id_num_guia]);
    } else {
      throw new Error("Tipo de usuario no reconocido")
    }

    if (!dataProgress.length) {
      throw new Error("No se encontraron datos")
    }

    return dataProgress;
  }
}