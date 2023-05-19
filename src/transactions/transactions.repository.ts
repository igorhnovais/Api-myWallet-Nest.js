import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransactionsRepository {
    constructor(private readonly prisma: PrismaService){}

    async findManyMoves(id: number){
        return this.prisma.data.findMany({
            where:{id}
        })
    }
}