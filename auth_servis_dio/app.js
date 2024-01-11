const { sequelize, User } = require('./models');

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

require('dotenv').config();

var corsOptions = {
    origin: ['http://localhost:8001/', 'http://127.0.0.1:8001/', 'http://localhost:8080/', 'http://127.0.0.1:8080/'],
    optionsSuccessStatus: 200
}

const app = express();
app.use(express.json());
// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));
app.use(cors({ origin: '*' }));


// REGISTER
app.post('/register', (req, res) => {
    const obj = {
        username: req.body.username,
        email: req.body.email,
        admin: false,
        password: bcrypt.hashSync(req.body.password, 10)
    };
    User.create(obj).then(rows => {
        const usr = {
            userId: rows.id,
            user: rows.username
        };
        const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);
        res.json({ token: token, id: rows.id });
    }).catch(err => res.status(500).json(err));
});

// LOGIN
// LOGIN
app.post('/login', async (req, res) => {
    try {
        console.log("Krenuo da se upisem");

        const { username, password } = req.body;

        console.log("Received login request for username:", username);

        const usr = await User.findOne({ where: { username } });

        if (!usr) {
            console.log("User not found");
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        console.log("Hashed password in the database:", usr.password);

        if (!bcrypt.compareSync(password, usr.password)) {
            console.log("Password comparison failed");
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        let usr_role = usr.admin ? 'admin' : 'user';
        if(usr_role === 'user'){
            throw err;
        }

        // res.header('Access-Control-Allow-Origin', 'http://localhost:8001');
        // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // res.header('Access-Control-Allow-Headers', 'Content-Type');
        // console.log("USPJESNO");

        const token = jwt.sign({ userId: usr.id, user: usr.username, role: usr_role }, process.env.ACCESS_TOKEN_SECRET);
        res.json({ token: token, id: usr.id });
    } catch (err) {
        console.error("Error during login:", err); // Log the error
        res.status(500).json({ msg: "You can not login!" });
    }
});


app.listen({ port: 9001 }, async () => {
    console.log("Started server on port 9001")
    await sequelize.authenticate();
});