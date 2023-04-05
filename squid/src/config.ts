import { KnownArchivesSubstrate } from "@subsquid/archive-registry";

export const config = {
    blockStart: 3_510_000,
    prefix: 42,
    ws: "wss://rococo-rpc.polkadot.io",
    archiveName: "rococo" as KnownArchivesSubstrate
}

// export const config = {
//     blockStart: 15_000_000,
//     prefix: 2,
//     ws: "wss://kusama-rpc.polkadot.io",
//     archiveName: "kusama" as KnownArchivesSubstrate
// }