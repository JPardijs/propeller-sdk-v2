import { BaseService } from './BaseService';
/**
 Service class for GCIP User-related GraphQL operations
 */
export declare class GCIPUserService extends BaseService {
    /**
     * Retrieve GCIP user by ID
     * @param id - The user ID to retrieve
     * @returns Promise resolving to user data
     */
    getGCIPUser(id: number): Promise<any>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=GCIPUserService.d.ts.map