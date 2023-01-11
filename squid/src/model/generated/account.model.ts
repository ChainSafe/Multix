import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {RmrkNFT} from "./rmrkNft.model"
import {AccountMultisig} from "./accountMultisig.model"

@Entity_()
export class Account {
  constructor(props?: Partial<Account>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @OneToMany_(() => RmrkNFT, e => e.owner)
  rmrkNfts!: RmrkNFT[]

  @OneToMany_(() => AccountMultisig, e => e.signer)
  multisigs!: AccountMultisig[]
}
