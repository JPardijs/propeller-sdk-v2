import { BaseService } from './BaseService';
import { Carrier } from '../type/Carrier';
import { CarriersResponse } from '../type/CarriersResponse';
import { CarriersSearchInput } from '../type/CarriersSearchInput';
import { CarrierCreateInput } from '../type/CarrierCreateInput';
import { CarrierUpdateInput } from '../type/CarrierUpdateInput';
/**
 Service class for Carrier-related GraphQL operations
 */
export declare class CarrierService extends BaseService {
    /**
     Fetches a single carrier by ID
     * @param id Carrier ID to fetch
     * @returns Promise<Carrier> The carrier data
     */
    getCarrier(id: number): Promise<Carrier>;
    /**
     Fetches a list of carriers with search criteria
     * @param input Carrier search input parameters
     * @returns Promise<CarriersResponse> The carriers response data
     */
    getCarriers(input?: CarriersSearchInput): Promise<CarriersResponse>;
    /**
     Creates a new carrier
     * @param input Carrier creation input data
     * @returns Promise<Carrier> The created carrier
     */
    createCarrier(input: CarrierCreateInput): Promise<Carrier>;
    /**
     Updates an existing carrier
     * @param input Carrier update input data
     * @returns Promise<Carrier> The updated carrier
     */
    updateCarrier(input: CarrierUpdateInput): Promise<Carrier>;
    /**
     Deletes a carrier
     * @param id Carrier ID to delete
     * @returns Promise<boolean> Success status
     */
    deleteCarrier(id: number): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=CarrierService.d.ts.map