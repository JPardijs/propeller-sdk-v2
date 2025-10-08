/**
 Object class for Source
 */
export declare class Source {
    /** Source ID */
    private _id?;
    /** Name of the source */
    private _name?;
    /**
     Creates a new instance of Source
     */
    constructor(data?: Partial<Source>);
    /**
     Source ID
     */
    get id(): string | undefined;
    /**
     Source ID
     */
    set id(value: string | undefined);
    /**
     Name of the source
     */
    get name(): string | undefined;
    /**
     Name of the source
     */
    set name(value: string | undefined);
}
//# sourceMappingURL=Source.d.ts.map