import request from 'supertest'
import app from '../app'

describe('Route Products', () => {
    test('Test endpoints /items/?q=:query', async () => {
        const res = await request(app).get('/api/items/?q=motorola');

        expect(res.statusCode).toBe(200);
    })
    test('Test endpoints /items/?q=:query not query', async () => {
        const res = await request(app).get('/api/items/?q=');

        expect(res.statusCode).toBe(400);
    })
    test('Test enspoint /items/:id', async () => {
        const res = await request(app).get('/api/items/MLA1143030009')
        
        expect(res.statusCode).toBe(200);
    })
})