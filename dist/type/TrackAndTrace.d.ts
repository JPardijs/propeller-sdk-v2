import { Carrier } from './Carrier';
/**
 Object class for TrackAndTrace
 */
export declare class TrackAndTrace {
    /** Carrier id */
    private _carrierId?;
    /** Get carrier for track and trace */
    private _carrier?;
    /** Unique identifier */
    private _id;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** Code */
    private _code;
    /** Shipment unique identifier */
    private _shipmentId;
    /**
     Creates a new instance of TrackAndTrace
     */
    constructor(data?: Partial<TrackAndTrace>);
    /**
     Carrier id
     */
    get carrierId(): number | undefined;
    /**
     Carrier id
     */
    set carrierId(value: number | undefined);
    /**
     Get carrier for track and trace
     */
    get carrier(): Carrier | undefined;
    /**
     Get carrier for track and trace
     */
    set carrier(value: Carrier | undefined);
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
     Code
     */
    get code(): string;
    /**
     Code
     */
    set code(value: string);
    /**
     Shipment unique identifier
     */
    get shipmentId(): string;
    /**
     Shipment unique identifier
     */
    set shipmentId(value: string);
}
//# sourceMappingURL=TrackAndTrace.d.ts.map