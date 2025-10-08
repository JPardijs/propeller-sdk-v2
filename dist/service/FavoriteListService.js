"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteListService = void 0;
const BaseService_1 = require("./BaseService");
const FavoriteList_1 = require("../type/FavoriteList");
const FavoriteListsResponse_1 = require("../type/FavoriteListsResponse");
/**
 Service for managing favorite lists
 * @extends BaseService
 */
class FavoriteListService extends BaseService_1.BaseService {
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
    async getFavoriteList(variables) {
        const result = await this.executeQuery('favoriteList', variables);
        return new FavoriteList_1.FavoriteList(result.data.favoriteList);
    }
    /**
     Retrieves favorite lists with search
     * @param input Search input parameters
     * @returns Promise<FavoriteListsResponse> Favorite lists response
     */
    async getFavoriteLists(input) {
        const variables = { input };
        const result = await this.executeQuery('favoriteLists', variables);
        return new FavoriteListsResponse_1.FavoriteListsResponse(result.data.favoriteLists);
    }
    /**
     Creates a new favorite list
     * @param input Favorite list creation input
     * @returns Promise<FavoriteList> The created favorite list
     */
    async createFavoriteList(input) {
        const variables = { input };
        const result = await this.executeMutation('favoriteListCreate', variables);
        return new FavoriteList_1.FavoriteList(result.data.favoriteListCreate);
    }
    /**
     Updates an existing favorite list
     * @param id Favorite list ID
     * @param input Favorite list update input
     * @returns Promise<FavoriteList> The updated favorite list
     */
    async updateFavoriteList(id, input) {
        const variables = { id, input };
        const result = await this.executeMutation('favoriteListUpdate', variables);
        return new FavoriteList_1.FavoriteList(result.data.favoriteListUpdate);
    }
    /**
     Deletes a favorite list
     * @param id FavoriteList ID to delete
     * @returns Promise<boolean> Success status
     */
    async deleteFavoriteList(id) {
        const variables = { id };
        const result = await this.executeMutation('favoriteListDelete', variables);
        return result.data.favoriteListDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.FavoriteListService = FavoriteListService;
//# sourceMappingURL=FavoriteListService.js.map