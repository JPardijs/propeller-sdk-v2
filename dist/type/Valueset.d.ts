import { ValuesetType } from '../enum/ValuesetType';
import { LocalizedString } from './LocalizedString';
import { ValuesetItemResponse } from './ValuesetItemResponse';
/**
 Object class for Valueset
 */
export declare class Valueset {
    /** Valueset primary identifier */
    private _id;
    /** Valueset name */
    private _name;
    /** Valueset type */
    private _type;
    /** descriptions field */
    private _descriptions;
    /** The userId of the user that changed the valueset */
    private _lastModifiedBy?;
    /** Valueset last modified date */
    private _lastModifiedAt;
    /** The userId of the user that created the valueset */
    private _createdBy?;
    /** Valueset creation date */
    private _createdAt;
    /** valuesetItems field */
    private _valuesetItems;
    /**
     Creates a new instance of Valueset
     */
    constructor(data?: Partial<Valueset>);
    /**
     Valueset primary identifier
     */
    get id(): number;
    /**
     Valueset primary identifier
     */
    set id(value: number);
    /**
     Valueset name
     */
    get name(): string;
    /**
     Valueset name
     */
    set name(value: string);
    /**
     Valueset type
     */
    get type(): ValuesetType;
    /**
     Valueset type
     */
    set type(value: ValuesetType);
    /**
     descriptions field
     */
    get descriptions(): LocalizedString[];
    /**
     descriptions field
     */
    set descriptions(value: LocalizedString[]);
    /**
     The userId of the user that changed the valueset
     */
    get lastModifiedBy(): number | undefined;
    /**
     The userId of the user that changed the valueset
     */
    set lastModifiedBy(value: number | undefined);
    /**
     Valueset last modified date
     */
    get lastModifiedAt(): string;
    /**
     Valueset last modified date
     */
    set lastModifiedAt(value: string);
    /**
     The userId of the user that created the valueset
     */
    get createdBy(): number | undefined;
    /**
     The userId of the user that created the valueset
     */
    set createdBy(value: number | undefined);
    /**
     Valueset creation date
     */
    get createdAt(): string;
    /**
     Valueset creation date
     */
    set createdAt(value: string);
    /**
     valuesetItems field
     */
    get valuesetItems(): ValuesetItemResponse;
    /**
     valuesetItems field
     */
    set valuesetItems(value: ValuesetItemResponse);
}
//# sourceMappingURL=Valueset.d.ts.map