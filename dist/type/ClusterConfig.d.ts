import { ClusterConfigSetting } from './ClusterConfigSetting';
/**
 Object class for ClusterConfig
 */
export declare class ClusterConfig {
    /** id field */
    private _id;
    /** name field */
    private _name;
    /** settings field */
    private _settings?;
    /**
     Creates a new instance of ClusterConfig
     */
    constructor(data?: Partial<ClusterConfig>);
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
    get settings(): ClusterConfigSetting[] | undefined;
    /**
     settings field
     */
    set settings(value: ClusterConfigSetting[] | undefined);
}
//# sourceMappingURL=ClusterConfig.d.ts.map