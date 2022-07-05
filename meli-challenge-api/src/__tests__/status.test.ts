import request from 'supertest'
import app from '../app'

describe('Endpoint Status', () => {
    test('Test /status ok', async () => {
        const res = await request(app).get('/api/status');

        expect(res.statusCode).toBe(200);
        expect(JSON.parse(res.text)).toEqual({
            apiStatus: "OK",
            isRunning: true,
        });

    })
})