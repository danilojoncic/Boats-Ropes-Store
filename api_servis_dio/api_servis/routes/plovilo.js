const express = require("express");
const { sequelize,Plovilo, Kategorija, PloviloOprema, Oprema, StavkaNarudzbine,Narudzbina} =
    require("../models")
const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended:true}));
module.exports = route;
//prvi pokazni kod jeste uradjend nad plovilom
//sve nakon se mora uraditi

//GET
route.get("/", async (req, res) => {
    try{
        const plovila = await Plovilo.findAll({
            include: [{
                model: Kategorija,
                as: 'kategorija',
                attributes: ['naziv']
            }]
        });
        return res.json(plovila);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});

//GET by id
route.get("/:id", async (req, res) => {
    try{
        const plovilo = await Plovilo.findByPk(req.params.id,{
            include: [{
                model: Kategorija,
                as: 'kategorija',
                attributes: ['naziv']
            }]
        });
        return res.json(plovilo);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});


route.post("/", async (req, res) => {
    try{
        const novi = await Plovilo.create(req.body);
        return res.json(novi);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});
route.put("/:id", async (req, res) => {
    try{
        const plovilo = await Plovilo.findByPk(req.params.id);
        plovilo.naziv = req.body.naziv;
        plovilo.opis = req.body.opis;
        plovilo.cena = req.body.cena;
        plovilo.kategorija_id = req.body.kategorija_id;
        plovilo.save();
        return res.json(plovilo);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});
route.delete("/:id", async (req, res) => {
    try{
        const plovilo = await Plovilo.findByPk(req.params.id);
        plovilo.destroy();
        return res.json( plovilo.id );

    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});