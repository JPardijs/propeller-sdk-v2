import { MediaImage } from './MediaImage';
import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { MediaVideo } from './MediaVideo';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { MediaDocument } from './MediaDocument';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
import { MediaAttachment } from './MediaAttachment';
import { PaginatedMediaAttachmentResponse } from './PaginatedMediaAttachmentResponse';
/**
 Object class for Media
 */
export declare class Media {
    /** Media image */
    private _image?;
    /** List of media images */
    private _images?;
    /** Media video */
    private _video?;
    /** List of media videos */
    private _videos?;
    /** Media document */
    private _document?;
    /** List of media documents */
    private _documents?;
    /** attachment field */
    private _attachment;
    /** attachments field */
    private _attachments;
    /**
     Creates a new instance of Media
     */
    constructor(data?: Partial<Media>);
    /**
     Media image
     */
    get image(): MediaImage | undefined;
    /**
     Media image
     */
    set image(value: MediaImage | undefined);
    /**
     List of media images
     */
    get images(): PaginatedMediaImageResponse | undefined;
    /**
     List of media images
     */
    set images(value: PaginatedMediaImageResponse | undefined);
    /**
     Media video
     */
    get video(): MediaVideo | undefined;
    /**
     Media video
     */
    set video(value: MediaVideo | undefined);
    /**
     List of media videos
     */
    get videos(): PaginatedMediaVideoResponse | undefined;
    /**
     List of media videos
     */
    set videos(value: PaginatedMediaVideoResponse | undefined);
    /**
     Media document
     */
    get document(): MediaDocument | undefined;
    /**
     Media document
     */
    set document(value: MediaDocument | undefined);
    /**
     List of media documents
     */
    get documents(): PaginatedMediaDocumentResponse | undefined;
    /**
     List of media documents
     */
    set documents(value: PaginatedMediaDocumentResponse | undefined);
    /**
     attachment field
     */
    get attachment(): MediaAttachment;
    /**
     attachment field
     */
    set attachment(value: MediaAttachment);
    /**
     attachments field
     */
    get attachments(): PaginatedMediaAttachmentResponse;
    /**
     attachments field
     */
    set attachments(value: PaginatedMediaAttachmentResponse);
}
//# sourceMappingURL=Media.d.ts.map