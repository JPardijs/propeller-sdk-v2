"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const BaseService_1 = require("./BaseService");
const Media_1 = require("../type/Media");
/**
 Service for managing media content
 * @extends BaseService
 */
class MediaService extends BaseService_1.BaseService {
    /**
     Retrieves a specific media item
     * @param id Media ID
     * @returns Promise<Media> Media data
     */
    async getMedia(id) {
        const variables = { id };
        const result = await this.executeQuery('media', variables);
        return new Media_1.Media(result.data.media);
    }
    /**
     Retrieves media items with optional search
     * @param input Search input parameters
     * @returns Promise<Media[]> List of media items
     */
    async getMediaList(input) {
        const variables = { input };
        const result = await this.executeQuery('medias', variables);
        return result.data.medias.map((media) => new Media_1.Media(media));
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.MediaService = MediaService;
//# sourceMappingURL=MediaService.js.map