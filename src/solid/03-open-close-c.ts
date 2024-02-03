// import axios from "axios";

export class HttpClient {
  //   async get(url: string) {
  //     const { data, status } = await axios.get(url);
  //     return { data, status };
  //   }



  // Hemos hecho los cambios solo aqui y cambiamos completamente la forma
  // de hacer las consultas http
  async get(url: string) {
    const resp = await fetch(url);

    const data = await resp.json();

    return { data, status: resp.status };
  }
}
