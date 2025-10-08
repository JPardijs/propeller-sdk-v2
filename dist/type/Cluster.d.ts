import { IBaseProduct } from './IBaseProduct';
import { ProductClass } from '../enum/ProductClass';
import { YesNo } from '../enum/YesNo';
import { AttributeResultResponse } from './AttributeResultResponse';
import { CategoryResponse } from './CategoryResponse';
import { Category } from './Category';
import { CrossupsellsResponse } from './CrossupsellsResponse';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { OrderlistsResponse } from './OrderlistsResponse';
import { Product } from './Product';
import { ClusterOption } from './ClusterOption';
import { ClusterDrillDown } from './ClusterDrillDown';
import { ClusterConfig } from './ClusterConfig';
import { LocalizedString } from './LocalizedString';
import { Source } from './Source';
/**
 Object class for Cluster
 */
export declare class Cluster implements IBaseProduct {
    /** Resource primary identifier */
    private _id;
    /** The classID of this cluster */
    private _clusterId;
    /** categoryId field */
    private _categoryId;
    /** Lists attributes for this cluster based on the search input. */
    private _attributes?;
    /** All the categories the cluster belongs to */
    private _categories?;
    /** category field */
    private _category;
    /** categoryPath field */
    private _categoryPath;
    /** crossupsellsFrom field */
    private _crossupsellsFrom;
    /** crossupsellsTo field */
    private _crossupsellsTo;
    /** favoriteLists field */
    private _favoriteLists?;
    /** orderlists field */
    private _orderlists;
    /** Array of selectable main products for this cluster, when the array contains more than one. Only one can be added per cart/order item */
    private _products;
    /** The creation date of this product */
    private _createdAt;
    /** The last modified date of this product */
    private _lastModifiedAt;
    /** options field */
    private _options;
    /** The drilldown configuration for this cluster  */
    /** @deprecated Use config.setting instead */
    private _drillDowns?;
    /** defaultProduct field */
    private _defaultProduct?;
    /** config field */
    private _config?;
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
    /** The requested language for this this resource, default to the
            products default language.
            ISO 639-1 format. */
    private _language?;
    /** The class of the request resource */
    private _class;
    /** The hidden status of this resource. */
    private _hidden;
    /**
     Creates a new instance of Cluster
     */
    constructor(data?: Partial<Cluster>);
    /**
     Resource primary identifier
     */
    get id(): number;
    /**
     Resource primary identifier
     */
    set id(value: number);
    /**
     The classID of this cluster
     */
    get clusterId(): number;
    /**
     The classID of this cluster
     */
    set clusterId(value: number);
    /**
     categoryId field
     */
    get categoryId(): number;
    /**
     categoryId field
     */
    set categoryId(value: number);
    /**
     Lists attributes for this cluster based on the search input.
     */
    get attributes(): AttributeResultResponse | undefined;
    /**
     Lists attributes for this cluster based on the search input.
     */
    set attributes(value: AttributeResultResponse | undefined);
    /**
     All the categories the cluster belongs to
     */
    get categories(): CategoryResponse | undefined;
    /**
     All the categories the cluster belongs to
     */
    set categories(value: CategoryResponse | undefined);
    /**
     category field
     */
    get category(): Category;
    /**
     category field
     */
    set category(value: Category);
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
     orderlists field
     */
    get orderlists(): OrderlistsResponse;
    /**
     orderlists field
     */
    set orderlists(value: OrderlistsResponse);
    /**
     Array of selectable main products for this cluster, when the array contains more than one. Only one can be added per cart/order item
     */
    get products(): Product[];
    /**
     Array of selectable main products for this cluster, when the array contains more than one. Only one can be added per cart/order item
     */
    set products(value: Product[]);
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
     options field
     */
    get options(): ClusterOption[];
    /**
     options field
     */
    set options(value: ClusterOption[]);
    /**
     The drilldown configuration for this cluster
     */
    get drillDowns(): ClusterDrillDown[] | undefined;
    /**
     The drilldown configuration for this cluster
     */
    set drillDowns(value: ClusterDrillDown[] | undefined);
    /**
     defaultProduct field
     */
    get defaultProduct(): Product | undefined;
    /**
     defaultProduct field
     */
    set defaultProduct(value: Product | undefined);
    /**
     config field
     */
    get config(): ClusterConfig | undefined;
    /**
     config field
     */
    set config(value: ClusterConfig | undefined);
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
}
//# sourceMappingURL=Cluster.d.ts.map