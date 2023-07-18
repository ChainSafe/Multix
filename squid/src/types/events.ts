import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v504 from './v504'
import * as v700 from './v700'
import * as v900 from './v900'
import * as v9320 from './v9320'

export class ProxyProxyAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.ProxyAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
     */
    get isV504(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === '98dc37cea92933e8a4989649046354170cf261e25000862e4ed5455149e482ba'
    }

    /**
     * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
     */
    get asV504(): [Uint8Array, Uint8Array, v504.ProxyType, number] {
        assert(this.isV504)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was added.
     */
    get isV700(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === '8bb20dbcc2fbecfd0e9095815cb6796030b29dacd64dafa6f4f52e972b951941'
    }

    /**
     * A proxy was added.
     */
    get asV700(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v700.ProxyType, delay: number} {
        assert(this.isV700)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyProxyRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.ProxyRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A proxy was removed.
     */
    get isV900(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === '8bb20dbcc2fbecfd0e9095815cb6796030b29dacd64dafa6f4f52e972b951941'
    }

    /**
     * A proxy was removed.
     */
    get asV900(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v900.ProxyType, delay: number} {
        assert(this.isV900)
        return this._chain.decodeEvent(this.event)
    }
}

export class ProxyPureCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.PureCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV9320(): boolean {
        return this._chain.getEventHash('Proxy.PureCreated') === '3b5c52bd107cca349a90eed5c2ce921ea8752b43660ab0b4783fae82bfd5c44a'
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV9320(): {pure: Uint8Array, who: Uint8Array, proxyType: v9320.ProxyType, disambiguationIndex: number} {
        assert(this.isV9320)
        return this._chain.decodeEvent(this.event)
    }
}
