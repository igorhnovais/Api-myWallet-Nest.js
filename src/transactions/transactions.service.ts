import { Injectable } from '@nestjs/common';
import { TransactionsRepository } from './transactions.repository';

@Injectable()
export class TransactionsService {
    constructor(private readonly transactionsRepository: TransactionsRepository) {}

    async getAllMoves(id: number){
        return await this.transactionsRepository.findManyMoves(id)
    }

    async postNewEntry(price : number, id: number){
        await this.transactionsRepository.createNewEntry(price, id)
    }

    async postNewExit(price : number, id: number){
        await this.transactionsRepository.createNewExit(price, id)
    }
}
