import axios from 'axios';

const getUsers = async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users/');
  return result.data;
};

const getUserById = async userId => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return result.data;
};

export { getUsers, getUserById };
