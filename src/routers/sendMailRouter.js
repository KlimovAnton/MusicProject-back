import { Router } from 'express';

import { sendMailController } from '../controllers/sendMailController.js';

const router = Router();

router.get('/contacts', sendMailController);

export default router;