import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository"



class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    //Verificar se usuário existe

    const userExists = await usersRepository.findOne({
      email,
    })
    //Se existir, retornar user

    if (userExists) {
      return userExists;
    }

    //Se não existir, criar e salvar no banco de dados (DB)
    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);

    return user;
  }
}
export { UsersService }