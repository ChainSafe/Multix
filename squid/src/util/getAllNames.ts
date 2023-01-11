import { BatchBlock } from "@subsquid/substrate-processor"
import { Item } from "../processor"

export const getAllBlockNames = (block: BatchBlock<Item>) => block.items.map((item) => item.name)
