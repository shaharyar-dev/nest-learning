import { 
    Controller,
    Get ,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Res,
    Header,
    Redirect,
    Body,
    Inject
} from "@nestjs/common";
import { of } from "rxjs";
import { Request, response } from "express";
import { PostsStore } from "./posts.store";

@Controller('/users')

export class UsersController {
    // To inject with using decorators
    // constructor(@Inject(PostsStore) private store: PostsStore) {
    // constructor(@Inject("STORE") private store: PostsStore) {
    // constructor(@optional() private store: PostsStore) { optional will remove error
     
    constructor(private store: PostsStore) {
        console.log(this.store);
    }

    // @Get("/profile")
    // async getProfile() {
    //     // return "HELLO DEV USER";
    //     return {
    //         "hello": "world"
    //     }
    // }

    // @Get("/profile")
    // async getProfile() {
    //     // return "HELLO DEV USER";
    //     return new Promise((resolve, reject) => {
    //        resolve({
    //         hello : "world123",
    //        });
    //     });
    // }

    // @Get("/profile")
    // getProfile() {
    //     // return "HELLO DEV USER";
    //     return new Promise((resolve, reject) => {
    //        resolve({
    //         hello : "world123",
    //        });
    //     });
    // }


    //Get profile method
    @Get("/profile")
    getProfile(@Req() req) {
        // console.log(req);
        // return "HELLO DEV USER";
        return of ({
            hello : "world",
        });
    }

    // Post profile method and use http code method and request method
    @Post("/profiletest")
    // @HttpCode(200)
    // @HttpCode(HttpStatus.NO_CONTENT)
    @HttpCode(HttpStatus.OK)
    getProfileTest(@Req() req) {
        // console.log(req);
        // return "HELLO DEV USER";
        // return {
        //     hello : "world",
        // };

        return of ({
            hello : "world",
        });
    }
    //it's mentioned that if you use @Res() for any reason in that route handler (class method) you must handle the response yourself.
    //Passthrough to disable default setting
    //Learn more about response handling
    @Post("/profiletest2")
    @HttpCode(HttpStatus.NO_CONTENT)
    getProfileTest2(@Req() req: Request,@Res({passthrough:true}) res) {
        res.status(200);
        res.json({
            hello : "world",
        });
    }

    // Learn more about headers handling
    @Post("/profiletest3")
    @Header("Content-Type", "application/json")
    @Header("Cache-Control", "none")
    @Header("X-Name", "Shaharyar DEV")
    getProfileTest3(@Req() req: Request) {
        return({
            hello : "world",
        });
    }

    // Learn more about redirect handling
    @Post("/profiletest4")
    @Redirect("/users/account")
    getProfileTest4(@Req() req: Request) {
        return({
            hello : "world",
        });
    }

    @Get("/account")
    getAccount(@Req() req: Request) {
        return {
            name:"account"
        }
    }
    
    @Post("/video-test4")
    addVideo(@Body() requestData:Record<string,any>) {
    // addVideo(@Body("name") requestData:string) {
        // console.log(requestData)
        return  {
            requestData
            // requestData.name
            // success:true,
        }
    }

}