/**
 A multivalue string representation of a type Field that is suitable for Localization
 */
export declare class LocalizedStringArray {
    /** Language is set as 2 character country code. */
    private _language;
    /** List of localized string values */
    private _values?;
    /**
     Creates a new instance of LocalizedStringArray
     */
    constructor(data?: Partial<LocalizedStringArray>);
    /**
     Language is set as 2 character country code.
     */
    get language(): string;
    /**
     Language is set as 2 character country code.
     */
    set language(value: string);
    /**
     List of localized string values
     */
    get values(): string[] | undefined;
    /**
     List of localized string values
     */
    set values(value: string[] | undefined);
}
//# sourceMappingURL=LocalizedStringArray.d.ts.map