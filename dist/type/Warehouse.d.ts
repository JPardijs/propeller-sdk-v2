import { WarehouseAddress } from './WarehouseAddress';
import { BusinessHours } from './BusinessHours';
/**
 Object class for Warehouse
 */
export declare class Warehouse {
    /** Warehouse primary identifier */
    private _id;
    /** Address identifier associated with the warehouse */
    private _addressId?;
    /** Warehouse Address */
    private _address?;
    /** Warehouse name */
    private _name;
    /** Warehouse description */
    private _description;
    /** Warehouse notes */
    private _notes;
    /** Warehouse isActive status */
    private _isActive;
    /** Warehouse isStore status */
    private _isStore;
    /** Warehouse isPickupLocation status */
    private _isPickupLocation;
    /** Optional warehouse shopId */
    private _shopId?;
    /** Warehouse business hours per week day */
    private _businessHours;
    /** Warehouse initial creation timestamp */
    private _createdAt;
    /** Warehouse last update timestamp */
    private _lastModifiedAt;
    /**
     Creates a new instance of Warehouse
     */
    constructor(data?: Partial<Warehouse>);
    /**
     Warehouse primary identifier
     */
    get id(): string | number;
    /**
     Warehouse primary identifier
     */
    set id(value: string | number);
    /**
     Address identifier associated with the warehouse
     */
    get addressId(): number | undefined;
    /**
     Address identifier associated with the warehouse
     */
    set addressId(value: number | undefined);
    /**
     Warehouse Address
     */
    get address(): WarehouseAddress | undefined;
    /**
     Warehouse Address
     */
    set address(value: WarehouseAddress | undefined);
    /**
     Warehouse name
     */
    get name(): string;
    /**
     Warehouse name
     */
    set name(value: string);
    /**
     Warehouse description
     */
    get description(): string;
    /**
     Warehouse description
     */
    set description(value: string);
    /**
     Warehouse notes
     */
    get notes(): string;
    /**
     Warehouse notes
     */
    set notes(value: string);
    /**
     Warehouse isActive status
     */
    get isActive(): boolean;
    /**
     Warehouse isActive status
     */
    set isActive(value: boolean);
    /**
     Warehouse isStore status
     */
    get isStore(): boolean;
    /**
     Warehouse isStore status
     */
    set isStore(value: boolean);
    /**
     Warehouse isPickupLocation status
     */
    get isPickupLocation(): boolean;
    /**
     Warehouse isPickupLocation status
     */
    set isPickupLocation(value: boolean);
    /**
     Optional warehouse shopId
     */
    get shopId(): number | undefined;
    /**
     Optional warehouse shopId
     */
    set shopId(value: number | undefined);
    /**
     Warehouse business hours per week day
     */
    get businessHours(): BusinessHours[];
    /**
     Warehouse business hours per week day
     */
    set businessHours(value: BusinessHours[]);
    /**
     Warehouse initial creation timestamp
     */
    get createdAt(): string;
    /**
     Warehouse initial creation timestamp
     */
    set createdAt(value: string);
    /**
     Warehouse last update timestamp
     */
    get lastModifiedAt(): string;
    /**
     Warehouse last update timestamp
     */
    set lastModifiedAt(value: string);
}
//# sourceMappingURL=Warehouse.d.ts.map