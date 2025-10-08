import { BaseService } from './BaseService';
import { SparePartsMachine } from '../type/SparePartsMachine';
import { SparePartsMachineResponse } from '../type/SparePartsMachineResponse';
import { SearchSparePartsMachineInput } from '../type/SearchSparePartsMachineInput';
import { CreateSparePartsMachineInput } from '../type/CreateSparePartsMachineInput';
import { UpsertSparePartsMachineInput } from '../type/UpsertSparePartsMachineInput';
/**
 Service for managing machines (spare parts machines)
 * @extends BaseService
 */
export declare class MachineService extends BaseService {
    /**
     Retrieves a specific machine
     * @param id Machine ID
     * @returns Promise<SparePartsMachine> Machine data
     */
    getMachine(id: number): Promise<SparePartsMachine>;
    /**
     Retrieves machines with search criteria
     * @param input Search input parameters
     * @returns Promise<SparePartsMachineResponse> Machines response
     */
    getMachines(input?: SearchSparePartsMachineInput): Promise<SparePartsMachineResponse>;
    /**
     Creates a new machine
     * @param input Machine creation input
     * @returns Promise<SparePartsMachine> The created machine
     */
    createMachine(input: CreateSparePartsMachineInput): Promise<SparePartsMachine>;
    /**
     Updates an existing machine
     * @param input Machine update input
     * @returns Promise<SparePartsMachine> The updated machine
     */
    updateMachine(input: UpsertSparePartsMachineInput): Promise<SparePartsMachine>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=MachineService.d.ts.map