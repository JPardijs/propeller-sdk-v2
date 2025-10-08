"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const BaseService_1 = require("./BaseService");
const Inventory_1 = require("../type/Inventory");
/**
 Service class for Inventory-related GraphQL operations
 */
class InventoryService extends BaseService_1.BaseService {
    /**
     Fetches inventory with search criteria
     * @param input Inventory search input parameters
     * @returns Promise<Inventory[]> The inventory data array
     */
    async getInventory(input) {
        const variables = { input };
        const result = await this.executeQuery('inventory', variables);
        return result.data.inventory.map((item) => new Inventory_1.Inventory(item));
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.InventoryService = InventoryService;
//# sourceMappingURL=InventoryService.js.map