import UserService from './services/userService.js';

// Exemplo de uso
async function main() {
  // Cadastrar novo usuário
  const newUser = await UserService.createUser({
    name: 'João Silva',
    email: 'joao@example.com',
    age: 30
  });

  console.log('Usuário criado:', newUser);

  // Listar todos usuários
  const allUsers = await UserService.getAllUsers();
  console.log('Todos usuários:', allUsers);
}

main().catch(console.error);