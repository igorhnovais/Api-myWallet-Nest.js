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

    async findAllPrices(price: number){
        return this.prisma.data.findMany({
            where:{price}
        })
    }

    async get(){
        return this.prisma.data.findMany();
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
                price: -price,
                status: "exit",
                user_id
            }
        })
    }
}