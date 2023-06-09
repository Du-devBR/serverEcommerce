const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3333;
require('dotenv').config();


app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Conexão com o MongoDB estabelecida com sucesso');
})
.catch((error) => {
  console.error('Erro ao conectar com o MongoDB:', error);
});


const productsRoutes = require("./src/routes/ProductRoute");

app.use("/api", productsRoutes);

app.listen(port, (req, res) => {
  console.log(`Servidor iniciado na porta ${port}`);
})
