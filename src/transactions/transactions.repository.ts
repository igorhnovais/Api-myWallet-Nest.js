import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionsRepository {
    constructor(private readonly prisma: PrismaService){}

    async findManyMoves(id: number){
        return this.prisma.data.findMany({
            where:{user_id:id}
        })
    }

    async createNewEntry(price: number, user_id: number){
        return this.prisma.data.create({
            data:{
                price,
                status: "entry",
                user_id
            }
        })
    }

    async createNewExit(price: number, user_id: number){
        return this.prisma.data.create({
            data:{
                price,
                status: "exit",
                user_id
            }
        })
    }
}