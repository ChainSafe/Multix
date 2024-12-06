import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"

@Entity_()
export class AccountMultisig {
    constructor(props?: Partial<AccountMultisig>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    multisig!: Account

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    signatory!: Account
}
