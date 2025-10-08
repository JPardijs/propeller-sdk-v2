import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { BusinessRuleArrayExpressionOperators } from '../enum/BusinessRuleArrayExpressionOperators';
/**
 Represents a business rule array expression
 */
export declare class BusinessRuleArrayExpression {
    /** id field */
    private _id;
    /** type field */
    private _type;
    /** operator field */
    private _operator;
    /** string field */
    private _string?;
    /** number field */
    private _number?;
    /** Path to the field, can be used to add additional expressions and calulations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/array for options. */
    private _path?;
    /**
     Creates a new instance of BusinessRuleArrayExpression
     */
    constructor(data?: Partial<BusinessRuleArrayExpression>);
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
    get type(): BusinessRuleExpressionTypes;
    /**
     type field
     */
    set type(value: BusinessRuleExpressionTypes);
    /**
     operator field
     */
    get operator(): BusinessRuleArrayExpressionOperators;
    /**
     operator field
     */
    set operator(value: BusinessRuleArrayExpressionOperators);
    /**
     string field
     */
    get string(): string | undefined;
    /**
     string field
     */
    set string(value: string | undefined);
    /**
     number field
     */
    get number(): number | undefined;
    /**
     number field
     */
    set number(value: number | undefined);
    /**
     Path to the field, can be used to add additional expressions and calulations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/array for options.
     */
    get path(): string | undefined;
    /**
     Path to the field, can be used to add additional expressions and calulations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/array for options.
     */
    set path(value: string | undefined);
}
//# sourceMappingURL=BusinessRuleArrayExpression.d.ts.map