/**
 Object class for LocalizedVideo
 */
export declare class LocalizedVideo {
    /** Video language */
    private _language;
    /** Video URI */
    private _uri;
    /** The MIME type of the video. */
    private _mimeType?;
    /**
     Creates a new instance of LocalizedVideo
     */
    constructor(data?: Partial<LocalizedVideo>);
    /**
     Video language
     */
    get language(): string;
    /**
     Video language
     */
    set language(value: string);
    /**
     Video URI
     */
    get uri(): string;
    /**
     Video URI
     */
    set uri(value: string);
    /**
     The MIME type of the video.
     */
    get mimeType(): string | undefined;
    /**
     The MIME type of the video.
     */
    set mimeType(value: string | undefined);
}
//# sourceMappingURL=LocalizedVideo.d.ts.map