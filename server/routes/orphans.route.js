import { Router } from 'express';

import { createOrphan, getOrphans } from '../controller/orphans.controller.js';

const orphansRouter = Router();

orphansRouter.get('/', getOrphans);
orphansRouter.post('/', createOrphan);

export default orphansRouter;