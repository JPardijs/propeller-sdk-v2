/**
 Object class for Site
 */
export declare class Site {
    /** id field */
    private _id;
    /** url field */
    private _url;
    /** alternartiveUrl field */
    private _alternartiveUrl?;
    /** mobileUrl field */
    private _mobileUrl;
    /** fileUrl field */
    private _fileUrl;
    /** anonymousUserId field */
    private _anonymousUserId;
    /**
     Creates a new instance of Site
     */
    constructor(data?: Partial<Site>);
    /**
     id field
     */
    get id(): number;
    /**
     id field
     */
    set id(value: number);
    /**
     url field
     */
    get url(): string;
    /**
     url field
     */
    set url(value: string);
    /**
     alternartiveUrl field
     */
    get alternartiveUrl(): string | undefined;
    /**
     alternartiveUrl field
     */
    set alternartiveUrl(value: string | undefined);
    /**
     mobileUrl field
     */
    get mobileUrl(): string;
    /**
     mobileUrl field
     */
    set mobileUrl(value: string);
    /**
     fileUrl field
     */
    get fileUrl(): string;
    /**
     fileUrl field
     */
    set fileUrl(value: string);
    /**
     anonymousUserId field
     */
    get anonymousUserId(): number;
    /**
     anonymousUserId field
     */
    set anonymousUserId(value: number);
}
//# sourceMappingURL=Site.d.ts.map