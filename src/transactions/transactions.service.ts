import { Injectable } from '@nestjs/common';
import { TransactionsRepository } from './transactions.repository';

@Injectable()
export class TransactionsService {
    constructor(private readonly transactionsRepository: TransactionsRepository) {}

    async getAllMoves(id: number){
        return await this.transactionsRepository.findManyMoves(id)
    }

    async getPrices(price: number){
        return await this.transactionsRepository.findAllPrices(price);
    }

    async get(){
        return await this.transactionsRepository.get();
    }

    async postNewEntry(price : number, id: number){
        await this.transactionsRepository.createNewEntry(price, id)
    }

    async postNewExit(price : number, id: number){
        await this.transactionsRepository.createNewExit(price, id)
    }
}
