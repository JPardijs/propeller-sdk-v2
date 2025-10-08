import { BaseService } from './BaseService';
import { Surcharge } from '../type/Surcharge';
import { SurchargesResponse } from '../type/SurchargesResponse';
import { SurchargeSearchInput } from '../type/SurchargeSearchInput';
import { SurchargeInput } from '../type/SurchargeInput';
import { UpdateSurchargeInput } from '../type/UpdateSurchargeInput';
/**
 Service class for Surcharge-related GraphQL operations
 */
export declare class SurchargeService extends BaseService {
    /**
     Fetches a single surcharge by ID
     * @param id Surcharge ID to fetch
     * @returns Promise<Surcharge> The surcharge data
     */
    getSurcharge(id: number): Promise<Surcharge>;
    /**
     Fetches a list of surcharges with search criteria
     * @param input Surcharge search input parameters
     * @returns Promise<SurchargesResponse> The surcharges response data
     */
    getSurcharges(input?: SurchargeSearchInput): Promise<SurchargesResponse>;
    /**
     Creates a new surcharge
     * @param input Surcharge creation input data
     * @returns Promise<Surcharge> The created surcharge
     */
    createSurcharge(input: SurchargeInput): Promise<Surcharge>;
    /**
     Updates an existing surcharge
     * @param input Surcharge update input data
     * @returns Promise<Surcharge> The updated surcharge
     */
    updateSurcharge(input: UpdateSurchargeInput): Promise<Surcharge>;
    /**
     Deletes a surcharge
     * @param id Surcharge ID to delete
     * @returns Promise<boolean> Success status
     */
    deleteSurcharge(id: number): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=SurchargeService.d.ts.map