import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionsRepository {
    constructor(private readonly prisma: PrismaService){}

    async findManyMovesByUserId(id: number){
        const oi = await this.prisma.data.findMany({
            where:{user_id:id}
        })

        return oi
    }

    async findAllPricesByUserId(id: number){
        return this.prisma.data.findMany({
            where:{id}
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
        return await this.prisma.data.create({
            data:{
                price: -price,
                status: "exit",
                user_id
            }
        })
    }

    async deleteTr(id: number){
        return this.prisma.data.delete({
            where:{
                id
            }
        })
    }

    async putTr(id: number, price: number){
        return this.prisma.data.update({
            where:{
                id
            },
            data:{
                price
            }
        })
    }
}