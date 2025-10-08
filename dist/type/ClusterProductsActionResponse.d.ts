import { ClusterProductsActionData } from './ClusterProductsActionData';
/**
 Object class for ClusterProductsActionResponse
 */
export declare class ClusterProductsActionResponse {
    /** List of output messaged for actions performed */
    private _data;
    /** List of extra messages */
    private _messages;
    /**
     Creates a new instance of ClusterProductsActionResponse
     */
    constructor(data?: Partial<ClusterProductsActionResponse>);
    /**
     List of output messaged for actions performed
     */
    get data(): ClusterProductsActionData[];
    /**
     List of output messaged for actions performed
     */
    set data(value: ClusterProductsActionData[]);
    /**
     List of extra messages
     */
    get messages(): string[];
    /**
     List of extra messages
     */
    set messages(value: string[]);
}
//# sourceMappingURL=ClusterProductsActionResponse.d.ts.map