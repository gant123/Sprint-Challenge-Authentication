const db = require('../database/dbConfig');
const Users = require('../users/users-model');

describe('Authentocation suit', () => {
  describe('add()', () => {
    beforeEach(async () => {
      await db('users').truncate();
    });

    it('should add 1 user', async () => {
      await Users.add({ username: 'loveMoney', password: 'lovemymoneyhoney' });
      const users = await db('users');
      expect(users).toHaveLength(1);
    });
  });

  describe('find()', () => {
    it('should return a list of users', async () => {
      const users = await Users.find();
      expect(users).toHaveLength(1);
    });
  });

  describe('findBy()', () => {
    it('should return a user', async () => {
      const user = await Users.findBy({ username: 'loveMoney' });
      expect(user).toHaveLength(1);
    });
  });

  describe('findById()', () => {
    it('should return a user with a specific id', async () => {
      const user = await Users.findById(1);
      expect(user).toEqual({
        id: 1,
        username: 'loveMoney',
        password: 'lovemymoneyhoney'
      });
    });
  });
});
