import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertSampleAddresses1633490135482 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO address (cep, logradouro, complemento, bairro, localidade, uf, ddd)
        VALUES 
            ('01001-000', 'Praça da Sé', 'lado ímpar', 'Sé', 'São Paulo', 'SP', '11'),
            ('01310-000', 'Avenida Paulista', 'de 1001 a 1333 - lado ímpar', 'Bela Vista', 'São Paulo', 'SP', '11'),
            ('01311-000', 'Avenida Paulista', 'de 51 a 188 - lado ímpar', 'Bela Vista', 'São Paulo', 'SP', '11'),
            ('01310-000', 'Avenida Paulista', 'de 1000 a 1284 - lado par', 'Bela Vista', 'São Paulo', 'SP', '11'),
            ('01311-000', 'Avenida Paulista', 'de 50 a 188 - lado par', 'Bela Vista', 'São Paulo', 'SP', '11'),
            ('01401-000', 'Rua Augusta', 'de 1500 a 1898 - lado par', 'Cerqueira César', 'São Paulo', 'SP', '11'),
            ('01402-000', 'Rua Augusta', 'de 1519 a 1899 - lado ímpar', 'Cerqueira César', 'São Paulo', 'SP', '11'),
            ('01501-000', 'Rua Conselheiro Crispiniano', '', 'Centro', 'São Paulo', 'SP', '11'),
            ('01502-000', 'Rua Sete de Abril', '', 'Centro', 'São Paulo', 'SP', '11'),
            ('01503-000', 'Rua Timbiras', '', 'Centro', 'São Paulo', 'SP', '11');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM address WHERE cep IN (
            '01001-000',
            '01310-000',
            '01311-000',
            '01310-000',
            '01311-000',
            '01401-000',
            '01402-000',
            '01501-000',
            '01502-000',
            '01503-000'
        );
    `);
  }
}
