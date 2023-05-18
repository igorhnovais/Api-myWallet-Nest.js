import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

private SALT = 10;
  constructor(private readonly userRepository: UserRepository) {}

  async create(userDTO: CreateUserDto) {
    const user = await this.userRepository.create({
      ...userDTO,
      password: bcrypt.hashSync(userDTO.password, this.SALT),
    });

    return user;
  }

  async get(id: number) {
    const user = await this.userRepository.get(id);
    if (!user) throw new NotFoundException();

    return user;
  }

  async getByEmail(email: string) {
    const user = await this.userRepository.getByEmail(email);
    return user;
  }

  // async getAll() {
  //   return this.userRepository.getAll();
  // }

  // async delete(id: number) {
  //   await this.get(id);
  //   return await this.userRepository.delete(id);
  // }
}
