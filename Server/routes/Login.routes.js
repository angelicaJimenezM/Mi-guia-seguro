import {Router} from 'express';
import {login} from '../controller/auth/login.controller.js'
export const router = Router();

router.post('/Iniciar-sesion',login)