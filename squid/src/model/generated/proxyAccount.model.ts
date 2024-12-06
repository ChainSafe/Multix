import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {ProxyType} from "./_proxyType"

@Entity_()
export class ProxyAccount {
    constructor(props?: Partial<ProxyAccount>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    delegator!: Account

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    delegatee!: Account

    @Column_("varchar", {length: 17, nullable: false})
    type!: ProxyType

    @IntColumn_({nullable: false})
    delay!: number

    @DateTimeColumn_({nullable: false})
    createdAt!: Date

    @IntColumn_({nullable: true})
    extrinsicIndex!: number | undefined | null

    @IntColumn_({nullable: true})
    creationBlockNumber!: number | undefined | null
}
