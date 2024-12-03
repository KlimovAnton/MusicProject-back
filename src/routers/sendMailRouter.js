import { Router } from 'express';

import { sendMailController } from '../controllers/sendMailController.js';

const router = Router();

router.post('/contacts', sendMailController);

export default router;