import { BaseService } from './BaseService';
import { Warehouse } from '../type/Warehouse';
import { WarehousesResponse } from '../type/WarehousesResponse';
import { WarehousesSearchInput } from '../type/WarehousesSearchInput';
import { CreateWarehouseInput } from '../type/CreateWarehouseInput';
import { UpdateWarehouseInput } from '../type/UpdateWarehouseInput';
/**
 Service class for Warehouse-related GraphQL operations
 */
export declare class WarehouseService extends BaseService {
    /**
     Fetches a single warehouse by ID
     * @param id Warehouse ID to fetch
     * @returns Promise<Warehouse> The warehouse data
     */
    getWarehouse(id: number): Promise<Warehouse>;
    /**
     Fetches a list of warehouses with search criteria
     * @param input Warehouse search input parameters
     * @returns Promise<WarehousesResponse> The warehouses response data
     */
    getWarehouses(input?: WarehousesSearchInput): Promise<WarehousesResponse>;
    /**
     Creates a new warehouse
     * @param input Warehouse creation input data
     * @returns Promise<Warehouse> The created warehouse
     */
    createWarehouse(input: CreateWarehouseInput): Promise<Warehouse>;
    /**
     Updates an existing warehouse
     * @param input Warehouse update input data
     * @returns Promise<Warehouse> The updated warehouse
     */
    updateWarehouse(input: UpdateWarehouseInput): Promise<Warehouse>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=WarehouseService.d.ts.map