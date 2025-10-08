"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelService = void 0;
const BaseService_1 = require("./BaseService");
const Channel_1 = require("../type/Channel");
/**
 Service class for Channel-related GraphQL operations
 */
class ChannelService extends BaseService_1.BaseService {
    /**
     Fetches a single channel by ID
     * @param id Channel ID to fetch
     * @returns Promise<Channel> The channel data
     */
    async getChannel(id) {
        const variables = { id };
        const result = await this.executeQuery('channel', variables);
        return new Channel_1.Channel(result.data.channel);
    }
    /**
     Fetches a list of channels
     * @returns Promise<Channel[]> The channels data array
     */
    async getChannels() {
        const variables = {};
        const result = await this.executeQuery('channels', variables);
        return result.data.channels.map((channel) => new Channel_1.Channel(channel));
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.ChannelService = ChannelService;
//# sourceMappingURL=ChannelService.js.map