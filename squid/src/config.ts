import { KnownArchivesSubstrate } from "@subsquid/archive-registry";

export const config = {
    blockStart: 3_510_000,
    prefix: 42,
    ws: "wss://rococo-rpc.polkadot.io",
    archiveName: "rococo" as KnownArchivesSubstrate
}