import AppDataSource from "../../data-source";
import Contact from "../../entities/contact.entity";
import User from "../../entities/user.entity";
import { IContactRquest } from "../../interfaces/contact";

const createContactService = async (
  { name, email, number }: IContactRquest,
  id: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  const newContact = new Contact();

  newContact.name = name;
  newContact.email = email;
  newContact.number = number;
  newContact.user = user!;

  contactRepository.create(newContact);
  await contactRepository.save(newContact);
  return newContact;
};

export default createContactService;
