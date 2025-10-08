"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseAddressService = void 0;
const BaseService_1 = require("./BaseService");
const WarehouseAddress_1 = require("../type/WarehouseAddress");
const WarehousesResponse_1 = require("../type/WarehousesResponse");
/**
 Service for managing warehouse addresses
 * @extends BaseService
 */
class WarehouseAddressService extends BaseService_1.BaseService {
    /**
     Retrieves a specific warehouse address
     * @param id Warehouse address ID
     * @returns Promise<WarehouseAddress> Warehouse address data
     */
    async getWarehouseAddress(id) {
        const variables = { id };
        const result = await this.executeQuery('warehouseAddress', variables);
        return new WarehouseAddress_1.WarehouseAddress(result.data.warehouseAddress);
    }
    /**
     Retrieves warehouse addresses with search
     * @param input Search input parameters
     * @returns Promise<WarehousesResponse> Warehouse addresses response
     */
    async getWarehouseAddresses(input) {
        const variables = { input };
        const result = await this.executeQuery('warehouseAddresses', variables);
        return new WarehousesResponse_1.WarehousesResponse(result.data.warehouseAddresses);
    }
    /**
     Creates a new warehouse address
     * @param input Warehouse address creation input
     * @returns Promise<WarehouseAddress> The created warehouse address
     */
    async createWarehouseAddress(input) {
        const variables = { input };
        const result = await this.executeMutation('warehouseAddressCreate', variables);
        return new WarehouseAddress_1.WarehouseAddress(result.data.warehouseAddressCreate);
    }
    /**
     Updates an existing warehouse address
     * @param input Warehouse address update input
     * @returns Promise<WarehouseAddress> The updated warehouse address
     */
    async updateWarehouseAddress(input) {
        const variables = { input };
        const result = await this.executeMutation('warehouseAddressUpdate', variables);
        return new WarehouseAddress_1.WarehouseAddress(result.data.warehouseAddressUpdate);
    }
    /**
     Deletes a warehouse address
     * @param id WarehouseAddress ID to delete
     * @returns Promise<boolean> Success status
     */
    async deleteWarehouseAddress(id) {
        const variables = { id };
        const result = await this.executeMutation('warehouseAddressDelete', variables);
        return result.data.warehouseAddressDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.WarehouseAddressService = WarehouseAddressService;
//# sourceMappingURL=WarehouseAddressService.js.map