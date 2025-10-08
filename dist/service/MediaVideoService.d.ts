import { BaseService } from './BaseService';
import { MediaVideo } from '../type/MediaVideo';
import { PaginatedMediaVideoResponse } from '../type/PaginatedMediaVideoResponse';
import { MediaVideoSearchInput } from '../type/MediaVideoSearchInput';
import { MediaVideoInput } from '../type/MediaVideoInput';
import { UpdateMediaVideoInput } from '../type/UpdateMediaVideoInput';
/**
 Service for managing media videos
 * @extends BaseService
 */
export declare class MediaVideoService extends BaseService {
    /**
     Retrieves a specific media video
     * @param id Media video ID
     * @returns Promise<MediaVideo> Media video data
     */
    getMediaVideo(id: number): Promise<MediaVideo>;
    /**
     Retrieves media videos with pagination
     * @param input Search input parameters
     * @returns Promise<PaginatedMediaVideoResponse> Paginated media videos
     */
    getMediaVideos(input?: MediaVideoSearchInput): Promise<PaginatedMediaVideoResponse>;
    /**
     Creates a new media video
     * @param input Media video creation input
     * @returns Promise<MediaVideo> The created media video
     */
    createMediaVideo(input: MediaVideoInput): Promise<MediaVideo>;
    /**
     Updates an existing media video
     * @param input Media video update input
     * @returns Promise<MediaVideo> The updated media video
     */
    updateMediaVideo(input: UpdateMediaVideoInput): Promise<MediaVideo>;
    /**
     Deletes a media video
     * @param id Media video ID
     * @returns Promise<boolean> Success status
     */
    deleteMediaVideo(id: number): Promise<boolean>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=MediaVideoService.d.ts.map