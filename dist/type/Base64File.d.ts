/**
 Object class for Base64File
 */
export declare class Base64File {
    /** The base64 representation of the file. */
    private _base64;
    /** The contentType of the base64 content. */
    private _contentType;
    /** Indication of the fileName to use when converting the base64 to a file. */
    private _fileName;
    /**
     Creates a new instance of Base64File
     */
    constructor(data?: Partial<Base64File>);
    /**
     The base64 representation of the file.
     */
    get base64(): string;
    /**
     The base64 representation of the file.
     */
    set base64(value: string);
    /**
     The contentType of the base64 content.
     */
    get contentType(): string;
    /**
     The contentType of the base64 content.
     */
    set contentType(value: string);
    /**
     Indication of the fileName to use when converting the base64 to a file.
     */
    get fileName(): string;
    /**
     Indication of the fileName to use when converting the base64 to a file.
     */
    set fileName(value: string);
}
//# sourceMappingURL=Base64File.d.ts.map