import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../erros/appError";
import { IUserUpdate } from "../../interfaces/user";

const userUpdateService = async (data: IUserUpdate, id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(400, "usuário não encontrado");
  }

  await userRepository.update(id, {
    email: data.email ? data.email : user.email,
    name: data.name ? data.name : user.name,
    number: data.number ? data.number : user.number,
    password: data.password ? await hash(data.password, 10) : user.password,
  });

  const updateUser = await userRepository.findOneBy({ id });

  return updateUser;
};

export default userUpdateService;
