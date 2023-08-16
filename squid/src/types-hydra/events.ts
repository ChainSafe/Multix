import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v108 from './v108'

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
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get isV108(): boolean {
        return this._chain.getEventHash('Proxy.AnonymousCreated') === 'd68bb77c596bd04d1fa82878fa4822b7a9d5d809d308d61952e6c422a9f9e7c3'
    }

    /**
     * Anonymous account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    get asV108(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v108.ProxyType, disambiguationIndex: number} {
        assert(this.isV108)
        return this._chain.decodeEvent(this.event)
    }
}
