import { ChainCacheEnabled, ChainStrictModeEnabled } from 'fluid-chains';
import { Composer, ResourceConfig } from './modules/';
import { GDSDatabase, GDSServer } from 'gds-config';

import express from 'express';
import path from 'path';

const app = express();

ChainStrictModeEnabled();
ChainCacheEnabled();
new GDSDatabase().connect((errDB) => {
    if (errDB) {
        console.error(errDB);
    } else {
        new GDSServer(app);
        new ResourceConfig(app);
        new Composer(app);
        app.use('/lrts', express.static(path.join('node_modules', 'gds-lrts')));
    }
});

export default app;



