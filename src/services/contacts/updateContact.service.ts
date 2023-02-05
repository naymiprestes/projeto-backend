import AppDataSource from "../../data-source";
import Contact from "../../entities/contact.entity";
import AppError from "../../erros/appError";
import { IContactRquest } from "../../interfaces/contact";

const updateContactService = async (
  { name, email, number }: IContactRquest,
  id: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id });

  if (!contact) {
    throw new AppError(404, "contato nao encontrado");
  }

  await contactRepository.update(id, {
    email: email ? email : contact.email,
    name: name ? name : contact.name,
    number: number ? number : contact.number,
  });

  const contactUpdate = await contactRepository.findOneBy({ id });

  return contactUpdate;
};

export default updateContactService;
