import cors from 'cors'

export default cors({ 
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT'], 
    allowedHeaders: ['origin', 'apikey', 'content-type', 'host', 'Authorization'], 
    credentials: false, 
    exposedHeaders: ['Authorization'],
    optionsSuccessStatus: 200
})