import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLocationIndex1710690449298 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX IF NOT EXISTS path_gist_location_idx ON location USING GIST(path); 
      CREATE INDEX IF NOT EXISTS path_location_idx ON location USING btree(path);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX IF EXISTS "path_gist_location_idx"; DROP INDEX IF EXISTS "path_location_idx";`,
    );
  }
}
