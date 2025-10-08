/**
 Object class for PublishEmailEventResponse
 */
export declare class PublishEmailEventResponse {
    /** Did the publish event succeed? */
    private _success;
    /** The  Google Pub/Sub message id */
    private _messageId?;
    /**
     Creates a new instance of PublishEmailEventResponse
     */
    constructor(data?: Partial<PublishEmailEventResponse>);
    /**
     Did the publish event succeed?
     */
    get success(): boolean;
    /**
     Did the publish event succeed?
     */
    set success(value: boolean);
    /**
     The  Google Pub/Sub message id
     */
    get messageId(): string | undefined;
    /**
     The  Google Pub/Sub message id
     */
    set messageId(value: string | undefined);
}
//# sourceMappingURL=PublishEmailEventResponse.d.ts.map