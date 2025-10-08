import { LocalizedString } from './LocalizedString';
/**
 Object class for PayMethod
 */
export declare class PayMethod {
    /** Primary identifier */
    private _id;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** Name per language */
    private _names;
    /** External code */
    private _externalCode;
    /** Logo url */
    private _logo?;
    /**
     Creates a new instance of PayMethod
     */
    constructor(data?: Partial<PayMethod>);
    /**
     Primary identifier
     */
    get id(): number;
    /**
     Primary identifier
     */
    set id(value: number);
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
     Name per language
     */
    get names(): LocalizedString[];
    /**
     Name per language
     */
    set names(value: LocalizedString[]);
    /**
     External code
     */
    get externalCode(): string;
    /**
     External code
     */
    set externalCode(value: string);
    /**
     Logo url
     */
    get logo(): string | undefined;
    /**
     Logo url
     */
    set logo(value: string | undefined);
}
//# sourceMappingURL=PayMethod.d.ts.map