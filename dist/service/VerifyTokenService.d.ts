import { BaseService } from './BaseService';
import { VerifyTokenInput } from '../type/VerifyTokenInput';
/**
 Service class for VerifyToken-related GraphQL operations
 */
export declare class VerifyTokenService extends BaseService {
    /**
     Verifies a token and returns response
     * @param input VerifyToken input data
     * @returns Promise<any> The verify token response data
     */
    verifyToken(input: VerifyTokenInput): Promise<any>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=VerifyTokenService.d.ts.map