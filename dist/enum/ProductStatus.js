"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStatus = void 0;
/**
 * @enum ProductStatus
 Product status enumeration for inventory management
 */
var ProductStatus;
(function (ProductStatus) {
    /** Active - Product is available and active */
    ProductStatus["A"] = "A";
    /** New - Product is newly added */
    ProductStatus["N"] = "N";
    /** Pending - Product is pending approval */
    ProductStatus["P"] = "P";
    /** Suspended - Product is temporarily suspended */
    ProductStatus["S"] = "S";
    /** Restricted - Product has restricted access */
    ProductStatus["R"] = "R";
    /** Terminated - Product is no longer available */
    ProductStatus["T"] = "T";
})(ProductStatus || (exports.ProductStatus = ProductStatus = {}));
//# sourceMappingURL=ProductStatus.js.map