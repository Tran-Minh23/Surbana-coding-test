import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableData1710730765812 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO location (building, location_name, location_number, area, path) values ('A', 'Root', 'A-Root', '123', 'A_Root');
      INSERT INTO location (building, location_name, location_number, area, path) values ('A', 'Car Park', 'A-CarPark', '80620', 'A_Root.A_CarPark');
      INSERT INTO location (building, location_name, location_number, area, path) values ('A', 'Level 1', 'A-01', '100920', 'A_Root.A_01');
      INSERT INTO location (building, location_name, location_number, area, path) values ('A', 'Lobby Level1', 'A-01-Lobby', '80620', 'A_Root.A_01.A_01_Lobby');
      INSERT INTO location (building, location_name, location_number, area, path) values ('A', 'Master Room', 'A-01-01', '50110', 'A_Root.A_01.A_01_01');
      INSERT INTO location (building, location_name, location_number, area, path) values ('A', 'Meeting Room 1', 'A-01-01-M1', '20110', 'A_Root.A_01.A_01_01.A_01_01_M1');
      INSERT INTO location (building, location_name, location_number, area, path) values ('A', 'Corridor Level 1', 'A-01-Corridor', '30200', 'A_Root.A_01.A_01_Corridor');
      INSERT INTO location (building, location_name, location_number, area, path) values ('A', 'Toilet Level 1', 'A-01-02', '30200', 'A_Root.A_01.A_01_02');
      INSERT INTO location (building, location_name, location_number, area, path) values ('B', 'Level 5', 'B-05', '150000', 'B_05');
      INSERT INTO location (building, location_name, location_number, area, path) values ('B', 'Utility Room', 'B-05-11', '10200', 'B_05.B_05_11');
      INSERT INTO location (building, location_name, location_number, area, path) values ('B', 'Sanitary Room', 'B-05-12', '12200', 'B_05.B_05_12');
      INSERT INTO location (building, location_name, location_number, area, path) values ('B', 'Male Toilet', 'B-05-13', '30200', 'B_05.B_05_13');
      INSERT INTO location (building, location_name, location_number, area, path) values ('B', 'Genset Room', 'B-05-14', '35200', 'B_05.B_05_14');
      INSERT INTO location (building, location_name, location_number, area, path) values ('B', 'Pantry Level 5', 'B-05-15', '50200', 'B_05.B_05_15');
      INSERT INTO location (building, location_name, location_number, area, path) values ('B', 'Corridor Level 5', 'B-05-Corridor', '30000', 'B_05.B_05_Corridor');
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
