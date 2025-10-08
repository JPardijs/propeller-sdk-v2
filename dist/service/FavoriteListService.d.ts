import { BaseService } from './BaseService';
import { FavoriteList } from '../type/FavoriteList';
import { FavoriteListsResponse } from '../type/FavoriteListsResponse';
import { FavoriteListsSearchInput } from '../type/FavoriteListsSearchInput';
import { FavoriteListsCreateInput } from '../type/FavoriteListsCreateInput';
import { FavoriteListsUpdateInput } from '../type/FavoriteListsUpdateInput';
/**
 Service for managing favorite lists
 * @extends BaseService
 */
export declare class FavoriteListService extends BaseService {
    /**
     Retrieves a specific favorite list
     * @param variables
     * - id: String - Favorite list ID
     * - language: String - language to fetch the list data in
     * - priceCalculateProductInput: PriceCalculateProductInput - Price calculation input
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<FavoriteList> Favorite list data
     */
    getFavoriteList(variables: any): Promise<FavoriteList>;
    /**
     Retrieves favorite lists with search
     * @param input Search input parameters
     * @returns Promise<FavoriteListsResponse> Favorite lists response
     */
    getFavoriteLists(input?: FavoriteListsSearchInput): Promise<FavoriteListsResponse>;
    /**
     Creates a new favorite list
     * @param input Favorite list creation input
     * @returns Promise<FavoriteList> The created favorite list
     */
    createFavoriteList(input: FavoriteListsCreateInput): Promise<FavoriteList>;
    /**
     Updates an existing favorite list
     * @param id Favorite list ID
     * @param input Favorite list update input
     * @returns Promise<FavoriteList> The updated favorite list
     */
    updateFavoriteList(id: string, input: FavoriteListsUpdateInput): Promise<FavoriteList>;
    /**
     Deletes a favorite list
     * @param id FavoriteList ID to delete
     * @returns Promise<boolean> Success status
     */
    deleteFavoriteList(id: string): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=FavoriteListService.d.ts.map