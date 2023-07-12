import { 
    Body,
    Controller,
    Delete,
    Get,
    Headers,
    Param,
    Post,
    Put,
} from "@nestjs/common";
import { UsersfmService } from "../services/usersfm.service";
import { CreateUserDto } from "../dto";




@Controller('/usersfm')

export class UsersfmController {
    constructor(private userfmService: UsersfmService) {

    }
    //Create a new User
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        this.userfmService.addUser(createUserDto);
        return {message : "User created"};
    }

    //Get all Users
    @Get()
    findAllUsers()
    {
        return this.userfmService.getUsers();
    }

    // Get User By ID
    @Get(":id")
    findUser(@Param("id") id:number) {
        return this.userfmService.getUser(+id);
    }

    // Update User
    @Put(":id")
    updateUser(@Param("id") id:number, @Body() updateUserDto: CreateUserDto) {
        this.userfmService.updateUser(+id,updateUserDto);
        return {message : "User updated"};
    }

    // Delete User
    @Delete(":id")
    deleteUser(@Param("id") id:number) {
        this.userfmService.deleteUser(+id);
        return {message : "User Deleted"};
    }
}