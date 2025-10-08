import { BaseService } from './BaseService';
import { Shop } from '../type/Shop';
/**
 * Service class for Shop-related GraphQL operations
 */
export declare class ShopService extends BaseService {
    /**
     * Fetches a single shop by ID
     * @param id Shop ID to fetch
     * @returns Promise<Shop> The shop data
     */
    getShop(id: number): Promise<Shop>;
    /**
     * Fetches a list of shops
     * @returns Promise<Shop[]> The shops data array
     */
    getShops(): Promise<Shop[]>;
    /**
     * Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=ShopService.d.ts.map