import { EntityRepository, Repository } from 'typeorm';
import Endereco from '../entities/Endereco';

@EntityRepository(Endereco)
class EnderecoRepository extends Repository<Endereco> {
  public async findByCep(cep: string): Promise<Endereco[] | undefined> {
    return await this.find({ where: { cep } });
  }
}

export default EnderecoRepository;
