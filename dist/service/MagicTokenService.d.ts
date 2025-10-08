import { BaseService } from './BaseService';
import { MagicToken } from '../type/MagicToken';
import { MagicTokenResponse } from '../type/MagicTokenResponse';
import { MagicTokenSearchInput } from '../type/MagicTokenSearchInput';
import { MagicTokenCreateInput } from '../type/MagicTokenCreateInput';
import { MagicTokenUpdateInput } from '../type/MagicTokenUpdateInput';
import { Login } from '../type/Login';
/**
 Service for magic token authentication
 * @extends BaseService
 */
export declare class MagicTokenService extends BaseService {
    /**
     Retrieves a specific magic token
     * @param id Magic token ID
     * @returns Promise<MagicToken> Magic token data
     */
    getMagicToken(id: number): Promise<MagicToken>;
    /**
     Retrieves magic tokens with search
     * @param input Search input parameters
     * @returns Promise<MagicTokenResponse> Magic tokens response
     */
    getMagicTokens(input?: MagicTokenSearchInput): Promise<MagicTokenResponse>;
    /**
     Creates a new magic token
     * @param input Magic token creation input
     * @returns Promise<MagicToken> The created magic token
     */
    createMagicToken(input: MagicTokenCreateInput): Promise<MagicToken>;
    /**
     Updates an existing magic token
     * @param id Magic token ID
     * @param input Magic token update input
     * @returns Promise<MagicToken> The updated magic token
     */
    updateMagicToken(id: string, input: MagicTokenUpdateInput): Promise<MagicToken>;
    /**
     Authenticates a user using a magic token
     * @param id Magic token ID
     * @returns Promise<Login> Login response with user data
     */
    magicTokenLogin(id: string): Promise<Login>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=MagicTokenService.d.ts.map