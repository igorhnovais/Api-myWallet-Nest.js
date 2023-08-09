import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
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

    @Get(':id')
    async getAllPrices(@Param('id') id: string){
        const value = Number(id);
        const oi = await this.transactionsService.getPrices(value);
        return oi[0];
    }

    @Get("all")
    async getTotal(){
        return this.transactionsService.get();
    }

    // @Post("new-entry")
    // async postNewEntry(@LoggedUser() user: User, @Body() newMove: CreateNewMove){
    //     await this.transactionsService.postNewEntry(newMove.price, user.id)
    //     return "new entry created"
    // }

    @Post("new-entry")
    async postNewEntry(@Body() newMove: CreateNewMove){
        const user = 1;
        await this.transactionsService.postNewEntry(newMove.price, user)
        return "new entry created"
    }

    // @Post("new-exit")
    // async postNewExit(@LoggedUser() user: User, @Body() newMove: CreateNewMove){
    //     await this.transactionsService.postNewExit(newMove.price, user.id)
    //     return "new exit created"
    // }

    @Post("new-exit")
    async postNewExit(@Body() newMove: CreateNewMove){
        const user = 1;
        await this.transactionsService.postNewExit(newMove.price, user)
        return "new exit created"
    }

    @Delete(":id")
    async deleteTr(@Param('id') id: string){
        const value = Number(id);
        await this.transactionsService.deleteTr(value);
    }

    @Put(":id")
    async update(@Param('id') id: string, @Body() newMove: number){
        const value = Number(id);
        console.log("testee", newMove)
        await this.transactionsService.putTr(value, newMove[0])
    }
}
