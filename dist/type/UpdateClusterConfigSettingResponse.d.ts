import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Object class for UpdateClusterConfigSettingResponse
 */
export declare class UpdateClusterConfigSettingResponse {
    /** id field */
    private _id?;
    /** displayType field */
    private _displayType?;
    /** priority field */
    private _priority?;
    /**
     Creates a new instance of UpdateClusterConfigSettingResponse
     */
    constructor(data?: Partial<UpdateClusterConfigSettingResponse>);
    /**
     id field
     */
    get id(): number | undefined;
    /**
     id field
     */
    set id(value: number | undefined);
    /**
     displayType field
     */
    get displayType(): ClusterConfigSettingDisplayType | undefined;
    /**
     displayType field
     */
    set displayType(value: ClusterConfigSettingDisplayType | undefined);
    /**
     priority field
     */
    get priority(): number | undefined;
    /**
     priority field
     */
    set priority(value: number | undefined);
}
//# sourceMappingURL=UpdateClusterConfigSettingResponse.d.ts.map