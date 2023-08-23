import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {AccountMultisig} from "./accountMultisig.model"
import {ProxyAccount} from "./proxyAccount.model"
import {MultisigCall} from "./multisigCall.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    address!: string

    @OneToMany_(() => AccountMultisig, e => e.signatory)
    multisigs!: AccountMultisig[]

    @Column_("bool", {nullable: true})
    isPureProxy!: boolean | undefined | null

    @OneToMany_(() => ProxyAccount, e => e.delegator)
    delegatorFor!: ProxyAccount[]

    @OneToMany_(() => ProxyAccount, e => e.delegatee)
    delegateeFor!: ProxyAccount[]

    @Column_("bool", {nullable: true})
    isMultisig!: boolean | undefined | null

    @OneToMany_(() => AccountMultisig, e => e.multisig)
    signatories!: AccountMultisig[]

    @Column_("int4", {nullable: true})
    threshold!: number | undefined | null

    @OneToMany_(() => MultisigCall, e => e.multisig)
    multisigsCalls!: MultisigCall[]

    @Column_("bool", {nullable: true})
    byMultix!: boolean | undefined | null
}
