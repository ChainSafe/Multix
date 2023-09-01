import 'dotenv/config'

interface EnvValues {
  blockstart: string
  prefix: number
  rpcWs: string
  archiveName?: string
  archiveUrl?: string
  chainId: string
  genesis?: string
  isEthereum?: boolean
}

export class Env {
  env: EnvValues

  constructor() {
    this.env = {
      blockstart: process.env.BLOCK_START || '',
      prefix: Number(process.env.PREFIX) || 0,
      rpcWs: process.env.RPC_WS || '',
      archiveName: process.env.ARCHIVE_NAME || '',
      archiveUrl: process.env.ARCHIVE_URL || '',
      chainId: process.env.CHAIN_ID || '',
      genesis: process.env.GENESIS || undefined,
      isEthereum: process.env.IS_ETHEREUM === "true" || false 
    }

    this.checkForUndefined()
  }

  checkForUndefined = () => {
    Object.entries(this.env).forEach(([key, value]) => {
      // a prefix can be 0 and it is a valid value
      if (!value && value !== 0) {
        console.error(`ℹ️ No env variable set for ${key} - (may be optional)`)
      }
    })
  }

  getEnv = () => {
    return this.env
  }
}
