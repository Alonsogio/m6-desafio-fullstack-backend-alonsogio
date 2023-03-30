import { MigrationInterface, QueryRunner } from "typeorm";

export class addClient1680036897271 implements MigrationInterface {
    name = 'addClient1680036897271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" varchar PRIMARY KEY NOT NULL, "fullName" varchar(100) NOT NULL, "email" varchar(62) NOT NULL, "password" varchar NOT NULL, "contact" varchar NOT NULL, "createdAt" date NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" varchar PRIMARY KEY NOT NULL, "fullName" varchar(100) NOT NULL, "email" varchar(62) NOT NULL, "contact" varchar NOT NULL, "createdAt" date NOT NULL DEFAULT (datetime('now')), "clientId" varchar, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"))`);
        await queryRunner.query(`CREATE TABLE "temporary_contacts" ("id" varchar PRIMARY KEY NOT NULL, "fullName" varchar(100) NOT NULL, "email" varchar(62) NOT NULL, "contact" varchar NOT NULL, "createdAt" date NOT NULL DEFAULT (datetime('now')), "clientId" varchar, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contacts"("id", "fullName", "email", "contact", "createdAt", "clientId") SELECT "id", "fullName", "email", "contact", "createdAt", "clientId" FROM "contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`ALTER TABLE "temporary_contacts" RENAME TO "contacts"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME TO "temporary_contacts"`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" varchar PRIMARY KEY NOT NULL, "fullName" varchar(100) NOT NULL, "email" varchar(62) NOT NULL, "contact" varchar NOT NULL, "createdAt" date NOT NULL DEFAULT (datetime('now')), "clientId" varchar, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"))`);
        await queryRunner.query(`INSERT INTO "contacts"("id", "fullName", "email", "contact", "createdAt", "clientId") SELECT "id", "fullName", "email", "contact", "createdAt", "clientId" FROM "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
