import { getCustomRepository } from 'typeorm';
import Endereco from '../typeorm/entities/Endereco';
import EnderecoRepository from '../typeorm/repositories/EnderecoRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  cep: string;
}

class ListEnderecosService {
  public async execute({ cep }: IRequest): Promise<Endereco[]> {
    const enderecoRepository = getCustomRepository(EnderecoRepository);

    const enderecos = await enderecoRepository.findByCep(cep);

    if (!enderecos) {
      throw new AppError('Endereços não encontrados');
    }

    return enderecos;
  }
}

export default ListEnderecosService;
