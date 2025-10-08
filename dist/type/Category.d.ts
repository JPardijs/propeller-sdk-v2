import { YesNo } from '../enum/YesNo';
import { AttributeResultResponse } from './AttributeResultResponse';
import { LocalizedString } from './LocalizedString';
import { Source } from './Source';
import { ProductsResponse } from './ProductsResponse';
/**
 Object class for Category
 */
export declare class Category {
    /** categoryId field */
    private _categoryId;
    /** Lists attributes for this category based on the search input. */
    private _attributes?;
    /** Localized category name as it is available in
          the supported language defaults to the category's default language. */
    private _name;
    /** The long description for this category,
              this field can contain html formatting,
              this field can be translated is case of multilingual catalog */
    private _description;
    /** The short description for this category,
              this field can contain html formatting,
              this field can be translated is case of multilingual catalog */
    private _shortDescription;
    /** The slug for this category,
              each available language contains a different slug */
    private _slug;
    /** The path in id's to the root of the inheritance tree,
      can be passed as parameter to the productsearch API */
    private _path;
    /** categories field */
    private _categories?;
    /** The category's parent Category when available */
    private _parent?;
    /** defaultLanguage field */
    private _defaultLanguage;
    /** [SEO] Localized Metadata title available in multiple languages */
    private _metadataTitles?;
    /** [SEO] Localized Metadata description available in multiple languages */
    private _metadataDescriptions?;
    /** [SEO] Localized Metadata keywords available in multiple languages */
    private _metadataKeywords?;
    /** [SEO] Localized Metadata canonical url available in multiple languages */
    private _metadataCanonicalUrls?;
    /** The hidden status of the category */
    private _hidden;
    /** categoryPath field */
    private _categoryPath;
    /** sources field */
    private _sources;
    /** products field */
    private _products;
    /**
     Creates a new instance of Category
     */
    constructor(data?: Partial<Category>);
    /**
     categoryId field
     */
    get categoryId(): number;
    /**
     categoryId field
     */
    set categoryId(value: number);
    /**
     Lists attributes for this category based on the search input.
     */
    get attributes(): AttributeResultResponse | undefined;
    /**
     Lists attributes for this category based on the search input.
     */
    set attributes(value: AttributeResultResponse | undefined);
    /**
     Localized category name as it is available in
          the supported language defaults to the category's default language.
     */
    get name(): LocalizedString[];
    /**
     Localized category name as it is available in
          the supported language defaults to the category's default language.
     */
    set name(value: LocalizedString[]);
    /**
     The long description for this category,
              this field can contain html formatting,
              this field can be translated is case of multilingual catalog
     */
    get description(): LocalizedString[];
    /**
     The long description for this category,
              this field can contain html formatting,
              this field can be translated is case of multilingual catalog
     */
    set description(value: LocalizedString[]);
    /**
     The short description for this category,
              this field can contain html formatting,
              this field can be translated is case of multilingual catalog
     */
    get shortDescription(): LocalizedString[];
    /**
     The short description for this category,
              this field can contain html formatting,
              this field can be translated is case of multilingual catalog
     */
    set shortDescription(value: LocalizedString[]);
    /**
     The slug for this category,
              each available language contains a different slug
     */
    get slug(): LocalizedString[];
    /**
     The slug for this category,
              each available language contains a different slug
     */
    set slug(value: LocalizedString[]);
    /**
     The path in id's to the root of the inheritance tree,
      can be passed as parameter to the productsearch API
     */
    get path(): string;
    /**
     The path in id's to the root of the inheritance tree,
      can be passed as parameter to the productsearch API
     */
    set path(value: string);
    /**
     categories field
     */
    get categories(): Category[] | undefined;
    /**
     categories field
     */
    set categories(value: Category[] | undefined);
    /**
     The category's parent Category when available
     */
    get parent(): Category | undefined;
    /**
     The category's parent Category when available
     */
    set parent(value: Category | undefined);
    /**
     defaultLanguage field
     */
    get defaultLanguage(): string;
    /**
     defaultLanguage field
     */
    set defaultLanguage(value: string);
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
     The hidden status of the category
     */
    get hidden(): YesNo;
    /**
     The hidden status of the category
     */
    set hidden(value: YesNo);
    /**
     categoryPath field
     */
    get categoryPath(): Category[];
    /**
     categoryPath field
     */
    set categoryPath(value: Category[]);
    /**
     sources field
     */
    get sources(): Source[];
    /**
     sources field
     */
    set sources(value: Source[]);
    /**
     products field
     */
    get products(): ProductsResponse;
    /**
     products field
     */
    set products(value: ProductsResponse);
}
//# sourceMappingURL=Category.d.ts.map