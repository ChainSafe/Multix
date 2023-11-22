import {sts, Result, Option, Bytes, BitSequence} from './support'

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: sts.number(),
        index: sts.number(),
    }
})

export interface Timepoint {
    height: number
    index: number
}

export const AccountId32 = sts.bytes()

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Auctions: AuctionsCall,
        Babe: BabeCall,
        Balances: BalancesCall,
        Beefy: BeefyCall,
        Bounties: BountiesCall,
        ChildBounties: ChildBountiesCall,
        Claims: ClaimsCall,
        Configuration: ConfigurationCall,
        ConvictionVoting: ConvictionVotingCall,
        Crowdloan: CrowdloanCall,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseCall,
        FastUnstake: FastUnstakeCall,
        FellowshipCollective: FellowshipCollectiveCall,
        FellowshipReferenda: FellowshipReferendaCall,
        Grandpa: GrandpaCall,
        Hrmp: HrmpCall,
        Identity: IdentityCall,
        ImOnline: ImOnlineCall,
        Indices: IndicesCall,
        Initializer: InitializerCall,
        MessageQueue: MessageQueueCall,
        Multisig: MultisigCall,
        Nis: NisCall,
        NisCounterpartBalances: NisCounterpartBalancesCall,
        NominationPools: NominationPoolsCall,
        ParaInclusion: ParaInclusionCall,
        ParaInherent: ParaInherentCall,
        Paras: ParasCall,
        ParasDisputes: ParasDisputesCall,
        ParasShared: ParasSharedCall,
        ParasSlashing: ParasSlashingCall,
        Preimage: PreimageCall,
        Proxy: ProxyCall,
        Recovery: RecoveryCall,
        Referenda: ReferendaCall,
        Registrar: RegistrarCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Slots: SlotsCall,
        Society: SocietyCall,
        Staking: StakingCall,
        StateTrieMigration: StateTrieMigrationCall,
        System: SystemCall,
        Timestamp: TimestampCall,
        Treasury: TreasuryCall,
        Utility: UtilityCall,
        Vesting: VestingCall,
        VoterList: VoterListCall,
        Whitelist: WhitelistCall,
        XcmPallet: XcmPalletCall,
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const XcmPalletCall: sts.Type<XcmPalletCall> = sts.closedEnum(() => {
    return  {
        execute: sts.enumStruct({
            message: Type_447,
            maxWeight: Weight,
        }),
        force_default_xcm_version: sts.enumStruct({
            maybeXcmVersion: sts.option(() => sts.number()),
        }),
        force_subscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_suspension: sts.enumStruct({
            suspended: sts.boolean(),
        }),
        force_unsubscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_xcm_version: sts.enumStruct({
            location: V3MultiLocation,
            version: sts.number(),
        }),
        limited_reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        limited_teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V3WeightLimit,
        }),
        reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
        send: sts.enumStruct({
            dest: VersionedMultiLocation,
            message: VersionedXcm,
        }),
        teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
    }
})

export const VersionedXcm: sts.Type<VersionedXcm> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2Instruction),
        V3: sts.array(() => V3Instruction),
    }
})

export const V3Instruction: sts.Type<V3Instruction> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V3MultiLocation,
        BurnAsset: sts.array(() => V3MultiAsset),
        BuyExecution: sts.enumStruct({
            fees: V3MultiAsset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            ticket: V3MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            beneficiary: V3MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        DescendOrigin: V3Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V3MultiAssetFilter,
            want: sts.array(() => V3MultiAsset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V3MultiAsset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V3MultiLocation),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V3NetworkId,
            destination: V3Junctions,
            xcm: sts.array(() => V3Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V3MultiAssetFilter,
            reserve: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            unlocker: V3MultiLocation,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V3MultiAsset,
            owner: V3MultiLocation,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V3QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
            maxWeight: Weight,
            querier: sts.option(() => V3MultiLocation),
        }),
        ReceiveTeleportedAsset: sts.array(() => V3MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: V3QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V3QueryResponseInfo,
            assets: V3MultiAssetFilter,
        }),
        ReportTransactStatus: V3QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V3MultiAsset,
            locker: V3MultiLocation,
        }),
        ReserveAssetDeposited: sts.array(() => V3MultiAsset),
        SetAppendix: sts.array(() => V3Instruction),
        SetErrorHandler: sts.array(() => V3Instruction),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            beneficiary: V3MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V3Junction,
        UnlockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            target: V3MultiLocation,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V3MultiLocation),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V3MultiAsset),
    }
})

export const V3Junction: sts.Type<V3Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.enumStruct({
            length: sts.number(),
            data: sts.bytes(),
        }),
        GlobalConsensus: V3NetworkId,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V3BodyId,
            part: V3BodyPart,
        }),
    }
})

export const V3BodyPart: sts.Type<V3BodyPart> = sts.closedEnum(() => {
    return  {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export type V3BodyPart = V3BodyPart_AtLeastProportion | V3BodyPart_Fraction | V3BodyPart_Members | V3BodyPart_MoreThanProportion | V3BodyPart_Voice

export interface V3BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V3BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V3BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Voice {
    __kind: 'Voice'
}

export const V3BodyId: sts.Type<V3BodyId> = sts.closedEnum(() => {
    return  {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Moniker: sts.bytes(),
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export type V3BodyId = V3BodyId_Administration | V3BodyId_Defense | V3BodyId_Executive | V3BodyId_Index | V3BodyId_Judicial | V3BodyId_Legislative | V3BodyId_Moniker | V3BodyId_Technical | V3BodyId_Treasury | V3BodyId_Unit

export interface V3BodyId_Administration {
    __kind: 'Administration'
}

export interface V3BodyId_Defense {
    __kind: 'Defense'
}

export interface V3BodyId_Executive {
    __kind: 'Executive'
}

export interface V3BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V3BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V3BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V3BodyId_Moniker {
    __kind: 'Moniker'
    value: Bytes
}

export interface V3BodyId_Technical {
    __kind: 'Technical'
}

export interface V3BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V3BodyId_Unit {
    __kind: 'Unit'
}

export type V3Junction = V3Junction_AccountId32 | V3Junction_AccountIndex64 | V3Junction_AccountKey20 | V3Junction_GeneralIndex | V3Junction_GeneralKey | V3Junction_GlobalConsensus | V3Junction_OnlyChild | V3Junction_PalletInstance | V3Junction_Parachain | V3Junction_Plurality

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: (V3NetworkId | undefined)
    id: Bytes
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: (V3NetworkId | undefined)
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: (V3NetworkId | undefined)
    key: Bytes
}

export interface V3Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V3Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Bytes
}

export interface V3Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V3NetworkId
}

export interface V3Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V3Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V3Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V3Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export type V3NetworkId = V3NetworkId_BitcoinCash | V3NetworkId_BitcoinCore | V3NetworkId_ByFork | V3NetworkId_ByGenesis | V3NetworkId_Ethereum | V3NetworkId_Kusama | V3NetworkId_Polkadot | V3NetworkId_Rococo | V3NetworkId_Westend | V3NetworkId_Wococo

export interface V3NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface V3NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V3NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Bytes
}

export interface V3NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Bytes
}

export interface V3NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V3NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V3NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V3NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V3NetworkId_Westend {
    __kind: 'Westend'
}

export interface V3NetworkId_Wococo {
    __kind: 'Wococo'
}

export const DoubleEncoded: sts.Type<DoubleEncoded> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export interface DoubleEncoded {
    encoded: Bytes
}

export const V2OriginKind: sts.Type<V2OriginKind> = sts.closedEnum(() => {
    return  {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
    }
})

export type V2OriginKind = V2OriginKind_Native | V2OriginKind_SovereignAccount | V2OriginKind_Superuser | V2OriginKind_Xcm

export interface V2OriginKind_Native {
    __kind: 'Native'
}

export interface V2OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V2OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V2OriginKind_Xcm {
    __kind: 'Xcm'
}

export const V3Response: sts.Type<V3Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V3MultiAsset),
        DispatchResult: V3MaybeErrorCode,
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        Null: sts.unit(),
        PalletsInfo: sts.array(() => V3PalletInfo),
        Version: sts.number(),
    }
})

export const V3PalletInfo: sts.Type<V3PalletInfo> = sts.struct(() => {
    return  {
        index: sts.number(),
        name: sts.bytes(),
        moduleName: sts.bytes(),
        major: sts.number(),
        minor: sts.number(),
        patch: sts.number(),
    }
})

export interface V3PalletInfo {
    index: number
    name: Bytes
    moduleName: Bytes
    major: number
    minor: number
    patch: number
}

export type V3Response = V3Response_Assets | V3Response_DispatchResult | V3Response_ExecutionResult | V3Response_Null | V3Response_PalletsInfo | V3Response_Version

export interface V3Response_Assets {
    __kind: 'Assets'
    value: V3MultiAsset[]
}

export interface V3Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export interface V3Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V3Error] | undefined)
}

export interface V3Response_Null {
    __kind: 'Null'
}

export interface V3Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V3PalletInfo[]
}

export interface V3Response_Version {
    __kind: 'Version'
    value: number
}

export type V3Error = V3Error_AssetNotFound | V3Error_BadOrigin | V3Error_Barrier | V3Error_DestinationUnsupported | V3Error_ExceedsMaxMessageSize | V3Error_ExceedsStackLimit | V3Error_ExpectationFalse | V3Error_ExportError | V3Error_FailedToDecode | V3Error_FailedToTransactAsset | V3Error_FeesNotMet | V3Error_HoldingWouldOverflow | V3Error_InvalidLocation | V3Error_LocationCannotHold | V3Error_LocationFull | V3Error_LocationNotInvertible | V3Error_LockError | V3Error_MaxWeightInvalid | V3Error_NameMismatch | V3Error_NoDeal | V3Error_NoPermission | V3Error_NotDepositable | V3Error_NotHoldingFees | V3Error_NotWithdrawable | V3Error_Overflow | V3Error_PalletNotFound | V3Error_ReanchorFailed | V3Error_TooExpensive | V3Error_Transport | V3Error_Trap | V3Error_Unanchored | V3Error_UnhandledXcmVersion | V3Error_Unimplemented | V3Error_UnknownClaim | V3Error_Unroutable | V3Error_UntrustedReserveLocation | V3Error_UntrustedTeleportLocation | V3Error_VersionIncompatible | V3Error_WeightLimitReached | V3Error_WeightNotComputable

export interface V3Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V3Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V3Error_Barrier {
    __kind: 'Barrier'
}

export interface V3Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V3Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V3Error_ExceedsStackLimit {
    __kind: 'ExceedsStackLimit'
}

export interface V3Error_ExpectationFalse {
    __kind: 'ExpectationFalse'
}

export interface V3Error_ExportError {
    __kind: 'ExportError'
}

export interface V3Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V3Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V3Error_FeesNotMet {
    __kind: 'FeesNotMet'
}

export interface V3Error_HoldingWouldOverflow {
    __kind: 'HoldingWouldOverflow'
}

export interface V3Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V3Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V3Error_LocationFull {
    __kind: 'LocationFull'
}

export interface V3Error_LocationNotInvertible {
    __kind: 'LocationNotInvertible'
}

export interface V3Error_LockError {
    __kind: 'LockError'
}

export interface V3Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V3Error_NameMismatch {
    __kind: 'NameMismatch'
}

export interface V3Error_NoDeal {
    __kind: 'NoDeal'
}

export interface V3Error_NoPermission {
    __kind: 'NoPermission'
}

export interface V3Error_NotDepositable {
    __kind: 'NotDepositable'
}

export interface V3Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V3Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V3Error_Overflow {
    __kind: 'Overflow'
}

export interface V3Error_PalletNotFound {
    __kind: 'PalletNotFound'
}

export interface V3Error_ReanchorFailed {
    __kind: 'ReanchorFailed'
}

export interface V3Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V3Error_Transport {
    __kind: 'Transport'
}

export interface V3Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Error_Unanchored {
    __kind: 'Unanchored'
}

export interface V3Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V3Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V3Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V3Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V3Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V3Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V3Error_VersionIncompatible {
    __kind: 'VersionIncompatible'
}

export interface V3Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: Weight
}

export interface V3Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V3MaybeErrorCode = V3MaybeErrorCode_Error | V3MaybeErrorCode_Success | V3MaybeErrorCode_TruncatedError

export interface V3MaybeErrorCode_Error {
    __kind: 'Error'
    value: Bytes
}

export interface V3MaybeErrorCode_Success {
    __kind: 'Success'
}

export interface V3MaybeErrorCode_TruncatedError {
    __kind: 'TruncatedError'
    value: Bytes
}

export interface V3MultiAsset {
    id: V3AssetId
    fun: V3Fungibility
}

export type V3Fungibility = V3Fungibility_Fungible | V3Fungibility_NonFungible

export interface V3Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V3Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V3AssetInstance
}

export type V3AssetInstance = V3AssetInstance_Array16 | V3AssetInstance_Array32 | V3AssetInstance_Array4 | V3AssetInstance_Array8 | V3AssetInstance_Index | V3AssetInstance_Undefined

export interface V3AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V3AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V3AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V3AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V3AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V3AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V3AssetId = V3AssetId_Abstract | V3AssetId_Concrete

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
}

export type V3Junctions = V3Junctions_Here | V3Junctions_X1 | V3Junctions_X2 | V3Junctions_X3 | V3Junctions_X4 | V3Junctions_X5 | V3Junctions_X6 | V3Junctions_X7 | V3Junctions_X8

export interface V3Junctions_Here {
    __kind: 'Here'
}

export interface V3Junctions_X1 {
    __kind: 'X1'
    value: V3Junction
}

export interface V3Junctions_X2 {
    __kind: 'X2'
    value: [V3Junction, V3Junction]
}

export interface V3Junctions_X3 {
    __kind: 'X3'
    value: [V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X4 {
    __kind: 'X4'
    value: [V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X5 {
    __kind: 'X5'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X6 {
    __kind: 'X6'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X7 {
    __kind: 'X7'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X8 {
    __kind: 'X8'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export const V3QueryResponseInfo: sts.Type<V3QueryResponseInfo> = sts.struct(() => {
    return  {
        destination: V3MultiLocation,
        queryId: sts.bigint(),
        maxWeight: Weight,
    }
})

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
    queryId: bigint
    maxWeight: Weight
}

export const V3NetworkId: sts.Type<V3NetworkId> = sts.closedEnum(() => {
    return  {
        BitcoinCash: sts.unit(),
        BitcoinCore: sts.unit(),
        ByFork: sts.enumStruct({
            blockNumber: sts.bigint(),
            blockHash: sts.bytes(),
        }),
        ByGenesis: sts.bytes(),
        Ethereum: sts.enumStruct({
            chainId: sts.bigint(),
        }),
        Kusama: sts.unit(),
        Polkadot: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export const V3MaybeErrorCode: sts.Type<V3MaybeErrorCode> = sts.closedEnum(() => {
    return  {
        Error: sts.bytes(),
        Success: sts.unit(),
        TruncatedError: sts.bytes(),
    }
})

export const V3Error: sts.Type<V3Error> = sts.closedEnum(() => {
    return  {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        ExceedsStackLimit: sts.unit(),
        ExpectationFalse: sts.unit(),
        ExportError: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        FeesNotMet: sts.unit(),
        HoldingWouldOverflow: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        LocationFull: sts.unit(),
        LocationNotInvertible: sts.unit(),
        LockError: sts.unit(),
        MaxWeightInvalid: sts.unit(),
        NameMismatch: sts.unit(),
        NoDeal: sts.unit(),
        NoPermission: sts.unit(),
        NotDepositable: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        PalletNotFound: sts.unit(),
        ReanchorFailed: sts.unit(),
        TooExpensive: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        Unanchored: sts.unit(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        VersionIncompatible: sts.unit(),
        WeightLimitReached: Weight,
        WeightNotComputable: sts.unit(),
    }
})

export const V3Junctions: sts.Type<V3Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V3Junction,
        X2: sts.tuple(() => [V3Junction, V3Junction]),
        X3: sts.tuple(() => [V3Junction, V3Junction, V3Junction]),
        X4: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction]),
        X5: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X6: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X7: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X8: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
    }
})

export const V3MultiAssetFilter: sts.Type<V3MultiAssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V3MultiAsset),
        Wild: V3WildMultiAsset,
    }
})

export const V3WildMultiAsset: sts.Type<V3WildMultiAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllCounted: sts.number(),
        AllOf: sts.enumStruct({
            id: V3AssetId,
            fun: V3WildFungibility,
        }),
        AllOfCounted: sts.enumStruct({
            id: V3AssetId,
            fun: V3WildFungibility,
            count: sts.number(),
        }),
    }
})

export const V3WildFungibility: sts.Type<V3WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export const V3AssetId: sts.Type<V3AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V3MultiLocation,
    }
})

export type V3WildMultiAsset = V3WildMultiAsset_All | V3WildMultiAsset_AllCounted | V3WildMultiAsset_AllOf | V3WildMultiAsset_AllOfCounted

export interface V3WildMultiAsset_All {
    __kind: 'All'
}

export interface V3WildMultiAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V3WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V3AssetId
    fun: V3WildFungibility
}

export interface V3WildMultiAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V3AssetId
    fun: V3WildFungibility
    count: number
}

export type V3MultiAssetFilter = V3MultiAssetFilter_Definite | V3MultiAssetFilter_Wild

export interface V3MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V3MultiAsset[]
}

export interface V3MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V3WildMultiAsset
}

export const V3MultiAsset: sts.Type<V3MultiAsset> = sts.struct(() => {
    return  {
        id: V3AssetId,
        fun: V3Fungibility,
    }
})

export const V3Fungibility: sts.Type<V3Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V3AssetInstance,
    }
})

export const V3AssetInstance: sts.Type<V3AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export type V3Instruction = V3Instruction_AliasOrigin | V3Instruction_BurnAsset | V3Instruction_BuyExecution | V3Instruction_ClaimAsset | V3Instruction_ClearError | V3Instruction_ClearOrigin | V3Instruction_ClearTopic | V3Instruction_ClearTransactStatus | V3Instruction_DepositAsset | V3Instruction_DepositReserveAsset | V3Instruction_DescendOrigin | V3Instruction_ExchangeAsset | V3Instruction_ExpectAsset | V3Instruction_ExpectError | V3Instruction_ExpectOrigin | V3Instruction_ExpectPallet | V3Instruction_ExpectTransactStatus | V3Instruction_ExportMessage | V3Instruction_HrmpChannelAccepted | V3Instruction_HrmpChannelClosing | V3Instruction_HrmpNewChannelOpenRequest | V3Instruction_InitiateReserveWithdraw | V3Instruction_InitiateTeleport | V3Instruction_LockAsset | V3Instruction_NoteUnlockable | V3Instruction_QueryPallet | V3Instruction_QueryResponse | V3Instruction_ReceiveTeleportedAsset | V3Instruction_RefundSurplus | V3Instruction_ReportError | V3Instruction_ReportHolding | V3Instruction_ReportTransactStatus | V3Instruction_RequestUnlock | V3Instruction_ReserveAssetDeposited | V3Instruction_SetAppendix | V3Instruction_SetErrorHandler | V3Instruction_SetFeesMode | V3Instruction_SetTopic | V3Instruction_SubscribeVersion | V3Instruction_Transact | V3Instruction_TransferAsset | V3Instruction_TransferReserveAsset | V3Instruction_Trap | V3Instruction_UniversalOrigin | V3Instruction_UnlockAsset | V3Instruction_UnpaidExecution | V3Instruction_UnsubscribeVersion | V3Instruction_WithdrawAsset

export interface V3Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface V3Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface V3Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface V3Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V3Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V3Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V3Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V3Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface V3Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface V3Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface V3Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface V3Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface V3Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface V3Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V3Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface V3Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V3Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V3Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V3Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface V3Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface V3Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface V3Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface V3Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V3Instruction_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface V3Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface V3Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface V3Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface V3Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface V3Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V3Instruction[]
}

export interface V3Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V3Instruction[]
}

export interface V3Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V3Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface V3Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V3Instruction_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V3Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface V3Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface V3Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface V3Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface V3Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V3Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export type V3WeightLimit = V3WeightLimit_Limited | V3WeightLimit_Unlimited

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export const V2Instruction: sts.Type<V2Instruction> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V2MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            ticket: V2MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V2MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V2Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V2MultiAssetFilter,
            receive: sts.array(() => V2MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V2MultiAssetFilter,
            reserve: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V2MultiAssetFilter,
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            assets: V2MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V2MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V2MultiAsset),
        SetAppendix: sts.array(() => V2Instruction),
        SetErrorHandler: sts.array(() => V2Instruction),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            beneficiary: V2MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V2MultiAsset),
    }
})

export const V2Response: sts.Type<V2Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V2MultiAsset),
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V2Error])),
        Null: sts.unit(),
        Version: sts.number(),
    }
})

export const V2Error: sts.Type<V2Error> = sts.closedEnum(() => {
    return  {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        MaxWeightInvalid: sts.unit(),
        MultiLocationFull: sts.unit(),
        MultiLocationNotInvertible: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        TooExpensive: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        WeightLimitReached: sts.bigint(),
        WeightNotComputable: sts.unit(),
    }
})

export type V2Error = V2Error_AssetNotFound | V2Error_BadOrigin | V2Error_Barrier | V2Error_DestinationUnsupported | V2Error_ExceedsMaxMessageSize | V2Error_FailedToDecode | V2Error_FailedToTransactAsset | V2Error_InvalidLocation | V2Error_LocationCannotHold | V2Error_MaxWeightInvalid | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_NotHoldingFees | V2Error_NotWithdrawable | V2Error_Overflow | V2Error_TooExpensive | V2Error_Transport | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_Unimplemented | V2Error_UnknownClaim | V2Error_Unroutable | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_WeightLimitReached | V2Error_WeightNotComputable

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V2Response = V2Response_Assets | V2Response_ExecutionResult | V2Response_Null | V2Response_Version

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V2MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V2Error] | undefined)
}

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export interface V2MultiAsset {
    id: V2AssetId
    fun: V2Fungibility
}

export type V2Fungibility = V2Fungibility_Fungible | V2Fungibility_NonFungible

export interface V2Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V2Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V2AssetInstance
}

export type V2AssetInstance = V2AssetInstance_Array16 | V2AssetInstance_Array32 | V2AssetInstance_Array4 | V2AssetInstance_Array8 | V2AssetInstance_Blob | V2AssetInstance_Index | V2AssetInstance_Undefined

export interface V2AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V2AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V2AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V2AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V2AssetInstance_Blob {
    __kind: 'Blob'
    value: Bytes
}

export interface V2AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V2AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V2AssetId = V2AssetId_Abstract | V2AssetId_Concrete

export interface V2AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V2AssetId_Concrete {
    __kind: 'Concrete'
    value: V2MultiLocation
}

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
}

export type V2Junctions = V2Junctions_Here | V2Junctions_X1 | V2Junctions_X2 | V2Junctions_X3 | V2Junctions_X4 | V2Junctions_X5 | V2Junctions_X6 | V2Junctions_X7 | V2Junctions_X8

export interface V2Junctions_Here {
    __kind: 'Here'
}

export interface V2Junctions_X1 {
    __kind: 'X1'
    value: V2Junction
}

export interface V2Junctions_X2 {
    __kind: 'X2'
    value: [V2Junction, V2Junction]
}

export interface V2Junctions_X3 {
    __kind: 'X3'
    value: [V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X4 {
    __kind: 'X4'
    value: [V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X5 {
    __kind: 'X5'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X6 {
    __kind: 'X6'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X7 {
    __kind: 'X7'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X8 {
    __kind: 'X8'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export type V2Junction = V2Junction_AccountId32 | V2Junction_AccountIndex64 | V2Junction_AccountKey20 | V2Junction_GeneralIndex | V2Junction_GeneralKey | V2Junction_OnlyChild | V2Junction_PalletInstance | V2Junction_Parachain | V2Junction_Plurality

export interface V2Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V2NetworkId
    id: Bytes
}

export interface V2Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V2NetworkId
    index: bigint
}

export interface V2Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V2NetworkId
    key: Bytes
}

export interface V2Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V2Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: WeakBoundedVec
}

export interface V2Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V2Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V2Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V2Junction_Plurality {
    __kind: 'Plurality'
    id: V2BodyId
    part: V2BodyPart
}

export type V2BodyPart = V2BodyPart_AtLeastProportion | V2BodyPart_Fraction | V2BodyPart_Members | V2BodyPart_MoreThanProportion | V2BodyPart_Voice

export interface V2BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V2BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V2BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Voice {
    __kind: 'Voice'
}

export type V2BodyId = V2BodyId_Administration | V2BodyId_Defense | V2BodyId_Executive | V2BodyId_Index | V2BodyId_Judicial | V2BodyId_Legislative | V2BodyId_Named | V2BodyId_Technical | V2BodyId_Treasury | V2BodyId_Unit

export interface V2BodyId_Administration {
    __kind: 'Administration'
}

export interface V2BodyId_Defense {
    __kind: 'Defense'
}

export interface V2BodyId_Executive {
    __kind: 'Executive'
}

export interface V2BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V2BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V2BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V2BodyId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2BodyId_Technical {
    __kind: 'Technical'
}

export interface V2BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V2BodyId_Unit {
    __kind: 'Unit'
}

export type WeakBoundedVec = Bytes

export type V2NetworkId = V2NetworkId_Any | V2NetworkId_Kusama | V2NetworkId_Named | V2NetworkId_Polkadot

export interface V2NetworkId_Any {
    __kind: 'Any'
}

export interface V2NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V2NetworkId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export const V2Junctions: sts.Type<V2Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V2Junction,
        X2: sts.tuple(() => [V2Junction, V2Junction]),
        X3: sts.tuple(() => [V2Junction, V2Junction, V2Junction]),
        X4: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction]),
        X5: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X6: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X7: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X8: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
    }
})

export const V2Junction: sts.Type<V2Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: V2NetworkId,
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: V2NetworkId,
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: V2NetworkId,
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: WeakBoundedVec,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V2BodyId,
            part: V2BodyPart,
        }),
    }
})

export const V2BodyPart: sts.Type<V2BodyPart> = sts.closedEnum(() => {
    return  {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export const V2BodyId: sts.Type<V2BodyId> = sts.closedEnum(() => {
    return  {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Named: WeakBoundedVec,
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export const WeakBoundedVec = sts.bytes()

export const V2NetworkId: sts.Type<V2NetworkId> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Kusama: sts.unit(),
        Named: WeakBoundedVec,
        Polkadot: sts.unit(),
    }
})

export const V2MultiAssetFilter: sts.Type<V2MultiAssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V2MultiAsset),
        Wild: V2WildMultiAsset,
    }
})

export const V2WildMultiAsset: sts.Type<V2WildMultiAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllOf: sts.enumStruct({
            id: V2AssetId,
            fun: V2WildFungibility,
        }),
    }
})

export const V2WildFungibility: sts.Type<V2WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export const V2AssetId: sts.Type<V2AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V2MultiLocation,
    }
})

export type V2WildMultiAsset = V2WildMultiAsset_All | V2WildMultiAsset_AllOf

export interface V2WildMultiAsset_All {
    __kind: 'All'
}

export interface V2WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V2AssetId
    fun: V2WildFungibility
}

export type V2MultiAssetFilter = V2MultiAssetFilter_Definite | V2MultiAssetFilter_Wild

export interface V2MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V2MultiAsset[]
}

export interface V2MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V2WildMultiAsset
}

export const V2MultiLocation: sts.Type<V2MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V2Junctions,
    }
})

export const V2WeightLimit: sts.Type<V2WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: sts.bigint(),
        Unlimited: sts.unit(),
    }
})

export type V2WeightLimit = V2WeightLimit_Limited | V2WeightLimit_Unlimited

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export const V2MultiAsset: sts.Type<V2MultiAsset> = sts.struct(() => {
    return  {
        id: V2AssetId,
        fun: V2Fungibility,
    }
})

export const V2Fungibility: sts.Type<V2Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V2AssetInstance,
    }
})

export const V2AssetInstance: sts.Type<V2AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Blob: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export type V2Instruction = V2Instruction_BuyExecution | V2Instruction_ClaimAsset | V2Instruction_ClearError | V2Instruction_ClearOrigin | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_DescendOrigin | V2Instruction_ExchangeAsset | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_QueryResponse | V2Instruction_ReceiveTeleportedAsset | V2Instruction_RefundSurplus | V2Instruction_ReportError | V2Instruction_ReserveAssetDeposited | V2Instruction_SetAppendix | V2Instruction_SetErrorHandler | V2Instruction_SubscribeVersion | V2Instruction_Transact | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Trap | V2Instruction_UnsubscribeVersion | V2Instruction_WithdrawAsset

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface V2Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V2Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export const V3WeightLimit: sts.Type<V3WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: Weight,
        Unlimited: sts.unit(),
    }
})

export const VersionedMultiAssets: sts.Type<VersionedMultiAssets> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => V2MultiAsset),
        V3: sts.array(() => V3MultiAsset),
    }
})

export type VersionedMultiAssets = VersionedMultiAssets_V2 | VersionedMultiAssets_V3

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedMultiAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export const V3MultiLocation: sts.Type<V3MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V3Junctions,
    }
})

export const VersionedMultiLocation: sts.Type<VersionedMultiLocation> = sts.closedEnum(() => {
    return  {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
    }
})

export type VersionedMultiLocation = VersionedMultiLocation_V2 | VersionedMultiLocation_V3

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedMultiLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export const Type_447: sts.Type<Type_447> = sts.closedEnum(() => {
    return  {
        V2: sts.array(() => Type_450),
        V3: sts.array(() => Type_454),
    }
})

export const Type_454: sts.Type<Type_454> = sts.closedEnum(() => {
    return  {
        AliasOrigin: V3MultiLocation,
        BurnAsset: sts.array(() => V3MultiAsset),
        BuyExecution: sts.enumStruct({
            fees: V3MultiAsset,
            weightLimit: V3WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            ticket: V3MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        ClearTopic: sts.unit(),
        ClearTransactStatus: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            beneficiary: V3MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        DescendOrigin: V3Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V3MultiAssetFilter,
            want: sts.array(() => V3MultiAsset),
            maximal: sts.boolean(),
        }),
        ExpectAsset: sts.array(() => V3MultiAsset),
        ExpectError: sts.option(() => sts.tuple(() => [sts.number(), V3Error])),
        ExpectOrigin: sts.option(() => V3MultiLocation),
        ExpectPallet: sts.enumStruct({
            index: sts.number(),
            name: sts.bytes(),
            moduleName: sts.bytes(),
            crateMajor: sts.number(),
            minCrateMinor: sts.number(),
        }),
        ExpectTransactStatus: V3MaybeErrorCode,
        ExportMessage: sts.enumStruct({
            network: V3NetworkId,
            destination: V3Junctions,
            xcm: sts.array(() => V3Instruction),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V3MultiAssetFilter,
            reserve: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V3MultiAssetFilter,
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        LockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            unlocker: V3MultiLocation,
        }),
        NoteUnlockable: sts.enumStruct({
            asset: V3MultiAsset,
            owner: V3MultiLocation,
        }),
        QueryPallet: sts.enumStruct({
            moduleName: sts.bytes(),
            responseInfo: V3QueryResponseInfo,
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V3Response,
            maxWeight: Weight,
            querier: sts.option(() => V3MultiLocation),
        }),
        ReceiveTeleportedAsset: sts.array(() => V3MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: V3QueryResponseInfo,
        ReportHolding: sts.enumStruct({
            responseInfo: V3QueryResponseInfo,
            assets: V3MultiAssetFilter,
        }),
        ReportTransactStatus: V3QueryResponseInfo,
        RequestUnlock: sts.enumStruct({
            asset: V3MultiAsset,
            locker: V3MultiLocation,
        }),
        ReserveAssetDeposited: sts.array(() => V3MultiAsset),
        SetAppendix: sts.array(() => Type_454),
        SetErrorHandler: sts.array(() => Type_454),
        SetFeesMode: sts.enumStruct({
            jitWithdraw: sts.boolean(),
        }),
        SetTopic: sts.bytes(),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: Weight,
        }),
        Transact: sts.enumStruct({
            originKind: V2OriginKind,
            requireWeightAtMost: Weight,
            call: Type_451,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            beneficiary: V3MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V3MultiAsset),
            dest: V3MultiLocation,
            xcm: sts.array(() => V3Instruction),
        }),
        Trap: sts.bigint(),
        UniversalOrigin: V3Junction,
        UnlockAsset: sts.enumStruct({
            asset: V3MultiAsset,
            target: V3MultiLocation,
        }),
        UnpaidExecution: sts.enumStruct({
            weightLimit: V3WeightLimit,
            checkOrigin: sts.option(() => V3MultiLocation),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V3MultiAsset),
    }
})

export const Type_451: sts.Type<Type_451> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export interface Type_451 {
    encoded: Bytes
}

export type Type_454 = Type_454_AliasOrigin | Type_454_BurnAsset | Type_454_BuyExecution | Type_454_ClaimAsset | Type_454_ClearError | Type_454_ClearOrigin | Type_454_ClearTopic | Type_454_ClearTransactStatus | Type_454_DepositAsset | Type_454_DepositReserveAsset | Type_454_DescendOrigin | Type_454_ExchangeAsset | Type_454_ExpectAsset | Type_454_ExpectError | Type_454_ExpectOrigin | Type_454_ExpectPallet | Type_454_ExpectTransactStatus | Type_454_ExportMessage | Type_454_HrmpChannelAccepted | Type_454_HrmpChannelClosing | Type_454_HrmpNewChannelOpenRequest | Type_454_InitiateReserveWithdraw | Type_454_InitiateTeleport | Type_454_LockAsset | Type_454_NoteUnlockable | Type_454_QueryPallet | Type_454_QueryResponse | Type_454_ReceiveTeleportedAsset | Type_454_RefundSurplus | Type_454_ReportError | Type_454_ReportHolding | Type_454_ReportTransactStatus | Type_454_RequestUnlock | Type_454_ReserveAssetDeposited | Type_454_SetAppendix | Type_454_SetErrorHandler | Type_454_SetFeesMode | Type_454_SetTopic | Type_454_SubscribeVersion | Type_454_Transact | Type_454_TransferAsset | Type_454_TransferReserveAsset | Type_454_Trap | Type_454_UniversalOrigin | Type_454_UnlockAsset | Type_454_UnpaidExecution | Type_454_UnsubscribeVersion | Type_454_WithdrawAsset

export interface Type_454_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_454_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_454_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_454_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_454_ClearError {
    __kind: 'ClearError'
}

export interface Type_454_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_454_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_454_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_454_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_454_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_454_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_454_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_454_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_454_ExpectError {
    __kind: 'ExpectError'
    value?: ([number, V3Error] | undefined)
}

export interface Type_454_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value?: (V3MultiLocation | undefined)
}

export interface Type_454_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Bytes
    moduleName: Bytes
    crateMajor: number
    minCrateMinor: number
}

export interface Type_454_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_454_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_454_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_454_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_454_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_454_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_454_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_454_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_454_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_454_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Bytes
    responseInfo: V3QueryResponseInfo
}

export interface Type_454_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier?: (V3MultiLocation | undefined)
}

export interface Type_454_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_454_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_454_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_454_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_454_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_454_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_454_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_454_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_454[]
}

export interface Type_454_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_454[]
}

export interface Type_454_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_454_SetTopic {
    __kind: 'SetTopic'
    value: Bytes
}

export interface Type_454_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_454_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: Type_451
}

export interface Type_454_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_454_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_454_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_454_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_454_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_454_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin?: (V3MultiLocation | undefined)
}

export interface Type_454_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_454_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export const Type_450: sts.Type<Type_450> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V2MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            ticket: V2MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V2MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V2MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V2Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V2MultiAssetFilter,
            receive: sts.array(() => V2MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V2MultiAssetFilter,
            reserve: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V2MultiAssetFilter,
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            assets: V2MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V2MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V2MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V2MultiAsset),
        SetAppendix: sts.array(() => Type_450),
        SetErrorHandler: sts.array(() => Type_450),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V2OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_451,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            beneficiary: V2MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V2MultiAsset),
            dest: V2MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V2MultiAsset),
    }
})

export type Type_450 = Type_450_BuyExecution | Type_450_ClaimAsset | Type_450_ClearError | Type_450_ClearOrigin | Type_450_DepositAsset | Type_450_DepositReserveAsset | Type_450_DescendOrigin | Type_450_ExchangeAsset | Type_450_HrmpChannelAccepted | Type_450_HrmpChannelClosing | Type_450_HrmpNewChannelOpenRequest | Type_450_InitiateReserveWithdraw | Type_450_InitiateTeleport | Type_450_QueryHolding | Type_450_QueryResponse | Type_450_ReceiveTeleportedAsset | Type_450_RefundSurplus | Type_450_ReportError | Type_450_ReserveAssetDeposited | Type_450_SetAppendix | Type_450_SetErrorHandler | Type_450_SubscribeVersion | Type_450_Transact | Type_450_TransferAsset | Type_450_TransferReserveAsset | Type_450_Trap | Type_450_UnsubscribeVersion | Type_450_WithdrawAsset

export interface Type_450_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_450_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_450_ClearError {
    __kind: 'ClearError'
}

export interface Type_450_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_450_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_450_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_450_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_450_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_450_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_450_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_450_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_450_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_450_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_450_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_450_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_450_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_450_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_450_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_450_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_450_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_450[]
}

export interface Type_450_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_450[]
}

export interface Type_450_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_450_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: Type_451
}

export interface Type_450_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_450_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_450_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_450_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_450_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export type Type_447 = Type_447_V2 | Type_447_V3

export interface Type_447_V2 {
    __kind: 'V2'
    value: Type_450[]
}

export interface Type_447_V3 {
    __kind: 'V3'
    value: Type_454[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmPalletCall = XcmPalletCall_execute | XcmPalletCall_force_default_xcm_version | XcmPalletCall_force_subscribe_version_notify | XcmPalletCall_force_suspension | XcmPalletCall_force_unsubscribe_version_notify | XcmPalletCall_force_xcm_version | XcmPalletCall_limited_reserve_transfer_assets | XcmPalletCall_limited_teleport_assets | XcmPalletCall_reserve_transfer_assets | XcmPalletCall_send | XcmPalletCall_teleport_assets

/**
 * See [`Pallet::execute`].
 */
export interface XcmPalletCall_execute {
    __kind: 'execute'
    message: Type_447
    maxWeight: Weight
}

/**
 * See [`Pallet::force_default_xcm_version`].
 */
export interface XcmPalletCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: (number | undefined)
}

/**
 * See [`Pallet::force_subscribe_version_notify`].
 */
export interface XcmPalletCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_suspension`].
 */
export interface XcmPalletCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * See [`Pallet::force_unsubscribe_version_notify`].
 */
export interface XcmPalletCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_xcm_version`].
 */
export interface XcmPalletCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V3MultiLocation
    version: number
}

/**
 * See [`Pallet::limited_reserve_transfer_assets`].
 */
export interface XcmPalletCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::limited_teleport_assets`].
 */
export interface XcmPalletCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::reserve_transfer_assets`].
 */
export interface XcmPalletCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * See [`Pallet::send`].
 */
export interface XcmPalletCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * See [`Pallet::teleport_assets`].
 */
export interface XcmPalletCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const WhitelistCall: sts.Type<WhitelistCall> = sts.closedEnum(() => {
    return  {
        dispatch_whitelisted_call: sts.enumStruct({
            callHash: H256,
            callEncodedLen: sts.number(),
            callWeightWitness: Weight,
        }),
        dispatch_whitelisted_call_with_preimage: sts.enumStruct({
            call: Call,
        }),
        remove_whitelisted_call: sts.enumStruct({
            callHash: H256,
        }),
        whitelist_call: sts.enumStruct({
            callHash: H256,
        }),
    }
})

export const H256 = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type WhitelistCall = WhitelistCall_dispatch_whitelisted_call | WhitelistCall_dispatch_whitelisted_call_with_preimage | WhitelistCall_remove_whitelisted_call | WhitelistCall_whitelist_call

/**
 * See [`Pallet::dispatch_whitelisted_call`].
 */
export interface WhitelistCall_dispatch_whitelisted_call {
    __kind: 'dispatch_whitelisted_call'
    callHash: H256
    callEncodedLen: number
    callWeightWitness: Weight
}

/**
 * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
 */
export interface WhitelistCall_dispatch_whitelisted_call_with_preimage {
    __kind: 'dispatch_whitelisted_call_with_preimage'
    call: Call
}

/**
 * See [`Pallet::remove_whitelisted_call`].
 */
export interface WhitelistCall_remove_whitelisted_call {
    __kind: 'remove_whitelisted_call'
    callHash: H256
}

/**
 * See [`Pallet::whitelist_call`].
 */
export interface WhitelistCall_whitelist_call {
    __kind: 'whitelist_call'
    callHash: H256
}

export type H256 = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VoterListCall: sts.Type<VoterListCall> = sts.closedEnum(() => {
    return  {
        put_in_front_of: sts.enumStruct({
            lighter: MultiAddress,
        }),
        put_in_front_of_other: sts.enumStruct({
            heavier: MultiAddress,
            lighter: MultiAddress,
        }),
        rebag: sts.enumStruct({
            dislocated: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VoterListCall = VoterListCall_put_in_front_of | VoterListCall_put_in_front_of_other | VoterListCall_rebag

/**
 * See [`Pallet::put_in_front_of`].
 */
export interface VoterListCall_put_in_front_of {
    __kind: 'put_in_front_of'
    lighter: MultiAddress
}

/**
 * See [`Pallet::put_in_front_of_other`].
 */
export interface VoterListCall_put_in_front_of_other {
    __kind: 'put_in_front_of_other'
    heavier: MultiAddress
    lighter: MultiAddress
}

/**
 * See [`Pallet::rebag`].
 */
export interface VoterListCall_rebag {
    __kind: 'rebag'
    dislocated: MultiAddress
}

export type MultiAddress = MultiAddress_Address20 | MultiAddress_Address32 | MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Bytes
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Bytes
}

export interface MultiAddress_Id {
    __kind: 'Id'
    value: AccountId32
}

export interface MultiAddress_Index {
    __kind: 'Index'
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Bytes
}

export type AccountId32 = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const VestingCall: sts.Type<VestingCall> = sts.closedEnum(() => {
    return  {
        force_vested_transfer: sts.enumStruct({
            source: MultiAddress,
            target: MultiAddress,
            schedule: VestingInfo,
        }),
        merge_schedules: sts.enumStruct({
            schedule1Index: sts.number(),
            schedule2Index: sts.number(),
        }),
        vest: sts.unit(),
        vest_other: sts.enumStruct({
            target: MultiAddress,
        }),
        vested_transfer: sts.enumStruct({
            target: MultiAddress,
            schedule: VestingInfo,
        }),
    }
})

export const VestingInfo: sts.Type<VestingInfo> = sts.struct(() => {
    return  {
        locked: sts.bigint(),
        perBlock: sts.bigint(),
        startingBlock: sts.number(),
    }
})

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VestingCall = VestingCall_force_vested_transfer | VestingCall_merge_schedules | VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer

/**
 * See [`Pallet::force_vested_transfer`].
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: MultiAddress
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * See [`Pallet::merge_schedules`].
 */
export interface VestingCall_merge_schedules {
    __kind: 'merge_schedules'
    schedule1Index: number
    schedule2Index: number
}

/**
 * See [`Pallet::vest`].
 */
export interface VestingCall_vest {
    __kind: 'vest'
}

/**
 * See [`Pallet::vest_other`].
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: MultiAddress
}

/**
 * See [`Pallet::vested_transfer`].
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const UtilityCall: sts.Type<UtilityCall> = sts.closedEnum(() => {
    return  {
        as_derivative: sts.enumStruct({
            index: sts.number(),
            call: Call,
        }),
        batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        batch_all: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        dispatch_as: sts.enumStruct({
            asOrigin: OriginCaller,
            call: Call,
        }),
        force_batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        with_weight: sts.enumStruct({
            call: Call,
            weight: Weight,
        }),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Origins: Origin,
        ParachainsOrigin: Type_139,
        Void: Void,
        XcmPallet: Type_141,
        system: RawOrigin,
    }
})

export const RawOrigin: sts.Type<RawOrigin> = sts.closedEnum(() => {
    return  {
        None: sts.unit(),
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export type RawOrigin = RawOrigin_None | RawOrigin_Root | RawOrigin_Signed

export interface RawOrigin_None {
    __kind: 'None'
}

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: AccountId32
}

export const Type_141: sts.Type<Type_141> = sts.closedEnum(() => {
    return  {
        Response: V3MultiLocation,
        Xcm: V3MultiLocation,
    }
})

export type Type_141 = Type_141_Response | Type_141_Xcm

export interface Type_141_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export interface Type_141_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return  {
    }
})

export type Void = never

export const Type_139: sts.Type<Type_139> = sts.closedEnum(() => {
    return  {
        Parachain: Id,
    }
})

export const Id = sts.number()

export type Type_139 = Type_139_Parachain

export interface Type_139_Parachain {
    __kind: 'Parachain'
    value: Id
}

export type Id = number

export const Origin: sts.Type<Origin> = sts.closedEnum(() => {
    return  {
        AuctionAdmin: sts.unit(),
        BigSpender: sts.unit(),
        BigTipper: sts.unit(),
        Fellows: sts.unit(),
        Fellowship1Dan: sts.unit(),
        Fellowship2Dan: sts.unit(),
        Fellowship3Dan: sts.unit(),
        Fellowship4Dan: sts.unit(),
        Fellowship5Dan: sts.unit(),
        Fellowship6Dan: sts.unit(),
        Fellowship7Dan: sts.unit(),
        Fellowship8Dan: sts.unit(),
        Fellowship9Dan: sts.unit(),
        FellowshipAdmin: sts.unit(),
        FellowshipExperts: sts.unit(),
        FellowshipInitiates: sts.unit(),
        FellowshipMasters: sts.unit(),
        GeneralAdmin: sts.unit(),
        LeaseAdmin: sts.unit(),
        MediumSpender: sts.unit(),
        ReferendumCanceller: sts.unit(),
        ReferendumKiller: sts.unit(),
        SmallSpender: sts.unit(),
        SmallTipper: sts.unit(),
        StakingAdmin: sts.unit(),
        Treasurer: sts.unit(),
        WhitelistedCaller: sts.unit(),
    }
})

export type Origin = Origin_AuctionAdmin | Origin_BigSpender | Origin_BigTipper | Origin_Fellows | Origin_Fellowship1Dan | Origin_Fellowship2Dan | Origin_Fellowship3Dan | Origin_Fellowship4Dan | Origin_Fellowship5Dan | Origin_Fellowship6Dan | Origin_Fellowship7Dan | Origin_Fellowship8Dan | Origin_Fellowship9Dan | Origin_FellowshipAdmin | Origin_FellowshipExperts | Origin_FellowshipInitiates | Origin_FellowshipMasters | Origin_GeneralAdmin | Origin_LeaseAdmin | Origin_MediumSpender | Origin_ReferendumCanceller | Origin_ReferendumKiller | Origin_SmallSpender | Origin_SmallTipper | Origin_StakingAdmin | Origin_Treasurer | Origin_WhitelistedCaller

export interface Origin_AuctionAdmin {
    __kind: 'AuctionAdmin'
}

export interface Origin_BigSpender {
    __kind: 'BigSpender'
}

export interface Origin_BigTipper {
    __kind: 'BigTipper'
}

export interface Origin_Fellows {
    __kind: 'Fellows'
}

export interface Origin_Fellowship1Dan {
    __kind: 'Fellowship1Dan'
}

export interface Origin_Fellowship2Dan {
    __kind: 'Fellowship2Dan'
}

export interface Origin_Fellowship3Dan {
    __kind: 'Fellowship3Dan'
}

export interface Origin_Fellowship4Dan {
    __kind: 'Fellowship4Dan'
}

export interface Origin_Fellowship5Dan {
    __kind: 'Fellowship5Dan'
}

export interface Origin_Fellowship6Dan {
    __kind: 'Fellowship6Dan'
}

export interface Origin_Fellowship7Dan {
    __kind: 'Fellowship7Dan'
}

export interface Origin_Fellowship8Dan {
    __kind: 'Fellowship8Dan'
}

export interface Origin_Fellowship9Dan {
    __kind: 'Fellowship9Dan'
}

export interface Origin_FellowshipAdmin {
    __kind: 'FellowshipAdmin'
}

export interface Origin_FellowshipExperts {
    __kind: 'FellowshipExperts'
}

export interface Origin_FellowshipInitiates {
    __kind: 'FellowshipInitiates'
}

export interface Origin_FellowshipMasters {
    __kind: 'FellowshipMasters'
}

export interface Origin_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Origin_LeaseAdmin {
    __kind: 'LeaseAdmin'
}

export interface Origin_MediumSpender {
    __kind: 'MediumSpender'
}

export interface Origin_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Origin_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Origin_SmallSpender {
    __kind: 'SmallSpender'
}

export interface Origin_SmallTipper {
    __kind: 'SmallTipper'
}

export interface Origin_StakingAdmin {
    __kind: 'StakingAdmin'
}

export interface Origin_Treasurer {
    __kind: 'Treasurer'
}

export interface Origin_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export type OriginCaller = OriginCaller_Origins | OriginCaller_ParachainsOrigin | OriginCaller_Void | OriginCaller_XcmPallet | OriginCaller_system

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Origin
}

export interface OriginCaller_ParachainsOrigin {
    __kind: 'ParachainsOrigin'
    value: Type_139
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface OriginCaller_XcmPallet {
    __kind: 'XcmPallet'
    value: Type_141
}

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * See [`Pallet::as_derivative`].
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * See [`Pallet::batch`].
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * See [`Pallet::batch_all`].
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * See [`Pallet::dispatch_as`].
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * See [`Pallet::force_batch`].
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * See [`Pallet::with_weight`].
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TreasuryCall: sts.Type<TreasuryCall> = sts.closedEnum(() => {
    return  {
        approve_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        propose_spend: sts.enumStruct({
            value: sts.bigint(),
            beneficiary: MultiAddress,
        }),
        reject_proposal: sts.enumStruct({
            proposalId: sts.number(),
        }),
        remove_approval: sts.enumStruct({
            proposalId: sts.number(),
        }),
        spend: sts.enumStruct({
            amount: sts.bigint(),
            beneficiary: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TreasuryCall = TreasuryCall_approve_proposal | TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_remove_approval | TreasuryCall_spend

/**
 * See [`Pallet::approve_proposal`].
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * See [`Pallet::propose_spend`].
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::reject_proposal`].
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * See [`Pallet::remove_approval`].
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * See [`Pallet::spend`].
 */
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TimestampCall = TimestampCall_set

/**
 * See [`Pallet::set`].
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return  {
        kill_prefix: sts.enumStruct({
            prefix: sts.bytes(),
            subkeys: sts.number(),
        }),
        kill_storage: sts.enumStruct({
            keys: sts.array(() => sts.bytes()),
        }),
        remark: sts.enumStruct({
            remark: sts.bytes(),
        }),
        remark_with_event: sts.enumStruct({
            remark: sts.bytes(),
        }),
        set_code: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_code_without_checks: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_heap_pages: sts.enumStruct({
            pages: sts.bigint(),
        }),
        set_storage: sts.enumStruct({
            items: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SystemCall = SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

/**
 * See [`Pallet::kill_prefix`].
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Bytes
    subkeys: number
}

/**
 * See [`Pallet::kill_storage`].
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Bytes[]
}

/**
 * See [`Pallet::remark`].
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 * See [`Pallet::remark_with_event`].
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

/**
 * See [`Pallet::set_code`].
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * See [`Pallet::set_code_without_checks`].
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 * See [`Pallet::set_heap_pages`].
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * See [`Pallet::set_storage`].
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Bytes, Bytes][]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const StateTrieMigrationCall: sts.Type<StateTrieMigrationCall> = sts.closedEnum(() => {
    return  {
        continue_migrate: sts.enumStruct({
            limits: MigrationLimits,
            realSizeUpper: sts.number(),
            witnessTask: MigrationTask,
        }),
        control_auto_migration: sts.enumStruct({
            maybeConfig: sts.option(() => MigrationLimits),
        }),
        force_set_progress: sts.enumStruct({
            progressTop: Progress,
            progressChild: Progress,
        }),
        migrate_custom_child: sts.enumStruct({
            root: sts.bytes(),
            childKeys: sts.array(() => sts.bytes()),
            totalSize: sts.number(),
        }),
        migrate_custom_top: sts.enumStruct({
            keys: sts.array(() => sts.bytes()),
            witnessSize: sts.number(),
        }),
        set_signed_max_limits: sts.enumStruct({
            limits: MigrationLimits,
        }),
    }
})

export const Progress: sts.Type<Progress> = sts.closedEnum(() => {
    return  {
        Complete: sts.unit(),
        LastKey: BoundedVec,
        ToStart: sts.unit(),
    }
})

export const BoundedVec = sts.bytes()

export type Progress = Progress_Complete | Progress_LastKey | Progress_ToStart

export interface Progress_Complete {
    __kind: 'Complete'
}

export interface Progress_LastKey {
    __kind: 'LastKey'
    value: BoundedVec
}

export interface Progress_ToStart {
    __kind: 'ToStart'
}

export type BoundedVec = Bytes

export const MigrationTask: sts.Type<MigrationTask> = sts.struct(() => {
    return  {
        progressTop: Progress,
        progressChild: Progress,
        size: sts.number(),
        topItems: sts.number(),
        childItems: sts.number(),
    }
})

export interface MigrationTask {
    progressTop: Progress
    progressChild: Progress
    size: number
    topItems: number
    childItems: number
}

export const MigrationLimits: sts.Type<MigrationLimits> = sts.struct(() => {
    return  {
        size: sts.number(),
        item: sts.number(),
    }
})

export interface MigrationLimits {
    size: number
    item: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type StateTrieMigrationCall = StateTrieMigrationCall_continue_migrate | StateTrieMigrationCall_control_auto_migration | StateTrieMigrationCall_force_set_progress | StateTrieMigrationCall_migrate_custom_child | StateTrieMigrationCall_migrate_custom_top | StateTrieMigrationCall_set_signed_max_limits

/**
 * See [`Pallet::continue_migrate`].
 */
export interface StateTrieMigrationCall_continue_migrate {
    __kind: 'continue_migrate'
    limits: MigrationLimits
    realSizeUpper: number
    witnessTask: MigrationTask
}

/**
 * See [`Pallet::control_auto_migration`].
 */
export interface StateTrieMigrationCall_control_auto_migration {
    __kind: 'control_auto_migration'
    maybeConfig?: (MigrationLimits | undefined)
}

/**
 * See [`Pallet::force_set_progress`].
 */
export interface StateTrieMigrationCall_force_set_progress {
    __kind: 'force_set_progress'
    progressTop: Progress
    progressChild: Progress
}

/**
 * See [`Pallet::migrate_custom_child`].
 */
export interface StateTrieMigrationCall_migrate_custom_child {
    __kind: 'migrate_custom_child'
    root: Bytes
    childKeys: Bytes[]
    totalSize: number
}

/**
 * See [`Pallet::migrate_custom_top`].
 */
export interface StateTrieMigrationCall_migrate_custom_top {
    __kind: 'migrate_custom_top'
    keys: Bytes[]
    witnessSize: number
}

/**
 * See [`Pallet::set_signed_max_limits`].
 */
export interface StateTrieMigrationCall_set_signed_max_limits {
    __kind: 'set_signed_max_limits'
    limits: MigrationLimits
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const StakingCall: sts.Type<StakingCall> = sts.closedEnum(() => {
    return  {
        bond: sts.enumStruct({
            value: sts.bigint(),
            payee: RewardDestination,
        }),
        bond_extra: sts.enumStruct({
            maxAdditional: sts.bigint(),
        }),
        cancel_deferred_slash: sts.enumStruct({
            era: sts.number(),
            slashIndices: sts.array(() => sts.number()),
        }),
        chill: sts.unit(),
        chill_other: sts.enumStruct({
            controller: AccountId32,
        }),
        force_apply_min_commission: sts.enumStruct({
            validatorStash: AccountId32,
        }),
        force_new_era: sts.unit(),
        force_new_era_always: sts.unit(),
        force_no_eras: sts.unit(),
        force_unstake: sts.enumStruct({
            stash: AccountId32,
            numSlashingSpans: sts.number(),
        }),
        increase_validator_count: sts.enumStruct({
            additional: sts.number(),
        }),
        kick: sts.enumStruct({
            who: sts.array(() => MultiAddress),
        }),
        nominate: sts.enumStruct({
            targets: sts.array(() => MultiAddress),
        }),
        payout_stakers: sts.enumStruct({
            validatorStash: AccountId32,
            era: sts.number(),
        }),
        reap_stash: sts.enumStruct({
            stash: AccountId32,
            numSlashingSpans: sts.number(),
        }),
        rebond: sts.enumStruct({
            value: sts.bigint(),
        }),
        scale_validator_count: sts.enumStruct({
            factor: Percent,
        }),
        set_controller: sts.unit(),
        set_invulnerables: sts.enumStruct({
            invulnerables: sts.array(() => AccountId32),
        }),
        set_min_commission: sts.enumStruct({
            new: Perbill,
        }),
        set_payee: sts.enumStruct({
            payee: RewardDestination,
        }),
        set_staking_configs: sts.enumStruct({
            minNominatorBond: ConfigOp,
            minValidatorBond: ConfigOp,
            maxNominatorCount: Type_91,
            maxValidatorCount: Type_91,
            chillThreshold: Type_92,
            minCommission: Type_93,
        }),
        set_validator_count: sts.enumStruct({
            new: sts.number(),
        }),
        unbond: sts.enumStruct({
            value: sts.bigint(),
        }),
        validate: sts.enumStruct({
            prefs: ValidatorPrefs,
        }),
        withdraw_unbonded: sts.enumStruct({
            numSlashingSpans: sts.number(),
        }),
    }
})

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return  {
        commission: sts.number(),
        blocked: sts.boolean(),
    }
})

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export const Type_93: sts.Type<Type_93> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Perbill,
    }
})

export type Type_93 = Type_93_Noop | Type_93_Remove | Type_93_Set

export interface Type_93_Noop {
    __kind: 'Noop'
}

export interface Type_93_Remove {
    __kind: 'Remove'
}

export interface Type_93_Set {
    __kind: 'Set'
    value: Perbill
}

export type Perbill = number

export const Type_92: sts.Type<Type_92> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Percent,
    }
})

export type Type_92 = Type_92_Noop | Type_92_Remove | Type_92_Set

export interface Type_92_Noop {
    __kind: 'Noop'
}

export interface Type_92_Remove {
    __kind: 'Remove'
}

export interface Type_92_Set {
    __kind: 'Set'
    value: Percent
}

export type Percent = number

export const Type_91: sts.Type<Type_91> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.number(),
    }
})

export type Type_91 = Type_91_Noop | Type_91_Remove | Type_91_Set

export interface Type_91_Noop {
    __kind: 'Noop'
}

export interface Type_91_Remove {
    __kind: 'Remove'
}

export interface Type_91_Set {
    __kind: 'Set'
    value: number
}

export const ConfigOp: sts.Type<ConfigOp> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.bigint(),
    }
})

export type ConfigOp = ConfigOp_Noop | ConfigOp_Remove | ConfigOp_Set

export interface ConfigOp_Noop {
    __kind: 'Noop'
}

export interface ConfigOp_Remove {
    __kind: 'Remove'
}

export interface ConfigOp_Set {
    __kind: 'Set'
    value: bigint
}

export const Perbill = sts.number()

export const Percent = sts.number()

export const RewardDestination: sts.Type<RewardDestination> = sts.closedEnum(() => {
    return  {
        Account: AccountId32,
        Controller: sts.unit(),
        None: sts.unit(),
        Staked: sts.unit(),
        Stash: sts.unit(),
    }
})

export type RewardDestination = RewardDestination_Account | RewardDestination_Controller | RewardDestination_None | RewardDestination_Staked | RewardDestination_Stash

export interface RewardDestination_Account {
    __kind: 'Account'
    value: AccountId32
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_cancel_deferred_slash | StakingCall_chill | StakingCall_chill_other | StakingCall_force_apply_min_commission | StakingCall_force_new_era | StakingCall_force_new_era_always | StakingCall_force_no_eras | StakingCall_force_unstake | StakingCall_increase_validator_count | StakingCall_kick | StakingCall_nominate | StakingCall_payout_stakers | StakingCall_reap_stash | StakingCall_rebond | StakingCall_scale_validator_count | StakingCall_set_controller | StakingCall_set_invulnerables | StakingCall_set_min_commission | StakingCall_set_payee | StakingCall_set_staking_configs | StakingCall_set_validator_count | StakingCall_unbond | StakingCall_validate | StakingCall_withdraw_unbonded

/**
 * See [`Pallet::bond`].
 */
export interface StakingCall_bond {
    __kind: 'bond'
    value: bigint
    payee: RewardDestination
}

/**
 * See [`Pallet::bond_extra`].
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 * See [`Pallet::cancel_deferred_slash`].
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
}

/**
 * See [`Pallet::chill`].
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 * See [`Pallet::chill_other`].
 */
export interface StakingCall_chill_other {
    __kind: 'chill_other'
    controller: AccountId32
}

/**
 * See [`Pallet::force_apply_min_commission`].
 */
export interface StakingCall_force_apply_min_commission {
    __kind: 'force_apply_min_commission'
    validatorStash: AccountId32
}

/**
 * See [`Pallet::force_new_era`].
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * See [`Pallet::force_new_era_always`].
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 * See [`Pallet::force_no_eras`].
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 * See [`Pallet::force_unstake`].
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: AccountId32
    numSlashingSpans: number
}

/**
 * See [`Pallet::increase_validator_count`].
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 * See [`Pallet::kick`].
 */
export interface StakingCall_kick {
    __kind: 'kick'
    who: MultiAddress[]
}

/**
 * See [`Pallet::nominate`].
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: MultiAddress[]
}

/**
 * See [`Pallet::payout_stakers`].
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: AccountId32
    era: number
}

/**
 * See [`Pallet::reap_stash`].
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: AccountId32
    numSlashingSpans: number
}

/**
 * See [`Pallet::rebond`].
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 * See [`Pallet::scale_validator_count`].
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: Percent
}

/**
 * See [`Pallet::set_controller`].
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
}

/**
 * See [`Pallet::set_invulnerables`].
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: AccountId32[]
}

/**
 * See [`Pallet::set_min_commission`].
 */
export interface StakingCall_set_min_commission {
    __kind: 'set_min_commission'
    new: Perbill
}

/**
 * See [`Pallet::set_payee`].
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 * See [`Pallet::set_staking_configs`].
 */
export interface StakingCall_set_staking_configs {
    __kind: 'set_staking_configs'
    minNominatorBond: ConfigOp
    minValidatorBond: ConfigOp
    maxNominatorCount: Type_91
    maxValidatorCount: Type_91
    chillThreshold: Type_92
    minCommission: Type_93
}

/**
 * See [`Pallet::set_validator_count`].
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 * See [`Pallet::unbond`].
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 * See [`Pallet::validate`].
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 * See [`Pallet::withdraw_unbonded`].
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SocietyCall: sts.Type<SocietyCall> = sts.closedEnum(() => {
    return  {
        bestow_membership: sts.enumStruct({
            candidate: AccountId32,
        }),
        bid: sts.enumStruct({
            value: sts.bigint(),
        }),
        claim_membership: sts.unit(),
        cleanup_candidacy: sts.enumStruct({
            candidate: AccountId32,
            max: sts.number(),
        }),
        cleanup_challenge: sts.enumStruct({
            challengeRound: sts.number(),
            max: sts.number(),
        }),
        defender_vote: sts.enumStruct({
            approve: sts.boolean(),
        }),
        dissolve: sts.unit(),
        drop_candidate: sts.enumStruct({
            candidate: AccountId32,
        }),
        found_society: sts.enumStruct({
            founder: MultiAddress,
            maxMembers: sts.number(),
            maxIntake: sts.number(),
            maxStrikes: sts.number(),
            candidateDeposit: sts.bigint(),
            rules: sts.bytes(),
        }),
        judge_suspended_member: sts.enumStruct({
            who: MultiAddress,
            forgive: sts.boolean(),
        }),
        kick_candidate: sts.enumStruct({
            candidate: AccountId32,
        }),
        payout: sts.unit(),
        punish_skeptic: sts.unit(),
        resign_candidacy: sts.unit(),
        set_parameters: sts.enumStruct({
            maxMembers: sts.number(),
            maxIntake: sts.number(),
            maxStrikes: sts.number(),
            candidateDeposit: sts.bigint(),
        }),
        unbid: sts.unit(),
        unvouch: sts.unit(),
        vote: sts.enumStruct({
            candidate: MultiAddress,
            approve: sts.boolean(),
        }),
        vouch: sts.enumStruct({
            who: MultiAddress,
            value: sts.bigint(),
            tip: sts.bigint(),
        }),
        waive_repay: sts.enumStruct({
            amount: sts.bigint(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SocietyCall = SocietyCall_bestow_membership | SocietyCall_bid | SocietyCall_claim_membership | SocietyCall_cleanup_candidacy | SocietyCall_cleanup_challenge | SocietyCall_defender_vote | SocietyCall_dissolve | SocietyCall_drop_candidate | SocietyCall_found_society | SocietyCall_judge_suspended_member | SocietyCall_kick_candidate | SocietyCall_payout | SocietyCall_punish_skeptic | SocietyCall_resign_candidacy | SocietyCall_set_parameters | SocietyCall_unbid | SocietyCall_unvouch | SocietyCall_vote | SocietyCall_vouch | SocietyCall_waive_repay

/**
 * See [`Pallet::bestow_membership`].
 */
export interface SocietyCall_bestow_membership {
    __kind: 'bestow_membership'
    candidate: AccountId32
}

/**
 * See [`Pallet::bid`].
 */
export interface SocietyCall_bid {
    __kind: 'bid'
    value: bigint
}

/**
 * See [`Pallet::claim_membership`].
 */
export interface SocietyCall_claim_membership {
    __kind: 'claim_membership'
}

/**
 * See [`Pallet::cleanup_candidacy`].
 */
export interface SocietyCall_cleanup_candidacy {
    __kind: 'cleanup_candidacy'
    candidate: AccountId32
    max: number
}

/**
 * See [`Pallet::cleanup_challenge`].
 */
export interface SocietyCall_cleanup_challenge {
    __kind: 'cleanup_challenge'
    challengeRound: number
    max: number
}

/**
 * See [`Pallet::defender_vote`].
 */
export interface SocietyCall_defender_vote {
    __kind: 'defender_vote'
    approve: boolean
}

/**
 * See [`Pallet::dissolve`].
 */
export interface SocietyCall_dissolve {
    __kind: 'dissolve'
}

/**
 * See [`Pallet::drop_candidate`].
 */
export interface SocietyCall_drop_candidate {
    __kind: 'drop_candidate'
    candidate: AccountId32
}

/**
 * See [`Pallet::found_society`].
 */
export interface SocietyCall_found_society {
    __kind: 'found_society'
    founder: MultiAddress
    maxMembers: number
    maxIntake: number
    maxStrikes: number
    candidateDeposit: bigint
    rules: Bytes
}

/**
 * See [`Pallet::judge_suspended_member`].
 */
export interface SocietyCall_judge_suspended_member {
    __kind: 'judge_suspended_member'
    who: MultiAddress
    forgive: boolean
}

/**
 * See [`Pallet::kick_candidate`].
 */
export interface SocietyCall_kick_candidate {
    __kind: 'kick_candidate'
    candidate: AccountId32
}

/**
 * See [`Pallet::payout`].
 */
export interface SocietyCall_payout {
    __kind: 'payout'
}

/**
 * See [`Pallet::punish_skeptic`].
 */
export interface SocietyCall_punish_skeptic {
    __kind: 'punish_skeptic'
}

/**
 * See [`Pallet::resign_candidacy`].
 */
export interface SocietyCall_resign_candidacy {
    __kind: 'resign_candidacy'
}

/**
 * See [`Pallet::set_parameters`].
 */
export interface SocietyCall_set_parameters {
    __kind: 'set_parameters'
    maxMembers: number
    maxIntake: number
    maxStrikes: number
    candidateDeposit: bigint
}

/**
 * See [`Pallet::unbid`].
 */
export interface SocietyCall_unbid {
    __kind: 'unbid'
}

/**
 * See [`Pallet::unvouch`].
 */
export interface SocietyCall_unvouch {
    __kind: 'unvouch'
}

/**
 * See [`Pallet::vote`].
 */
export interface SocietyCall_vote {
    __kind: 'vote'
    candidate: MultiAddress
    approve: boolean
}

/**
 * See [`Pallet::vouch`].
 */
export interface SocietyCall_vouch {
    __kind: 'vouch'
    who: MultiAddress
    value: bigint
    tip: bigint
}

/**
 * See [`Pallet::waive_repay`].
 */
export interface SocietyCall_waive_repay {
    __kind: 'waive_repay'
    amount: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SlotsCall: sts.Type<SlotsCall> = sts.closedEnum(() => {
    return  {
        clear_all_leases: sts.enumStruct({
            para: Id,
        }),
        force_lease: sts.enumStruct({
            para: Id,
            leaser: AccountId32,
            amount: sts.bigint(),
            periodBegin: sts.number(),
            periodCount: sts.number(),
        }),
        trigger_onboard: sts.enumStruct({
            para: Id,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SlotsCall = SlotsCall_clear_all_leases | SlotsCall_force_lease | SlotsCall_trigger_onboard

/**
 * See [`Pallet::clear_all_leases`].
 */
export interface SlotsCall_clear_all_leases {
    __kind: 'clear_all_leases'
    para: Id
}

/**
 * See [`Pallet::force_lease`].
 */
export interface SlotsCall_force_lease {
    __kind: 'force_lease'
    para: Id
    leaser: AccountId32
    amount: bigint
    periodBegin: number
    periodCount: number
}

/**
 * See [`Pallet::trigger_onboard`].
 */
export interface SlotsCall_trigger_onboard {
    __kind: 'trigger_onboard'
    para: Id
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SessionCall: sts.Type<SessionCall> = sts.closedEnum(() => {
    return  {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: SessionKeys,
            proof: sts.bytes(),
        }),
    }
})

export const SessionKeys: sts.Type<SessionKeys> = sts.struct(() => {
    return  {
        grandpa: Public,
        babe: sts.bytes(),
        imOnline: sts.bytes(),
        paraValidator: V5Public,
        paraAssignment: sts.bytes(),
        authorityDiscovery: sts.bytes(),
        beefy: sts.bytes(),
    }
})

export const V5Public = sts.bytes()

export const Public = sts.bytes()

export interface SessionKeys {
    grandpa: Public
    babe: Bytes
    imOnline: Bytes
    paraValidator: V5Public
    paraAssignment: Bytes
    authorityDiscovery: Bytes
    beefy: Bytes
}

export type V5Public = Bytes

export type Public = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

/**
 * See [`Pallet::purge_keys`].
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * See [`Pallet::set_keys`].
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_after: sts.enumStruct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after

/**
 * See [`Pallet::cancel`].
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * See [`Pallet::cancel_named`].
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 * See [`Pallet::schedule`].
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_after`].
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named`].
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named_after`].
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const RegistrarCall: sts.Type<RegistrarCall> = sts.closedEnum(() => {
    return  {
        add_lock: sts.enumStruct({
            para: Id,
        }),
        deregister: sts.enumStruct({
            id: Id,
        }),
        force_register: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
            id: Id,
            genesisHead: HeadData,
            validationCode: ValidationCode,
        }),
        register: sts.enumStruct({
            id: Id,
            genesisHead: HeadData,
            validationCode: ValidationCode,
        }),
        remove_lock: sts.enumStruct({
            para: Id,
        }),
        reserve: sts.unit(),
        schedule_code_upgrade: sts.enumStruct({
            para: Id,
            newCode: ValidationCode,
        }),
        set_current_head: sts.enumStruct({
            para: Id,
            newHead: HeadData,
        }),
        swap: sts.enumStruct({
            id: Id,
            other: Id,
        }),
    }
})

export const ValidationCode = sts.bytes()

export const HeadData = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type RegistrarCall = RegistrarCall_add_lock | RegistrarCall_deregister | RegistrarCall_force_register | RegistrarCall_register | RegistrarCall_remove_lock | RegistrarCall_reserve | RegistrarCall_schedule_code_upgrade | RegistrarCall_set_current_head | RegistrarCall_swap

/**
 * See [`Pallet::add_lock`].
 */
export interface RegistrarCall_add_lock {
    __kind: 'add_lock'
    para: Id
}

/**
 * See [`Pallet::deregister`].
 */
export interface RegistrarCall_deregister {
    __kind: 'deregister'
    id: Id
}

/**
 * See [`Pallet::force_register`].
 */
export interface RegistrarCall_force_register {
    __kind: 'force_register'
    who: AccountId32
    deposit: bigint
    id: Id
    genesisHead: HeadData
    validationCode: ValidationCode
}

/**
 * See [`Pallet::register`].
 */
export interface RegistrarCall_register {
    __kind: 'register'
    id: Id
    genesisHead: HeadData
    validationCode: ValidationCode
}

/**
 * See [`Pallet::remove_lock`].
 */
export interface RegistrarCall_remove_lock {
    __kind: 'remove_lock'
    para: Id
}

/**
 * See [`Pallet::reserve`].
 */
export interface RegistrarCall_reserve {
    __kind: 'reserve'
}

/**
 * See [`Pallet::schedule_code_upgrade`].
 */
export interface RegistrarCall_schedule_code_upgrade {
    __kind: 'schedule_code_upgrade'
    para: Id
    newCode: ValidationCode
}

/**
 * See [`Pallet::set_current_head`].
 */
export interface RegistrarCall_set_current_head {
    __kind: 'set_current_head'
    para: Id
    newHead: HeadData
}

/**
 * See [`Pallet::swap`].
 */
export interface RegistrarCall_swap {
    __kind: 'swap'
    id: Id
    other: Id
}

export type ValidationCode = Bytes

export type HeadData = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ReferendaCall: sts.Type<ReferendaCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            index: sts.number(),
        }),
        kill: sts.enumStruct({
            index: sts.number(),
        }),
        nudge_referendum: sts.enumStruct({
            index: sts.number(),
        }),
        one_fewer_deciding: sts.enumStruct({
            track: sts.number(),
        }),
        place_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_submission_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        set_metadata: sts.enumStruct({
            index: sts.number(),
            maybeHash: sts.option(() => H256),
        }),
        submit: sts.enumStruct({
            proposalOrigin: OriginCaller,
            proposal: Bounded,
            enactmentMoment: DispatchTime,
        }),
    }
})

export const DispatchTime: sts.Type<DispatchTime> = sts.closedEnum(() => {
    return  {
        After: sts.number(),
        At: sts.number(),
    }
})

export type DispatchTime = DispatchTime_After | DispatchTime_At

export interface DispatchTime_After {
    __kind: 'After'
    value: number
}

export interface DispatchTime_At {
    __kind: 'At'
    value: number
}

export const Bounded: sts.Type<Bounded> = sts.closedEnum(() => {
    return  {
        Inline: sts.bytes(),
        Legacy: sts.enumStruct({
            hash: H256,
        }),
        Lookup: sts.enumStruct({
            hash: H256,
            len: sts.number(),
        }),
    }
})

export type Bounded = Bounded_Inline | Bounded_Legacy | Bounded_Lookup

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Bytes
}

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: H256
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: H256
    len: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ReferendaCall = ReferendaCall_cancel | ReferendaCall_kill | ReferendaCall_nudge_referendum | ReferendaCall_one_fewer_deciding | ReferendaCall_place_decision_deposit | ReferendaCall_refund_decision_deposit | ReferendaCall_refund_submission_deposit | ReferendaCall_set_metadata | ReferendaCall_submit

/**
 * See [`Pallet::cancel`].
 */
export interface ReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * See [`Pallet::kill`].
 */
export interface ReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * See [`Pallet::nudge_referendum`].
 */
export interface ReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * See [`Pallet::one_fewer_deciding`].
 */
export interface ReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * See [`Pallet::place_decision_deposit`].
 */
export interface ReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_decision_deposit`].
 */
export interface ReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_submission_deposit`].
 */
export interface ReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface ReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash?: (H256 | undefined)
}

/**
 * See [`Pallet::submit`].
 */
export interface ReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const RecoveryCall: sts.Type<RecoveryCall> = sts.closedEnum(() => {
    return  {
        as_recovered: sts.enumStruct({
            account: MultiAddress,
            call: Call,
        }),
        cancel_recovered: sts.enumStruct({
            account: MultiAddress,
        }),
        claim_recovery: sts.enumStruct({
            account: MultiAddress,
        }),
        close_recovery: sts.enumStruct({
            rescuer: MultiAddress,
        }),
        create_recovery: sts.enumStruct({
            friends: sts.array(() => AccountId32),
            threshold: sts.number(),
            delayPeriod: sts.number(),
        }),
        initiate_recovery: sts.enumStruct({
            account: MultiAddress,
        }),
        remove_recovery: sts.unit(),
        set_recovered: sts.enumStruct({
            lost: MultiAddress,
            rescuer: MultiAddress,
        }),
        vouch_recovery: sts.enumStruct({
            lost: MultiAddress,
            rescuer: MultiAddress,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type RecoveryCall = RecoveryCall_as_recovered | RecoveryCall_cancel_recovered | RecoveryCall_claim_recovery | RecoveryCall_close_recovery | RecoveryCall_create_recovery | RecoveryCall_initiate_recovery | RecoveryCall_remove_recovery | RecoveryCall_set_recovered | RecoveryCall_vouch_recovery

/**
 * See [`Pallet::as_recovered`].
 */
export interface RecoveryCall_as_recovered {
    __kind: 'as_recovered'
    account: MultiAddress
    call: Call
}

/**
 * See [`Pallet::cancel_recovered`].
 */
export interface RecoveryCall_cancel_recovered {
    __kind: 'cancel_recovered'
    account: MultiAddress
}

/**
 * See [`Pallet::claim_recovery`].
 */
export interface RecoveryCall_claim_recovery {
    __kind: 'claim_recovery'
    account: MultiAddress
}

/**
 * See [`Pallet::close_recovery`].
 */
export interface RecoveryCall_close_recovery {
    __kind: 'close_recovery'
    rescuer: MultiAddress
}

/**
 * See [`Pallet::create_recovery`].
 */
export interface RecoveryCall_create_recovery {
    __kind: 'create_recovery'
    friends: AccountId32[]
    threshold: number
    delayPeriod: number
}

/**
 * See [`Pallet::initiate_recovery`].
 */
export interface RecoveryCall_initiate_recovery {
    __kind: 'initiate_recovery'
    account: MultiAddress
}

/**
 * See [`Pallet::remove_recovery`].
 */
export interface RecoveryCall_remove_recovery {
    __kind: 'remove_recovery'
}

/**
 * See [`Pallet::set_recovered`].
 */
export interface RecoveryCall_set_recovered {
    __kind: 'set_recovered'
    lost: MultiAddress
    rescuer: MultiAddress
}

/**
 * See [`Pallet::vouch_recovery`].
 */
export interface RecoveryCall_vouch_recovery {
    __kind: 'vouch_recovery'
    lost: MultiAddress
    rescuer: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ProxyCall: sts.Type<ProxyCall> = sts.closedEnum(() => {
    return  {
        add_proxy: sts.enumStruct({
            delegate: MultiAddress,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        announce: sts.enumStruct({
            real: MultiAddress,
            callHash: H256,
        }),
        create_pure: sts.enumStruct({
            proxyType: ProxyType,
            delay: sts.number(),
            index: sts.number(),
        }),
        kill_pure: sts.enumStruct({
            spawner: MultiAddress,
            proxyType: ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        }),
        proxy: sts.enumStruct({
            real: MultiAddress,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        proxy_announced: sts.enumStruct({
            delegate: MultiAddress,
            real: MultiAddress,
            forceProxyType: sts.option(() => ProxyType),
            call: Call,
        }),
        reject_announcement: sts.enumStruct({
            delegate: MultiAddress,
            callHash: H256,
        }),
        remove_announcement: sts.enumStruct({
            real: MultiAddress,
            callHash: H256,
        }),
        remove_proxies: sts.unit(),
        remove_proxy: sts.enumStruct({
            delegate: MultiAddress,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ProxyCall = ProxyCall_add_proxy | ProxyCall_announce | ProxyCall_create_pure | ProxyCall_kill_pure | ProxyCall_proxy | ProxyCall_proxy_announced | ProxyCall_reject_announcement | ProxyCall_remove_announcement | ProxyCall_remove_proxies | ProxyCall_remove_proxy

/**
 * See [`Pallet::add_proxy`].
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * See [`Pallet::announce`].
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: MultiAddress
    callHash: H256
}

/**
 * See [`Pallet::create_pure`].
 */
export interface ProxyCall_create_pure {
    __kind: 'create_pure'
    proxyType: ProxyType
    delay: number
    index: number
}

/**
 * See [`Pallet::kill_pure`].
 */
export interface ProxyCall_kill_pure {
    __kind: 'kill_pure'
    spawner: MultiAddress
    proxyType: ProxyType
    index: number
    height: number
    extIndex: number
}

/**
 * See [`Pallet::proxy`].
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: MultiAddress
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

/**
 * See [`Pallet::proxy_announced`].
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: MultiAddress
    real: MultiAddress
    forceProxyType?: (ProxyType | undefined)
    call: Call
}

/**
 * See [`Pallet::reject_announcement`].
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: MultiAddress
    callHash: H256
}

/**
 * See [`Pallet::remove_announcement`].
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: MultiAddress
    callHash: H256
}

/**
 * See [`Pallet::remove_proxies`].
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 * See [`Pallet::remove_proxy`].
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

export type ProxyType = ProxyType_Any | ProxyType_Auction | ProxyType_CancelProxy | ProxyType_Governance | ProxyType_IdentityJudgement | ProxyType_NominationPools | ProxyType_NonTransfer | ProxyType_Society | ProxyType_Staking

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Auction {
    __kind: 'Auction'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_IdentityJudgement {
    __kind: 'IdentityJudgement'
}

export interface ProxyType_NominationPools {
    __kind: 'NominationPools'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Society {
    __kind: 'Society'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const PreimageCall: sts.Type<PreimageCall> = sts.closedEnum(() => {
    return  {
        note_preimage: sts.enumStruct({
            bytes: sts.bytes(),
        }),
        request_preimage: sts.enumStruct({
            hash: H256,
        }),
        unnote_preimage: sts.enumStruct({
            hash: H256,
        }),
        unrequest_preimage: sts.enumStruct({
            hash: H256,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_request_preimage | PreimageCall_unnote_preimage | PreimageCall_unrequest_preimage

/**
 * See [`Pallet::note_preimage`].
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Bytes
}

/**
 * See [`Pallet::request_preimage`].
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: H256
}

/**
 * See [`Pallet::unnote_preimage`].
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: H256
}

/**
 * See [`Pallet::unrequest_preimage`].
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: H256
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasSlashingCall: sts.Type<ParasSlashingCall> = sts.closedEnum(() => {
    return  {
        report_dispute_lost_unsigned: sts.enumStruct({
            disputeProof: V5DisputeProof,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const MembershipProof: sts.Type<MembershipProof> = sts.struct(() => {
    return  {
        session: sts.number(),
        trieNodes: sts.array(() => sts.bytes()),
        validatorCount: sts.number(),
    }
})

export interface MembershipProof {
    session: number
    trieNodes: Bytes[]
    validatorCount: number
}

export const V5DisputeProof: sts.Type<V5DisputeProof> = sts.struct(() => {
    return  {
        timeSlot: V5DisputesTimeSlot,
        kind: V5SlashingOffenceKind,
        validatorIndex: V5ValidatorIndex,
        validatorId: V5Public,
    }
})

export const V5ValidatorIndex = sts.number()

export const V5SlashingOffenceKind: sts.Type<V5SlashingOffenceKind> = sts.closedEnum(() => {
    return  {
        AgainstValid: sts.unit(),
        ForInvalid: sts.unit(),
    }
})

export type V5SlashingOffenceKind = V5SlashingOffenceKind_AgainstValid | V5SlashingOffenceKind_ForInvalid

export interface V5SlashingOffenceKind_AgainstValid {
    __kind: 'AgainstValid'
}

export interface V5SlashingOffenceKind_ForInvalid {
    __kind: 'ForInvalid'
}

export const V5DisputesTimeSlot: sts.Type<V5DisputesTimeSlot> = sts.struct(() => {
    return  {
        sessionIndex: sts.number(),
        candidateHash: CandidateHash,
    }
})

export const CandidateHash = sts.bytes()

export interface V5DisputesTimeSlot {
    sessionIndex: number
    candidateHash: CandidateHash
}

export type CandidateHash = Bytes

export interface V5DisputeProof {
    timeSlot: V5DisputesTimeSlot
    kind: V5SlashingOffenceKind
    validatorIndex: V5ValidatorIndex
    validatorId: V5Public
}

export type V5ValidatorIndex = number

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasSlashingCall = ParasSlashingCall_report_dispute_lost_unsigned

/**
 * See [`Pallet::report_dispute_lost_unsigned`].
 */
export interface ParasSlashingCall_report_dispute_lost_unsigned {
    __kind: 'report_dispute_lost_unsigned'
    disputeProof: V5DisputeProof
    keyOwnerProof: MembershipProof
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasSharedCall: sts.Type<ParasSharedCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasSharedCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasDisputesCall: sts.Type<ParasDisputesCall> = sts.closedEnum(() => {
    return  {
        force_unfreeze: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasDisputesCall = ParasDisputesCall_force_unfreeze

/**
 * See [`Pallet::force_unfreeze`].
 */
export interface ParasDisputesCall_force_unfreeze {
    __kind: 'force_unfreeze'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParasCall: sts.Type<ParasCall> = sts.closedEnum(() => {
    return  {
        add_trusted_validation_code: sts.enumStruct({
            validationCode: ValidationCode,
        }),
        force_note_new_head: sts.enumStruct({
            para: Id,
            newHead: HeadData,
        }),
        force_queue_action: sts.enumStruct({
            para: Id,
        }),
        force_schedule_code_upgrade: sts.enumStruct({
            para: Id,
            newCode: ValidationCode,
            relayParentNumber: sts.number(),
        }),
        force_set_current_code: sts.enumStruct({
            para: Id,
            newCode: ValidationCode,
        }),
        force_set_current_head: sts.enumStruct({
            para: Id,
            newHead: HeadData,
        }),
        force_set_most_recent_context: sts.enumStruct({
            para: Id,
            context: sts.number(),
        }),
        include_pvf_check_statement: sts.enumStruct({
            stmt: V5PvfCheckStatement,
            signature: V5Signature,
        }),
        poke_unused_validation_code: sts.enumStruct({
            validationCodeHash: ValidationCodeHash,
        }),
    }
})

export const ValidationCodeHash = sts.bytes()

export const V5Signature = sts.bytes()

export const V5PvfCheckStatement: sts.Type<V5PvfCheckStatement> = sts.struct(() => {
    return  {
        accept: sts.boolean(),
        subject: ValidationCodeHash,
        sessionIndex: sts.number(),
        validatorIndex: V5ValidatorIndex,
    }
})

export interface V5PvfCheckStatement {
    accept: boolean
    subject: ValidationCodeHash
    sessionIndex: number
    validatorIndex: V5ValidatorIndex
}

export type ValidationCodeHash = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasCall = ParasCall_add_trusted_validation_code | ParasCall_force_note_new_head | ParasCall_force_queue_action | ParasCall_force_schedule_code_upgrade | ParasCall_force_set_current_code | ParasCall_force_set_current_head | ParasCall_force_set_most_recent_context | ParasCall_include_pvf_check_statement | ParasCall_poke_unused_validation_code

/**
 * See [`Pallet::add_trusted_validation_code`].
 */
export interface ParasCall_add_trusted_validation_code {
    __kind: 'add_trusted_validation_code'
    validationCode: ValidationCode
}

/**
 * See [`Pallet::force_note_new_head`].
 */
export interface ParasCall_force_note_new_head {
    __kind: 'force_note_new_head'
    para: Id
    newHead: HeadData
}

/**
 * See [`Pallet::force_queue_action`].
 */
export interface ParasCall_force_queue_action {
    __kind: 'force_queue_action'
    para: Id
}

/**
 * See [`Pallet::force_schedule_code_upgrade`].
 */
export interface ParasCall_force_schedule_code_upgrade {
    __kind: 'force_schedule_code_upgrade'
    para: Id
    newCode: ValidationCode
    relayParentNumber: number
}

/**
 * See [`Pallet::force_set_current_code`].
 */
export interface ParasCall_force_set_current_code {
    __kind: 'force_set_current_code'
    para: Id
    newCode: ValidationCode
}

/**
 * See [`Pallet::force_set_current_head`].
 */
export interface ParasCall_force_set_current_head {
    __kind: 'force_set_current_head'
    para: Id
    newHead: HeadData
}

/**
 * See [`Pallet::force_set_most_recent_context`].
 */
export interface ParasCall_force_set_most_recent_context {
    __kind: 'force_set_most_recent_context'
    para: Id
    context: number
}

/**
 * See [`Pallet::include_pvf_check_statement`].
 */
export interface ParasCall_include_pvf_check_statement {
    __kind: 'include_pvf_check_statement'
    stmt: V5PvfCheckStatement
    signature: V5Signature
}

/**
 * See [`Pallet::poke_unused_validation_code`].
 */
export interface ParasCall_poke_unused_validation_code {
    __kind: 'poke_unused_validation_code'
    validationCodeHash: ValidationCodeHash
}

export type V5Signature = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParaInherentCall: sts.Type<ParaInherentCall> = sts.closedEnum(() => {
    return  {
        enter: sts.enumStruct({
            data: V5InherentData,
        }),
    }
})

export const V5InherentData: sts.Type<V5InherentData> = sts.struct(() => {
    return  {
        bitfields: sts.array(() => V5UncheckedSigned),
        backedCandidates: sts.array(() => V5BackedCandidate),
        disputes: sts.array(() => V5DisputeStatementSet),
        parentHeader: Header,
    }
})

export const Header: sts.Type<Header> = sts.struct(() => {
    return  {
        parentHash: H256,
        number: sts.number(),
        stateRoot: H256,
        extrinsicsRoot: H256,
        digest: Digest,
    }
})

export const Digest: sts.Type<Digest> = sts.struct(() => {
    return  {
        logs: sts.array(() => DigestItem),
    }
})

export const DigestItem: sts.Type<DigestItem> = sts.closedEnum(() => {
    return  {
        Consensus: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        Other: sts.bytes(),
        PreRuntime: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        RuntimeEnvironmentUpdated: sts.unit(),
        Seal: sts.tuple(() => [sts.bytes(), sts.bytes()]),
    }
})

export type DigestItem = DigestItem_Consensus | DigestItem_Other | DigestItem_PreRuntime | DigestItem_RuntimeEnvironmentUpdated | DigestItem_Seal

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Bytes, Bytes]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Bytes
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Bytes, Bytes]
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Bytes, Bytes]
}

export interface Digest {
    logs: DigestItem[]
}

export interface Header {
    parentHash: H256
    number: number
    stateRoot: H256
    extrinsicsRoot: H256
    digest: Digest
}

export const V5DisputeStatementSet: sts.Type<V5DisputeStatementSet> = sts.struct(() => {
    return  {
        candidateHash: CandidateHash,
        session: sts.number(),
        statements: sts.array(() => sts.tuple(() => [V5DisputeStatement, V5ValidatorIndex, V5Signature])),
    }
})

export const V5DisputeStatement: sts.Type<V5DisputeStatement> = sts.closedEnum(() => {
    return  {
        Invalid: V5InvalidDisputeStatementKind,
        Valid: V5ValidDisputeStatementKind,
    }
})

export const V5ValidDisputeStatementKind: sts.Type<V5ValidDisputeStatementKind> = sts.closedEnum(() => {
    return  {
        ApprovalChecking: sts.unit(),
        BackingSeconded: H256,
        BackingValid: H256,
        Explicit: sts.unit(),
    }
})

export type V5ValidDisputeStatementKind = V5ValidDisputeStatementKind_ApprovalChecking | V5ValidDisputeStatementKind_BackingSeconded | V5ValidDisputeStatementKind_BackingValid | V5ValidDisputeStatementKind_Explicit

export interface V5ValidDisputeStatementKind_ApprovalChecking {
    __kind: 'ApprovalChecking'
}

export interface V5ValidDisputeStatementKind_BackingSeconded {
    __kind: 'BackingSeconded'
    value: H256
}

export interface V5ValidDisputeStatementKind_BackingValid {
    __kind: 'BackingValid'
    value: H256
}

export interface V5ValidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export const V5InvalidDisputeStatementKind: sts.Type<V5InvalidDisputeStatementKind> = sts.closedEnum(() => {
    return  {
        Explicit: sts.unit(),
    }
})

export type V5InvalidDisputeStatementKind = V5InvalidDisputeStatementKind_Explicit

export interface V5InvalidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export type V5DisputeStatement = V5DisputeStatement_Invalid | V5DisputeStatement_Valid

export interface V5DisputeStatement_Invalid {
    __kind: 'Invalid'
    value: V5InvalidDisputeStatementKind
}

export interface V5DisputeStatement_Valid {
    __kind: 'Valid'
    value: V5ValidDisputeStatementKind
}

export interface V5DisputeStatementSet {
    candidateHash: CandidateHash
    session: number
    statements: [V5DisputeStatement, V5ValidatorIndex, V5Signature][]
}

export const V5BackedCandidate: sts.Type<V5BackedCandidate> = sts.struct(() => {
    return  {
        candidate: V5CommittedCandidateReceipt,
        validityVotes: sts.array(() => V5ValidityAttestation),
        validatorIndices: sts.bitseq(),
    }
})

export const V5ValidityAttestation: sts.Type<V5ValidityAttestation> = sts.closedEnum(() => {
    return  {
        Explicit: V5Signature,
        Implicit: V5Signature,
    }
})

export type V5ValidityAttestation = V5ValidityAttestation_Explicit | V5ValidityAttestation_Implicit

export interface V5ValidityAttestation_Explicit {
    __kind: 'Explicit'
    value: V5Signature
}

export interface V5ValidityAttestation_Implicit {
    __kind: 'Implicit'
    value: V5Signature
}

export const V5CommittedCandidateReceipt: sts.Type<V5CommittedCandidateReceipt> = sts.struct(() => {
    return  {
        descriptor: V5CandidateDescriptor,
        commitments: V5CandidateCommitments,
    }
})

export const V5CandidateCommitments: sts.Type<V5CandidateCommitments> = sts.struct(() => {
    return  {
        upwardMessages: sts.array(() => sts.bytes()),
        horizontalMessages: sts.array(() => OutboundHrmpMessage),
        newValidationCode: sts.option(() => ValidationCode),
        headData: HeadData,
        processedDownwardMessages: sts.number(),
        hrmpWatermark: sts.number(),
    }
})

export const OutboundHrmpMessage: sts.Type<OutboundHrmpMessage> = sts.struct(() => {
    return  {
        recipient: Id,
        data: sts.bytes(),
    }
})

export interface OutboundHrmpMessage {
    recipient: Id
    data: Bytes
}

export interface V5CandidateCommitments {
    upwardMessages: Bytes[]
    horizontalMessages: OutboundHrmpMessage[]
    newValidationCode?: (ValidationCode | undefined)
    headData: HeadData
    processedDownwardMessages: number
    hrmpWatermark: number
}

export const V5CandidateDescriptor: sts.Type<V5CandidateDescriptor> = sts.struct(() => {
    return  {
        paraId: Id,
        relayParent: H256,
        collator: sts.bytes(),
        persistedValidationDataHash: H256,
        povHash: H256,
        erasureRoot: H256,
        signature: sts.bytes(),
        paraHead: H256,
        validationCodeHash: ValidationCodeHash,
    }
})

export interface V5CandidateDescriptor {
    paraId: Id
    relayParent: H256
    collator: Bytes
    persistedValidationDataHash: H256
    povHash: H256
    erasureRoot: H256
    signature: Bytes
    paraHead: H256
    validationCodeHash: ValidationCodeHash
}

export interface V5CommittedCandidateReceipt {
    descriptor: V5CandidateDescriptor
    commitments: V5CandidateCommitments
}

export interface V5BackedCandidate {
    candidate: V5CommittedCandidateReceipt
    validityVotes: V5ValidityAttestation[]
    validatorIndices: BitSequence
}

export const V5UncheckedSigned: sts.Type<V5UncheckedSigned> = sts.struct(() => {
    return  {
        payload: V5AvailabilityBitfield,
        validatorIndex: V5ValidatorIndex,
        signature: V5Signature,
    }
})

export const V5AvailabilityBitfield = sts.bitseq()

export interface V5UncheckedSigned {
    payload: V5AvailabilityBitfield
    validatorIndex: V5ValidatorIndex
    signature: V5Signature
}

export type V5AvailabilityBitfield = BitSequence

export interface V5InherentData {
    bitfields: V5UncheckedSigned[]
    backedCandidates: V5BackedCandidate[]
    disputes: V5DisputeStatementSet[]
    parentHeader: Header
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParaInherentCall = ParaInherentCall_enter

/**
 * See [`Pallet::enter`].
 */
export interface ParaInherentCall_enter {
    __kind: 'enter'
    data: V5InherentData
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ParaInclusionCall: sts.Type<ParaInclusionCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParaInclusionCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const NominationPoolsCall: sts.Type<NominationPoolsCall> = sts.closedEnum(() => {
    return  {
        bond_extra: sts.enumStruct({
            extra: BondExtra,
        }),
        bond_extra_other: sts.enumStruct({
            member: MultiAddress,
            extra: BondExtra,
        }),
        chill: sts.enumStruct({
            poolId: sts.number(),
        }),
        claim_commission: sts.enumStruct({
            poolId: sts.number(),
        }),
        claim_payout: sts.unit(),
        claim_payout_other: sts.enumStruct({
            other: AccountId32,
        }),
        create: sts.enumStruct({
            amount: sts.bigint(),
            root: MultiAddress,
            nominator: MultiAddress,
            bouncer: MultiAddress,
        }),
        create_with_pool_id: sts.enumStruct({
            amount: sts.bigint(),
            root: MultiAddress,
            nominator: MultiAddress,
            bouncer: MultiAddress,
            poolId: sts.number(),
        }),
        join: sts.enumStruct({
            amount: sts.bigint(),
            poolId: sts.number(),
        }),
        nominate: sts.enumStruct({
            poolId: sts.number(),
            validators: sts.array(() => AccountId32),
        }),
        pool_withdraw_unbonded: sts.enumStruct({
            poolId: sts.number(),
            numSlashingSpans: sts.number(),
        }),
        set_claim_permission: sts.enumStruct({
            permission: ClaimPermission,
        }),
        set_commission: sts.enumStruct({
            poolId: sts.number(),
            newCommission: sts.option(() => sts.tuple(() => [Perbill, AccountId32])),
        }),
        set_commission_change_rate: sts.enumStruct({
            poolId: sts.number(),
            changeRate: CommissionChangeRate,
        }),
        set_commission_max: sts.enumStruct({
            poolId: sts.number(),
            maxCommission: Perbill,
        }),
        set_configs: sts.enumStruct({
            minJoinBond: Type_315,
            minCreateBond: Type_315,
            maxPools: Type_316,
            maxMembers: Type_316,
            maxMembersPerPool: Type_316,
            globalMaxCommission: Type_317,
        }),
        set_metadata: sts.enumStruct({
            poolId: sts.number(),
            metadata: sts.bytes(),
        }),
        set_state: sts.enumStruct({
            poolId: sts.number(),
            state: PoolState,
        }),
        unbond: sts.enumStruct({
            memberAccount: MultiAddress,
            unbondingPoints: sts.bigint(),
        }),
        update_roles: sts.enumStruct({
            poolId: sts.number(),
            newRoot: Type_318,
            newNominator: Type_318,
            newBouncer: Type_318,
        }),
        withdraw_unbonded: sts.enumStruct({
            memberAccount: MultiAddress,
            numSlashingSpans: sts.number(),
        }),
    }
})

export const Type_318: sts.Type<Type_318> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: AccountId32,
    }
})

export type Type_318 = Type_318_Noop | Type_318_Remove | Type_318_Set

export interface Type_318_Noop {
    __kind: 'Noop'
}

export interface Type_318_Remove {
    __kind: 'Remove'
}

export interface Type_318_Set {
    __kind: 'Set'
    value: AccountId32
}

export const PoolState: sts.Type<PoolState> = sts.closedEnum(() => {
    return  {
        Blocked: sts.unit(),
        Destroying: sts.unit(),
        Open: sts.unit(),
    }
})

export type PoolState = PoolState_Blocked | PoolState_Destroying | PoolState_Open

export interface PoolState_Blocked {
    __kind: 'Blocked'
}

export interface PoolState_Destroying {
    __kind: 'Destroying'
}

export interface PoolState_Open {
    __kind: 'Open'
}

export const Type_317: sts.Type<Type_317> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Perbill,
    }
})

export type Type_317 = Type_317_Noop | Type_317_Remove | Type_317_Set

export interface Type_317_Noop {
    __kind: 'Noop'
}

export interface Type_317_Remove {
    __kind: 'Remove'
}

export interface Type_317_Set {
    __kind: 'Set'
    value: Perbill
}

export const Type_316: sts.Type<Type_316> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.number(),
    }
})

export type Type_316 = Type_316_Noop | Type_316_Remove | Type_316_Set

export interface Type_316_Noop {
    __kind: 'Noop'
}

export interface Type_316_Remove {
    __kind: 'Remove'
}

export interface Type_316_Set {
    __kind: 'Set'
    value: number
}

export const Type_315: sts.Type<Type_315> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.bigint(),
    }
})

export type Type_315 = Type_315_Noop | Type_315_Remove | Type_315_Set

export interface Type_315_Noop {
    __kind: 'Noop'
}

export interface Type_315_Remove {
    __kind: 'Remove'
}

export interface Type_315_Set {
    __kind: 'Set'
    value: bigint
}

export const CommissionChangeRate: sts.Type<CommissionChangeRate> = sts.struct(() => {
    return  {
        maxIncrease: Perbill,
        minDelay: sts.number(),
    }
})

export interface CommissionChangeRate {
    maxIncrease: Perbill
    minDelay: number
}

export const ClaimPermission: sts.Type<ClaimPermission> = sts.closedEnum(() => {
    return  {
        Permissioned: sts.unit(),
        PermissionlessAll: sts.unit(),
        PermissionlessCompound: sts.unit(),
        PermissionlessWithdraw: sts.unit(),
    }
})

export type ClaimPermission = ClaimPermission_Permissioned | ClaimPermission_PermissionlessAll | ClaimPermission_PermissionlessCompound | ClaimPermission_PermissionlessWithdraw

export interface ClaimPermission_Permissioned {
    __kind: 'Permissioned'
}

export interface ClaimPermission_PermissionlessAll {
    __kind: 'PermissionlessAll'
}

export interface ClaimPermission_PermissionlessCompound {
    __kind: 'PermissionlessCompound'
}

export interface ClaimPermission_PermissionlessWithdraw {
    __kind: 'PermissionlessWithdraw'
}

export const BondExtra: sts.Type<BondExtra> = sts.closedEnum(() => {
    return  {
        FreeBalance: sts.bigint(),
        Rewards: sts.unit(),
    }
})

export type BondExtra = BondExtra_FreeBalance | BondExtra_Rewards

export interface BondExtra_FreeBalance {
    __kind: 'FreeBalance'
    value: bigint
}

export interface BondExtra_Rewards {
    __kind: 'Rewards'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NominationPoolsCall = NominationPoolsCall_bond_extra | NominationPoolsCall_bond_extra_other | NominationPoolsCall_chill | NominationPoolsCall_claim_commission | NominationPoolsCall_claim_payout | NominationPoolsCall_claim_payout_other | NominationPoolsCall_create | NominationPoolsCall_create_with_pool_id | NominationPoolsCall_join | NominationPoolsCall_nominate | NominationPoolsCall_pool_withdraw_unbonded | NominationPoolsCall_set_claim_permission | NominationPoolsCall_set_commission | NominationPoolsCall_set_commission_change_rate | NominationPoolsCall_set_commission_max | NominationPoolsCall_set_configs | NominationPoolsCall_set_metadata | NominationPoolsCall_set_state | NominationPoolsCall_unbond | NominationPoolsCall_update_roles | NominationPoolsCall_withdraw_unbonded

/**
 * See [`Pallet::bond_extra`].
 */
export interface NominationPoolsCall_bond_extra {
    __kind: 'bond_extra'
    extra: BondExtra
}

/**
 * See [`Pallet::bond_extra_other`].
 */
export interface NominationPoolsCall_bond_extra_other {
    __kind: 'bond_extra_other'
    member: MultiAddress
    extra: BondExtra
}

/**
 * See [`Pallet::chill`].
 */
export interface NominationPoolsCall_chill {
    __kind: 'chill'
    poolId: number
}

/**
 * See [`Pallet::claim_commission`].
 */
export interface NominationPoolsCall_claim_commission {
    __kind: 'claim_commission'
    poolId: number
}

/**
 * See [`Pallet::claim_payout`].
 */
export interface NominationPoolsCall_claim_payout {
    __kind: 'claim_payout'
}

/**
 * See [`Pallet::claim_payout_other`].
 */
export interface NominationPoolsCall_claim_payout_other {
    __kind: 'claim_payout_other'
    other: AccountId32
}

/**
 * See [`Pallet::create`].
 */
export interface NominationPoolsCall_create {
    __kind: 'create'
    amount: bigint
    root: MultiAddress
    nominator: MultiAddress
    bouncer: MultiAddress
}

/**
 * See [`Pallet::create_with_pool_id`].
 */
export interface NominationPoolsCall_create_with_pool_id {
    __kind: 'create_with_pool_id'
    amount: bigint
    root: MultiAddress
    nominator: MultiAddress
    bouncer: MultiAddress
    poolId: number
}

/**
 * See [`Pallet::join`].
 */
export interface NominationPoolsCall_join {
    __kind: 'join'
    amount: bigint
    poolId: number
}

/**
 * See [`Pallet::nominate`].
 */
export interface NominationPoolsCall_nominate {
    __kind: 'nominate'
    poolId: number
    validators: AccountId32[]
}

/**
 * See [`Pallet::pool_withdraw_unbonded`].
 */
export interface NominationPoolsCall_pool_withdraw_unbonded {
    __kind: 'pool_withdraw_unbonded'
    poolId: number
    numSlashingSpans: number
}

/**
 * See [`Pallet::set_claim_permission`].
 */
export interface NominationPoolsCall_set_claim_permission {
    __kind: 'set_claim_permission'
    permission: ClaimPermission
}

/**
 * See [`Pallet::set_commission`].
 */
export interface NominationPoolsCall_set_commission {
    __kind: 'set_commission'
    poolId: number
    newCommission?: ([Perbill, AccountId32] | undefined)
}

/**
 * See [`Pallet::set_commission_change_rate`].
 */
export interface NominationPoolsCall_set_commission_change_rate {
    __kind: 'set_commission_change_rate'
    poolId: number
    changeRate: CommissionChangeRate
}

/**
 * See [`Pallet::set_commission_max`].
 */
export interface NominationPoolsCall_set_commission_max {
    __kind: 'set_commission_max'
    poolId: number
    maxCommission: Perbill
}

/**
 * See [`Pallet::set_configs`].
 */
export interface NominationPoolsCall_set_configs {
    __kind: 'set_configs'
    minJoinBond: Type_315
    minCreateBond: Type_315
    maxPools: Type_316
    maxMembers: Type_316
    maxMembersPerPool: Type_316
    globalMaxCommission: Type_317
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface NominationPoolsCall_set_metadata {
    __kind: 'set_metadata'
    poolId: number
    metadata: Bytes
}

/**
 * See [`Pallet::set_state`].
 */
export interface NominationPoolsCall_set_state {
    __kind: 'set_state'
    poolId: number
    state: PoolState
}

/**
 * See [`Pallet::unbond`].
 */
export interface NominationPoolsCall_unbond {
    __kind: 'unbond'
    memberAccount: MultiAddress
    unbondingPoints: bigint
}

/**
 * See [`Pallet::update_roles`].
 */
export interface NominationPoolsCall_update_roles {
    __kind: 'update_roles'
    poolId: number
    newRoot: Type_318
    newNominator: Type_318
    newBouncer: Type_318
}

/**
 * See [`Pallet::withdraw_unbonded`].
 */
export interface NominationPoolsCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    memberAccount: MultiAddress
    numSlashingSpans: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const NisCounterpartBalancesCall: sts.Type<NisCounterpartBalancesCall> = sts.closedEnum(() => {
    return  {
        force_set_balance: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        set_balance_deprecated: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
            oldReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_allow_death: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        upgrade_accounts: sts.enumStruct({
            who: sts.array(() => AccountId32),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NisCounterpartBalancesCall = NisCounterpartBalancesCall_force_set_balance | NisCounterpartBalancesCall_force_transfer | NisCounterpartBalancesCall_force_unreserve | NisCounterpartBalancesCall_set_balance_deprecated | NisCounterpartBalancesCall_transfer | NisCounterpartBalancesCall_transfer_all | NisCounterpartBalancesCall_transfer_allow_death | NisCounterpartBalancesCall_transfer_keep_alive | NisCounterpartBalancesCall_upgrade_accounts

/**
 * See [`Pallet::force_set_balance`].
 */
export interface NisCounterpartBalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface NisCounterpartBalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::force_unreserve`].
 */
export interface NisCounterpartBalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::set_balance_deprecated`].
 */
export interface NisCounterpartBalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * See [`Pallet::transfer`].
 */
export interface NisCounterpartBalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface NisCounterpartBalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * See [`Pallet::transfer_allow_death`].
 */
export interface NisCounterpartBalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface NisCounterpartBalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::upgrade_accounts`].
 */
export interface NisCounterpartBalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const NisCall: sts.Type<NisCall> = sts.closedEnum(() => {
    return  {
        communify: sts.enumStruct({
            index: sts.number(),
        }),
        fund_deficit: sts.unit(),
        place_bid: sts.enumStruct({
            amount: sts.bigint(),
            duration: sts.number(),
        }),
        privatize: sts.enumStruct({
            index: sts.number(),
        }),
        retract_bid: sts.enumStruct({
            amount: sts.bigint(),
            duration: sts.number(),
        }),
        thaw_communal: sts.enumStruct({
            index: sts.number(),
        }),
        thaw_private: sts.enumStruct({
            index: sts.number(),
            maybeProportion: sts.option(() => Perquintill),
        }),
    }
})

export const Perquintill = sts.bigint()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NisCall = NisCall_communify | NisCall_fund_deficit | NisCall_place_bid | NisCall_privatize | NisCall_retract_bid | NisCall_thaw_communal | NisCall_thaw_private

/**
 * See [`Pallet::communify`].
 */
export interface NisCall_communify {
    __kind: 'communify'
    index: number
}

/**
 * See [`Pallet::fund_deficit`].
 */
export interface NisCall_fund_deficit {
    __kind: 'fund_deficit'
}

/**
 * See [`Pallet::place_bid`].
 */
export interface NisCall_place_bid {
    __kind: 'place_bid'
    amount: bigint
    duration: number
}

/**
 * See [`Pallet::privatize`].
 */
export interface NisCall_privatize {
    __kind: 'privatize'
    index: number
}

/**
 * See [`Pallet::retract_bid`].
 */
export interface NisCall_retract_bid {
    __kind: 'retract_bid'
    amount: bigint
    duration: number
}

/**
 * See [`Pallet::thaw_communal`].
 */
export interface NisCall_thaw_communal {
    __kind: 'thaw_communal'
    index: number
}

/**
 * See [`Pallet::thaw_private`].
 */
export interface NisCall_thaw_private {
    __kind: 'thaw_private'
    index: number
    maybeProportion?: (Perquintill | undefined)
}

export type Perquintill = bigint

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MultisigCall: sts.Type<MultisigCall> = sts.closedEnum(() => {
    return  {
        approve_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            callHash: sts.bytes(),
            maxWeight: Weight,
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            call: Call,
            maxWeight: Weight,
        }),
        as_multi_threshold_1: sts.enumStruct({
            otherSignatories: sts.array(() => AccountId32),
            call: Call,
        }),
        cancel_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            timepoint: Timepoint,
            callHash: sts.bytes(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultisigCall = MultisigCall_approve_as_multi | MultisigCall_as_multi | MultisigCall_as_multi_threshold_1 | MultisigCall_cancel_as_multi

/**
 * See [`Pallet::approve_as_multi`].
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    callHash: Bytes
    maxWeight: Weight
}

/**
 * See [`Pallet::as_multi`].
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
}

/**
 * See [`Pallet::as_multi_threshold_1`].
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: AccountId32[]
    call: Call
}

/**
 * See [`Pallet::cancel_as_multi`].
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    timepoint: Timepoint
    callHash: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const MessageQueueCall: sts.Type<MessageQueueCall> = sts.closedEnum(() => {
    return  {
        execute_overweight: sts.enumStruct({
            messageOrigin: AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: Weight,
        }),
        reap_page: sts.enumStruct({
            messageOrigin: AggregateMessageOrigin,
            pageIndex: sts.number(),
        }),
    }
})

export const AggregateMessageOrigin: sts.Type<AggregateMessageOrigin> = sts.closedEnum(() => {
    return  {
        Ump: UmpQueueId,
    }
})

export const UmpQueueId: sts.Type<UmpQueueId> = sts.closedEnum(() => {
    return  {
        Para: Id,
    }
})

export type UmpQueueId = UmpQueueId_Para

export interface UmpQueueId_Para {
    __kind: 'Para'
    value: Id
}

export type AggregateMessageOrigin = AggregateMessageOrigin_Ump

export interface AggregateMessageOrigin_Ump {
    __kind: 'Ump'
    value: UmpQueueId
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MessageQueueCall = MessageQueueCall_execute_overweight | MessageQueueCall_reap_page

/**
 * See [`Pallet::execute_overweight`].
 */
export interface MessageQueueCall_execute_overweight {
    __kind: 'execute_overweight'
    messageOrigin: AggregateMessageOrigin
    page: number
    index: number
    weightLimit: Weight
}

/**
 * See [`Pallet::reap_page`].
 */
export interface MessageQueueCall_reap_page {
    __kind: 'reap_page'
    messageOrigin: AggregateMessageOrigin
    pageIndex: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const InitializerCall: sts.Type<InitializerCall> = sts.closedEnum(() => {
    return  {
        force_approve: sts.enumStruct({
            upTo: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type InitializerCall = InitializerCall_force_approve

/**
 * See [`Pallet::force_approve`].
 */
export interface InitializerCall_force_approve {
    __kind: 'force_approve'
    upTo: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const IndicesCall: sts.Type<IndicesCall> = sts.closedEnum(() => {
    return  {
        claim: sts.enumStruct({
            index: sts.number(),
        }),
        force_transfer: sts.enumStruct({
            new: MultiAddress,
            index: sts.number(),
            freeze: sts.boolean(),
        }),
        free: sts.enumStruct({
            index: sts.number(),
        }),
        freeze: sts.enumStruct({
            index: sts.number(),
        }),
        transfer: sts.enumStruct({
            new: MultiAddress,
            index: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type IndicesCall = IndicesCall_claim | IndicesCall_force_transfer | IndicesCall_free | IndicesCall_freeze | IndicesCall_transfer

/**
 * See [`Pallet::claim`].
 */
export interface IndicesCall_claim {
    __kind: 'claim'
    index: number
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface IndicesCall_force_transfer {
    __kind: 'force_transfer'
    new: MultiAddress
    index: number
    freeze: boolean
}

/**
 * See [`Pallet::free`].
 */
export interface IndicesCall_free {
    __kind: 'free'
    index: number
}

/**
 * See [`Pallet::freeze`].
 */
export interface IndicesCall_freeze {
    __kind: 'freeze'
    index: number
}

/**
 * See [`Pallet::transfer`].
 */
export interface IndicesCall_transfer {
    __kind: 'transfer'
    new: MultiAddress
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ImOnlineCall: sts.Type<ImOnlineCall> = sts.closedEnum(() => {
    return  {
        heartbeat: sts.enumStruct({
            heartbeat: Heartbeat,
            signature: sts.bytes(),
        }),
    }
})

export const Heartbeat: sts.Type<Heartbeat> = sts.struct(() => {
    return  {
        blockNumber: sts.number(),
        sessionIndex: sts.number(),
        authorityIndex: sts.number(),
        validatorsLen: sts.number(),
    }
})

export interface Heartbeat {
    blockNumber: number
    sessionIndex: number
    authorityIndex: number
    validatorsLen: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 * See [`Pallet::heartbeat`].
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Bytes
}

/**
 * Identity pallet declaration.
 */
export const IdentityCall: sts.Type<IdentityCall> = sts.closedEnum(() => {
    return  {
        add_registrar: sts.enumStruct({
            account: MultiAddress,
        }),
        add_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        cancel_request: sts.enumStruct({
            regIndex: sts.number(),
        }),
        clear_identity: sts.unit(),
        kill_identity: sts.enumStruct({
            target: MultiAddress,
        }),
        provide_judgement: sts.enumStruct({
            regIndex: sts.number(),
            target: MultiAddress,
            judgement: Judgement,
            identity: H256,
        }),
        quit_sub: sts.unit(),
        remove_sub: sts.enumStruct({
            sub: MultiAddress,
        }),
        rename_sub: sts.enumStruct({
            sub: MultiAddress,
            data: Data,
        }),
        request_judgement: sts.enumStruct({
            regIndex: sts.number(),
            maxFee: sts.bigint(),
        }),
        set_account_id: sts.enumStruct({
            index: sts.number(),
            new: MultiAddress,
        }),
        set_fee: sts.enumStruct({
            index: sts.number(),
            fee: sts.bigint(),
        }),
        set_fields: sts.enumStruct({
            index: sts.number(),
            fields: BitFlags,
        }),
        set_identity: sts.enumStruct({
            info: IdentityInfo,
        }),
        set_subs: sts.enumStruct({
            subs: sts.array(() => sts.tuple(() => [AccountId32, Data])),
        }),
    }
})

export const IdentityInfo: sts.Type<IdentityInfo> = sts.struct(() => {
    return  {
        additional: sts.array(() => sts.tuple(() => [Data, Data])),
        display: Data,
        legal: Data,
        web: Data,
        riot: Data,
        email: Data,
        pgpFingerprint: sts.option(() => sts.bytes()),
        image: Data,
        twitter: Data,
    }
})

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint?: (Bytes | undefined)
    image: Data
    twitter: Data
}

export type Data = Data_BlakeTwo256 | Data_Keccak256 | Data_None | Data_Raw0 | Data_Raw1 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw2 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw3 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Sha256 | Data_ShaThree256

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Bytes
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Bytes
}

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Bytes
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Bytes
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Bytes
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Bytes
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Bytes
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Bytes
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Bytes
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Bytes
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Bytes
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Bytes
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Bytes
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Bytes
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Bytes
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Bytes
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Bytes
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Bytes
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Bytes
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Bytes
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Bytes
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Bytes
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Bytes
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Bytes
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Bytes
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Bytes
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Bytes
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Bytes
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Bytes
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Bytes
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Bytes
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Bytes
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Bytes
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Bytes
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Bytes
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Bytes
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Bytes
}

export const BitFlags = sts.bigint()

export const Judgement: sts.Type<Judgement> = sts.closedEnum(() => {
    return  {
        Erroneous: sts.unit(),
        FeePaid: sts.bigint(),
        KnownGood: sts.unit(),
        LowQuality: sts.unit(),
        OutOfDate: sts.unit(),
        Reasonable: sts.unit(),
        Unknown: sts.unit(),
    }
})

export type Judgement = Judgement_Erroneous | Judgement_FeePaid | Judgement_KnownGood | Judgement_LowQuality | Judgement_OutOfDate | Judgement_Reasonable | Judgement_Unknown

export interface Judgement_Erroneous {
    __kind: 'Erroneous'
}

export interface Judgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Judgement_KnownGood {
    __kind: 'KnownGood'
}

export interface Judgement_LowQuality {
    __kind: 'LowQuality'
}

export interface Judgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Judgement_Reasonable {
    __kind: 'Reasonable'
}

export interface Judgement_Unknown {
    __kind: 'Unknown'
}

export const Data: sts.Type<Data> = sts.closedEnum(() => {
    return  {
        BlakeTwo256: sts.bytes(),
        Keccak256: sts.bytes(),
        None: sts.unit(),
        Raw0: sts.bytes(),
        Raw1: sts.bytes(),
        Raw10: sts.bytes(),
        Raw11: sts.bytes(),
        Raw12: sts.bytes(),
        Raw13: sts.bytes(),
        Raw14: sts.bytes(),
        Raw15: sts.bytes(),
        Raw16: sts.bytes(),
        Raw17: sts.bytes(),
        Raw18: sts.bytes(),
        Raw19: sts.bytes(),
        Raw2: sts.bytes(),
        Raw20: sts.bytes(),
        Raw21: sts.bytes(),
        Raw22: sts.bytes(),
        Raw23: sts.bytes(),
        Raw24: sts.bytes(),
        Raw25: sts.bytes(),
        Raw26: sts.bytes(),
        Raw27: sts.bytes(),
        Raw28: sts.bytes(),
        Raw29: sts.bytes(),
        Raw3: sts.bytes(),
        Raw30: sts.bytes(),
        Raw31: sts.bytes(),
        Raw32: sts.bytes(),
        Raw4: sts.bytes(),
        Raw5: sts.bytes(),
        Raw6: sts.bytes(),
        Raw7: sts.bytes(),
        Raw8: sts.bytes(),
        Raw9: sts.bytes(),
        Sha256: sts.bytes(),
        ShaThree256: sts.bytes(),
    }
})

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_add_sub | IdentityCall_cancel_request | IdentityCall_clear_identity | IdentityCall_kill_identity | IdentityCall_provide_judgement | IdentityCall_quit_sub | IdentityCall_remove_sub | IdentityCall_rename_sub | IdentityCall_request_judgement | IdentityCall_set_account_id | IdentityCall_set_fee | IdentityCall_set_fields | IdentityCall_set_identity | IdentityCall_set_subs

/**
 * See [`Pallet::add_registrar`].
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
}

/**
 * See [`Pallet::add_sub`].
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::cancel_request`].
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * See [`Pallet::clear_identity`].
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * See [`Pallet::kill_identity`].
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * See [`Pallet::provide_judgement`].
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: H256
}

/**
 * See [`Pallet::quit_sub`].
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * See [`Pallet::remove_sub`].
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * See [`Pallet::rename_sub`].
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::request_judgement`].
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * See [`Pallet::set_account_id`].
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * See [`Pallet::set_fee`].
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * See [`Pallet::set_fields`].
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: BitFlags
}

/**
 * See [`Pallet::set_identity`].
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * See [`Pallet::set_subs`].
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [AccountId32, Data][]
}

export type BitFlags = bigint

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const HrmpCall: sts.Type<HrmpCall> = sts.closedEnum(() => {
    return  {
        force_clean_hrmp: sts.enumStruct({
            para: Id,
            inbound: sts.number(),
            outbound: sts.number(),
        }),
        force_open_hrmp_channel: sts.enumStruct({
            sender: Id,
            recipient: Id,
            maxCapacity: sts.number(),
            maxMessageSize: sts.number(),
        }),
        force_process_hrmp_close: sts.enumStruct({
            channels: sts.number(),
        }),
        force_process_hrmp_open: sts.enumStruct({
            channels: sts.number(),
        }),
        hrmp_accept_open_channel: sts.enumStruct({
            sender: Id,
        }),
        hrmp_cancel_open_request: sts.enumStruct({
            channelId: HrmpChannelId,
            openRequests: sts.number(),
        }),
        hrmp_close_channel: sts.enumStruct({
            channelId: HrmpChannelId,
        }),
        hrmp_init_open_channel: sts.enumStruct({
            recipient: Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        }),
    }
})

export const HrmpChannelId: sts.Type<HrmpChannelId> = sts.struct(() => {
    return  {
        sender: Id,
        recipient: Id,
    }
})

export interface HrmpChannelId {
    sender: Id
    recipient: Id
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type HrmpCall = HrmpCall_force_clean_hrmp | HrmpCall_force_open_hrmp_channel | HrmpCall_force_process_hrmp_close | HrmpCall_force_process_hrmp_open | HrmpCall_hrmp_accept_open_channel | HrmpCall_hrmp_cancel_open_request | HrmpCall_hrmp_close_channel | HrmpCall_hrmp_init_open_channel

/**
 * See [`Pallet::force_clean_hrmp`].
 */
export interface HrmpCall_force_clean_hrmp {
    __kind: 'force_clean_hrmp'
    para: Id
    inbound: number
    outbound: number
}

/**
 * See [`Pallet::force_open_hrmp_channel`].
 */
export interface HrmpCall_force_open_hrmp_channel {
    __kind: 'force_open_hrmp_channel'
    sender: Id
    recipient: Id
    maxCapacity: number
    maxMessageSize: number
}

/**
 * See [`Pallet::force_process_hrmp_close`].
 */
export interface HrmpCall_force_process_hrmp_close {
    __kind: 'force_process_hrmp_close'
    channels: number
}

/**
 * See [`Pallet::force_process_hrmp_open`].
 */
export interface HrmpCall_force_process_hrmp_open {
    __kind: 'force_process_hrmp_open'
    channels: number
}

/**
 * See [`Pallet::hrmp_accept_open_channel`].
 */
export interface HrmpCall_hrmp_accept_open_channel {
    __kind: 'hrmp_accept_open_channel'
    sender: Id
}

/**
 * See [`Pallet::hrmp_cancel_open_request`].
 */
export interface HrmpCall_hrmp_cancel_open_request {
    __kind: 'hrmp_cancel_open_request'
    channelId: HrmpChannelId
    openRequests: number
}

/**
 * See [`Pallet::hrmp_close_channel`].
 */
export interface HrmpCall_hrmp_close_channel {
    __kind: 'hrmp_close_channel'
    channelId: HrmpChannelId
}

/**
 * See [`Pallet::hrmp_init_open_channel`].
 */
export interface HrmpCall_hrmp_init_open_channel {
    __kind: 'hrmp_init_open_channel'
    recipient: Id
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const GrandpaCall: sts.Type<GrandpaCall> = sts.closedEnum(() => {
    return  {
        note_stalled: sts.enumStruct({
            delay: sts.number(),
            bestFinalizedBlockNumber: sts.number(),
        }),
        report_equivocation: sts.enumStruct({
            equivocationProof: Type_114,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: Type_114,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const Type_114: sts.Type<Type_114> = sts.struct(() => {
    return  {
        setId: sts.bigint(),
        equivocation: Equivocation,
    }
})

export const Equivocation: sts.Type<Equivocation> = sts.closedEnum(() => {
    return  {
        Precommit: Type_122,
        Prevote: Type_116,
    }
})

export const Type_116: sts.Type<Type_116> = sts.struct(() => {
    return  {
        roundNumber: sts.bigint(),
        identity: Public,
        first: sts.tuple(() => [Prevote, sts.bytes()]),
        second: sts.tuple(() => [Prevote, sts.bytes()]),
    }
})

export const Prevote: sts.Type<Prevote> = sts.struct(() => {
    return  {
        targetHash: H256,
        targetNumber: sts.number(),
    }
})

export interface Prevote {
    targetHash: H256
    targetNumber: number
}

export interface Type_116 {
    roundNumber: bigint
    identity: Public
    first: [Prevote, Bytes]
    second: [Prevote, Bytes]
}

export const Type_122: sts.Type<Type_122> = sts.struct(() => {
    return  {
        roundNumber: sts.bigint(),
        identity: Public,
        first: sts.tuple(() => [Precommit, sts.bytes()]),
        second: sts.tuple(() => [Precommit, sts.bytes()]),
    }
})

export const Precommit: sts.Type<Precommit> = sts.struct(() => {
    return  {
        targetHash: H256,
        targetNumber: sts.number(),
    }
})

export interface Precommit {
    targetHash: H256
    targetNumber: number
}

export interface Type_122 {
    roundNumber: bigint
    identity: Public
    first: [Precommit, Bytes]
    second: [Precommit, Bytes]
}

export type Equivocation = Equivocation_Precommit | Equivocation_Prevote

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_122
}

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_116
}

export interface Type_114 {
    setId: bigint
    equivocation: Equivocation
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type GrandpaCall = GrandpaCall_note_stalled | GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned

/**
 * See [`Pallet::note_stalled`].
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

/**
 * See [`Pallet::report_equivocation`].
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_114
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::report_equivocation_unsigned`].
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_114
    keyOwnerProof: MembershipProof
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FellowshipReferendaCall: sts.Type<FellowshipReferendaCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            index: sts.number(),
        }),
        kill: sts.enumStruct({
            index: sts.number(),
        }),
        nudge_referendum: sts.enumStruct({
            index: sts.number(),
        }),
        one_fewer_deciding: sts.enumStruct({
            track: sts.number(),
        }),
        place_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_decision_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        refund_submission_deposit: sts.enumStruct({
            index: sts.number(),
        }),
        set_metadata: sts.enumStruct({
            index: sts.number(),
            maybeHash: sts.option(() => H256),
        }),
        submit: sts.enumStruct({
            proposalOrigin: OriginCaller,
            proposal: Bounded,
            enactmentMoment: DispatchTime,
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FellowshipReferendaCall = FellowshipReferendaCall_cancel | FellowshipReferendaCall_kill | FellowshipReferendaCall_nudge_referendum | FellowshipReferendaCall_one_fewer_deciding | FellowshipReferendaCall_place_decision_deposit | FellowshipReferendaCall_refund_decision_deposit | FellowshipReferendaCall_refund_submission_deposit | FellowshipReferendaCall_set_metadata | FellowshipReferendaCall_submit

/**
 * See [`Pallet::cancel`].
 */
export interface FellowshipReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * See [`Pallet::kill`].
 */
export interface FellowshipReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * See [`Pallet::nudge_referendum`].
 */
export interface FellowshipReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * See [`Pallet::one_fewer_deciding`].
 */
export interface FellowshipReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * See [`Pallet::place_decision_deposit`].
 */
export interface FellowshipReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_decision_deposit`].
 */
export interface FellowshipReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_submission_deposit`].
 */
export interface FellowshipReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface FellowshipReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash?: (H256 | undefined)
}

/**
 * See [`Pallet::submit`].
 */
export interface FellowshipReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FellowshipCollectiveCall: sts.Type<FellowshipCollectiveCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: MultiAddress,
        }),
        cleanup_poll: sts.enumStruct({
            pollIndex: sts.number(),
            max: sts.number(),
        }),
        demote_member: sts.enumStruct({
            who: MultiAddress,
        }),
        promote_member: sts.enumStruct({
            who: MultiAddress,
        }),
        remove_member: sts.enumStruct({
            who: MultiAddress,
            minRank: sts.number(),
        }),
        vote: sts.enumStruct({
            poll: sts.number(),
            aye: sts.boolean(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FellowshipCollectiveCall = FellowshipCollectiveCall_add_member | FellowshipCollectiveCall_cleanup_poll | FellowshipCollectiveCall_demote_member | FellowshipCollectiveCall_promote_member | FellowshipCollectiveCall_remove_member | FellowshipCollectiveCall_vote

/**
 * See [`Pallet::add_member`].
 */
export interface FellowshipCollectiveCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * See [`Pallet::cleanup_poll`].
 */
export interface FellowshipCollectiveCall_cleanup_poll {
    __kind: 'cleanup_poll'
    pollIndex: number
    max: number
}

/**
 * See [`Pallet::demote_member`].
 */
export interface FellowshipCollectiveCall_demote_member {
    __kind: 'demote_member'
    who: MultiAddress
}

/**
 * See [`Pallet::promote_member`].
 */
export interface FellowshipCollectiveCall_promote_member {
    __kind: 'promote_member'
    who: MultiAddress
}

/**
 * See [`Pallet::remove_member`].
 */
export interface FellowshipCollectiveCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    minRank: number
}

/**
 * See [`Pallet::vote`].
 */
export interface FellowshipCollectiveCall_vote {
    __kind: 'vote'
    poll: number
    aye: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const FastUnstakeCall: sts.Type<FastUnstakeCall> = sts.closedEnum(() => {
    return  {
        control: sts.enumStruct({
            erasToCheck: sts.number(),
        }),
        deregister: sts.unit(),
        register_fast_unstake: sts.unit(),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FastUnstakeCall = FastUnstakeCall_control | FastUnstakeCall_deregister | FastUnstakeCall_register_fast_unstake

/**
 * See [`Pallet::control`].
 */
export interface FastUnstakeCall_control {
    __kind: 'control'
    erasToCheck: number
}

/**
 * See [`Pallet::deregister`].
 */
export interface FastUnstakeCall_deregister {
    __kind: 'deregister'
}

/**
 * See [`Pallet::register_fast_unstake`].
 */
export interface FastUnstakeCall_register_fast_unstake {
    __kind: 'register_fast_unstake'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ElectionProviderMultiPhaseCall: sts.Type<ElectionProviderMultiPhaseCall> = sts.closedEnum(() => {
    return  {
        governance_fallback: sts.enumStruct({
            maybeMaxVoters: sts.option(() => sts.number()),
            maybeMaxTargets: sts.option(() => sts.number()),
        }),
        set_emergency_election_result: sts.enumStruct({
            supports: sts.array(() => sts.tuple(() => [AccountId32, Support])),
        }),
        set_minimum_untrusted_score: sts.enumStruct({
            maybeNextScore: sts.option(() => ElectionScore),
        }),
        submit: sts.enumStruct({
            rawSolution: RawSolution,
        }),
        submit_unsigned: sts.enumStruct({
            rawSolution: RawSolution,
            witness: SolutionOrSnapshotSize,
        }),
    }
})

export const SolutionOrSnapshotSize: sts.Type<SolutionOrSnapshotSize> = sts.struct(() => {
    return  {
        voters: sts.number(),
        targets: sts.number(),
    }
})

export interface SolutionOrSnapshotSize {
    voters: number
    targets: number
}

export const RawSolution: sts.Type<RawSolution> = sts.struct(() => {
    return  {
        solution: NposCompactSolution24,
        score: ElectionScore,
        round: sts.number(),
    }
})

export const NposCompactSolution24: sts.Type<NposCompactSolution24> = sts.struct(() => {
    return  {
        votes1: sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
        votes2: sts.array(() => sts.tuple(() => [sts.number(), sts.tuple(() => [sts.number(), sts.number()]), sts.number()])),
        votes3: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes4: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes5: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes6: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes7: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes8: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes9: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes10: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes11: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes12: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes13: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes14: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes15: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes16: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes17: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes18: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes19: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes20: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes21: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes22: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes23: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes24: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
    }
})

export interface NposCompactSolution24 {
    votes1: [number, number][]
    votes2: [number, [number, number], number][]
    votes3: [number, [number, number][], number][]
    votes4: [number, [number, number][], number][]
    votes5: [number, [number, number][], number][]
    votes6: [number, [number, number][], number][]
    votes7: [number, [number, number][], number][]
    votes8: [number, [number, number][], number][]
    votes9: [number, [number, number][], number][]
    votes10: [number, [number, number][], number][]
    votes11: [number, [number, number][], number][]
    votes12: [number, [number, number][], number][]
    votes13: [number, [number, number][], number][]
    votes14: [number, [number, number][], number][]
    votes15: [number, [number, number][], number][]
    votes16: [number, [number, number][], number][]
    votes17: [number, [number, number][], number][]
    votes18: [number, [number, number][], number][]
    votes19: [number, [number, number][], number][]
    votes20: [number, [number, number][], number][]
    votes21: [number, [number, number][], number][]
    votes22: [number, [number, number][], number][]
    votes23: [number, [number, number][], number][]
    votes24: [number, [number, number][], number][]
}

export interface RawSolution {
    solution: NposCompactSolution24
    score: ElectionScore
    round: number
}

export interface ElectionScore {
    minimalStake: bigint
    sumStake: bigint
    sumStakeSquared: bigint
}

export const ElectionScore: sts.Type<ElectionScore> = sts.struct(() => {
    return  {
        minimalStake: sts.bigint(),
        sumStake: sts.bigint(),
        sumStakeSquared: sts.bigint(),
    }
})

export const Support: sts.Type<Support> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        voters: sts.array(() => sts.tuple(() => [AccountId32, sts.bigint()])),
    }
})

export interface Support {
    total: bigint
    voters: [AccountId32, bigint][]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ElectionProviderMultiPhaseCall = ElectionProviderMultiPhaseCall_governance_fallback | ElectionProviderMultiPhaseCall_set_emergency_election_result | ElectionProviderMultiPhaseCall_set_minimum_untrusted_score | ElectionProviderMultiPhaseCall_submit | ElectionProviderMultiPhaseCall_submit_unsigned

/**
 * See [`Pallet::governance_fallback`].
 */
export interface ElectionProviderMultiPhaseCall_governance_fallback {
    __kind: 'governance_fallback'
    maybeMaxVoters?: (number | undefined)
    maybeMaxTargets?: (number | undefined)
}

/**
 * See [`Pallet::set_emergency_election_result`].
 */
export interface ElectionProviderMultiPhaseCall_set_emergency_election_result {
    __kind: 'set_emergency_election_result'
    supports: [AccountId32, Support][]
}

/**
 * See [`Pallet::set_minimum_untrusted_score`].
 */
export interface ElectionProviderMultiPhaseCall_set_minimum_untrusted_score {
    __kind: 'set_minimum_untrusted_score'
    maybeNextScore?: (ElectionScore | undefined)
}

/**
 * See [`Pallet::submit`].
 */
export interface ElectionProviderMultiPhaseCall_submit {
    __kind: 'submit'
    rawSolution: RawSolution
}

/**
 * See [`Pallet::submit_unsigned`].
 */
export interface ElectionProviderMultiPhaseCall_submit_unsigned {
    __kind: 'submit_unsigned'
    rawSolution: RawSolution
    witness: SolutionOrSnapshotSize
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const CrowdloanCall: sts.Type<CrowdloanCall> = sts.closedEnum(() => {
    return  {
        add_memo: sts.enumStruct({
            index: Id,
            memo: sts.bytes(),
        }),
        contribute: sts.enumStruct({
            index: sts.number(),
            value: sts.bigint(),
            signature: sts.option(() => MultiSignature),
        }),
        contribute_all: sts.enumStruct({
            index: sts.number(),
            signature: sts.option(() => MultiSignature),
        }),
        create: sts.enumStruct({
            index: sts.number(),
            cap: sts.bigint(),
            firstPeriod: sts.number(),
            lastPeriod: sts.number(),
            end: sts.number(),
            verifier: sts.option(() => MultiSigner),
        }),
        dissolve: sts.enumStruct({
            index: sts.number(),
        }),
        edit: sts.enumStruct({
            index: sts.number(),
            cap: sts.bigint(),
            firstPeriod: sts.number(),
            lastPeriod: sts.number(),
            end: sts.number(),
            verifier: sts.option(() => MultiSigner),
        }),
        poke: sts.enumStruct({
            index: Id,
        }),
        refund: sts.enumStruct({
            index: sts.number(),
        }),
        withdraw: sts.enumStruct({
            who: AccountId32,
            index: sts.number(),
        }),
    }
})

export const MultiSigner: sts.Type<MultiSigner> = sts.closedEnum(() => {
    return  {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
    }
})

export type MultiSigner = MultiSigner_Ecdsa | MultiSigner_Ed25519 | MultiSigner_Sr25519

export interface MultiSigner_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface MultiSigner_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface MultiSigner_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

export const MultiSignature: sts.Type<MultiSignature> = sts.closedEnum(() => {
    return  {
        Ecdsa: sts.bytes(),
        Ed25519: sts.bytes(),
        Sr25519: sts.bytes(),
    }
})

export type MultiSignature = MultiSignature_Ecdsa | MultiSignature_Ed25519 | MultiSignature_Sr25519

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Bytes
}

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Bytes
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Bytes
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CrowdloanCall = CrowdloanCall_add_memo | CrowdloanCall_contribute | CrowdloanCall_contribute_all | CrowdloanCall_create | CrowdloanCall_dissolve | CrowdloanCall_edit | CrowdloanCall_poke | CrowdloanCall_refund | CrowdloanCall_withdraw

/**
 * See [`Pallet::add_memo`].
 */
export interface CrowdloanCall_add_memo {
    __kind: 'add_memo'
    index: Id
    memo: Bytes
}

/**
 * See [`Pallet::contribute`].
 */
export interface CrowdloanCall_contribute {
    __kind: 'contribute'
    index: number
    value: bigint
    signature?: (MultiSignature | undefined)
}

/**
 * See [`Pallet::contribute_all`].
 */
export interface CrowdloanCall_contribute_all {
    __kind: 'contribute_all'
    index: number
    signature?: (MultiSignature | undefined)
}

/**
 * See [`Pallet::create`].
 */
export interface CrowdloanCall_create {
    __kind: 'create'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier?: (MultiSigner | undefined)
}

/**
 * See [`Pallet::dissolve`].
 */
export interface CrowdloanCall_dissolve {
    __kind: 'dissolve'
    index: number
}

/**
 * See [`Pallet::edit`].
 */
export interface CrowdloanCall_edit {
    __kind: 'edit'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier?: (MultiSigner | undefined)
}

/**
 * See [`Pallet::poke`].
 */
export interface CrowdloanCall_poke {
    __kind: 'poke'
    index: Id
}

/**
 * See [`Pallet::refund`].
 */
export interface CrowdloanCall_refund {
    __kind: 'refund'
    index: number
}

/**
 * See [`Pallet::withdraw`].
 */
export interface CrowdloanCall_withdraw {
    __kind: 'withdraw'
    who: AccountId32
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ConvictionVotingCall: sts.Type<ConvictionVotingCall> = sts.closedEnum(() => {
    return  {
        delegate: sts.enumStruct({
            class: sts.number(),
            to: MultiAddress,
            conviction: Conviction,
            balance: sts.bigint(),
        }),
        remove_other_vote: sts.enumStruct({
            target: MultiAddress,
            class: sts.number(),
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            class: sts.option(() => sts.number()),
            index: sts.number(),
        }),
        undelegate: sts.enumStruct({
            class: sts.number(),
        }),
        unlock: sts.enumStruct({
            class: sts.number(),
            target: MultiAddress,
        }),
        vote: sts.enumStruct({
            pollIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return  {
        Split: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
        }),
        SplitAbstain: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
            abstain: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: sts.number(),
            balance: sts.bigint(),
        }),
    }
})

export type AccountVote = AccountVote_Split | AccountVote_SplitAbstain | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface AccountVote_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export const Conviction: sts.Type<Conviction> = sts.closedEnum(() => {
    return  {
        Locked1x: sts.unit(),
        Locked2x: sts.unit(),
        Locked3x: sts.unit(),
        Locked4x: sts.unit(),
        Locked5x: sts.unit(),
        Locked6x: sts.unit(),
        None: sts.unit(),
    }
})

export type Conviction = Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x | Conviction_None

export interface Conviction_Locked1x {
    __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
    __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
    __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
    __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
    __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
    __kind: 'Locked6x'
}

export interface Conviction_None {
    __kind: 'None'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ConvictionVotingCall = ConvictionVotingCall_delegate | ConvictionVotingCall_remove_other_vote | ConvictionVotingCall_remove_vote | ConvictionVotingCall_undelegate | ConvictionVotingCall_unlock | ConvictionVotingCall_vote

/**
 * See [`Pallet::delegate`].
 */
export interface ConvictionVotingCall_delegate {
    __kind: 'delegate'
    class: number
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * See [`Pallet::remove_other_vote`].
 */
export interface ConvictionVotingCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    class: number
    index: number
}

/**
 * See [`Pallet::remove_vote`].
 */
export interface ConvictionVotingCall_remove_vote {
    __kind: 'remove_vote'
    class?: (number | undefined)
    index: number
}

/**
 * See [`Pallet::undelegate`].
 */
export interface ConvictionVotingCall_undelegate {
    __kind: 'undelegate'
    class: number
}

/**
 * See [`Pallet::unlock`].
 */
export interface ConvictionVotingCall_unlock {
    __kind: 'unlock'
    class: number
    target: MultiAddress
}

/**
 * See [`Pallet::vote`].
 */
export interface ConvictionVotingCall_vote {
    __kind: 'vote'
    pollIndex: number
    vote: AccountVote
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ConfigurationCall: sts.Type<ConfigurationCall> = sts.closedEnum(() => {
    return  {
        set_async_backing_params: sts.enumStruct({
            new: AsyncBackingParams,
        }),
        set_bypass_consistency_check: sts.enumStruct({
            new: sts.boolean(),
        }),
        set_code_retention_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_dispute_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_dispute_post_conclusion_acceptance_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_executor_params: sts.enumStruct({
            new: sts.array(() => V5ExecutorParam),
        }),
        set_group_rotation_frequency: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_channel_max_capacity: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_channel_max_message_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_channel_max_total_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_message_num_per_candidate: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_parachain_inbound_channels: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_max_parachain_outbound_channels: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_open_request_ttl: sts.enumStruct({
            new: sts.number(),
        }),
        set_hrmp_recipient_deposit: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_hrmp_sender_deposit: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_max_code_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_downward_message_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_head_data_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_pov_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_message_num_per_candidate: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_message_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_queue_count: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_upward_queue_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_max_validators: sts.enumStruct({
            new: sts.option(() => sts.number()),
        }),
        set_max_validators_per_core: sts.enumStruct({
            new: sts.option(() => sts.number()),
        }),
        set_minimum_backing_votes: sts.enumStruct({
            new: sts.number(),
        }),
        set_minimum_validation_upgrade_delay: sts.enumStruct({
            new: sts.number(),
        }),
        set_n_delay_tranches: sts.enumStruct({
            new: sts.number(),
        }),
        set_needed_approvals: sts.enumStruct({
            new: sts.number(),
        }),
        set_no_show_slots: sts.enumStruct({
            new: sts.number(),
        }),
        set_on_demand_base_fee: sts.enumStruct({
            new: sts.bigint(),
        }),
        set_on_demand_cores: sts.enumStruct({
            new: sts.number(),
        }),
        set_on_demand_fee_variability: sts.enumStruct({
            new: Perbill,
        }),
        set_on_demand_queue_max_size: sts.enumStruct({
            new: sts.number(),
        }),
        set_on_demand_retries: sts.enumStruct({
            new: sts.number(),
        }),
        set_on_demand_target_queue_utilization: sts.enumStruct({
            new: Perbill,
        }),
        set_on_demand_ttl: sts.enumStruct({
            new: sts.number(),
        }),
        set_paras_availability_period: sts.enumStruct({
            new: sts.number(),
        }),
        set_pvf_voting_ttl: sts.enumStruct({
            new: sts.number(),
        }),
        set_relay_vrf_modulo_samples: sts.enumStruct({
            new: sts.number(),
        }),
        set_scheduling_lookahead: sts.enumStruct({
            new: sts.number(),
        }),
        set_validation_upgrade_cooldown: sts.enumStruct({
            new: sts.number(),
        }),
        set_validation_upgrade_delay: sts.enumStruct({
            new: sts.number(),
        }),
        set_zeroth_delay_tranche_width: sts.enumStruct({
            new: sts.number(),
        }),
    }
})

export const V5ExecutorParam: sts.Type<V5ExecutorParam> = sts.closedEnum(() => {
    return  {
        MaxMemoryPages: sts.number(),
        PrecheckingMaxMemory: sts.bigint(),
        PvfExecTimeout: sts.tuple(() => [V5PvfExecTimeoutKind, sts.bigint()]),
        PvfPrepTimeout: sts.tuple(() => [V5PvfPrepTimeoutKind, sts.bigint()]),
        StackLogicalMax: sts.number(),
        StackNativeMax: sts.number(),
        WasmExtBulkMemory: sts.unit(),
    }
})

export const V5PvfPrepTimeoutKind: sts.Type<V5PvfPrepTimeoutKind> = sts.closedEnum(() => {
    return  {
        Lenient: sts.unit(),
        Precheck: sts.unit(),
    }
})

export type V5PvfPrepTimeoutKind = V5PvfPrepTimeoutKind_Lenient | V5PvfPrepTimeoutKind_Precheck

export interface V5PvfPrepTimeoutKind_Lenient {
    __kind: 'Lenient'
}

export interface V5PvfPrepTimeoutKind_Precheck {
    __kind: 'Precheck'
}

export const V5PvfExecTimeoutKind: sts.Type<V5PvfExecTimeoutKind> = sts.closedEnum(() => {
    return  {
        Approval: sts.unit(),
        Backing: sts.unit(),
    }
})

export type V5PvfExecTimeoutKind = V5PvfExecTimeoutKind_Approval | V5PvfExecTimeoutKind_Backing

export interface V5PvfExecTimeoutKind_Approval {
    __kind: 'Approval'
}

export interface V5PvfExecTimeoutKind_Backing {
    __kind: 'Backing'
}

export type V5ExecutorParam = V5ExecutorParam_MaxMemoryPages | V5ExecutorParam_PrecheckingMaxMemory | V5ExecutorParam_PvfExecTimeout | V5ExecutorParam_PvfPrepTimeout | V5ExecutorParam_StackLogicalMax | V5ExecutorParam_StackNativeMax | V5ExecutorParam_WasmExtBulkMemory

export interface V5ExecutorParam_MaxMemoryPages {
    __kind: 'MaxMemoryPages'
    value: number
}

export interface V5ExecutorParam_PrecheckingMaxMemory {
    __kind: 'PrecheckingMaxMemory'
    value: bigint
}

export interface V5ExecutorParam_PvfExecTimeout {
    __kind: 'PvfExecTimeout'
    value: [V5PvfExecTimeoutKind, bigint]
}

export interface V5ExecutorParam_PvfPrepTimeout {
    __kind: 'PvfPrepTimeout'
    value: [V5PvfPrepTimeoutKind, bigint]
}

export interface V5ExecutorParam_StackLogicalMax {
    __kind: 'StackLogicalMax'
    value: number
}

export interface V5ExecutorParam_StackNativeMax {
    __kind: 'StackNativeMax'
    value: number
}

export interface V5ExecutorParam_WasmExtBulkMemory {
    __kind: 'WasmExtBulkMemory'
}

export const AsyncBackingParams: sts.Type<AsyncBackingParams> = sts.struct(() => {
    return  {
        maxCandidateDepth: sts.number(),
        allowedAncestryLen: sts.number(),
    }
})

export interface AsyncBackingParams {
    maxCandidateDepth: number
    allowedAncestryLen: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ConfigurationCall = ConfigurationCall_set_async_backing_params | ConfigurationCall_set_bypass_consistency_check | ConfigurationCall_set_code_retention_period | ConfigurationCall_set_dispute_period | ConfigurationCall_set_dispute_post_conclusion_acceptance_period | ConfigurationCall_set_executor_params | ConfigurationCall_set_group_rotation_frequency | ConfigurationCall_set_hrmp_channel_max_capacity | ConfigurationCall_set_hrmp_channel_max_message_size | ConfigurationCall_set_hrmp_channel_max_total_size | ConfigurationCall_set_hrmp_max_message_num_per_candidate | ConfigurationCall_set_hrmp_max_parachain_inbound_channels | ConfigurationCall_set_hrmp_max_parachain_outbound_channels | ConfigurationCall_set_hrmp_open_request_ttl | ConfigurationCall_set_hrmp_recipient_deposit | ConfigurationCall_set_hrmp_sender_deposit | ConfigurationCall_set_max_code_size | ConfigurationCall_set_max_downward_message_size | ConfigurationCall_set_max_head_data_size | ConfigurationCall_set_max_pov_size | ConfigurationCall_set_max_upward_message_num_per_candidate | ConfigurationCall_set_max_upward_message_size | ConfigurationCall_set_max_upward_queue_count | ConfigurationCall_set_max_upward_queue_size | ConfigurationCall_set_max_validators | ConfigurationCall_set_max_validators_per_core | ConfigurationCall_set_minimum_backing_votes | ConfigurationCall_set_minimum_validation_upgrade_delay | ConfigurationCall_set_n_delay_tranches | ConfigurationCall_set_needed_approvals | ConfigurationCall_set_no_show_slots | ConfigurationCall_set_on_demand_base_fee | ConfigurationCall_set_on_demand_cores | ConfigurationCall_set_on_demand_fee_variability | ConfigurationCall_set_on_demand_queue_max_size | ConfigurationCall_set_on_demand_retries | ConfigurationCall_set_on_demand_target_queue_utilization | ConfigurationCall_set_on_demand_ttl | ConfigurationCall_set_paras_availability_period | ConfigurationCall_set_pvf_voting_ttl | ConfigurationCall_set_relay_vrf_modulo_samples | ConfigurationCall_set_scheduling_lookahead | ConfigurationCall_set_validation_upgrade_cooldown | ConfigurationCall_set_validation_upgrade_delay | ConfigurationCall_set_zeroth_delay_tranche_width

/**
 * See [`Pallet::set_async_backing_params`].
 */
export interface ConfigurationCall_set_async_backing_params {
    __kind: 'set_async_backing_params'
    new: AsyncBackingParams
}

/**
 * See [`Pallet::set_bypass_consistency_check`].
 */
export interface ConfigurationCall_set_bypass_consistency_check {
    __kind: 'set_bypass_consistency_check'
    new: boolean
}

/**
 * See [`Pallet::set_code_retention_period`].
 */
export interface ConfigurationCall_set_code_retention_period {
    __kind: 'set_code_retention_period'
    new: number
}

/**
 * See [`Pallet::set_dispute_period`].
 */
export interface ConfigurationCall_set_dispute_period {
    __kind: 'set_dispute_period'
    new: number
}

/**
 * See [`Pallet::set_dispute_post_conclusion_acceptance_period`].
 */
export interface ConfigurationCall_set_dispute_post_conclusion_acceptance_period {
    __kind: 'set_dispute_post_conclusion_acceptance_period'
    new: number
}

/**
 * See [`Pallet::set_executor_params`].
 */
export interface ConfigurationCall_set_executor_params {
    __kind: 'set_executor_params'
    new: V5ExecutorParam[]
}

/**
 * See [`Pallet::set_group_rotation_frequency`].
 */
export interface ConfigurationCall_set_group_rotation_frequency {
    __kind: 'set_group_rotation_frequency'
    new: number
}

/**
 * See [`Pallet::set_hrmp_channel_max_capacity`].
 */
export interface ConfigurationCall_set_hrmp_channel_max_capacity {
    __kind: 'set_hrmp_channel_max_capacity'
    new: number
}

/**
 * See [`Pallet::set_hrmp_channel_max_message_size`].
 */
export interface ConfigurationCall_set_hrmp_channel_max_message_size {
    __kind: 'set_hrmp_channel_max_message_size'
    new: number
}

/**
 * See [`Pallet::set_hrmp_channel_max_total_size`].
 */
export interface ConfigurationCall_set_hrmp_channel_max_total_size {
    __kind: 'set_hrmp_channel_max_total_size'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_message_num_per_candidate`].
 */
export interface ConfigurationCall_set_hrmp_max_message_num_per_candidate {
    __kind: 'set_hrmp_max_message_num_per_candidate'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_parachain_inbound_channels`].
 */
export interface ConfigurationCall_set_hrmp_max_parachain_inbound_channels {
    __kind: 'set_hrmp_max_parachain_inbound_channels'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_parachain_outbound_channels`].
 */
export interface ConfigurationCall_set_hrmp_max_parachain_outbound_channels {
    __kind: 'set_hrmp_max_parachain_outbound_channels'
    new: number
}

/**
 * See [`Pallet::set_hrmp_open_request_ttl`].
 */
export interface ConfigurationCall_set_hrmp_open_request_ttl {
    __kind: 'set_hrmp_open_request_ttl'
    new: number
}

/**
 * See [`Pallet::set_hrmp_recipient_deposit`].
 */
export interface ConfigurationCall_set_hrmp_recipient_deposit {
    __kind: 'set_hrmp_recipient_deposit'
    new: bigint
}

/**
 * See [`Pallet::set_hrmp_sender_deposit`].
 */
export interface ConfigurationCall_set_hrmp_sender_deposit {
    __kind: 'set_hrmp_sender_deposit'
    new: bigint
}

/**
 * See [`Pallet::set_max_code_size`].
 */
export interface ConfigurationCall_set_max_code_size {
    __kind: 'set_max_code_size'
    new: number
}

/**
 * See [`Pallet::set_max_downward_message_size`].
 */
export interface ConfigurationCall_set_max_downward_message_size {
    __kind: 'set_max_downward_message_size'
    new: number
}

/**
 * See [`Pallet::set_max_head_data_size`].
 */
export interface ConfigurationCall_set_max_head_data_size {
    __kind: 'set_max_head_data_size'
    new: number
}

/**
 * See [`Pallet::set_max_pov_size`].
 */
export interface ConfigurationCall_set_max_pov_size {
    __kind: 'set_max_pov_size'
    new: number
}

/**
 * See [`Pallet::set_max_upward_message_num_per_candidate`].
 */
export interface ConfigurationCall_set_max_upward_message_num_per_candidate {
    __kind: 'set_max_upward_message_num_per_candidate'
    new: number
}

/**
 * See [`Pallet::set_max_upward_message_size`].
 */
export interface ConfigurationCall_set_max_upward_message_size {
    __kind: 'set_max_upward_message_size'
    new: number
}

/**
 * See [`Pallet::set_max_upward_queue_count`].
 */
export interface ConfigurationCall_set_max_upward_queue_count {
    __kind: 'set_max_upward_queue_count'
    new: number
}

/**
 * See [`Pallet::set_max_upward_queue_size`].
 */
export interface ConfigurationCall_set_max_upward_queue_size {
    __kind: 'set_max_upward_queue_size'
    new: number
}

/**
 * See [`Pallet::set_max_validators`].
 */
export interface ConfigurationCall_set_max_validators {
    __kind: 'set_max_validators'
    new?: (number | undefined)
}

/**
 * See [`Pallet::set_max_validators_per_core`].
 */
export interface ConfigurationCall_set_max_validators_per_core {
    __kind: 'set_max_validators_per_core'
    new?: (number | undefined)
}

/**
 * See [`Pallet::set_minimum_backing_votes`].
 */
export interface ConfigurationCall_set_minimum_backing_votes {
    __kind: 'set_minimum_backing_votes'
    new: number
}

/**
 * See [`Pallet::set_minimum_validation_upgrade_delay`].
 */
export interface ConfigurationCall_set_minimum_validation_upgrade_delay {
    __kind: 'set_minimum_validation_upgrade_delay'
    new: number
}

/**
 * See [`Pallet::set_n_delay_tranches`].
 */
export interface ConfigurationCall_set_n_delay_tranches {
    __kind: 'set_n_delay_tranches'
    new: number
}

/**
 * See [`Pallet::set_needed_approvals`].
 */
export interface ConfigurationCall_set_needed_approvals {
    __kind: 'set_needed_approvals'
    new: number
}

/**
 * See [`Pallet::set_no_show_slots`].
 */
export interface ConfigurationCall_set_no_show_slots {
    __kind: 'set_no_show_slots'
    new: number
}

/**
 * See [`Pallet::set_on_demand_base_fee`].
 */
export interface ConfigurationCall_set_on_demand_base_fee {
    __kind: 'set_on_demand_base_fee'
    new: bigint
}

/**
 * See [`Pallet::set_on_demand_cores`].
 */
export interface ConfigurationCall_set_on_demand_cores {
    __kind: 'set_on_demand_cores'
    new: number
}

/**
 * See [`Pallet::set_on_demand_fee_variability`].
 */
export interface ConfigurationCall_set_on_demand_fee_variability {
    __kind: 'set_on_demand_fee_variability'
    new: Perbill
}

/**
 * See [`Pallet::set_on_demand_queue_max_size`].
 */
export interface ConfigurationCall_set_on_demand_queue_max_size {
    __kind: 'set_on_demand_queue_max_size'
    new: number
}

/**
 * See [`Pallet::set_on_demand_retries`].
 */
export interface ConfigurationCall_set_on_demand_retries {
    __kind: 'set_on_demand_retries'
    new: number
}

/**
 * See [`Pallet::set_on_demand_target_queue_utilization`].
 */
export interface ConfigurationCall_set_on_demand_target_queue_utilization {
    __kind: 'set_on_demand_target_queue_utilization'
    new: Perbill
}

/**
 * See [`Pallet::set_on_demand_ttl`].
 */
export interface ConfigurationCall_set_on_demand_ttl {
    __kind: 'set_on_demand_ttl'
    new: number
}

/**
 * See [`Pallet::set_paras_availability_period`].
 */
export interface ConfigurationCall_set_paras_availability_period {
    __kind: 'set_paras_availability_period'
    new: number
}

/**
 * See [`Pallet::set_pvf_voting_ttl`].
 */
export interface ConfigurationCall_set_pvf_voting_ttl {
    __kind: 'set_pvf_voting_ttl'
    new: number
}

/**
 * See [`Pallet::set_relay_vrf_modulo_samples`].
 */
export interface ConfigurationCall_set_relay_vrf_modulo_samples {
    __kind: 'set_relay_vrf_modulo_samples'
    new: number
}

/**
 * See [`Pallet::set_scheduling_lookahead`].
 */
export interface ConfigurationCall_set_scheduling_lookahead {
    __kind: 'set_scheduling_lookahead'
    new: number
}

/**
 * See [`Pallet::set_validation_upgrade_cooldown`].
 */
export interface ConfigurationCall_set_validation_upgrade_cooldown {
    __kind: 'set_validation_upgrade_cooldown'
    new: number
}

/**
 * See [`Pallet::set_validation_upgrade_delay`].
 */
export interface ConfigurationCall_set_validation_upgrade_delay {
    __kind: 'set_validation_upgrade_delay'
    new: number
}

/**
 * See [`Pallet::set_zeroth_delay_tranche_width`].
 */
export interface ConfigurationCall_set_zeroth_delay_tranche_width {
    __kind: 'set_zeroth_delay_tranche_width'
    new: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ClaimsCall: sts.Type<ClaimsCall> = sts.closedEnum(() => {
    return  {
        attest: sts.enumStruct({
            statement: sts.bytes(),
        }),
        claim: sts.enumStruct({
            dest: AccountId32,
            ethereumSignature: EcdsaSignature,
        }),
        claim_attest: sts.enumStruct({
            dest: AccountId32,
            ethereumSignature: EcdsaSignature,
            statement: sts.bytes(),
        }),
        mint_claim: sts.enumStruct({
            who: EthereumAddress,
            value: sts.bigint(),
            vestingSchedule: sts.option(() => sts.tuple(() => [sts.bigint(), sts.bigint(), sts.number()])),
            statement: sts.option(() => StatementKind),
        }),
        move_claim: sts.enumStruct({
            old: EthereumAddress,
            new: EthereumAddress,
            maybePreclaim: sts.option(() => AccountId32),
        }),
    }
})

export const StatementKind: sts.Type<StatementKind> = sts.closedEnum(() => {
    return  {
        Regular: sts.unit(),
        Saft: sts.unit(),
    }
})

export type StatementKind = StatementKind_Regular | StatementKind_Saft

export interface StatementKind_Regular {
    __kind: 'Regular'
}

export interface StatementKind_Saft {
    __kind: 'Saft'
}

export const EthereumAddress = sts.bytes()

export const EcdsaSignature = sts.bytes()

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ClaimsCall = ClaimsCall_attest | ClaimsCall_claim | ClaimsCall_claim_attest | ClaimsCall_mint_claim | ClaimsCall_move_claim

/**
 * See [`Pallet::attest`].
 */
export interface ClaimsCall_attest {
    __kind: 'attest'
    statement: Bytes
}

/**
 * See [`Pallet::claim`].
 */
export interface ClaimsCall_claim {
    __kind: 'claim'
    dest: AccountId32
    ethereumSignature: EcdsaSignature
}

/**
 * See [`Pallet::claim_attest`].
 */
export interface ClaimsCall_claim_attest {
    __kind: 'claim_attest'
    dest: AccountId32
    ethereumSignature: EcdsaSignature
    statement: Bytes
}

/**
 * See [`Pallet::mint_claim`].
 */
export interface ClaimsCall_mint_claim {
    __kind: 'mint_claim'
    who: EthereumAddress
    value: bigint
    vestingSchedule?: ([bigint, bigint, number] | undefined)
    statement?: (StatementKind | undefined)
}

/**
 * See [`Pallet::move_claim`].
 */
export interface ClaimsCall_move_claim {
    __kind: 'move_claim'
    old: EthereumAddress
    new: EthereumAddress
    maybePreclaim?: (AccountId32 | undefined)
}

export type EthereumAddress = Bytes

export type EcdsaSignature = Bytes

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const ChildBountiesCall: sts.Type<ChildBountiesCall> = sts.closedEnum(() => {
    return  {
        accept_curator: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        }),
        add_child_bounty: sts.enumStruct({
            parentBountyId: sts.number(),
            value: sts.bigint(),
            description: sts.bytes(),
        }),
        award_child_bounty: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
            beneficiary: MultiAddress,
        }),
        claim_child_bounty: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        }),
        close_child_bounty: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        }),
        propose_curator: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
            curator: MultiAddress,
            fee: sts.bigint(),
        }),
        unassign_curator: sts.enumStruct({
            parentBountyId: sts.number(),
            childBountyId: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ChildBountiesCall = ChildBountiesCall_accept_curator | ChildBountiesCall_add_child_bounty | ChildBountiesCall_award_child_bounty | ChildBountiesCall_claim_child_bounty | ChildBountiesCall_close_child_bounty | ChildBountiesCall_propose_curator | ChildBountiesCall_unassign_curator

/**
 * See [`Pallet::accept_curator`].
 */
export interface ChildBountiesCall_accept_curator {
    __kind: 'accept_curator'
    parentBountyId: number
    childBountyId: number
}

/**
 * See [`Pallet::add_child_bounty`].
 */
export interface ChildBountiesCall_add_child_bounty {
    __kind: 'add_child_bounty'
    parentBountyId: number
    value: bigint
    description: Bytes
}

/**
 * See [`Pallet::award_child_bounty`].
 */
export interface ChildBountiesCall_award_child_bounty {
    __kind: 'award_child_bounty'
    parentBountyId: number
    childBountyId: number
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::claim_child_bounty`].
 */
export interface ChildBountiesCall_claim_child_bounty {
    __kind: 'claim_child_bounty'
    parentBountyId: number
    childBountyId: number
}

/**
 * See [`Pallet::close_child_bounty`].
 */
export interface ChildBountiesCall_close_child_bounty {
    __kind: 'close_child_bounty'
    parentBountyId: number
    childBountyId: number
}

/**
 * See [`Pallet::propose_curator`].
 */
export interface ChildBountiesCall_propose_curator {
    __kind: 'propose_curator'
    parentBountyId: number
    childBountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * See [`Pallet::unassign_curator`].
 */
export interface ChildBountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    parentBountyId: number
    childBountyId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BountiesCall: sts.Type<BountiesCall> = sts.closedEnum(() => {
    return  {
        accept_curator: sts.enumStruct({
            bountyId: sts.number(),
        }),
        approve_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        award_bounty: sts.enumStruct({
            bountyId: sts.number(),
            beneficiary: MultiAddress,
        }),
        claim_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        close_bounty: sts.enumStruct({
            bountyId: sts.number(),
        }),
        extend_bounty_expiry: sts.enumStruct({
            bountyId: sts.number(),
            remark: sts.bytes(),
        }),
        propose_bounty: sts.enumStruct({
            value: sts.bigint(),
            description: sts.bytes(),
        }),
        propose_curator: sts.enumStruct({
            bountyId: sts.number(),
            curator: MultiAddress,
            fee: sts.bigint(),
        }),
        unassign_curator: sts.enumStruct({
            bountyId: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BountiesCall = BountiesCall_accept_curator | BountiesCall_approve_bounty | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry | BountiesCall_propose_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator

/**
 * See [`Pallet::accept_curator`].
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 * See [`Pallet::approve_bounty`].
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 * See [`Pallet::award_bounty`].
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::claim_bounty`].
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 * See [`Pallet::close_bounty`].
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 * See [`Pallet::extend_bounty_expiry`].
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Bytes
}

/**
 * See [`Pallet::propose_bounty`].
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Bytes
}

/**
 * See [`Pallet::propose_curator`].
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * See [`Pallet::unassign_curator`].
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BeefyCall: sts.Type<BeefyCall> = sts.closedEnum(() => {
    return  {
        report_equivocation: sts.enumStruct({
            equivocationProof: Type_95,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: Type_95,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const Type_95: sts.Type<Type_95> = sts.struct(() => {
    return  {
        first: VoteMessage,
        second: VoteMessage,
    }
})

export const VoteMessage: sts.Type<VoteMessage> = sts.struct(() => {
    return  {
        commitment: Commitment,
        id: sts.bytes(),
        signature: Signature,
    }
})

export const Signature = sts.bytes()

export const Commitment: sts.Type<Commitment> = sts.struct(() => {
    return  {
        payload: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        blockNumber: sts.number(),
        validatorSetId: sts.bigint(),
    }
})

export interface Commitment {
    payload: [Bytes, Bytes][]
    blockNumber: number
    validatorSetId: bigint
}

export interface VoteMessage {
    commitment: Commitment
    id: Bytes
    signature: Signature
}

export type Signature = Bytes

export interface Type_95 {
    first: VoteMessage
    second: VoteMessage
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BeefyCall = BeefyCall_report_equivocation | BeefyCall_report_equivocation_unsigned

/**
 * See [`Pallet::report_equivocation`].
 */
export interface BeefyCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_95
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::report_equivocation_unsigned`].
 */
export interface BeefyCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_95
    keyOwnerProof: MembershipProof
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_set_balance: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
        }),
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        set_balance_deprecated: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
            oldReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_allow_death: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        upgrade_accounts: sts.enumStruct({
            who: sts.array(() => AccountId32),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall = BalancesCall_force_set_balance | BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_set_balance_deprecated | BalancesCall_transfer | BalancesCall_transfer_all | BalancesCall_transfer_allow_death | BalancesCall_transfer_keep_alive | BalancesCall_upgrade_accounts

/**
 * See [`Pallet::force_set_balance`].
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::force_unreserve`].
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::set_balance_deprecated`].
 */
export interface BalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * See [`Pallet::transfer`].
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * See [`Pallet::transfer_allow_death`].
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::upgrade_accounts`].
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: AccountId32[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const BabeCall: sts.Type<BabeCall> = sts.closedEnum(() => {
    return  {
        plan_config_change: sts.enumStruct({
            config: NextConfigDescriptor,
        }),
        report_equivocation: sts.enumStruct({
            equivocationProof: EquivocationProof,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: EquivocationProof,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const EquivocationProof: sts.Type<EquivocationProof> = sts.struct(() => {
    return  {
        offender: sts.bytes(),
        slot: Slot,
        firstHeader: Header,
        secondHeader: Header,
    }
})

export const Slot = sts.bigint()

export interface EquivocationProof {
    offender: Bytes
    slot: Slot
    firstHeader: Header
    secondHeader: Header
}

export type Slot = bigint

export const NextConfigDescriptor: sts.Type<NextConfigDescriptor> = sts.closedEnum(() => {
    return  {
        V1: sts.enumStruct({
            c: sts.tuple(() => [sts.bigint(), sts.bigint()]),
            allowedSlots: AllowedSlots,
        }),
    }
})

export const AllowedSlots: sts.Type<AllowedSlots> = sts.closedEnum(() => {
    return  {
        PrimaryAndSecondaryPlainSlots: sts.unit(),
        PrimaryAndSecondaryVRFSlots: sts.unit(),
        PrimarySlots: sts.unit(),
    }
})

export type AllowedSlots = AllowedSlots_PrimaryAndSecondaryPlainSlots | AllowedSlots_PrimaryAndSecondaryVRFSlots | AllowedSlots_PrimarySlots

export interface AllowedSlots_PrimaryAndSecondaryPlainSlots {
    __kind: 'PrimaryAndSecondaryPlainSlots'
}

export interface AllowedSlots_PrimaryAndSecondaryVRFSlots {
    __kind: 'PrimaryAndSecondaryVRFSlots'
}

export interface AllowedSlots_PrimarySlots {
    __kind: 'PrimarySlots'
}

export type NextConfigDescriptor = NextConfigDescriptor_V1

export interface NextConfigDescriptor_V1 {
    __kind: 'V1'
    c: [bigint, bigint]
    allowedSlots: AllowedSlots
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BabeCall = BabeCall_plan_config_change | BabeCall_report_equivocation | BabeCall_report_equivocation_unsigned

/**
 * See [`Pallet::plan_config_change`].
 */
export interface BabeCall_plan_config_change {
    __kind: 'plan_config_change'
    config: NextConfigDescriptor
}

/**
 * See [`Pallet::report_equivocation`].
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::report_equivocation_unsigned`].
 */
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export const AuctionsCall: sts.Type<AuctionsCall> = sts.closedEnum(() => {
    return  {
        bid: sts.enumStruct({
            para: sts.number(),
            auctionIndex: sts.number(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
            amount: sts.bigint(),
        }),
        cancel_auction: sts.unit(),
        new_auction: sts.enumStruct({
            duration: sts.number(),
            leasePeriodIndex: sts.number(),
        }),
    }
})

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AuctionsCall = AuctionsCall_bid | AuctionsCall_cancel_auction | AuctionsCall_new_auction

/**
 * See [`Pallet::bid`].
 */
export interface AuctionsCall_bid {
    __kind: 'bid'
    para: number
    auctionIndex: number
    firstSlot: number
    lastSlot: number
    amount: bigint
}

/**
 * See [`Pallet::cancel_auction`].
 */
export interface AuctionsCall_cancel_auction {
    __kind: 'cancel_auction'
}

/**
 * See [`Pallet::new_auction`].
 */
export interface AuctionsCall_new_auction {
    __kind: 'new_auction'
    duration: number
    leasePeriodIndex: number
}

export type Call = Call_Auctions | Call_Babe | Call_Balances | Call_Beefy | Call_Bounties | Call_ChildBounties | Call_Claims | Call_Configuration | Call_ConvictionVoting | Call_Crowdloan | Call_ElectionProviderMultiPhase | Call_FastUnstake | Call_FellowshipCollective | Call_FellowshipReferenda | Call_Grandpa | Call_Hrmp | Call_Identity | Call_ImOnline | Call_Indices | Call_Initializer | Call_MessageQueue | Call_Multisig | Call_Nis | Call_NisCounterpartBalances | Call_NominationPools | Call_ParaInclusion | Call_ParaInherent | Call_Paras | Call_ParasDisputes | Call_ParasShared | Call_ParasSlashing | Call_Preimage | Call_Proxy | Call_Recovery | Call_Referenda | Call_Registrar | Call_Scheduler | Call_Session | Call_Slots | Call_Society | Call_Staking | Call_StateTrieMigration | Call_System | Call_Timestamp | Call_Treasury | Call_Utility | Call_Vesting | Call_VoterList | Call_Whitelist | Call_XcmPallet

export interface Call_Auctions {
    __kind: 'Auctions'
    value: AuctionsCall
}

export interface Call_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Beefy {
    __kind: 'Beefy'
    value: BeefyCall
}

export interface Call_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Call_ChildBounties {
    __kind: 'ChildBounties'
    value: ChildBountiesCall
}

export interface Call_Claims {
    __kind: 'Claims'
    value: ClaimsCall
}

export interface Call_Configuration {
    __kind: 'Configuration'
    value: ConfigurationCall
}

export interface Call_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingCall
}

export interface Call_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanCall
}

export interface Call_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseCall
}

export interface Call_FastUnstake {
    __kind: 'FastUnstake'
    value: FastUnstakeCall
}

export interface Call_FellowshipCollective {
    __kind: 'FellowshipCollective'
    value: FellowshipCollectiveCall
}

export interface Call_FellowshipReferenda {
    __kind: 'FellowshipReferenda'
    value: FellowshipReferendaCall
}

export interface Call_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Call_Hrmp {
    __kind: 'Hrmp'
    value: HrmpCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Call_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Call_Initializer {
    __kind: 'Initializer'
    value: InitializerCall
}

export interface Call_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Nis {
    __kind: 'Nis'
    value: NisCall
}

export interface Call_NisCounterpartBalances {
    __kind: 'NisCounterpartBalances'
    value: NisCounterpartBalancesCall
}

export interface Call_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsCall
}

export interface Call_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionCall
}

export interface Call_ParaInherent {
    __kind: 'ParaInherent'
    value: ParaInherentCall
}

export interface Call_Paras {
    __kind: 'Paras'
    value: ParasCall
}

export interface Call_ParasDisputes {
    __kind: 'ParasDisputes'
    value: ParasDisputesCall
}

export interface Call_ParasShared {
    __kind: 'ParasShared'
    value: ParasSharedCall
}

export interface Call_ParasSlashing {
    __kind: 'ParasSlashing'
    value: ParasSlashingCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Recovery {
    __kind: 'Recovery'
    value: RecoveryCall
}

export interface Call_Referenda {
    __kind: 'Referenda'
    value: ReferendaCall
}

export interface Call_Registrar {
    __kind: 'Registrar'
    value: RegistrarCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Slots {
    __kind: 'Slots'
    value: SlotsCall
}

export interface Call_Society {
    __kind: 'Society'
    value: SocietyCall
}

export interface Call_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Call_StateTrieMigration {
    __kind: 'StateTrieMigration'
    value: StateTrieMigrationCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_VoterList {
    __kind: 'VoterList'
    value: VoterListCall
}

export interface Call_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistCall
}

export interface Call_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletCall
}

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Auction: sts.unit(),
        CancelProxy: sts.unit(),
        Governance: sts.unit(),
        IdentityJudgement: sts.unit(),
        NominationPools: sts.unit(),
        NonTransfer: sts.unit(),
        Society: sts.unit(),
        Staking: sts.unit(),
    }
})

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
        Raw: sts.bytes(),
    }
})
