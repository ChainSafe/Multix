import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Account} from "./account.model"

@Entity_()
export class MultisigCall {
    constructor(props?: Partial<MultisigCall>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    blockHash!: string

    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    multisig!: Account | undefined | null

    @Column_("int4", {nullable: false})
    callIndex!: number

    @Column_("text", {nullable: true})
    callHash!: string | undefined | null
}
