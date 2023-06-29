import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoggedUser } from 'src/decorators/user.decorator';
import { User } from '@prisma/client';
import { CreateNewMove } from './dto/create-newMove.dto';

@Controller('transactions')
// @UseGuards(AuthGuard)
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService){}

    // @Get()
    // async getAllMoves(@LoggedUser() user: User){
    //     return this.transactionsService.getAllMoves(user.id)
    // }

    @Get()
    async getAllMoves(){
        return this.transactionsService.getAllMoves(1)
    }

    @Get(':price')
    async getAllPrices(@Param('price') price: string){
        const value = Number(price);
        console.log("oi",value)
        return this.transactionsService.getPrices(value);
    }

    @Get("all")
    async getTotal(){
        return this.transactionsService.get();
    }

    @Post("new-entry")
    async postNewEntry(@LoggedUser() user: User, @Body() newMove: CreateNewMove){
        await this.transactionsService.postNewEntry(newMove.price, user.id)
        return "new entry created"
    }

    @Post("new-exit")
    async postNewExit(@LoggedUser() user: User, @Body() newMove: CreateNewMove){
        await this.transactionsService.postNewExit(newMove.price, user.id)
        return "new exit created"
    }

}
