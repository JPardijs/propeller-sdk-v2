import { BaseService } from './BaseService';
import { PurchaseAuthorizationConfig } from '../type/PurchaseAuthorizationConfig';
import { PurchaseAuthorizationConfigResponse } from '../type/PurchaseAuthorizationConfigResponse';
import { PurchaseAuthorizationConfigSearchInput } from '../type/PurchaseAuthorizationConfigSearchInput';
import { PurchaseAuthorizationConfigCreateInput } from '../type/PurchaseAuthorizationConfigCreateInput';
import { PurchaseAuthorizationConfigUpdateInput } from '../type/PurchaseAuthorizationConfigUpdateInput';
/**
 Service for managing purchase authorization configurations
 * @extends BaseService
 */
export declare class PurchaseAuthorizationConfigService extends BaseService {
    /**
     Retrieves a specific purchase authorization configuration
     * @param id Configuration ID
     * @returns Promise<PurchaseAuthorizationConfig> Purchase authorization configuration data
     */
    getPurchaseAuthorizationConfig(id: number): Promise<PurchaseAuthorizationConfig>;
    /**
     Retrieves purchase authorization configurations with search
     * @param input Search input parameters
     * @returns Promise<PurchaseAuthorizationConfigResponse[]> List of purchase authorization configurations
     */
    getPurchaseAuthorizationConfigs(input?: PurchaseAuthorizationConfigSearchInput): Promise<PurchaseAuthorizationConfigResponse[]>;
    /**
     Creates a new purchase authorization configuration
     * @param input Configuration creation input
     * @returns Promise<PurchaseAuthorizationConfig> The created configuration
     */
    createPurchaseAuthorizationConfig(input: PurchaseAuthorizationConfigCreateInput): Promise<PurchaseAuthorizationConfig>;
    /**
     Updates an existing purchase authorization configuration
     * @param input Configuration update input
     * @returns Promise<PurchaseAuthorizationConfig> The updated configuration
     */
    updatePurchaseAuthorizationConfig(input: PurchaseAuthorizationConfigUpdateInput): Promise<PurchaseAuthorizationConfig>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=PurchaseAuthorizationConfigService.d.ts.map