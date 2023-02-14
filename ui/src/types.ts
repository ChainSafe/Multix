export interface WhenInfo {
    approvals: string[]
    deposit: number
    depositor: string
    when: { height: number; index: number }
}

export enum AccountBadge {
    PROXY = "proxy",
    MULTI = "multi"
}