const express = require("express");
const app = express();
const port = 3000;

// Ruta principal que retorna un mensaje de bienvenida
app.get("/", (req, res) => {
  res.send("Hello, welcome to my Express app!");
});

// Ruta de ejemplo que retorna un JSON
app.get("/api/example", (req, res) => {
  res.json({ message: "This is an example API endpoint!" });
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
