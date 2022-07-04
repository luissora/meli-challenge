import { createServer } from 'http';
import app from './app';

export const httpServer = createServer(app);

httpServer.listen(process.env.PORT || 3000, () => {
    console.log('server runnig in port 3000');
})