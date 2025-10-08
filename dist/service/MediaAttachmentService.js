"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaAttachmentService = void 0;
const BaseService_1 = require("./BaseService");
const MediaAttachment_1 = require("../type/MediaAttachment");
const PaginatedMediaAttachmentResponse_1 = require("../type/PaginatedMediaAttachmentResponse");
/**
 Service for managing media attachments
 * @extends BaseService
 */
class MediaAttachmentService extends BaseService_1.BaseService {
    /**
     Retrieves a specific media attachment
     * @param id Media attachment ID
     * @returns Promise<MediaAttachment> Media attachment data
     */
    async getMediaAttachment(id) {
        const variables = { id };
        const result = await this.executeQuery('mediaAttachment', variables);
        return new MediaAttachment_1.MediaAttachment(result.data.mediaAttachment);
    }
    /**
     Retrieves media attachments with pagination
     * @param input Search input parameters
     * @returns Promise<PaginatedMediaAttachmentResponse> Paginated media attachments
     */
    async getMediaAttachments(input) {
        const variables = { input };
        const result = await this.executeQuery('mediaAttachments', variables);
        return new PaginatedMediaAttachmentResponse_1.PaginatedMediaAttachmentResponse(result.data.mediaAttachments);
    }
    /**
     Creates a new media attachment
     * @param input Media attachment creation input
     * @returns Promise<MediaAttachment> The created media attachment
     */
    async createMediaAttachment(input) {
        const variables = { input };
        const result = await this.executeMutation('mediaAttachmentCreate', variables);
        return new MediaAttachment_1.MediaAttachment(result.data.mediaAttachmentCreate);
    }
    /**
     Updates an existing media attachment
     * @param input Media attachment update input
     * @returns Promise<MediaAttachment> The updated media attachment
     */
    async updateMediaAttachment(input) {
        const variables = { input };
        const result = await this.executeMutation('mediaAttachmentUpdate', variables);
        return new MediaAttachment_1.MediaAttachment(result.data.mediaAttachmentUpdate);
    }
    /**
     Deletes a media attachment
     * @param id MediaAttachment ID to delete
     * @returns Promise<boolean> Success status
     */
    async deleteMediaAttachment(id) {
        const variables = { id };
        const result = await this.executeMutation('mediaAttachmentDelete', variables);
        return result.data.mediaAttachmentDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.MediaAttachmentService = MediaAttachmentService;
//# sourceMappingURL=MediaAttachmentService.js.map