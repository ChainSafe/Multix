module.exports = class Data1675987289397 {
    name = 'Data1675987289397'

    async up(db) {
        await db.query(`CREATE TABLE "account_multisig" ("id" character varying NOT NULL, "multisig_id" character varying, "signer_id" character varying, CONSTRAINT "PK_9c47c4be06a450da56b95bf3e06" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_373149008deefb43018021ac00" ON "account_multisig" ("multisig_id") `)
        await db.query(`CREATE INDEX "IDX_be61b12319215e17fe1a8c0465" ON "account_multisig" ("signer_id") `)
        await db.query(`CREATE TABLE "proxy_account" ("id" character varying NOT NULL, "type" character varying(17), "origin_id" character varying, "proxy_id" character varying, CONSTRAINT "PK_ec6559af2b2f1e64069037b7eef" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5b6a6fbaf48540f196f3466878" ON "proxy_account" ("origin_id") `)
        await db.query(`CREATE INDEX "IDX_8edcd9bca8c2e9d0f898c8648d" ON "proxy_account" ("proxy_id") `)
        await db.query(`CREATE TABLE "multisig_call" ("id" character varying NOT NULL, "block_hash" text NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "call_index" integer NOT NULL, "multisig_id" character varying, CONSTRAINT "PK_fa22322b62825a7b48838d98e17" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2f1479a9dfc96f8d277b11cb10" ON "multisig_call" ("multisig_id") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "is_pure_proxy" boolean, "is_multisig" boolean, "threshold" integer, "created_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`ALTER TABLE "account_multisig" ADD CONSTRAINT "FK_373149008deefb43018021ac009" FOREIGN KEY ("multisig_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "account_multisig" ADD CONSTRAINT "FK_be61b12319215e17fe1a8c04653" FOREIGN KEY ("signer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "proxy_account" ADD CONSTRAINT "FK_5b6a6fbaf48540f196f34668781" FOREIGN KEY ("origin_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "proxy_account" ADD CONSTRAINT "FK_8edcd9bca8c2e9d0f898c8648db" FOREIGN KEY ("proxy_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "multisig_call" ADD CONSTRAINT "FK_2f1479a9dfc96f8d277b11cb109" FOREIGN KEY ("multisig_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "account_multisig"`)
        await db.query(`DROP INDEX "public"."IDX_373149008deefb43018021ac00"`)
        await db.query(`DROP INDEX "public"."IDX_be61b12319215e17fe1a8c0465"`)
        await db.query(`DROP TABLE "proxy_account"`)
        await db.query(`DROP INDEX "public"."IDX_5b6a6fbaf48540f196f3466878"`)
        await db.query(`DROP INDEX "public"."IDX_8edcd9bca8c2e9d0f898c8648d"`)
        await db.query(`DROP TABLE "multisig_call"`)
        await db.query(`DROP INDEX "public"."IDX_2f1479a9dfc96f8d277b11cb10"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`ALTER TABLE "account_multisig" DROP CONSTRAINT "FK_373149008deefb43018021ac009"`)
        await db.query(`ALTER TABLE "account_multisig" DROP CONSTRAINT "FK_be61b12319215e17fe1a8c04653"`)
        await db.query(`ALTER TABLE "proxy_account" DROP CONSTRAINT "FK_5b6a6fbaf48540f196f34668781"`)
        await db.query(`ALTER TABLE "proxy_account" DROP CONSTRAINT "FK_8edcd9bca8c2e9d0f898c8648db"`)
        await db.query(`ALTER TABLE "multisig_call" DROP CONSTRAINT "FK_2f1479a9dfc96f8d277b11cb109"`)
    }
}
