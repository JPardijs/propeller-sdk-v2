"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaVideoService = void 0;
const BaseService_1 = require("./BaseService");
const MediaVideo_1 = require("../type/MediaVideo");
const PaginatedMediaVideoResponse_1 = require("../type/PaginatedMediaVideoResponse");
/**
 Service for managing media videos
 * @extends BaseService
 */
class MediaVideoService extends BaseService_1.BaseService {
    /**
     Retrieves a specific media video
     * @param id Media video ID
     * @returns Promise<MediaVideo> Media video data
     */
    async getMediaVideo(id) {
        const variables = { id };
        const result = await this.executeQuery('mediaVideo', variables);
        return new MediaVideo_1.MediaVideo(result.data.mediaVideo);
    }
    /**
     Retrieves media videos with pagination
     * @param input Search input parameters
     * @returns Promise<PaginatedMediaVideoResponse> Paginated media videos
     */
    async getMediaVideos(input) {
        const variables = { input };
        const result = await this.executeQuery('mediaVideos', variables);
        return new PaginatedMediaVideoResponse_1.PaginatedMediaVideoResponse(result.data.mediaVideos);
    }
    /**
     Creates a new media video
     * @param input Media video creation input
     * @returns Promise<MediaVideo> The created media video
     */
    async createMediaVideo(input) {
        const variables = { input };
        const result = await this.executeMutation('mediaVideoCreate', variables);
        return new MediaVideo_1.MediaVideo(result.data.mediaVideoCreate);
    }
    /**
     Updates an existing media video
     * @param input Media video update input
     * @returns Promise<MediaVideo> The updated media video
     */
    async updateMediaVideo(input) {
        const variables = { input };
        const result = await this.executeMutation('mediaVideoUpdate', variables);
        return new MediaVideo_1.MediaVideo(result.data.mediaVideoUpdate);
    }
    /**
     Deletes a media video
     * @param id Media video ID
     * @returns Promise<boolean> Success status
     */
    async deleteMediaVideo(id) {
        const variables = { id };
        const result = await this.executeMutation('mediaVideoDelete', variables);
        return result.data.mediaVideoDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.MediaVideoService = MediaVideoService;
//# sourceMappingURL=MediaVideoService.js.map