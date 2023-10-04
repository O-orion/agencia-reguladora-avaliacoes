import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import rotas from './src/routes/rotas.routes';

const app = express();
const porta = 7500;

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// Rotas da Aplicação
app.use('/', rotas);

// Iniciando servidor

app.listen(porta, () => {
  console.log(` SERVIDOR ON! localhost:${porta} `);
});
