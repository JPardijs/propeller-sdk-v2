import { OrderStatus } from './OrderStatus';
/**
 Object class for OrderStatusSet
 */
export declare class OrderStatusSet {
    /** The primary order status set identifier */
    private _id;
    /** The order status set name */
    private _name;
    /** The order status set description */
    private _description?;
    /** The order statuses in this set */
    private _orderStatuses?;
    /**
     Creates a new instance of OrderStatusSet
     */
    constructor(data?: Partial<OrderStatusSet>);
    /**
     The primary order status set identifier
     */
    get id(): number;
    /**
     The primary order status set identifier
     */
    set id(value: number);
    /**
     The order status set name
     */
    get name(): string;
    /**
     The order status set name
     */
    set name(value: string);
    /**
     The order status set description
     */
    get description(): string | undefined;
    /**
     The order status set description
     */
    set description(value: string | undefined);
    /**
     The order statuses in this set
     */
    get orderStatuses(): OrderStatus[] | undefined;
    /**
     The order statuses in this set
     */
    set orderStatuses(value: OrderStatus[] | undefined);
}
//# sourceMappingURL=OrderStatusSet.d.ts.map