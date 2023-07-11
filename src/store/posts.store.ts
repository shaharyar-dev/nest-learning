import { Injectable } from "@nestjs/common";

interface Post {
    title: string;
    description: string;
    id: number;
}
@Injectable()
export class PostsStore {

    constructor() {
        console.log("post tore init");
    }

    private store = new Map<number, Post>();
    addPost(post: Post) {
        this.store.set(post.id, post);
    };

    getPost(id: number) {
        return this.store.get(id);
    }

    getPosts() {
        return Array.from(this.store).map((_, post) => post);
    }

    updatePost(id: number, post: Post) {
        this.store.set(id, post);
    }

    deletePost(id: number) {
        this.store.delete(id);
    }
}