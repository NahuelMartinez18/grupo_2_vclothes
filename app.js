const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

/* llamado a formulario de carga de producto*/
const mainRoutes=require('./routes/mainRoutes');

app.use(express.static('./public'));
app.set('view engine','ejs');


app.use('/',mainRoutes);
/*fin de agregador de carga de producto */


app.listen(PORT, () => console.log("Servidor corriendo en el puerto:" + PORT));



app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);

app.post("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);

app.get("/productCart", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "productCart.html"))
);

app.get("/register", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "register.html"))
);

app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "login.html"))
);

app.get("/productDetail", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "productDetail.html"))
);
