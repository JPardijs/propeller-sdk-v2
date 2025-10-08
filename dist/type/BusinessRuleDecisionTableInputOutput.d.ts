/**
 Definition of a decisionTable's input or output column
 */
export declare class BusinessRuleDecisionTableInputOutput {
    /** The generated ID for this input or output column */
    private _id;
    /** The name for the input or output column */
    private _name;
    /** The field of the input or output column.
    In case of inputs this is the full path of from the root of the input payload of the rule.
    In case of an output column it's the fieldname you want to output after the rule has been executed.
    Output fields can be organized by using the dot notation.
    For example:
    - input: "input.name"
    - output: "output.name.firstname"
    - output: "output.name.lastname" */
    private _field;
    /** The type of the input or output column, currently only "expression" is used. */
    private _type;
    /**
     Creates a new instance of BusinessRuleDecisionTableInputOutput
     */
    constructor(data?: Partial<BusinessRuleDecisionTableInputOutput>);
    /**
     The generated ID for this input or output column
     */
    get id(): string | number;
    /**
     The generated ID for this input or output column
     */
    set id(value: string | number);
    /**
     The name for the input or output column
     */
    get name(): string;
    /**
     The name for the input or output column
     */
    set name(value: string);
    /**
     The field of the input or output column.
    In case of inputs this is the full path of from the root of the input payload of the rule.
    In case of an output column it's the fieldname you want to output after the rule has been executed.
    Output fields can be organized by using the dot notation.
    For example:
    - input: "input.name"
    - output: "output.name.firstname"
    - output: "output.name.lastname"
     */
    get field(): string;
    /**
     The field of the input or output column.
    In case of inputs this is the full path of from the root of the input payload of the rule.
    In case of an output column it's the fieldname you want to output after the rule has been executed.
    Output fields can be organized by using the dot notation.
    For example:
    - input: "input.name"
    - output: "output.name.firstname"
    - output: "output.name.lastname"
     */
    set field(value: string);
    /**
     The type of the input or output column, currently only "expression" is used.
     */
    get type(): string;
    /**
     The type of the input or output column, currently only "expression" is used.
     */
    set type(value: string);
}
//# sourceMappingURL=BusinessRuleDecisionTableInputOutput.d.ts.map