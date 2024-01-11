const express = require('express');
const cors = require("cors");
const app = express();
const corsOptions = {
    origin: ['http://localhost:8001/', 'http://127.0.0.1:8001/', 'http://localhost:8080/', 'http://127.0.0.1:8080/','http://localhost:9001/', 'http://127.0.0.1:9001/']
};
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { sequelize, Plovilo, Kategorija, PloviloOprema, Oprema, StavkaNarudzbine,
    Narudzbina } = require("./models");
app.use(cors({ origin: '*' }));

function authToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json({ msg: err });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=> {
        if (err) return res.status(403).json({ msg: err });
        req.user = user;
        next();
    });
}


app.get('/',(req,res) => {
    res.send('Hello from REST API service');
});

const ploviloRoutes = require("./routes/plovilo.js");
app.use("/plovilo",ploviloRoutes);


const opremaRoutes = require("./routes/oprema.js");
app.use("/oprema",opremaRoutes);


const narudzbinaRoutes = require("./routes/narudzbina.js");
app.use("/narudzbina",narudzbinaRoutes);


const kategorijaRoutes = require("./routes/kategorija.js");
app.use("/kategorija",kategorijaRoutes);


app.listen({ port:9000 }, async () => {
    await sequelize.sync({force:false});
    console.log("Started server on localhost:9000");
});


/*

sequelize model:generate --name Plovilo --attributes naziv:string,opis:string,cena:integer
8. Po istom principu napravite modele i za ostale entitete
a. sequelize model:generate --name Kategorija --attributes naziv:string
b. sequelize model:generate --name Oprema --attributes naziv:string
c. sequelize model:generate --name PloviloOprema --attributes
d. sequelize model:generate --name Narudzbina --attributes status:string
e. sequelize model:generate --name StavkaNarudzbine --attributes komada:integer



 10. Otvorite jelo.js. Primetite da postoji definicija za naziv ali ne i za id. To je zato što se id
podrazumeva. Dodajte definicije ostalih polja
naziv: {
type: DataTypes.STRING(120),
unique: true,
allowNull: false
},
opis: {
type: DataTypes.TEXT,
allowNull: true
},
cena: {
type: DataTypes.INTEGER,
allowNull: false
},
kategorija_id: {
type: DataTypes.INTEGER,
allowNull: false
}



 */