import { BaseService } from './BaseService';
import { SparePartsMachine } from '../type/SparePartsMachine';
import { SparePartsMachineResponse } from '../type/SparePartsMachineResponse';
import { SearchSparePartsMachineInput } from '../type/SearchSparePartsMachineInput';
import { CreateSparePartsMachineInput } from '../type/CreateSparePartsMachineInput';
import { UpsertSparePartsMachineInput } from '../type/UpsertSparePartsMachineInput';
/**
 Service for managing spare parts machines
 * @extends BaseService
 */
export declare class SparePartsMachineService extends BaseService {
    /**
     Retrieves a specific spare parts machine
     * @param id Spare parts machine ID
     * @returns Promise<SparePartsMachine> Spare parts machine data
     */
    getSparePartsMachine(id: number): Promise<SparePartsMachine>;
    /**
     Retrieves spare parts machines with search criteria
     * @param input Search input parameters
     * @returns Promise<SparePartsMachineResponse> Spare parts machines response
     */
    getSparePartsMachines(input?: SearchSparePartsMachineInput): Promise<SparePartsMachineResponse>;
    /**
     Creates a new spare parts machine
     * @param input Spare parts machine creation input
     * @returns Promise<SparePartsMachine> The created spare parts machine
     */
    createSparePartsMachine(input: CreateSparePartsMachineInput): Promise<SparePartsMachine>;
    /**
     Updates an existing spare parts machine
     * @param input Spare parts machine update input
     * @returns Promise<SparePartsMachine> The updated spare parts machine
     */
    updateSparePartsMachine(input: UpsertSparePartsMachineInput): Promise<SparePartsMachine>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=SparePartsMachineService.d.ts.map