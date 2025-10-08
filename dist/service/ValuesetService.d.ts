import { BaseService } from './BaseService';
import { Valueset } from '../type/Valueset';
import { ValuesetResponse } from '../type/ValuesetResponse';
import { ValuesetSearchInput } from '../type/ValuesetSearchInput';
import { ValuesetCreateInput } from '../type/ValuesetCreateInput';
import { ValuesetUpdateInput } from '../type/ValuesetUpdateInput';
import { ValuesetItemResponse } from '../type/ValuesetItemResponse';
import { ValuesetItemSearchInput } from '../type/ValuesetItemSearchInput';
/**
 Service class for Valueset-related GraphQL operations
 */
export declare class ValuesetService extends BaseService {
    /**
     Fetches a single valueset by ID
     * @param id Valueset ID to fetch
     * @returns Promise<Valueset> The valueset data
     */
    getValueset(id: number): Promise<Valueset>;
    /**
     Fetches a list of valuesets with search criteria
     * @param input Valueset search input parameters
     * @returns Promise<ValuesetResponse> The valuesets response data
     */
    getValuesets(input?: ValuesetSearchInput): Promise<ValuesetResponse>;
    /**
     Creates a new valueset
     * @param input Valueset creation input data
     * @returns Promise<Valueset> The created valueset
     */
    createValueset(input: ValuesetCreateInput): Promise<Valueset>;
    /**
     Updates an existing valueset
     * @param input Valueset update input data
     * @returns Promise<Valueset> The updated valueset
     */
    updateValueset(input: ValuesetUpdateInput): Promise<Valueset>;
    /**
     Deletes a valueset
     * @param id Valueset ID to delete
     * @returns Promise<boolean> Success status
     */
    deleteValueset(id: number): Promise<boolean>;
    /**
     Fetches valueset items with search criteria
     * @param input ValuesetItem search input parameters
     * @returns Promise<ValuesetItemResponse> The valueset items response data
     */
    getValuesetItems(input?: ValuesetItemSearchInput): Promise<ValuesetItemResponse>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=ValuesetService.d.ts.map