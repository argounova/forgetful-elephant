import router from 'express';
import apiRoutes from './api';

router.Router();

router.use('/api', apiRoutes);

export default router;