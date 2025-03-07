import { Router } from 'express';
import { getItems,getItem,postItem,deleteItem,putItem } from '../controllers/items.controllers.js';

const itemsRouter = Router();

itemsRouter.get('/items/', getItems);
itemsRouter.get('/items/:id', getItem);
itemsRouter.post('/items/', postItem);
itemsRouter.delete('/items/:id', deleteItem);
itemsRouter.put('/items/:id', putItem);


export default itemsRouter;