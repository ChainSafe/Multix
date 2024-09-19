import { HexString, SS58String, Transaction } from 'polkadot-api'

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

export interface SubmittingCall {
  decodedCall?: Transaction<any, any, any, any>['decodedCall']
  call?: Transaction<any, any, any, any>
  hash?: HexString
  method?: string
  section?: string
  weight?: Weight
}

export type Weight = { ref_time: bigint; proof_size: bigint }

export type IdentityJudgement =
  | 'Unknown'
  | 'FeePaid'
  | 'Reasonable'
  | 'KnownGood'
  | 'OutOfDate'
  | 'LowQuality'
  | 'Erroneous'

export interface AccountRegistration {
  discord?: string | undefined
  display?: string | undefined
  displayParent?: string | undefined
  email?: string | undefined
  github?: string | undefined
  image?: string | undefined
  legal?: string | undefined
  matrix?: string | undefined
  other?: Record<string, string> | undefined
  parent?: SS58String | undefined
  pgp?: string | undefined
  riot?: string | undefined
  twitter?: string | undefined
  web?: string | undefined
  judgements: IdentityJudgement[]
}
