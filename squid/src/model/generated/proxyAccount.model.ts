import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
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

    @Column_("int4", {nullable: false})
    delay!: number

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Column_("int4", {nullable: true})
    extrinsicIndex!: number | undefined | null

    @Column_("int4", {nullable: true})
    creationBlockNumber!: number | undefined | null
}
