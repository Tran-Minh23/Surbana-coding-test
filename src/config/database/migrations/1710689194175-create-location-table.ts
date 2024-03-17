import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateLocationTable1710689194175 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'location',
        columns: [
          {
            name: 'id',
            type: 'int',
            generationStrategy: 'increment',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'building',
            type: 'varchar',
            length: '10',
            isNullable: true,
          },
          {
            name: 'location_name',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'location_number',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'area',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'path',
            type: 'ltree',
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('location');
  }
}
