/**
 A String representation of a type Field that is suitable for Localization
 */
export declare class LocalizedString {
    /** Localized field language code */
    private _language;
    /** Localized field value */
    private _value?;
    /**
     Creates a new instance of LocalizedString
     */
    constructor(data?: Partial<LocalizedString>);
    /**
     Localized field language code
     */
    get language(): string;
    /**
     Localized field language code
     */
    set language(value: string);
    /**
     Localized field value
     */
    get value(): string | undefined;
    /**
     Localized field value
     */
    set value(value: string | undefined);
}
//# sourceMappingURL=LocalizedString.d.ts.map