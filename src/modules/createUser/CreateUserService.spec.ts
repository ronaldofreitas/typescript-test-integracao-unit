import User from "../../entities/User";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { IUserRepository } from "../../repositories/IUserRepository";
import { CreateUserService } from "./CreateUserService";

describe("Create user", () => {
  let usersRepository: IUserRepository;
  let createUserService: CreateUserService;

  beforeAll(() => {
    usersRepository = new UserRepositoryInMemory();
    createUserService = new CreateUserService(usersRepository);
  });

  test("should be able to create a new user", async () => {
    let name_user = "Test Name";
    let email_user = "test@test.com.br";
    let username_user = "testusername";
    const userData = new User(name_user, email_user, username_user)
    const user = await createUserService.execute(name_user, username_user, email_user);
    
    expect(user).toHaveProperty("id");
    expect(user.username).toBe("testusername");
  });

  test("should not be able to create an existing user", async () => {
    let name_user = "Test Exist";
    let email_user = "testexisting@test.com.br";
    let username_user = "testexisting";
    const userData = new User(name_user, email_user, username_user)
    await createUserService.execute(name_user, username_user, email_user)
    
    await expect(createUserService.execute(name_user, username_user, email_user)).rejects.toEqual(
      new Error('usuario já existe')
    );
  });
  
});
