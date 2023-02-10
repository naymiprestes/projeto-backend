import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../erros/appError";

const userDeleteService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  console.log("cheguei no backkkkkkkkkkkkkkk ");

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError(404, "usuário não encontrado");
  }

  await userRepository.delete(id);

  const deleteUser = {
    status: 204,
    message: "usuário deletado",
  };

  return deleteUser;
};

export default userDeleteService;
