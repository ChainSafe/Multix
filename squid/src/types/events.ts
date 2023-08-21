import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v2005 from './v2005'
import * as v9111 from './v9111'
import * as v9130 from './v9130'
import * as v9180 from './v9180'
import * as v9190 from './v9190'
import * as v9300 from './v9300'
import * as v9420 from './v9420'

export class ProxyAnonymousCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Proxy.AnonymousCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     *  Anonymous account (first parameter) has been created by new proxy (second) with given
     *  disambiguation index and proxy type.
     */
    get isV2005(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === 'b5f579b2faec49a28fb706144766dc4606348cb921ebad8faf9a4cea45bc2ed8'
    }

    /**
     *  Anonymous account (first parameter) has been created by new proxy (second) with given
     *  disambiguation index and proxy type.
     */
    get asV2005(): [Uint8Array, Uint8Array, v2005.ProxyType, number] {
        assert(this.isV2005)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV9130(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === '33f43c3f0d46bc1ed2ac1402b3dfbfdd80063a10b62812db2cbdb989ae7677b2'
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV9130(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v9130.ProxyType, disambiguationIndex: number} {
        assert(this.isV9130)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV9180(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === '91bdac7329ce72b1e0d554846f8b52d5cfa4d771778b94acf802ee242b14be58'
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV9180(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v9180.ProxyType, disambiguationIndex: number} {
        assert(this.isV9180)
        return this._chain.decodeEvent(this.event)
    }
}

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
    get isV9111(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === '4fac8b942563b27163fd7ece3d09cfc3b8410ae026ec89831bf64e9559cda031'
    }

    /**
     * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
     */
    get asV9111(): [Uint8Array, Uint8Array, v9111.ProxyType, number] {
        assert(this.isV9111)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was added.
     */
    get isV9130(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === 'a4f238e050a46a5e1a1a558cafb66167ab35f5eb690173826e77de0faccf7955'
    }

    /**
     * A proxy was added.
     */
    get asV9130(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v9130.ProxyType, delay: number} {
        assert(this.isV9130)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was added.
     */
    get isV9180(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === 'ae1ed48cc2f067f62d457535342e3b24e80855b64afe26af25eeb2d17602cf36'
    }

    /**
     * A proxy was added.
     */
    get asV9180(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v9180.ProxyType, delay: number} {
        assert(this.isV9180)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was added.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Proxy.ProxyAdded') === 'f4de253dbb3a2912e67e6bd54ef183234cf2db721e25f6dfea18839ba01d9b7d'
    }

    /**
     * A proxy was added.
     */
    get asV9420(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v9420.ProxyType, delay: number} {
        assert(this.isV9420)
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
    get isV9190(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === 'ae1ed48cc2f067f62d457535342e3b24e80855b64afe26af25eeb2d17602cf36'
    }

    /**
     * A proxy was removed.
     */
    get asV9190(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v9190.ProxyType, delay: number} {
        assert(this.isV9190)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A proxy was removed.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Proxy.ProxyRemoved') === 'f4de253dbb3a2912e67e6bd54ef183234cf2db721e25f6dfea18839ba01d9b7d'
    }

    /**
     * A proxy was removed.
     */
    get asV9420(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v9420.ProxyType, delay: number} {
        assert(this.isV9420)
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
    get isV9300(): boolean {
        return this._chain.getEventHash('Proxy.PureCreated') === 'feddd1f2bd26a6287ef80e55437a903a1419b7580dc9dd6ca0b1437d5c468a99'
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV9300(): {pure: Uint8Array, who: Uint8Array, proxyType: v9300.ProxyType, disambiguationIndex: number} {
        assert(this.isV9300)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV9420(): boolean {
        return this._chain.getEventHash('Proxy.PureCreated') === '3607d488229c8c9b71ce3f6232887b1c5fbbd08558f5415192746da837902463'
    }

    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV9420(): {pure: Uint8Array, who: Uint8Array, proxyType: v9420.ProxyType, disambiguationIndex: number} {
        assert(this.isV9420)
        return this._chain.decodeEvent(this.event)
    }
}
