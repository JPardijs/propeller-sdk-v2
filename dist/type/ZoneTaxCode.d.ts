import { Taxcode } from '../enum/Taxcode';
/**
 Object class for ZoneTaxCode
 */
export declare class ZoneTaxCode {
    /** Primary identifier */
    private _id;
    /** Price foreign identifier */
    private _priceId;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** Zone code */
    private _zone;
    /** Tax code for the specified zone */
    private _taxCode;
    /**
     Creates a new instance of ZoneTaxCode
     */
    constructor(data?: Partial<ZoneTaxCode>);
    /**
     Primary identifier
     */
    get id(): string;
    /**
     Primary identifier
     */
    set id(value: string);
    /**
     Price foreign identifier
     */
    get priceId(): string;
    /**
     Price foreign identifier
     */
    set priceId(value: string);
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
     Zone code
     */
    get zone(): string;
    /**
     Zone code
     */
    set zone(value: string);
    /**
     Tax code for the specified zone
     */
    get taxCode(): Taxcode;
    /**
     Tax code for the specified zone
     */
    set taxCode(value: Taxcode);
}
//# sourceMappingURL=ZoneTaxCode.d.ts.map