const db = require('../data/dbConfig.js');
const VideoGames = require('./videogames-model.js');
const request = require('supertest');
const server = require('../api/server.js')

describe('videogames model', () => {
    beforeEach(async () => {
        await db('videogames').truncate();
    });

    describe('Add videogame', () => {
        // Verify videogame was added
        it('Add videogame', async () => {
            let videogame = await VideoGames.add({ title: "BnS", genre: "MMORPG", releaseYear: "2012" });
            expect(videogame.title).toBe('BnS');
            expect(videogame.genre).toBe('MMORPG');
            expect(videogame.releaseYear).toBe('2012')
        })
        
        // Verify status code 201 on success
        it('201 OK', async () => {
            let videogame = { title: "League of Legends", genre: "MOBA", releaseYear: "2009" }
            const res = await request(server).post('/games').send(videogame)
            expect(res.statusCode).toBe(201)
        })
        
        // Verify status code 422 on lacking data
        it('422 ERROR', async () => {
            let videogame = { title: "Apex Legends" }
            const res = await request(server).post('/games').send(videogame)
            expect(res.statusCode).toBe(422)
        })
    })
})