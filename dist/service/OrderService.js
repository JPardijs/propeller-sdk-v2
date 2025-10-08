"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const BaseService_1 = require("./BaseService");
const Order_1 = require("../type/Order");
const OrderResponse_1 = require("../type/OrderResponse");
const OrderItem_1 = require("../type/OrderItem");
const Orderlist_1 = require("../type/Orderlist");
const OrderlistsResponse_1 = require("../type/OrderlistsResponse");
const OrderStatus_1 = require("../type/OrderStatus");
const OrderStatusesResponse_1 = require("../type/OrderStatusesResponse");
const OrderStatusSet_1 = require("../type/OrderStatusSet");
const OrderStatusSetsResponse_1 = require("../type/OrderStatusSetsResponse");
const Address_1 = require("../type/Address");
/**
 Service class for Order-related GraphQL operations
 */
class OrderService extends BaseService_1.BaseService {
    /**
     Fetches a list of orders with search criteria
     * @param input Order search input parameters
     * @returns Promise<OrderResponse> The orders response data
     */
    async getOrders(input) {
        const variables = { input };
        const result = await this.executeQuery('orders', variables);
        return new OrderResponse_1.OrderResponse(result.data.orders);
    }
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
    async getOrder(variables) {
        const result = await this.executeQuery('order', variables);
        return new Order_1.Order(result.data.order);
    }
    /**
     Creates a new order
     * @param input Order creation input data
     * @returns Promise<Order> The created order
     */
    async createOrder(input) {
        const variables = { input };
        const result = await this.executeMutation('orderCreate', variables);
        return new Order_1.Order(result.data.orderCreate);
    }
    /**
     Updates an existing order
     * @param input Order update input data
     * @returns Promise<Order> The updated order
     */
    async updateOrder(input) {
        const variables = { input };
        const result = await this.executeMutation('orderUpdate', variables);
        return new Order_1.Order(result.data.orderUpdate);
    }
    /**
     Sets the status of an order
     * @param input Order status input data
     * @returns Promise<Order> The updated order
     */
    async setOrderStatus(input) {
        const variables = { input };
        const result = await this.executeMutation('orderSetStatus', variables);
        return new Order_1.Order(result.data.orderSetStatus);
    }
    /**
     Updates an order address
     * @param input Order address update input data
     * @returns Promise<Order> The updated order
     */
    async updateOrderAddress(input) {
        const variables = { input };
        const result = await this.executeMutation('orderAddressUpdate', variables);
        return new Order_1.Order(result.data.orderAddressUpdate);
    }
    /**
     Sends order confirmation email
     * @param orderId Order ID
     * @returns Promise<boolean> Success status
     */
    async sendOrderConfirmationEmail(orderId) {
        const variables = { orderId };
        const result = await this.executeMutation('orderSendConfirmationEmail', variables);
        return result.data.orderSendConfirmationEmail;
    }
    /**
     Fetches order PDF
     * @param orderId Order ID
     * @returns Promise<any> The PDF data
     */
    async getOrderPDF(orderId) {
        const variables = { orderId };
        const result = await this.executeQuery('orderGetPDF', variables);
        return result.data.orderGetPDF;
    }
    /**
     Fetches order address
     * @param orderId Order ID
     * @param addressType Address type
     * @returns Promise<Address> The address data
     */
    async getOrderAddress(orderId, addressType) {
        const variables = { orderId, addressType };
        const result = await this.executeQuery('orderAddress', variables);
        return new Address_1.Address(result.data.orderAddress);
    }
    /**
     Fetches all addresses for an order
     * @param orderId Order ID
     * @returns Promise<Address[]> The addresses array
     */
    async getOrderAddresses(orderId) {
        const variables = { orderId };
        const result = await this.executeQuery('orderAddresses', variables);
        return result.data.orderAddresses.map((address) => new Address_1.Address(address));
    }
    /**
     Fetches addresses by order ID
     * @param orderId Order ID
     * @returns Promise<Address[]> The addresses array
     */
    async getAddressesByOrderId(orderId) {
        const variables = { orderId };
        const result = await this.executeQuery('addressesByOrderId', variables);
        return result.data.addressesByOrderId.map((address) => new Address_1.Address(address));
    }
    /**
     Creates a new order item
     * @param input Order item creation input data
     * @returns Promise<OrderItem> The created order item
     */
    async createOrderItem(input) {
        const variables = { input };
        const result = await this.executeMutation('orderItemCreate', variables);
        return new OrderItem_1.OrderItem(result.data.orderItemCreate);
    }
    /**
     Updates an existing order item
     * @param input Order item update input data
     * @returns Promise<OrderItem> The updated order item
     */
    async updateOrderItem(input) {
        const variables = { input };
        const result = await this.executeMutation('orderItemUpdate', variables);
        return new OrderItem_1.OrderItem(result.data.orderItemUpdate);
    }
    /**
     Fetches a single orderlist by ID
     * @param id Orderlist ID to fetch
     * @returns Promise<Orderlist> The orderlist data
     */
    async getOrderlist(id) {
        const variables = { id };
        const result = await this.executeQuery('orderlist', variables);
        return new Orderlist_1.Orderlist(result.data.orderlist);
    }
    /**
     Fetches a list of orderlists with search criteria
     * @param input Orderlist search input parameters
     * @returns Promise<OrderlistsResponse> The orderlists response data
     */
    async getOrderlists(input) {
        const variables = { input };
        const result = await this.executeQuery('orderlists', variables);
        return new OrderlistsResponse_1.OrderlistsResponse(result.data.orderlists);
    }
    /**
     Creates a new orderlist
     * @param input Orderlist creation input data
     * @returns Promise<Orderlist> The created orderlist
     */
    async createOrderlist(input) {
        const variables = { input };
        const result = await this.executeMutation('orderlistCreate', variables);
        return new Orderlist_1.Orderlist(result.data.orderlistCreate);
    }
    /**
     Updates an existing orderlist
     * @param input Orderlist update input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    async updateOrderlist(input) {
        const variables = { input };
        const result = await this.executeMutation('orderlistUpdate', variables);
        return new Orderlist_1.Orderlist(result.data.orderlistUpdate);
    }
    /**
     Adds items to an orderlist
     * @param input Orderlist add items input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    async addItemsToOrderlist(input) {
        const variables = { input };
        const result = await this.executeMutation('orderlistAddItems', variables);
        return new Orderlist_1.Orderlist(result.data.orderlistAddItems);
    }
    /**
     Removes items from an orderlist
     * @param input Orderlist remove items input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    async removeItemsFromOrderlist(input) {
        const variables = { input };
        const result = await this.executeMutation('orderlistRemoveItems', variables);
        return new Orderlist_1.Orderlist(result.data.orderlistRemoveItems);
    }
    /**
     Assigns companies to an orderlist
     * @param input Orderlist assign companies input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    async assignCompaniesToOrderlist(input) {
        const variables = { input };
        const result = await this.executeMutation('orderlistAssignCompanies', variables);
        return new Orderlist_1.Orderlist(result.data.orderlistAssignCompanies);
    }
    /**
     Unassigns companies from an orderlist
     * @param input Orderlist unassign companies input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    async unassignCompaniesFromOrderlist(input) {
        const variables = { input };
        const result = await this.executeMutation('orderlistUnassignCompanies', variables);
        return new Orderlist_1.Orderlist(result.data.orderlistUnassignCompanies);
    }
    /**
     Assigns users to an orderlist
     * @param input Orderlist assign users input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    async assignUsersToOrderlist(input) {
        const variables = { input };
        const result = await this.executeMutation('orderlistAssignUsers', variables);
        return new Orderlist_1.Orderlist(result.data.orderlistAssignUsers);
    }
    /**
     Unassigns users from an orderlist
     * @param input Orderlist unassign users input data
     * @returns Promise<Orderlist> The updated orderlist
     */
    async unassignUsersFromOrderlist(input) {
        const variables = { input };
        const result = await this.executeMutation('orderlistUnassignUsers', variables);
        return new Orderlist_1.Orderlist(result.data.orderlistUnassignUsers);
    }
    /**
     Fetches a single order status by ID
     * @param id Order status ID to fetch
     * @returns Promise<OrderStatus> The order status data
     */
    async getOrderStatus(id) {
        const variables = { id };
        const result = await this.executeQuery('orderStatus', variables);
        return new OrderStatus_1.OrderStatus(result.data.orderStatus);
    }
    /**
     Fetches a list of order statuses with search criteria
     * @param input Order status search input parameters
     * @returns Promise<OrderStatusesResponse> The order statuses response data
     */
    async getOrderStatuses(input) {
        const variables = { input };
        const result = await this.executeQuery('orderStatuses', variables);
        return new OrderStatusesResponse_1.OrderStatusesResponse(result.data.orderStatuses);
    }
    /**
     Creates a new order status
     * @param input Order status creation input data
     * @returns Promise<OrderStatus> The created order status
     */
    async createOrderStatus(input) {
        const variables = { input };
        const result = await this.executeMutation('orderStatusCreate', variables);
        return new OrderStatus_1.OrderStatus(result.data.orderStatusCreate);
    }
    /**
     Updates an existing order status
     * @param input Order status update input data
     * @returns Promise<OrderStatus> The updated order status
     */
    async updateOrderStatus(input) {
        const variables = { input };
        const result = await this.executeMutation('orderStatusUpdate', variables);
        return new OrderStatus_1.OrderStatus(result.data.orderStatusUpdate);
    }
    /**
     Fetches a single order status set by ID
     * @param id Order status set ID to fetch
     * @returns Promise<OrderStatusSet> The order status set data
     */
    async getOrderStatusSet(id) {
        const variables = { id };
        const result = await this.executeQuery('orderStatusSet', variables);
        return new OrderStatusSet_1.OrderStatusSet(result.data.orderStatusSet);
    }
    /**
     Fetches a list of order status sets with search criteria
     * @param input Order status set search input parameters
     * @returns Promise<OrderStatusSetsResponse> The order status sets response data
     */
    async getOrderStatusSets(input) {
        const variables = { input };
        const result = await this.executeQuery('orderStatusSets', variables);
        return new OrderStatusSetsResponse_1.OrderStatusSetsResponse(result.data.orderStatusSets);
    }
    /**
     Creates a new order status set
     * @param input Order status set creation input data
     * @returns Promise<OrderStatusSet> The created order status set
     */
    async createOrderStatusSet(input) {
        const variables = { input };
        const result = await this.executeMutation('orderStatusSetCreate', variables);
        return new OrderStatusSet_1.OrderStatusSet(result.data.orderStatusSetCreate);
    }
    /**
     Updates an existing order status set
     * @param input Order status set update input data
     * @returns Promise<OrderStatusSet> The updated order status set
     */
    async updateOrderStatusSet(input) {
        const variables = { input };
        const result = await this.executeMutation('orderStatusSetUpdate', variables);
        return new OrderStatusSet_1.OrderStatusSet(result.data.orderStatusSetUpdate);
    }
    /**
     Adds order statuses to an order status set
     * @param input Add order statuses input data
     * @returns Promise<OrderStatusSet> The updated order status set
     */
    async addOrderStatusesToOrderStatusSet(input) {
        const variables = { input };
        const result = await this.executeMutation('orderStatusSetAddOrderStatuses', variables);
        return new OrderStatusSet_1.OrderStatusSet(result.data.orderStatusSetAddOrderStatuses);
    }
    /**
     Removes order statuses from an order status set
     * @param input Remove order statuses input data
     * @returns Promise<OrderStatusSet> The updated order status set
     */
    async removeOrderStatusesFromOrderStatusSet(input) {
        const variables = { input };
        const result = await this.executeMutation('orderStatusSetRemoveOrderStatuses', variables);
        return new OrderStatusSet_1.OrderStatusSet(result.data.orderStatusSetRemoveOrderStatuses);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=OrderService.js.map