import { BaseService } from './BaseService';
import { Inventory } from '../type/Inventory';
/**
 Service class for Inventory-related GraphQL operations
 */
export declare class InventoryService extends BaseService {
    /**
     Fetches inventory with search criteria
     * @param input Inventory search input parameters
     * @returns Promise<Inventory[]> The inventory data array
     */
    getInventory(input?: any): Promise<Inventory[]>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=InventoryService.d.ts.map