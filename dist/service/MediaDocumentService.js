"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaDocumentService = void 0;
const BaseService_1 = require("./BaseService");
const MediaDocument_1 = require("../type/MediaDocument");
const PaginatedMediaDocumentResponse_1 = require("../type/PaginatedMediaDocumentResponse");
/**
 Service for managing media documents
 * @extends BaseService
 */
class MediaDocumentService extends BaseService_1.BaseService {
    /**
     Retrieves a specific media document
     * @param id Media document ID
     * @returns Promise<MediaDocument> Media document data
     */
    async getMediaDocument(id) {
        const variables = { id };
        const result = await this.executeQuery('mediaDocument', variables);
        return new MediaDocument_1.MediaDocument(result.data.mediaDocument);
    }
    /**
     Retrieves media documents with pagination
     * @param input Search input parameters
     * @returns Promise<PaginatedMediaDocumentResponse> Paginated media documents
     */
    async getMediaDocuments(input) {
        const variables = { input };
        const result = await this.executeQuery('mediaDocuments', variables);
        return new PaginatedMediaDocumentResponse_1.PaginatedMediaDocumentResponse(result.data.mediaDocuments);
    }
    /**
     Creates a new media document
     * @param input Media document creation input
     * @returns Promise<MediaDocument> The created media document
     */
    async createMediaDocument(input) {
        const variables = { input };
        const result = await this.executeMutation('mediaDocumentCreate', variables);
        return new MediaDocument_1.MediaDocument(result.data.mediaDocumentCreate);
    }
    /**
     Updates an existing media document
     * @param input Media document update input
     * @returns Promise<MediaDocument> The updated media document
     */
    async updateMediaDocument(input) {
        const variables = { input };
        const result = await this.executeMutation('mediaDocumentUpdate', variables);
        return new MediaDocument_1.MediaDocument(result.data.mediaDocumentUpdate);
    }
    /**
     Deletes a media document
     * @param id Media document ID
     * @returns Promise<boolean> Success status
     */
    async deleteMediaDocument(id) {
        const variables = { id };
        const result = await this.executeMutation('mediaDocumentDelete', variables);
        return result.data.mediaDocumentDelete;
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.MediaDocumentService = MediaDocumentService;
//# sourceMappingURL=MediaDocumentService.js.map