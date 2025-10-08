import { BaseService } from './BaseService';
import { Channel } from '../type/Channel';
/**
 Service class for Channel-related GraphQL operations
 */
export declare class ChannelService extends BaseService {
    /**
     Fetches a single channel by ID
     * @param id Channel ID to fetch
     * @returns Promise<Channel> The channel data
     */
    getChannel(id: number): Promise<Channel>;
    /**
     Fetches a list of channels
     * @returns Promise<Channel[]> The channels data array
     */
    getChannels(): Promise<Channel[]>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=ChannelService.d.ts.map