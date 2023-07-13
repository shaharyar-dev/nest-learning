import { Inject, Injectable, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PostsController } from './posts.controller ';
import { PostsStore } from './store/posts.store';
import { Store } from './store/store';
import { ValuecController } from './valuec.controller';
import { Config } from './config';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import e from 'express';
import { FactorypController } from './factoryp.controller';
import { InjectionScope } from './injection.scope';
import { InjectionsController } from './injections.controller';
import { InjectionstController } from './injectionst.controller';
import { EmployeesController } from './employees.controller';
import { EmployeeService } from './employees.service';
import { UsersfmModule } from './usersfm/usersfm.module';
import { JobsModule } from './jobs/jobs.module';
import { CacheStoreModule, StoreType } from './cache-store';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { Books2Module } from './books2/books2.module';
import { Books3Module } from './books3/books3.module';
import { Books4Module } from './books4/books4.module';
import { Books5Module } from './books5/books5.module';
import { Books6Module } from './books6/books6.module';

const IS_DEV_MODE = false;
@Injectable()
class EnvConfig {
  envType : "DEV"  | "STAGE" | "PROD";
  constructor() {
    this.envType = "DEV";
  }
}

function createConnection() {
  return "Connected";
}
@Module({
  //Dynamic module start here
  // imports: [UsersfmModule,JobsModule,CacheStoreModule] , // Error in dynamic module because we have to add register
  // imports: [UsersfmModule,JobsModule,CacheStoreModule.register({storeName: "YT_App"}), BooksModule, Books2Module, Books3Module, Books4Module, Books5Module, Books6Module] ,
    imports: [UsersfmModule,JobsModule,CacheStoreModule.forRoot({storeType: StoreType.FILE}), BooksModule, Books2Module, Books3Module, Books4Module, Books5Module, Books6Module] ,


  //Dynamic module ends here

  // Disable issue with providers
  // controllers : [UsersController,PostsController,ValuecController],

  // Standard providers start here
  // providers: [PostsStore],
  // To use different classes we can use the following
  // providers: [{provide: PostsStore, useClass: Store}],
  // useExisting will return to single instance while using alias provider 
  //  providers: [PostsStore ,{provide: Store, useExisting: PostsStore}],

  // UseClass will return to two instance while using alias provider 
  // providers: [PostsStore ,{provide: Store, useClass: PostsStore}],

  // providers: [{provide: "STORE", useClass: PostsStore}],
  // providers: [{provide: PostsStore, useClass: PostsStore}],
  // controllers: [AppController],
  // providers: [AppService],
  // Standard providers ends here

  // Value providers starts here
    // For value constructor
  // controllers : [ValuecController],

  // providers: [
  //   {provide: "DATABASE_NAME", useValue: "DBNAME"},
  //   {provide: "MAIL", useValue: ["dev@example.com","dev1@example.com"]},
  //   {provide: "ENV_CONFIG", useValue: {
  //     type: "DEV",
  //     node : "1.7"
  //   }},
  //   {provide: Config, useValue: {
  //     type: "DEV-Config",
  //     node : "1.7-config"
  //   }},


  // ],
  // Value providers ends here

  // Factory Provider starts here
  // controllers : [FactorypController],
  
  // For value constructor

  // providers: [
  //   {
  //     provide: "EVENT_STORE",
  //     //Factory Provider useFactory
  //     useFactory: (config : EnvConfig,limit : number = 4)   => 
  //     {
  //       // const eventBus$ = IS_DEV_MODE ? new ReplaySubject(limit) : new BehaviorSubject(null);
  //       const eventBus$ = config.envType === "DEV" ? new ReplaySubject(limit) : new BehaviorSubject(null);
        
  //       console.log(limit);
  //       console.log(config);

  //       return eventBus$;
  //     },
  //     // inject:["Limit"],
  //     inject:[EnvConfig,{token: "Limit",optional:true}]
  //   },
  //   //Class Provider EnvConfig
  //   EnvConfig, 
  //   //Value Provider object
    
  //   {
  //     provide: "Limit",
  //     useValue: 2
  //   }
  // ],
  // Factory Provider ends here
 // Async provider starts here
 // Async will wait until the promise is resolved
  // providers: [
  //   {
  //     provide: "DATABASE_CONNECTION",
  //     useFactory: async (config)  => {
  //       console.log(config);
  //       const connection = await createConnection();
  //       return createConnection();
  //     },
  //     inject:["DB_CONFIG"],
  //   },
  //   {
  //     provide: "DB_CONFIG",
  //     useValue:  {
  //       ur : "http://localhost",
  //       user : "admin",
  //       password : "admin",
  //       database : "test",
  //     },
  //   },
  // ],
  // Async Provider ends here

  // Injection Scope starts here
  
  // controllers : [InjectionsController,InjectionstController],

  //   providers: [InjectionScope],
  // Injection Scope ends here

  // Services starts here
    // controllers : [EmployeesController],
    // providers: [EmployeeService],
  // services ends  here

})
export class AppModule {}
