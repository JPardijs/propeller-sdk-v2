import { CrossupsellType } from '../enum/CrossupsellType';
import { IBaseProduct } from './IBaseProduct';
/**
 Object class for Crossupsell
 */
export declare class Crossupsell {
    /** Primary identifier */
    private _id;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** Cross/Upsell type */
    private _type;
    /** Cross/Up Sell subtype */
    private _subType?;
    /** productTo field */
    private _productTo?;
    /** productFrom field */
    private _productFrom?;
    /** clusterTo field */
    private _clusterTo?;
    /** clusterFrom field */
    private _clusterFrom?;
    /**
     Creates a new instance of Crossupsell
     */
    constructor(data?: Partial<Crossupsell>);
    /**
     Primary identifier
     */
    get id(): string;
    /**
     Primary identifier
     */
    set id(value: string);
    /**
     Creation date
     */
    get createdAt(): string;
    /**
     Creation date
     */
    set createdAt(value: string);
    /**
     Last modified date
     */
    get lastModifiedAt(): string;
    /**
     Last modified date
     */
    set lastModifiedAt(value: string);
    /**
     Cross/Upsell type
     */
    get type(): CrossupsellType;
    /**
     Cross/Upsell type
     */
    set type(value: CrossupsellType);
    /**
     Cross/Up Sell subtype
     */
    get subType(): string | undefined;
    /**
     Cross/Up Sell subtype
     */
    set subType(value: string | undefined);
    /**
     productTo field
     */
    get productTo(): IBaseProduct | undefined;
    /**
     productTo field
     */
    set productTo(value: IBaseProduct | undefined);
    /**
     productFrom field
     */
    get productFrom(): IBaseProduct | undefined;
    /**
     productFrom field
     */
    set productFrom(value: IBaseProduct | undefined);
    /**
     clusterTo field
     */
    get clusterTo(): IBaseProduct | undefined;
    /**
     clusterTo field
     */
    set clusterTo(value: IBaseProduct | undefined);
    /**
     clusterFrom field
     */
    get clusterFrom(): IBaseProduct | undefined;
    /**
     clusterFrom field
     */
    set clusterFrom(value: IBaseProduct | undefined);
}
//# sourceMappingURL=Crossupsell.d.ts.map