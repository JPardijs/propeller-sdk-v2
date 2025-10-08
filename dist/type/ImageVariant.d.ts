/**
 Object class for ImageVariant
 */
export declare class ImageVariant {
    /** Friendly image name */
    private _name;
    /** Image variant language */
    private _language;
    /** Image variant transformation computed url */
    private _url;
    /** The MIME type of the image. */
    private _mimeType;
    /**
     Creates a new instance of ImageVariant
     */
    constructor(data?: Partial<ImageVariant>);
    /**
     Friendly image name
     */
    get name(): string;
    /**
     Friendly image name
     */
    set name(value: string);
    /**
     Image variant language
     */
    get language(): string;
    /**
     Image variant language
     */
    set language(value: string);
    /**
     Image variant transformation computed url
     */
    get url(): string;
    /**
     Image variant transformation computed url
     */
    set url(value: string);
    /**
     The MIME type of the image.
     */
    get mimeType(): string;
    /**
     The MIME type of the image.
     */
    set mimeType(value: string);
}
//# sourceMappingURL=ImageVariant.d.ts.map