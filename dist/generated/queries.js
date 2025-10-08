"use strict";
/**
 * Generated GraphQL queries bundle
 * This file is auto-generated. Do not edit manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.customer = exports.crossupsells = exports.crossupsell = exports.costPrices = exports.contacts = exports.contact = exports.companySearch = exports.company = exports.companies = exports.clusterGetConfig = exports.clusterConfigs = exports.clusterConfig = exports.cluster = exports.channels = exports.channel = exports.category = exports.categories = exports.carts = exports.cart = exports.carriers = exports.carrier = exports.businessRules = exports.businessRuleJDM = exports.businessRuleFieldDefinitions = exports.businessRuleDecisionTable = exports.businessRule = exports.bundles = exports.bundle = exports.bulkPrices = exports.bulkCostPrices = exports.authentication = exports.attributesByProductId = exports.attributes = exports.attributeResultByProductId = exports.attributeResultByCustomerId = exports.attributeResultByContactId = exports.attributeResultByCompanyId = exports.attributeResultByClusterId = exports.attributeResultByCategoryId = exports.attributeDescriptions = exports.attributeDescription = exports.attribute = exports.adminUsers = exports.adminUserViewer = exports.adminUserTenant = exports.adminUser = exports.addressesByUserId = exports.addressesByOrderId = exports.addressesByCustomerId = exports.addressesByCompanyId = void 0;
exports.role = exports.quoteGetPDF = exports.purchaseAuthorizationConfigs = exports.purchaseAuthorizationConfig = exports.products = exports.productSurcharges = exports.product = exports.pricesheets = exports.pricesheet = exports.prices = exports.priceExplain = exports.priceDefault = exports.priceCalculate = exports.price = exports.payments = exports.payment = exports.payMethods = exports.payMethod = exports.orders = exports.orderlists = exports.orderlist = exports.orderStatuses = exports.orderStatusSets = exports.orderStatusSet = exports.orderStatus = exports.orderRevisions = exports.orderRevision = exports.orderGetPDF = exports.orderAddresses = exports.orderAddress = exports.order = exports.mediaVideos = exports.mediaVideo = exports.mediaImages = exports.mediaImage = exports.mediaDocuments = exports.mediaDocument = exports.media = exports.magicTokens = exports.magicToken = exports.machines = exports.machine = exports.inventory = exports.favoriteLists = exports.favoriteList = exports.externalAddress = exports.eventActionConfigs = exports.discounts = exports.discount = exports.customers = void 0;
exports.queries = exports.zoneTaxCodes = exports.zoneTaxCode = exports.warehouses = exports.warehouse = exports.viewer = exports.valuesets = exports.valuesetItems = exports.valueset = exports.usergroups = exports.usergroup = exports.user = exports.trackAndTraces = exports.trackAndTrace = exports.tender = exports.templates = exports.templateErrorLogs = exports.templateErrorLogStats = exports.templateErrorLog = exports.template = exports.taxes = exports.tax = exports.surcharges = exports.surcharge = exports.site = exports.shops = exports.shop = exports.shipments = exports.shipmentItems = exports.shipmentItem = exports.shipment = exports.roles = exports.roleDefinitions = exports.roleDefinition = void 0;
exports.addressesByCompanyId = `query addressesByCompanyId(\$companyId: Float!, \$type: AddressType) {
  addressesByCompanyId(companyId: \$companyId, type: \$type) {
    ...AddressFields
  }
}`;
exports.addressesByCustomerId = `query addressesByCustomerId(\$customerId: Float!, \$type: AddressType) {
  addressesByCustomerId(customerId: \$customerId, type: \$type) {
    ...AddressFields
  }
}`;
exports.addressesByOrderId = `query addressesByOrderId(\$orderId: Int!, \$type: AddressType) {
  addressesByOrderId(orderId: \$orderId, type: \$type) {
    ...AddressFields
  }
}`;
exports.addressesByUserId = `query addressesByUserId(\$userId: Float!, \$type: AddressType) {
  addressesByUserId(userId: \$userId, type: \$type) {
    ...AddressFields
  }
}`;
exports.adminUser = `query adminUser(\$email: String!) {
  adminUser(email: \$email) {
    ...AdminUserFields
  }
}`;
exports.adminUserTenant = `query adminUserTenant(\$id: Int!) {
  adminUserTenant(id: \$id) {
    ...AdminUserTenantFields
  }
}`;
exports.adminUserViewer = `query adminUserViewer {
  adminUserViewer {
    ...AdminUserFields
  }
}`;
exports.adminUsers = `query adminUsers(\$input: AdminUsersSearchInput) {
  adminUsers(input: \$input) {
    ...UserResponseFields
  }
}`;
exports.attribute = `query attribute(
  \$id: String!
) {
  attribute(id: \$id) {
    ...AttributeFields
  }
}`;
exports.attributeDescription = `query attributeDescription(\$id: String!) {
  attributeDescription(id: \$id) {
    ...AttributeDescriptionFields
  }
}`;
exports.attributeDescriptions = `query attributeDescriptions(\$input: AttributeDescriptionSearchInput!) {
  attributeDescriptions(input: \$input) {
    ...AttributeDescriptionResponseFields
  }
}`;
exports.attributeResultByCategoryId = `query attributeResultByCategoryId(\$categoryId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByCategoryId(categoryId: \$categoryId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;
exports.attributeResultByClusterId = `query attributeResultByClusterId(\$clusterId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByClusterId(clusterId: \$clusterId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;
exports.attributeResultByCompanyId = `query attributeResultByCompanyId(\$companyId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByCompanyId(companyId: \$companyId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;
exports.attributeResultByContactId = `query attributeResultByContactId(\$contactId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByContactId(contactId: \$contactId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;
exports.attributeResultByCustomerId = `query attributeResultByCustomerId(\$customerId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByCustomerId(customerId: \$customerId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;
exports.attributeResultByProductId = `query attributeResultByProductId(\$productId: Int!, \$input: AttributeResultSearchInput!) {
  attributeResultByProductId(productId: \$productId, input: \$input) {
    ...AttributeResultResponseFields
  }
}`;
exports.attributes = `query attributes(\$input: AttributeSearchInput!) {
  attributes(input: \$input) {
    ...AttributeResponseFields
  }
}`;
exports.attributesByProductId = `query attributesByProductId(\$productId: Int!, \$input: AttributeSearchInput!) {
  attributesByProductId(productId: \$productId, input: \$input) {
    ...AttributeResponseFields
  }
}`;
exports.authentication = `query authentication(\$email: String!) {
  authentication(email: \$email) {
    ...GCIPUserFields
  }
}`;
exports.bulkCostPrices = `query bulkCostPrices(\$input: BulkCostPriceSearchInput) {
  bulkCostPrices(input: \$input) {
    ...BulkCostPriceResponseFields
  }
}`;
exports.bulkPrices = `query bulkPrices(\$input: BulkPriceSearchInput) {
  bulkPrices(input: \$input) {
    ...BulkPriceResponseFields
  }
}`;
exports.bundle = `query bundle(\$id: String!, \$taxZone: String) {
  bundle(id: \$id, taxZone: \$taxZone) {
    ...BundleFields
  }
}`;
exports.bundles = `query bundles(\$input: BundleSearchInput) {
  bundles(input: \$input) {
    ...BundlesResponseFields
  }
}`;
exports.businessRule = `query businessRule(\$id: ID!) {
  businessRule(id: \$id) {
    ...BusinessRuleFields
  }
}`;
exports.businessRuleDecisionTable = `query businessRuleDecisionTable(\$input: BusinessRuleDecisionTableSearchInput!) {
  businessRuleDecisionTable(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;
exports.businessRuleFieldDefinitions = `query businessRuleFieldDefinitions(\$name: String!) {
  businessRuleFieldDefinitions(name: \$name) {
    ...BusinessRuleFieldDefinitionGroupFields
  }
}`;
exports.businessRuleJDM = `query businessRuleJDM(
  \$id: ID!
  \$language: String
) {
  businessRuleJDM(id: \$id, language: \$language)
}`;
exports.businessRules = `query businessRules(\$filter: BusinessRuleSearchInput) {
  businessRules(filter: \$filter) {
    ...BusinessRuleResponseFields
  }
}`;
exports.carrier = `query carrier(\$id: Int!) {
  carrier(id: \$id) {
    ...CarrierFields
  }
}`;
exports.carriers = `query carriers(\$input: CarriersSearchInput) {
  carriers(input: \$input) {
    ...CarriersResponseFields
  }
}`;
exports.cart = `query cart(
  \$cartId: String!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!
) {
  cart(id: \$cartId) {
    ...CartFields
  }
}`;
exports.carts = `query carts(\$input: CartSearchInput!) {
  carts(input: \$input) {
    ...CartResponseFields
  }
}`;
exports.categories = `query categories(\$filter: CategorySearchInput, \$userId: Int) {
  categories(filter: \$filter, userId: \$userId) {
    ...CategoryResponseFields
  }
}`;
exports.category = `query category(
  \$categoryId: Float
  \$slug: String
  \$userId: Int
  \$hidden: YesNo
  \$language: String
  \$priceCalculateProductInput: PriceCalculateProductInput
  \$categoryProductSearchInput: CategoryProductSearchInput
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!
  \$filterAvailableAttributeInput: FilterAvailableAttributeInput
) {
  category(categoryId: \$categoryId, slug: \$slug, userId: \$userId, hidden: \$hidden) {
    ...CategoryFields
  }
}`;
exports.channel = `query channel(\$channelId: Int!) {
  channel(channelId: \$channelId) {
    ...ChannelFields
  }
}`;
exports.channels = `query channels {
  channels {
    ...ChannelFields
  }
}`;
exports.cluster = `query cluster(
  \$clusterId: Int 
  \$slug: String
  \$language: String 
  \$applyOrderlists: Boolean 
  \$orderlistIds: [Int!]
  \$priceCalculateProductInput: PriceCalculateProductInput
  \$userBulkPriceProductInput: UserBulkPriceProductInput
  \$attributeResultSearchInput: AttributeResultSearchInput
  \$imageSearchFilters: MediaImageProductSearchInput
  \$mediaVideoSearchInput: MediaVideoProductSearchInput
  \$mediaDocumentSearchInput: MediaDocumentProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cluster(clusterId: \$clusterId, slug: \$slug, language: \$language, applyOrderlists: \$applyOrderlists, orderlistIds: \$orderlistIds) {
    ...ClusterFields
  }
}`;
exports.clusterConfig = `query clusterConfig(\$clusterConfigId: Int!) {
  clusterConfig(clusterConfigId: \$clusterConfigId) {
    ...ClusterConfigResponseFields
  }
}`;
exports.clusterConfigs = `query clusterConfigs {
  clusterConfigs {
    ...ClusterConfigResponseFields
  }
}`;
exports.clusterGetConfig = `query clusterGetConfig(\$clusterId: Int) {
  cluster(clusterId: \$clusterId) {
    config {
      ... ClusterConfigFields
    }
  }
}`;
exports.companies = `query companies(\$input: CompanySearchArguments) {
  companies(input: \$input) {
    ...CompaniesResponseFields
  }
}`;
exports.company = `query company(\$id: Int!) {
  company(id: \$id) {
    ...CompanyFields
  }
}`;
exports.companySearch = `query companySearch(\$input: CompanySearchInput) {
  companySearch(input: \$input) {
    ...CompanySearchResponseFields
  }
}`;
exports.contact = `query contact(\$id: Int!) {
  contact(id: \$id) {
    ...ContactFields
  }
}`;
exports.contacts = `query contacts(\$input: ContactSearchArguments) {
  contacts(input: \$input) {
    ...ContactsResponseFields
  }
}`;
exports.costPrices = `query costPrices(\$input: CostPriceSearchInput) {
  costPrices(input: \$input) {
    ...CostPriceResponseFields
  }
}`;
exports.crossupsell = `query crossupsell(\$id: String!) {
  crossupsell(id: \$id) {
    ...CrossupsellFields
  }
}`;
exports.crossupsells = `query crossupsells(\$input: CrossupsellSearchInput) {
  crossupsells(input: \$input) {
    ...CrossupsellsResponseFields
  }
}`;
exports.customer = `query customer(\$id: Int!) {
  customer(id: \$id) {
    ...CustomerFields
  }
}`;
exports.customers = `query customers(\$input: CustomerSearchArguments) {
  customers(input: \$input) {
    ...CustomersResponseFields
  }
}`;
exports.discount = `query discount(\$id: String!) {
  discount(id: \$id) {
    ...DiscountFields
  }
}`;
exports.discounts = `query discounts(\$input: DiscountSearchInput) {
  discounts(input: \$input) {
    ...DiscountResponseFields
  }
}`;
exports.eventActionConfigs = `query eventActionConfigs(\$input: EventActionConfigSearchInput!) {
  eventActionConfigs(input: \$input) {
    ...EventActionConfigResponseFields
  }
}`;
exports.externalAddress = `query externalAddress(\$id: Float!) {
  externalAddress(id: \$id) {
    ...ExternalAddressFields
  }
}`;
exports.favoriteList = `query favoriteList(
  \$id: String!
  \$language: String
  \$priceCalculateProductInput: PriceCalculateProductInput
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  favoriteList(id: \$id) {
    ...FavoriteListFields
  }
}`;
exports.favoriteLists = `query favoriteLists(\$input: FavoriteListsSearchInput) {
  favoriteLists(input: \$input) {
    ...FavoriteListsResponseFields
  }
}`;
exports.inventory = `query inventory(\$id: Int!) {
  inventory(id: \$id) {
    ...InventoryResponseFields
  }
}`;
exports.machine = `query machine(\$id: String, \$slug: String, \$language: String, \$source: String, \$sourceId: String) {
  machine(id: \$id, slug: \$slug, language: \$language, source: \$source, sourceId: \$sourceId) {
    ...SparePartsMachineFields
  }
}`;
exports.machines = `query machines(\$input: SearchSparePartsMachineInput) {
  machines(input: \$input) {
    ...SparePartsMachineResponseFields
  }
}`;
exports.magicToken = `query magicToken(\$id: String!) {
  magicToken(id: \$id) {
    ...MagicTokenFields
  }
}`;
exports.magicTokens = `query magicTokens(\$input: MagicTokenSearchInput) {
  magicTokens(input: \$input) {
    ...MagicTokenResponseFields
  }
}`;
exports.media = `query media {
  media {
    ...MediaFields
  }
}`;
exports.mediaDocument = `query mediaDocument(\$mediaId: String!) {
  mediaDocument(mediaId: \$mediaId) {
    ...MediaDocumentFields
  }
}`;
exports.mediaDocuments = `query mediaDocuments(\$search: MediaDocumentSearchInput) {
  mediaDocuments(search: \$search) {
    ...PaginatedMediaDocumentResponseFields
  }
}`;
exports.mediaImage = `query mediaImage(\$mediaId: String!) {
  mediaImage(mediaId: \$mediaId) {
    ...MediaImageFields
  }
}`;
exports.mediaImages = `query mediaImages(\$search: MediaImageProductSearchInput) {
  mediaImages(search: \$search) {
    ...PaginatedMediaImageResponseFields
  }
}`;
exports.mediaVideo = `query mediaVideo(\$mediaId: String!) {
  mediaVideo(mediaId: \$mediaId) {
    ...MediaVideoFields
  }
}`;
exports.mediaVideos = `query mediaVideos(\$search: MediaVideoSearchInput) {
  mediaVideos(search: \$search) {
    ...PaginatedMediaVideoResponseFields
  }
}`;
exports.order = `query order(
  \$orderId: Int
  \$orderUUID: String
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!
) {
  order(orderId: \$orderId, orderUUID: \$orderUUID) {
    ...OrderFields
  }
}`;
exports.orderAddress = `query orderAddress(\$id: Int!, \$orderId: Int!) {
  orderAddress(id: \$id, orderId: \$orderId) {
    ...OrderAddressFields
  }
}`;
exports.orderAddresses = `query orderAddresses(\$orderId: Int!, \$type: AddressType) {
  orderAddresses(orderId: \$orderId, type: \$type) {
    ...OrderAddressFields
  }
}`;
exports.orderGetPDF = `query orderGetPDF(\$orderId: Int!) {
  orderGetPDF(orderId: \$orderId) {
    ...Base64FileFields
  }
}`;
exports.orderRevision = `query orderRevision(\$orderId: Int!, \$revisionNumber: Int!) {
  orderRevision(orderId: \$orderId, revisionNumber: \$revisionNumber) {
    orderId
    revisionNumber
    createdByContactId
    createdByCustomerId
    createdByAdminUserId
    createdByAdminUser {
      userId
      firstName
      lastName
      email
    }
    createdAt
    createdFromRevisionNumber
    snapshot
    createdByContact {
      contactId
      firstName
      lastName
      email
    }
    createdByCustomer {
      customerId
      firstName
      lastName
      email
    }
  }
} `;
exports.orderRevisions = `query orderRevisions(\$input: OrderRevisionSearchInput!) {
  orderRevisions(input: \$input) {
    items {
      orderId
      revisionNumber
      createdByContactId
      createdByCustomerId
      createdByAdminUserId
      createdByAdminUser {
        userId
        firstName
        lastName
        email
      }
      createdAt
      createdFromRevisionNumber
      snapshot
      createdByContact {
        contactId
        firstName
        lastName
        email
      }
      createdByCustomer {
        customerId
        firstName
        lastName
        email
      }
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
} `;
exports.orderStatus = `query orderStatus(\$input: OrderStatusSearchByInput!) {
  orderStatus(input: \$input) {
    ...OrderStatusFields
  }
}`;
exports.orderStatusSet = `query orderStatusSet(\$input: OrderStatusSetSearchByInput!) {
  orderStatusSet(input: \$input) {
    ...OrderStatusSetFields
  }
}`;
exports.orderStatusSets = `query orderStatusSets(\$input: OrderStatusSetsSearchInput) {
  orderStatusSets(input: \$input) {
    ...OrderStatusSetsResponseFields
  }
}`;
exports.orderStatuses = `query orderStatuses(\$input: OrderStatusesSearchInput) {
  orderStatuses(input: \$input) {
    ...OrderStatusesResponseFields
  }
}`;
exports.orderlist = `query orderlist(\$id: Int!) {
  orderlist(id: \$id) {
    ...OrderlistFields
  }
}`;
exports.orderlists = `query orderlists(\$input: OrderlistSearchInput) {
  orderlists(input: \$input) {
    ...OrderlistsResponseFields
  }
}`;
exports.orders = `query orders(\$input: OrderSearchArguments) {
  orders(input: \$input) {
    ...OrderResponseFields
  }
}`;
exports.payMethod = `query payMethod(\$id: Int!) {
  payMethod(id: \$id) {
    ...PayMethodFields
  }
}`;
exports.payMethods = `query payMethods(\$input: PayMethodSearchInput) {
  payMethods(input: \$input) {
    ...PayMethodsResponseFields
  }
}`;
exports.payment = `query payment(\$searchBy: SearchByInput!) {
  payment(searchBy: \$searchBy) {
    ...PaymentFields
  }
}`;
exports.payments = `query payments(\$input: PaymentsSearchInput) {
  payments(input: \$input) {
    ...PaymentsResponseFields
  }
}`;
exports.price = `query price(\$id: String!) {
  price(id: \$id) {
    ...PriceFields
  }
}`;
exports.priceCalculate = `query priceCalculate(\$input: PriceCalculateInput!) {
  priceCalculate(input: \$input) {
    ...ProductPriceFields
  }
}`;
exports.priceDefault = `query priceDefault(\$input: PriceCalculateDefaultInput!) {
  priceDefault(input: \$input) {
    ...ProductPriceFields
  }
}`;
exports.priceExplain = `query priceExplain(\$input: PriceCalculateInput!) {
  priceExplain(input: \$input) {
    ...ProductPriceFields
  }
}`;
exports.prices = `query prices(\$input: PriceSearchInput) {
  prices(input: \$input) {
    ...PriceResponseFields
  }
}`;
exports.pricesheet = `query pricesheet(\$id: String!) {
  pricesheet(id: \$id) {
    ...PricesheetFields
  }
}`;
exports.pricesheets = `query pricesheets(\$input: PricesheetSearchInput) {
  pricesheets(input: \$input) {
    ...PricesheetResponseFields
  }
}`;
exports.product = `query product(
  \$productId: Int
  \$slug: String
  \$sku: String
  \$language: String
  \$applyOrderlists: Boolean
  \$orderlistIds: [Int!]
  \$priceCalculateProductInput: PriceCalculateProductInput
  \$userBulkPriceProductInput: UserBulkPriceProductInput
  \$attributeResultSearchInput: AttributeResultSearchInput
  \$imageSearchFilters: MediaImageProductSearchInput
  \$mediaVideoSearchInput: MediaVideoProductSearchInput
  \$mediaDocumentSearchInput: MediaDocumentProductSearchInput
  \$imageVariantFilters: TransformationsInput!
) {
  product(productId: \$productId, slug: \$slug, sku: \$sku, language: \$language, applyOrderlists: \$applyOrderlists, orderlistIds: \$orderlistIds) {
    ...ProductFields
  }
}`;
exports.productSurcharges = `query productSurcharges(\$productId: Int!, \$input: SurchargeSearchInput) {
  productSurcharges(productId: \$productId, input: \$input) {
    ...SurchargeProductResponseFields
  }
}`;
exports.products = `query products(
  \$input: ProductSearchInput
  \$language: String
  \$priceCalculateProductInput: PriceCalculateProductInput
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!
  \$filterAvailableAttributeInput: FilterAvailableAttributeInput
) {
  products(input: \$input) {
    ...ProductsResponseFields
  }
}`;
exports.purchaseAuthorizationConfig = `query purchaseAuthorizationConfig(\$id: String!) {
  purchaseAuthorizationConfig(id: \$id) {
    ...PurchaseAuthorizationConfigFields
  }
}`;
exports.purchaseAuthorizationConfigs = `query purchaseAuthorizationConfigs(\$input: PurchaseAuthorizationConfigSearchInput) {
  purchaseAuthorizationConfigs(input: \$input) {
    ...PurchaseAuthorizationConfigResponseFields
  }
}`;
exports.quoteGetPDF = `query quoteGetPDF(\$orderId: Int!) {
  quoteGetPDF(orderId: \$orderId) {
    ...Base64FileFields
  }
}`;
exports.role = `query role(\$id: ID!) {
  role(id: \$id) {
    ...RoleFields
  }
}`;
exports.roleDefinition = `query roleDefinition(\$id: ID!) {
  roleDefinition(id: \$id) {
    ...RoleDefinitionFields
  }
}`;
exports.roleDefinitions = `query roleDefinitions(\$input: RoleDefinitionSearchInput) {
  roleDefinitions(input: \$input) {
    ...RoleDefinitionResponseFields
  }
}`;
exports.roles = `query roles(\$input: RoleSearchInput!) {
  roles(input: \$input) {
    ...RoleResponseFields
  }
}`;
exports.shipment = `query shipment(\$id: String!) {
  shipment(id: \$id) {
    ...ShipmentFields
  }
}`;
exports.shipmentItem = `query shipmentItem(\$id: String!) {
  shipmentItem(id: \$id) {
    ...ShipmentItemFields
  }
}`;
exports.shipmentItems = `query shipmentItems(\$input: ShipmentItemSearchInput) {
  shipmentItems(input: \$input) {
    ...ShipmentItemResponseFields
  }
}`;
exports.shipments = `query shipments(\$input: ShipmentSearchInput) {
  shipments(input: \$input) {
    ...ShipmentResponseFields
  }
}`;
exports.shop = `query shop(\$shopId: Int!) {
  shop(shopId: \$shopId) {
    ...ShopFields
  }
}`;
exports.shops = `query shops {
  shops {
    ...ShopFields
  }
}`;
exports.site = `query site(\$siteId: Int!) {
  site(siteId: \$siteId) {
    ...SiteFields
  }
}`;
exports.surcharge = `query surcharge(\$id: String!) {
  surcharge(id: \$id) {
    ...SurchargeFields
  }
}`;
exports.surcharges = `query surcharges(\$input: SurchargeSearchInput) {
  surcharges(input: \$input) {
    ...SurchargesResponseFields
  }
}`;
exports.tax = `query tax(\$id: String, \$code: Taxcode, \$zone: String, \$shopId: Int) {
  tax(id: \$id, code: \$code, zone: \$zone, shopId: \$shopId) {
    ...TaxFields
  }
}`;
exports.taxes = `query taxes(\$input: TaxSearchInput) {
  taxes(input: \$input) {
    ...TaxesResponseFields
  }
}`;
exports.template = `query template(
  \$id: String!
) {
  template(id: \$id) {
    ...IBaseTemplateFields
  }
}`;
exports.templateErrorLog = `query templateErrorLog(\$id: String!) {
  templateErrorLog(id: \$id) {
    id
    stackTrace
    createdAt
    eventInstance
    topicName
    errorType
    errorMessage
    templateId
    fieldName
  }
} `;
exports.templateErrorLogStats = `query templateErrorLogStats {
  templateErrorLogStats {
    totalCount
    renderErrorCount
    customQueryErrorCount
    oldestEntry
    newestEntry
  }
} `;
exports.templateErrorLogs = `query templateErrorLogs(\$input: TemplateErrorLogSearchInput!) {
  templateErrorLogs(input: \$input) {
    items {
      id
      stackTrace
      createdAt
      eventInstance
      topicName
      errorType
      errorMessage
      templateId
      fieldName
    }
    itemsFound
    page
    offset
    pages
    start
    end
  }
} `;
exports.templates = `query templates(\$input: TemplateSearchInput!) {
  templates(input: \$input) {
    ...TemplateResponseFields
  }
}`;
exports.tender = `query tender(\$tenderId: String, \$orderId: Int) {
  tender(tenderId: \$tenderId, orderId: \$orderId) {
    ...TenderFields
  }
}`;
exports.trackAndTrace = `query trackAndTrace(\$id: String!) {
  trackAndTrace(id: \$id) {
    ...TrackAndTraceFields
  }
}`;
exports.trackAndTraces = `query trackAndTraces(\$input: TrackAndTraceSearchInput) {
  trackAndTraces(input: \$input) {
    ...TrackAndTraceResponseFields
  }
}`;
exports.user = `query user(\$input: UserSearchInput!) {
  user(input: \$input) {
    __typename
    ... on Contact {
        ... ContactFields
    }
    ... on Customer {
        ... CustomerFields
    }
  }
}
`;
exports.usergroup = `query usergroup(\$id: Int!) {
  usergroup(id: \$id) {
    ...UsergroupFields
  }
}`;
exports.usergroups = `query usergroups(\$input: UsergroupSearchArguments!) {
  usergroups(input: \$input) {
    ...UsergroupsResponseFields
  }
}`;
exports.valueset = `query valueset(\$id: Int!) {
  valueset(id: \$id) {
    ...ValuesetFields
  }
}`;
exports.valuesetItems = `query valuesetItems(\$input: ValuesetItemSearchInput) {
  valuesetItems(input: \$input) {
    ...ValuesetItemResponseFields
  }
}`;
exports.valuesets = `query valuesets(\$input: ValuesetSearchInput) {
  valuesets(input: \$input) {
    ...ValuesetResponseFields
  }
}`;
exports.viewer = `query viewer(
  \$contactAttributesInput: AttributeResultSearchInput
  \$contactPAConfigInput: ContactPurchaseAuthorizationConfigSearchInput
  \$companyAttributesInput: AttributeResultSearchInput
  \$customerAttributesInput: AttributeResultSearchInput
) {
  viewer {
    __typename
    ... on Contact {
        ... ContactFields
    }
    ... on Customer {
        ... CustomerFields
    }
  }
}
`;
exports.warehouse = `query warehouse(\$id: Int!) {
  warehouse(id: \$id) {
    ...WarehouseFields
  }
}`;
exports.warehouses = `query warehouses(\$input: WarehousesSearchInput) {
  warehouses(input: \$input) {
    ...WarehousesResponseFields
  }
}`;
exports.zoneTaxCode = `query zoneTaxCode(\$id: String!) {
  zoneTaxCode(id: \$id) {
    ...ZoneTaxCodeFields
  }
}`;
exports.zoneTaxCodes = `query zoneTaxCodes(\$input: ZoneTaxCodeSearchInput) {
  zoneTaxCodes(input: \$input) {
    ...ZoneTaxCodeResponseFields
  }
}`;
exports.queries = {
    addressesByCompanyId: exports.addressesByCompanyId,
    addressesByCustomerId: exports.addressesByCustomerId,
    addressesByOrderId: exports.addressesByOrderId,
    addressesByUserId: exports.addressesByUserId,
    adminUser: exports.adminUser,
    adminUserTenant: exports.adminUserTenant,
    adminUserViewer: exports.adminUserViewer,
    adminUsers: exports.adminUsers,
    attribute: exports.attribute,
    attributeDescription: exports.attributeDescription,
    attributeDescriptions: exports.attributeDescriptions,
    attributeResultByCategoryId: exports.attributeResultByCategoryId,
    attributeResultByClusterId: exports.attributeResultByClusterId,
    attributeResultByCompanyId: exports.attributeResultByCompanyId,
    attributeResultByContactId: exports.attributeResultByContactId,
    attributeResultByCustomerId: exports.attributeResultByCustomerId,
    attributeResultByProductId: exports.attributeResultByProductId,
    attributes: exports.attributes,
    attributesByProductId: exports.attributesByProductId,
    authentication: exports.authentication,
    bulkCostPrices: exports.bulkCostPrices,
    bulkPrices: exports.bulkPrices,
    bundle: exports.bundle,
    bundles: exports.bundles,
    businessRule: exports.businessRule,
    businessRuleDecisionTable: exports.businessRuleDecisionTable,
    businessRuleFieldDefinitions: exports.businessRuleFieldDefinitions,
    businessRuleJDM: exports.businessRuleJDM,
    businessRules: exports.businessRules,
    carrier: exports.carrier,
    carriers: exports.carriers,
    cart: exports.cart,
    carts: exports.carts,
    categories: exports.categories,
    category: exports.category,
    channel: exports.channel,
    channels: exports.channels,
    cluster: exports.cluster,
    clusterConfig: exports.clusterConfig,
    clusterConfigs: exports.clusterConfigs,
    clusterGetConfig: exports.clusterGetConfig,
    companies: exports.companies,
    company: exports.company,
    companySearch: exports.companySearch,
    contact: exports.contact,
    contacts: exports.contacts,
    costPrices: exports.costPrices,
    crossupsell: exports.crossupsell,
    crossupsells: exports.crossupsells,
    customer: exports.customer,
    customers: exports.customers,
    discount: exports.discount,
    discounts: exports.discounts,
    eventActionConfigs: exports.eventActionConfigs,
    externalAddress: exports.externalAddress,
    favoriteList: exports.favoriteList,
    favoriteLists: exports.favoriteLists,
    inventory: exports.inventory,
    machine: exports.machine,
    machines: exports.machines,
    magicToken: exports.magicToken,
    magicTokens: exports.magicTokens,
    media: exports.media,
    mediaDocument: exports.mediaDocument,
    mediaDocuments: exports.mediaDocuments,
    mediaImage: exports.mediaImage,
    mediaImages: exports.mediaImages,
    mediaVideo: exports.mediaVideo,
    mediaVideos: exports.mediaVideos,
    order: exports.order,
    orderAddress: exports.orderAddress,
    orderAddresses: exports.orderAddresses,
    orderGetPDF: exports.orderGetPDF,
    orderRevision: exports.orderRevision,
    orderRevisions: exports.orderRevisions,
    orderStatus: exports.orderStatus,
    orderStatusSet: exports.orderStatusSet,
    orderStatusSets: exports.orderStatusSets,
    orderStatuses: exports.orderStatuses,
    orderlist: exports.orderlist,
    orderlists: exports.orderlists,
    orders: exports.orders,
    payMethod: exports.payMethod,
    payMethods: exports.payMethods,
    payment: exports.payment,
    payments: exports.payments,
    price: exports.price,
    priceCalculate: exports.priceCalculate,
    priceDefault: exports.priceDefault,
    priceExplain: exports.priceExplain,
    prices: exports.prices,
    pricesheet: exports.pricesheet,
    pricesheets: exports.pricesheets,
    product: exports.product,
    productSurcharges: exports.productSurcharges,
    products: exports.products,
    purchaseAuthorizationConfig: exports.purchaseAuthorizationConfig,
    purchaseAuthorizationConfigs: exports.purchaseAuthorizationConfigs,
    quoteGetPDF: exports.quoteGetPDF,
    role: exports.role,
    roleDefinition: exports.roleDefinition,
    roleDefinitions: exports.roleDefinitions,
    roles: exports.roles,
    shipment: exports.shipment,
    shipmentItem: exports.shipmentItem,
    shipmentItems: exports.shipmentItems,
    shipments: exports.shipments,
    shop: exports.shop,
    shops: exports.shops,
    site: exports.site,
    surcharge: exports.surcharge,
    surcharges: exports.surcharges,
    tax: exports.tax,
    taxes: exports.taxes,
    template: exports.template,
    templateErrorLog: exports.templateErrorLog,
    templateErrorLogStats: exports.templateErrorLogStats,
    templateErrorLogs: exports.templateErrorLogs,
    templates: exports.templates,
    tender: exports.tender,
    trackAndTrace: exports.trackAndTrace,
    trackAndTraces: exports.trackAndTraces,
    user: exports.user,
    usergroup: exports.usergroup,
    usergroups: exports.usergroups,
    valueset: exports.valueset,
    valuesetItems: exports.valuesetItems,
    valuesets: exports.valuesets,
    viewer: exports.viewer,
    warehouse: exports.warehouse,
    warehouses: exports.warehouses,
    zoneTaxCode: exports.zoneTaxCode,
    zoneTaxCodes: exports.zoneTaxCodes
};
exports.default = exports.queries;
//# sourceMappingURL=queries.js.map