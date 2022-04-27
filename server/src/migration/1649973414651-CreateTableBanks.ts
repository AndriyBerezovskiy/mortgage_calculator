import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableBanks1649973414651 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Banks (
                id INT PRIMARY KEY AUTO_INCREMENT,
                bankName VARCHAR(250) NOT NULL UNIQUE,
                interestRate DOUBLE CHECK (interestRate > 0),
                maximumLoan DOUBLE CHECK (maximumLoan > 0),
                minimumDownPayment INT CHECK (minimumDownPayment > 0),
                loanTerm  INT CHECK (loanTerm > 0),
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Banks
        `);
    }
}
