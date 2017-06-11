import { AuthenticationResource } from 'authentication-module';
import { SchoolResource } from 'school-module';
import http from 'http';
import io from 'socket.io';

const PORT = process.env.PORT || 9080;
export default class ResourceConfig {
    constructor(app) {
        const server = http.createServer(app);
        const sockets = io(server);
        server.listen(PORT);
        new AuthenticationResource(app);
        new SchoolResource(app);
        console.log('listening to port', PORT);
    }
}