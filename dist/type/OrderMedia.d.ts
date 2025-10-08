import { PaginatedMediaAttachmentResponse } from './PaginatedMediaAttachmentResponse';
/**
 Object class for OrderMedia
 */
export declare class OrderMedia {
    /** Media attachments */
    private _attachments?;
    /**
     Creates a new instance of OrderMedia
     */
    constructor(data?: Partial<OrderMedia>);
    /**
     Media attachments
     */
    get attachments(): PaginatedMediaAttachmentResponse | undefined;
    /**
     Media attachments
     */
    set attachments(value: PaginatedMediaAttachmentResponse | undefined);
}
//# sourceMappingURL=OrderMedia.d.ts.map