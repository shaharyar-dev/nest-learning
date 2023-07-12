import { Global, Module } from "@nestjs/common";
import { UsersfmController } from "./controllers/usersfm.controller";
import { AccountsfmController } from "./controllers/accountsfm.controller";
import { UsersfmService } from "./services/usersfm.service";
import { CacheStoreModule } from "src/cache-store";
// @Global()
// @Module({
//     imports : [],
//     controllers:[UsersfmController,AccountsfmController],
//     providers: [UsersfmService],
//     exports: [UsersfmService],
// }) 

// Dynamic Modules
@Module({
    imports: [
      // create a dynamic module with below option
      CacheStoreModule.register({
        storeName: "usersfm",
      }),
    ],
    providers: [UsersfmService],
  })

export class UsersfmModule {

}





export class UsersModule {}
