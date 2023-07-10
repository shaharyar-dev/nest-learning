import { Body, Controller, Delete, Get, HostParam, Ip, Param, Post, Put} from "@nestjs/common";
import { CreatePostDto } from "./dto";

let POSTS = [];
@Controller('/posts')
// @Controller({path : '/posts',host : 'app.domain.com'})
// @Controller({path : '/posts',host : ':app.domain.com'}) For dynamic host like studio.app.domain.com

export class PostsController {

    //Creates a new post
    @Post()
    addPost(@Body() createPostDto:  CreatePostDto){
     POSTS.push(createPostDto);
     return "POST created successfully";   
    }

    //Get all posts
    @Get()
    // getPosts(@HostParam("domain") hostParam: Record<string,any>) // Get Host Parameters
    // getPosts(@Ip() ip:string) console.log(ip);   // Get IP Parameters
    getPosts()
    {
        return POSTS;
    }

    //Get single post
    @Get(":id")
    getPost(@Param("id") id:number)
    {
        return POSTS.find((post) => +post.id === +id);
    }

    //update single post
    @Put(":id")
    updatePost(@Param("id") id:number,@Body() updatePostDto: CreatePostDto)
    {
        const postIdx = POSTS.findIndex((post) => +post.id === +id);

        if(!postIdx)
        {
            return;
        }    
        
        POSTS[postIdx] = updatePostDto;
        return POSTS[postIdx];
    }

    //delete single post
    @Delete(":id")
    deletePost(@Param("id") id:number)
    {
        POSTS = POSTS.filter((post) => +post.id !== +id);
    }
}