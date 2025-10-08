import { ClusterConfigSettingType } from '../enum/ClusterConfigSettingType';
import { ClusterConfigSettingDisplayType } from '../enum/ClusterConfigSettingDisplayType';
/**
 Object class for ClusterConfigSetting
 */
export declare class ClusterConfigSetting {
    /** id field */
    private _id;
    /** name field */
    private _name;
    /** type field */
    private _type;
    /** displayType field */
    private _displayType;
    /** priority field */
    private _priority;
    /**
     Creates a new instance of ClusterConfigSetting
     */
    constructor(data?: Partial<ClusterConfigSetting>);
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
     type field
     */
    get type(): ClusterConfigSettingType;
    /**
     type field
     */
    set type(value: ClusterConfigSettingType);
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
    get priority(): string;
    /**
     priority field
     */
    set priority(value: string);
}
//# sourceMappingURL=ClusterConfigSetting.d.ts.map