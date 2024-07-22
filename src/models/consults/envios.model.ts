
import { AppDataSource } from "../../config/dbConfig"
import { queriesEnvio } from "../../sql/envio.queries"


export const listarEnvios = async (id: number) => {

  for (let querie of queriesEnvio) {
    const dataGuia = await AppDataSource.query(querie, [id]);
    if (dataGuia.length > 0) return dataGuia;
  }

  return [];
}
