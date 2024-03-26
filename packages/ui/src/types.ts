import { GenericCall } from '@polkadot/types'
import { Weight } from '@polkadot/types/interfaces'

export interface MultisigStorageInfo {
  approvals: string[]
  deposit: number
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
  call?: GenericCall
  method?: string
  section?: string
  weight?: Weight
}
