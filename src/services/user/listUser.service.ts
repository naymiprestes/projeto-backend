import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../erros/appError";

const listUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const contacts = await userRepository.findOne({
    where: { id },
    relations: { contacts: true },
  });

  if (!contacts) {
    throw new AppError(400, "usuário não encontrado");
  }
  return contacts;
};

export default listUserService;
