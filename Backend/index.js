import "dotenv/config";
import express from 'express';
import cors from "cors";
import indexRoutes from './routes/index.routes.js';
import itemsRouter from "./routes/items.routes.js";
import loginRouter from "./routes/login.routes.js";
import items2Router from "./routes/items2.routes.js";
import morgan from "morgan";
import { connectDB } from "./utils/mongodb.js";

const app = express();

connectDB();

app.use(cors())
app.use(morgan("dev"))
app.use(express.json());
app.use(indexRoutes);
app.use(itemsRouter);
app.use(loginRouter);

app.use(items2Router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${5000}`);
});