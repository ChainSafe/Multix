module.exports = class Data1673455638727 {
  name = 'Data1673455638727'

  async up(db) {
    await db.query(`CREATE TABLE "rmrk_nft" ("id" character varying NOT NULL, "symbol" text, "transferable" boolean, "collection" text NOT NULL, "sn" text, "metadata" text, "owner_id" character varying, "parent_id" character varying, CONSTRAINT "PK_06cea93e5f3a8e395f5f7b29521" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_dbf163f1e874f2dda345897380" ON "rmrk_nft" ("owner_id") `)
    await db.query(`CREATE INDEX "IDX_53927fb20d7fdde2dc4eb2c497" ON "rmrk_nft" ("parent_id") `)
    await db.query(`CREATE TABLE "multisig_call" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "info" text, "multisig_id" character varying, CONSTRAINT "PK_fa22322b62825a7b48838d98e17" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_2f1479a9dfc96f8d277b11cb10" ON "multisig_call" ("multisig_id") `)
    await db.query(`CREATE TABLE "multisig" ("id" character varying NOT NULL, "threshold" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "proxy_id" character varying, CONSTRAINT "PK_ca0822446a16f9665878a4e3cb2" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_d172cc91ad541ad8265203722d" ON "multisig" ("proxy_id") `)
    await db.query(`CREATE TABLE "account_multisig" ("id" character varying NOT NULL, "multisig_id" character varying, "signer_id" character varying, CONSTRAINT "PK_9c47c4be06a450da56b95bf3e06" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_373149008deefb43018021ac00" ON "account_multisig" ("multisig_id") `)
    await db.query(`CREATE INDEX "IDX_be61b12319215e17fe1a8c0465" ON "account_multisig" ("signer_id") `)
    await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
    await db.query(`ALTER TABLE "rmrk_nft" ADD CONSTRAINT "FK_dbf163f1e874f2dda3458973807" FOREIGN KEY ("owner_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "rmrk_nft" ADD CONSTRAINT "FK_53927fb20d7fdde2dc4eb2c4974" FOREIGN KEY ("parent_id") REFERENCES "rmrk_nft"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "multisig_call" ADD CONSTRAINT "FK_2f1479a9dfc96f8d277b11cb109" FOREIGN KEY ("multisig_id") REFERENCES "multisig"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "multisig" ADD CONSTRAINT "FK_d172cc91ad541ad8265203722db" FOREIGN KEY ("proxy_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "account_multisig" ADD CONSTRAINT "FK_373149008deefb43018021ac009" FOREIGN KEY ("multisig_id") REFERENCES "multisig"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "account_multisig" ADD CONSTRAINT "FK_be61b12319215e17fe1a8c04653" FOREIGN KEY ("signer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "rmrk_nft"`)
    await db.query(`DROP INDEX "public"."IDX_dbf163f1e874f2dda345897380"`)
    await db.query(`DROP INDEX "public"."IDX_53927fb20d7fdde2dc4eb2c497"`)
    await db.query(`DROP TABLE "multisig_call"`)
    await db.query(`DROP INDEX "public"."IDX_2f1479a9dfc96f8d277b11cb10"`)
    await db.query(`DROP TABLE "multisig"`)
    await db.query(`DROP INDEX "public"."IDX_d172cc91ad541ad8265203722d"`)
    await db.query(`DROP TABLE "account_multisig"`)
    await db.query(`DROP INDEX "public"."IDX_373149008deefb43018021ac00"`)
    await db.query(`DROP INDEX "public"."IDX_be61b12319215e17fe1a8c0465"`)
    await db.query(`DROP TABLE "account"`)
    await db.query(`ALTER TABLE "rmrk_nft" DROP CONSTRAINT "FK_dbf163f1e874f2dda3458973807"`)
    await db.query(`ALTER TABLE "rmrk_nft" DROP CONSTRAINT "FK_53927fb20d7fdde2dc4eb2c4974"`)
    await db.query(`ALTER TABLE "multisig_call" DROP CONSTRAINT "FK_2f1479a9dfc96f8d277b11cb109"`)
    await db.query(`ALTER TABLE "multisig" DROP CONSTRAINT "FK_d172cc91ad541ad8265203722db"`)
    await db.query(`ALTER TABLE "account_multisig" DROP CONSTRAINT "FK_373149008deefb43018021ac009"`)
    await db.query(`ALTER TABLE "account_multisig" DROP CONSTRAINT "FK_be61b12319215e17fe1a8c04653"`)
  }
}
