import { Transaction } from 'polkadot-api'

export interface MultisigStorageInfo {
  approvals: string[]
  deposit: bigint
  depositor: string
  when: { height: number; index: number }
}

export type IconSizeVariant = 'small' | 'medium' | 'large'

export type EditButtonSize = 'small' | 'medium' | 'large'

export enum AccountBadge {
  PURE = 'pure',
  MULTI = 'multi'
}

export type HexString = `0x${string}`

export interface SubmittingCall {
  call?: Transaction<any, any, any, any>
  method?: string
  section?: string
  weight?: Weight
}

export type Weight = { ref_time: bigint; proof_size: bigint }
