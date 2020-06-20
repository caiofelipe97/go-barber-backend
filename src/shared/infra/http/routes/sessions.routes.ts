import { Router } from 'express';

import AuthenticateUserService from '../../../../modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authentiateUser = new AuthenticateUserService();

  const { user, token } = await authentiateUser.execute({
    email,
    password,
  });

  delete user.password;

  return res.json({ user, token });
});

export default sessionsRouter;