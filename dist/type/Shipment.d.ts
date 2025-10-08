import { ShipmentStatus } from '../enum/ShipmentStatus';
import { ShipmentItem } from './ShipmentItem';
import { TrackAndTrace } from './TrackAndTrace';
/**
 Object class for Shipment
 */
export declare class Shipment {
    /** Unique identifier */
    private _id;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** Expected delivery date */
    private _expectedDeliveryAt?;
    /** Shipment status */
    private _status?;
    /** The ID of the Order the shipment belongs to */
    private _orderId;
    /** Shipment items */
    private _items?;
    /** Track and traces */
    private _trackAndTraces?;
    /**
     Creates a new instance of Shipment
     */
    constructor(data?: Partial<Shipment>);
    /**
     Unique identifier
     */
    get id(): string;
    /**
     Unique identifier
     */
    set id(value: string);
    /**
     Creation date
     */
    get createdAt(): string;
    /**
     Creation date
     */
    set createdAt(value: string);
    /**
     Last modified date
     */
    get lastModifiedAt(): string;
    /**
     Last modified date
     */
    set lastModifiedAt(value: string);
    /**
     Expected delivery date
     */
    get expectedDeliveryAt(): string | undefined;
    /**
     Expected delivery date
     */
    set expectedDeliveryAt(value: string | undefined);
    /**
     Shipment status
     */
    get status(): ShipmentStatus | undefined;
    /**
     Shipment status
     */
    set status(value: ShipmentStatus | undefined);
    /**
     The ID of the Order the shipment belongs to
     */
    get orderId(): number;
    /**
     The ID of the Order the shipment belongs to
     */
    set orderId(value: number);
    /**
     Shipment items
     */
    get items(): ShipmentItem[] | undefined;
    /**
     Shipment items
     */
    set items(value: ShipmentItem[] | undefined);
    /**
     Track and traces
     */
    get trackAndTraces(): TrackAndTrace[] | undefined;
    /**
     Track and traces
     */
    set trackAndTraces(value: TrackAndTrace[] | undefined);
}
//# sourceMappingURL=Shipment.d.ts.map