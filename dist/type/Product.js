"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
/**
 Object class for Product
 */
class Product {
    /**
     Creates a new instance of Product
     */
    constructor(data = {}) {
        this._id = data.id;
        this._productId = data.productId;
        this._categoryId = data.categoryId;
        this._attributes = data.attributes;
        this._bundles = data.bundles;
        this._category = data.category;
        this._categories = data.categories;
        this._categoryPath = data.categoryPath;
        this._crossupsellsFrom = data.crossupsellsFrom;
        this._crossupsellsTo = data.crossupsellsTo;
        this._favoriteLists = data.favoriteLists;
        this._inventory = data.inventory;
        this._mediaImages = data.mediaImages;
        this._mediaVideos = data.mediaVideos;
        this._mediaDocuments = data.mediaDocuments;
        this._media = data.media;
        this._orderlists = data.orderlists;
        this._price = data.price;
        this._priceData = data.priceData;
        this._bulkPrices = data.bulkPrices;
        this._language = data.language;
        this._class = data.class;
        this._hidden = data.hidden;
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
        this._shortName = data.shortName;
        this._keywords = data.keywords;
        this._customKeywords = data.customKeywords;
        this._packageDescriptions = data.packageDescriptions;
        this._manufacturerCode = data.manufacturerCode;
        this._eanCode = data.eanCode;
        this._manufacturer = data.manufacturer;
        this._supplier = data.supplier;
        this._supplierCode = data.supplierCode;
        this._status = data.status;
        this._statusExtra = data.statusExtra;
        this._barCode = data.barCode;
        this._turnoverGroup = data.turnoverGroup;
        this._taxonomy = data.taxonomy;
        this._priceGroup = data.priceGroup;
        this._orderable = data.orderable;
        this._returnable = data.returnable;
        this._physical = data.physical;
        this._hasBundle = data.hasBundle;
        this._isBundleLeader = data.isBundleLeader;
        this._package = data.package;
        this._packageUnit = data.packageUnit;
        this._packageUnitQuantity = data.packageUnitQuantity;
        this._minimumQuantity = data.minimumQuantity;
        this._unit = data.unit;
        this._purchaseUnit = data.purchaseUnit;
        this._purchaseMinimumQuantity = data.purchaseMinimumQuantity;
        this._economicOrderQuantity = data.economicOrderQuantity;
        this._orderableFrom = data.orderableFrom;
        this._orderableTo = data.orderableTo;
        this._releaseDate = data.releaseDate;
        this._createdAt = data.createdAt;
        this._lastModifiedAt = data.lastModifiedAt;
        this._offers = data.offers;
        this._containerClass = data.containerClass;
        this._clusterId = data.clusterId;
        this._cluster = data.cluster;
        this._surcharges = data.surcharges;
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
     This product's unique identifier
     */
    get productId() {
        return this._productId;
    }
    /**
     This product's unique identifier
     */
    set productId(value) {
        this._productId = value;
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
     Lists attributes for this product based on the search input.
     */
    get attributes() {
        return this._attributes;
    }
    /**
     Lists attributes for this product based on the search input.
     */
    set attributes(value) {
        this._attributes = value;
    }
    /**
     bundles field
     */
    get bundles() {
        return this._bundles;
    }
    /**
     bundles field
     */
    set bundles(value) {
        this._bundles = value;
    }
    /**
     Product main category
     */
    get category() {
        return this._category;
    }
    /**
     Product main category
     */
    set category(value) {
        this._category = value;
    }
    /**
     All the categories the product belongs to
     */
    get categories() {
        return this._categories;
    }
    /**
     All the categories the product belongs to
     */
    set categories(value) {
        this._categories = value;
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
     Product inventory
     */
    get inventory() {
        return this._inventory;
    }
    /**
     Product inventory
     */
    set inventory(value) {
        this._inventory = value;
    }
    /**
     Product media images
     */
    get mediaImages() {
        return this._mediaImages;
    }
    /**
     Product media images
     */
    set mediaImages(value) {
        this._mediaImages = value;
    }
    /**
     Product media videos
     */
    get mediaVideos() {
        return this._mediaVideos;
    }
    /**
     Product media videos
     */
    set mediaVideos(value) {
        this._mediaVideos = value;
    }
    /**
     Product media documents
     */
    get mediaDocuments() {
        return this._mediaDocuments;
    }
    /**
     Product media documents
     */
    set mediaDocuments(value) {
        this._mediaDocuments = value;
    }
    /**
     Product media images
     */
    get media() {
        return this._media;
    }
    /**
     Product media images
     */
    set media(value) {
        this._media = value;
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
     price field
     */
    get price() {
        return this._price;
    }
    /**
     price field
     */
    set price(value) {
        this._price = value;
    }
    /**
     priceData field
     */
    get priceData() {
        return this._priceData;
    }
    /**
     priceData field
     */
    set priceData(value) {
        this._priceData = value;
    }
    /**
     bulkPrices field
     */
    get bulkPrices() {
        return this._bulkPrices;
    }
    /**
     bulkPrices field
     */
    set bulkPrices(value) {
        this._bulkPrices = value;
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
     The short name for the product, used for abbreviated orderlines
     */
    get shortName() {
        return this._shortName;
    }
    /**
     The short name for the product, used for abbreviated orderlines
     */
    set shortName(value) {
        this._shortName = value;
    }
    /**
     Additional keywords of this product per language. Added by the supplier
     */
    get keywords() {
        return this._keywords;
    }
    /**
     Additional keywords of this product per language. Added by the supplier
     */
    set keywords(value) {
        this._keywords = value;
    }
    /**
     Additional keywords of this product per language. Added via the PIM
     */
    get customKeywords() {
        return this._customKeywords;
    }
    /**
     Additional keywords of this product per language. Added via the PIM
     */
    set customKeywords(value) {
        this._customKeywords = value;
    }
    /**
     The package description of this product per language
     */
    get packageDescriptions() {
        return this._packageDescriptions;
    }
    /**
     The package description of this product per language
     */
    set packageDescriptions(value) {
        this._packageDescriptions = value;
    }
    /**
     The Original Equipment Manufacturer code (OEM) of this product
     */
    get manufacturerCode() {
        return this._manufacturerCode;
    }
    /**
     The Original Equipment Manufacturer code (OEM) of this product
     */
    set manufacturerCode(value) {
        this._manufacturerCode = value;
    }
    /**
     The European Article Number (EAN) code of this product
     */
    get eanCode() {
        return this._eanCode;
    }
    /**
     The European Article Number (EAN) code of this product
     */
    set eanCode(value) {
        this._eanCode = value;
    }
    /**
     The manufacturer of this product
     */
    get manufacturer() {
        return this._manufacturer;
    }
    /**
     The manufacturer of this product
     */
    set manufacturer(value) {
        this._manufacturer = value;
    }
    /**
     The supplier of this product
     */
    get supplier() {
        return this._supplier;
    }
    /**
     The supplier of this product
     */
    set supplier(value) {
        this._supplier = value;
    }
    /**
     The supplier code of this product
     */
    get supplierCode() {
        return this._supplierCode;
    }
    /**
     The supplier code of this product
     */
    set supplierCode(value) {
        this._supplierCode = value;
    }
    /**
     The status of this product
     */
    get status() {
        return this._status;
    }
    /**
     The status of this product
     */
    set status(value) {
        this._status = value;
    }
    /**
     The extra status of this product, commonly linked to a custom valueset
     */
    get statusExtra() {
        return this._statusExtra;
    }
    /**
     The extra status of this product, commonly linked to a custom valueset
     */
    set statusExtra(value) {
        this._statusExtra = value;
    }
    /**
     The bar code of this product
     */
    get barCode() {
        return this._barCode;
    }
    /**
     The bar code of this product
     */
    set barCode(value) {
        this._barCode = value;
    }
    /**
     The turnover group that classifies the product within the financial structure
     */
    get turnoverGroup() {
        return this._turnoverGroup;
    }
    /**
     The turnover group that classifies the product within the financial structure
     */
    set turnoverGroup(value) {
        this._turnoverGroup = value;
    }
    /**
     The taxonomy the product belongs to
     */
    get taxonomy() {
        return this._taxonomy;
    }
    /**
     The taxonomy the product belongs to
     */
    set taxonomy(value) {
        this._taxonomy = value;
    }
    /**
     The price group the product belongs to, this field can be used for price calculations
     */
    get priceGroup() {
        return this._priceGroup;
    }
    /**
     The price group the product belongs to, this field can be used for price calculations
     */
    set priceGroup(value) {
        this._priceGroup = value;
    }
    /**
     Is this product orderable
     */
    get orderable() {
        return this._orderable;
    }
    /**
     Is this product orderable
     */
    set orderable(value) {
        this._orderable = value;
    }
    /**
     Is this product returnable
     */
    get returnable() {
        return this._returnable;
    }
    /**
     Is this product returnable
     */
    set returnable(value) {
        this._returnable = value;
    }
    /**
     Is it a physical product or a service, download or warranty
     */
    get physical() {
        return this._physical;
    }
    /**
     Is it a physical product or a service, download or warranty
     */
    set physical(value) {
        this._physical = value;
    }
    /**
     Is this product part of any product bundles.
     */
    get hasBundle() {
        return this._hasBundle;
    }
    /**
     Is this product part of any product bundles.
     */
    set hasBundle(value) {
        this._hasBundle = value;
    }
    /**
     Is this product leader of any product bundle.
     */
    get isBundleLeader() {
        return this._isBundleLeader;
    }
    /**
     Is this product leader of any product bundle.
     */
    set isBundleLeader(value) {
        this._isBundleLeader = value;
    }
    /**
     The package type of this product. i.e.: PIECE, BOX, BLISTER
     */
    get package() {
        return this._package;
    }
    /**
     The package type of this product. i.e.: PIECE, BOX, BLISTER
     */
    set package(value) {
        this._package = value;
    }
    /**
     Description of what an item within a package looks like, i.e.: PIECE or BOX
     */
    get packageUnit() {
        return this._packageUnit;
    }
    /**
     Description of what an item within a package looks like, i.e.: PIECE or BOX
     */
    set packageUnit(value) {
        this._packageUnit = value;
    }
    /**
     Number of items within the package
     */
    get packageUnitQuantity() {
        return this._packageUnitQuantity;
    }
    /**
     Number of items within the package
     */
    set packageUnitQuantity(value) {
        this._packageUnitQuantity = value;
    }
    /**
     The minimum quantity of products that can be ordered
     */
    get minimumQuantity() {
        return this._minimumQuantity;
    }
    /**
     The minimum quantity of products that can be ordered
     */
    set minimumQuantity(value) {
        this._minimumQuantity = value;
    }
    /**
     The unit in which the product can be ordered
     */
    get unit() {
        return this._unit;
    }
    /**
     The unit in which the product can be ordered
     */
    set unit(value) {
        this._unit = value;
    }
    /**
     The unit in which the product can be ordered when creating a purchase order
     */
    get purchaseUnit() {
        return this._purchaseUnit;
    }
    /**
     The unit in which the product can be ordered when creating a purchase order
     */
    set purchaseUnit(value) {
        this._purchaseUnit = value;
    }
    /**
     The minimum quantity of products that can be ordered when creating a purchase order
     */
    get purchaseMinimumQuantity() {
        return this._purchaseMinimumQuantity;
    }
    /**
     The minimum quantity of products that can be ordered when creating a purchase order
     */
    set purchaseMinimumQuantity(value) {
        this._purchaseMinimumQuantity = value;
    }
    /**
     The quantity that provides the best value for money for this product
     */
    get economicOrderQuantity() {
        return this._economicOrderQuantity;
    }
    /**
     The quantity that provides the best value for money for this product
     */
    set economicOrderQuantity(value) {
        this._economicOrderQuantity = value;
    }
    /**
     The orderable from date of this product
     */
    get orderableFrom() {
        return this._orderableFrom;
    }
    /**
     The orderable from date of this product
     */
    set orderableFrom(value) {
        this._orderableFrom = value;
    }
    /**
     The orderable to date of this product
     */
    get orderableTo() {
        return this._orderableTo;
    }
    /**
     The orderable to date of this product
     */
    set orderableTo(value) {
        this._orderableTo = value;
    }
    /**
     The release date of this product
     */
    get releaseDate() {
        return this._releaseDate;
    }
    /**
     The release date of this product
     */
    set releaseDate(value) {
        this._releaseDate = value;
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
     Available offers for this Product and Customer/Contact. First item in the array should be regarded as the active price
     */
    get offers() {
        return this._offers;
    }
    /**
     Available offers for this Product and Customer/Contact. First item in the array should be regarded as the active price
     */
    set offers(value) {
        this._offers = value;
    }
    /**
     The container class of this product.
     */
    get containerClass() {
        return this._containerClass;
    }
    /**
     The container class of this product.
     */
    set containerClass(value) {
        this._containerClass = value;
    }
    /**
     The cluster ID of the product's container
     */
    get clusterId() {
        return this._clusterId;
    }
    /**
     The cluster ID of the product's container
     */
    set clusterId(value) {
        this._clusterId = value;
    }
    /**
     cluster field
     */
    get cluster() {
        return this._cluster;
    }
    /**
     cluster field
     */
    set cluster(value) {
        this._cluster = value;
    }
    /**
     surcharges field
     */
    get surcharges() {
        return this._surcharges;
    }
    /**
     surcharges field
     */
    set surcharges(value) {
        this._surcharges = value;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map