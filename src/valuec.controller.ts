import { Controller,Inject } from "@nestjs/common";
import { Config } from "./config";

@Controller('/valuec')
// Value Provider Class
export class ValuecController {
    constructor(@Inject("DATABASE_NAME") private dbname:string,@Inject("MAIL") private emails:string[],@Inject("ENV_CONFIG") private env_configs:Record<string,any>,private class_configs:Config) {
        console.log(this.dbname);
        console.log(this.emails);
        console.log(this.env_configs);
        console.log(this.class_configs);


        

    }

}