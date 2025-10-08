import { SparePart } from './SparePart';
import { SparePartsMachineMedia } from './SparePartsMachineMedia';
import { SparePartsResponse } from './SparePartsResponse';
import { LocalizedString } from './LocalizedString';
/**
 Object class for SparePartsMachine
 */
export declare class SparePartsMachine {
    /** The unique identifier for this Machine */
    private _id;
    /** parts field */
    private _parts?;
    /** media field */
    private _media?;
    /** sparePartProducts field */
    private _sparePartProducts?;
    /** List of localized names for this Machine */
    private _name;
    /** description field */
    private _description?;
    /** slug field */
    private _slug?;
    /** machines field */
    private _machines?;
    /**
     Creates a new instance of SparePartsMachine
     */
    constructor(data?: Partial<SparePartsMachine>);
    /**
     The unique identifier for this Machine
     */
    get id(): string | number;
    /**
     The unique identifier for this Machine
     */
    set id(value: string | number);
    /**
     parts field
     */
    get parts(): SparePart[] | undefined;
    /**
     parts field
     */
    set parts(value: SparePart[] | undefined);
    /**
     media field
     */
    get media(): SparePartsMachineMedia | undefined;
    /**
     media field
     */
    set media(value: SparePartsMachineMedia | undefined);
    /**
     sparePartProducts field
     */
    get sparePartProducts(): SparePartsResponse | undefined;
    /**
     sparePartProducts field
     */
    set sparePartProducts(value: SparePartsResponse | undefined);
    /**
     List of localized names for this Machine
     */
    get name(): LocalizedString[];
    /**
     List of localized names for this Machine
     */
    set name(value: LocalizedString[]);
    /**
     description field
     */
    get description(): LocalizedString[] | undefined;
    /**
     description field
     */
    set description(value: LocalizedString[] | undefined);
    /**
     slug field
     */
    get slug(): LocalizedString[] | undefined;
    /**
     slug field
     */
    set slug(value: LocalizedString[] | undefined);
    /**
     machines field
     */
    get machines(): SparePartsMachine[] | undefined;
    /**
     machines field
     */
    set machines(value: SparePartsMachine[] | undefined);
}
//# sourceMappingURL=SparePartsMachine.d.ts.map