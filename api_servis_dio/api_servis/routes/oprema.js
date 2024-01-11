const express = require("express");
const { sequelize,Plovilo, Kategorija, PloviloOprema, Oprema, StavkaNarudzbine,Narudzbina} =
    require("../models")
const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended:true}));
module.exports = route;


//GET
route.get("/", async (req, res) => {
    try{
        const opreme = await Oprema.findAll();
        return res.json(opreme);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});

//GET by id
route.get("/:id", async (req, res) => {
    try{
        const oprema = await Oprema.findByPk(req.params.id);
        return res.json(oprema);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});


route.post("/", async (req, res) => {
    try{
        const novi = await Oprema.create(req.body);
        return res.json(novi);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});
route.put("/:id", async (req, res) => {
    try{
        const oprema = await Oprema.findByPk(req.params.id);
        oprema.naziv = req.body.naziv;
        oprema.save();
        return res.json(oprema);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});
route.delete("/:id", async (req, res) => {
    try{
        const oprema = await Oprema.findByPk(req.params.id);
        oprema.destroy();
        return res.json( oprema.id );

    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});