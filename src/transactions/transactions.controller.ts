import { Controller, Get, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoggedUser } from 'src/decorators/user.decorator';
import { User } from '@prisma/client';

@Controller('transactions')
@UseGuards(AuthGuard)
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService){}

    @Get()
    async getAllMoves(@LoggedUser() user: User){
        return this.transactionsService.getAllMoves(user.id)
    }

}
