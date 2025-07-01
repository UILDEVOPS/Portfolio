import UserService from '../src/services/userService.js';
import fs from 'fs/promises';

jest.mock('fs/promises');

describe('UserService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('createUser should add a new user', async () => {
    const mockUsers = [];
    fs.readFile.mockResolvedValue(JSON.stringify(mockUsers));
    
    const userData = { name: 'Test', email: 'test@test.com', age: 25 };
    const result = await UserService.createUser(userData);
    
    expect(result).toHaveProperty('id');
    expect(fs.writeFile).toHaveBeenCalled();
  });
});