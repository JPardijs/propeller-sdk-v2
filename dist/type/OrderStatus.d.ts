import { OrderStatusType } from '../enum/OrderStatusType';
import { OrderStatusOrderType } from '../enum/OrderStatusOrderType';
import { OrderStatusSet } from './OrderStatusSet';
import { OrderStatusesResponse } from './OrderStatusesResponse';
/**
 Object class for OrderStatus
 */
export declare class OrderStatus {
    /** The primary order status identifier */
    private _id;
    /** The order status name */
    private _name;
    /** The order status code value */
    private _code;
    /** The order status type */
    private _type;
    /** The order status for order type */
    private _orderType;
    /** The order status description */
    private _description?;
    /** The order status priority */
    private _priority?;
    /** Marks if the order status is default */
    private _isDefault?;
    /** Marks if the order is public */
    private _isPublic?;
    /** Marks if the order is editable */
    private _isEditable?;
    /** Marks if the order is deletable */
    private _isDeletable?;
    /** Marks if the order is exportable */
    private _isExportable?;
    /** Marks if the order is confirmable */
    private _isConfirmable?;
    /** Marks if the order can be archived */
    private _isArchivable?;
    /** The order status creation date */
    private _createdAt;
    /** The order status last modification date */
    private _lastModifiedAt;
    /** The order status set the current status belongs to */
    private _statusSet?;
    /** nextStatuses field */
    private _nextStatuses;
    /** previousStatuses field */
    private _previousStatuses;
    /**
     Creates a new instance of OrderStatus
     */
    constructor(data?: Partial<OrderStatus>);
    /**
     The primary order status identifier
     */
    get id(): number;
    /**
     The primary order status identifier
     */
    set id(value: number);
    /**
     The order status name
     */
    get name(): string;
    /**
     The order status name
     */
    set name(value: string);
    /**
     The order status code value
     */
    get code(): string;
    /**
     The order status code value
     */
    set code(value: string);
    /**
     The order status type
     */
    get type(): OrderStatusType;
    /**
     The order status type
     */
    set type(value: OrderStatusType);
    /**
     The order status for order type
     */
    get orderType(): OrderStatusOrderType;
    /**
     The order status for order type
     */
    set orderType(value: OrderStatusOrderType);
    /**
     The order status description
     */
    get description(): string | undefined;
    /**
     The order status description
     */
    set description(value: string | undefined);
    /**
     The order status priority
     */
    get priority(): number | undefined;
    /**
     The order status priority
     */
    set priority(value: number | undefined);
    /**
     Marks if the order status is default
     */
    get isDefault(): boolean | undefined;
    /**
     Marks if the order status is default
     */
    set isDefault(value: boolean | undefined);
    /**
     Marks if the order is public
     */
    get isPublic(): boolean | undefined;
    /**
     Marks if the order is public
     */
    set isPublic(value: boolean | undefined);
    /**
     Marks if the order is editable
     */
    get isEditable(): boolean | undefined;
    /**
     Marks if the order is editable
     */
    set isEditable(value: boolean | undefined);
    /**
     Marks if the order is deletable
     */
    get isDeletable(): boolean | undefined;
    /**
     Marks if the order is deletable
     */
    set isDeletable(value: boolean | undefined);
    /**
     Marks if the order is exportable
     */
    get isExportable(): boolean | undefined;
    /**
     Marks if the order is exportable
     */
    set isExportable(value: boolean | undefined);
    /**
     Marks if the order is confirmable
     */
    get isConfirmable(): boolean | undefined;
    /**
     Marks if the order is confirmable
     */
    set isConfirmable(value: boolean | undefined);
    /**
     Marks if the order can be archived
     */
    get isArchivable(): boolean | undefined;
    /**
     Marks if the order can be archived
     */
    set isArchivable(value: boolean | undefined);
    /**
     The order status creation date
     */
    get createdAt(): string;
    /**
     The order status creation date
     */
    set createdAt(value: string);
    /**
     The order status last modification date
     */
    get lastModifiedAt(): string;
    /**
     The order status last modification date
     */
    set lastModifiedAt(value: string);
    /**
     The order status set the current status belongs to
     */
    get statusSet(): OrderStatusSet | undefined;
    /**
     The order status set the current status belongs to
     */
    set statusSet(value: OrderStatusSet | undefined);
    /**
     nextStatuses field
     */
    get nextStatuses(): OrderStatusesResponse;
    /**
     nextStatuses field
     */
    set nextStatuses(value: OrderStatusesResponse);
    /**
     previousStatuses field
     */
    get previousStatuses(): OrderStatusesResponse;
    /**
     previousStatuses field
     */
    set previousStatuses(value: OrderStatusesResponse);
}
//# sourceMappingURL=OrderStatus.d.ts.map