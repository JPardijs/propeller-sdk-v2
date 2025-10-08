import { BaseService } from './BaseService';
import { SparePart } from '../type/SparePart';
import { SparePartsResponse } from '../type/SparePartsResponse';
import { CreateSparePartInput } from '../type/CreateSparePartInput';
/**
 Service for managing spare parts
 * @extends BaseService
 */
export declare class SparePartService extends BaseService {
    /**
     Retrieves a specific spare part
     * @param id Spare part ID
     * @returns Promise<SparePart> Spare part data
     */
    getSparePart(id: number): Promise<SparePart>;
    /**
     Retrieves all spare parts
     * @returns Promise<SparePartsResponse> Spare parts response
     */
    getSpareParts(): Promise<SparePartsResponse>;
    /**
     Creates a new spare part
     * @param input Spare part creation input
     * @returns Promise<SparePart> The created spare part
     */
    createSparePart(input: CreateSparePartInput): Promise<SparePart>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=SparePartService.d.ts.map