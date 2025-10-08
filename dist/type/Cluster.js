"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cluster = void 0;
/**
 Object class for Cluster
 */
class Cluster {
    /**
     Creates a new instance of Cluster
     */
    constructor(data = {}) {
        this._id = data.id;
        this._clusterId = data.clusterId;
        this._categoryId = data.categoryId;
        this._attributes = data.attributes;
        this._categories = data.categories;
        this._category = data.category;
        this._categoryPath = data.categoryPath;
        this._crossupsellsFrom = data.crossupsellsFrom;
        this._crossupsellsTo = data.crossupsellsTo;
        this._favoriteLists = data.favoriteLists;
        this._orderlists = data.orderlists;
        this._products = data.products;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._options = data.options;
        this._drillDowns = data.drillDowns;
        this._defaultProduct = data.defaultProduct;
        this._config = data.config;
        this._names = data.names;
        this._descriptions = data.descriptions;
        this._shortDescriptions = data.shortDescriptions;
        this._slugs = data.slugs;
        this._sku = data.sku;
        this._defaultLanguage = data.defaultLanguage;
        this._priority = data.priority;
        this._metadataTitles = data.metadataTitles;
        this._metadataDescriptions = data.metadataDescriptions;
        this._metadataKeywords = data.metadataKeywords;
        this._metadataCanonicalUrls = data.metadataCanonicalUrls;
        this._sources = data.sources;
        this._language = data.language;
        this._class = data.class;
        this._hidden = data.hidden;
    }
    /**
     Resource primary identifier
     */
    get id() {
        return this._id;
    }
    /**
     Resource primary identifier
     */
    set id(value) {
        this._id = value;
    }
    /**
     The classID of this cluster
     */
    get clusterId() {
        return this._clusterId;
    }
    /**
     The classID of this cluster
     */
    set clusterId(value) {
        this._clusterId = value;
    }
    /**
     categoryId field
     */
    get categoryId() {
        return this._categoryId;
    }
    /**
     categoryId field
     */
    set categoryId(value) {
        this._categoryId = value;
    }
    /**
     Lists attributes for this cluster based on the search input.
     */
    get attributes() {
        return this._attributes;
    }
    /**
     Lists attributes for this cluster based on the search input.
     */
    set attributes(value) {
        this._attributes = value;
    }
    /**
     All the categories the cluster belongs to
     */
    get categories() {
        return this._categories;
    }
    /**
     All the categories the cluster belongs to
     */
    set categories(value) {
        this._categories = value;
    }
    /**
     category field
     */
    get category() {
        return this._category;
    }
    /**
     category field
     */
    set category(value) {
        this._category = value;
    }
    /**
     categoryPath field
     */
    get categoryPath() {
        return this._categoryPath;
    }
    /**
     categoryPath field
     */
    set categoryPath(value) {
        this._categoryPath = value;
    }
    /**
     crossupsellsFrom field
     */
    get crossupsellsFrom() {
        return this._crossupsellsFrom;
    }
    /**
     crossupsellsFrom field
     */
    set crossupsellsFrom(value) {
        this._crossupsellsFrom = value;
    }
    /**
     crossupsellsTo field
     */
    get crossupsellsTo() {
        return this._crossupsellsTo;
    }
    /**
     crossupsellsTo field
     */
    set crossupsellsTo(value) {
        this._crossupsellsTo = value;
    }
    /**
     favoriteLists field
     */
    get favoriteLists() {
        return this._favoriteLists;
    }
    /**
     favoriteLists field
     */
    set favoriteLists(value) {
        this._favoriteLists = value;
    }
    /**
     orderlists field
     */
    get orderlists() {
        return this._orderlists;
    }
    /**
     orderlists field
     */
    set orderlists(value) {
        this._orderlists = value;
    }
    /**
     Array of selectable main products for this cluster, when the array contains more than one. Only one can be added per cart/order item
     */
    get products() {
        return this._products;
    }
    /**
     Array of selectable main products for this cluster, when the array contains more than one. Only one can be added per cart/order item
     */
    set products(value) {
        this._products = value;
    }
    /**
     The creation date of this product
     */
    get createdAt() {
        return this._createdAt;
    }
    /**
     The creation date of this product
     */
    set createdAt(value) {
        this._createdAt = value;
    }
    /**
     The last modified date of this product
     */
    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
    /**
     The last modified date of this product
     */
    set lastModifiedAt(value) {
        this._lastModifiedAt = value;
    }
    /**
     options field
     */
    get options() {
        return this._options;
    }
    /**
     options field
     */
    set options(value) {
        this._options = value;
    }
    /**
     The drilldown configuration for this cluster
     */
    get drillDowns() {
        return this._drillDowns;
    }
    /**
     The drilldown configuration for this cluster
     */
    set drillDowns(value) {
        this._drillDowns = value;
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
     config field
     */
    get config() {
        return this._config;
    }
    /**
     config field
     */
    set config(value) {
        this._config = value;
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
    /**
     slugs field
     */
    get slugs() {
        return this._slugs;
    }
    /**
     slugs field
     */
    set slugs(value) {
        this._slugs = value;
    }
    /**
     The SKU (stock keeping unit) of this product
     */
    get sku() {
        return this._sku;
    }
    /**
     The SKU (stock keeping unit) of this product
     */
    set sku(value) {
        this._sku = value;
    }
    /**
     The default language for this product or cluster, this is the language to fall back too, when there is no translation available in a specific language.
     */
    get defaultLanguage() {
        return this._defaultLanguage;
    }
    /**
     The default language for this product or cluster, this is the language to fall back too, when there is no translation available in a specific language.
     */
    set defaultLanguage(value) {
        this._defaultLanguage = value;
    }
    /**
     priority field
     */
    get priority() {
        return this._priority;
    }
    /**
     priority field
     */
    set priority(value) {
        this._priority = value;
    }
    /**
     [SEO] Localized Metadata title available in multiple languages
     */
    get metadataTitles() {
        return this._metadataTitles;
    }
    /**
     [SEO] Localized Metadata title available in multiple languages
     */
    set metadataTitles(value) {
        this._metadataTitles = value;
    }
    /**
     [SEO] Localized Metadata description available in multiple languages
     */
    get metadataDescriptions() {
        return this._metadataDescriptions;
    }
    /**
     [SEO] Localized Metadata description available in multiple languages
     */
    set metadataDescriptions(value) {
        this._metadataDescriptions = value;
    }
    /**
     [SEO] Localized Metadata keywords available in multiple languages
     */
    get metadataKeywords() {
        return this._metadataKeywords;
    }
    /**
     [SEO] Localized Metadata keywords available in multiple languages
     */
    set metadataKeywords(value) {
        this._metadataKeywords = value;
    }
    /**
     [SEO] Localized Metadata canonical url available in multiple languages
     */
    get metadataCanonicalUrls() {
        return this._metadataCanonicalUrls;
    }
    /**
     [SEO] Localized Metadata canonical url available in multiple languages
     */
    set metadataCanonicalUrls(value) {
        this._metadataCanonicalUrls = value;
    }
    /**
     sources field
     */
    get sources() {
        return this._sources;
    }
    /**
     sources field
     */
    set sources(value) {
        this._sources = value;
    }
    /**
     The requested language for this this resource, default to the
            products default language.
            ISO 639-1 format.
     */
    get language() {
        return this._language;
    }
    /**
     The requested language for this this resource, default to the
            products default language.
            ISO 639-1 format.
     */
    set language(value) {
        this._language = value;
    }
    /**
     The class of the request resource
     */
    get class() {
        return this._class;
    }
    /**
     The class of the request resource
     */
    set class(value) {
        this._class = value;
    }
    /**
     The hidden status of this resource.
     */
    get hidden() {
        return this._hidden;
    }
    /**
     The hidden status of this resource.
     */
    set hidden(value) {
        this._hidden = value;
    }
}
exports.Cluster = Cluster;
//# sourceMappingURL=Cluster.js.map