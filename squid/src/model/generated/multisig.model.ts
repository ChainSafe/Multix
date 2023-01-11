import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {Account} from "./account.model"
import {AccountMultisig} from "./accountMultisig.model"
import {MultisigCall} from "./multisigCall.model"

@Entity_()
export class Multisig {
  constructor(props?: Partial<Multisig>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Account, {nullable: true})
  proxy!: Account | undefined | null

  @OneToMany_(() => AccountMultisig, e => e.multisig)
  signers!: AccountMultisig[]

  @Column_("int4", {nullable: false})
  threshold!: number

  @Column_("timestamp with time zone", {nullable: false})
  createdAt!: Date

  @OneToMany_(() => MultisigCall, e => e.multisig)
  multisigsCalls!: MultisigCall[]
}
