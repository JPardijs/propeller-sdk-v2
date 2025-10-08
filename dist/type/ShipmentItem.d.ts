import { OrderItem } from './OrderItem';
/**
 Object class for ShipmentItem
 */
export declare class ShipmentItem {
    /** Unique identifier */
    private _id;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** Shipment item name */
    private _name?;
    /** Product SKU */
    private _sku?;
    /** Shipment item quantity */
    private _quantity?;
    /** Shipment unique identifier */
    private _shipmentId;
    /** Order item id */
    private _orderItemId?;
    /** orderItem field */
    private _orderItem;
    /**
     Creates a new instance of ShipmentItem
     */
    constructor(data?: Partial<ShipmentItem>);
    /**
     Unique identifier
     */
    get id(): string;
    /**
     Unique identifier
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
     Shipment item name
     */
    get name(): string | undefined;
    /**
     Shipment item name
     */
    set name(value: string | undefined);
    /**
     Product SKU
     */
    get sku(): string | undefined;
    /**
     Product SKU
     */
    set sku(value: string | undefined);
    /**
     Shipment item quantity
     */
    get quantity(): number | undefined;
    /**
     Shipment item quantity
     */
    set quantity(value: number | undefined);
    /**
     Shipment unique identifier
     */
    get shipmentId(): string;
    /**
     Shipment unique identifier
     */
    set shipmentId(value: string);
    /**
     Order item id
     */
    get orderItemId(): number | undefined;
    /**
     Order item id
     */
    set orderItemId(value: number | undefined);
    /**
     orderItem field
     */
    get orderItem(): OrderItem;
    /**
     orderItem field
     */
    set orderItem(value: OrderItem);
}
//# sourceMappingURL=ShipmentItem.d.ts.map