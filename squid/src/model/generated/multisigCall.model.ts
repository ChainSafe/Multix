import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, DateTimeColumn as DateTimeColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"

@Entity_()
export class MultisigCall {
    constructor(props?: Partial<MultisigCall>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: false})
    blockHash!: string

    @DateTimeColumn_({nullable: false})
    timestamp!: Date

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    multisig!: Account | undefined | null

    @IntColumn_({nullable: false})
    callIndex!: number
}
