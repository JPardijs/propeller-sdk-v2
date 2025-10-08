"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentService = void 0;
const BaseService_1 = require("./BaseService");
const Shipment_1 = require("../type/Shipment");
const ShipmentResponse_1 = require("../type/ShipmentResponse");
const ShipmentItem_1 = require("../type/ShipmentItem");
const ShipmentItemResponse_1 = require("../type/ShipmentItemResponse");
/**
 Service for managing shipments and shipment items
 * @extends BaseService
 */
class ShipmentService extends BaseService_1.BaseService {
    /**
     Retrieves a specific shipment
     * @param id Shipment ID
     * @returns Promise<Shipment> Shipment data
     */
    async getShipment(id) {
        const variables = { id };
        const result = await this.executeQuery('shipment', variables);
        return new Shipment_1.Shipment(result.data.shipment);
    }
    /**
     Retrieves shipments with search criteria
     * @param input Search input parameters
     * @returns Promise<ShipmentResponse> Shipments response
     */
    async getShipments(input) {
        const variables = { input };
        const result = await this.executeQuery('shipments', variables);
        return new ShipmentResponse_1.ShipmentResponse(result.data.shipments);
    }
    /**
     Creates a new shipment
     * @param input Shipment creation input
     * @returns Promise<Shipment> The created shipment
     */
    async createShipment(input) {
        const variables = { input };
        const result = await this.executeMutation('shipmentCreate', variables);
        return new Shipment_1.Shipment(result.data.shipmentCreate);
    }
    /**
     Updates an existing shipment
     * @param input Shipment update input
     * @returns Promise<Shipment> The updated shipment
     */
    async updateShipment(input) {
        const variables = { input };
        const result = await this.executeMutation('shipmentUpdate', variables);
        return new Shipment_1.Shipment(result.data.shipmentUpdate);
    }
    /**
     Deletes a shipment
     * @param id Shipment ID
     * @returns Promise<boolean> Success status
     */
    async deleteShipment(id) {
        const variables = { id };
        const result = await this.executeMutation('shipmentDelete', variables);
        return result.data.shipmentDelete;
    }
    /**
     Retrieves a specific shipment item
     * @param id Shipment item ID
     * @returns Promise<ShipmentItem> Shipment item data
     */
    async getShipmentItem(id) {
        const variables = { id };
        const result = await this.executeQuery('shipmentItem', variables);
        return new ShipmentItem_1.ShipmentItem(result.data.shipmentItem);
    }
    /**
     Retrieves shipment items with search criteria
     * @param input Search input parameters
     * @returns Promise<ShipmentItemResponse> Shipment items response
     */
    async getShipmentItems(input) {
        const variables = { input };
        const result = await this.executeQuery('shipmentItems', variables);
        return new ShipmentItemResponse_1.ShipmentItemResponse(result.data.shipmentItems);
    }
    /**
     Creates a new shipment item
     * @param input Shipment item creation input
     * @returns Promise<ShipmentItem> The created shipment item
     */
    async createShipmentItem(input) {
        const variables = { input };
        const result = await this.executeMutation('shipmentItemCreate', variables);
        return new ShipmentItem_1.ShipmentItem(result.data.shipmentItemCreate);
    }
    /**
     Updates an existing shipment item
     * @param input Shipment item update input
     * @returns Promise<ShipmentItem> The updated shipment item
     */
    async updateShipmentItem(input) {
        const variables = { input };
        const result = await this.executeMutation('shipmentItemUpdate', variables);
        return new ShipmentItem_1.ShipmentItem(result.data.shipmentItemUpdate);
    }
    /**
     Deletes a shipment item
     * @param id Shipment item ID
     * @returns Promise<boolean> Success status
     */
    async deleteShipmentItem(id) {
        const variables = { id };
        const result = await this.executeMutation('shipmentItemDelete', variables);
        return result.data.shipmentItemDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.ShipmentService = ShipmentService;
//# sourceMappingURL=ShipmentService.js.map