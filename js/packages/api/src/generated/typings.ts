/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type * as common from './../sourceTypes';
import type { Context } from './../context';
import type { core } from 'nexus';
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    pubkey<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>,
    ): void; // "PublicKey";
    /**
     * GraphQL representation of BigNumber
     */
    bn<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>,
    ): void; // "BN";
    buffer<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>,
    ): void; // "Buffer";
    uint8<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>,
    ): void; // "Uint8Array";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    pubkey<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "PublicKey";
    /**
     * GraphQL representation of BigNumber
     */
    bn<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "BN";
    buffer<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "Buffer";
    uint8<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "Uint8Array";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ArtworksInput: {
    // input type
    artId?: string | null; // String
    creatorId?: string | null; // String
    onlyVerified?: boolean | null; // Boolean
    ownerId?: string | null; // String
    storeId: string; // String!
  };
  AuctionsInput: {
    // input type
    participantId?: string | null; // String
    state?: NexusGenEnums['AuctionInputState'] | null; // AuctionInputState
    storeId?: string | null; // String
  };
}

export interface NexusGenEnums {
  AuctionInputState: 'all' | 'ended' | 'live' | 'resale';
  AuctionState: 0 | 2 | 1;
  BidStateType: 0 | 1;
  MetadataKey: 7 | 1 | 2 | 6 | 4 | 0;
  NonWinningConstraint: 2 | 1 | 0;
  PriceFloorType: 2 | 1 | 0;
  TupleNumericType: 1 | 2 | 4 | 8;
  VaultKey: 2 | 1 | 0 | 3;
  VaultState: 1 | 2 | 3 | 0;
  WinningConfigType: 1 | 4 | 2 | 3 | 0;
  WinningConstraint: 0 | 1;
}

export interface NexusGenScalars {
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  BN: any;
  Buffer: any;
  PublicKey: any;
  Uint8Array: any;
}

export interface NexusGenObjects {
  AmountRange: {
    // root type
    amount?: NexusGenScalars['BN'] | null; // BN
    length?: NexusGenScalars['BN'] | null; // BN
  };
  Artwork: common.Artwork;
  ArtworkCreator: {
    // root type
    address: NexusGenScalars['PublicKey']; // PublicKey!
    share: number; // Int!
    verified: boolean; // Boolean!
  };
  Auction: common.Auction;
  AuctionDataExtended: {
    // root type
    gapTickSizePercentage?: number | null; // Int
    tickSize?: NexusGenScalars['BN'] | null; // BN
    totalUncancelledBids?: NexusGenScalars['BN'] | null; // BN
  };
  AuctionManagerStateV1: {
    // root type
    status?: number | null; // Int
    winningConfigItemsValidated?: number | null; // Int
  };
  AuctionManagerStateV2: {
    // root type
    bidsPushedToAcceptPayment?: NexusGenScalars['BN'] | null; // BN
    hasParticipation?: boolean | null; // Boolean
    safetyConfigItemsValidated?: NexusGenScalars['BN'] | null; // BN
    status?: number | null; // Int
  };
  AuctionManagerV1: {
    // root type
    acceptPayment?: NexusGenScalars['PublicKey'] | null; // PublicKey
    auction?: NexusGenScalars['PublicKey'] | null; // PublicKey
    authority?: NexusGenScalars['PublicKey'] | null; // PublicKey
    key?: number | null; // Int
    state?: NexusGenRootTypes['AuctionManagerStateV1'] | null; // AuctionManagerStateV1
    store?: NexusGenScalars['PublicKey'] | null; // PublicKey
    vault?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AuctionManagerV2: {
    // root type
    acceptPayment?: NexusGenScalars['PublicKey'] | null; // PublicKey
    auction?: NexusGenScalars['PublicKey'] | null; // PublicKey
    authority?: NexusGenScalars['PublicKey'] | null; // PublicKey
    key?: number | null; // Int
    state?: NexusGenRootTypes['AuctionManagerStateV2'] | null; // AuctionManagerStateV2
    store?: NexusGenScalars['PublicKey'] | null; // PublicKey
    vault?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  Bid: {
    // root type
    amount?: NexusGenScalars['BN'] | null; // BN
    key?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  BidRedemptionTicket: {
    // root type
    key?: number | null; // Int
  };
  BidState: {
    // root type
    bids?: Array<NexusGenRootTypes['Bid'] | null> | null; // [Bid]
    max?: NexusGenScalars['BN'] | null; // BN
    type?: NexusGenEnums['BidStateType'] | null; // BidStateType
  };
  BidderMetadata: {
    // root type
    auctionPubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidderPubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
    cancelled?: boolean | null; // Boolean
    lastBid?: NexusGenScalars['BN'] | null; // BN
    lastBidTimestamp?: NexusGenScalars['BN'] | null; // BN
  };
  BidderPot: {
    // root type
    auctionAct?: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidderAct?: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidderPot?: NexusGenScalars['PublicKey'] | null; // PublicKey
    emptied?: boolean | null; // Boolean
  };
  Creator: common.Creator;
  Edition: {
    // root type
    edition?: NexusGenScalars['BN'] | null; // BN
    key?: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    parent?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  MasterEditionV1: {
    // root type
    key?: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    maxSupply?: NexusGenScalars['BN'] | null; // BN
    oneTimePrintingAuthorizationMint?: NexusGenScalars['PublicKey'] | null; // PublicKey
    printingMint?: NexusGenScalars['PublicKey'] | null; // PublicKey
    supply?: NexusGenScalars['BN'] | null; // BN
  };
  MasterEditionV2: {
    // root type
    key?: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    maxSupply?: NexusGenScalars['BN'] | null; // BN
    supply?: NexusGenScalars['BN'] | null; // BN
  };
  ParticipationConfigV2: {
    // root type
    fixedPrice?: NexusGenScalars['BN'] | null; // BN
    nonWinningConstraint?: NexusGenEnums['NonWinningConstraint'] | null; // NonWinningConstraint
    winnerConstraint?: NexusGenEnums['WinningConstraint'] | null; // WinningConstraint
  };
  ParticipationStateV2: {
    // root type
    collectedToAcceptPayment?: NexusGenScalars['BN'] | null; // BN
  };
  PayoutTicket: {
    // root type
    amountPaid?: NexusGenScalars['BN'] | null; // BN
    key?: number | null; // Int
    recipient?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  PriceFloor: {
    // root type
    hash?: NexusGenScalars['Uint8Array'] | null; // Uint8Array
    minPrice?: NexusGenScalars['BN'] | null; // BN
    type?: NexusGenEnums['PriceFloorType'] | null; // PriceFloorType
  };
  PrizeTrackingTicket: {
    // root type
    expectedRedemptions?: NexusGenScalars['BN'] | null; // BN
    key?: number | null; // Int
    metadata?: NexusGenScalars['PublicKey'] | null; // PublicKey
    redemptions?: NexusGenScalars['BN'] | null; // BN
    supplySnapshot?: NexusGenScalars['BN'] | null; // BN
  };
  Query: {};
  SafetyDepositBox: {
    // root type
    key?: NexusGenEnums['VaultKey'] | null; // VaultKey
    order?: number | null; // Int
    store?: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenMint?: NexusGenScalars['PublicKey'] | null; // PublicKey
    vault?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  SafetyDepositConfig: {
    // root type
    amountRanges?: Array<NexusGenRootTypes['AmountRange'] | null> | null; // [AmountRange]
    amountType?: NexusGenEnums['TupleNumericType'] | null; // TupleNumericType
    auctionManager?: NexusGenScalars['PublicKey'] | null; // PublicKey
    key?: number | null; // Int
    lengthType?: NexusGenEnums['TupleNumericType'] | null; // TupleNumericType
    order?: NexusGenScalars['BN'] | null; // BN
    participationConfig?: NexusGenRootTypes['ParticipationConfigV2'] | null; // ParticipationConfigV2
    participationState?: NexusGenRootTypes['ParticipationStateV2'] | null; // ParticipationStateV2
    winningConfigType?: NexusGenEnums['WinningConfigType'] | null; // WinningConfigType
  };
  Store: {
    // root type
    auctionProgram?: NexusGenScalars['PublicKey'] | null; // PublicKey
    key?: number | null; // Int
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
    public?: boolean | null; // Boolean
    tokenMetadataProgram?: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenProgram?: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenVaultProgram?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  Subscription: {};
  Vault: {
    // root type
    allowFurtherShareCreation?: boolean | null; // Boolean
    authority?: NexusGenScalars['PublicKey'] | null; // PublicKey
    fractionMint?: NexusGenScalars['PublicKey'] | null; // PublicKey
    fractionTreasury?: NexusGenScalars['PublicKey'] | null; // PublicKey
    key?: NexusGenEnums['VaultKey'] | null; // VaultKey
    lockedPricePerShare?: NexusGenScalars['BN'] | null; // BN
    pricingLookupAddress?: NexusGenScalars['PublicKey'] | null; // PublicKey
    redeemTreasury?: NexusGenScalars['PublicKey'] | null; // PublicKey
    state?: NexusGenEnums['VaultState'] | null; // VaultState
    tokenProgram?: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenTypeCount?: number | null; // Int
  };
}

export interface NexusGenInterfaces {}

export interface NexusGenUnions {
  AuctionManager:
    | NexusGenRootTypes['AuctionManagerV1']
    | NexusGenRootTypes['AuctionManagerV2'];
  MasterEdition:
    | NexusGenRootTypes['MasterEditionV1']
    | NexusGenRootTypes['MasterEditionV2'];
}

export type NexusGenRootTypes = NexusGenObjects & NexusGenUnions;

export type NexusGenAllTypes = NexusGenRootTypes &
  NexusGenScalars &
  NexusGenEnums;

export interface NexusGenFieldTypes {
  AmountRange: {
    // field return type
    amount: NexusGenScalars['BN'] | null; // BN
    length: NexusGenScalars['BN'] | null; // BN
  };
  Artwork: {
    // field return type
    creators: Array<NexusGenRootTypes['ArtworkCreator'] | null> | null; // [ArtworkCreator]
    edition: NexusGenScalars['BN'] | null; // BN
    maxSupply: NexusGenScalars['BN'] | null; // BN
    mint: NexusGenScalars['PublicKey'] | null; // PublicKey
    pubkey: NexusGenScalars['PublicKey']; // PublicKey!
    sellerFeeBasisPoints: number; // Int!
    supply: NexusGenScalars['BN'] | null; // BN
    title: string; // String!
    type: number; // Int!
    uri: string; // String!
  };
  ArtworkCreator: {
    // field return type
    address: NexusGenScalars['PublicKey']; // PublicKey!
    share: number; // Int!
    verified: boolean; // Boolean!
  };
  Auction: {
    // field return type
    auctionGap: NexusGenScalars['BN'] | null; // BN
    authority: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidRedemptionKey: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidState: NexusGenRootTypes['BidState'] | null; // BidState
    endAuctionAt: NexusGenScalars['BN'] | null; // BN
    endedAt: NexusGenScalars['BN'] | null; // BN
    highestBid: NexusGenRootTypes['BidderMetadata'] | null; // BidderMetadata
    lastBid: NexusGenScalars['BN'] | null; // BN
    manager: NexusGenRootTypes['AuctionManager'] | null; // AuctionManager
    numWinners: NexusGenScalars['BN'] | null; // BN
    priceFloor: NexusGenRootTypes['PriceFloor'] | null; // PriceFloor
    pubkey: NexusGenScalars['PublicKey']; // PublicKey!
    state: NexusGenEnums['AuctionState'] | null; // AuctionState
    tokenMint: NexusGenScalars['PublicKey'] | null; // PublicKey
    trumbnail: NexusGenRootTypes['Artwork'] | null; // Artwork
  };
  AuctionDataExtended: {
    // field return type
    gapTickSizePercentage: number | null; // Int
    tickSize: NexusGenScalars['BN'] | null; // BN
    totalUncancelledBids: NexusGenScalars['BN'] | null; // BN
  };
  AuctionManagerStateV1: {
    // field return type
    status: number | null; // Int
    winningConfigItemsValidated: number | null; // Int
  };
  AuctionManagerStateV2: {
    // field return type
    bidsPushedToAcceptPayment: NexusGenScalars['BN'] | null; // BN
    hasParticipation: boolean | null; // Boolean
    safetyConfigItemsValidated: NexusGenScalars['BN'] | null; // BN
    status: number | null; // Int
  };
  AuctionManagerV1: {
    // field return type
    acceptPayment: NexusGenScalars['PublicKey'] | null; // PublicKey
    auction: NexusGenScalars['PublicKey'] | null; // PublicKey
    authority: NexusGenScalars['PublicKey'] | null; // PublicKey
    key: number | null; // Int
    state: NexusGenRootTypes['AuctionManagerStateV1'] | null; // AuctionManagerStateV1
    store: NexusGenScalars['PublicKey'] | null; // PublicKey
    vault: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AuctionManagerV2: {
    // field return type
    acceptPayment: NexusGenScalars['PublicKey'] | null; // PublicKey
    auction: NexusGenScalars['PublicKey'] | null; // PublicKey
    authority: NexusGenScalars['PublicKey'] | null; // PublicKey
    key: number | null; // Int
    state: NexusGenRootTypes['AuctionManagerStateV2'] | null; // AuctionManagerStateV2
    store: NexusGenScalars['PublicKey'] | null; // PublicKey
    vault: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  Bid: {
    // field return type
    amount: NexusGenScalars['BN'] | null; // BN
    key: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  BidRedemptionTicket: {
    // field return type
    key: number | null; // Int
  };
  BidState: {
    // field return type
    bids: Array<NexusGenRootTypes['Bid'] | null> | null; // [Bid]
    max: NexusGenScalars['BN'] | null; // BN
    type: NexusGenEnums['BidStateType'] | null; // BidStateType
  };
  BidderMetadata: {
    // field return type
    auctionPubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidderPubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
    cancelled: boolean | null; // Boolean
    lastBid: NexusGenScalars['BN'] | null; // BN
    lastBidTimestamp: NexusGenScalars['BN'] | null; // BN
  };
  BidderPot: {
    // field return type
    auctionAct: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidderAct: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidderPot: NexusGenScalars['PublicKey'] | null; // PublicKey
    emptied: boolean | null; // Boolean
  };
  Creator: {
    // field return type
    activated: boolean | null; // Boolean
    address: NexusGenScalars['PublicKey'] | null; // PublicKey
    key: number | null; // Int
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  Edition: {
    // field return type
    edition: NexusGenScalars['BN'] | null; // BN
    key: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    parent: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  MasterEditionV1: {
    // field return type
    key: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    maxSupply: NexusGenScalars['BN'] | null; // BN
    oneTimePrintingAuthorizationMint: NexusGenScalars['PublicKey'] | null; // PublicKey
    printingMint: NexusGenScalars['PublicKey'] | null; // PublicKey
    supply: NexusGenScalars['BN'] | null; // BN
  };
  MasterEditionV2: {
    // field return type
    key: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    maxSupply: NexusGenScalars['BN'] | null; // BN
    supply: NexusGenScalars['BN'] | null; // BN
  };
  ParticipationConfigV2: {
    // field return type
    fixedPrice: NexusGenScalars['BN'] | null; // BN
    nonWinningConstraint: NexusGenEnums['NonWinningConstraint'] | null; // NonWinningConstraint
    winnerConstraint: NexusGenEnums['WinningConstraint'] | null; // WinningConstraint
  };
  ParticipationStateV2: {
    // field return type
    collectedToAcceptPayment: NexusGenScalars['BN'] | null; // BN
  };
  PayoutTicket: {
    // field return type
    amountPaid: NexusGenScalars['BN'] | null; // BN
    key: number | null; // Int
    recipient: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  PriceFloor: {
    // field return type
    hash: NexusGenScalars['Uint8Array'] | null; // Uint8Array
    minPrice: NexusGenScalars['BN'] | null; // BN
    type: NexusGenEnums['PriceFloorType'] | null; // PriceFloorType
  };
  PrizeTrackingTicket: {
    // field return type
    expectedRedemptions: NexusGenScalars['BN'] | null; // BN
    key: number | null; // Int
    metadata: NexusGenScalars['PublicKey'] | null; // PublicKey
    redemptions: NexusGenScalars['BN'] | null; // BN
    supplySnapshot: NexusGenScalars['BN'] | null; // BN
  };
  Query: {
    // field return type
    artwork: NexusGenRootTypes['Artwork'] | null; // Artwork
    artworks: Array<NexusGenRootTypes['Artwork'] | null> | null; // [Artwork]
    artworksCount: number | null; // Int
    auction: NexusGenRootTypes['Auction'] | null; // Auction
    auctions: Array<NexusGenRootTypes['Auction'] | null> | null; // [Auction]
    auctionsCount: number | null; // Int
    creator: NexusGenRootTypes['Creator'] | null; // Creator
    creators: Array<NexusGenRootTypes['Creator'] | null> | null; // [Creator]
    creatorsCount: number | null; // Int
    store: NexusGenRootTypes['Store'] | null; // Store
    storesCount: number | null; // Int
  };
  SafetyDepositBox: {
    // field return type
    key: NexusGenEnums['VaultKey'] | null; // VaultKey
    order: number | null; // Int
    store: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenMint: NexusGenScalars['PublicKey'] | null; // PublicKey
    vault: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  SafetyDepositConfig: {
    // field return type
    amountRanges: Array<NexusGenRootTypes['AmountRange'] | null> | null; // [AmountRange]
    amountType: NexusGenEnums['TupleNumericType'] | null; // TupleNumericType
    auctionManager: NexusGenScalars['PublicKey'] | null; // PublicKey
    key: number | null; // Int
    lengthType: NexusGenEnums['TupleNumericType'] | null; // TupleNumericType
    order: NexusGenScalars['BN'] | null; // BN
    participationConfig: NexusGenRootTypes['ParticipationConfigV2'] | null; // ParticipationConfigV2
    participationState: NexusGenRootTypes['ParticipationStateV2'] | null; // ParticipationStateV2
    winningConfigType: NexusGenEnums['WinningConfigType'] | null; // WinningConfigType
  };
  Store: {
    // field return type
    auctionProgram: NexusGenScalars['PublicKey'] | null; // PublicKey
    key: number | null; // Int
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
    public: boolean | null; // Boolean
    tokenMetadataProgram: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenProgram: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenVaultProgram: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  Subscription: {
    // field return type
    truths: boolean | null; // Boolean
  };
  Vault: {
    // field return type
    allowFurtherShareCreation: boolean | null; // Boolean
    authority: NexusGenScalars['PublicKey'] | null; // PublicKey
    fractionMint: NexusGenScalars['PublicKey'] | null; // PublicKey
    fractionTreasury: NexusGenScalars['PublicKey'] | null; // PublicKey
    key: NexusGenEnums['VaultKey'] | null; // VaultKey
    lockedPricePerShare: NexusGenScalars['BN'] | null; // BN
    pricingLookupAddress: NexusGenScalars['PublicKey'] | null; // PublicKey
    redeemTreasury: NexusGenScalars['PublicKey'] | null; // PublicKey
    state: NexusGenEnums['VaultState'] | null; // VaultState
    tokenProgram: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenTypeCount: number | null; // Int
  };
}

export interface NexusGenFieldTypeNames {
  AmountRange: {
    // field return type name
    amount: 'BN';
    length: 'BN';
  };
  Artwork: {
    // field return type name
    creators: 'ArtworkCreator';
    edition: 'BN';
    maxSupply: 'BN';
    mint: 'PublicKey';
    pubkey: 'PublicKey';
    sellerFeeBasisPoints: 'Int';
    supply: 'BN';
    title: 'String';
    type: 'Int';
    uri: 'String';
  };
  ArtworkCreator: {
    // field return type name
    address: 'PublicKey';
    share: 'Int';
    verified: 'Boolean';
  };
  Auction: {
    // field return type name
    auctionGap: 'BN';
    authority: 'PublicKey';
    bidRedemptionKey: 'PublicKey';
    bidState: 'BidState';
    endAuctionAt: 'BN';
    endedAt: 'BN';
    highestBid: 'BidderMetadata';
    lastBid: 'BN';
    manager: 'AuctionManager';
    numWinners: 'BN';
    priceFloor: 'PriceFloor';
    pubkey: 'PublicKey';
    state: 'AuctionState';
    tokenMint: 'PublicKey';
    trumbnail: 'Artwork';
  };
  AuctionDataExtended: {
    // field return type name
    gapTickSizePercentage: 'Int';
    tickSize: 'BN';
    totalUncancelledBids: 'BN';
  };
  AuctionManagerStateV1: {
    // field return type name
    status: 'Int';
    winningConfigItemsValidated: 'Int';
  };
  AuctionManagerStateV2: {
    // field return type name
    bidsPushedToAcceptPayment: 'BN';
    hasParticipation: 'Boolean';
    safetyConfigItemsValidated: 'BN';
    status: 'Int';
  };
  AuctionManagerV1: {
    // field return type name
    acceptPayment: 'PublicKey';
    auction: 'PublicKey';
    authority: 'PublicKey';
    key: 'Int';
    state: 'AuctionManagerStateV1';
    store: 'PublicKey';
    vault: 'PublicKey';
  };
  AuctionManagerV2: {
    // field return type name
    acceptPayment: 'PublicKey';
    auction: 'PublicKey';
    authority: 'PublicKey';
    key: 'Int';
    state: 'AuctionManagerStateV2';
    store: 'PublicKey';
    vault: 'PublicKey';
  };
  Bid: {
    // field return type name
    amount: 'BN';
    key: 'PublicKey';
  };
  BidRedemptionTicket: {
    // field return type name
    key: 'Int';
  };
  BidState: {
    // field return type name
    bids: 'Bid';
    max: 'BN';
    type: 'BidStateType';
  };
  BidderMetadata: {
    // field return type name
    auctionPubkey: 'PublicKey';
    bidderPubkey: 'PublicKey';
    cancelled: 'Boolean';
    lastBid: 'BN';
    lastBidTimestamp: 'BN';
  };
  BidderPot: {
    // field return type name
    auctionAct: 'PublicKey';
    bidderAct: 'PublicKey';
    bidderPot: 'PublicKey';
    emptied: 'Boolean';
  };
  Creator: {
    // field return type name
    activated: 'Boolean';
    address: 'PublicKey';
    key: 'Int';
    pubkey: 'PublicKey';
  };
  Edition: {
    // field return type name
    edition: 'BN';
    key: 'MetadataKey';
    parent: 'PublicKey';
  };
  MasterEditionV1: {
    // field return type name
    key: 'MetadataKey';
    maxSupply: 'BN';
    oneTimePrintingAuthorizationMint: 'PublicKey';
    printingMint: 'PublicKey';
    supply: 'BN';
  };
  MasterEditionV2: {
    // field return type name
    key: 'MetadataKey';
    maxSupply: 'BN';
    supply: 'BN';
  };
  ParticipationConfigV2: {
    // field return type name
    fixedPrice: 'BN';
    nonWinningConstraint: 'NonWinningConstraint';
    winnerConstraint: 'WinningConstraint';
  };
  ParticipationStateV2: {
    // field return type name
    collectedToAcceptPayment: 'BN';
  };
  PayoutTicket: {
    // field return type name
    amountPaid: 'BN';
    key: 'Int';
    recipient: 'PublicKey';
  };
  PriceFloor: {
    // field return type name
    hash: 'Uint8Array';
    minPrice: 'BN';
    type: 'PriceFloorType';
  };
  PrizeTrackingTicket: {
    // field return type name
    expectedRedemptions: 'BN';
    key: 'Int';
    metadata: 'PublicKey';
    redemptions: 'BN';
    supplySnapshot: 'BN';
  };
  Query: {
    // field return type name
    artwork: 'Artwork';
    artworks: 'Artwork';
    artworksCount: 'Int';
    auction: 'Auction';
    auctions: 'Auction';
    auctionsCount: 'Int';
    creator: 'Creator';
    creators: 'Creator';
    creatorsCount: 'Int';
    store: 'Store';
    storesCount: 'Int';
  };
  SafetyDepositBox: {
    // field return type name
    key: 'VaultKey';
    order: 'Int';
    store: 'PublicKey';
    tokenMint: 'PublicKey';
    vault: 'PublicKey';
  };
  SafetyDepositConfig: {
    // field return type name
    amountRanges: 'AmountRange';
    amountType: 'TupleNumericType';
    auctionManager: 'PublicKey';
    key: 'Int';
    lengthType: 'TupleNumericType';
    order: 'BN';
    participationConfig: 'ParticipationConfigV2';
    participationState: 'ParticipationStateV2';
    winningConfigType: 'WinningConfigType';
  };
  Store: {
    // field return type name
    auctionProgram: 'PublicKey';
    key: 'Int';
    pubkey: 'PublicKey';
    public: 'Boolean';
    tokenMetadataProgram: 'PublicKey';
    tokenProgram: 'PublicKey';
    tokenVaultProgram: 'PublicKey';
  };
  Subscription: {
    // field return type name
    truths: 'Boolean';
  };
  Vault: {
    // field return type name
    allowFurtherShareCreation: 'Boolean';
    authority: 'PublicKey';
    fractionMint: 'PublicKey';
    fractionTreasury: 'PublicKey';
    key: 'VaultKey';
    lockedPricePerShare: 'BN';
    pricingLookupAddress: 'PublicKey';
    redeemTreasury: 'PublicKey';
    state: 'VaultState';
    tokenProgram: 'PublicKey';
    tokenTypeCount: 'Int';
  };
}

export interface NexusGenArgTypes {
  Query: {
    artwork: {
      // args
      artId: string; // String!
    };
    artworks: {
      // args
      filter: NexusGenInputs['ArtworksInput']; // ArtworksInput!
    };
    auction: {
      // args
      auctionId: string; // String!
    };
    auctions: {
      // args
      filter: NexusGenInputs['AuctionsInput']; // AuctionsInput!
    };
    creator: {
      // args
      creatorId: string; // String!
      storeId: string; // String!
    };
    creators: {
      // args
      storeId: string; // String!
    };
    store: {
      // args
      storeId: string; // String!
    };
  };
}

export interface NexusGenAbstractTypeMembers {
  AuctionManager: 'AuctionManagerV1' | 'AuctionManagerV2';
  MasterEdition: 'MasterEditionV1' | 'MasterEditionV2';
}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = keyof NexusGenUnions;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType =
  | 'AuctionManager'
  | 'MasterEdition';

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    resolveType: true;
    __typename: false;
    isTypeOf: false;
  };
};

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes['inputNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['scalarNames'];
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames'];
  allNamedTypes:
    | NexusGenTypes['allInputTypes']
    | NexusGenTypes['allOutputTypes'];
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string,
  > {}
  interface NexusGenPluginInputFieldConfig<
    TypeName extends string,
    FieldName extends string,
  > {}
  interface NexusGenPluginSchemaConfig {}
  interface NexusGenPluginArgConfig {}
}
