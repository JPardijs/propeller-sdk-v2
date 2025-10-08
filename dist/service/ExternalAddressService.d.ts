import { BaseService } from './BaseService';
import { ExternalAddress } from '../type/ExternalAddress';
import { ExternalAddressCreateInput } from '../type/ExternalAddressCreateInput';
import { ExternalAddressUpdateInput } from '../type/ExternalAddressUpdateInput';
import { ExternalAddressDeleteInput } from '../type/ExternalAddressDeleteInput';
/**
 Service for managing external addresses
 * @extends BaseService
 */
export declare class ExternalAddressService extends BaseService {
    /**
     Retrieves a specific external address
     * @param id External address ID
     * @returns Promise<ExternalAddress> External address data
     */
    getExternalAddress(id: number): Promise<ExternalAddress>;
    /**
     Creates a new external address
     * @param input External address creation input
     * @returns Promise<ExternalAddress> The created external address
     */
    createExternalAddress(input: ExternalAddressCreateInput): Promise<ExternalAddress>;
    /**
     Updates an existing external address
     * @param input External address update input
     * @returns Promise<ExternalAddress> The updated external address
     */
    updateExternalAddress(input: ExternalAddressUpdateInput): Promise<ExternalAddress>;
    /**
     Deletes an external address
     * @param input External address delete input
     * @returns Promise<boolean> Success status
     */
    deleteExternalAddress(input: ExternalAddressDeleteInput): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=ExternalAddressService.d.ts.map