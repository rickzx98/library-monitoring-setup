import { ChainCacheEnabled, ChainStrictModeEnabled } from 'fluid-chains';
import { Composer, ResourceConfig } from './modules/';
import { GDSDatabase, GDSServer } from 'gds-config';

import express from 'express';

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
    }
});

export default app;



