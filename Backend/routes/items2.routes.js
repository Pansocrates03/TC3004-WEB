import { Router } from 'express';
import {
    getItems,
    getItem,
    postItem,
    deleteItem,
    putItem
} from '../controllers/items2.controllers.js';

const itemsRouter = Router();

itemsRouter.get('/items2/', getItems);
itemsRouter.get('/items2/:id', getItem);
itemsRouter.post('/items2/', postItem);
itemsRouter.delete('/items2/:id', deleteItem);
itemsRouter.put('/items2/:id', putItem);


export default itemsRouter;