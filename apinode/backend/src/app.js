import express from "express";
import routes from "./routes/routes.js"; // Asegúrate de que la ruta sea correcta según tu estructura de directorios
import cors from "cors"

 
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(3000, () => {
  console.log("Servidor Express escuchando en el puerto 3000");
});
