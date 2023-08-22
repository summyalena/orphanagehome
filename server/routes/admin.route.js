import { Router } from 'express';

import { signUpAdmin, loginAdmin } from '../controller/admin.controller.js';

const adminRouter = Router();

adminRouter.post('/signup', signUpAdmin);
adminRouter.post('/login', loginAdmin);

export default adminRouter;
