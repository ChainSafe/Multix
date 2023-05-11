import 'dotenv/config'

interface EnvValues {
  blockstart: string
  prefix: number
  rpcWs: string
  archiveName: string
}

export class Env {
  env: EnvValues

  constructor() {
    this.env = {
      blockstart: process.env.BLOCK_START || '',
      prefix: Number(process.env.PREFIX) || 0,
      rpcWs: process.env.RPC_WS || '',
      archiveName: process.env.ARCHIVE_NAME || ''
    }

    this.checkForUndefined()
  }

  checkForUndefined = () => {
    Object.entries(this.env).forEach(([key, value]) => {
      // a prefix can be 0 and it is a valid value
      if (!value && value !== 0) {
        console.error(`🟥 Invalid env variable for ${key}`)
      }
    })
  }

  getEnv = () => {
    return this.env
  }
}
