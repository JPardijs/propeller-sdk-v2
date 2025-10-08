import { Category } from './Category';
import { CategoryActionsResponse } from './CategoryActionsResponse';
/**
 Object class for CategoryAddProductsClustersResponse
 */
export declare class CategoryAddProductsClustersResponse {
    /** The category object */
    private _category;
    /** Output messages about the actions performed. */
    private _actions;
    /**
     Creates a new instance of CategoryAddProductsClustersResponse
     */
    constructor(data?: Partial<CategoryAddProductsClustersResponse>);
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
//# sourceMappingURL=CategoryAddProductsClustersResponse.d.ts.map