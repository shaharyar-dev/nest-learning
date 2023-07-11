import { Controller,Inject } from "@nestjs/common";
import { Config } from "./config";
import { Subject } from "rxjs";

@Controller('/factoryp')
// Factory Provider Class
export class FactorypController {
    constructor(@Inject("EVENT_STORE") private eventbus:Subject<any>) {
        console.log(this.eventbus);
    }

}