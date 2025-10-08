import { LocalizedString } from './LocalizedString';
import { LocalizedStringArray } from './LocalizedStringArray';
import { LocalizedAttachment } from './LocalizedAttachment';
/**
 Object class for MediaAttachment
 */
export declare class MediaAttachment {
    /** Media global unique identifier */
    private _id;
    /** Unique sparePartsMachine identifier that the media relates to */
    private _sparePartsMachineId?;
    /** Media alt description that briefly explains the contents of the document. */
    private _alt;
    /** Media short description. */
    private _description;
    /** Media tags. */
    private _tags;
    /** Media type */
    private _type?;
    /** The date and time (ISO 8601 format) when the media was created. */
    private _createdAt?;
    /** The date and time (ISO 8601 format) when the media was last modified. */
    private _lastModifiedAt?;
    /** Media display priority [Lower value has higher priority] -  default: 1000 */
    private _priority?;
    /** List of attachment objects */
    private _attachments?;
    /** Unique order identifier that the attachment relates to. [Cannot use it together with sparePartsMachineId] */
    private _orderId?;
    /** Unique company identifier that the attachment relates to. [Cannot use it together with customerId] */
    private _companyId?;
    /** Unique customer identifier that the attachment relates to. [Cannot use it together with companyId] */
    private _customerId?;
    /**
     Creates a new instance of MediaAttachment
     */
    constructor(data?: Partial<MediaAttachment>);
    /**
     Media global unique identifier
     */
    get id(): string | number;
    /**
     Media global unique identifier
     */
    set id(value: string | number);
    /**
     Unique sparePartsMachine identifier that the media relates to
     */
    get sparePartsMachineId(): string | number | undefined;
    /**
     Unique sparePartsMachine identifier that the media relates to
     */
    set sparePartsMachineId(value: string | number | undefined);
    /**
     Media alt description that briefly explains the contents of the document.
     */
    get alt(): LocalizedString[];
    /**
     Media alt description that briefly explains the contents of the document.
     */
    set alt(value: LocalizedString[]);
    /**
     Media short description.
     */
    get description(): LocalizedString[];
    /**
     Media short description.
     */
    set description(value: LocalizedString[]);
    /**
     Media tags.
     */
    get tags(): LocalizedStringArray[];
    /**
     Media tags.
     */
    set tags(value: LocalizedStringArray[]);
    /**
     Media type
     */
    get type(): string | undefined;
    /**
     Media type
     */
    set type(value: string | undefined);
    /**
     The date and time (ISO 8601 format) when the media was created.
     */
    get createdAt(): string | undefined;
    /**
     The date and time (ISO 8601 format) when the media was created.
     */
    set createdAt(value: string | undefined);
    /**
     The date and time (ISO 8601 format) when the media was last modified.
     */
    get lastModifiedAt(): string | undefined;
    /**
     The date and time (ISO 8601 format) when the media was last modified.
     */
    set lastModifiedAt(value: string | undefined);
    /**
     Media display priority [Lower value has higher priority] -  default: 1000
     */
    get priority(): number | undefined;
    /**
     Media display priority [Lower value has higher priority] -  default: 1000
     */
    set priority(value: number | undefined);
    /**
     List of attachment objects
     */
    get attachments(): LocalizedAttachment[] | undefined;
    /**
     List of attachment objects
     */
    set attachments(value: LocalizedAttachment[] | undefined);
    /**
     Unique order identifier that the attachment relates to. [Cannot use it together with sparePartsMachineId]
     */
    get orderId(): number | undefined;
    /**
     Unique order identifier that the attachment relates to. [Cannot use it together with sparePartsMachineId]
     */
    set orderId(value: number | undefined);
    /**
     Unique company identifier that the attachment relates to. [Cannot use it together with customerId]
     */
    get companyId(): number | undefined;
    /**
     Unique company identifier that the attachment relates to. [Cannot use it together with customerId]
     */
    set companyId(value: number | undefined);
    /**
     Unique customer identifier that the attachment relates to. [Cannot use it together with companyId]
     */
    get customerId(): number | undefined;
    /**
     Unique customer identifier that the attachment relates to. [Cannot use it together with companyId]
     */
    set customerId(value: number | undefined);
}
//# sourceMappingURL=MediaAttachment.d.ts.map