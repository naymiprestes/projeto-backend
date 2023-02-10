import { compare } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../erros/appError";
import { IUserLogin } from "../../interfaces/login";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email: email });

  if (!user) {
    throw new AppError(400, "email ou senha inválidos");
  }

  const invalidPassword = await compare(password, user.password);

  if (!invalidPassword) {
    throw new AppError(400, "email ou senha inválidos");
  }

  const token = jwt.sign(
    { email: user.email, isAdm: user.isAdm, name: user.name },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  const response = {
    token: token,
    id: user.id,
  };
  return response;
};

export default loginService;
