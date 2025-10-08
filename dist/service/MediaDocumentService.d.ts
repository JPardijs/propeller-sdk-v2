import { BaseService } from './BaseService';
import { MediaDocument } from '../type/MediaDocument';
import { PaginatedMediaDocumentResponse } from '../type/PaginatedMediaDocumentResponse';
import { MediaDocumentSearchInput } from '../type/MediaDocumentSearchInput';
import { MediaDocumentInput } from '../type/MediaDocumentInput';
import { UpdateMediaDocumentInput } from '../type/UpdateMediaDocumentInput';
/**
 Service for managing media documents
 * @extends BaseService
 */
export declare class MediaDocumentService extends BaseService {
    /**
     Retrieves a specific media document
     * @param id Media document ID
     * @returns Promise<MediaDocument> Media document data
     */
    getMediaDocument(id: number): Promise<MediaDocument>;
    /**
     Retrieves media documents with pagination
     * @param input Search input parameters
     * @returns Promise<PaginatedMediaDocumentResponse> Paginated media documents
     */
    getMediaDocuments(input?: MediaDocumentSearchInput): Promise<PaginatedMediaDocumentResponse>;
    /**
     Creates a new media document
     * @param input Media document creation input
     * @returns Promise<MediaDocument> The created media document
     */
    createMediaDocument(input: MediaDocumentInput): Promise<MediaDocument>;
    /**
     Updates an existing media document
     * @param input Media document update input
     * @returns Promise<MediaDocument> The updated media document
     */
    updateMediaDocument(input: UpdateMediaDocumentInput): Promise<MediaDocument>;
    /**
     Deletes a media document
     * @param id Media document ID
     * @returns Promise<boolean> Success status
     */
    deleteMediaDocument(id: number): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=MediaDocumentService.d.ts.map