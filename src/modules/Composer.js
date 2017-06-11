import { AuthenticationResourceChain } from 'authentication-module';
import { ExecuteChain } from 'fluid-chains';
import { GDSDomainDTO } from 'gds-config';
import { SchoolResourceChain } from 'school-module';

const protocol = (req) => {
    return req.connection.encrypted ? 'https://' : 'http://'
};
new SchoolResourceChain();
new AuthenticationResourceChain();

export default class Composer {
    constructor(app) {
        app.get('/gds', (req, res) => {
            ExecuteChain([
                'AuthenticationResourceChain',
                'SchoolResourceChain'
            ], {
                    host: req.headers.host,
                    protocol: protocol(req),
                    domain: new GDSDomainDTO()
                }, (result) => {
                    const domain = result.domain();
                    res.status(200).send(domain);
                });
        });

        app.get('/gds/:resource', (req, res) => {
            ExecuteChain(req.params.resource + 'Chain', {
                host: req.headers.host,
                protocol: protocol(req),
                domain: new GDSDomainDTO()
            }, (result) => {
                const domain = result.domain();
                res.status(200).send(domain);
            });
        });
    }
}