/**
 Represents a business rule date expression
 */
export declare class BusinessRuleDateExpression {
    /** id field */
    private _id;
    /** type field */
    private _type;
    /** Use when operator calculates days or minutes from now or today, or when targeting specific days, weeks or months */
    private _number?;
    /** Use when operator is before or after. */
    private _date?;
    /** Use on time based operators, 00:00:00 24h format. */
    private _string?;
    /** operator field */
    private _operator;
    /** Path to the field, can be used to add additional expressions and calulations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/date-and-time for options. */
    private _path?;
    /**
     Creates a new instance of BusinessRuleDateExpression
     */
    constructor(data?: Partial<BusinessRuleDateExpression>);
    /**
     id field
     */
    get id(): string | number;
    /**
     id field
     */
    set id(value: string | number);
    /**
     type field
     */
    get type(): string;
    /**
     type field
     */
    set type(value: string);
    /**
     Use when operator calculates days or minutes from now or today, or when targeting specific days, weeks or months
     */
    get number(): number | undefined;
    /**
     Use when operator calculates days or minutes from now or today, or when targeting specific days, weeks or months
     */
    set number(value: number | undefined);
    /**
     Use when operator is before or after.
     */
    get date(): string | undefined;
    /**
     Use when operator is before or after.
     */
    set date(value: string | undefined);
    /**
     Use on time based operators, 00:00:00 24h format.
     */
    get string(): string | undefined;
    /**
     Use on time based operators, 00:00:00 24h format.
     */
    set string(value: string | undefined);
    /**
     operator field
     */
    get operator(): string;
    /**
     operator field
     */
    set operator(value: string);
    /**
     Path to the field, can be used to add additional expressions and calulations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/date-and-time for options.
     */
    get path(): string | undefined;
    /**
     Path to the field, can be used to add additional expressions and calulations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/date-and-time for options.
     */
    set path(value: string | undefined);
}
//# sourceMappingURL=BusinessRuleDateExpression.d.ts.map