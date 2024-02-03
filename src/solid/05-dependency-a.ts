import { PostService } from "./05-dependency-b";
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiPostService,
} from "./05-dependency-c";

// Main
(async () => {
  /**
   * Esto es lo que intentamos lograr, que cualquiera sea el proveedor
   * de posts que queramos usar en x o y momento, este debe de partir
   * de un concepto abstracto y es que el implemente un metodo llamado
   * getPosts. De modo que podamos cambiarlo facilmente sin romper el
   * codigo. Ver la solucion en el archivo 05-dependy-c.ts
   */

  const provider2 = new LocalDataBaseService();

  const provider3 = new WebApiPostService();

  const provider = new JsonDataBaseService();

  const postService = new PostService(provider3);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
