import { LocalizedString } from './LocalizedString';
import { LocalizedStringArray } from './LocalizedStringArray';
import { LocalizedDocument } from './LocalizedDocument';
/**
 Object class for MediaDocument
 */
export declare class MediaDocument {
    /** Media global unique identifier */
    private _id;
    /** Unique product identifier that the media relates to */
    private _productId?;
    /** Unique cluster identifier that the media relates to */
    private _clusterId?;
    /** Unique category identifier that the media relates to */
    private _categoryId?;
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
    /** List of document objects */
    private _documents?;
    /**
     Creates a new instance of MediaDocument
     */
    constructor(data?: Partial<MediaDocument>);
    /**
     Media global unique identifier
     */
    get id(): string | number;
    /**
     Media global unique identifier
     */
    set id(value: string | number);
    /**
     Unique product identifier that the media relates to
     */
    get productId(): string | number | undefined;
    /**
     Unique product identifier that the media relates to
     */
    set productId(value: string | number | undefined);
    /**
     Unique cluster identifier that the media relates to
     */
    get clusterId(): string | number | undefined;
    /**
     Unique cluster identifier that the media relates to
     */
    set clusterId(value: string | number | undefined);
    /**
     Unique category identifier that the media relates to
     */
    get categoryId(): string | number | undefined;
    /**
     Unique category identifier that the media relates to
     */
    set categoryId(value: string | number | undefined);
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
     List of document objects
     */
    get documents(): LocalizedDocument[] | undefined;
    /**
     List of document objects
     */
    set documents(value: LocalizedDocument[] | undefined);
}
//# sourceMappingURL=MediaDocument.d.ts.map