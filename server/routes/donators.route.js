import { Router } from 'express';

import {
  createDonator,
  getDonators,
} from '../controller/donators.controller.js';

const donatorsRouter = Router();

donatorsRouter.get('/', getDonators);
donatorsRouter.post('/', createDonator);

export default donatorsRouter;
