import { BaseService } from './BaseService';
import { SparePartsMachineMedia } from '../type/SparePartsMachineMedia';
/**
 Service for managing spare parts machine media
 * @extends BaseService
 */
export declare class SparePartsMachineMediaService extends BaseService {
    /**
     Retrieves a specific spare parts machine media
     * @param id Media ID
     * @returns Promise<SparePartsMachineMedia> Media data
     */
    getSparePartsMachineMedia(id: number): Promise<SparePartsMachineMedia>;
    /**
     Retrieves all spare parts machine media
     * @returns Promise<SparePartsMachineMedia[]> Array of media items
     */
    getSparePartsMachineMedias(): Promise<SparePartsMachineMedia[]>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=SparePartsMachineMediaService.d.ts.map