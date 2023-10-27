import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(3000, () => console.log(`App running on port 3000.`));
