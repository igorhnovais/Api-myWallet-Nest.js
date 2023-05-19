import { Injectable } from '@nestjs/common';
import { TransactionsRepository } from './transactions.repository';

@Injectable()
export class TransactionsService {
    constructor(private readonly transactionsRepository: TransactionsRepository) {}
    async getAllMoves(id: number){
        return this.transactionsRepository.findManyMoves(id)
    }
}
