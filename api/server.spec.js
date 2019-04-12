const request = require('supertest');
const server = require('./server.js')

describe('server.js', () => {
    describe('GET /', () => {
        // Checking for status code 200 (SuperJest)
        it('200 OK', () => {
            return request(server)
                .get('/')
                .expect(200);
        })

        // Verify JSON returned (Jest)
        it('JSON', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toBe('application/json')
                })
        })

        // Checking server alive (Jest)
        it('Server Alive', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({ Beep_Boop: "Server Alive" });
            })
        })
    })
})