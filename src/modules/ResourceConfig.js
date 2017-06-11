import { AuthenticationResource } from 'authentication-module';
import { SchoolResource } from 'school-module';

const PORT = process.env.PORT || 5000;


export default class ResourceConfig {
    constructor(app) {
        app.listen(PORT, () => {
            console.log('listening to port', PORT);
            new AuthenticationResource(app);
            new SchoolResource(app);
        });
    }
}