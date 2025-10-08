import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { BusinessRuleNumberExpressionOperators } from '../enum/BusinessRuleNumberExpressionOperators';
/**
 Represents a business rule number expression
 */
export declare class BusinessRuleNumberExpression {
    /** id field */
    private _id;
    /** type field */
    private _type;
    /** operator field */
    private _operator;
    /** number field */
    private _number;
    /** Path to the field, can be used to add additional expressions and calculations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/number for options. */
    private _path?;
    /**
     Creates a new instance of BusinessRuleNumberExpression
     */
    constructor(data?: Partial<BusinessRuleNumberExpression>);
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
    get operator(): BusinessRuleNumberExpressionOperators;
    /**
     operator field
     */
    set operator(value: BusinessRuleNumberExpressionOperators);
    /**
     number field
     */
    get number(): number;
    /**
     number field
     */
    set number(value: number);
    /**
     Path to the field, can be used to add additional expressions and calculations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/number for options.
     */
    get path(): string | undefined;
    /**
     Path to the field, can be used to add additional expressions and calculations on the field.
        Use $ to target the field's value.
        When omitted the field's value is used.
        The expression will be used on the left hand side of the operator.
        Can also be used to target a specific property in a complex expression's sub-expression
        Check https://gorules.io/docs/rules-engine/expression-language/number for options.
     */
    set path(value: string | undefined);
}
//# sourceMappingURL=BusinessRuleNumberExpression.d.ts.map