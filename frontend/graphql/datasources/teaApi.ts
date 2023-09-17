import { RESTDataSource } from "@apollo/datasource-rest";

// TODO codegen of types from oapi schema file
interface Tea {
  name: string;
  id: string;
}

export class TeaAPI extends RESTDataSource {
  override baseURL = process.env["URL_SERVER_OAPI"];

  async getTea(id: string): Promise<Tea> {
    return this.get<Tea>(`teas/${encodeURIComponent(id)}`);
  }
  async getTeas(): Promise<Tea[]> {
    return this.get<Tea[]>(`teas`);
  }
  async addTea(name: string): Promise<Tea> {
    return this.post<Tea>(`teas`, { body: { name } });
  }
}
