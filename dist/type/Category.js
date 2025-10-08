"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
/**
 Object class for Category
 */
class Category {
    /**
     Creates a new instance of Category
     */
    constructor(data = {}) {
        this._categoryId = data.categoryId;
        this._attributes = data.attributes;
        this._name = data.name;
        this._description = data.description;
        this._shortDescription = data.shortDescription;
        this._slug = data.slug;
        this._path = data.path;
        this._categories = data.categories;
        this._parent = data.parent;
        this._defaultLanguage = data.defaultLanguage;
        this._metadataTitles = data.metadataTitles;
        this._metadataDescriptions = data.metadataDescriptions;
        this._metadataKeywords = data.metadataKeywords;
        this._metadataCanonicalUrls = data.metadataCanonicalUrls;
        this._hidden = data.hidden;
        this._categoryPath = data.categoryPath;
        this._sources = data.sources;
        this._products = data.products;
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
     Lists attributes for this category based on the search input.
     */
    get attributes() {
        return this._attributes;
    }
    /**
     Lists attributes for this category based on the search input.
     */
    set attributes(value) {
        this._attributes = value;
    }
    /**
     Localized category name as it is available in
          the supported language defaults to the category's default language.
     */
    get name() {
        return this._name;
    }
    /**
     Localized category name as it is available in
          the supported language defaults to the category's default language.
     */
    set name(value) {
        this._name = value;
    }
    /**
     The long description for this category,
              this field can contain html formatting,
              this field can be translated is case of multilingual catalog
     */
    get description() {
        return this._description;
    }
    /**
     The long description for this category,
              this field can contain html formatting,
              this field can be translated is case of multilingual catalog
     */
    set description(value) {
        this._description = value;
    }
    /**
     The short description for this category,
              this field can contain html formatting,
              this field can be translated is case of multilingual catalog
     */
    get shortDescription() {
        return this._shortDescription;
    }
    /**
     The short description for this category,
              this field can contain html formatting,
              this field can be translated is case of multilingual catalog
     */
    set shortDescription(value) {
        this._shortDescription = value;
    }
    /**
     The slug for this category,
              each available language contains a different slug
     */
    get slug() {
        return this._slug;
    }
    /**
     The slug for this category,
              each available language contains a different slug
     */
    set slug(value) {
        this._slug = value;
    }
    /**
     The path in id's to the root of the inheritance tree,
      can be passed as parameter to the productsearch API
     */
    get path() {
        return this._path;
    }
    /**
     The path in id's to the root of the inheritance tree,
      can be passed as parameter to the productsearch API
     */
    set path(value) {
        this._path = value;
    }
    /**
     categories field
     */
    get categories() {
        return this._categories;
    }
    /**
     categories field
     */
    set categories(value) {
        this._categories = value;
    }
    /**
     The category's parent Category when available
     */
    get parent() {
        return this._parent;
    }
    /**
     The category's parent Category when available
     */
    set parent(value) {
        this._parent = value;
    }
    /**
     defaultLanguage field
     */
    get defaultLanguage() {
        return this._defaultLanguage;
    }
    /**
     defaultLanguage field
     */
    set defaultLanguage(value) {
        this._defaultLanguage = value;
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
     The hidden status of the category
     */
    get hidden() {
        return this._hidden;
    }
    /**
     The hidden status of the category
     */
    set hidden(value) {
        this._hidden = value;
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
}
exports.Category = Category;
//# sourceMappingURL=Category.js.map