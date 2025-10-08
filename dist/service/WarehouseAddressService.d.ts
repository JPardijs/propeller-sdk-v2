import { BaseService } from './BaseService';
import { WarehouseAddress } from '../type/WarehouseAddress';
import { WarehousesResponse } from '../type/WarehousesResponse';
import { WarehousesSearchInput } from '../type/WarehousesSearchInput';
import { CreateWarehouseAddressInput } from '../type/CreateWarehouseAddressInput';
import { UpdateWarehouseAddressInput } from '../type/UpdateWarehouseAddressInput';
/**
 Service for managing warehouse addresses
 * @extends BaseService
 */
export declare class WarehouseAddressService extends BaseService {
    /**
     Retrieves a specific warehouse address
     * @param id Warehouse address ID
     * @returns Promise<WarehouseAddress> Warehouse address data
     */
    getWarehouseAddress(id: number): Promise<WarehouseAddress>;
    /**
     Retrieves warehouse addresses with search
     * @param input Search input parameters
     * @returns Promise<WarehousesResponse> Warehouse addresses response
     */
    getWarehouseAddresses(input?: WarehousesSearchInput): Promise<WarehousesResponse>;
    /**
     Creates a new warehouse address
     * @param input Warehouse address creation input
     * @returns Promise<WarehouseAddress> The created warehouse address
     */
    createWarehouseAddress(input: CreateWarehouseAddressInput): Promise<WarehouseAddress>;
    /**
     Updates an existing warehouse address
     * @param input Warehouse address update input
     * @returns Promise<WarehouseAddress> The updated warehouse address
     */
    updateWarehouseAddress(input: UpdateWarehouseAddressInput): Promise<WarehouseAddress>;
    /**
     Deletes a warehouse address
     * @param id WarehouseAddress ID to delete
     * @returns Promise<boolean> Success status
     */
    deleteWarehouseAddress(id: number): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=WarehouseAddressService.d.ts.map