import { Controller,Inject } from "@nestjs/common";
import { Config } from "./config";
import { Subject } from "rxjs";

@Controller('/factoryp')
// Factory Provider Class
export class FactorypController {
    constructor(@Inject("DATABASE_CONNECTION") private connection:any) {
        console.log(this.connection);
    }

}