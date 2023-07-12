import { Controller, Get } from "@nestjs/common";
import { InjectionScope } from "./injection.scope";

@Controller('/injections2')
// Use extra controller for TRANSIENT

export class InjectionstController {
    constructor(private injector: InjectionScope)   {
    }
}