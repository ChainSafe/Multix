import assert from 'assert';
import {
  Chain,
  ChainContext,
  EventContext,
  Event,
  Result,
  Option,
} from './support';
import * as v9300 from './v9300';

export class MultisigNewMultisigEvent {
  private readonly _chain: Chain;
  private readonly event: Event;

  constructor(ctx: EventContext);
  constructor(ctx: ChainContext, event: Event);
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event;
    assert(event.name === 'Multisig.NewMultisig');
    this._chain = ctx._chain;
    this.event = event;
  }

  /**
   * A new multisig operation has begun.
   */
  get isV9190(): boolean {
    return (
      this._chain.getEventHash('Multisig.NewMultisig') ===
      '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
    );
  }

  /**
   * A new multisig operation has begun.
   */
  get asV9190(): {
    approving: Uint8Array;
    multisig: Uint8Array;
    callHash: Uint8Array;
  } {
    assert(this.isV9190);
    return this._chain.decodeEvent(this.event);
  }
}

export class ProxyPureCreatedEvent {
  private readonly _chain: Chain;
  private readonly event: Event;

  constructor(ctx: EventContext);
  constructor(ctx: ChainContext, event: Event);
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event;
    assert(event.name === 'Proxy.PureCreated');
    this._chain = ctx._chain;
    this.event = event;
  }

  /**
   * A pure account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get isV9300(): boolean {
    return (
      this._chain.getEventHash('Proxy.PureCreated') ===
      '70f97647f913d660994bbf6d1a9a00a2bf96fd3bcf17d035d56676b31e74ef97'
    );
  }

  /**
   * A pure account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get asV9300(): {
    pure: Uint8Array;
    who: Uint8Array;
    proxyType: v9300.ProxyType;
    disambiguationIndex: number;
  } {
    assert(this.isV9300);
    return this._chain.decodeEvent(this.event);
  }
}
