import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Object class for ClusterConfigSettingResponse
 */
export declare class ClusterConfigSettingResponse {
    /** id field */
    private _id;
    /** attributeName field */
    private _attributeName;
    /** displayType field */
    private _displayType;
    /** priority field */
    private _priority?;
    /** clusterConfigId field */
    private _clusterConfigId;
    /**
     Creates a new instance of ClusterConfigSettingResponse
     */
    constructor(data?: Partial<ClusterConfigSettingResponse>);
    /**
     id field
     */
    get id(): number;
    /**
     id field
     */
    set id(value: number);
    /**
     attributeName field
     */
    get attributeName(): string;
    /**
     attributeName field
     */
    set attributeName(value: string);
    /**
     displayType field
     */
    get displayType(): ClusterConfigSettingDisplayType;
    /**
     displayType field
     */
    set displayType(value: ClusterConfigSettingDisplayType);
    /**
     priority field
     */
    get priority(): number | undefined;
    /**
     priority field
     */
    set priority(value: number | undefined);
    /**
     clusterConfigId field
     */
    get clusterConfigId(): string;
    /**
     clusterConfigId field
     */
    set clusterConfigId(value: string);
}
//# sourceMappingURL=ClusterConfigSettingResponse.d.ts.map