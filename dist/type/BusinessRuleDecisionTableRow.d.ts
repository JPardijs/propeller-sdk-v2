import { BusinessRuleDecisionTableCell } from './BusinessRuleDecisionTableCell';
/**
 Represents a single row in a business rule decision table.
 */
export declare class BusinessRuleDecisionTableRow {
    /** The generated ID for the row */
    private _id;
    /** The row's input columns */
    private _inputs;
    /** The row's output columns */
    private _outputs;
    /**
     Creates a new instance of BusinessRuleDecisionTableRow
     */
    constructor(data?: Partial<BusinessRuleDecisionTableRow>);
    /**
     The generated ID for the row
     */
    get id(): string | number;
    /**
     The generated ID for the row
     */
    set id(value: string | number);
    /**
     The row's input columns
     */
    get inputs(): BusinessRuleDecisionTableCell[];
    /**
     The row's input columns
     */
    set inputs(value: BusinessRuleDecisionTableCell[]);
    /**
     The row's output columns
     */
    get outputs(): BusinessRuleDecisionTableCell[];
    /**
     The row's output columns
     */
    set outputs(value: BusinessRuleDecisionTableCell[]);
}
//# sourceMappingURL=BusinessRuleDecisionTableRow.d.ts.map