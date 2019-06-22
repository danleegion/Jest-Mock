import express from 'express';
import { getUsers, getUserById } from '../../controller/user';
const router = express.Router();

router.get('/', async (req, res) => {
  const userList = await getUsers();
  res.status(200).json(userList);
});

router.get('/:userId', async (req, res) => {
  const userIdToFind = req.params.userId;
  const userResult = await getUserById(userIdToFind);
  res.status(200).json(userResult);
});

export default router;
