/**
 Object class for LocalizedTemplateContent
 */
export declare class LocalizedTemplateContent {
    /** The language code */
    private _language;
    /** Contents of the handlebars template file */
    private _content;
    /** Contents of the the precompiled handlebars template file */
    private _precompiled?;
    /**
     Creates a new instance of LocalizedTemplateContent
     */
    constructor(data?: Partial<LocalizedTemplateContent>);
    /**
     The language code
     */
    get language(): string;
    /**
     The language code
     */
    set language(value: string);
    /**
     Contents of the handlebars template file
     */
    get content(): string;
    /**
     Contents of the handlebars template file
     */
    set content(value: string);
    /**
     Contents of the the precompiled handlebars template file
     */
    get precompiled(): string | undefined;
    /**
     Contents of the the precompiled handlebars template file
     */
    set precompiled(value: string | undefined);
}
//# sourceMappingURL=LocalizedTemplateContent.d.ts.map