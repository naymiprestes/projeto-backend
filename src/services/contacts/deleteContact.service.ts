import AppDataSource from "../../data-source";
import Contact from "../../entities/contact.entity";
import AppError from "../../erros/appError";

const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id });

  if (!contact) {
    throw new AppError(404, "contato nao existe ");
  }

  await contactRepository.delete(id);

  const deleteContact = {
    status: 204,
    message: "usuário deletado",
  };

  return deleteContact;
};

export default deleteContactService;
