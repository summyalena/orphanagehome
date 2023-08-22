import { Router } from 'express';

import donatorsRouter from './donators.route.js';
import orphansRouter from './orphans.route.js';
import adminRouter from './admin.route.js';

const apiRouter = Router();

apiRouter.use('/donators', donatorsRouter);
apiRouter.use('/orphans', orphansRouter);
apiRouter.use('/admin', adminRouter);

export default apiRouter;
