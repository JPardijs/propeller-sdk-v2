import { BaseService } from './BaseService';
import { Site } from '../type/Site';
/**
 Service class for Site-related GraphQL operations
 */
export declare class SiteService extends BaseService {
    /**
     Fetches site information
     * @returns Promise<Site> The site data
     */
    getSite(): Promise<Site>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=SiteService.d.ts.map