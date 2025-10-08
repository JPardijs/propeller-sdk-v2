"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleService = void 0;
const BaseService_1 = require("./BaseService");
const Bundle_1 = require("../type/Bundle");
const BundlesResponse_1 = require("../type/BundlesResponse");
/**
 Service class for Bundle-related GraphQL operations
 */
class BundleService extends BaseService_1.BaseService {
    /**
     Fetches a single bundle by ID
     * @param id Bundle ID to fetch
     * @returns Promise<Bundle> The bundle data
     */
    async getBundle(id) {
        const variables = { id };
        const result = await this.executeQuery('bundle', variables);
        return new Bundle_1.Bundle(result.data.bundle);
    }
    /**
     Fetches a list of bundles with search criteria
     * @param input Bundle search input parameters
     * @returns Promise<BundlesResponse> The bundles response data
     */
    async getBundles(input) {
        const variables = { input };
        const result = await this.executeQuery('bundles', variables);
        return new BundlesResponse_1.BundlesResponse(result.data.bundles);
    }
    /**
     Creates a new bundle
     * @param input Bundle creation input data
     * @returns Promise<Bundle> The created bundle
     */
    async createBundle(input) {
        const variables = { input };
        const result = await this.executeMutation('bundleCreate', variables);
        return new Bundle_1.Bundle(result.data.bundleCreate);
    }
    /**
     Updates an existing bundle
     * @param input Bundle update input data
     * @returns Promise<Bundle> The updated bundle
     */
    async updateBundle(input) {
        const variables = { input };
        const result = await this.executeMutation('bundleUpdate', variables);
        return new Bundle_1.Bundle(result.data.bundleUpdate);
    }
    /**
     Adds items to a bundle
     * @param input Bundle add items input data
     * @returns Promise<Bundle> The updated bundle
     */
    async addItemsToBundle(input) {
        const variables = { input };
        const result = await this.executeMutation('bundleAddItems', variables);
        return new Bundle_1.Bundle(result.data.bundleAddItems);
    }
    /**
     Deletes a bundle
     * @param id Bundle ID to delete
     * @returns Promise<boolean> Success status
     */
    async deleteBundle(id) {
        const variables = { id };
        const result = await this.executeMutation('bundleDelete', variables);
        return result.data.bundleDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.BundleService = BundleService;
//# sourceMappingURL=BundleService.js.map