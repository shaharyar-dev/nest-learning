import { Module, DynamicModule } from "@nestjs/common";
import { STORE_OPTIONS } from "./constants";
import { StoreOptions } from "./interfaces/store-options";
import { CacheStoreService } from "./services/cache-store.service";
import { StoreType } from "./enums/store.enum";

const DEFAULT_STORE_NAME = "DEFAULT_CACHE";
const DEFAULT_STORE_TYPE = StoreType.MEMORY;
let ROOT_STORE_OPTIONS : StoreOptions;
@Module({
  // these props extend to the below return statement
  providers: [CacheStoreService],
  exports: [CacheStoreService],
})
class RootCacheStoreModule {

}

// @Module({
//   // these props extend to the below return statement
//   providers: [CacheStoreService],
//   exports: [CacheStoreService],
// })
@Module({})
export class CacheStoreModule {
  // What things can be configured will be added to the return like module, imports,controllers,providers,exports,global
  // static register(options: StoreOptions): DynamicModule {
    static forRoot(options: StoreOptions): DynamicModule {
    // const storeOptions = Object.assign(
    //   {
    //     storeName: DEFAULT_STORE_NAME,
    //     storeType: DEFAULT_STORE_TYPE,
    //   },
    //   options
    // );

    const storeOptions = CacheStoreModule.buildStoreOptions(options);
    ROOT_STORE_OPTIONS = storeOptions;

    if (storeOptions.storeType === StoreType.FILE && !storeOptions.storeDir) {
      throw new Error("File store directory location not provided");
    }

    return {
      module: CacheStoreModule,
      providers: [
        {
          provide: STORE_OPTIONS,
          useValue: storeOptions,
        },
      ],
    };
  }

  private static buildStoreOptions(storeOptions: StoreOptions)
  {
    return Object.assign(
      {
        storeName : DEFAULT_STORE_NAME,
        storeType : DEFAULT_STORE_TYPE

      },storeOptions
    );
  }
}
