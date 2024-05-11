import { Request, Response } from 'express';
import ListEnderecosService from '../services/ListEnderecosService';

export default class CepController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listUser = new ListEnderecosService();
    const cep = request.cep;

    const enderecos = await listUser.execute({ cep });

    return response.json(enderecos);
  }
}
