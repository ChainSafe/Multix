import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {Account} from "./account.model"

@Entity_()
export class RmrkNFT {
  constructor(props?: Partial<RmrkNFT>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  symbol!: string | undefined | null

  @Column_("bool", {nullable: true})
  transferable!: boolean | undefined | null

  @Column_("text", {nullable: false})
  collection!: string

  @Column_("text", {nullable: true})
  sn!: string | undefined | null

  @Index_()
  @ManyToOne_(() => Account, {nullable: true})
  owner!: Account | undefined | null

  @Column_("text", {nullable: true})
  metadata!: string | undefined | null

  @Index_()
  @ManyToOne_(() => RmrkNFT, {nullable: true})
  parent!: RmrkNFT | undefined | null

  @OneToMany_(() => RmrkNFT, e => e.parent)
  children!: RmrkNFT[]
}
