"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
/**
 Object class for Query
 */
class Query {
    /**
     Creates a new instance of Query
     */
    constructor(data = {}) {
        this._addressesByUserId = data.addressesByUserId;
        this._addressesByCustomerId = data.addressesByCustomerId;
        this._addressesByCompanyId = data.addressesByCompanyId;
        this._externalAddress = data.externalAddress;
        this._adminUser = data.adminUser;
        this._adminUserViewer = data.adminUserViewer;
        this._adminUsers = data.adminUsers;
        this._adminUserTenant = data.adminUserTenant;
        this._attributeDescription = data.attributeDescription;
        this._attributeDescriptions = data.attributeDescriptions;
        this._attribute = data.attribute;
        this._attributes = data.attributes;
        this._attributesByProductId = data.attributesByProductId;
        this._attributeResultByProductId = data.attributeResultByProductId;
        this._attributeResultByCategoryId = data.attributeResultByCategoryId;
        this._attributeResultByCompanyId = data.attributeResultByCompanyId;
        this._attributeResultByContactId = data.attributeResultByContactId;
        this._attributeResultByCustomerId = data.attributeResultByCustomerId;
        this._attributeResultByClusterId = data.attributeResultByClusterId;
        this._authentication = data.authentication;
        this._magicTokens = data.magicTokens;
        this._magicToken = data.magicToken;
        this._bundles = data.bundles;
        this._bundle = data.bundle;
        this._businessRule = data.businessRule;
        this._businessRules = data.businessRules;
        this._businessRuleJDM = data.businessRuleJDM;
        this._businessRuleDecisionTable = data.businessRuleDecisionTable;
        this._businessRuleFieldDefinitions = data.businessRuleFieldDefinitions;
        this._carriers = data.carriers;
        this._carrier = data.carrier;
        this._cart = data.cart;
        this._carts = data.carts;
        this._category = data.category;
        this._categories = data.categories;
        this._site = data.site;
        this._channel = data.channel;
        this._channels = data.channels;
        this._payment = data.payment;
        this._payments = data.payments;
        this._companySearch = data.companySearch;
        this._crossupsell = data.crossupsell;
        this._crossupsells = data.crossupsells;
        this._eventActionConfig = data.eventActionConfig;
        this._eventActionConfigs = data.eventActionConfigs;
        this._favoriteLists = data.favoriteLists;
        this._favoriteList = data.favoriteList;
        this._inventory = data.inventory;
        this._mediaImage = data.mediaImage;
        this._mediaImages = data.mediaImages;
        this._mediaVideo = data.mediaVideo;
        this._mediaVideos = data.mediaVideos;
        this._mediaDocument = data.mediaDocument;
        this._mediaDocuments = data.mediaDocuments;
        this._media = data.media;
        this._template = data.template;
        this._templates = data.templates;
        this._orderStatuses = data.orderStatuses;
        this._orderStatus = data.orderStatus;
        this._orderStatusSets = data.orderStatusSets;
        this._orderStatusSet = data.orderStatusSet;
        this._orders = data.orders;
        this._order = data.order;
        this._orderGetPDF = data.orderGetPDF;
        this._quoteGetPDF = data.quoteGetPDF;
        this._orderAddress = data.orderAddress;
        this._orderAddresses = data.orderAddresses;
        this._addressesByOrderId = data.addressesByOrderId;
        this._shipment = data.shipment;
        this._shipments = data.shipments;
        this._shipmentItem = data.shipmentItem;
        this._shipmentItems = data.shipmentItems;
        this._trackAndTrace = data.trackAndTrace;
        this._trackAndTraces = data.trackAndTraces;
        this._orderlist = data.orderlist;
        this._orderlists = data.orderlists;
        this._payMethod = data.payMethod;
        this._payMethods = data.payMethods;
        this._price = data.price;
        this._prices = data.prices;
        this._costPrices = data.costPrices;
        this._priceCalculate = data.priceCalculate;
        this._priceExplain = data.priceExplain;
        this._priceDefault = data.priceDefault;
        this._pricesheet = data.pricesheet;
        this._pricesheets = data.pricesheets;
        this._discount = data.discount;
        this._discounts = data.discounts;
        this._bulkPrices = data.bulkPrices;
        this._bulkCostPrices = data.bulkCostPrices;
        this._zoneTaxCode = data.zoneTaxCode;
        this._zoneTaxCodes = data.zoneTaxCodes;
        this._tax = data.tax;
        this._taxes = data.taxes;
        this._cluster = data.cluster;
        this._products = data.products;
        this._product = data.product;
        this._clusterConfigs = data.clusterConfigs;
        this._clusterConfig = data.clusterConfig;
        this._roleDefinitions = data.roleDefinitions;
        this._roleDefinition = data.roleDefinition;
        this._role = data.role;
        this._roles = data.roles;
        this._shop = data.shop;
        this._shops = data.shops;
        this._machine = data.machine;
        this._machines = data.machines;
        this._surcharges = data.surcharges;
        this._surcharge = data.surcharge;
        this._productSurcharges = data.productSurcharges;
        this._tender = data.tender;
        this._usergroup = data.usergroup;
        this._usergroups = data.usergroups;
        this._company = data.company;
        this._companies = data.companies;
        this._contact = data.contact;
        this._contacts = data.contacts;
        this._customer = data.customer;
        this._customers = data.customers;
        this._user = data.user;
        this._viewer = data.viewer;
        this._purchaseAuthorizationConfig = data.purchaseAuthorizationConfig;
        this._purchaseAuthorizationConfigs = data.purchaseAuthorizationConfigs;
        this._valueset = data.valueset;
        this._valuesets = data.valuesets;
        this._valuesetItems = data.valuesetItems;
        this._warehouse = data.warehouse;
        this._warehouses = data.warehouses;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get addressesByUserId() {
        return this._addressesByUserId;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set addressesByUserId(value) {
        this._addressesByUserId = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get addressesByCustomerId() {
        return this._addressesByCustomerId;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set addressesByCustomerId(value) {
        this._addressesByCustomerId = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    get addressesByCompanyId() {
        return this._addressesByCompanyId;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    set addressesByCompanyId(value) {
        this._addressesByCompanyId = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] OR ('user is authenticated')
     */
    get externalAddress() {
        return this._externalAddress;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] OR ('user is authenticated')
     */
    set externalAddress(value) {
        this._externalAddress = value;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('email if present in input matches JWT'))
     */
    get adminUser() {
        return this._adminUser;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('email if present in input matches JWT'))
     */
    set adminUser(value) {
        this._adminUser = value;
    }
    /**
     AUTH: Role=[] OR ('user is authenticated')
     */
    get adminUserViewer() {
        return this._adminUserViewer;
    }
    /**
     AUTH: Role=[] OR ('user is authenticated')
     */
    set adminUserViewer(value) {
        this._adminUserViewer = value;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
     */
    get adminUsers() {
        return this._adminUsers;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
     */
    set adminUsers(value) {
        this._adminUsers = value;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR]
     */
    get adminUserTenant() {
        return this._adminUserTenant;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR]
     */
    set adminUserTenant(value) {
        this._adminUserTenant = value;
    }
    /**
     attributeDescription field
     */
    get attributeDescription() {
        return this._attributeDescription;
    }
    /**
     attributeDescription field
     */
    set attributeDescription(value) {
        this._attributeDescription = value;
    }
    /**
     attributeDescriptions field
     */
    get attributeDescriptions() {
        return this._attributeDescriptions;
    }
    /**
     attributeDescriptions field
     */
    set attributeDescriptions(value) {
        this._attributeDescriptions = value;
    }
    /**
     attribute field
     */
    get attribute() {
        return this._attribute;
    }
    /**
     attribute field
     */
    set attribute(value) {
        this._attribute = value;
    }
    /**
     attributes field
     */
    get attributes() {
        return this._attributes;
    }
    /**
     attributes field
     */
    set attributes(value) {
        this._attributes = value;
    }
    /**
     attributesByProductId field
     */
    get attributesByProductId() {
        return this._attributesByProductId;
    }
    /**
     attributesByProductId field
     */
    set attributesByProductId(value) {
        this._attributesByProductId = value;
    }
    /**
     attributeResultByProductId field
     */
    get attributeResultByProductId() {
        return this._attributeResultByProductId;
    }
    /**
     attributeResultByProductId field
     */
    set attributeResultByProductId(value) {
        this._attributeResultByProductId = value;
    }
    /**
     attributeResultByCategoryId field
     */
    get attributeResultByCategoryId() {
        return this._attributeResultByCategoryId;
    }
    /**
     attributeResultByCategoryId field
     */
    set attributeResultByCategoryId(value) {
        this._attributeResultByCategoryId = value;
    }
    /**
     attributeResultByCompanyId field
     */
    get attributeResultByCompanyId() {
        return this._attributeResultByCompanyId;
    }
    /**
     attributeResultByCompanyId field
     */
    set attributeResultByCompanyId(value) {
        this._attributeResultByCompanyId = value;
    }
    /**
     attributeResultByContactId field
     */
    get attributeResultByContactId() {
        return this._attributeResultByContactId;
    }
    /**
     attributeResultByContactId field
     */
    set attributeResultByContactId(value) {
        this._attributeResultByContactId = value;
    }
    /**
     attributeResultByCustomerId field
     */
    get attributeResultByCustomerId() {
        return this._attributeResultByCustomerId;
    }
    /**
     attributeResultByCustomerId field
     */
    set attributeResultByCustomerId(value) {
        this._attributeResultByCustomerId = value;
    }
    /**
     attributeResultByClusterId field
     */
    get attributeResultByClusterId() {
        return this._attributeResultByClusterId;
    }
    /**
     attributeResultByClusterId field
     */
    set attributeResultByClusterId(value) {
        this._attributeResultByClusterId = value;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get authentication() {
        return this._authentication;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set authentication(value) {
        this._authentication = value;
    }
    /**
     AUTH: Role=[system]
     */
    get magicTokens() {
        return this._magicTokens;
    }
    /**
     AUTH: Role=[system]
     */
    set magicTokens(value) {
        this._magicTokens = value;
    }
    /**
     AUTH: Role=[system]
     */
    get magicToken() {
        return this._magicToken;
    }
    /**
     AUTH: Role=[system]
     */
    set magicToken(value) {
        this._magicToken = value;
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
     bundle field
     */
    get bundle() {
        return this._bundle;
    }
    /**
     bundle field
     */
    set bundle(value) {
        this._bundle = value;
    }
    /**
     Returns a business rule by its ID.
     */
    get businessRule() {
        return this._businessRule;
    }
    /**
     Returns a business rule by its ID.
     */
    set businessRule(value) {
        this._businessRule = value;
    }
    /**
     Returns a paginated response of rules based on the provider filter
     */
    get businessRules() {
        return this._businessRules;
    }
    /**
     Returns a paginated response of rules based on the provider filter
     */
    set businessRules(value) {
        this._businessRules = value;
    }
    /**
     Returns the JDM Json representation of the business rule that can be use in the GoRules Zen Engine
     */
    get businessRuleJDM() {
        return this._businessRuleJDM;
    }
    /**
     Returns the JDM Json representation of the business rule that can be use in the GoRules Zen Engine
     */
    set businessRuleJDM(value) {
        this._businessRuleJDM = value;
    }
    /**
     Returns a decisionTable by ruleId and tableId
     */
    get businessRuleDecisionTable() {
        return this._businessRuleDecisionTable;
    }
    /**
     Returns a decisionTable by ruleId and tableId
     */
    set businessRuleDecisionTable(value) {
        this._businessRuleDecisionTable = value;
    }
    /**
     businessRuleFieldDefinitions field
     */
    get businessRuleFieldDefinitions() {
        return this._businessRuleFieldDefinitions;
    }
    /**
     businessRuleFieldDefinitions field
     */
    set businessRuleFieldDefinitions(value) {
        this._businessRuleFieldDefinitions = value;
    }
    /**
     carriers field
     */
    get carriers() {
        return this._carriers;
    }
    /**
     carriers field
     */
    set carriers(value) {
        this._carriers = value;
    }
    /**
     carrier field
     */
    get carrier() {
        return this._carrier;
    }
    /**
     carrier field
     */
    set carrier(value) {
        this._carrier = value;
    }
    /**
     cart field
     */
    get cart() {
        return this._cart;
    }
    /**
     cart field
     */
    set cart(value) {
        this._cart = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    get carts() {
        return this._carts;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    set carts(value) {
        this._carts = value;
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
     site field
     */
    get site() {
        return this._site;
    }
    /**
     site field
     */
    set site(value) {
        this._site = value;
    }
    /**
     channel field
     */
    get channel() {
        return this._channel;
    }
    /**
     channel field
     */
    set channel(value) {
        this._channel = value;
    }
    /**
     channels field
     */
    get channels() {
        return this._channels;
    }
    /**
     channels field
     */
    set channels(value) {
        this._channels = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get payment() {
        return this._payment;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set payment(value) {
        this._payment = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get payments() {
        return this._payments;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set payments(value) {
        this._payments = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    get companySearch() {
        return this._companySearch;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    set companySearch(value) {
        this._companySearch = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get crossupsell() {
        return this._crossupsell;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set crossupsell(value) {
        this._crossupsell = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get crossupsells() {
        return this._crossupsells;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set crossupsells(value) {
        this._crossupsells = value;
    }
    /**
     Query for retrieving an EventActionConfig entity by ID, returns either EventToEmailConfig or EventToWebHookConfig depending on the type
     */
    get eventActionConfig() {
        return this._eventActionConfig;
    }
    /**
     Query for retrieving an EventActionConfig entity by ID, returns either EventToEmailConfig or EventToWebHookConfig depending on the type
     */
    set eventActionConfig(value) {
        this._eventActionConfig = value;
    }
    /**
     Query for retrieving EventActionConfig entities, returns both EventToEmailConfig or EventToWebHookConfig depending on the type
     */
    get eventActionConfigs() {
        return this._eventActionConfigs;
    }
    /**
     Query for retrieving EventActionConfig entities, returns both EventToEmailConfig or EventToWebHookConfig depending on the type
     */
    set eventActionConfigs(value) {
        this._eventActionConfigs = value;
    }
    /**
     Get favorite lists, use either an id or a source
     */
    get favoriteLists() {
        return this._favoriteLists;
    }
    /**
     Get favorite lists, use either an id or a source
     */
    set favoriteLists(value) {
        this._favoriteLists = value;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get favoriteList() {
        return this._favoriteList;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set favoriteList(value) {
        this._favoriteList = value;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR,logistics.VIEWER]
     */
    get inventory() {
        return this._inventory;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR,logistics.VIEWER]
     */
    set inventory(value) {
        this._inventory = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get mediaImage() {
        return this._mediaImage;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set mediaImage(value) {
        this._mediaImage = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get mediaImages() {
        return this._mediaImages;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set mediaImages(value) {
        this._mediaImages = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get mediaVideo() {
        return this._mediaVideo;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set mediaVideo(value) {
        this._mediaVideo = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get mediaVideos() {
        return this._mediaVideos;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set mediaVideos(value) {
        this._mediaVideos = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get mediaDocument() {
        return this._mediaDocument;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set mediaDocument(value) {
        this._mediaDocument = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get mediaDocuments() {
        return this._mediaDocuments;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set mediaDocuments(value) {
        this._mediaDocuments = value;
    }
    /**
     media field
     */
    get media() {
        return this._media;
    }
    /**
     media field
     */
    set media(value) {
        this._media = value;
    }
    /**
     Find a Template by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get template() {
        return this._template;
    }
    /**
     Find a Template by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set template(value) {
        this._template = value;
    }
    /**
     Find Templates by TemplateSearchInputAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get templates() {
        return this._templates;
    }
    /**
     Find Templates by TemplateSearchInputAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set templates(value) {
        this._templates = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get orderStatuses() {
        return this._orderStatuses;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set orderStatuses(value) {
        this._orderStatuses = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get orderStatus() {
        return this._orderStatus;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set orderStatus(value) {
        this._orderStatus = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get orderStatusSets() {
        return this._orderStatusSets;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set orderStatusSets(value) {
        this._orderStatusSets = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get orderStatusSet() {
        return this._orderStatusSet;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set orderStatusSet(value) {
        this._orderStatusSet = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    get orders() {
        return this._orders;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    set orders(value) {
        this._orders = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get order() {
        return this._order;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set order(value) {
        this._order = value;
    }
    /**
     orderGetPDF field
     */
    get orderGetPDF() {
        return this._orderGetPDF;
    }
    /**
     orderGetPDF field
     */
    set orderGetPDF(value) {
        this._orderGetPDF = value;
    }
    /**
     quoteGetPDF field
     */
    get quoteGetPDF() {
        return this._quoteGetPDF;
    }
    /**
     quoteGetPDF field
     */
    set quoteGetPDF(value) {
        this._quoteGetPDF = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get orderAddress() {
        return this._orderAddress;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set orderAddress(value) {
        this._orderAddress = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get orderAddresses() {
        return this._orderAddresses;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set orderAddresses(value) {
        this._orderAddresses = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get addressesByOrderId() {
        return this._addressesByOrderId;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set addressesByOrderId(value) {
        this._addressesByOrderId = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get shipment() {
        return this._shipment;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set shipment(value) {
        this._shipment = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get shipments() {
        return this._shipments;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set shipments(value) {
        this._shipments = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get shipmentItem() {
        return this._shipmentItem;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set shipmentItem(value) {
        this._shipmentItem = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get shipmentItems() {
        return this._shipmentItems;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set shipmentItems(value) {
        this._shipmentItems = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get trackAndTrace() {
        return this._trackAndTrace;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set trackAndTrace(value) {
        this._trackAndTrace = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    get trackAndTraces() {
        return this._trackAndTraces;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR ('user is authenticated')
     */
    set trackAndTraces(value) {
        this._trackAndTraces = value;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated')
     */
    get orderlist() {
        return this._orderlist;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated')
     */
    set orderlist(value) {
        this._orderlist = value;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated')
     */
    get orderlists() {
        return this._orderlists;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR,shop.VIEWER] OR ('user is authenticated')
     */
    set orderlists(value) {
        this._orderlists = value;
    }
    /**
     payMethod field
     */
    get payMethod() {
        return this._payMethod;
    }
    /**
     payMethod field
     */
    set payMethod(value) {
        this._payMethod = value;
    }
    /**
     payMethods field
     */
    get payMethods() {
        return this._payMethods;
    }
    /**
     payMethods field
     */
    set payMethods(value) {
        this._payMethods = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get price() {
        return this._price;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set price(value) {
        this._price = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get prices() {
        return this._prices;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set prices(value) {
        this._prices = value;
    }
    /**
     costPrices field
     */
    get costPrices() {
        return this._costPrices;
    }
    /**
     costPrices field
     */
    set costPrices(value) {
        this._costPrices = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get priceCalculate() {
        return this._priceCalculate;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set priceCalculate(value) {
        this._priceCalculate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get priceExplain() {
        return this._priceExplain;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set priceExplain(value) {
        this._priceExplain = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get priceDefault() {
        return this._priceDefault;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set priceDefault(value) {
        this._priceDefault = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get pricesheet() {
        return this._pricesheet;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set pricesheet(value) {
        this._pricesheet = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get pricesheets() {
        return this._pricesheets;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set pricesheets(value) {
        this._pricesheets = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get discount() {
        return this._discount;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set discount(value) {
        this._discount = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get discounts() {
        return this._discounts;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set discounts(value) {
        this._discounts = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get bulkPrices() {
        return this._bulkPrices;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set bulkPrices(value) {
        this._bulkPrices = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get bulkCostPrices() {
        return this._bulkCostPrices;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set bulkCostPrices(value) {
        this._bulkCostPrices = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get zoneTaxCode() {
        return this._zoneTaxCode;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set zoneTaxCode(value) {
        this._zoneTaxCode = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get zoneTaxCodes() {
        return this._zoneTaxCodes;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set zoneTaxCodes(value) {
        this._zoneTaxCodes = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get tax() {
        return this._tax;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set tax(value) {
        this._tax = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get taxes() {
        return this._taxes;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set taxes(value) {
        this._taxes = value;
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
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    get products() {
        return this._products;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    set products(value) {
        this._products = value;
    }
    /**
     product field
     */
    get product() {
        return this._product;
    }
    /**
     product field
     */
    set product(value) {
        this._product = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get clusterConfigs() {
        return this._clusterConfigs;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set clusterConfigs(value) {
        this._clusterConfigs = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    get clusterConfig() {
        return this._clusterConfig;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR,product.VIEWER]
     */
    set clusterConfig(value) {
        this._clusterConfig = value;
    }
    /**
     roleDefinitions field
     */
    get roleDefinitions() {
        return this._roleDefinitions;
    }
    /**
     roleDefinitions field
     */
    set roleDefinitions(value) {
        this._roleDefinitions = value;
    }
    /**
     roleDefinition field
     */
    get roleDefinition() {
        return this._roleDefinition;
    }
    /**
     roleDefinition field
     */
    set roleDefinition(value) {
        this._roleDefinition = value;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
     */
    get role() {
        return this._role;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
     */
    set role(value) {
        this._role = value;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get roles() {
        return this._roles;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set roles(value) {
        this._roles = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get shop() {
        return this._shop;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set shop(value) {
        this._shop = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get shops() {
        return this._shops;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set shops(value) {
        this._shops = value;
    }
    /**
     Get a single machine, either by id, slug & language or by source & sourceId
     */
    get machine() {
        return this._machine;
    }
    /**
     Get a single machine, either by id, slug & language or by source & sourceId
     */
    set machine(value) {
        this._machine = value;
    }
    /**
     List machines
     */
    get machines() {
        return this._machines;
    }
    /**
     List machines
     */
    set machines(value) {
        this._machines = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get surcharges() {
        return this._surcharges;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set surcharges(value) {
        this._surcharges = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get surcharge() {
        return this._surcharge;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set surcharge(value) {
        this._surcharge = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    get productSurcharges() {
        return this._productSurcharges;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR,pricing.VIEWER]
     */
    set productSurcharges(value) {
        this._productSurcharges = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get tender() {
        return this._tender;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set tender(value) {
        this._tender = value;
    }
    /**
     usergroup field
     */
    get usergroup() {
        return this._usergroup;
    }
    /**
     usergroup field
     */
    set usergroup(value) {
        this._usergroup = value;
    }
    /**
     usergroups field
     */
    get usergroups() {
        return this._usergroups;
    }
    /**
     usergroups field
     */
    set usergroups(value) {
        this._usergroups = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    get company() {
        return this._company;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    set company(value) {
        this._company = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    get companies() {
        return this._companies;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    set companies(value) {
        this._companies = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    get contact() {
        return this._contact;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    set contact(value) {
        this._contact = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    get contacts() {
        return this._contacts;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    set contacts(value) {
        this._contacts = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get customer() {
        return this._customer;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set customer(value) {
        this._customer = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    get customers() {
        return this._customers;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER]
     */
    set customers(value) {
        this._customers = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get user() {
        return this._user;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set user(value) {
        this._user = value;
    }
    /**
     viewer field
     */
    get viewer() {
        return this._viewer;
    }
    /**
     viewer field
     */
    set viewer(value) {
        this._viewer = value;
    }
    /**
     Query for retrieving a PurchaseAuthorizationConfig entity by ID. The purchase authorization config defines the purchase role of a contact within a company as well as their authorization limit. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR ('user is authenticated'),
     */
    get purchaseAuthorizationConfig() {
        return this._purchaseAuthorizationConfig;
    }
    /**
     Query for retrieving a PurchaseAuthorizationConfig entity by ID. The purchase authorization config defines the purchase role of a contact within a company as well as their authorization limit. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR ('user is authenticated'),
     */
    set purchaseAuthorizationConfig(value) {
        this._purchaseAuthorizationConfig = value;
    }
    /**
     Query for searching through PurchaseAuthorizationConfig entities. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')),
     */
    get purchaseAuthorizationConfigs() {
        return this._purchaseAuthorizationConfigs;
    }
    /**
     Query for searching through PurchaseAuthorizationConfig entities. AUTH: Role=[user.OWNER,user.EDITOR,user.VIEWER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')),
     */
    set purchaseAuthorizationConfigs(value) {
        this._purchaseAuthorizationConfigs = value;
    }
    /**
     valueset field
     */
    get valueset() {
        return this._valueset;
    }
    /**
     valueset field
     */
    set valueset(value) {
        this._valueset = value;
    }
    /**
     valuesets field
     */
    get valuesets() {
        return this._valuesets;
    }
    /**
     valuesets field
     */
    set valuesets(value) {
        this._valuesets = value;
    }
    /**
     valuesetItems field
     */
    get valuesetItems() {
        return this._valuesetItems;
    }
    /**
     valuesetItems field
     */
    set valuesetItems(value) {
        this._valuesetItems = value;
    }
    /**
     warehouse field
     */
    get warehouse() {
        return this._warehouse;
    }
    /**
     warehouse field
     */
    set warehouse(value) {
        this._warehouse = value;
    }
    /**
     warehouses field
     */
    get warehouses() {
        return this._warehouses;
    }
    /**
     warehouses field
     */
    set warehouses(value) {
        this._warehouses = value;
    }
}
exports.Query = Query;
//# sourceMappingURL=Query.js.map