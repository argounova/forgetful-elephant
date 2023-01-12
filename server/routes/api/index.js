import router from 'express';
import noteRoutes from './noteRoutes';

router.Router();

router.use('/notes', noteRoutes);

export default router;