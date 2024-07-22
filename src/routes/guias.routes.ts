import { Router } from 'express';
import { listarGuiasEnvios } from '../controllers/enviosController';
import { listarGuiasRecojos } from '../controllers/recojosController';
import { guiaSeleccionadaEnvio } from '../controllers/selectEnvioController';
import { guiaSeleccionadoRecojo } from '../controllers/selectRecojoController';

const router = Router();

//! Rutas para listar y seleccionar Envios
router.get('/listar-envios/:id', listarGuiasEnvios);
router.get('/guia-envio-seleccionado/:id/:id_num_guia/:tipo_usuario', guiaSeleccionadaEnvio);

//! Rutas para listar y seleccionar Recojos
router.get('/listar-recojos/:id/:tipo_usuario', listarGuiasRecojos);
router.get('/guia-recojo-seleccionado/:id/:id_orden/:tipo_usuario', guiaSeleccionadoRecojo);

export default router;