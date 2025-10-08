"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaImageService = void 0;
const BaseService_1 = require("./BaseService");
const MediaImage_1 = require("../type/MediaImage");
const PaginatedMediaImageResponse_1 = require("../type/PaginatedMediaImageResponse");
/**
 Service for managing media images
 * @extends BaseService
 */
class MediaImageService extends BaseService_1.BaseService {
    /**
     Retrieves a specific media image
     * @param id Media image ID
     * @returns Promise<MediaImage> Media image data
     */
    async getMediaImage(id) {
        const variables = { id };
        const result = await this.executeQuery('mediaImage', variables);
        return new MediaImage_1.MediaImage(result.data.mediaImage);
    }
    /**
     Retrieves media images with pagination
     * @param input Search input parameters
     * @returns Promise<PaginatedMediaImageResponse> Paginated media images
     */
    async getMediaImages(input) {
        const variables = { input };
        const result = await this.executeQuery('mediaImages', variables);
        return new PaginatedMediaImageResponse_1.PaginatedMediaImageResponse(result.data.mediaImages);
    }
    /**
     Creates a new media image
     * @param input Media image creation input
     * @returns Promise<MediaImage> The created media image
     */
    async createMediaImage(input) {
        const variables = { input };
        const result = await this.executeMutation('mediaImageCreate', variables);
        return new MediaImage_1.MediaImage(result.data.mediaImageCreate);
    }
    /**
     Updates an existing media image
     * @param input Media image update input
     * @returns Promise<MediaImage> The updated media image
     */
    async updateMediaImage(input) {
        const variables = { input };
        const result = await this.executeMutation('mediaImageUpdate', variables);
        return new MediaImage_1.MediaImage(result.data.mediaImageUpdate);
    }
    /**
     Deletes a media image
     * @param id Media image ID
     * @returns Promise<boolean> Success status
     */
    async deleteMediaImage(id) {
        const variables = { id };
        const result = await this.executeMutation('mediaImageDelete', variables);
        return result.data.mediaImageDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.MediaImageService = MediaImageService;
//# sourceMappingURL=MediaImageService.js.map