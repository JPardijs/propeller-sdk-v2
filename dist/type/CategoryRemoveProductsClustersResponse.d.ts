import { Category } from './Category';
import { CategoryActionsResponse } from './CategoryActionsResponse';
/**
 Object class for CategoryRemoveProductsClustersResponse
 */
export declare class CategoryRemoveProductsClustersResponse {
    /** The category object */
    private _category;
    /** Output messages about the actions performed. */
    private _actions;
    /**
     Creates a new instance of CategoryRemoveProductsClustersResponse
     */
    constructor(data?: Partial<CategoryRemoveProductsClustersResponse>);
    /**
     The category object
     */
    get category(): Category;
    /**
     The category object
     */
    set category(value: Category);
    /**
     Output messages about the actions performed.
     */
    get actions(): CategoryActionsResponse;
    /**
     Output messages about the actions performed.
     */
    set actions(value: CategoryActionsResponse);
}
//# sourceMappingURL=CategoryRemoveProductsClustersResponse.d.ts.map