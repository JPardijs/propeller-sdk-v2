/**
 Object class for LocalizedDocument
 */
export declare class LocalizedDocument {
    /** Document language */
    private _language;
    /** Original document url */
    private _originalUrl;
    /** The MIME type of the document. */
    private _mimeType;
    /**
     Creates a new instance of LocalizedDocument
     */
    constructor(data?: Partial<LocalizedDocument>);
    /**
     Document language
     */
    get language(): string;
    /**
     Document language
     */
    set language(value: string);
    /**
     Original document url
     */
    get originalUrl(): string;
    /**
     Original document url
     */
    set originalUrl(value: string);
    /**
     The MIME type of the document.
     */
    get mimeType(): string;
    /**
     The MIME type of the document.
     */
    set mimeType(value: string);
}
//# sourceMappingURL=LocalizedDocument.d.ts.map