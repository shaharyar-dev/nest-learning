import { Injectable, Scope } from "@nestjs/common";

interface Injection
{
    id:number;
    name:string;
    age:number,
    title:string;
    description:string;
}
// Injection scopes DEFAULT,REQUEST and TRANSIENT
@Injectable(
    {
        // scope: Scope.DEFAULT
        // scope: Scope.REQUEST
        scope: Scope.TRANSIENT

    }
)
export class InjectionScope {
    private inject = new Map<string, Injection>();

    constructor() {
        console.log("Injecting Scope initialized");
    }

    addUser(user: Injection) {
        this.inject.set(user.id.toFixed(),user);
    }

    getUser(id: number) {
        return this.inject.get(id.toFixed());
    }

    getUsers() {
        return Array.from(this.inject).map((_,Injection) => Injection);
    }

    updateUser(id: number, user: Injection) {
        return this.inject.set(id.toFixed(),user);
    }

    deleteUser(id: number) {
        return this.inject.delete(id.toFixed());
    }
}