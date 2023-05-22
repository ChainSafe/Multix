export interface MultisigStorageInfo {
  approvals: string[]
  deposit: number
  depositor: string
  when: { height: number; index: number }
}

export enum AccountBadge {
  PURE = 'pure',
  MULTI = 'multi'
}

export type HexString = `0x${string}`
