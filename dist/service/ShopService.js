"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopService = void 0;
const BaseService_1 = require("./BaseService");
const Shop_1 = require("../type/Shop");
/**
 * Service class for Shop-related GraphQL operations
 */
class ShopService extends BaseService_1.BaseService {
    /**
     * Fetches a single shop by ID
     * @param id Shop ID to fetch
     * @returns Promise<Shop> The shop data
     */
    async getShop(id) {
        const variables = { id };
        const result = await this.executeQuery('shop', variables);
        return new Shop_1.Shop(result.data.shop);
    }
    /**
     * Fetches a list of shops
     * @returns Promise<Shop[]> The shops data array
     */
    async getShops() {
        const variables = {};
        const result = await this.executeQuery('shops', variables);
        return result.data.shops.map((shop) => new Shop_1.Shop(shop));
    }
    /**
     * Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.ShopService = ShopService;
//# sourceMappingURL=ShopService.js.map