import { BaseService } from './BaseService';
import { Media } from '../type/Media';
import { ObjectMediaSearchInput } from '../type/ObjectMediaSearchInput';
/**
 Service for managing media content
 * @extends BaseService
 */
export declare class MediaService extends BaseService {
    /**
     Retrieves a specific media item
     * @param id Media ID
     * @returns Promise<Media> Media data
     */
    getMedia(id: number): Promise<Media>;
    /**
     Retrieves media items with optional search
     * @param input Search input parameters
     * @returns Promise<Media[]> List of media items
     */
    getMediaList(input?: ObjectMediaSearchInput): Promise<Media[]>;
    /**
     Initializes the service by preloading common fragments
     */
    initializeService(): Promise<void>;
}
//# sourceMappingURL=MediaService.d.ts.map