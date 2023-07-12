import { Controller, Get } from "@nestjs/common";
import { InjectionScope } from "./injection.scope";

@Controller('/injections')
// Injection scopes DEFAULT,REQUEST and TRANSIENT

export class InjectionsController {
    constructor(private injector: InjectionScope)   {
        console.log("InjectionsController initialized");
    }

    @Get()
    getInjections()
    {
        return "Route Called";
    }
}