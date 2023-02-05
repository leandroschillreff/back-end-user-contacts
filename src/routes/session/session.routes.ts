import { Router } from 'express';
import { createSessionController } from '../../controllers/session/createSession.controller';
import validateSerializerMiddleware from '../../middlewares/validateSerializer.middleware';
import { sessionUserSerializer } from '../../serializers/user/user.serializers';

const router = Router();

router.post('', validateSerializerMiddleware(sessionUserSerializer), createSessionController);

export default router;
