import { getUsers, getUserById } from '../user';
const url = 'https://jsonplaceholder.typicode.com/users/';
describe('Test Users', () => {
  it('should return a list of user', async () => {
    const result = await getUsers(url);
    expect(result.length).toBeGreaterThan(0);
  });

  it('should return a List of user with promise', done => {
    getUsers(url).then(result => {
      expect(result.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should return a user', () => {
    return getUserById(url, 1).then(result => {
      expect(result.id).toBe(1);
    });
  });

  it('should return an error when user not found', async () => {
    try {
      expect.assertions(1);
      const result = await getUserById(url);
    } catch (err) {
      expect(err.message).toMatch('code 404');
    }
  });
});
