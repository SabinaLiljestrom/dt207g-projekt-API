/**
 * Webbtjänst för moment  5 - projekt
 * Av Sabina Liljeström
 */

const express = require("express");
const bodyParser = require ("body-parser");
const authRoutes = require ("./routes/authRoutes");
const jwt = require("jsonwebtoken");
const cors = require('cors');
require("dotenv").config();

//init express
const app = express ();
let port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors({
  origin: '*', // Tillåt alla ursprung
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Tillåt dessa metoder
  allowedHeaders: ['Content-Type', 'Authorization'] // Tillåt dessa headers
}));

//routes
app.use("/api", authRoutes);

// skyddad routes
app.get ("/api/protected", authenticateToken, (req, res) => {
    res.json ({message: "Skyddad route!"});
});

//validera Token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Token från headern

    if (token == null) {
        return res.status(401).json({ message: "Not authorized for this route - token missing!" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" }); // Felaktig token ger JSON-svar
        }

        req.username = user.username; // Användaren hämtad från JWT payload
        next(); // Fortsätt till skyddad route
    });
}

//starta applikation
app.listen(port, () => {
    console.log (`server running at http://localhost:${port}`);
})