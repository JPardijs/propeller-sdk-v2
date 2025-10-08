import { BaseService } from './BaseService';
import { Order } from '../type/Order';
import { OrderResponse } from '../type/OrderResponse';
import { OrderSearchArguments } from '../type/OrderSearchArguments';
import { OrderInput } from '../type/OrderInput';
import { OrderUpdateInput } from '../type/OrderUpdateInput';
import { OrderSetStatusInput } from '../type/OrderSetStatusInput';
import { OrderAddressUpdateInput } from '../type/OrderAddressUpdateInput';
import { OrderItem } from '../type/OrderItem';
import { OrderItemCreateInput } from '../type/OrderItemCreateInput';
import { OrderItemUpdateInput } from '../type/OrderItemUpdateInput';
import { Orderlist } from '../type/Orderlist';
import { OrderlistsResponse } from '../type/OrderlistsResponse';
import { OrderlistSearchInput } from '../type/OrderlistSearchInput';
import { OrderlistCreateInput } from '../type/OrderlistCreateInput';
import { OrderlistUpdateInput } from '../type/OrderlistUpdateInput';
import { OrderlistItemsInput } from '../type/OrderlistItemsInput';
import { OrderlistCompaniesInput } from '../type/OrderlistCompaniesInput';
import { OrderlistUsersInput } from '../type/OrderlistUsersInput';
import { OrderStatus } from '../type/OrderStatus';
import { OrderStatusesResponse } from '../type/OrderStatusesResponse';
import { OrderStatusesSearchInput } from '../type/OrderStatusesSearchInput';
import { CreateOrderStatusInput } from '../type/CreateOrderStatusInput';
import { UpdateOrderStatusInput } from '../type/UpdateOrderStatusInput';
import { OrderStatusSet } from '../type/OrderStatusSet';
import { OrderStatusSetsResponse } from '../type/OrderStatusSetsResponse';
import { OrderStatusSetsSearchInput } from '../type/OrderStatusSetsSearchInput';
import { CreateOrderStatusSetInput } from '../type/CreateOrderStatusSetInput';
import { UpdateOrderStatusSetInput } from '../type/UpdateOrderStatusSetInput';
import { AddOrderStatusesToOrderStatusSetInput } from '../type/AddOrderStatusesToOrderStatusSetInput';
import { RemoveOrderStatusesFromOrderStatusSetInput } from '../type/RemoveOrderStatusesFromOrderStatusSetInput';
import { Address } from '../type/Address';
import { MediaImageProductSearchInput } from '../type/MediaImageProductSearchInput';
import { TransformationsInput } from '../type/TransformationsInput';
/**
 * Order query variables interface
 Variables for the order query
 */
export interface OrderQueryVariables {
    /** Order ID to fetch */
    orderId?: number;
    /** Order UUID unique identifier */
    orderUUID?: string;
    /** Language for localized content */
    language?: string;
    /** Image search filters */
    imageSearchFilters?: MediaImageProductSearchInput;
    /** Image transformation filters */
    imageVariantFilters?: TransformationsInput;
}
/**
 Service class for Order-related GraphQL operations
 */
export declare class OrderService extends BaseService {
    /**
     Fetches a list of orders with search criteria
     * @param input Order search input parameters
     * @returns Promise<OrderResponse> The orders response data
     */
    getOrders(input?: OrderSearchArguments): Promise<OrderResponse>;
    /**
     Fetches a single order by ID or UUID
     * @param variables Variables for the order query
     * - orderId: number - Order ID to fetch
     * - orderUUID: String - Order UUID unique identifier
     * - language: string - Language for localized content
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Order> The order data
     */
    getOrder(variables: OrderQueryVariables): Promise<Order>;
    /**
     Creates a new order
     * @param input Order creation input data
     * @returns Promise<Order> The created order
     */
    createOrder(input: OrderInput): Promise<Order>;
    /**
     Updates an existing order
     * @param input Order update input data
     * @returns Promise<Order> The updated order
     */
    updateOrder(input: OrderUpdateInput): Promise<Order>;
    /**
     Sets the status of an order
     * @param input Order status input data
     * @returns Promise<Order> The updated order
     */
    setOrderStatus(input: OrderSetStatusInput): Promise<Order>;
    /**
     Updates an order address
     * @param input Order address update input data
     * @returns Promise<Order> The updated order
     */
    updateOrderAddress(input: OrderAddressUpdateInput): Promise<Order>;
    /**
     Sends order confirmation email
     * @param orderId Order ID
     * @returns Promise<boolean> Success status
     */
    sendOrderConfirmationEmail(orderId: number): Promise<boolean>;
    /**
     Fetches order PDF
     * @param orderId Order ID
     * @returns Promise<any> The PDF data
     */
    getOrderPDF(orderId: number): Promise<any>;
    /**
     Fetches order address
     * @param orderId Order ID
     * @param addressType Address type
     * @returns Promise<Address> The address data
     */
    getOrderAddress(orderId: number, addressType?: string): Promise<Address>;
    /**
     Fetches all addresses for an order
     * @param orderId Order ID
     * @returns Promise<Address[]> The addresses array
     */
    getOrderAddresses(orderId: number): Promise<Address[]>;
    /**
     Fetches addresses by order ID
     * @param orderId Order ID
     * @returns Promise<Address[]> The addresses array
     */
    getAddressesByOrderId(orderId: number): Promise<Address[]>;
    /**
     Creates a new order item
     * @param input Order item creation input data
     * @returns Promise<OrderItem> The created order item
     */
    createOrderItem(input: OrderItemCreateInput): Promise<OrderItem>;
    /**
     Updates an existing order item
     * @param input Order item update input data
     * @returns Promise<OrderItem> The updated order item
     */
    updateOrderItem(input: OrderItemUpdateInput): Promise<OrderItem>;
    /**
     Fetches a single orderlist by ID
     * @param id Orderlist ID to fetch
     * @returns Promise<Orderlist> The orderlist data
     */
    getOrderlist(id: number): Promise<Orderlist>;
    /**
     Fetches a list of orderlists with search criteria
     * @param input Orderlist search input parameters
     * @returns Promise<OrderlistsResponse> The orderlists response data
     */
    getOrderlists(input?: OrderlistSearchInput): Promise<OrderlistsResponse>;
    /**
     Creates a new orderlist
     * @param input Orderlist creation input data
     * @returns Promise<Orderlist> The created orderlist
     */
    createOrderlist(input: OrderlistCreateInput): Promise<Orderlist>;
    /**
     Updates an existing orderlist
     * @param input Orderlist update input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    updateOrderlist(input: OrderlistUpdateInput): Promise<Orderlist>;
    /**
     Adds items to an orderlist
     * @param input Orderlist add items input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    addItemsToOrderlist(input: OrderlistItemsInput): Promise<Orderlist>;
    /**
     Removes items from an orderlist
     * @param input Orderlist remove items input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    removeItemsFromOrderlist(input: OrderlistItemsInput): Promise<Orderlist>;
    /**
     Assigns companies to an orderlist
     * @param input Orderlist assign companies input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    assignCompaniesToOrderlist(input: OrderlistCompaniesInput): Promise<Orderlist>;
    /**
     Unassigns companies from an orderlist
     * @param input Orderlist unassign companies input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    unassignCompaniesFromOrderlist(input: OrderlistCompaniesInput): Promise<Orderlist>;
    /**
     Assigns users to an orderlist
     * @param input Orderlist assign users input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    assignUsersToOrderlist(input: OrderlistUsersInput): Promise<Orderlist>;
    /**
     Unassigns users from an orderlist
     * @param input Orderlist unassign users input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    unassignUsersFromOrderlist(input: OrderlistUsersInput): Promise<Orderlist>;
    /**
     Fetches a single order status by ID
     * @param id Order status ID to fetch
     * @returns Promise<OrderStatus> The order status data
     */
    getOrderStatus(id: number): Promise<OrderStatus>;
    /**
     Fetches a list of order statuses with search criteria
     * @param input Order status search input parameters
     * @returns Promise<OrderStatusesResponse> The order statuses response data
     */
    getOrderStatuses(input?: OrderStatusesSearchInput): Promise<OrderStatusesResponse>;
    /**
     Creates a new order status
     * @param input Order status creation input data
     * @returns Promise<OrderStatus> The created order status
     */
    createOrderStatus(input: CreateOrderStatusInput): Promise<OrderStatus>;
    /**
     Updates an existing order status
     * @param input Order status update input data
     * @returns Promise<OrderStatus> The updated order status
     */
    updateOrderStatus(input: UpdateOrderStatusInput): Promise<OrderStatus>;
    /**
     Fetches a single order status set by ID
     * @param id Order status set ID to fetch
     * @returns Promise<OrderStatusSet> The order status set data
     */
    getOrderStatusSet(id: number): Promise<OrderStatusSet>;
    /**
     Fetches a list of order status sets with search criteria
     * @param input Order status set search input parameters
     * @returns Promise<OrderStatusSetsResponse> The order status sets response data
     */
    getOrderStatusSets(input?: OrderStatusSetsSearchInput): Promise<OrderStatusSetsResponse>;
    /**
     Creates a new order status set
     * @param input Order status set creation input data
     * @returns Promise<OrderStatusSet> The created order status set
     */
    createOrderStatusSet(input: CreateOrderStatusSetInput): Promise<OrderStatusSet>;
    /**
     Updates an existing order status set
     * @param input Order status set update input data
     * @returns Promise<OrderStatusSet> The updated order status set
     */
    updateOrderStatusSet(input: UpdateOrderStatusSetInput): Promise<OrderStatusSet>;
    /**
     Adds order statuses to an order status set
     * @param input Add order statuses input data
     * @returns Promise<OrderStatusSet> The updated order status set
     */
    addOrderStatusesToOrderStatusSet(input: AddOrderStatusesToOrderStatusSetInput): Promise<OrderStatusSet>;
    /**
     Removes order statuses from an order status set
     * @param input Remove order statuses input data
     * @returns Promise<OrderStatusSet> The updated order status set
     */
    removeOrderStatusesFromOrderStatusSet(input: RemoveOrderStatusesFromOrderStatusSetInput): Promise<OrderStatusSet>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=OrderService.d.ts.map