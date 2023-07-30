const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => console.log("Servidor corriendo en el puerto:" + PORT));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => 
  res.sendFile(path.join(__dirname, "views", "index.html"))
);

app.get("/register", (req, res) => 
  res.sendFile(path.join(__dirname, "views", "register.html"))
);
app.post("/", (req, res) => 
  res.sendFile(path.join(__dirname, "views", "index.html"))
);

app.post("/", (req, res) => res.redirect("/"));