import type {Result, Option} from './support'

export type Type_184 = Type_184_System | Type_184_ParachainSystem | Type_184_Timestamp | Type_184_Balances | Type_184_Authorship | Type_184_CollatorSelection | Type_184_Session | Type_184_XcmpQueue | Type_184_PolkadotXcm | Type_184_DmpQueue | Type_184_Utility | Type_184_Multisig | Type_184_Proxy | Type_184_Assets | Type_184_Uniques

export interface Type_184_System {
    __kind: 'System'
    value: SystemCall
}

export interface Type_184_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Type_184_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Type_184_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Type_184_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Type_184_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionCall
}

export interface Type_184_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Type_184_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

export interface Type_184_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Type_184_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Type_184_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Type_184_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Type_184_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Type_184_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Type_184_Uniques {
    __kind: 'Uniques'
    value: UniquesCall
}

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_CancelProxy | ProxyType_Assets | ProxyType_AssetOwner | ProxyType_AssetManager | ProxyType_Staking

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Assets {
    __kind: 'Assets'
}

export interface ProxyType_AssetOwner {
    __kind: 'AssetOwner'
}

export interface ProxyType_AssetManager {
    __kind: 'AssetManager'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 *  A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: number
}

/**
 *  Make some on-chain remark.
 * 
 *  # <weight>
 *  - `O(1)`
 *  # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

/**
 *  Set the number of pages in the WebAssembly environment's heap.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write.
 *  - Base Weight: 1.405 µs
 *  - 1 write to HEAP_PAGES
 *  # </weight>
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 *  Set the new runtime code.
 * 
 *  # <weight>
 *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime, but generally this is very expensive.
 *  We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 *  Set the new runtime code without doing any checks of the given `code`.
 * 
 *  # <weight>
 *  - `O(C)` where `C` length of `code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime. We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

/**
 *  Set the new changes trie configuration.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write or delete (codec `O(1)`).
 *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
 *  - Base Weight: 7.218 µs
 *  - DB Weight:
 *      - Writes: Changes Trie, System Digest
 *  # </weight>
 */
export interface SystemCall_set_changes_trie_config {
    __kind: 'set_changes_trie_config'
    changesTrieConfig: (ChangesTrieConfiguration | undefined)
}

/**
 *  Set some items of storage.
 * 
 *  # <weight>
 *  - `O(I)` where `I` length of `items`
 *  - `I` storage writes (`O(1)`).
 *  - Base Weight: 0.568 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 *  Kill some items from storage.
 * 
 *  # <weight>
 *  - `O(IK)` where `I` length of `keys` and `K` length of one key
 *  - `I` storage deletions.
 *  - Base Weight: .378 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 *  Kill all storage items with a key that starts with the given prefix.
 * 
 *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 *  the prefix we are removing to accurately calculate the weight of this function.
 * 
 *  # <weight>
 *  - `O(P)` where `P` amount of keys with prefix `prefix`
 *  - `P` storage deletions.
 *  - Base Weight: 0.834 * P µs
 *  - Writes: Number of subkeys + 1
 *  # </weight>
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 *  Make some on-chain remark and emit event.
 * 
 *  # <weight>
 *  - `O(b)` where b is the length of the remark.
 *  - 1 event.
 *  # </weight>
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

export type ParachainSystemCall = ParachainSystemCall_set_upgrade_block | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

/**
 *  Force an already scheduled validation function upgrade to happen on a particular block.
 * 
 *  Note that coordinating this block for the upgrade has to happen independently on the
 *  relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
 *  and this bypasses all checks and and normal protocols. Very easy to brick your chain
 *  if done wrong.
 */
export interface ParachainSystemCall_set_upgrade_block {
    __kind: 'set_upgrade_block'
    relayChainBlock: number
}

/**
 *  Set the current validation data.
 * 
 *  This should be invoked exactly once per block. It will panic at the finalization
 *  phase if the call was not invoked.
 * 
 *  The dispatch origin for this call must be `Inherent`
 * 
 *  As a side effect, this function upgrades the current validation function
 *  if the appropriate time has come.
 */
export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: Uint8Array
}

export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: Uint8Array
}

export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Uint8Array
}

export type TimestampCall = TimestampCall_set

/**
 *  Set the current time.
 * 
 *  This call should be invoked exactly once per block. It will panic at the finalization
 *  phase, if this call hasn't been invoked by that time.
 * 
 *  The timestamp should be greater than the previous one by the amount specified by
 *  `MinimumPeriod`.
 * 
 *  The dispatch origin for this call must be `Inherent`.
 * 
 *  # <weight>
 *  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
 *  - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 *  # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all

/**
 *  Transfer some liquid free balance to another account.
 * 
 *  `transfer` will set the `FreeBalance` of the sender and receiver.
 *  It will decrease the total issuance of the system by the `TransferFee`.
 *  If the sender's account is below the existential deposit as a result
 *  of the transfer, the account will be reaped.
 * 
 *  The dispatch origin for this call must be `Signed` by the transactor.
 * 
 *  # <weight>
 *  - Dependent on arguments but not critical, given proper implementations for
 *    input config types. See related functions below.
 *  - It contains a limited number of reads and writes internally and no complex computation.
 * 
 *  Related functions:
 * 
 *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *    - Transferring balances to accounts that did not exist before will cause
 *       `T::OnNewAccount::on_new_account` to be called.
 *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
 *      check that the transfer will not kill the origin account.
 *  ---------------------------------
 *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 *  - DB Weight: 1 Read and 1 Write to destination account
 *  - Origin account is already in memory, so no DB operations for them.
 *  # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: LookupSource
    value: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 *  also decrease the total issuance of the system (`TotalIssuance`).
 *  If the new free or reserved balance is below the existential deposit,
 *  it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 *  The dispatch origin for this call is `root`.
 * 
 *  # <weight>
 *  - Independent of the arguments.
 *  - Contains a limited number of reads and writes.
 *  ---------------------
 *  - Base Weight:
 *      - Creating: 27.56 µs
 *      - Killing: 35.11 µs
 *  - DB Weight: 1 Read, 1 Write to `who`
 *  # </weight>
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: LookupSource
    newFree: bigint
    newReserved: bigint
}

/**
 *  Exactly as `transfer`, except the origin must be root and the source account may be
 *  specified.
 *  # <weight>
 *  - Same as transfer, but additional read and write because the source account is
 *    not assumed to be in the overlay.
 *  # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: LookupSource
    dest: LookupSource
    value: bigint
}

/**
 *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
 *  origin account.
 * 
 *  99% of the time you want [`transfer`] instead.
 * 
 *  [`transfer`]: struct.Pallet.html#method.transfer
 *  # <weight>
 *  - Cheaper than transfer because account cannot be killed.
 *  - Base Weight: 51.4 µs
 *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
 *  #</weight>
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: LookupSource
    value: bigint
}

/**
 *  Transfer the entire transferable balance from the caller account.
 * 
 *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
 *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 *  transferred by this function. To ensure that this function results in a killed account,
 *  you might need to prepare the account by removing any reference counters, storage
 *  deposits, etc...
 * 
 *  The dispatch origin of this call must be Signed.
 * 
 *  - `dest`: The recipient of the transfer.
 *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *    of the funds the account has, causing the sender account to be killed (false), or
 *    transfer everything except at least the existential deposit, which will guarantee to
 *    keep the sender account alive (true).
 *    # <weight>
 *  - O(1). Just like transfer, but reading the user's transferable balance first.
 *    #</weight>
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: LookupSource
    keepAlive: boolean
}

export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 *  Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

export type CollatorSelectionCall = CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_leave_intent

export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: Uint8Array[]
}

export interface CollatorSelectionCall_set_desired_candidates {
    __kind: 'set_desired_candidates'
    max: number
}

export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
}

export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

export interface CollatorSelectionCall_leave_intent {
    __kind: 'leave_intent'
}

export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 *  Sets the session key(s) of the function caller to `keys`.
 *  Allows an account to set its session key prior to becoming a validator.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 *  - DbWrites: `origin account`, `NextKeys`
 *  - DbReads per key id: `KeyOwner`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: [Uint8Array, Uint8Array, Uint8Array, Uint8Array]
    proof: Uint8Array
}

/**
 *  Removes any session key(s) of the function caller.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)` in number of key types.
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 *  - DbWrites: `NextKeys`, `origin account`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

export type XcmpQueueCall = never

export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute

export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 *  Teleport some assets from the local chain to some destination chain.
 * 
 *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *    an `AccountId32` value.
 *  - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *    `dest` side. May not be empty.
 *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    destWeight: bigint
}

/**
 *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 *  a notification XCM.
 * 
 *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *    an `AccountId32` value.
 *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *    `dest` side.
 *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *    `ReserveAssetDeposited { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    destWeight: bigint
}

/**
 *  Execute an XCM message from a local, signed, origin.
 * 
 *  An event is deposited indicating whether `msg` could be executed completely or only
 *  partially.
 * 
 *  No more than `max_weight` will be used in its attempted execution. If this is less than the
 *  maximum amount of weight that the message could take to be executed, then no execution
 *  attempt will be made.
 * 
 *  NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 *  to completion; only that *some* of it was executed.
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: VersionedXcm
    maxWeight: bigint
}

export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 *  Service a single overweight message.
 * 
 *  - `origin`: Must pass `ExecuteOverweightOrigin`.
 *  - `index`: The index of the overweight message to service.
 *  - `weight_limit`: The amount of weight that message execution may take.
 * 
 *  Errors:
 *  - `Unknown`: Message of `index` is unknown.
 *  - `OverLimit`: Message execution may use greater than `weight_limit`.
 * 
 *  Events:
 *  - `OverweightServiced`: On success.
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: bigint
}

export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all

/**
 *  Send a batch of dispatch calls.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *    exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 * 
 *  This will return `Ok` in all circumstances. To determine the success of the batch, an
 *  event is deposited. If a call failed and the batch was interrupted, then the
 *  `BatchInterrupted` event is deposited, along with the number of successful calls made
 *  and the error of the failed call. If all were successful, then the `BatchCompleted`
 *  event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Type_184[]
}

/**
 *  Send a call through an indexed pseudonym of the sender.
 * 
 *  Filter from origin are passed along. The call will be dispatched with an origin which
 *  use the same filter as the origin of this call.
 * 
 *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 *  because you expect `proxy` to have been used prior in the call stack and you do not want
 *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 *  in the Multisig pallet instead.
 * 
 *  NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Type_184
}

/**
 *  Send a batch of dispatch calls and atomically execute them.
 *  The whole transaction will rollback and fail if any of the calls failed.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *    exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Type_184[]
}

export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 *  Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `other_signatories`: The accounts (other than the sender) who are part of the
 *  multi-signature, but do not participate in the approval process.
 *  - `call`: The call to be executed.
 * 
 *  Result is equivalent to the dispatched result.
 * 
 *  # <weight>
 *  O(Z + C) where Z is the length of the call and C its execution weight.
 *  -------------------------------
 *  - DB Weight: None
 *  - Plus Call Weight
 *  # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: Uint8Array[]
    call: Type_184
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  If there are enough, then dispatch the call.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call`: The call to be executed.
 * 
 *  NOTE: Unless this is the final approval, you will generally want to use
 *  `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 *  on success, result is `Ok` and the result from the interior call, if it was executed,
 *  may be found in the deposited `MultisigExecuted` event.
 * 
 *  # <weight>
 *  - `O(S + Z + Call)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - The weight of the `call`.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  -------------------------------
 *  - DB Weight:
 *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *  - Plus Call Weight
 *  # </weight>
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    call: Uint8Array
    storeCall: boolean
    maxWeight: bigint
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  ----------------------------------
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account]
 *      - Write: Multisig Storage, [Caller Account]
 *  # </weight>
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    callHash: Uint8Array
    maxWeight: bigint
}

/**
 *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 *  for this operation will be unreserved on success.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
 *  transaction for this dispatch.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - One event.
 *  - I/O: 1 read `O(S)`, one remove.
 *  - Storage: removes one item.
 *  ----------------------------------
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 *  # </weight>
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    timepoint: Timepoint
    callHash: Uint8Array
}

export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_anonymous | ProxyCall_kill_anonymous | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

/**
 *  Dispatch the given `call` from an account that the sender is authorised for through
 *  `add_proxy`.
 * 
 *  Removes any corresponding announcement(s).
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *  - `call`: The call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: Uint8Array
    forceProxyType: (ProxyType | undefined)
    call: Type_184
}

/**
 *  Register a proxy account for the sender that is able to make calls on its behalf.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `proxy`: The account that the `caller` would like to make a proxy.
 *  - `proxy_type`: The permissions allowed for this proxy account.
 *  - `delay`: The announcement period required of the initial proxy. Will generally be
 *  zero.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: Uint8Array
    proxyType: ProxyType
    delay: number
}

/**
 *  Unregister a proxy account for the sender.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `proxy`: The account that the `caller` would like to remove as a proxy.
 *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: Uint8Array
    proxyType: ProxyType
    delay: number
}

/**
 *  Unregister all proxy accounts for the sender.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  WARNING: This may be called on accounts created by `anonymous`, however if done, then
 *  the unreserved fees will be inaccessible. **All access to this account will be lost.**
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 *  initialize it with a proxy of `proxy_type` for `origin` sender.
 * 
 *  Requires a `Signed` origin.
 * 
 *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
 *  new account. This will almost always be the most permissive `ProxyType` possible to
 *  allow for maximum flexibility.
 *  - `index`: A disambiguation index, in case this is called multiple times in the same
 *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 *  want to use `0`.
 *  - `delay`: The announcement period required of the initial proxy. Will generally be
 *  zero.
 * 
 *  Fails with `Duplicate` if this has already been called in this transaction, from the
 *  same sender, with the same parameters.
 * 
 *  Fails if there are insufficient funds to pay for deposit.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 *  TODO: Might be over counting 1 read
 */
export interface ProxyCall_anonymous {
    __kind: 'anonymous'
    proxyType: ProxyType
    delay: number
    index: number
}

/**
 *  Removes a previously spawned anonymous proxy.
 * 
 *  WARNING: **All access to this account will be lost.** Any funds held in it will be
 *  inaccessible.
 * 
 *  Requires a `Signed` origin, and the sender account must have been created by a call to
 *  `anonymous` with corresponding parameters.
 * 
 *  - `spawner`: The account that originally called `anonymous` to create this account.
 *  - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
 *  - `proxy_type`: The proxy type originally passed to `anonymous`.
 *  - `height`: The height of the chain when the call to `anonymous` was processed.
 *  - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
 * 
 *  Fails with `NoPermission` in case the caller is not a previously created anonymous
 *  account whose `anonymous` call has corresponding parameters.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_kill_anonymous {
    __kind: 'kill_anonymous'
    spawner: Uint8Array
    proxyType: ProxyType
    index: number
    height: number
    extIndex: number
}

/**
 *  Publish the hash of a proxy-call that will be made in the future.
 * 
 *  This must be called some number of blocks before the corresponding `proxy` is attempted
 *  if the delay associated with the proxy relationship is greater than zero.
 * 
 *  No more than `MaxPending` announcements may be made at any one time.
 * 
 *  This will take a deposit of `AnnouncementDepositFactor` as well as
 *  `AnnouncementDepositBase` if there are no other pending announcements.
 * 
 *  The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: Uint8Array
    callHash: Uint8Array
}

/**
 *  Remove a given announcement.
 * 
 *  May be called by a proxy account to remove a call they previously announced and return
 *  the deposit.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: Uint8Array
    callHash: Uint8Array
}

/**
 *  Remove the given announcement of a delegate.
 * 
 *  May be called by a target (proxied) account to remove a call that one of their delegates
 *  (`delegate`) has announced they want to execute. The deposit is returned.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `delegate`: The account that previously announced the call.
 *  - `call_hash`: The hash of the call to be made.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: Uint8Array
    callHash: Uint8Array
}

/**
 *  Dispatch the given `call` from an account that the sender is authorized for through
 *  `add_proxy`.
 * 
 *  Removes any corresponding announcement(s).
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *  - `call`: The call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: Uint8Array
    real: Uint8Array
    forceProxyType: (ProxyType | undefined)
    call: Type_184
}

export type AssetsCall = AssetsCall_create | AssetsCall_force_create | AssetsCall_destroy | AssetsCall_mint | AssetsCall_burn | AssetsCall_transfer | AssetsCall_transfer_keep_alive | AssetsCall_force_transfer | AssetsCall_freeze | AssetsCall_thaw | AssetsCall_freeze_asset | AssetsCall_thaw_asset | AssetsCall_transfer_ownership | AssetsCall_set_team | AssetsCall_set_metadata | AssetsCall_clear_metadata | AssetsCall_force_set_metadata | AssetsCall_force_clear_metadata | AssetsCall_force_asset_status | AssetsCall_approve_transfer | AssetsCall_cancel_approval | AssetsCall_force_cancel_approval | AssetsCall_transfer_approved

/**
 *  Issue a new class of fungible assets from a public origin.
 * 
 *  This new asset class has no assets initially and its owner is the origin.
 * 
 *  The origin must be Signed and the sender must have sufficient funds free.
 * 
 *  Funds of sender are reserved by `AssetDeposit`.
 * 
 *  Parameters:
 *  - `id`: The identifier of the new asset. This must not be currently in use to identify
 *  an existing asset.
 *  - `admin`: The admin of this class of assets. The admin is the initial address of each
 *  member of the asset class's admin team.
 *  - `min_balance`: The minimum balance of this new asset that any single account must
 *  have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 *  Emits `Created` event when successful.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_create {
    __kind: 'create'
    id: number
    admin: LookupSource
    minBalance: bigint
}

/**
 *  Issue a new class of fungible assets from a privileged origin.
 * 
 *  This new asset class has no assets initially.
 * 
 *  The origin must conform to `ForceOrigin`.
 * 
 *  Unlike `create`, no funds are reserved.
 * 
 *  - `id`: The identifier of the new asset. This must not be currently in use to identify
 *  an existing asset.
 *  - `owner`: The owner of this class of assets. The owner has full superuser permissions
 *  over this asset, but may later change and configure the permissions using `transfer_ownership`
 *  and `set_team`.
 *  - `min_balance`: The minimum balance of this new asset that any single account must
 *  have. If an account's balance is reduced below this, then it collapses to zero.
 * 
 *  Emits `ForceCreated` event when successful.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_force_create {
    __kind: 'force_create'
    id: number
    owner: LookupSource
    isSufficient: boolean
    minBalance: bigint
}

/**
 *  Destroy a class of fungible assets.
 * 
 *  The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
 *  owner of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 * 
 *  Emits `Destroyed` event when successful.
 * 
 *  NOTE: It can be helpful to first freeze an asset before destroying it so that you
 *  can provide accurate witness information and prevent users from manipulating state
 *  in a way that can make it harder to destroy.
 * 
 *  Weight: `O(c + p + a)` where:
 *  - `c = (witness.accounts - witness.sufficients)`
 *  - `s = witness.sufficients`
 *  - `a = witness.approvals`
 */
export interface AssetsCall_destroy {
    __kind: 'destroy'
    id: number
    witness: AssetDestroyWitness
}

/**
 *  Mint assets of a particular class.
 * 
 *  The origin must be Signed and the sender must be the Issuer of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to have some amount minted.
 *  - `beneficiary`: The account to be credited with the minted assets.
 *  - `amount`: The amount of the asset to be minted.
 * 
 *  Emits `Issued` event when successful.
 * 
 *  Weight: `O(1)`
 *  Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
 */
export interface AssetsCall_mint {
    __kind: 'mint'
    id: number
    beneficiary: LookupSource
    amount: bigint
}

/**
 *  Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 * 
 *  Origin must be Signed and the sender should be the Manager of the asset `id`.
 * 
 *  Bails with `BalanceZero` if the `who` is already dead.
 * 
 *  - `id`: The identifier of the asset to have some amount burned.
 *  - `who`: The account to be debited from.
 *  - `amount`: The maximum amount by which `who`'s balance should be reduced.
 * 
 *  Emits `Burned` with the actual amount burned. If this takes the balance to below the
 *  minimum for the asset, then the amount burned is increased to take it to zero.
 * 
 *  Weight: `O(1)`
 *  Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
 */
export interface AssetsCall_burn {
    __kind: 'burn'
    id: number
    who: LookupSource
    amount: bigint
}

/**
 *  Move some assets from the sender account to another.
 * 
 *  Origin must be Signed.
 * 
 *  - `id`: The identifier of the asset to have some amount transferred.
 *  - `target`: The account to be credited.
 *  - `amount`: The amount by which the sender's balance of assets should be reduced and
 *  `target`'s balance increased. The amount actually transferred may be slightly greater in
 *  the case that the transfer would otherwise take the sender balance above zero but below
 *  the minimum balance. Must be greater than zero.
 * 
 *  Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *  to below the minimum for the asset, then the amount transferred is increased to take it
 *  to zero.
 * 
 *  Weight: `O(1)`
 *  Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 *  `target`.
 */
export interface AssetsCall_transfer {
    __kind: 'transfer'
    id: number
    target: LookupSource
    amount: bigint
}

/**
 *  Move some assets from the sender account to another, keeping the sender account alive.
 * 
 *  Origin must be Signed.
 * 
 *  - `id`: The identifier of the asset to have some amount transferred.
 *  - `target`: The account to be credited.
 *  - `amount`: The amount by which the sender's balance of assets should be reduced and
 *  `target`'s balance increased. The amount actually transferred may be slightly greater in
 *  the case that the transfer would otherwise take the sender balance above zero but below
 *  the minimum balance. Must be greater than zero.
 * 
 *  Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *  to below the minimum for the asset, then the amount transferred is increased to take it
 *  to zero.
 * 
 *  Weight: `O(1)`
 *  Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 *  `target`.
 */
export interface AssetsCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    id: number
    target: LookupSource
    amount: bigint
}

/**
 *  Move some assets from one account to another.
 * 
 *  Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to have some amount transferred.
 *  - `source`: The account to be debited.
 *  - `dest`: The account to be credited.
 *  - `amount`: The amount by which the `source`'s balance of assets should be reduced and
 *  `dest`'s balance increased. The amount actually transferred may be slightly greater in
 *  the case that the transfer would otherwise take the `source` balance above zero but
 *  below the minimum balance. Must be greater than zero.
 * 
 *  Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *  to below the minimum for the asset, then the amount transferred is increased to take it
 *  to zero.
 * 
 *  Weight: `O(1)`
 *  Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
 *  `dest`.
 */
export interface AssetsCall_force_transfer {
    __kind: 'force_transfer'
    id: number
    source: LookupSource
    dest: LookupSource
    amount: bigint
}

/**
 *  Disallow further unprivileged transfers from an account.
 * 
 *  Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to be frozen.
 *  - `who`: The account to be frozen.
 * 
 *  Emits `Frozen`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_freeze {
    __kind: 'freeze'
    id: number
    who: LookupSource
}

/**
 *  Allow unprivileged transfers from an account again.
 * 
 *  Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to be frozen.
 *  - `who`: The account to be unfrozen.
 * 
 *  Emits `Thawed`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_thaw {
    __kind: 'thaw'
    id: number
    who: LookupSource
}

/**
 *  Disallow further unprivileged transfers for the asset class.
 * 
 *  Origin must be Signed and the sender should be the Freezer of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to be frozen.
 * 
 *  Emits `Frozen`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_freeze_asset {
    __kind: 'freeze_asset'
    id: number
}

/**
 *  Allow unprivileged transfers for the asset again.
 * 
 *  Origin must be Signed and the sender should be the Admin of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to be thawed.
 * 
 *  Emits `Thawed`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_thaw_asset {
    __kind: 'thaw_asset'
    id: number
}

/**
 *  Change the Owner of an asset.
 * 
 *  Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 *  - `id`: The identifier of the asset.
 *  - `owner`: The new Owner of this asset.
 * 
 *  Emits `OwnerChanged`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_transfer_ownership {
    __kind: 'transfer_ownership'
    id: number
    owner: LookupSource
}

/**
 *  Change the Issuer, Admin and Freezer of an asset.
 * 
 *  Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 *  - `id`: The identifier of the asset to be frozen.
 *  - `issuer`: The new Issuer of this asset.
 *  - `admin`: The new Admin of this asset.
 *  - `freezer`: The new Freezer of this asset.
 * 
 *  Emits `TeamChanged`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_set_team {
    __kind: 'set_team'
    id: number
    issuer: LookupSource
    admin: LookupSource
    freezer: LookupSource
}

/**
 *  Set the metadata for an asset.
 * 
 *  Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 *  Funds of sender are reserved according to the formula:
 *  `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
 *  account any already reserved funds.
 * 
 *  - `id`: The identifier of the asset to update.
 *  - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 *  - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 *  - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 *  Emits `MetadataSet`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_set_metadata {
    __kind: 'set_metadata'
    id: number
    name: Uint8Array
    symbol: Uint8Array
    decimals: number
}

/**
 *  Clear the metadata for an asset.
 * 
 *  Origin must be Signed and the sender should be the Owner of the asset `id`.
 * 
 *  Any deposit is freed for the asset owner.
 * 
 *  - `id`: The identifier of the asset to clear.
 * 
 *  Emits `MetadataCleared`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_clear_metadata {
    __kind: 'clear_metadata'
    id: number
}

/**
 *  Force the metadata for an asset to some value.
 * 
 *  Origin must be ForceOrigin.
 * 
 *  Any deposit is left alone.
 * 
 *  - `id`: The identifier of the asset to update.
 *  - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 *  - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 *  - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 *  Emits `MetadataSet`.
 * 
 *  Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
 */
export interface AssetsCall_force_set_metadata {
    __kind: 'force_set_metadata'
    id: number
    name: Uint8Array
    symbol: Uint8Array
    decimals: number
    isFrozen: boolean
}

/**
 *  Clear the metadata for an asset.
 * 
 *  Origin must be ForceOrigin.
 * 
 *  Any deposit is returned.
 * 
 *  - `id`: The identifier of the asset to clear.
 * 
 *  Emits `MetadataCleared`.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_force_clear_metadata {
    __kind: 'force_clear_metadata'
    id: number
}

/**
 *  Alter the attributes of a given asset.
 * 
 *  Origin must be `ForceOrigin`.
 * 
 *  - `id`: The identifier of the asset.
 *  - `owner`: The new Owner of this asset.
 *  - `issuer`: The new Issuer of this asset.
 *  - `admin`: The new Admin of this asset.
 *  - `freezer`: The new Freezer of this asset.
 *  - `min_balance`: The minimum balance of this new asset that any single account must
 *  have. If an account's balance is reduced below this, then it collapses to zero.
 *  - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
 *  value to account for the state bloat associated with its balance storage. If set to
 *  `true`, then non-zero balances may be stored without a `consumer` reference (and thus
 *  an ED in the Balances pallet or whatever else is used to control user-account state
 *  growth).
 *  - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
 *  instructions.
 * 
 *  Emits `AssetStatusChanged` with the identity of the asset.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_force_asset_status {
    __kind: 'force_asset_status'
    id: number
    owner: LookupSource
    issuer: LookupSource
    admin: LookupSource
    freezer: LookupSource
    minBalance: bigint
    isSufficient: boolean
    isFrozen: boolean
}

/**
 *  Approve an amount of asset for transfer by a delegated third-party account.
 * 
 *  Origin must be Signed.
 * 
 *  Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
 *  for the purpose of holding the approval. If some non-zero amount of assets is already
 *  approved from signing account to `delegate`, then it is topped up or unreserved to
 *  meet the right value.
 * 
 *  NOTE: The signing account does not need to own `amount` of assets at the point of
 *  making this call.
 * 
 *  - `id`: The identifier of the asset.
 *  - `delegate`: The account to delegate permission to transfer asset.
 *  - `amount`: The amount of asset that may be transferred by `delegate`. If there is
 *  already an approval in place, then this acts additively.
 * 
 *  Emits `ApprovedTransfer` on success.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_approve_transfer {
    __kind: 'approve_transfer'
    id: number
    delegate: LookupSource
    amount: bigint
}

/**
 *  Cancel all of some asset approved for delegated transfer by a third-party account.
 * 
 *  Origin must be Signed and there must be an approval in place between signer and
 *  `delegate`.
 * 
 *  Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 * 
 *  - `id`: The identifier of the asset.
 *  - `delegate`: The account delegated permission to transfer asset.
 * 
 *  Emits `ApprovalCancelled` on success.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_cancel_approval {
    __kind: 'cancel_approval'
    id: number
    delegate: LookupSource
}

/**
 *  Cancel all of some asset approved for delegated transfer by a third-party account.
 * 
 *  Origin must be either ForceOrigin or Signed origin with the signer being the Admin
 *  account of the asset `id`.
 * 
 *  Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 * 
 *  - `id`: The identifier of the asset.
 *  - `delegate`: The account delegated permission to transfer asset.
 * 
 *  Emits `ApprovalCancelled` on success.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_force_cancel_approval {
    __kind: 'force_cancel_approval'
    id: number
    owner: LookupSource
    delegate: LookupSource
}

/**
 *  Transfer some asset balance from a previously delegated account to some third-party
 *  account.
 * 
 *  Origin must be Signed and there must be an approval in place by the `owner` to the
 *  signer.
 * 
 *  If the entire amount approved for transfer is transferred, then any deposit previously
 *  reserved by `approve_transfer` is unreserved.
 * 
 *  - `id`: The identifier of the asset.
 *  - `owner`: The account which previously approved for a transfer of at least `amount` and
 *  from which the asset balance will be withdrawn.
 *  - `destination`: The account to which the asset balance of `amount` will be transferred.
 *  - `amount`: The amount of assets to transfer.
 * 
 *  Emits `TransferredApproved` on success.
 * 
 *  Weight: `O(1)`
 */
export interface AssetsCall_transfer_approved {
    __kind: 'transfer_approved'
    id: number
    owner: LookupSource
    destination: LookupSource
    amount: bigint
}

export type UniquesCall = UniquesCall_create | UniquesCall_force_create | UniquesCall_destroy | UniquesCall_mint | UniquesCall_burn | UniquesCall_transfer | UniquesCall_redeposit | UniquesCall_freeze | UniquesCall_thaw | UniquesCall_freeze_class | UniquesCall_thaw_class | UniquesCall_transfer_ownership | UniquesCall_set_team | UniquesCall_approve_transfer | UniquesCall_cancel_approval | UniquesCall_force_asset_status | UniquesCall_set_attribute | UniquesCall_clear_attribute | UniquesCall_set_metadata | UniquesCall_clear_metadata | UniquesCall_set_class_metadata | UniquesCall_clear_class_metadata

/**
 *  Issue a new class of non-fungible assets from a public origin.
 * 
 *  This new asset class has no assets initially and its owner is the origin.
 * 
 *  The origin must be Signed and the sender must have sufficient funds free.
 * 
 *  `AssetDeposit` funds of sender are reserved.
 * 
 *  Parameters:
 *  - `class`: The identifier of the new asset class. This must not be currently in use.
 *  - `admin`: The admin of this class of assets. The admin is the initial address of each
 *  member of the asset class's admin team.
 * 
 *  Emits `Created` event when successful.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_create {
    __kind: 'create'
    class: number
    admin: LookupSource
}

/**
 *  Issue a new class of non-fungible assets from a privileged origin.
 * 
 *  This new asset class has no assets initially.
 * 
 *  The origin must conform to `ForceOrigin`.
 * 
 *  Unlike `create`, no funds are reserved.
 * 
 *  - `class`: The identifier of the new asset. This must not be currently in use.
 *  - `owner`: The owner of this class of assets. The owner has full superuser permissions
 *  over this asset, but may later change and configure the permissions using
 *  `transfer_ownership` and `set_team`.
 * 
 *  Emits `ForceCreated` event when successful.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_force_create {
    __kind: 'force_create'
    class: number
    owner: LookupSource
    freeHolding: boolean
}

/**
 *  Destroy a class of fungible assets.
 * 
 *  The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
 *  owner of the asset `class`.
 * 
 *  - `class`: The identifier of the asset class to be destroyed.
 *  - `witness`: Information on the instances minted in the asset class. This must be
 *  correct.
 * 
 *  Emits `Destroyed` event when successful.
 * 
 *  Weight: `O(n + m)` where:
 *  - `n = witness.instances`
 *  - `m = witness.instance_metadatas`
 *  - `a = witness.attributes`
 */
export interface UniquesCall_destroy {
    __kind: 'destroy'
    class: number
    witness: DestroyWitness
}

/**
 *  Mint an asset instance of a particular class.
 * 
 *  The origin must be Signed and the sender must be the Issuer of the asset `class`.
 * 
 *  - `class`: The class of the asset to be minted.
 *  - `instance`: The instance value of the asset to be minted.
 *  - `beneficiary`: The initial owner of the minted asset.
 * 
 *  Emits `Issued` event when successful.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_mint {
    __kind: 'mint'
    class: number
    instance: number
    owner: LookupSource
}

/**
 *  Destroy a single asset instance.
 * 
 *  Origin must be Signed and the sender should be the Admin of the asset `class`.
 * 
 *  - `class`: The class of the asset to be burned.
 *  - `instance`: The instance of the asset to be burned.
 *  - `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
 *    asset is owned by this value.
 * 
 *  Emits `Burned` with the actual amount burned.
 * 
 *  Weight: `O(1)`
 *  Modes: `check_owner.is_some()`.
 */
export interface UniquesCall_burn {
    __kind: 'burn'
    class: number
    instance: number
    checkOwner: (LookupSource | undefined)
}

/**
 *  Move an asset from the sender account to another.
 * 
 *  Origin must be Signed and the signing account must be either:
 *  - the Admin of the asset `class`;
 *  - the Owner of the asset `instance`;
 *  - the approved delegate for the asset `instance` (in this case, the approval is reset).
 * 
 *  Arguments:
 *  - `class`: The class of the asset to be transferred.
 *  - `instance`: The instance of the asset to be transferred.
 *  - `dest`: The account to receive ownership of the asset.
 * 
 *  Emits `Transferred`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_transfer {
    __kind: 'transfer'
    class: number
    instance: number
    dest: LookupSource
}

/**
 *  Reevaluate the deposits on some assets.
 * 
 *  Origin must be Signed and the sender should be the Owner of the asset `class`.
 * 
 *  - `class`: The class of the asset to be frozen.
 *  - `instances`: The instances of the asset class whose deposits will be reevaluated.
 * 
 *  NOTE: This exists as a best-effort function. Any asset instances which are unknown or
 *  in the case that the owner account does not have reservable funds to pay for a
 *  deposit increase are ignored. Generally the owner isn't going to call this on instances
 *  whose existing deposit is less than the refreshed deposit as it would only cost them,
 *  so it's of little consequence.
 * 
 *  It will still return an error in the case that the class is unknown of the signer is
 *  not permitted to call it.
 * 
 *  Weight: `O(instances.len())`
 */
export interface UniquesCall_redeposit {
    __kind: 'redeposit'
    class: number
    instances: number[]
}

/**
 *  Disallow further unprivileged transfer of an asset instance.
 * 
 *  Origin must be Signed and the sender should be the Freezer of the asset `class`.
 * 
 *  - `class`: The class of the asset to be frozen.
 *  - `instance`: The instance of the asset to be frozen.
 * 
 *  Emits `Frozen`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_freeze {
    __kind: 'freeze'
    class: number
    instance: number
}

/**
 *  Re-allow unprivileged transfer of an asset instance.
 * 
 *  Origin must be Signed and the sender should be the Freezer of the asset `class`.
 * 
 *  - `class`: The class of the asset to be thawed.
 *  - `instance`: The instance of the asset to be thawed.
 * 
 *  Emits `Thawed`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_thaw {
    __kind: 'thaw'
    class: number
    instance: number
}

/**
 *  Disallow further unprivileged transfers for a whole asset class.
 * 
 *  Origin must be Signed and the sender should be the Freezer of the asset `class`.
 * 
 *  - `class`: The asset class to be frozen.
 * 
 *  Emits `ClassFrozen`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_freeze_class {
    __kind: 'freeze_class'
    class: number
}

/**
 *  Re-allow unprivileged transfers for a whole asset class.
 * 
 *  Origin must be Signed and the sender should be the Admin of the asset `class`.
 * 
 *  - `class`: The class to be thawed.
 * 
 *  Emits `ClassThawed`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_thaw_class {
    __kind: 'thaw_class'
    class: number
}

/**
 *  Change the Owner of an asset class.
 * 
 *  Origin must be Signed and the sender should be the Owner of the asset `class`.
 * 
 *  - `class`: The asset class whose owner should be changed.
 *  - `owner`: The new Owner of this asset class.
 * 
 *  Emits `OwnerChanged`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_transfer_ownership {
    __kind: 'transfer_ownership'
    class: number
    owner: LookupSource
}

/**
 *  Change the Issuer, Admin and Freezer of an asset class.
 * 
 *  Origin must be Signed and the sender should be the Owner of the asset `class`.
 * 
 *  - `class`: The asset class whose team should be changed.
 *  - `issuer`: The new Issuer of this asset class.
 *  - `admin`: The new Admin of this asset class.
 *  - `freezer`: The new Freezer of this asset class.
 * 
 *  Emits `TeamChanged`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_set_team {
    __kind: 'set_team'
    class: number
    issuer: LookupSource
    admin: LookupSource
    freezer: LookupSource
}

/**
 *  Approve an instance to be transferred by a delegated third-party account.
 * 
 *  Origin must be Signed and must be the owner of the asset `instance`.
 * 
 *  - `class`: The class of the asset to be approved for delegated transfer.
 *  - `instance`: The instance of the asset to be approved for delegated transfer.
 *  - `delegate`: The account to delegate permission to transfer the asset.
 * 
 *  Emits `ApprovedTransfer` on success.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_approve_transfer {
    __kind: 'approve_transfer'
    class: number
    instance: number
    delegate: LookupSource
}

/**
 *  Cancel the prior approval for the transfer of an asset by a delegate.
 * 
 *  Origin must be either:
 *  - the `Force` origin;
 *  - `Signed` with the signer being the Admin of the asset `class`;
 *  - `Signed` with the signer being the Owner of the asset `instance`;
 * 
 *  Arguments:
 *  - `class`: The class of the asset of whose approval will be cancelled.
 *  - `instance`: The instance of the asset of whose approval will be cancelled.
 *  - `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
 *    which permission of transfer is delegated.
 * 
 *  Emits `ApprovalCancelled` on success.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_cancel_approval {
    __kind: 'cancel_approval'
    class: number
    instance: number
    maybeCheckDelegate: (LookupSource | undefined)
}

/**
 *  Alter the attributes of a given asset.
 * 
 *  Origin must be `ForceOrigin`.
 * 
 *  - `class`: The identifier of the asset.
 *  - `owner`: The new Owner of this asset.
 *  - `issuer`: The new Issuer of this asset.
 *  - `admin`: The new Admin of this asset.
 *  - `freezer`: The new Freezer of this asset.
 *  - `free_holding`: Whether a deposit is taken for holding an instance of this asset
 *    class.
 *  - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
 *  instructions.
 * 
 *  Emits `AssetStatusChanged` with the identity of the asset.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_force_asset_status {
    __kind: 'force_asset_status'
    class: number
    owner: LookupSource
    issuer: LookupSource
    admin: LookupSource
    freezer: LookupSource
    freeHolding: boolean
    isFrozen: boolean
}

/**
 *  Set an attribute for an asset class or instance.
 * 
 *  Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *  asset `class`.
 * 
 *  If the origin is Signed, then funds of signer are reserved according to the formula:
 *  `MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
 *  account any already reserved funds.
 * 
 *  - `class`: The identifier of the asset class whose instance's metadata to set.
 *  - `maybe_instance`: The identifier of the asset instance whose metadata to set.
 *  - `key`: The key of the attribute.
 *  - `value`: The value to which to set the attribute.
 * 
 *  Emits `AttributeSet`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_set_attribute {
    __kind: 'set_attribute'
    class: number
    maybeInstance: (number | undefined)
    key: Uint8Array
    value: Uint8Array
}

/**
 *  Set an attribute for an asset class or instance.
 * 
 *  Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *  asset `class`.
 * 
 *  If the origin is Signed, then funds of signer are reserved according to the formula:
 *  `MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
 *  account any already reserved funds.
 * 
 *  - `class`: The identifier of the asset class whose instance's metadata to set.
 *  - `instance`: The identifier of the asset instance whose metadata to set.
 *  - `key`: The key of the attribute.
 *  - `value`: The value to which to set the attribute.
 * 
 *  Emits `AttributeSet`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_clear_attribute {
    __kind: 'clear_attribute'
    class: number
    maybeInstance: (number | undefined)
    key: Uint8Array
}

/**
 *  Set the metadata for an asset instance.
 * 
 *  Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *  asset `class`.
 * 
 *  If the origin is Signed, then funds of signer are reserved according to the formula:
 *  `MetadataDepositBase + DepositPerByte * data.len` taking into
 *  account any already reserved funds.
 * 
 *  - `class`: The identifier of the asset class whose instance's metadata to set.
 *  - `instance`: The identifier of the asset instance whose metadata to set.
 *  - `data`: The general information of this asset. Limited in length by `StringLimit`.
 *  - `is_frozen`: Whether the metadata should be frozen against further changes.
 * 
 *  Emits `MetadataSet`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_set_metadata {
    __kind: 'set_metadata'
    class: number
    instance: number
    data: Uint8Array
    isFrozen: boolean
}

/**
 *  Clear the metadata for an asset instance.
 * 
 *  Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *  asset `instance`.
 * 
 *  Any deposit is freed for the asset class owner.
 * 
 *  - `class`: The identifier of the asset class whose instance's metadata to clear.
 *  - `instance`: The identifier of the asset instance whose metadata to clear.
 * 
 *  Emits `MetadataCleared`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_clear_metadata {
    __kind: 'clear_metadata'
    class: number
    instance: number
}

/**
 *  Set the metadata for an asset class.
 * 
 *  Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 *  the asset `class`.
 * 
 *  If the origin is `Signed`, then funds of signer are reserved according to the formula:
 *  `MetadataDepositBase + DepositPerByte * data.len` taking into
 *  account any already reserved funds.
 * 
 *  - `class`: The identifier of the asset whose metadata to update.
 *  - `data`: The general information of this asset. Limited in length by `StringLimit`.
 *  - `is_frozen`: Whether the metadata should be frozen against further changes.
 * 
 *  Emits `ClassMetadataSet`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_set_class_metadata {
    __kind: 'set_class_metadata'
    class: number
    data: Uint8Array
    isFrozen: boolean
}

/**
 *  Clear the metadata for an asset class.
 * 
 *  Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 *  the asset `class`.
 * 
 *  Any deposit is freed for the asset class owner.
 * 
 *  - `class`: The identifier of the asset class whose metadata to clear.
 * 
 *  Emits `ClassMetadataCleared`.
 * 
 *  Weight: `O(1)`
 */
export interface UniquesCall_clear_class_metadata {
    __kind: 'clear_class_metadata'
    class: number
}

export interface ChangesTrieConfiguration {
    digestInterval: number
    digestLevels: number
}

export interface ParachainInherentData {
    validationData: PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [number, InboundHrmpMessage[]][]
}

export type LookupSource = LookupSource_Id | LookupSource_Index | LookupSource_Raw | LookupSource_Address32 | LookupSource_Address20

export interface LookupSource_Id {
    __kind: 'Id'
    value: Uint8Array
}

export interface LookupSource_Index {
    __kind: 'Index'
    value: number
}

export interface LookupSource_Raw {
    __kind: 'Raw'
    value: Uint8Array
}

export interface LookupSource_Address32 {
    __kind: 'Address32'
    value: Uint8Array
}

export interface LookupSource_Address20 {
    __kind: 'Address20'
    value: Uint8Array
}

export interface Header {
    parentHash: Uint8Array
    number: number
    stateRoot: Uint8Array
    extrinsicsRoot: Uint8Array
    digest: Digest
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1 | VersionedMultiLocation_V2

export interface VersionedMultiLocation_V0 {
    __kind: 'V0'
    value: MultiLocationV0
}

export interface VersionedMultiLocation_V1 {
    __kind: 'V1'
    value: MultiLocationV1
}

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: MultiLocationV2
}

export type VersionedXcm = VersionedXcm_V0 | VersionedXcm_V1 | VersionedXcm_V2

export interface VersionedXcm_V0 {
    __kind: 'V0'
    value: XcmV0
}

export interface VersionedXcm_V1 {
    __kind: 'V1'
    value: XcmV1
}

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: InstructionV2[]
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1 | VersionedMultiAssets_V2

export interface VersionedMultiAssets_V0 {
    __kind: 'V0'
    value: MultiAssetV0[]
}

export interface VersionedMultiAssets_V1 {
    __kind: 'V1'
    value: MultiAssetV1[]
}

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: MultiAssetV1[]
}

export interface Timepoint {
    height: number
    index: number
}

export interface AssetDestroyWitness {
    accounts: number
    sufficients: number
    approvals: number
}

export interface DestroyWitness {
    instances: number
    instanceMetadatas: number
    attributes: number
}

export interface PersistedValidationData {
    parentHead: Uint8Array
    relayParentNumber: number
    relayParentStorageRoot: Uint8Array
    maxPovSize: number
}

export interface StorageProof {
    trieNodes: Uint8Array[]
}

export interface InboundDownwardMessage {
    pubSentAt: number
    pubMsg: Uint8Array
}

export interface InboundHrmpMessage {
    sentAt: number
    data: Uint8Array
}

export interface Digest {
    logs: DigestItem[]
}

export type MultiLocationV0 = MultiLocationV0_Here | MultiLocationV0_X1 | MultiLocationV0_X2 | MultiLocationV0_X3 | MultiLocationV0_X4 | MultiLocationV0_X5 | MultiLocationV0_X6 | MultiLocationV0_X7 | MultiLocationV0_X8

export interface MultiLocationV0_Here {
    __kind: 'Here'
}

export interface MultiLocationV0_X1 {
    __kind: 'X1'
    value: JunctionV0
}

export interface MultiLocationV0_X2 {
    __kind: 'X2'
    value: [JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X3 {
    __kind: 'X3'
    value: [JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X4 {
    __kind: 'X4'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X5 {
    __kind: 'X5'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X6 {
    __kind: 'X6'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X7 {
    __kind: 'X7'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X8 {
    __kind: 'X8'
    value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV1 {
    parents: number
    interior: JunctionsV1
}

export interface MultiLocationV2 {
    parents: number
    interior: JunctionsV1
}

export type XcmV0 = XcmV0_WithdrawAsset | XcmV0_ReserveAssetDeposit | XcmV0_ReceiveTeleportedAsset | XcmV0_QueryResponse | XcmV0_TransferAsset | XcmV0_TransferReserveAsset | XcmV0_Transact | XcmV0_HrmpNewChannelOpenRequest | XcmV0_HrmpChannelAccepted | XcmV0_HrmpChannelClosing | XcmV0_RelayedFrom

export interface XcmV0_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: MultiAssetV0[]
    effects: XcmOrderV0[]
}

export interface XcmV0_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: MultiAssetV0[]
    effects: XcmOrderV0[]
}

export interface XcmV0_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: MultiAssetV0[]
    effects: XcmOrderV0[]
}

export interface XcmV0_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: ResponseV0
}

export interface XcmV0_TransferAsset {
    __kind: 'TransferAsset'
    assets: MultiAssetV0[]
    dest: MultiLocationV0
}

export interface XcmV0_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: MultiAssetV0[]
    dest: MultiLocationV0
    effects: XcmOrderV0[]
}

export interface XcmV0_Transact {
    __kind: 'Transact'
    originType: XcmOriginKind
    requireWeightAtMost: bigint
    call: DoubleEncodedCall
}

export interface XcmV0_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface XcmV0_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface XcmV0_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface XcmV0_RelayedFrom {
    __kind: 'RelayedFrom'
    who: MultiLocationV0
    message: XcmV0
}

export type XcmV1 = XcmV1_WithdrawAsset | XcmV1_ReserveAssetDeposit | XcmV1_ReceiveTeleportedAsset | XcmV1_QueryResponse | XcmV1_TransferAsset | XcmV1_TransferReserveAsset | XcmV1_Transact | XcmV1_HrmpNewChannelOpenRequest | XcmV1_HrmpChannelAccepted | XcmV1_HrmpChannelClosing | XcmV1_RelayedFrom

export interface XcmV1_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: MultiAssetV1[]
    effects: XcmOrderV1[]
}

export interface XcmV1_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: MultiAssetV1[]
    effects: XcmOrderV1[]
}

export interface XcmV1_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: MultiAssetV1[]
    effects: XcmOrderV1[]
}

export interface XcmV1_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: ResponseV1
}

export interface XcmV1_TransferAsset {
    __kind: 'TransferAsset'
    assets: MultiAssetV1[]
    dest: MultiLocationV1
}

export interface XcmV1_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: MultiAssetV1[]
    dest: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface XcmV1_Transact {
    __kind: 'Transact'
    originType: XcmOriginKind
    requireWeightAtMost: bigint
    call: DoubleEncodedCall
}

export interface XcmV1_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface XcmV1_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface XcmV1_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface XcmV1_RelayedFrom {
    __kind: 'RelayedFrom'
    who: MultiLocationV1
    message: XcmV1
}

export type InstructionV2 = InstructionV2_WithdrawAsset | InstructionV2_ReserveAssetDeposited | InstructionV2_ReceiveTeleportedAsset | InstructionV2_QueryResponse | InstructionV2_TransferAsset | InstructionV2_TransferReserveAsset | InstructionV2_Transact | InstructionV2_HrmpNewChannelOpenRequest | InstructionV2_HrmpChannelAccepted | InstructionV2_HrmpChannelClosing | InstructionV2_ClearOrigin | InstructionV2_DescendOrigin | InstructionV2_ReportError | InstructionV2_DepositAsset | InstructionV2_DepositReserveAsset | InstructionV2_ExchangeAsset | InstructionV2_InitiateReserveWithdraw | InstructionV2_InitiateTeleport | InstructionV2_QueryHolding | InstructionV2_BuyExecution | InstructionV2_RefundSurplus | InstructionV2_SetErrorHandler | InstructionV2_SetAppendix | InstructionV2_ClearError | InstructionV2_ClaimAsset | InstructionV2_Trap

export interface InstructionV2_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: MultiAssetV1[]
}

export interface InstructionV2_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: MultiAssetV1[]
}

export interface InstructionV2_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: MultiAssetV1[]
}

export interface InstructionV2_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: ResponseV2
    maxWeight: bigint
}

export interface InstructionV2_TransferAsset {
    __kind: 'TransferAsset'
    assets: MultiAssetV1[]
    beneficiary: MultiLocationV2
}

export interface InstructionV2_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: MultiAssetV1[]
    dest: MultiLocationV2
    xcm: InstructionV2[]
}

export interface InstructionV2_Transact {
    __kind: 'Transact'
    originType: OriginKindV2
    requireWeightAtMost: bigint
    call: DoubleEncodedCall
}

export interface InstructionV2_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface InstructionV2_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface InstructionV2_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface InstructionV2_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface InstructionV2_DescendOrigin {
    __kind: 'DescendOrigin'
    value: InteriorMultiLocation
}

export interface InstructionV2_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: MultiLocationV2
    maxResponseWeight: bigint
}

export interface InstructionV2_DepositAsset {
    __kind: 'DepositAsset'
    assets: MultiAssetFilterV2
    maxAssets: number
    beneficiary: MultiLocationV2
}

export interface InstructionV2_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: MultiAssetFilterV2
    maxAssets: number
    dest: MultiLocationV2
    xcm: InstructionV2[]
}

export interface InstructionV2_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: MultiAssetFilterV2
    receive: MultiAssetV1[]
}

export interface InstructionV2_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: MultiAssetFilterV2
    reserve: MultiLocationV2
    xcm: InstructionV2[]
}

export interface InstructionV2_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: MultiAssetFilterV2
    dest: MultiLocationV2
    xcm: InstructionV2[]
}

export interface InstructionV2_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: MultiLocationV2
    assets: MultiAssetFilterV2
    maxResponseWeight: bigint
}

export interface InstructionV2_BuyExecution {
    __kind: 'BuyExecution'
    fees: MultiAssetV2
    weightLimit: WeightLimitV2
}

export interface InstructionV2_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface InstructionV2_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: InstructionV2[]
}

export interface InstructionV2_SetAppendix {
    __kind: 'SetAppendix'
    value: InstructionV2[]
}

export interface InstructionV2_ClearError {
    __kind: 'ClearError'
}

export interface InstructionV2_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: MultiAssetV1[]
    ticket: MultiLocationV2
}

export interface InstructionV2_Trap {
    __kind: 'Trap'
    value: bigint
}

export type MultiAssetV0 = MultiAssetV0_None | MultiAssetV0_All | MultiAssetV0_AllFungible | MultiAssetV0_AllNonFungible | MultiAssetV0_AllAbstractFungible | MultiAssetV0_AllAbstractNonFungible | MultiAssetV0_AllConcreteFungible | MultiAssetV0_AllConcreteNonFungible | MultiAssetV0_AbstractFungible | MultiAssetV0_AbstractNonFungible | MultiAssetV0_ConcreteFungible | MultiAssetV0_ConcreteNonFungible

export interface MultiAssetV0_None {
    __kind: 'None'
}

export interface MultiAssetV0_All {
    __kind: 'All'
}

export interface MultiAssetV0_AllFungible {
    __kind: 'AllFungible'
}

export interface MultiAssetV0_AllNonFungible {
    __kind: 'AllNonFungible'
}

export interface MultiAssetV0_AllAbstractFungible {
    __kind: 'AllAbstractFungible'
    value: Uint8Array
}

export interface MultiAssetV0_AllAbstractNonFungible {
    __kind: 'AllAbstractNonFungible'
    value: Uint8Array
}

export interface MultiAssetV0_AllConcreteFungible {
    __kind: 'AllConcreteFungible'
    value: MultiLocationV0
}

export interface MultiAssetV0_AllConcreteNonFungible {
    __kind: 'AllConcreteNonFungible'
    value: MultiLocationV0
}

export interface MultiAssetV0_AbstractFungible {
    __kind: 'AbstractFungible'
    id: Uint8Array
    instance: bigint
}

export interface MultiAssetV0_AbstractNonFungible {
    __kind: 'AbstractNonFungible'
    class: Uint8Array
    instance: AssetInstanceV0
}

export interface MultiAssetV0_ConcreteFungible {
    __kind: 'ConcreteFungible'
    id: MultiLocationV0
    amount: bigint
}

export interface MultiAssetV0_ConcreteNonFungible {
    __kind: 'ConcreteNonFungible'
    class: MultiLocationV0
    instance: AssetInstanceV0
}

export interface MultiAssetV1 {
    id: XcmAssetId
    fungibility: FungibilityV1
}

export type DigestItem = DigestItem_Other | DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_SealV0 | DigestItem_Consensus | DigestItem_Seal | DigestItem_PreRuntime | DigestItem_ChangesTrieSignal | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_Other {
    __kind: 'Other'
    value: Uint8Array
}

export interface DigestItem_AuthoritiesChange {
    __kind: 'AuthoritiesChange'
    value: Uint8Array[]
}

export interface DigestItem_ChangesTrieRoot {
    __kind: 'ChangesTrieRoot'
    value: Uint8Array
}

export interface DigestItem_SealV0 {
    __kind: 'SealV0'
    value: [bigint, Uint8Array]
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_ChangesTrieSignal {
    __kind: 'ChangesTrieSignal'
    value: ChangesTrieSignal
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export type JunctionV0 = JunctionV0_Parent | JunctionV0_Parachain | JunctionV0_AccountId32 | JunctionV0_AccountIndex64 | JunctionV0_AccountKey20 | JunctionV0_PalletInstance | JunctionV0_GeneralIndex | JunctionV0_GeneralKey | JunctionV0_OnlyChild | JunctionV0_Plurality

export interface JunctionV0_Parent {
    __kind: 'Parent'
}

export interface JunctionV0_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface JunctionV0_AccountId32 {
    __kind: 'AccountId32'
    network: NetworkId
    id: Uint8Array
}

export interface JunctionV0_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: NetworkId
    index: bigint
}

export interface JunctionV0_AccountKey20 {
    __kind: 'AccountKey20'
    network: NetworkId
    key: Uint8Array
}

export interface JunctionV0_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface JunctionV0_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface JunctionV0_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface JunctionV0_OnlyChild {
    __kind: 'OnlyChild'
}

export interface JunctionV0_Plurality {
    __kind: 'Plurality'
    id: BodyId
    part: BodyPart
}

export type JunctionsV1 = JunctionsV1_Here | JunctionsV1_X1 | JunctionsV1_X2 | JunctionsV1_X3 | JunctionsV1_X4 | JunctionsV1_X5 | JunctionsV1_X6 | JunctionsV1_X7 | JunctionsV1_X8

export interface JunctionsV1_Here {
    __kind: 'Here'
}

export interface JunctionsV1_X1 {
    __kind: 'X1'
    value: JunctionV1
}

export interface JunctionsV1_X2 {
    __kind: 'X2'
    value: [JunctionV1, JunctionV1]
}

export interface JunctionsV1_X3 {
    __kind: 'X3'
    value: [JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X4 {
    __kind: 'X4'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X5 {
    __kind: 'X5'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X6 {
    __kind: 'X6'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X7 {
    __kind: 'X7'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface JunctionsV1_X8 {
    __kind: 'X8'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export type XcmOrderV0 = XcmOrderV0_Null | XcmOrderV0_DepositAsset | XcmOrderV0_DepositReserveAsset | XcmOrderV0_ExchangeAsset | XcmOrderV0_InitiateReserveWithdraw | XcmOrderV0_InitiateTeleport | XcmOrderV0_QueryHolding | XcmOrderV0_BuyExecution

export interface XcmOrderV0_Null {
    __kind: 'Null'
}

export interface XcmOrderV0_DepositAsset {
    __kind: 'DepositAsset'
    assets: MultiAssetV0[]
    dest: MultiLocationV0
}

export interface XcmOrderV0_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: MultiAssetV0[]
    dest: MultiLocationV0
    effects: XcmOrderV0[]
}

export interface XcmOrderV0_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: MultiAssetV0[]
    receive: MultiAssetV0[]
}

export interface XcmOrderV0_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: MultiAssetV0[]
    reserve: MultiLocationV0
    effects: XcmOrderV0[]
}

export interface XcmOrderV0_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: MultiAsset[]
    dest: MultiLocationV0
    effects: XcmOrderV0[]
}

export interface XcmOrderV0_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: MultiLocationV0
    assets: MultiAssetV0[]
}

export interface XcmOrderV0_BuyExecution {
    __kind: 'BuyExecution'
    fees: MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: XcmV0[]
}

export type ResponseV0 = ResponseV0_Assets

export interface ResponseV0_Assets {
    __kind: 'Assets'
    value: MultiAssetV0[]
}

export type XcmOriginKind = XcmOriginKind_Native | XcmOriginKind_SovereignAccount | XcmOriginKind_Superuser | XcmOriginKind_Xcm

export interface XcmOriginKind_Native {
    __kind: 'Native'
}

export interface XcmOriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface XcmOriginKind_Superuser {
    __kind: 'Superuser'
}

export interface XcmOriginKind_Xcm {
    __kind: 'Xcm'
}

export interface DoubleEncodedCall {
    encoded: Uint8Array
}

export type XcmOrderV1 = XcmOrderV1_Noop | XcmOrderV1_DepositAsset | XcmOrderV1_DepositReserveAsset | XcmOrderV1_ExchangeAsset | XcmOrderV1_InitiateReserveWithdraw | XcmOrderV1_InitiateTeleport | XcmOrderV1_QueryHolding | XcmOrderV1_BuyExecution

export interface XcmOrderV1_Noop {
    __kind: 'Noop'
}

export interface XcmOrderV1_DepositAsset {
    __kind: 'DepositAsset'
    assets: MultiAssetFilterV1
    maxAssets: number
    beneficiary: MultiLocationV1
}

export interface XcmOrderV1_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: MultiAssetFilterV1
    maxAssets: number
    dest: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface XcmOrderV1_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: MultiAssetFilterV1
    receive: MultiAssetV1[]
}

export interface XcmOrderV1_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: MultiAssetFilterV1
    reserve: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface XcmOrderV1_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: MultiAssetFilterV1
    dest: MultiLocationV1
    effects: XcmOrderV1[]
}

export interface XcmOrderV1_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: MultiLocationV1
    assets: MultiAssetFilterV1
}

export interface XcmOrderV1_BuyExecution {
    __kind: 'BuyExecution'
    fees: MultiAssetV1
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: XcmV1[]
}

export type ResponseV1 = ResponseV1_Assets

export interface ResponseV1_Assets {
    __kind: 'Assets'
    value: MultiAssetV1[]
}

export type ResponseV2 = ResponseV2_Null | ResponseV2_Assets | ResponseV2_ExecutionResult

export interface ResponseV2_Null {
    __kind: 'Null'
}

export interface ResponseV2_Assets {
    __kind: 'Assets'
    value: MultiAssetV1[]
}

export interface ResponseV2_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ResponseV2Result
}

export type OriginKindV2 = OriginKindV2_Native | OriginKindV2_SovereignAccount | OriginKindV2_Superuser | OriginKindV2_Xcm

export interface OriginKindV2_Native {
    __kind: 'Native'
}

export interface OriginKindV2_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface OriginKindV2_Superuser {
    __kind: 'Superuser'
}

export interface OriginKindV2_Xcm {
    __kind: 'Xcm'
}

export type InteriorMultiLocation = InteriorMultiLocation_Here | InteriorMultiLocation_X1 | InteriorMultiLocation_X2 | InteriorMultiLocation_X3 | InteriorMultiLocation_X4 | InteriorMultiLocation_X5 | InteriorMultiLocation_X6 | InteriorMultiLocation_X7 | InteriorMultiLocation_X8

export interface InteriorMultiLocation_Here {
    __kind: 'Here'
}

export interface InteriorMultiLocation_X1 {
    __kind: 'X1'
    value: JunctionV1
}

export interface InteriorMultiLocation_X2 {
    __kind: 'X2'
    value: [JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X3 {
    __kind: 'X3'
    value: [JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X4 {
    __kind: 'X4'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X5 {
    __kind: 'X5'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X6 {
    __kind: 'X6'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X7 {
    __kind: 'X7'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export interface InteriorMultiLocation_X8 {
    __kind: 'X8'
    value: [JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]
}

export type MultiAssetFilterV2 = MultiAssetFilterV2_Definite | MultiAssetFilterV2_Wild

export interface MultiAssetFilterV2_Definite {
    __kind: 'Definite'
    value: MultiAssetV1[]
}

export interface MultiAssetFilterV2_Wild {
    __kind: 'Wild'
    value: WildMultiAssetV1
}

export interface MultiAssetV2 {
    id: XcmAssetId
    fungibility: FungibilityV1
}

export type WeightLimitV2 = WeightLimitV2_Unlimited | WeightLimitV2_Limited

export interface WeightLimitV2_Unlimited {
    __kind: 'Unlimited'
}

export interface WeightLimitV2_Limited {
    __kind: 'Limited'
    value: bigint
}

export type AssetInstanceV0 = AssetInstanceV0_Undefined | AssetInstanceV0_Index8 | AssetInstanceV0_Index16 | AssetInstanceV0_Index32 | AssetInstanceV0_Index64 | AssetInstanceV0_Index128 | AssetInstanceV0_Array4 | AssetInstanceV0_Array8 | AssetInstanceV0_Array16 | AssetInstanceV0_Array32 | AssetInstanceV0_Blob

export interface AssetInstanceV0_Undefined {
    __kind: 'Undefined'
}

export interface AssetInstanceV0_Index8 {
    __kind: 'Index8'
    value: number
}

export interface AssetInstanceV0_Index16 {
    __kind: 'Index16'
    value: number
}

export interface AssetInstanceV0_Index32 {
    __kind: 'Index32'
    value: number
}

export interface AssetInstanceV0_Index64 {
    __kind: 'Index64'
    value: bigint
}

export interface AssetInstanceV0_Index128 {
    __kind: 'Index128'
    value: bigint
}

export interface AssetInstanceV0_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface AssetInstanceV0_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface AssetInstanceV0_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface AssetInstanceV0_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface AssetInstanceV0_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type XcmAssetId = XcmAssetId_Concrete | XcmAssetId_Abstract

export interface XcmAssetId_Concrete {
    __kind: 'Concrete'
    value: MultiLocation
}

export interface XcmAssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type FungibilityV1 = FungibilityV1_Fungible | FungibilityV1_NonFungible

export interface FungibilityV1_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface FungibilityV1_NonFungible {
    __kind: 'NonFungible'
    value: AssetInstanceV1
}

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
    __kind: 'NewConfiguration'
    value: (ChangesTrieConfiguration | undefined)
}

export type NetworkId = NetworkId_Any | NetworkId_Named | NetworkId_Polkadot | NetworkId_Kusama

export interface NetworkId_Any {
    __kind: 'Any'
}

export interface NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface NetworkId_Kusama {
    __kind: 'Kusama'
}

export type BodyId = BodyId_Unit | BodyId_Named | BodyId_Index | BodyId_Executive | BodyId_Technical | BodyId_Legislative | BodyId_Judicial

export interface BodyId_Unit {
    __kind: 'Unit'
}

export interface BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface BodyId_Executive {
    __kind: 'Executive'
}

export interface BodyId_Technical {
    __kind: 'Technical'
}

export interface BodyId_Legislative {
    __kind: 'Legislative'
}

export interface BodyId_Judicial {
    __kind: 'Judicial'
}

export type BodyPart = BodyPart_Voice | BodyPart_Members | BodyPart_Fraction | BodyPart_AtLeastProportion | BodyPart_MoreThanProportion

export interface BodyPart_Voice {
    __kind: 'Voice'
}

export interface BodyPart_Members {
    __kind: 'Members'
    value: number
}

export interface BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export type JunctionV1 = JunctionV1_Parachain | JunctionV1_AccountId32 | JunctionV1_AccountIndex64 | JunctionV1_AccountKey20 | JunctionV1_PalletInstance | JunctionV1_GeneralIndex | JunctionV1_GeneralKey | JunctionV1_OnlyChild | JunctionV1_Plurality

export interface JunctionV1_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface JunctionV1_AccountId32 {
    __kind: 'AccountId32'
    network: NetworkId
    id: Uint8Array
}

export interface JunctionV1_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: NetworkId
    index: bigint
}

export interface JunctionV1_AccountKey20 {
    __kind: 'AccountKey20'
    network: NetworkId
    key: Uint8Array
}

export interface JunctionV1_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface JunctionV1_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface JunctionV1_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface JunctionV1_OnlyChild {
    __kind: 'OnlyChild'
}

export interface JunctionV1_Plurality {
    __kind: 'Plurality'
    id: BodyId
    part: BodyPart
}

export interface MultiAsset {
    id: XcmAssetId
    fungibility: FungibilityV1
}

export type MultiAssetFilterV1 = MultiAssetFilterV1_Definite | MultiAssetFilterV1_Wild

export interface MultiAssetFilterV1_Definite {
    __kind: 'Definite'
    value: MultiAssetV1[]
}

export interface MultiAssetFilterV1_Wild {
    __kind: 'Wild'
    value: WildMultiAssetV1
}

export type ResponseV2Result = ResponseV2Result_Ok | ResponseV2Result_Err

export interface ResponseV2Result_Ok {
    __kind: 'Ok'
}

export interface ResponseV2Result_Err {
    __kind: 'Err'
    value: [number, XcmErrorV2]
}

export type WildMultiAssetV1 = WildMultiAssetV1_All | WildMultiAssetV1_AllOf

export interface WildMultiAssetV1_All {
    __kind: 'All'
}

export interface WildMultiAssetV1_AllOf {
    __kind: 'AllOf'
    id: XcmAssetId
    fungibility: WildFungibilityV1
}

export interface MultiLocation {
    parents: number
    interior: JunctionsV1
}

export type AssetInstanceV1 = AssetInstanceV1_Undefined | AssetInstanceV1_Index | AssetInstanceV1_Array4 | AssetInstanceV1_Array8 | AssetInstanceV1_Array16 | AssetInstanceV1_Array32 | AssetInstanceV1_Blob

export interface AssetInstanceV1_Undefined {
    __kind: 'Undefined'
}

export interface AssetInstanceV1_Index {
    __kind: 'Index'
    value: bigint
}

export interface AssetInstanceV1_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface AssetInstanceV1_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface AssetInstanceV1_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface AssetInstanceV1_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface AssetInstanceV1_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type XcmErrorV2 = XcmErrorV2_Undefined | XcmErrorV2_Overflow | XcmErrorV2_Unimplemented | XcmErrorV2_UnhandledXcmVersion | XcmErrorV2_UnhandledXcmMessage | XcmErrorV2_UnhandledEffect | XcmErrorV2_EscalationOfPrivilege | XcmErrorV2_UntrustedReserveLocation | XcmErrorV2_UntrustedTeleportLocation | XcmErrorV2_DestinationBufferOverflow | XcmErrorV2_MultiLocationFull | XcmErrorV2_MultiLocationNotInvertible | XcmErrorV2_FailedToDecode | XcmErrorV2_BadOrigin | XcmErrorV2_ExceedsMaxMessageSize | XcmErrorV2_FailedToTransactAsset | XcmErrorV2_WeightLimitReached | XcmErrorV2_Wildcard | XcmErrorV2_TooMuchWeightRequired | XcmErrorV2_NotHoldingFees | XcmErrorV2_WeightNotComputable | XcmErrorV2_Barrier | XcmErrorV2_NotWithdrawable | XcmErrorV2_LocationCannotHold | XcmErrorV2_TooExpensive | XcmErrorV2_AssetNotFound | XcmErrorV2_DestinationUnsupported | XcmErrorV2_RecursionLimitReached | XcmErrorV2_Transport | XcmErrorV2_Unroutable | XcmErrorV2_UnknownWeightRequired | XcmErrorV2_Trap | XcmErrorV2_UnknownClaim | XcmErrorV2_InvalidLocation

export interface XcmErrorV2_Undefined {
    __kind: 'Undefined'
}

export interface XcmErrorV2_Overflow {
    __kind: 'Overflow'
}

export interface XcmErrorV2_Unimplemented {
    __kind: 'Unimplemented'
}

export interface XcmErrorV2_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface XcmErrorV2_UnhandledXcmMessage {
    __kind: 'UnhandledXcmMessage'
}

export interface XcmErrorV2_UnhandledEffect {
    __kind: 'UnhandledEffect'
}

export interface XcmErrorV2_EscalationOfPrivilege {
    __kind: 'EscalationOfPrivilege'
}

export interface XcmErrorV2_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface XcmErrorV2_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface XcmErrorV2_DestinationBufferOverflow {
    __kind: 'DestinationBufferOverflow'
}

export interface XcmErrorV2_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface XcmErrorV2_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface XcmErrorV2_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface XcmErrorV2_BadOrigin {
    __kind: 'BadOrigin'
}

export interface XcmErrorV2_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface XcmErrorV2_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface XcmErrorV2_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface XcmErrorV2_Wildcard {
    __kind: 'Wildcard'
}

export interface XcmErrorV2_TooMuchWeightRequired {
    __kind: 'TooMuchWeightRequired'
}

export interface XcmErrorV2_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface XcmErrorV2_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export interface XcmErrorV2_Barrier {
    __kind: 'Barrier'
}

export interface XcmErrorV2_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface XcmErrorV2_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface XcmErrorV2_TooExpensive {
    __kind: 'TooExpensive'
}

export interface XcmErrorV2_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface XcmErrorV2_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface XcmErrorV2_RecursionLimitReached {
    __kind: 'RecursionLimitReached'
}

export interface XcmErrorV2_Transport {
    __kind: 'Transport'
}

export interface XcmErrorV2_Unroutable {
    __kind: 'Unroutable'
}

export interface XcmErrorV2_UnknownWeightRequired {
    __kind: 'UnknownWeightRequired'
}

export interface XcmErrorV2_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface XcmErrorV2_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface XcmErrorV2_InvalidLocation {
    __kind: 'InvalidLocation'
}

export type WildFungibilityV1 = WildFungibilityV1_Fungible | WildFungibilityV1_NonFungible

export interface WildFungibilityV1_Fungible {
    __kind: 'Fungible'
}

export interface WildFungibilityV1_NonFungible {
    __kind: 'NonFungible'
}
