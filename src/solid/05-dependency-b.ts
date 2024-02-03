import { JsonDataBaseService, LocalDataBaseService, PostProvider } from "./05-dependency-c";

interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
  }

export class PostService {
  private posts: Post[] = [];

  // Veamos la inversion de dependencias para aplicar los cambios de
  // manera sencilla.
  constructor(private postProvider: PostProvider) {}

  async getPosts() {
    // Dependencia oculta. Esto no cumple el dependency inyection
    // const jsonDB = new LocalDataBaseService();

    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
