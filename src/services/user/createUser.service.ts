import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../erros/appError";
import { IUserResponse, IUserRquest } from "../../interfaces/user";

const createUserService = async ({
  name,
  email,
  number,
  password,
  isAdm,
}: IUserRquest) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email == email);

  if (emailAlreadyExists) {
    throw new AppError(400, "email existente");
  }

  const hashedPassword = await hash(password, 10);

  const newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.number = number;
  newUser.password = hashedPassword;
  newUser.isAdm = isAdm;

  userRepository.create(newUser);
  await userRepository.save(newUser);
  return newUser;
};

export default createUserService;
