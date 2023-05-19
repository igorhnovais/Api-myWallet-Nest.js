import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoggedUser } from 'src/decorators/user.decorator';
import { User } from '@prisma/client';
import { CreateNewMove } from './dto/create-newMove.dto';

@Controller('transactions')
@UseGuards(AuthGuard)
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService){}

    @Get()
    async getAllMoves(@LoggedUser() user: User){
        return this.transactionsService.getAllMoves(user.id)
    }

    @Post("new-entry")
    async postNewEntry(@LoggedUser() user: User, @Body() newMove: CreateNewMove){
        await this.transactionsService.postNewEntry(newMove.price, user.id)
        return "new entry created"
    }

    @Post("new-entry")
    async postNewExit(@LoggedUser() user: User, @Body() newMove: CreateNewMove){
        await this.transactionsService.postNewExit(newMove.price, user.id)
        return "new exit created"
    }

}
