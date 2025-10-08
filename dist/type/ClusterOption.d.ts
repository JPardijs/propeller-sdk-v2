import { YesNo } from '../enum/YesNo';
import { Product } from './Product';
import { LocalizedString } from './LocalizedString';
/**
 Object class for ClusterOption
 */
export declare class ClusterOption {
    /** id field */
    private _id;
    /** The classID of the cluster that represents this cluster */
    private _clusterOptionId;
    /** Indicates whether an option is required or not */
    private _isRequired?;
    /** Indicates whether an option is hidden or not */
    private _hidden?;
    /** defaultProduct field */
    private _defaultProduct?;
    /** products field */
    private _products?;
    /** names field */
    private _names;
    /** descriptions field */
    private _descriptions;
    /** shortDescriptions field */
    private _shortDescriptions;
    /**
     Creates a new instance of ClusterOption
     */
    constructor(data?: Partial<ClusterOption>);
    /**
     id field
     */
    get id(): number;
    /**
     id field
     */
    set id(value: number);
    /**
     The classID of the cluster that represents this cluster
     */
    get clusterOptionId(): number;
    /**
     The classID of the cluster that represents this cluster
     */
    set clusterOptionId(value: number);
    /**
     Indicates whether an option is required or not
     */
    get isRequired(): YesNo | undefined;
    /**
     Indicates whether an option is required or not
     */
    set isRequired(value: YesNo | undefined);
    /**
     Indicates whether an option is hidden or not
     */
    get hidden(): YesNo | undefined;
    /**
     Indicates whether an option is hidden or not
     */
    set hidden(value: YesNo | undefined);
    /**
     defaultProduct field
     */
    get defaultProduct(): Product | undefined;
    /**
     defaultProduct field
     */
    set defaultProduct(value: Product | undefined);
    /**
     products field
     */
    get products(): Product[] | undefined;
    /**
     products field
     */
    set products(value: Product[] | undefined);
    /**
     names field
     */
    get names(): LocalizedString[];
    /**
     names field
     */
    set names(value: LocalizedString[]);
    /**
     descriptions field
     */
    get descriptions(): LocalizedString[];
    /**
     descriptions field
     */
    set descriptions(value: LocalizedString[]);
    /**
     shortDescriptions field
     */
    get shortDescriptions(): LocalizedString[];
    /**
     shortDescriptions field
     */
    set shortDescriptions(value: LocalizedString[]);
}
//# sourceMappingURL=ClusterOption.d.ts.map