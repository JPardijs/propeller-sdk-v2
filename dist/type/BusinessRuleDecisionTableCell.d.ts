import { BusinessRuleExpressionGroup } from './BusinessRuleExpressionGroup';
import { LocalizedString } from './LocalizedString';
/**
 Represents a single cell in a decisionTable,
  each cell either hold an expression, string value or numeric value based on the column type and field
 */
export declare class BusinessRuleDecisionTableCell {
    /** The columnId of the cell */
    private _columnId;
    /** The expressions value for this cell */
    private _expression?;
    /** The string value of the cell, used in output cells. Can contain a string or an expression. Strings need to be wrapped in "" */
    private _value?;
    /** The localized string value of the cell, used in output cells. Used when you want a rule to generate a translated string in the output */
    private _localizedValue?;
    /** The numeric value for this cell, used in output cells */
    private _number?;
    /**
     Creates a new instance of BusinessRuleDecisionTableCell
     */
    constructor(data?: Partial<BusinessRuleDecisionTableCell>);
    /**
     The columnId of the cell
     */
    get columnId(): string | number;
    /**
     The columnId of the cell
     */
    set columnId(value: string | number);
    /**
     The expressions value for this cell
     */
    get expression(): BusinessRuleExpressionGroup | undefined;
    /**
     The expressions value for this cell
     */
    set expression(value: BusinessRuleExpressionGroup | undefined);
    /**
     The string value of the cell, used in output cells. Can contain a string or an expression. Strings need to be wrapped in ""
     */
    get value(): string | undefined;
    /**
     The string value of the cell, used in output cells. Can contain a string or an expression. Strings need to be wrapped in ""
     */
    set value(value: string | undefined);
    /**
     The localized string value of the cell, used in output cells. Used when you want a rule to generate a translated string in the output
     */
    get localizedValue(): LocalizedString[] | undefined;
    /**
     The localized string value of the cell, used in output cells. Used when you want a rule to generate a translated string in the output
     */
    set localizedValue(value: LocalizedString[] | undefined);
    /**
     The numeric value for this cell, used in output cells
     */
    get number(): number | undefined;
    /**
     The numeric value for this cell, used in output cells
     */
    set number(value: number | undefined);
}
//# sourceMappingURL=BusinessRuleDecisionTableCell.d.ts.map