import { Router } from 'express';
import { getIndex,getPing } from './../controllers/index.controllers.js';

const indexRoutes = Router();

indexRoutes.get('/', getIndex);
indexRoutes.get('/about', getPing);


export default indexRoutes;