import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { BusinessRuleStringExpressionOperators } from '../enum/BusinessRuleStringExpressionOperators';
/**
 Represents a business rule string expression
 */
export declare class BusinessRuleStringExpression {
    /** id field */
    private _id;
    /** type field */
    private _type;
    /** operator field */
    private _operator;
    /** string field */
    private _string;
    /** Path to the field, can be used to add additional expressions and calulations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/string for options. */
    private _path?;
    /**
     Creates a new instance of BusinessRuleStringExpression
     */
    constructor(data?: Partial<BusinessRuleStringExpression>);
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
    get operator(): BusinessRuleStringExpressionOperators;
    /**
     operator field
     */
    set operator(value: BusinessRuleStringExpressionOperators);
    /**
     string field
     */
    get string(): string;
    /**
     string field
     */
    set string(value: string);
    /**
     Path to the field, can be used to add additional expressions and calulations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/string for options.
     */
    get path(): string | undefined;
    /**
     Path to the field, can be used to add additional expressions and calulations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/string for options.
     */
    set path(value: string | undefined);
}
//# sourceMappingURL=BusinessRuleStringExpression.d.ts.map