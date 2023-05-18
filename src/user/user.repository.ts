import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService){

    }

    async create(userDTO: CreateUserDto) {
    return this.prisma.user.create({
        data: userDTO
    })
    }
    
    async get(id: number) {
    return this.prisma.user.findFirst({
        where: { id }
    })
    }
    
    async getByEmail(email: string) {
    return this.prisma.user.findFirst({
        where: { email }
    })
    }
    
    // async getAll() {
    // return this.prisma.user.findMany();
    // }
    
    // async delete(id: number) {
    // return this.prisma.user.delete({
    //     where: { id }
    // })
    // }

    // async createNewUser(userDTO: CreateUserDto){
    //     return this.prisma.user.create({
    //         data: userDTO
    //     })
    // }

}
