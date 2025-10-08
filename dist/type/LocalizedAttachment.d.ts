/**
 Object class for LocalizedAttachment
 */
export declare class LocalizedAttachment {
    /** Attachment language */
    private _language;
    /** Original Attachment url */
    private _originalUrl;
    /** The MIME type of the Attachment. */
    private _mimeType;
    /**
     Creates a new instance of LocalizedAttachment
     */
    constructor(data?: Partial<LocalizedAttachment>);
    /**
     Attachment language
     */
    get language(): string;
    /**
     Attachment language
     */
    set language(value: string);
    /**
     Original Attachment url
     */
    get originalUrl(): string;
    /**
     Original Attachment url
     */
    set originalUrl(value: string);
    /**
     The MIME type of the Attachment.
     */
    get mimeType(): string;
    /**
     The MIME type of the Attachment.
     */
    set mimeType(value: string);
}
//# sourceMappingURL=LocalizedAttachment.d.ts.map