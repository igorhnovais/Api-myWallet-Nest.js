import { IsNumber } from "class-validator";

export class CreateNewMove {

  @IsNumber()
  price: number

}