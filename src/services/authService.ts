import { AppDataSource } from "../config/dbConfig";
import { Usuario } from "../models/entities/User";
import { Proveedor } from "../models/entities/Proveedor";
import jwt from "jsonwebtoken";

interface AuthResult {
  token: string;
  data: any;
}

const userRepository = AppDataSource.getRepository(Usuario);
const proveedorRepository = AppDataSource.getRepository(Proveedor);

const findUser = async (dni_usuario: string) => {
  console.log(`Buscando usuario con dni: ${dni_usuario}`)
  return await userRepository.findOne({ where: { dni_usuario, estado: '1', cargo_usuario: 'auxiliar' } });
};

const findProveedor = async (dni_proveedor: string) => {
  console.log(`Buscando proveedor con dni: ${dni_proveedor}`)
  return await proveedorRepository.findOne({ where: { dni_proveedor, estado: '1' } });
};

/**
 * 
 * @param {string} dni - DNI del usuario(auxiliar) o proveedor
 * @param {string} password - clave del usuario(auxiliar) o proveedor
 * @returns 
 */

export const authenticateUser = async (dni: string, password: string): Promise<AuthResult | null> => {
  console.log(`Autenticando usuario con dni: ${dni}`)
  let user = await findUser(dni);

  if (user) {
    if (password !== user.clave_usuario) {
      console.log('Contraseña incorrecta para el usuario')
      return null;
    }

    const token = jwt.sign(
      { id: user.id, dni: user.dni_usuario, name: user.colaborador_usuario, userType: 'auxiliar' },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    const userData = { ...user, tipo_usuario: 'auxiliar' };

    console.log('Usuario autenticado');
    return { token, data: userData };
  }

  const provider = await findProveedor(dni);
  if (provider) {
    if (password !== provider.clave_proveedor) {
      console.log('Contraseña incorrecta para el proveedor')
      return null;
    }

    const token = jwt.sign(
      { id: provider.id, dni: provider.dni_proveedor, name: provider.representante_proveedor, userType: 'proveedor' },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    const providerData = { ...provider, tipo_usuario: 'proveedor' };

    console.log('Proveedor autenticado');
    return { token, data: providerData };
  }

  console.log('Usuario o proveedor no encontrado');
  return null;
};

export const verifyToken = (token: string): any => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return decoded;
  } catch (error) {
    return null;
  }
}