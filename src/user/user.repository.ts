import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService){

    }

    async createNewUser(userDTO: CreateUserDto){
        return this.prisma.user.create({
            data: userDTO
        })
    }

    async findAllMoves(id: number){
        return this.prisma.data.findMany({
            where: {user_id: id}
        })
    }
}
