"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparePartsMachineMediaService = void 0;
const BaseService_1 = require("./BaseService");
const SparePartsMachineMedia_1 = require("../type/SparePartsMachineMedia");
/**
 Service for managing spare parts machine media
 * @extends BaseService
 */
class SparePartsMachineMediaService extends BaseService_1.BaseService {
    /**
     Retrieves a specific spare parts machine media
     * @param id Media ID
     * @returns Promise<SparePartsMachineMedia> Media data
     */
    async getSparePartsMachineMedia(id) {
        const variables = { id };
        const result = await this.executeQuery('sparePartsMachineMedia', variables);
        return new SparePartsMachineMedia_1.SparePartsMachineMedia(result.data.sparePartsMachineMedia);
    }
    /**
     Retrieves all spare parts machine media
     * @returns Promise<SparePartsMachineMedia[]> Array of media items
     */
    async getSparePartsMachineMedias() {
        const variables = {};
        const result = await this.executeQuery('sparePartsMachineMedias', variables);
        return result.data.sparePartsMachineMedias.map((media) => new SparePartsMachineMedia_1.SparePartsMachineMedia(media));
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.SparePartsMachineMediaService = SparePartsMachineMediaService;
//# sourceMappingURL=SparePartsMachineMediaService.js.map