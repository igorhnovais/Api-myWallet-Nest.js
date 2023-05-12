import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async postNewUser(userDTO: CreateUserDto){
        const user = await this.userRepository.createNewUser({
            ...userDTO,
            password: bcrypt.hashSync(userDTO.password, 10)
        })

        return user;
    }

}
