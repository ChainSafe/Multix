import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, OneToMany as OneToMany_, BooleanColumn as BooleanColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"
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

    @StringColumn_({nullable: false})
    address!: string

    @OneToMany_(() => AccountMultisig, e => e.signatory)
    multisigs!: AccountMultisig[]

    @BooleanColumn_({nullable: true})
    isPureProxy!: boolean | undefined | null

    @OneToMany_(() => ProxyAccount, e => e.delegator)
    delegatorFor!: ProxyAccount[]

    @OneToMany_(() => ProxyAccount, e => e.delegatee)
    delegateeFor!: ProxyAccount[]

    @BooleanColumn_({nullable: true})
    isMultisig!: boolean | undefined | null

    @OneToMany_(() => AccountMultisig, e => e.multisig)
    signatories!: AccountMultisig[]

    @IntColumn_({nullable: true})
    threshold!: number | undefined | null

    @OneToMany_(() => MultisigCall, e => e.multisig)
    multisigsCalls!: MultisigCall[]
}
