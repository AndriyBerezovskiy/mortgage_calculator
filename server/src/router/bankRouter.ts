import { Router } from 'express';

import { bankController } from '../controller/bankController';

const router = Router();

router.post('/', bankController.createBank);
router.get('/', bankController.getBank);
router.delete('/:id', bankController.deleteBank);

export const bankRouter = router;
