import { BaseService } from './BaseService';
import { Logout } from '../type/Logout';
/**
 Service for handling user logout operations
 * @extends BaseService
 */
export declare class LogoutService extends BaseService {
    /**
     Logs out a user and ends their session
     * @param userId User ID to logout
     * @returns Promise<Logout> Logout response
     */
    logout(userId: number): Promise<Logout>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=LogoutService.d.ts.map