"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterOption = void 0;
/**
 Object class for ClusterOption
 */
class ClusterOption {
    /**
     Creates a new instance of ClusterOption
     */
    constructor(data = {}) {
        this._id = data.id;
        this._clusterOptionId = data.clusterOptionId;
        this._isRequired = data.isRequired;
        this._hidden = data.hidden;
        this._defaultProduct = data.defaultProduct;
        this._products = data.products;
        this._names = data.names;
        this._descriptions = data.descriptions;
        this._shortDescriptions = data.shortDescriptions;
    }
    /**
     id field
     */
    get id() {
        return this._id;
    }
    /**
     id field
     */
    set id(value) {
        this._id = value;
    }
    /**
     The classID of the cluster that represents this cluster
     */
    get clusterOptionId() {
        return this._clusterOptionId;
    }
    /**
     The classID of the cluster that represents this cluster
     */
    set clusterOptionId(value) {
        this._clusterOptionId = value;
    }
    /**
     Indicates whether an option is required or not
     */
    get isRequired() {
        return this._isRequired;
    }
    /**
     Indicates whether an option is required or not
     */
    set isRequired(value) {
        this._isRequired = value;
    }
    /**
     Indicates whether an option is hidden or not
     */
    get hidden() {
        return this._hidden;
    }
    /**
     Indicates whether an option is hidden or not
     */
    set hidden(value) {
        this._hidden = value;
    }
    /**
     defaultProduct field
     */
    get defaultProduct() {
        return this._defaultProduct;
    }
    /**
     defaultProduct field
     */
    set defaultProduct(value) {
        this._defaultProduct = value;
    }
    /**
     products field
     */
    get products() {
        return this._products;
    }
    /**
     products field
     */
    set products(value) {
        this._products = value;
    }
    /**
     names field
     */
    get names() {
        return this._names;
    }
    /**
     names field
     */
    set names(value) {
        this._names = value;
    }
    /**
     descriptions field
     */
    get descriptions() {
        return this._descriptions;
    }
    /**
     descriptions field
     */
    set descriptions(value) {
        this._descriptions = value;
    }
    /**
     shortDescriptions field
     */
    get shortDescriptions() {
        return this._shortDescriptions;
    }
    /**
     shortDescriptions field
     */
    set shortDescriptions(value) {
        this._shortDescriptions = value;
    }
}
exports.ClusterOption = ClusterOption;
//# sourceMappingURL=ClusterOption.js.map