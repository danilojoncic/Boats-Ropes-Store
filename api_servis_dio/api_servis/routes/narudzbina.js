const express = require("express");
const { sequelize,Plovilo, Kategorija, PloviloOprema, Oprema, StavkaNarudzbine,Narudzbina} =
    require("../models")
const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({extended:true}));
module.exports = route;
// route.use(authToken);



route.get("/", async (req, res) => {
    try{
        const narudzbine = await Narudzbina.findAll({
            include: [{
                model: StavkaNarudzbine,
                as: 'stavke',
            }]
        });
        console.log(narudzbine)
        return res.json(narudzbine);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});

//GET by id
route.get("/:id", async (req, res) => {
    try{
        const narudzbina = await Narudzbina.findByPk(req.params.id,{
            include: [{
                model: StavkaNarudzbine,
                as: 'stavke',
            }]
        });
        return res.json(narudzbina);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});


route.post("/", async (req, res) => {
    const t = await sequelize.transaction(); // Start a transaction
    try {
        // Create Narudzbina record
        const narudzbina = await Narudzbina.create(req.body.narudzbina, { transaction: t });

        // Create StavkaNarudzbine records
        const stavkePromises = req.body.stavke.map(async (stavka) => {
            await StavkaNarudzbine.create({ ...stavka, narudzbina_id: narudzbina.id }, { transaction: t });
        });

        await Promise.all(stavkePromises);

        // Commit the transaction
        await t.commit();

        return res.json(narudzbina);
    } catch (err) {
        console.log(err);
        // Rollback the transaction in case of an error
        await t.rollback();
        res.status(500).json({ error: "Greska", data: err });
    }
});
route.put("/:id", async (req, res) => {
    try{
        const narudzbina = await Narudzbina.findByPk(req.params.id,{
            include: [{
                model: StavkaNarudzbine,
                as: 'stavke',
            }]
        });
        narudzbina.status = req.body.status;
        // narudzbina.vreme_narucivanja = req.body.vreme_narucivanja;
        // narudzbina.zakazno_vreme = req.body.zakazno_vreme;
        // narudzbina.adresa = req.body.adresa;
        // narudzbina.telefon = req.body.telefon;
        // narudzbina.ime_prezime = req.body.ime_prezime;
        narudzbina.save();
        return res.json(narudzbina);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});
route.delete("/:id", async (req, res) => {
    try{
        const narudzbina = await Narudzbina.findByPk(req.params.id,{
            include: [{
                model: StavkaNarudzbine,
                as: 'stavke',
            }]
        });
        narudzbina.stavke.destroy();
        narudzbina.destroy();
        return res.json( narudzbina.id );

    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});