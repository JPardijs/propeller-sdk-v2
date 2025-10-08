import { CarrierType } from '../enum/CarrierType';
import { LocalizedString } from './LocalizedString';
import { TrackAndTrace } from './TrackAndTrace';
import { Warehouse } from './Warehouse';
/**
 Object class for Carrier
 */
export declare class Carrier {
    /** Carrier primary identifier */
    private _id;
    /** Carrier name */
    private _name;
    /** Carrier type */
    private _type;
    /** Carrier description per language */
    private _descriptions?;
    /** shippingCost field */
    /** @deprecated Deprecated in favor Propeller's business rule builder, where logic can be set up for carriers and more complex use cases */
    private _shippingCost;
    /** Track and Trace redirect URL */
    private _trackAndTraceURL?;
    /** Logo url */
    private _logo?;
    /** Carrier creation date */
    private _createdAt;
    /** Carrier last modified date */
    private _lastModifiedAt;
    /** The userId of the user that created the carrier */
    private _createdBy?;
    /** The userId of the user that last modified the carrier */
    private _lastModifiedBy?;
    /** Get all track and traces for a carrier */
    private _trackAndTraces;
    /** warehouses field */
    private _warehouses?;
    /**
     Creates a new instance of Carrier
     */
    constructor(data?: Partial<Carrier>);
    /**
     Carrier primary identifier
     */
    get id(): number;
    /**
     Carrier primary identifier
     */
    set id(value: number);
    /**
     Carrier name
     */
    get name(): string;
    /**
     Carrier name
     */
    set name(value: string);
    /**
     Carrier type
     */
    get type(): CarrierType;
    /**
     Carrier type
     */
    set type(value: CarrierType);
    /**
     Carrier description per language
     */
    get descriptions(): LocalizedString[] | undefined;
    /**
     Carrier description per language
     */
    set descriptions(value: LocalizedString[] | undefined);
    /**
     shippingCost field
     */
    get shippingCost(): number;
    /**
     shippingCost field
     */
    set shippingCost(value: number);
    /**
     Track and Trace redirect URL
     */
    get trackAndTraceURL(): string | undefined;
    /**
     Track and Trace redirect URL
     */
    set trackAndTraceURL(value: string | undefined);
    /**
     Logo url
     */
    get logo(): string | undefined;
    /**
     Logo url
     */
    set logo(value: string | undefined);
    /**
     Carrier creation date
     */
    get createdAt(): string;
    /**
     Carrier creation date
     */
    set createdAt(value: string);
    /**
     Carrier last modified date
     */
    get lastModifiedAt(): string;
    /**
     Carrier last modified date
     */
    set lastModifiedAt(value: string);
    /**
     The userId of the user that created the carrier
     */
    get createdBy(): number | undefined;
    /**
     The userId of the user that created the carrier
     */
    set createdBy(value: number | undefined);
    /**
     The userId of the user that last modified the carrier
     */
    get lastModifiedBy(): number | undefined;
    /**
     The userId of the user that last modified the carrier
     */
    set lastModifiedBy(value: number | undefined);
    /**
     Get all track and traces for a carrier
     */
    get trackAndTraces(): TrackAndTrace[];
    /**
     Get all track and traces for a carrier
     */
    set trackAndTraces(value: TrackAndTrace[]);
    /**
     warehouses field
     */
    get warehouses(): Warehouse[] | undefined;
    /**
     warehouses field
     */
    set warehouses(value: Warehouse[] | undefined);
}
//# sourceMappingURL=Carrier.d.ts.map