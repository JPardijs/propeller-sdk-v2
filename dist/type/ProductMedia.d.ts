import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
/**
 Object class for ProductMedia
 */
export declare class ProductMedia {
    /** Product media images */
    private _images?;
    /** Product media videos */
    private _videos?;
    /** Product media documents */
    private _documents?;
    /**
     Creates a new instance of ProductMedia
     */
    constructor(data?: Partial<ProductMedia>);
    /**
     Product media images
     */
    get images(): PaginatedMediaImageResponse | undefined;
    /**
     Product media images
     */
    set images(value: PaginatedMediaImageResponse | undefined);
    /**
     Product media videos
     */
    get videos(): PaginatedMediaVideoResponse | undefined;
    /**
     Product media videos
     */
    set videos(value: PaginatedMediaVideoResponse | undefined);
    /**
     Product media documents
     */
    get documents(): PaginatedMediaDocumentResponse | undefined;
    /**
     Product media documents
     */
    set documents(value: PaginatedMediaDocumentResponse | undefined);
}
//# sourceMappingURL=ProductMedia.d.ts.map