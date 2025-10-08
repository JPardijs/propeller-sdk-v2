import { BaseService } from './BaseService';
import { Crossupsell } from '../type/Crossupsell';
import { CrossupsellsResponse } from '../type/CrossupsellsResponse';
import { CrossupsellSearchInput } from '../type/CrossupsellSearchInput';
import { CrossupsellCreateInput } from '../type/CrossupsellCreateInput';
import { CrossupsellUpdateInput } from '../type/CrossupsellUpdateInput';
/**
 Service class for Crossupsell-related GraphQL operations
 */
export declare class CrossupsellService extends BaseService {
    /**
     Fetches a single crossupsell by ID
     * @param id Crossupsell ID to fetch
     * @returns Promise<Crossupsell> The crossupsell data
     */
    getCrossupsell(id: number): Promise<Crossupsell>;
    /**
     Fetches a list of crossupsells with search criteria
     * @param input Crossupsell search input parameters
     * @returns Promise<CrossupsellsResponse> The crossupsells response data
     */
    getCrossupsells(input?: CrossupsellSearchInput): Promise<CrossupsellsResponse>;
    /**
     Creates a new crossupsell
     * @param input Crossupsell creation input data
     * @returns Promise<Crossupsell> The created crossupsell
     */
    createCrossupsell(input: CrossupsellCreateInput): Promise<Crossupsell>;
    /**
     Updates an existing crossupsell
     * @param input Crossupsell update input data
     * @returns Promise<Crossupsell> The updated crossupsell
     */
    updateCrossupsell(input: CrossupsellUpdateInput): Promise<Crossupsell>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=CrossupsellService.d.ts.map