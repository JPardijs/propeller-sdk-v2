import { ClusterConfigSettingResponse } from './ClusterConfigSettingResponse';
/**
 Object class for ClusterConfigResponse
 */
export declare class ClusterConfigResponse {
    /** id field */
    private _id;
    /** name field */
    private _name;
    /** settings field */
    private _settings?;
    /**
     Creates a new instance of ClusterConfigResponse
     */
    constructor(data?: Partial<ClusterConfigResponse>);
    /**
     id field
     */
    get id(): number;
    /**
     id field
     */
    set id(value: number);
    /**
     name field
     */
    get name(): string;
    /**
     name field
     */
    set name(value: string);
    /**
     settings field
     */
    get settings(): ClusterConfigSettingResponse[] | undefined;
    /**
     settings field
     */
    set settings(value: ClusterConfigSettingResponse[] | undefined);
}
//# sourceMappingURL=ClusterConfigResponse.d.ts.map