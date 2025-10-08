"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseService = void 0;
const BaseService_1 = require("./BaseService");
const Warehouse_1 = require("../type/Warehouse");
const WarehousesResponse_1 = require("../type/WarehousesResponse");
/**
 Service class for Warehouse-related GraphQL operations
 */
class WarehouseService extends BaseService_1.BaseService {
    /**
     Fetches a single warehouse by ID
     * @param id Warehouse ID to fetch
     * @returns Promise<Warehouse> The warehouse data
     */
    async getWarehouse(id) {
        const variables = { id };
        const result = await this.executeQuery('warehouse', variables);
        return new Warehouse_1.Warehouse(result.data.warehouse);
    }
    /**
     Fetches a list of warehouses with search criteria
     * @param input Warehouse search input parameters
     * @returns Promise<WarehousesResponse> The warehouses response data
     */
    async getWarehouses(input) {
        const variables = { input };
        const result = await this.executeQuery('warehouses', variables);
        return new WarehousesResponse_1.WarehousesResponse(result.data.warehouses);
    }
    /**
     Creates a new warehouse
     * @param input Warehouse creation input data
     * @returns Promise<Warehouse> The created warehouse
     */
    async createWarehouse(input) {
        const variables = { input };
        const result = await this.executeMutation('warehouseCreate', variables);
        return new Warehouse_1.Warehouse(result.data.warehouseCreate);
    }
    /**
     Updates an existing warehouse
     * @param input Warehouse update input data
     * @returns Promise<Warehouse> The updated warehouse
     */
    async updateWarehouse(input) {
        const variables = { input };
        const result = await this.executeMutation('warehouseUpdate', variables);
        return new Warehouse_1.Warehouse(result.data.warehouseUpdate);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.WarehouseService = WarehouseService;
//# sourceMappingURL=WarehouseService.js.map