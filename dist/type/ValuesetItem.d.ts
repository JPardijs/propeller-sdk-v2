import { LocalizedString } from './LocalizedString';
/**
 Object class for ValuesetItem
 */
export declare class ValuesetItem {
    /** Valueset item primary identifier */
    private _id;
    /** Valueset foreign identifier */
    private _valuesetId;
    /** Valueset item value */
    private _value;
    /** descriptions field */
    private _descriptions;
    /** Valueset item extra value */
    private _extra?;
    /**
     Creates a new instance of ValuesetItem
     */
    constructor(data?: Partial<ValuesetItem>);
    /**
     Valueset item primary identifier
     */
    get id(): number;
    /**
     Valueset item primary identifier
     */
    set id(value: number);
    /**
     Valueset foreign identifier
     */
    get valuesetId(): number;
    /**
     Valueset foreign identifier
     */
    set valuesetId(value: number);
    /**
     Valueset item value
     */
    get value(): string;
    /**
     Valueset item value
     */
    set value(value: string);
    /**
     descriptions field
     */
    get descriptions(): LocalizedString[];
    /**
     descriptions field
     */
    set descriptions(value: LocalizedString[]);
    /**
     Valueset item extra value
     */
    get extra(): string | undefined;
    /**
     Valueset item extra value
     */
    set extra(value: string | undefined);
}
//# sourceMappingURL=ValuesetItem.d.ts.map