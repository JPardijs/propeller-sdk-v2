import { SurchargeType } from '../enum/SurchargeType';
import { Taxcode } from '../enum/Taxcode';
import { LocalizedString } from './LocalizedString';
/**
 Additional fee or charge applied to products or orders
 * Surcharges represent extra costs such as handling fees, special processing charges, or additional services that are applied to pricing calculations. They can be configured as flat fees or percentage-based charges with specific tax treatments and validity periods.
 */
export declare class Surcharge {
    /** Unique identifier for the surcharge */
    private _id;
    /** A descriptive name for the surcharge */
    private _name;
    /** Detailed descriptions of the surcharge in different languages.
     * Provides additional context about the surcharge purpose and application across multiple languages for internationalization support. */
    private _description?;
    /** Classification of surcharge calculation method.
     * Determines how the surcharge value is applied to pricing calculations (flat fee or percentage-based). */
    private _type;
    /** Numeric value for surcharge calculation.
     * For flat fees: amount in currency units. For percentages: percentage value (e.g., 15.5 for 15.5%). */
    private _value;
    /** Tax classification code that determines applicable tax rates and regulations.
     * Specifies the tax treatment for the surcharge (H for high rate, L for low rate, N for no tax). */
    private _taxCode;
    /** Geographic tax zone identifier for regional tax calculations.
     * Two-character code representing the tax jurisdiction for compliance and rate determination. */
    private _taxZone;
    /** Activation status of the surcharge.
     * When true, the surcharge is active and will be applied to pricing calculations. When false, it is disabled. */
    private _enabled;
    /** Start date and time for surcharge validity period.
     * Surcharge will only be applied to orders after this timestamp. If not set, surcharge is immediately active. */
    private _validFrom?;
    /** End date and time for surcharge validity period.
     * Surcharge will not be applied to orders after this timestamp. If not set, surcharge remains active indefinitely. */
    private _validTo?;
    /** Identifier of the user who created the surcharge.
     * References the user account responsible for creating this surcharge record. */
    private _createdBy?;
    /** Identifier of the user who last modified the surcharge.
     * References the user account responsible for the most recent changes to this surcharge record. */
    private _changedBy?;
    /** Timestamp when the surcharge was created.
     * Automatically set when the surcharge record is first created in the system. */
    private _dateCreated;
    /** Timestamp when the surcharge was last modified.
     * Automatically updated whenever the surcharge record is changed in the system. */
    private _dateChanged;
    /** Shop identifier for surcharge application scope.
     * If not provided, the default shop will be inferred from the channel context. */
    private _shopId?;
    /**
     Creates a new instance of Surcharge
     */
    constructor(data?: Partial<Surcharge>);
    /**
     Unique identifier for the surcharge
     */
    get id(): string;
    /**
     Unique identifier for the surcharge
     */
    set id(value: string);
    /**
     A descriptive name for the surcharge
     */
    get name(): LocalizedString[];
    /**
     A descriptive name for the surcharge
     */
    set name(value: LocalizedString[]);
    /**
     A brief description of the surcharge
     */
    get description(): LocalizedString[] | undefined;
    /**
     A brief description of the surcharge
     */
    set description(value: LocalizedString[] | undefined);
    /**
     Type of surcharge
     */
    get type(): SurchargeType;
    /**
     Type of surcharge
     */
    set type(value: SurchargeType);
    /**
     The value to be applied as surcharge (e.g., percentage or amount)
     */
    get value(): number;
    /**
     The value to be applied as surcharge (e.g., percentage or amount)
     */
    set value(value: number);
    /**
     Tax code
     */
    get taxCode(): Taxcode;
    /**
     Tax code
     */
    set taxCode(value: Taxcode);
    /**
     Tax zone
     */
    get taxZone(): string;
    /**
     Tax zone
     */
    set taxZone(value: string);
    /**
     Indicates whether the surcharge is active or not
     */
    get enabled(): boolean;
    /**
     Indicates whether the surcharge is active or not
     */
    set enabled(value: boolean);
    /**
     The date and time the surcharge is valid from
     */
    get validFrom(): string | undefined;
    /**
     The date and time the surcharge is valid from
     */
    set validFrom(value: string | undefined);
    /**
     The date and time the surcharge is valid to
     */
    get validTo(): string | undefined;
    /**
     The date and time the surcharge is valid to
     */
    set validTo(value: string | undefined);
    /**
     The userId of the user that created the surcharge
     */
    get createdBy(): number | undefined;
    /**
     The userId of the user that created the surcharge
     */
    set createdBy(value: number | undefined);
    /**
     The userId of the user that changed the surcharge
     */
    get changedBy(): number | undefined;
    /**
     The userId of the user that changed the surcharge
     */
    set changedBy(value: number | undefined);
    /**
     The date and time the surcharge is created
     */
    get dateCreated(): string;
    /**
     The date and time the surcharge is created
     */
    set dateCreated(value: string);
    /**
     The date and time the surcharge is changed
     */
    get dateChanged(): string;
    /**
     The date and time the surcharge is changed
     */
    set dateChanged(value: string);
    /**
     Shop identifier for the tax to apply to... If not provided the default will be inferred from the channel
     */
    get shopId(): number | undefined;
    /**
     Shop identifier for the tax to apply to... If not provided the default will be inferred from the channel
     */
    set shopId(value: number | undefined);
}
//# sourceMappingURL=Surcharge.d.ts.map