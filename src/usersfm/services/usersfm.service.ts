import { Injectable } from "@nestjs/common";
import { CacheStoreService } from "src/cache-store";

export interface User {
    name : string;
    age:number;
    id : number;
}
@Injectable()
export class UsersfmService {
    constructor(private storefm: CacheStoreService) {
        console.log(`[UsersfmService]:`, this.storefm);
    }

    private store = new Map<number, User>();

    addUser(user: User) {
        this.store.set(user.id, user);
    }

    getUser(id: number)
    {
        return this.store.get(id);
    }

    getUsers() {
        return Array.from(this.store).map(([_,user]) => user);
    }

    updateUser(id:number,user: User)
    {
        this.store.set(id, user);
    }

    deleteUser(id : number) {
        this.store.delete(id);
    }
}
