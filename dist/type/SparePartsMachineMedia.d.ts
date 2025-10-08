import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
import { PaginatedMediaAttachmentResponse } from './PaginatedMediaAttachmentResponse';
/**
 Object class for SparePartsMachineMedia
 */
export declare class SparePartsMachineMedia {
    /** Media images */
    private _images?;
    /** Media videos */
    private _videos?;
    /** Media documents */
    private _documents?;
    /** Media attachments */
    private _attachments?;
    /**
     Creates a new instance of SparePartsMachineMedia
     */
    constructor(data?: Partial<SparePartsMachineMedia>);
    /**
     Media images
     */
    get images(): PaginatedMediaImageResponse | undefined;
    /**
     Media images
     */
    set images(value: PaginatedMediaImageResponse | undefined);
    /**
     Media videos
     */
    get videos(): PaginatedMediaVideoResponse | undefined;
    /**
     Media videos
     */
    set videos(value: PaginatedMediaVideoResponse | undefined);
    /**
     Media documents
     */
    get documents(): PaginatedMediaDocumentResponse | undefined;
    /**
     Media documents
     */
    set documents(value: PaginatedMediaDocumentResponse | undefined);
    /**
     Media attachments
     */
    get attachments(): PaginatedMediaAttachmentResponse | undefined;
    /**
     Media attachments
     */
    set attachments(value: PaginatedMediaAttachmentResponse | undefined);
}
//# sourceMappingURL=SparePartsMachineMedia.d.ts.map