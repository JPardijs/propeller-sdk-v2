import { Address } from './Address';
import { ExternalAddress } from './ExternalAddress';
import { AdminUser } from './AdminUser';
import { UserResponse } from './UserResponse';
import { AdminUserTenant } from './AdminUserTenant';
import { AttributeDescription } from './AttributeDescription';
import { AttributeDescriptionResponse } from './AttributeDescriptionResponse';
import { Attribute } from './Attribute';
import { AttributeResponse } from './AttributeResponse';
import { AttributeResultResponse } from './AttributeResultResponse';
import { GCIPUser } from './GCIPUser';
import { MagicTokenResponse } from './MagicTokenResponse';
import { MagicToken } from './MagicToken';
import { BundlesResponse } from './BundlesResponse';
import { Bundle } from './Bundle';
import { BusinessRule } from './BusinessRule';
import { BusinessRuleResponse } from './BusinessRuleResponse';
import { BusinessRuleDecisionTable } from './BusinessRuleDecisionTable';
import { BusinessRuleFieldDefinitionGroup } from './BusinessRuleFieldDefinitionGroup';
import { CarriersResponse } from './CarriersResponse';
import { Carrier } from './Carrier';
import { Cart } from './Cart';
import { CartResponse } from './CartResponse';
import { Category } from './Category';
import { CategoryResponse } from './CategoryResponse';
import { Site } from './Site';
import { Channel } from './Channel';
import { Payment } from './Payment';
import { PaymentsResponse } from './PaymentsResponse';
import { CompanySearchResponse } from './CompanySearchResponse';
import { Crossupsell } from './Crossupsell';
import { CrossupsellsResponse } from './CrossupsellsResponse';
import { IEventActionConfig } from './IEventActionConfig';
import { EventActionConfigResponse } from './EventActionConfigResponse';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { FavoriteList } from './FavoriteList';
import { InventoryResponse } from './InventoryResponse';
import { MediaImage } from './MediaImage';
import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { MediaVideo } from './MediaVideo';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { MediaDocument } from './MediaDocument';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
import { Media } from './Media';
import { IBaseTemplate } from './IBaseTemplate';
import { TemplateResponse } from './TemplateResponse';
import { OrderStatusesResponse } from './OrderStatusesResponse';
import { OrderStatus } from './OrderStatus';
import { OrderStatusSetsResponse } from './OrderStatusSetsResponse';
import { OrderStatusSet } from './OrderStatusSet';
import { OrderResponse } from './OrderResponse';
import { Order } from './Order';
import { Base64File } from './Base64File';
import { OrderAddress } from './OrderAddress';
import { Shipment } from './Shipment';
import { ShipmentResponse } from './ShipmentResponse';
import { ShipmentItem } from './ShipmentItem';
import { ShipmentItemResponse } from './ShipmentItemResponse';
import { TrackAndTrace } from './TrackAndTrace';
import { TrackAndTraceResponse } from './TrackAndTraceResponse';
import { Orderlist } from './Orderlist';
import { OrderlistsResponse } from './OrderlistsResponse';
import { PayMethod } from './PayMethod';
import { PayMethodsResponse } from './PayMethodsResponse';
import { Price } from './Price';
import { PriceResponse } from './PriceResponse';
import { CostPriceResponse } from './CostPriceResponse';
import { ProductPrice } from './ProductPrice';
import { Pricesheet } from './Pricesheet';
import { PricesheetResponse } from './PricesheetResponse';
import { Discount } from './Discount';
import { DiscountResponse } from './DiscountResponse';
import { BulkPriceResponse } from './BulkPriceResponse';
import { BulkCostPriceResponse } from './BulkCostPriceResponse';
import { ZoneTaxCode } from './ZoneTaxCode';
import { ZoneTaxCodeResponse } from './ZoneTaxCodeResponse';
import { Tax } from './Tax';
import { TaxesResponse } from './TaxesResponse';
import { Cluster } from './Cluster';
import { ProductsResponse } from './ProductsResponse';
import { Product } from './Product';
import { ClusterConfigResponse } from './ClusterConfigResponse';
import { RoleDefinitionResponse } from './RoleDefinitionResponse';
import { RoleDefinition } from './RoleDefinition';
import { Role } from './Role';
import { RoleResponse } from './RoleResponse';
import { Shop } from './Shop';
import { SparePartsMachine } from './SparePartsMachine';
import { SparePartsMachineResponse } from './SparePartsMachineResponse';
import { SurchargesResponse } from './SurchargesResponse';
import { Surcharge } from './Surcharge';
import { SurchargeProductResponse } from './SurchargeProductResponse';
import { Tender } from './Tender';
import { Usergroup } from './Usergroup';
import { UsergroupsResponse } from './UsergroupsResponse';
import { Company } from './Company';
import { CompaniesResponse } from './CompaniesResponse';
import { Contact } from './Contact';
import { ContactsResponse } from './ContactsResponse';
import { Customer } from './Customer';
import { CustomersResponse } from './CustomersResponse';
import { IBaseUser } from './IBaseUser';
import { PurchaseAuthorizationConfig } from './PurchaseAuthorizationConfig';
import { PurchaseAuthorizationConfigResponse } from './PurchaseAuthorizationConfigResponse';
import { Valueset } from './Valueset';
import { ValuesetResponse } from './ValuesetResponse';
import { ValuesetItemResponse } from './ValuesetItemResponse';
import { Warehouse } from './Warehouse';
import { WarehousesResponse } from './WarehousesResponse';
/**
 Object class for Query
 */
export declare class Query {
    /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
    private _addressesByUserId;
    /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
    private _addressesByCustomerId;
    /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')) */
    private _addressesByCompanyId;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] OR ('user is authenticated') */
    private _externalAddress;
    /** AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('email if present in input matches JWT')) */
    private _adminUser;
    /** AUTH: Role=[] OR ('user is authenticated') */
    private _adminUserViewer?;
    /** AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] */
    private _adminUsers;
    /** AUTH: Role=[role.OWNER,role.EDITOR] */
    private _adminUserTenant;
    /** attributeDescription field */
    private _attributeDescription;
    /** attributeDescriptions field */
    private _attributeDescriptions;
    /** attribute field */
    private _attribute;
    /** attributes field */
    private _attributes;
    /** attributesByProductId field */
    private _attributesByProductId;
    /** attributeResultByProductId field */
    private _attributeResultByProductId;
    /** attributeResultByCategoryId field */
    private _attributeResultByCategoryId;
    /** attributeResultByCompanyId field */
    private _attributeResultByCompanyId;
    /** attributeResultByContactId field */
    private _attributeResultByContactId;
    /** attributeResultByCustomerId field */
    private _attributeResultByCustomerId;
    /** attributeResultByClusterId field */
    private _attributeResultByClusterId;
    /** AUTH: Role=[system] OR ('user is authenticated') */
    private _authentication;
    /** AUTH: Role=[system] */
    private _magicTokens;
    /** AUTH: Role=[system] */
    private _magicToken;
    /** bundles field */
    private _bundles;
    /** bundle field */
    private _bundle;
    /** Returns a business rule by its ID. */
    private _businessRule;
    /** Returns a paginated response of rules based on the provider filter */
    private _businessRules;
    /** Returns the JDM Json representation of the business rule that can be use in the GoRules Zen Engine */
    private _businessRuleJDM;
    /** Returns a decisionTable by ruleId and tableId */
    private _businessRuleDecisionTable;
    /** businessRuleFieldDefinitions field */
    private _businessRuleFieldDefinitions;
    /** carriers field */
    private _carriers;
    /** carrier field */
    private _carrier;
    /** cart field */
    private _cart;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT')) */
    private _carts;
    /** category field */
    private _category;
    /** categories field */
    private _categories;
    /** site field */
    /** @deprecated Deprecated in favor of channel */
    private _site;
    /** channel field */
    private _channel;
    /** channels field */
    private _channels;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
    private _payment?;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
    private _payments;
    /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] */
    private _companySearch;
    /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
    private _crossupsell;
    /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
    private _crossupsells;
    /** Query for retrieving an EventActionConfig entity by ID, returns either EventToEmailConfig or EventToWebHookConfig depending on the type */
    private _eventActionConfig?;
    /** Query for retrieving EventActionConfig entities, returns both EventToEmailConfig or EventToWebHookConfig depending on the type */
    private _eventActionConfigs?;
    /** Get favorite lists, use either an id or a source */
    private _favoriteLists;
    /** AUTH: Role=[system] OR ('user is authenticated') */
    private _favoriteList;
    /** AUTH: Role=[logistics.OWNER,logistics.EDITOR,logistics.VIEWER] */
    private _inventory;
    /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
    /** @deprecated Deprecated in favor of `media.image` */
    private _mediaImage;
    /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
    /** @deprecated Deprecated in favor of `media.images` */
    private _mediaImages;
    /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
    /** @deprecated Deprecated in favor of `media.video` */
    private _mediaVideo;
    /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
    /** @deprecated Deprecated in favor of `media.videos` */
    private _mediaVideos;
    /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
    /** @deprecated Deprecated in favor of `media.document` */
    private _mediaDocument;
    /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
    /** @deprecated Deprecated in favor of `media.documents` */
    private _mediaDocuments;
    /** media field */
    private _media?;
    /** Find a Template by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
    private _template;
    /** Find Templates by TemplateSearchInputAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
    private _templates;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
    private _orderStatuses;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
    private _orderStatus;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
    private _orderStatusSets;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
    private _orderStatusSet;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT')) */
    private _orders;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
    private _order;
    /** orderGetPDF field */
    private _orderGetPDF;
    /** quoteGetPDF field */
    private _quoteGetPDF;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
    private _orderAddress;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
    private _orderAddresses;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
    /** @deprecated Use orderAddresses */
    private _addressesByOrderId;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
    private _shipment;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
    private _shipments;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
    private _shipmentItem;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
    private _shipmentItems;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
    private _trackAndTrace;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated') */
    private _trackAndTraces;
    /** AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated') */
    private _orderlist;
    /** AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated') */
    private _orderlists;
    /** payMethod field */
    private _payMethod;
    /** payMethods field */
    private _payMethods;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _price;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _prices;
    /** costPrices field */
    private _costPrices;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _priceCalculate;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _priceExplain;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _priceDefault;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _pricesheet;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _pricesheets;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _discount;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _discounts;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _bulkPrices;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _bulkCostPrices;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _zoneTaxCode;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _zoneTaxCodes;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _tax;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _taxes;
    /** cluster field */
    private _cluster;
    /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT')) */
    private _products;
    /** product field */
    private _product;
    /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
    private _clusterConfigs;
    /** AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] */
    private _clusterConfig;
    /** roleDefinitions field */
    private _roleDefinitions;
    /** roleDefinition field */
    private _roleDefinition;
    /** AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] */
    private _role;
    /** AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
    private _roles;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
    private _shop;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
    private _shops;
    /** Get a single machine, either by id, slug & language or by source & sourceId */
    private _machine?;
    /** List machines */
    private _machines;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _surcharges;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _surcharge;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER] */
    private _productSurcharges;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
    private _tender;
    /** usergroup field */
    /** @deprecated This query is deprecated and will be removed in a future */
    private _usergroup;
    /** usergroups field */
    /** @deprecated This query is deprecated and will be removed in a future */
    private _usergroups;
    /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')) */
    private _company;
    /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] */
    private _companies;
    /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT')) */
    private _contact;
    /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] */
    private _contacts;
    /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
    private _customer;
    /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] */
    private _customers;
    /** AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
    private _user;
    /** viewer field */
    private _viewer;
    /** Query for retrieving a PurchaseAuthorizationConfig entity by ID. The purchase authorization config defines the purchase role of a contact within a company as well as their authorization limit. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR ('user is authenticated'), */
    private _purchaseAuthorizationConfig;
    /** Query for searching through PurchaseAuthorizationConfig entities. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')), */
    private _purchaseAuthorizationConfigs;
    /** valueset field */
    private _valueset;
    /** valuesets field */
    private _valuesets;
    /** valuesetItems field */
    private _valuesetItems;
    /** warehouse field */
    private _warehouse;
    /** warehouses field */
    private _warehouses;
    /**
     Creates a new instance of Query
     */
    constructor(data?: Partial<Query>);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get addressesByUserId(): Address[];
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set addressesByUserId(value: Address[]);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get addressesByCustomerId(): Address[];
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set addressesByCustomerId(value: Address[]);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    get addressesByCompanyId(): Address[];
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    set addressesByCompanyId(value: Address[]);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] OR ('user is authenticated')
     */
    get externalAddress(): ExternalAddress;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] OR ('user is authenticated')
     */
    set externalAddress(value: ExternalAddress);
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('email if present in input matches JWT'))
     */
    get adminUser(): AdminUser;
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('email if present in input matches JWT'))
     */
    set adminUser(value: AdminUser);
    /**
     AUTH: Role=[] OR ('user is authenticated')
     */
    get adminUserViewer(): AdminUser | undefined;
    /**
     AUTH: Role=[] OR ('user is authenticated')
     */
    set adminUserViewer(value: AdminUser | undefined);
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
     */
    get adminUsers(): UserResponse;
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
     */
    set adminUsers(value: UserResponse);
    /**
     AUTH: Role=[role.OWNER,role.EDITOR]
     */
    get adminUserTenant(): AdminUserTenant;
    /**
     AUTH: Role=[role.OWNER,role.EDITOR]
     */
    set adminUserTenant(value: AdminUserTenant);
    /**
     attributeDescription field
     */
    get attributeDescription(): AttributeDescription;
    /**
     attributeDescription field
     */
    set attributeDescription(value: AttributeDescription);
    /**
     attributeDescriptions field
     */
    get attributeDescriptions(): AttributeDescriptionResponse;
    /**
     attributeDescriptions field
     */
    set attributeDescriptions(value: AttributeDescriptionResponse);
    /**
     attribute field
     */
    get attribute(): Attribute;
    /**
     attribute field
     */
    set attribute(value: Attribute);
    /**
     attributes field
     */
    get attributes(): AttributeResponse;
    /**
     attributes field
     */
    set attributes(value: AttributeResponse);
    /**
     attributesByProductId field
     */
    get attributesByProductId(): AttributeResponse;
    /**
     attributesByProductId field
     */
    set attributesByProductId(value: AttributeResponse);
    /**
     attributeResultByProductId field
     */
    get attributeResultByProductId(): AttributeResultResponse;
    /**
     attributeResultByProductId field
     */
    set attributeResultByProductId(value: AttributeResultResponse);
    /**
     attributeResultByCategoryId field
     */
    get attributeResultByCategoryId(): AttributeResultResponse;
    /**
     attributeResultByCategoryId field
     */
    set attributeResultByCategoryId(value: AttributeResultResponse);
    /**
     attributeResultByCompanyId field
     */
    get attributeResultByCompanyId(): AttributeResultResponse;
    /**
     attributeResultByCompanyId field
     */
    set attributeResultByCompanyId(value: AttributeResultResponse);
    /**
     attributeResultByContactId field
     */
    get attributeResultByContactId(): AttributeResultResponse;
    /**
     attributeResultByContactId field
     */
    set attributeResultByContactId(value: AttributeResultResponse);
    /**
     attributeResultByCustomerId field
     */
    get attributeResultByCustomerId(): AttributeResultResponse;
    /**
     attributeResultByCustomerId field
     */
    set attributeResultByCustomerId(value: AttributeResultResponse);
    /**
     attributeResultByClusterId field
     */
    get attributeResultByClusterId(): AttributeResultResponse;
    /**
     attributeResultByClusterId field
     */
    set attributeResultByClusterId(value: AttributeResultResponse);
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get authentication(): GCIPUser;
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set authentication(value: GCIPUser);
    /**
     AUTH: Role=[system]
     */
    get magicTokens(): MagicTokenResponse;
    /**
     AUTH: Role=[system]
     */
    set magicTokens(value: MagicTokenResponse);
    /**
     AUTH: Role=[system]
     */
    get magicToken(): MagicToken;
    /**
     AUTH: Role=[system]
     */
    set magicToken(value: MagicToken);
    /**
     bundles field
     */
    get bundles(): BundlesResponse;
    /**
     bundles field
     */
    set bundles(value: BundlesResponse);
    /**
     bundle field
     */
    get bundle(): Bundle;
    /**
     bundle field
     */
    set bundle(value: Bundle);
    /**
     Returns a business rule by its ID.
     */
    get businessRule(): BusinessRule;
    /**
     Returns a business rule by its ID.
     */
    set businessRule(value: BusinessRule);
    /**
     Returns a paginated response of rules based on the provider filter
     */
    get businessRules(): BusinessRuleResponse;
    /**
     Returns a paginated response of rules based on the provider filter
     */
    set businessRules(value: BusinessRuleResponse);
    /**
     Returns the JDM Json representation of the business rule that can be use in the GoRules Zen Engine
     */
    get businessRuleJDM(): any;
    /**
     Returns the JDM Json representation of the business rule that can be use in the GoRules Zen Engine
     */
    set businessRuleJDM(value: any);
    /**
     Returns a decisionTable by ruleId and tableId
     */
    get businessRuleDecisionTable(): BusinessRuleDecisionTable;
    /**
     Returns a decisionTable by ruleId and tableId
     */
    set businessRuleDecisionTable(value: BusinessRuleDecisionTable);
    /**
     businessRuleFieldDefinitions field
     */
    get businessRuleFieldDefinitions(): BusinessRuleFieldDefinitionGroup;
    /**
     businessRuleFieldDefinitions field
     */
    set businessRuleFieldDefinitions(value: BusinessRuleFieldDefinitionGroup);
    /**
     carriers field
     */
    get carriers(): CarriersResponse;
    /**
     carriers field
     */
    set carriers(value: CarriersResponse);
    /**
     carrier field
     */
    get carrier(): Carrier;
    /**
     carrier field
     */
    set carrier(value: Carrier);
    /**
     cart field
     */
    get cart(): Cart;
    /**
     cart field
     */
    set cart(value: Cart);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    get carts(): CartResponse;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    set carts(value: CartResponse);
    /**
     category field
     */
    get category(): Category;
    /**
     category field
     */
    set category(value: Category);
    /**
     categories field
     */
    get categories(): CategoryResponse;
    /**
     categories field
     */
    set categories(value: CategoryResponse);
    /**
     site field
     */
    get site(): Site;
    /**
     site field
     */
    set site(value: Site);
    /**
     channel field
     */
    get channel(): Channel;
    /**
     channel field
     */
    set channel(value: Channel);
    /**
     channels field
     */
    get channels(): Channel[];
    /**
     channels field
     */
    set channels(value: Channel[]);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get payment(): Payment | undefined;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set payment(value: Payment | undefined);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get payments(): PaymentsResponse;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set payments(value: PaymentsResponse);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    get companySearch(): CompanySearchResponse;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    set companySearch(value: CompanySearchResponse);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get crossupsell(): Crossupsell;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set crossupsell(value: Crossupsell);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get crossupsells(): CrossupsellsResponse;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set crossupsells(value: CrossupsellsResponse);
    /**
     Query for retrieving an EventActionConfig entity by ID, returns either EventToEmailConfig or EventToWebHookConfig depending on the type
     */
    get eventActionConfig(): IEventActionConfig | undefined;
    /**
     Query for retrieving an EventActionConfig entity by ID, returns either EventToEmailConfig or EventToWebHookConfig depending on the type
     */
    set eventActionConfig(value: IEventActionConfig | undefined);
    /**
     Query for retrieving EventActionConfig entities, returns both EventToEmailConfig or EventToWebHookConfig depending on the type
     */
    get eventActionConfigs(): EventActionConfigResponse | undefined;
    /**
     Query for retrieving EventActionConfig entities, returns both EventToEmailConfig or EventToWebHookConfig depending on the type
     */
    set eventActionConfigs(value: EventActionConfigResponse | undefined);
    /**
     Get favorite lists, use either an id or a source
     */
    get favoriteLists(): FavoriteListsResponse;
    /**
     Get favorite lists, use either an id or a source
     */
    set favoriteLists(value: FavoriteListsResponse);
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get favoriteList(): FavoriteList;
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set favoriteList(value: FavoriteList);
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR,logistics.VIEWER]
     */
    get inventory(): InventoryResponse;
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR,logistics.VIEWER]
     */
    set inventory(value: InventoryResponse);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get mediaImage(): MediaImage;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set mediaImage(value: MediaImage);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get mediaImages(): PaginatedMediaImageResponse;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set mediaImages(value: PaginatedMediaImageResponse);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get mediaVideo(): MediaVideo;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set mediaVideo(value: MediaVideo);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get mediaVideos(): PaginatedMediaVideoResponse;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set mediaVideos(value: PaginatedMediaVideoResponse);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get mediaDocument(): MediaDocument;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set mediaDocument(value: MediaDocument);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get mediaDocuments(): PaginatedMediaDocumentResponse;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set mediaDocuments(value: PaginatedMediaDocumentResponse);
    /**
     media field
     */
    get media(): Media | undefined;
    /**
     media field
     */
    set media(value: Media | undefined);
    /**
     Find a Template by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get template(): IBaseTemplate;
    /**
     Find a Template by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set template(value: IBaseTemplate);
    /**
     Find Templates by TemplateSearchInputAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get templates(): TemplateResponse;
    /**
     Find Templates by TemplateSearchInputAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set templates(value: TemplateResponse);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get orderStatuses(): OrderStatusesResponse;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set orderStatuses(value: OrderStatusesResponse);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get orderStatus(): OrderStatus;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set orderStatus(value: OrderStatus);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get orderStatusSets(): OrderStatusSetsResponse;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set orderStatusSets(value: OrderStatusSetsResponse);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get orderStatusSet(): OrderStatusSet;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set orderStatusSet(value: OrderStatusSet);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    get orders(): OrderResponse;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    set orders(value: OrderResponse);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get order(): Order;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set order(value: Order);
    /**
     orderGetPDF field
     */
    get orderGetPDF(): Base64File;
    /**
     orderGetPDF field
     */
    set orderGetPDF(value: Base64File);
    /**
     quoteGetPDF field
     */
    get quoteGetPDF(): Base64File;
    /**
     quoteGetPDF field
     */
    set quoteGetPDF(value: Base64File);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get orderAddress(): OrderAddress;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set orderAddress(value: OrderAddress);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get orderAddresses(): OrderAddress[];
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set orderAddresses(value: OrderAddress[]);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get addressesByOrderId(): Address[];
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set addressesByOrderId(value: Address[]);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get shipment(): Shipment;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set shipment(value: Shipment);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get shipments(): ShipmentResponse;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set shipments(value: ShipmentResponse);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get shipmentItem(): ShipmentItem;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set shipmentItem(value: ShipmentItem);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get shipmentItems(): ShipmentItemResponse;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set shipmentItems(value: ShipmentItemResponse);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get trackAndTrace(): TrackAndTrace;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set trackAndTrace(value: TrackAndTrace);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get trackAndTraces(): TrackAndTraceResponse;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set trackAndTraces(value: TrackAndTraceResponse);
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated')
     */
    get orderlist(): Orderlist;
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated')
     */
    set orderlist(value: Orderlist);
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated')
     */
    get orderlists(): OrderlistsResponse;
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated')
     */
    set orderlists(value: OrderlistsResponse);
    /**
     payMethod field
     */
    get payMethod(): PayMethod;
    /**
     payMethod field
     */
    set payMethod(value: PayMethod);
    /**
     payMethods field
     */
    get payMethods(): PayMethodsResponse;
    /**
     payMethods field
     */
    set payMethods(value: PayMethodsResponse);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get price(): Price;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set price(value: Price);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get prices(): PriceResponse;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set prices(value: PriceResponse);
    /**
     costPrices field
     */
    get costPrices(): CostPriceResponse;
    /**
     costPrices field
     */
    set costPrices(value: CostPriceResponse);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get priceCalculate(): ProductPrice;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set priceCalculate(value: ProductPrice);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get priceExplain(): ProductPrice[];
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set priceExplain(value: ProductPrice[]);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get priceDefault(): ProductPrice[];
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set priceDefault(value: ProductPrice[]);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get pricesheet(): Pricesheet;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set pricesheet(value: Pricesheet);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get pricesheets(): PricesheetResponse;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set pricesheets(value: PricesheetResponse);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get discount(): Discount;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set discount(value: Discount);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get discounts(): DiscountResponse;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set discounts(value: DiscountResponse);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get bulkPrices(): BulkPriceResponse;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set bulkPrices(value: BulkPriceResponse);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get bulkCostPrices(): BulkCostPriceResponse;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set bulkCostPrices(value: BulkCostPriceResponse);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get zoneTaxCode(): ZoneTaxCode;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set zoneTaxCode(value: ZoneTaxCode);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get zoneTaxCodes(): ZoneTaxCodeResponse;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set zoneTaxCodes(value: ZoneTaxCodeResponse);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get tax(): Tax;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set tax(value: Tax);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get taxes(): TaxesResponse;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set taxes(value: TaxesResponse);
    /**
     cluster field
     */
    get cluster(): Cluster;
    /**
     cluster field
     */
    set cluster(value: Cluster);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    get products(): ProductsResponse;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    set products(value: ProductsResponse);
    /**
     product field
     */
    get product(): Product;
    /**
     product field
     */
    set product(value: Product);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get clusterConfigs(): ClusterConfigResponse[];
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set clusterConfigs(value: ClusterConfigResponse[]);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get clusterConfig(): ClusterConfigResponse;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set clusterConfig(value: ClusterConfigResponse);
    /**
     roleDefinitions field
     */
    get roleDefinitions(): RoleDefinitionResponse;
    /**
     roleDefinitions field
     */
    set roleDefinitions(value: RoleDefinitionResponse);
    /**
     roleDefinition field
     */
    get roleDefinition(): RoleDefinition;
    /**
     roleDefinition field
     */
    set roleDefinition(value: RoleDefinition);
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
     */
    get role(): Role;
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
     */
    set role(value: Role);
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get roles(): RoleResponse;
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set roles(value: RoleResponse);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get shop(): Shop;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set shop(value: Shop);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get shops(): Shop[];
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set shops(value: Shop[]);
    /**
     Get a single machine, either by id, slug & language or by source & sourceId
     */
    get machine(): SparePartsMachine | undefined;
    /**
     Get a single machine, either by id, slug & language or by source & sourceId
     */
    set machine(value: SparePartsMachine | undefined);
    /**
     List machines
     */
    get machines(): SparePartsMachineResponse;
    /**
     List machines
     */
    set machines(value: SparePartsMachineResponse);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get surcharges(): SurchargesResponse;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set surcharges(value: SurchargesResponse);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get surcharge(): Surcharge;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set surcharge(value: Surcharge);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get productSurcharges(): SurchargeProductResponse;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set productSurcharges(value: SurchargeProductResponse);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get tender(): Tender;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set tender(value: Tender);
    /**
     usergroup field
     */
    get usergroup(): Usergroup;
    /**
     usergroup field
     */
    set usergroup(value: Usergroup);
    /**
     usergroups field
     */
    get usergroups(): UsergroupsResponse;
    /**
     usergroups field
     */
    set usergroups(value: UsergroupsResponse);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    get company(): Company;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    set company(value: Company);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    get companies(): CompaniesResponse;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    set companies(value: CompaniesResponse);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    get contact(): Contact;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    set contact(value: Contact);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    get contacts(): ContactsResponse;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    set contacts(value: ContactsResponse);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get customer(): Customer;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set customer(value: Customer);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    get customers(): CustomersResponse;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    set customers(value: CustomersResponse);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get user(): IBaseUser;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set user(value: IBaseUser);
    /**
     viewer field
     */
    get viewer(): IBaseUser;
    /**
     viewer field
     */
    set viewer(value: IBaseUser);
    /**
     Query for retrieving a PurchaseAuthorizationConfig entity by ID. The purchase authorization config defines the purchase role of a contact within a company as well as their authorization limit. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR ('user is authenticated'),
     */
    get purchaseAuthorizationConfig(): PurchaseAuthorizationConfig;
    /**
     Query for retrieving a PurchaseAuthorizationConfig entity by ID. The purchase authorization config defines the purchase role of a contact within a company as well as their authorization limit. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR ('user is authenticated'),
     */
    set purchaseAuthorizationConfig(value: PurchaseAuthorizationConfig);
    /**
     Query for searching through PurchaseAuthorizationConfig entities. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')),
     */
    get purchaseAuthorizationConfigs(): PurchaseAuthorizationConfigResponse;
    /**
     Query for searching through PurchaseAuthorizationConfig entities. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')),
     */
    set purchaseAuthorizationConfigs(value: PurchaseAuthorizationConfigResponse);
    /**
     valueset field
     */
    get valueset(): Valueset;
    /**
     valueset field
     */
    set valueset(value: Valueset);
    /**
     valuesets field
     */
    get valuesets(): ValuesetResponse;
    /**
     valuesets field
     */
    set valuesets(value: ValuesetResponse);
    /**
     valuesetItems field
     */
    get valuesetItems(): ValuesetItemResponse;
    /**
     valuesetItems field
     */
    set valuesetItems(value: ValuesetItemResponse);
    /**
     warehouse field
     */
    get warehouse(): Warehouse;
    /**
     warehouse field
     */
    set warehouse(value: Warehouse);
    /**
     warehouses field
     */
    get warehouses(): WarehousesResponse;
    /**
     warehouses field
     */
    set warehouses(value: WarehousesResponse);
}
//# sourceMappingURL=Query.d.ts.map