import { BaseService } from './BaseService';
import { MediaAttachment } from '../type/MediaAttachment';
import { PaginatedMediaAttachmentResponse } from '../type/PaginatedMediaAttachmentResponse';
import { MediaAttachmentSearchInput } from '../type/MediaAttachmentSearchInput';
import { MediaAttachmentInput } from '../type/MediaAttachmentInput';
import { UpdateMediaAttachmentInput } from '../type/UpdateMediaAttachmentInput';
/**
 Service for managing media attachments
 * @extends BaseService
 */
export declare class MediaAttachmentService extends BaseService {
    /**
     Retrieves a specific media attachment
     * @param id Media attachment ID
     * @returns Promise<MediaAttachment> Media attachment data
     */
    getMediaAttachment(id: number): Promise<MediaAttachment>;
    /**
     Retrieves media attachments with pagination
     * @param input Search input parameters
     * @returns Promise<PaginatedMediaAttachmentResponse> Paginated media attachments
     */
    getMediaAttachments(input?: MediaAttachmentSearchInput): Promise<PaginatedMediaAttachmentResponse>;
    /**
     Creates a new media attachment
     * @param input Media attachment creation input
     * @returns Promise<MediaAttachment> The created media attachment
     */
    createMediaAttachment(input: MediaAttachmentInput): Promise<MediaAttachment>;
    /**
     Updates an existing media attachment
     * @param input Media attachment update input
     * @returns Promise<MediaAttachment> The updated media attachment
     */
    updateMediaAttachment(input: UpdateMediaAttachmentInput): Promise<MediaAttachment>;
    /**
     Deletes a media attachment
     * @param id MediaAttachment ID to delete
     * @returns Promise<boolean> Success status
     */
    deleteMediaAttachment(id: number): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=MediaAttachmentService.d.ts.map