import { BaseService } from './BaseService';
import { Bundle } from '../type/Bundle';
import { BundlesResponse } from '../type/BundlesResponse';
import { BundleSearchInput } from '../type/BundleSearchInput';
import { BundleCreateInput } from '../type/BundleCreateInput';
import { BundleUpdateInput } from '../type/BundleUpdateInput';
import { BundleAddItemsInput } from '../type/BundleAddItemsInput';
/**
 Service class for Bundle-related GraphQL operations
 */
export declare class BundleService extends BaseService {
    /**
     Fetches a single bundle by ID
     * @param id Bundle ID to fetch
     * @returns Promise<Bundle> The bundle data
     */
    getBundle(id: number): Promise<Bundle>;
    /**
     Fetches a list of bundles with search criteria
     * @param input Bundle search input parameters
     * @returns Promise<BundlesResponse> The bundles response data
     */
    getBundles(input?: BundleSearchInput): Promise<BundlesResponse>;
    /**
     Creates a new bundle
     * @param input Bundle creation input data
     * @returns Promise<Bundle> The created bundle
     */
    createBundle(input: BundleCreateInput): Promise<Bundle>;
    /**
     Updates an existing bundle
     * @param input Bundle update input data
     * @returns Promise<Bundle> The updated bundle
     */
    updateBundle(input: BundleUpdateInput): Promise<Bundle>;
    /**
     Adds items to a bundle
     * @param input Bundle add items input data
     * @returns Promise<Bundle> The updated bundle
     */
    addItemsToBundle(input: BundleAddItemsInput): Promise<Bundle>;
    /**
     Deletes a bundle
     * @param id Bundle ID to delete
     * @returns Promise<boolean> Success status
     */
    deleteBundle(id: number): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=BundleService.d.ts.map