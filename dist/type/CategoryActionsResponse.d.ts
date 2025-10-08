import { CategoryActionsData } from './CategoryActionsData';
/**
 Object class for CategoryActionsResponse
 */
export declare class CategoryActionsResponse {
    /** List of output messages for actions performed */
    private _data;
    /** List of extra messages */
    private _messages?;
    /**
     Creates a new instance of CategoryActionsResponse
     */
    constructor(data?: Partial<CategoryActionsResponse>);
    /**
     List of output messages for actions performed
     */
    get data(): CategoryActionsData[];
    /**
     List of output messages for actions performed
     */
    set data(value: CategoryActionsData[]);
    /**
     List of extra messages
     */
    get messages(): string[] | undefined;
    /**
     List of extra messages
     */
    set messages(value: string[] | undefined);
}
//# sourceMappingURL=CategoryActionsResponse.d.ts.map