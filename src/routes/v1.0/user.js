import express from 'express';
import { getUsers, getUserById } from '../../controller/user';
const router = express.Router();

router.get('/', async (req, res) => {
  const userList = await getUsers(
    'https://jsonplaceholder.typicode.com/users/'
  );
  res.status(200).json(userList);
});

router.get('/:userId', async (req, res) => {
  const userIdToFind = req.params.userId;
  const userResult = await getUserById(
    'https://jsonplaceholder.typicode.com/users/',
    userIdToFind
  );
  res.status(200).json(userResult);
});

export default router;
