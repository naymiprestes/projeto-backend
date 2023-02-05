import AppDataSource from "../../data-source";
import Contact from "../../entities/contact.entity";

const listContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.findBy({
    user: {
      id: id,
    },
  });

  return contacts;
};

export default listContactService;
