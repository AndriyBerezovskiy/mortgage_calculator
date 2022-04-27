import { Router } from 'express';

import { bankRouter } from './bankRouter';

const router = Router();

router.use('/banks', bankRouter);

export const apiRouter = router;
