/**
 Object class for LocalizedImage
 */
export declare class LocalizedImage {
    /** Image language */
    private _language;
    /** Original image url */
    private _originalUrl;
    /** The MIME type of the image. */
    private _mimeType;
    /**
     Creates a new instance of LocalizedImage
     */
    constructor(data?: Partial<LocalizedImage>);
    /**
     Image language
     */
    get language(): string;
    /**
     Image language
     */
    set language(value: string);
    /**
     Original image url
     */
    get originalUrl(): string;
    /**
     Original image url
     */
    set originalUrl(value: string);
    /**
     The MIME type of the image.
     */
    get mimeType(): string;
    /**
     The MIME type of the image.
     */
    set mimeType(value: string);
}
//# sourceMappingURL=LocalizedImage.d.ts.map