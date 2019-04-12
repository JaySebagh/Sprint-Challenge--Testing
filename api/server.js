const express = require('express');
const videogames = require('../videogames/videogames-model.js')
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ Beep_Boop: 'Server Alive' })
})

server.get('/games', async(req, res) => {
    const rows = await videogames.find()

    res.status(200).json(rows);
})

server.post('/games', async(req, res) => {
    const info = req.body;
    if (!info.title || !info.genre){
       return res.status(422).json({ message: "Must have title and genre." }) 
    } else {
        try{
            const game = req.body;
            const list = await videogames.add(game);
            res.status(201).json(list)
        } catch (error) {
            res.status(500).json(error)
            console.log(error);
        }
    }
})

module.exports = server;