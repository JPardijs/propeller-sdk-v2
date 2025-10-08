import { Taxcode } from '../enum/Taxcode';
/**
 Object class for Tax
 */
export declare class Tax {
    /** Tax primary identifier */
    private _id;
    /** Shop identifier for the tax to apply to */
    private _shopId;
    /** Tax code */
    private _code?;
    /** Tax zone */
    private _zone;
    /** Tax percentage  */
    private _percentage?;
    /** Tax export code */
    private _exportCode?;
    /** Tax initial creation timestamp */
    private _createdAt;
    /** Reference to the user that created the tax initially */
    private _createdBy?;
    /** Tax last update timestamp */
    private _lastModifiedAt;
    /** Reference to the user that last modified the tax */
    private _lastModifiedBy?;
    /**
     Creates a new instance of Tax
     */
    constructor(data?: Partial<Tax>);
    /**
     Tax primary identifier
     */
    get id(): string;
    /**
     Tax primary identifier
     */
    set id(value: string);
    /**
     Shop identifier for the tax to apply to
     */
    get shopId(): number;
    /**
     Shop identifier for the tax to apply to
     */
    set shopId(value: number);
    /**
     Tax code
     */
    get code(): Taxcode | undefined;
    /**
     Tax code
     */
    set code(value: Taxcode | undefined);
    /**
     Tax zone
     */
    get zone(): string;
    /**
     Tax zone
     */
    set zone(value: string);
    /**
     Tax percentage
     */
    get percentage(): number | undefined;
    /**
     Tax percentage
     */
    set percentage(value: number | undefined);
    /**
     Tax export code
     */
    get exportCode(): string | undefined;
    /**
     Tax export code
     */
    set exportCode(value: string | undefined);
    /**
     Tax initial creation timestamp
     */
    get createdAt(): string;
    /**
     Tax initial creation timestamp
     */
    set createdAt(value: string);
    /**
     Reference to the user that created the tax initially
     */
    get createdBy(): number | undefined;
    /**
     Reference to the user that created the tax initially
     */
    set createdBy(value: number | undefined);
    /**
     Tax last update timestamp
     */
    get lastModifiedAt(): string;
    /**
     Tax last update timestamp
     */
    set lastModifiedAt(value: string);
    /**
     Reference to the user that last modified the tax
     */
    get lastModifiedBy(): number | undefined;
    /**
     Reference to the user that last modified the tax
     */
    set lastModifiedBy(value: number | undefined);
}
//# sourceMappingURL=Tax.d.ts.map