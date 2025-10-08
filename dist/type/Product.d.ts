import { IBaseProduct } from './IBaseProduct';
import { ProductClass } from '../enum/ProductClass';
import { YesNo } from '../enum/YesNo';
import { ProductStatus } from '../enum/ProductStatus';
import { ProductContainerClass } from '../enum/ProductContainerClass';
import { AttributeResultResponse } from './AttributeResultResponse';
import { Bundle } from './Bundle';
import { Category } from './Category';
import { CategoryResponse } from './CategoryResponse';
import { CrossupsellsResponse } from './CrossupsellsResponse';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { ProductInventory } from './ProductInventory';
import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
import { ProductMedia } from './ProductMedia';
import { OrderlistsResponse } from './OrderlistsResponse';
import { ProductPrice } from './ProductPrice';
import { Price } from './Price';
import { LocalizedString } from './LocalizedString';
import { Source } from './Source';
import { ProductOffer } from './ProductOffer';
import { Cluster } from './Cluster';
import { Surcharge } from './Surcharge';
/**
 Object class for Product
 */
export declare class Product implements IBaseProduct {
    /** Resource primary identifier */
    private _id;
    /** This product's unique identifier */
    private _productId;
    /** categoryId field */
    private _categoryId;
    /** Lists attributes for this product based on the search input. */
    private _attributes?;
    /** bundles field */
    private _bundles?;
    /** Product main category */
    private _category?;
    /** All the categories the product belongs to */
    private _categories?;
    /** categoryPath field */
    private _categoryPath;
    /** crossupsellsFrom field */
    private _crossupsellsFrom;
    /** crossupsellsTo field */
    private _crossupsellsTo;
    /** favoriteLists field */
    private _favoriteLists?;
    /** Product inventory */
    private _inventory?;
    /** Product media images */
    /** @deprecated Deprecated in favor of `media.images` */
    private _mediaImages?;
    /** Product media videos */
    /** @deprecated Deprecated in favor of `media.videos` */
    private _mediaVideos?;
    /** Product media documents */
    /** @deprecated Deprecated in favor of `media.documents` */
    private _mediaDocuments?;
    /** Product media images */
    private _media?;
    /** orderlists field */
    private _orderlists;
    /** price field */
    private _price?;
    /** priceData field */
    private _priceData?;
    /** bulkPrices field */
    private _bulkPrices?;
    /** The requested language for this this resource, default to the
            products default language.
            ISO 639-1 format. */
    private _language?;
    /** The class of the request resource */
    private _class;
    /** The hidden status of this resource. */
    private _hidden;
    /** names field */
    private _names;
    /** descriptions field */
    private _descriptions;
    /** shortDescriptions field */
    private _shortDescriptions;
    /** slugs field */
    private _slugs;
    /** The SKU (stock keeping unit) of this product */
    private _sku;
    /** The default language for this product or cluster, this is the language to fall back too, when there is no translation available in a specific language. */
    private _defaultLanguage;
    /** priority field */
    private _priority?;
    /** [SEO] Localized Metadata title available in multiple languages */
    private _metadataTitles?;
    /** [SEO] Localized Metadata description available in multiple languages */
    private _metadataDescriptions?;
    /** [SEO] Localized Metadata keywords available in multiple languages */
    private _metadataKeywords?;
    /** [SEO] Localized Metadata canonical url available in multiple languages */
    private _metadataCanonicalUrls?;
    /** sources field */
    private _sources;
    /** The short name for the product, used for abbreviated orderlines */
    private _shortName;
    /** Additional keywords of this product per language. Added by the supplier */
    private _keywords?;
    /** Additional keywords of this product per language. Added via the PIM */
    private _customKeywords?;
    /** The package description of this product per language */
    private _packageDescriptions?;
    /** The Original Equipment Manufacturer code (OEM) of this product */
    private _manufacturerCode;
    /** The European Article Number (EAN) code of this product */
    private _eanCode;
    /** The manufacturer of this product */
    private _manufacturer;
    /** The supplier of this product */
    private _supplier;
    /** The supplier code of this product */
    private _supplierCode;
    /** The status of this product */
    private _status;
    /** The extra status of this product, commonly linked to a custom valueset */
    private _statusExtra?;
    /** The bar code of this product */
    private _barCode?;
    /** The turnover group that classifies the product within the financial structure */
    private _turnoverGroup?;
    /** The taxonomy the product belongs to */
    private _taxonomy?;
    /** The price group the product belongs to, this field can be used for price calculations */
    private _priceGroup?;
    /** Is this product orderable */
    private _orderable;
    /** Is this product returnable */
    private _returnable;
    /** Is it a physical product or a service, download or warranty */
    private _physical;
    /** Is this product part of any product bundles. */
    private _hasBundle;
    /** Is this product leader of any product bundle. */
    private _isBundleLeader;
    /** The package type of this product. i.e.: PIECE, BOX, BLISTER */
    private _package;
    /** Description of what an item within a package looks like, i.e.: PIECE or BOX */
    private _packageUnit;
    /** Number of items within the package */
    private _packageUnitQuantity;
    /** The minimum quantity of products that can be ordered */
    private _minimumQuantity;
    /** The unit in which the product can be ordered */
    private _unit;
    /** The unit in which the product can be ordered when creating a purchase order */
    private _purchaseUnit;
    /** The minimum quantity of products that can be ordered when creating a purchase order */
    private _purchaseMinimumQuantity;
    /** The quantity that provides the best value for money for this product */
    private _economicOrderQuantity;
    /** The orderable from date of this product */
    private _orderableFrom?;
    /** The orderable to date of this product */
    private _orderableTo?;
    /** The release date of this product */
    private _releaseDate?;
    /** The creation date of this product */
    private _createdAt;
    /** The last modified date of this product */
    private _lastModifiedAt;
    /** Available offers for this Product and Customer/Contact. First item in the array should be regarded as the active price */
    private _offers?;
    /** The container class of this product. */
    private _containerClass;
    /** The cluster ID of the product's container */
    private _clusterId?;
    /** cluster field */
    private _cluster?;
    /** surcharges field */
    private _surcharges;
    /**
     Creates a new instance of Product
     */
    constructor(data?: Partial<Product>);
    /**
     Resource primary identifier
     */
    get id(): number;
    /**
     Resource primary identifier
     */
    set id(value: number);
    /**
     This product's unique identifier
     */
    get productId(): number;
    /**
     This product's unique identifier
     */
    set productId(value: number);
    /**
     categoryId field
     */
    get categoryId(): number;
    /**
     categoryId field
     */
    set categoryId(value: number);
    /**
     Lists attributes for this product based on the search input.
     */
    get attributes(): AttributeResultResponse | undefined;
    /**
     Lists attributes for this product based on the search input.
     */
    set attributes(value: AttributeResultResponse | undefined);
    /**
     bundles field
     */
    get bundles(): Bundle[] | undefined;
    /**
     bundles field
     */
    set bundles(value: Bundle[] | undefined);
    /**
     Product main category
     */
    get category(): Category | undefined;
    /**
     Product main category
     */
    set category(value: Category | undefined);
    /**
     All the categories the product belongs to
     */
    get categories(): CategoryResponse | undefined;
    /**
     All the categories the product belongs to
     */
    set categories(value: CategoryResponse | undefined);
    /**
     categoryPath field
     */
    get categoryPath(): Category[];
    /**
     categoryPath field
     */
    set categoryPath(value: Category[]);
    /**
     crossupsellsFrom field
     */
    get crossupsellsFrom(): CrossupsellsResponse;
    /**
     crossupsellsFrom field
     */
    set crossupsellsFrom(value: CrossupsellsResponse);
    /**
     crossupsellsTo field
     */
    get crossupsellsTo(): CrossupsellsResponse;
    /**
     crossupsellsTo field
     */
    set crossupsellsTo(value: CrossupsellsResponse);
    /**
     favoriteLists field
     */
    get favoriteLists(): FavoriteListsResponse | undefined;
    /**
     favoriteLists field
     */
    set favoriteLists(value: FavoriteListsResponse | undefined);
    /**
     Product inventory
     */
    get inventory(): ProductInventory | undefined;
    /**
     Product inventory
     */
    set inventory(value: ProductInventory | undefined);
    /**
     Product media images
     */
    get mediaImages(): PaginatedMediaImageResponse | undefined;
    /**
     Product media images
     */
    set mediaImages(value: PaginatedMediaImageResponse | undefined);
    /**
     Product media videos
     */
    get mediaVideos(): PaginatedMediaVideoResponse | undefined;
    /**
     Product media videos
     */
    set mediaVideos(value: PaginatedMediaVideoResponse | undefined);
    /**
     Product media documents
     */
    get mediaDocuments(): PaginatedMediaDocumentResponse | undefined;
    /**
     Product media documents
     */
    set mediaDocuments(value: PaginatedMediaDocumentResponse | undefined);
    /**
     Product media images
     */
    get media(): ProductMedia | undefined;
    /**
     Product media images
     */
    set media(value: ProductMedia | undefined);
    /**
     orderlists field
     */
    get orderlists(): OrderlistsResponse;
    /**
     orderlists field
     */
    set orderlists(value: OrderlistsResponse);
    /**
     price field
     */
    get price(): ProductPrice | undefined;
    /**
     price field
     */
    set price(value: ProductPrice | undefined);
    /**
     priceData field
     */
    get priceData(): Price | undefined;
    /**
     priceData field
     */
    set priceData(value: Price | undefined);
    /**
     bulkPrices field
     */
    get bulkPrices(): ProductPrice[] | undefined;
    /**
     bulkPrices field
     */
    set bulkPrices(value: ProductPrice[] | undefined);
    /**
     The requested language for this this resource, default to the
            products default language.
            ISO 639-1 format.
     */
    get language(): string | undefined;
    /**
     The requested language for this this resource, default to the
            products default language.
            ISO 639-1 format.
     */
    set language(value: string | undefined);
    /**
     The class of the request resource
     */
    get class(): ProductClass;
    /**
     The class of the request resource
     */
    set class(value: ProductClass);
    /**
     The hidden status of this resource.
     */
    get hidden(): YesNo;
    /**
     The hidden status of this resource.
     */
    set hidden(value: YesNo);
    /**
     names field
     */
    get names(): LocalizedString[];
    /**
     names field
     */
    set names(value: LocalizedString[]);
    /**
     descriptions field
     */
    get descriptions(): LocalizedString[];
    /**
     descriptions field
     */
    set descriptions(value: LocalizedString[]);
    /**
     shortDescriptions field
     */
    get shortDescriptions(): LocalizedString[];
    /**
     shortDescriptions field
     */
    set shortDescriptions(value: LocalizedString[]);
    /**
     slugs field
     */
    get slugs(): LocalizedString[];
    /**
     slugs field
     */
    set slugs(value: LocalizedString[]);
    /**
     The SKU (stock keeping unit) of this product
     */
    get sku(): string;
    /**
     The SKU (stock keeping unit) of this product
     */
    set sku(value: string);
    /**
     The default language for this product or cluster, this is the language to fall back too, when there is no translation available in a specific language.
     */
    get defaultLanguage(): string;
    /**
     The default language for this product or cluster, this is the language to fall back too, when there is no translation available in a specific language.
     */
    set defaultLanguage(value: string);
    /**
     priority field
     */
    get priority(): number | undefined;
    /**
     priority field
     */
    set priority(value: number | undefined);
    /**
     [SEO] Localized Metadata title available in multiple languages
     */
    get metadataTitles(): LocalizedString[] | undefined;
    /**
     [SEO] Localized Metadata title available in multiple languages
     */
    set metadataTitles(value: LocalizedString[] | undefined);
    /**
     [SEO] Localized Metadata description available in multiple languages
     */
    get metadataDescriptions(): LocalizedString[] | undefined;
    /**
     [SEO] Localized Metadata description available in multiple languages
     */
    set metadataDescriptions(value: LocalizedString[] | undefined);
    /**
     [SEO] Localized Metadata keywords available in multiple languages
     */
    get metadataKeywords(): LocalizedString[] | undefined;
    /**
     [SEO] Localized Metadata keywords available in multiple languages
     */
    set metadataKeywords(value: LocalizedString[] | undefined);
    /**
     [SEO] Localized Metadata canonical url available in multiple languages
     */
    get metadataCanonicalUrls(): LocalizedString[] | undefined;
    /**
     [SEO] Localized Metadata canonical url available in multiple languages
     */
    set metadataCanonicalUrls(value: LocalizedString[] | undefined);
    /**
     sources field
     */
    get sources(): Source[];
    /**
     sources field
     */
    set sources(value: Source[]);
    /**
     The short name for the product, used for abbreviated orderlines
     */
    get shortName(): string;
    /**
     The short name for the product, used for abbreviated orderlines
     */
    set shortName(value: string);
    /**
     Additional keywords of this product per language. Added by the supplier
     */
    get keywords(): LocalizedString[] | undefined;
    /**
     Additional keywords of this product per language. Added by the supplier
     */
    set keywords(value: LocalizedString[] | undefined);
    /**
     Additional keywords of this product per language. Added via the PIM
     */
    get customKeywords(): LocalizedString[] | undefined;
    /**
     Additional keywords of this product per language. Added via the PIM
     */
    set customKeywords(value: LocalizedString[] | undefined);
    /**
     The package description of this product per language
     */
    get packageDescriptions(): LocalizedString[] | undefined;
    /**
     The package description of this product per language
     */
    set packageDescriptions(value: LocalizedString[] | undefined);
    /**
     The Original Equipment Manufacturer code (OEM) of this product
     */
    get manufacturerCode(): string;
    /**
     The Original Equipment Manufacturer code (OEM) of this product
     */
    set manufacturerCode(value: string);
    /**
     The European Article Number (EAN) code of this product
     */
    get eanCode(): string;
    /**
     The European Article Number (EAN) code of this product
     */
    set eanCode(value: string);
    /**
     The manufacturer of this product
     */
    get manufacturer(): string;
    /**
     The manufacturer of this product
     */
    set manufacturer(value: string);
    /**
     The supplier of this product
     */
    get supplier(): string;
    /**
     The supplier of this product
     */
    set supplier(value: string);
    /**
     The supplier code of this product
     */
    get supplierCode(): string;
    /**
     The supplier code of this product
     */
    set supplierCode(value: string);
    /**
     The status of this product
     */
    get status(): ProductStatus;
    /**
     The status of this product
     */
    set status(value: ProductStatus);
    /**
     The extra status of this product, commonly linked to a custom valueset
     */
    get statusExtra(): string | undefined;
    /**
     The extra status of this product, commonly linked to a custom valueset
     */
    set statusExtra(value: string | undefined);
    /**
     The bar code of this product
     */
    get barCode(): string | undefined;
    /**
     The bar code of this product
     */
    set barCode(value: string | undefined);
    /**
     The turnover group that classifies the product within the financial structure
     */
    get turnoverGroup(): string | undefined;
    /**
     The turnover group that classifies the product within the financial structure
     */
    set turnoverGroup(value: string | undefined);
    /**
     The taxonomy the product belongs to
     */
    get taxonomy(): string | undefined;
    /**
     The taxonomy the product belongs to
     */
    set taxonomy(value: string | undefined);
    /**
     The price group the product belongs to, this field can be used for price calculations
     */
    get priceGroup(): string | undefined;
    /**
     The price group the product belongs to, this field can be used for price calculations
     */
    set priceGroup(value: string | undefined);
    /**
     Is this product orderable
     */
    get orderable(): YesNo;
    /**
     Is this product orderable
     */
    set orderable(value: YesNo);
    /**
     Is this product returnable
     */
    get returnable(): YesNo;
    /**
     Is this product returnable
     */
    set returnable(value: YesNo);
    /**
     Is it a physical product or a service, download or warranty
     */
    get physical(): YesNo;
    /**
     Is it a physical product or a service, download or warranty
     */
    set physical(value: YesNo);
    /**
     Is this product part of any product bundles.
     */
    get hasBundle(): YesNo;
    /**
     Is this product part of any product bundles.
     */
    set hasBundle(value: YesNo);
    /**
     Is this product leader of any product bundle.
     */
    get isBundleLeader(): YesNo;
    /**
     Is this product leader of any product bundle.
     */
    set isBundleLeader(value: YesNo);
    /**
     The package type of this product. i.e.: PIECE, BOX, BLISTER
     */
    get package(): string;
    /**
     The package type of this product. i.e.: PIECE, BOX, BLISTER
     */
    set package(value: string);
    /**
     Description of what an item within a package looks like, i.e.: PIECE or BOX
     */
    get packageUnit(): string;
    /**
     Description of what an item within a package looks like, i.e.: PIECE or BOX
     */
    set packageUnit(value: string);
    /**
     Number of items within the package
     */
    get packageUnitQuantity(): string;
    /**
     Number of items within the package
     */
    set packageUnitQuantity(value: string);
    /**
     The minimum quantity of products that can be ordered
     */
    get minimumQuantity(): number;
    /**
     The minimum quantity of products that can be ordered
     */
    set minimumQuantity(value: number);
    /**
     The unit in which the product can be ordered
     */
    get unit(): number;
    /**
     The unit in which the product can be ordered
     */
    set unit(value: number);
    /**
     The unit in which the product can be ordered when creating a purchase order
     */
    get purchaseUnit(): number;
    /**
     The unit in which the product can be ordered when creating a purchase order
     */
    set purchaseUnit(value: number);
    /**
     The minimum quantity of products that can be ordered when creating a purchase order
     */
    get purchaseMinimumQuantity(): number;
    /**
     The minimum quantity of products that can be ordered when creating a purchase order
     */
    set purchaseMinimumQuantity(value: number);
    /**
     The quantity that provides the best value for money for this product
     */
    get economicOrderQuantity(): number;
    /**
     The quantity that provides the best value for money for this product
     */
    set economicOrderQuantity(value: number);
    /**
     The orderable from date of this product
     */
    get orderableFrom(): string | undefined;
    /**
     The orderable from date of this product
     */
    set orderableFrom(value: string | undefined);
    /**
     The orderable to date of this product
     */
    get orderableTo(): string | undefined;
    /**
     The orderable to date of this product
     */
    set orderableTo(value: string | undefined);
    /**
     The release date of this product
     */
    get releaseDate(): string | undefined;
    /**
     The release date of this product
     */
    set releaseDate(value: string | undefined);
    /**
     The creation date of this product
     */
    get createdAt(): string;
    /**
     The creation date of this product
     */
    set createdAt(value: string);
    /**
     The last modified date of this product
     */
    get lastModifiedAt(): string;
    /**
     The last modified date of this product
     */
    set lastModifiedAt(value: string);
    /**
     Available offers for this Product and Customer/Contact. First item in the array should be regarded as the active price
     */
    get offers(): ProductOffer[] | undefined;
    /**
     Available offers for this Product and Customer/Contact. First item in the array should be regarded as the active price
     */
    set offers(value: ProductOffer[] | undefined);
    /**
     The container class of this product.
     */
    get containerClass(): ProductContainerClass;
    /**
     The container class of this product.
     */
    set containerClass(value: ProductContainerClass);
    /**
     The cluster ID of the product's container
     */
    get clusterId(): number | undefined;
    /**
     The cluster ID of the product's container
     */
    set clusterId(value: number | undefined);
    /**
     cluster field
     */
    get cluster(): Cluster | undefined;
    /**
     cluster field
     */
    set cluster(value: Cluster | undefined);
    /**
     surcharges field
     */
    get surcharges(): Surcharge[];
    /**
     surcharges field
     */
    set surcharges(value: Surcharge[]);
}
//# sourceMappingURL=Product.d.ts.map