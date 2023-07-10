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
    Inject,
    Param,
    Query,
    Headers,
} from "@nestjs/common";


import { of } from "rxjs";
import { Request, response } from "express";
import { PostsStore } from "./posts.store";

interface videosParams {
    id: number;
    name: string;
}

interface imagesQuery {
    name: string;
    age: number;
}


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
    @Redirect("/users/account",302)
    getProfileTest4(@Req() req: Request) {
        const rn = ~~(Math.random() + 10 +1);	
        if(rn < 5)	
        {	
            return({	
                url : "/users/account",	
                statusCode:302	
            });	
        }	
        else 	
        {	
            return({	
                url : "/users/wallet",	
                statusCode:302	
            });	
        }	
        // return({	
        //     hello : "world",	
        // });
    }
    
    // Get Account for redirect logic
    @Get("/account")
    getAccount(@Req() req: Request) {
        return {
            name:"account"
        }
    }
    
    // Get Wallet for redirect logic	
    @Get("/wallet")	
    getWallet(@Req() req: Request) {	
        return {	
            name:"wallet"	
        }	
    }

    //Route Parameters as string object	
    @Get("/videos/:id")	
    getVideos(@Param() params: Record<string,any>,@Req() req: Request) {	
        return params;	
    }

    		
    //Route Parameters as number object	
    @Get("/video/:id")	
    getVideo(@Param('id') param: number,@Req() req: Request) {	
        return param;	
    }	
    //Route Parameters multiple parameters	
    @Get("/videosextra/:id/:name")	
    getVideosExtra(@Param() param: videosParams,@Req() req: Request) {	
        // return param;	
        return {	
            extra_id: param.id,	
            extra_name: param.name	
        }	
    }

    		
    //Query Parameters as string object	
    @Get("/images")	
    getImages(@Query() query: Record<string,any>,@Req() req: Request) {	
        return query;	
    }	
    //Query Parameters as string object	
    @Get("/images-test2")	
    getImagesTest2(@Query("name") query: string,@Req() req: Request) {	
        return query;	
    }	
    //Query Parameters example 3	
    @Get("/images-test3")	
    getImagesTest3(@Query() query: imagesQuery,@Req() req: Request) {	
        return query;	
    }	
    //Headers example 1	
    @Get("/file-test")	
    getFileTest(@Headers() header: Record<string,any>,@Req() req: Request) {	
        return header;	
    }	
    //Headers example 2	
    @Get("/file-test2")	
    getFileTest2(@Headers("user-agent") header: string,@Req() req: Request) {	
        return header;	
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