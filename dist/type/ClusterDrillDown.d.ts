import { ClusterDrillDownDisplayType } from '../enum/ClusterDrillDownDisplayType';
/**
 Object class for ClusterDrillDown
 */
export declare class ClusterDrillDown {
    /** The id of the Attribute to create the drilldown matrix for  */
    private _attributeId;
    /** The order in which the drilldown should be generated */
    private _priority;
    /** Indicator how to display the current drilldown selection */
    private _displayType;
    /**
     Creates a new instance of ClusterDrillDown
     */
    constructor(data?: Partial<ClusterDrillDown>);
    /**
     The id of the Attribute to create the drilldown matrix for
     */
    get attributeId(): string;
    /**
     The id of the Attribute to create the drilldown matrix for
     */
    set attributeId(value: string);
    /**
     The order in which the drilldown should be generated
     */
    get priority(): number;
    /**
     The order in which the drilldown should be generated
     */
    set priority(value: number);
    /**
     Indicator how to display the current drilldown selection
     */
    get displayType(): ClusterDrillDownDisplayType;
    /**
     Indicator how to display the current drilldown selection
     */
    set displayType(value: ClusterDrillDownDisplayType);
}
//# sourceMappingURL=ClusterDrillDown.d.ts.map