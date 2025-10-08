"use strict";
/**
 * Generated GraphQL fragments bundle
 * This file is auto-generated. Do not edit manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryResponseFields = exports.CategoryMinimalFields = exports.CategoryFields = exports.CategoryAttributeFields = exports.CartVoucherFields = exports.CartUnOrderableItemFields = exports.CartTotalFields = exports.CartTaxLevelFields = exports.CartShippingMethodFields = exports.CartResponseFields = exports.CartProcessResponseFields = exports.CartPostageDataFields = exports.CartPaymethodFields = exports.CartPaymentDataFields = exports.CartMainItemFields = exports.CartItemSurchargeFields = exports.CartIncentiveFields = exports.CartFields = exports.CartCarrierFields = exports.CartBaseItemFields = exports.CartAddressFields = exports.CarriersResponseFields = exports.CarrierFields = exports.BusinessHoursFields = exports.BundlesResponseFields = exports.BundlePriceFields = exports.BundleItemFields = exports.BundleFields = exports.BulkPriceResponseFields = exports.BulkPriceFields = exports.BulkCostPriceResponseFields = exports.BulkCostPriceFields = exports.Base64FileFields = exports.AttributeTextValueFields = exports.AttributeTextFilterFields = exports.AttributeResultResponseFields = exports.AttributeResultFields = exports.AttributeResponseFields = exports.AttributeIntegerRangeFilterFields = exports.AttributeIntValueFields = exports.AttributeFilterFields = exports.AttributeFields = exports.AttributeEnumValueFields = exports.AttributeDescriptionResponseFields = exports.AttributeDescriptionFields = exports.AttributeDecimalValueFields = exports.AttributeDecimalRangeFilterFields = exports.AttributeDateTimeValueFields = exports.AttributeColorValueFields = exports.AddressFields = void 0;
exports.LocalizedStringArrayFields = exports.LocalizedImageFields = exports.LocalizedDocumentFields = exports.LocalizedAttachmentFields = exports.InventoryResponseFields = exports.InventoryFields = exports.InventoryDeleteResponseFields = exports.ImageVariantFields = exports.IBaseTemplateFields = exports.IBaseProductFields = exports.IBaseProductCartFields = exports.GCIPUserFields = exports.GCIPProviderDataFields = exports.FavoriteListsResponseFields = exports.FavoriteListOnlyFields = exports.FavoriteListFields = exports.ExternalAddressFields = exports.DocumentTemplateFields = exports.DiscountFields = exports.CustomersResponseFields = exports.CustomerViewerFields = exports.CustomerListFields = exports.CustomerFields = exports.CustomerAttributeFields = exports.CrossupsellsResponseFields = exports.CrossupsellFields = exports.CostPriceResponseFields = exports.CostPriceFields = exports.ContactsResponseFields = exports.ContactViewerFields = exports.ContactListFields = exports.ContactFields = exports.ContactAttributeFields = exports.CompanyListFields = exports.CompanyFields = exports.CompanyDataFields = exports.CompanyContactSearchFields = exports.CompanyAttributeValueSearchFields = exports.CompanyAttributeSearchFields = exports.CompanyAttributeFields = exports.CompanyAttributeDescriptionSearchFields = exports.CompanyAddressSearchFields = exports.CompaniesResponseFields = exports.ClusterOptionFields = exports.ClusterGridFields = exports.ClusterFields = exports.ClusterConfigSettingFields = exports.ClusterConfigResponseFields = exports.ClusterConfigFields = exports.ClusterAttributeFields = void 0;
exports.RegisterContactResponseFields = exports.RefreshTokenResponseFields = exports.PurchaseAuthorizationConfigResponseFields = exports.PurchaseAuthorizationConfigFields = exports.ProductsResponseFields = exports.ProductPriceFields = exports.ProductOfferFields = exports.ProductMediaImagesOnlyFields = exports.ProductMediaFields = exports.ProductInventoryFields = exports.ProductGridFields = exports.ProductFields = exports.ProductCartFields = exports.ProductAttributeFields = exports.PricesheetResponseFields = exports.PricesheetFields = exports.PriceResponseFields = exports.PriceFields = exports.PaymentsResponseFields = exports.PaymentFields = exports.PayMethodsResponseFields = exports.PayMethodFields = exports.PaginatedMediaVideoResponseFields = exports.PaginatedMediaImageResponseFields = exports.PaginatedMediaDocumentResponseFields = exports.PaginatedMediaAttachmentResponseFields = exports.OrderlistsResponseFields = exports.OrderlistFields = exports.OrderTotalsFields = exports.OrderTotalTaxPercentageFields = exports.OrderResponseFields = exports.OrderPostageDataFields = exports.OrderPaymentDataFields = exports.OrderMediaFields = exports.OrderItemFields = exports.OrderFields = exports.OrderDataFields = exports.OrderAddressFields = exports.MediaVideoFields = exports.MediaImageFields = exports.MediaFields = exports.MediaDocumentFields = exports.MediaAttachmentFields = exports.MagicTokenResponseFields = exports.MagicTokenFields = exports.LogoutFields = exports.LoginFields = exports.LocalizedVideoFields = exports.LocalizedTemplateContentFields = exports.LocalizedStringFields = void 0;
exports.fragments = exports.ZoneTaxCodeResponseFields = exports.ZoneTaxCodeFields = exports.WarehousesResponseFields = exports.WarehouseFields = exports.WarehouseAddressFields = exports.VerifyTokenFields = exports.ValuesetResponseFields = exports.ValuesetItemResponseFields = exports.ValuesetItemFields = exports.ValuesetFields = exports.UsersResponseFields = exports.TransactionFields = exports.TrackAndTraceResponseFields = exports.TrackAndTraceFields = exports.TaxesResponseFields = exports.TaxFields = exports.SurchargesResponseFields = exports.SurchargeProductResponseFields = exports.SurchargeProductFields = exports.SurchargeFields = exports.SparePartsResponseFields = exports.SparePartsMachineResponseFields = exports.SparePartsMachineMediaImagesOnlyFields = exports.SparePartsMachineMediaFields = exports.SparePartsMachineFields = exports.SparePartFields = exports.SourceFields = exports.ShipmentResponseFields = exports.ShipmentItemResponseFields = exports.ShipmentItemFields = exports.ShipmentFields = exports.SendOrderConfirmResponseTypeFields = exports.RegisterCustomerResponseFields = void 0;
exports.AddressFields = `fragment AddressFields on Address {
  id
  firstName
  middleName
  lastName
  gender
  company
  street
  number
  numberExtension
  postalCode
  city
  region
  country
  phone
  mobile
  email
  fax
  code
  notes
  isDefault
  type
  icp
  url
  active
  name
}`;
exports.AttributeColorValueFields = `fragment AttributeColorValueFields on AttributeColorValue {
  __typename
  id
  type
  colorValue
}`;
exports.AttributeDateTimeValueFields = `fragment AttributeDateTimeValueFields on AttributeDateTimeValue {
  __typename
  id
  type
  dateTimeValue
}`;
exports.AttributeDecimalRangeFilterFields = `fragment AttributeDecimalRangeFilterFields on AttributeDecimalRangeFilter {
  min
  max
}`;
exports.AttributeDecimalValueFields = `fragment AttributeDecimalValueFields on AttributeDecimalValue {
  __typename
  id
  type
  decimalValue
}`;
exports.AttributeDescriptionFields = `fragment AttributeDescriptionFields on AttributeDescription {
  id
  name
  descriptions {
    ... LocalizedStringFields
  }
  units {
    language
    value
  }
  attributeClass
  type
  valuesetId
  group
  isSearchable
  isPublic
  isSystem
  isHidden
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  defaultValue {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
}`;
exports.AttributeDescriptionResponseFields = `fragment AttributeDescriptionResponseFields on AttributeDescriptionResponse {
  items {
    ... AttributeDescriptionFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.AttributeEnumValueFields = `fragment AttributeEnumValueFields on AttributeEnumValue {
  __typename
  id
  type
  enumValues
}`;
exports.AttributeFields = `fragment AttributeFields on Attribute {
  ... on CategoryAttribute { ...CategoryAttributeFields }
  ... on ClusterAttribute { ...ClusterAttributeFields }
  ... on CompanyAttribute { ...CompanyAttributeFields }
  ... on ContactAttribute { ...ContactAttributeFields }
  ... on CustomerAttribute { ...CustomerAttributeFields }
  ... on ProductAttribute { ...ProductAttributeFields }
}`;
exports.AttributeFilterFields = `fragment AttributeFilterFields on AttributeFilter {
  id
  attributeDescription {
    id
    name
    descriptions {
      language
      value
    }
    units {
      language
      value
    }
    type
  }
  type
  textFilters {
    value
    count
    countTotal
    countActive
    isSelected
  }
  integerRangeFilter {
    min
    max
  }
  decimalRangeFilter {
    min
    max
  }
}`;
exports.AttributeIntValueFields = `fragment AttributeIntValueFields on AttributeIntValue {
  __typename
  id
  type
  intValue
}`;
exports.AttributeIntegerRangeFilterFields = `fragment AttributeIntegerRangeFilterFields on AttributeIntegerRangeFilter {
  min
  max
}`;
exports.AttributeResponseFields = `fragment AttributeResponseFields on AttributeResponse {
  items {
    ... on CategoryAttribute { ...CategoryAttributeFields }
    ... on ClusterAttribute { ...ClusterAttributeFields }
    ... on CompanyAttribute { ...CompanyAttributeFields }
    ... on ContactAttribute { ...ContactAttributeFields }
    ... on CustomerAttribute { ...CustomerAttributeFields }
    ... on ProductAttribute { ...ProductAttributeFields }
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.AttributeResultFields = `fragment AttributeResultFields on AttributeResult {
  attribute {
    __typename
    ... on CategoryAttribute { ...CategoryAttributeFields }
    ... on ClusterAttribute { ...ClusterAttributeFields }
    ... on CompanyAttribute { ...CompanyAttributeFields }
    ... on ContactAttribute { ...ContactAttributeFields }
    ... on CustomerAttribute { ...CustomerAttributeFields }
    ... on ProductAttribute { ...ProductAttributeFields }
  }
  attributeDescription {
    id
    name
    descriptions {
      language
      value
    }
    units {
      language
      value
    }
    attributeClass
    type
    valuesetId
    group
    isSearchable
    isPublic
    isSystem
    isHidden
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
    defaultValue {
      ... on AttributeColorValue { ...AttributeColorValueFields }
      ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
      ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
      ... on AttributeEnumValue { ...AttributeEnumValueFields }
      ... on AttributeIntValue { ...AttributeIntValueFields }
      ... on AttributeTextValue { ...AttributeTextValueFields }
    }
  }
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
}`;
exports.AttributeResultResponseFields = `fragment AttributeResultResponseFields on AttributeResultResponse {
  items {
    ... AttributeResultFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.AttributeTextFilterFields = `fragment AttributeTextFilterFields on AttributeTextFilter {
  value
  count
  countTotal
  countActive
  isSelected
}`;
exports.AttributeTextValueFields = `fragment AttributeTextValueFields on AttributeTextValue {
  __typename
  id
  type
  textValues {
    language
    values
  }
}`;
exports.Base64FileFields = `fragment Base64FileFields on Base64File {
  base64
  contentType
  fileName
}`;
exports.BulkCostPriceFields = `fragment BulkCostPriceFields on BulkCostPrice {
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  priceId
}`;
exports.BulkCostPriceResponseFields = `fragment BulkCostPriceResponseFields on BulkCostPriceResponse {
  items {
    ... BulkPriceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.BulkPriceFields = `fragment BulkPriceFields on BulkPrice {
  value
  quantityFrom
  validFrom
  validTo
  priceId
}`;
exports.BulkPriceResponseFields = `fragment BulkPriceResponseFields on BulkPriceResponse {
  items {
    ... BulkPriceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.BundleFields = `fragment BundleFields on Bundle {
  id
  name
  description
  discount
  condition
  price {
    ... BundlePriceFields
  }
  items {
    ... BundleItemFields
  }
}`;
exports.BundleItemFields = `fragment BundleItemFields on BundleItem {
  productId
  price {
    ... BundlePriceFields
  }
  isLeader
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
  product {
    ... ProductCartFields
  }
}`;
exports.BundlePriceFields = `fragment BundlePriceFields on BundlePrice {
  net
  gross
  originalNet
  originalGross
}`;
exports.BundlesResponseFields = `fragment BundlesResponseFields on BundlesResponse {
  items {
    ... BundleFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.BusinessHoursFields = `fragment BusinessHoursFields on BusinessHours {
  dayOfWeek
  openingTime
  closingTime
  lunchBeakStartTime
  lunchBeakEndTime
}`;
exports.CarrierFields = `fragment CarrierFields on Carrier {
  id
  name
  type
  descriptions {
    ... LocalizedStringFields
  }
  shippingCost
  trackAndTraceURL
  logo
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  trackAndTraces {
    ... TrackAndTraceFields
  }
  warehouses {
    ... WarehouseFields
  }
}`;
exports.CarriersResponseFields = `fragment CarriersResponseFields on CarriersResponse {
  items {
    ... CarrierFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.CartAddressFields = `fragment CartAddressFields on CartAddress {
  company
  gender
  firstName
  middleName
  lastName
  street
  number
  numberExtension
  postalCode
  city
  region
  country
  code
  email
  mobile
  phone
  icp
  notes
}`;
exports.CartBaseItemFields = `fragment CartBaseItemFields on CartBaseItem {
  itemId
  parentItemUUID
  notes
  price
  priceNet
  priceMode
  totalPrice
  totalPriceNet
  sum
  sumNet
  totalSum
  totalSumNet
  quantity
  bundleId
  clusterId
  productId
  taxCode
  incentive {
    name
    quantity
    price
    code
  }
  product {
    ... ProductCartFields
  }
}`;
exports.CartCarrierFields = `fragment CartCarrierFields on CartCarrier {
  id
  name
  logo
  price
  deliveryDeadline
}`;
exports.CartFields = `fragment CartFields on Cart {
  cartId
  channelId
  shopId
  contactId
  customerId
  companyId
  notes
  reference
  extra3
  extra4
  orderStatus
  actionCode
  vouchers {
    ... CartVoucherFields
  }
  paymentData {
    ... CartPaymentDataFields
  }
  postageData {
    ... CartPostageDataFields
  }
  total {
    ... CartTotalFields
  }
  items {
    ... CartMainItemFields
  }
  bonusItems {
    ... CartBaseItemFields
  }
  unOrderableItems {
    itemId
    parentItemUUID
    priceMode
    quantity
    price
    notes
    productId
    clusterId
    bundleId
  }
  invoiceAddress {
    ... CartAddressFields
  }
  deliveryAddress {
    ... CartAddressFields
  }
  taxLevels {
    ... CartTaxLevelFields
  }
  payMethods {
    ... CartPaymethodFields
  }
  carriers {
    ... CartCarrierFields
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  appliedIncentives {
    ... CartIncentiveFields
  }
  valuePoints
  shippingMethods {
    ... CartShippingMethodFields
  }
  language
  purchaseAuthorizationRequired
  status
  contact {
    ... ContactListFields
  }
  customer {
    ... CustomerListFields
  }
  company {
    ... CompanyListFields
  }
}`;
exports.CartIncentiveFields = `fragment CartIncentiveFields on CartIncentive {
  name
  action
}`;
exports.CartItemSurchargeFields = `fragment CartItemSurchargeFields on CartItemSurcharge {
  names {
    ... LocalizedStringFields
  }
  descriptions {
    ... LocalizedStringFields
  }
  type
  value
  taxCode
  taxPercentage
  quantity
  price
  totalPrice
  priceNet
  totalPriceNet
}`;
exports.CartMainItemFields = `fragment CartMainItemFields on CartMainItem {
  itemId
  productId
  bundleId
  bundle {
    ... BundleFields
  }
  parentItemUUID
  notes
  price
  priceNet
  priceMode
  totalPrice
  totalPriceNet
  sum
  sumNet
  totalSum
  totalSumNet
  quantity
  clusterId
  taxCode
  deliveryDate
  deliveryDeadline
  discount
  discountPercentage
  incentive {
    name
    quantity
    price
    code
  }
  childItems {
    itemId
    parentItemUUID
    notes
    price
    priceNet
    priceMode
    totalPrice
    totalPriceNet
    sum
    sumNet
    totalSum
    totalSumNet
    quantity
    bundleId
    clusterId
    productId
    taxCode
    deliveryDate
    deliveryDeadline
    discount
    discountPercentage
    product {
      ... ProductCartFields
    }
  }
  product {
    ... ProductCartFields
  }
}`;
exports.CartPaymentDataFields = `fragment CartPaymentDataFields on CartPaymentData {
  method
  price
  priceNet
  priceMode
  tax
  taxPercentage
  status
  statusDate
}`;
exports.CartPaymethodFields = `fragment CartPaymethodFields on CartPaymethod {
  code
  name
  externalCode
  type
  taxCode
  price
}`;
exports.CartPostageDataFields = `fragment CartPostageDataFields on CartPostageData {
  method
  taxPercentage
  requestDate
  price
  priceNet
  priceMode
  carrier
  partialDeliveryAllowed
  pickUpLocationId
}`;
exports.CartProcessResponseFields = `fragment CartProcessResponseFields on CartProcessResponse {
  cartOrderId
  cart {
    cartId
  }
  order {
    id
    userId
    accountManagerId
    cartId
    channelId
    shopId
    uuid
    externalId
    debtorId
    status
    type
    source
    email
    emailDate
    remarks
    reference
    extra3
    extra4
    currency
    currencyRatio
    language
    date
    createdAt
    statusDate
    postageData {
      ... OrderPostageDataFields
    }
    paymentData {
      ... OrderPaymentDataFields
    }
    total {
      ... OrderTotalsFields
    }
    items {
      ... OrderItemFields
    }
    shipments {
      ... ShipmentFields
    }
    addresses {
      ... AddressFields
    }
    invoiceUserId
    validUntil
    companyId
    lastModifiedAt
    originalOrderId
    exportedAt
    exportStatus
    exportMessage
    orderAddresses {
      ... OrderAddressFields
    }
  }
}`;
exports.CartResponseFields = `fragment CartResponseFields on CartResponse {
  items {
    cartId
  }
  itemsFound
}`;
exports.CartShippingMethodFields = `fragment CartShippingMethodFields on CartShippingMethod {
  name
  code
}`;
exports.CartTaxLevelFields = `fragment CartTaxLevelFields on CartTaxLevel {
  taxPercentage
  price
  discount
}`;
exports.CartTotalFields = `fragment CartTotalFields on CartTotal {
  subTotal
  subTotalNet
  discountPercentage
  totalNet
  totalGross
  discountNet
  discount
}`;
exports.CartUnOrderableItemFields = `fragment CartUnOrderableItemFields on CartUnOrderableItem {
  itemId
  parentItemUUID
  priceMode
  quantity
  price
  notes
  productId
  clusterId
  bundleId
}`;
exports.CartVoucherFields = `fragment CartVoucherFields on CartVoucher {
  code
  name
  description
  ruleId
  redeemed
  combinable
  partialRedemption
  available
  remaining
}`;
exports.CategoryAttributeFields = `fragment CategoryAttributeFields on Attribute {
  id
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    id
    name
    descriptions {
      language
      value
    }
    units {
      language
      value
    }
    attributeClass
    type
    valuesetId
    group
    isSearchable
    isPublic
    isSystem
    isHidden
    createdAt
    lastModifiedAt
    createdBy
    lastModifiedBy
    defaultValue {
      ... on AttributeColorValue { ...AttributeColorValueFields }
      ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
      ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
      ... on AttributeEnumValue { ...AttributeEnumValueFields }
      ... on AttributeIntValue { ...AttributeIntValueFields }
      ... on AttributeTextValue { ...AttributeTextValueFields }
    }
  }
}`;
exports.CategoryFields = `fragment CategoryFields on Category {
  categoryId
  urlId: categoryId
  ... CategoryMinimalFields
  attributes {
    ... AttributeResultResponseFields
  }
  path
  parent {
    ... CategoryMinimalFields
  }
  metadataTitles {
    ... LocalizedStringFields
  }
  metadataDescriptions {
    ... LocalizedStringFields
  }
  metadataKeywords {
    ... LocalizedStringFields
  }
  metadataCanonicalUrls {
    ... LocalizedStringFields
  }
  hidden
  categoryPath {
    ... CategoryMinimalFields
  }
  products (input: \$categoryProductSearchInput) {
    ... ProductsResponseFields
  }
}`;
exports.CategoryMinimalFields = `fragment CategoryMinimalFields on Category {
  categoryId
  name (language: \$language){
    ... LocalizedStringFields
  }
  description (language: \$language){
    ... LocalizedStringFields
  }
  shortDescription (language: \$language){
    ... LocalizedStringFields
  }
  slug (language: \$language){
    ... LocalizedStringFields
  }
}`;
exports.CategoryResponseFields = `fragment CategoryResponseFields on CategoryResponse {
  items {
    ... CategoryMinimalFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.ClusterAttributeFields = `fragment ClusterAttributeFields on ClusterAttribute {
  id
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ... AttributeDescriptionFields
  }
  clusterId
}`;
exports.ClusterConfigFields = `fragment ClusterConfigFields on ClusterConfig {
  id
  name
  settings {
    ... ClusterConfigSettingFields
  }
}`;
exports.ClusterConfigResponseFields = `fragment ClusterConfigResponseFields on ClusterConfigResponse {
  ... ClusterConfigFields
}`;
exports.ClusterConfigSettingFields = `fragment ClusterConfigSettingFields on ClusterConfigSetting {
  id
  name
  type
  displayType
  priority
}`;
exports.ClusterFields = `fragment ClusterFields on Cluster {
  ... IBaseProductFields
  clusterId
  categoryId
  attributes {
    ... AttributeResultResponseFields
  }
  categories {
    ... CategoryResponseFields
  }
  category {
    ... CategoryMinimalFields
  }
  categoryPath {
    ... CategoryMinimalFields
  }
  crossupsellsFrom {
    ... CrossupsellsResponseFields
  }
  crossupsellsTo {
    ... CrossupsellsResponseFields
  }
  favoriteLists {
    ... FavoriteListsResponseFields
  }
  products {
    ... ProductFields
  }
  createdAt
  lastModifiedAt
  options {
    ... ClusterOptionFields
  }
  defaultProduct {
    ... ProductFields
  }
  config {
    ... ClusterConfigFields
  }
}`;
exports.ClusterGridFields = `fragment ClusterGridFields on Cluster {
  ... IBaseProductFields
  clusterId
  categoryId
  products {
    ... ProductGridFields
  }
  createdAt
  lastModifiedAt
  options {
    ... ClusterOptionFields
  }
  defaultProduct {
    ... ProductGridFields
  }
}`;
exports.ClusterOptionFields = `fragment ClusterOptionFields on ClusterOption {
  id
  clusterOptionId
  isRequired
  hidden
  defaultProduct {
    productId
  }
  products {
    ... ProductGridFields
  }
  names {
    ... LocalizedStringFields
  }
  descriptions {
    ... LocalizedStringFields
  }
  shortDescriptions {
    ... LocalizedStringFields
  }
}`;
exports.CompaniesResponseFields = `fragment CompaniesResponseFields on CompaniesResponse {
  items {
    ... CompanyFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.CompanyAddressSearchFields = `fragment CompanyAddressSearchFields on CompanyAddressSearch {
  id
  firstName
  lastName
  street
  number
  numberExtension
  postalCode
  city
  region
  country
  phone
  mobile
  email
  code
  notes
  name
  isDefault
  type
  active
  createdAt
  lastModifiedAt
}`;
exports.CompanyAttributeDescriptionSearchFields = `fragment CompanyAttributeDescriptionSearchFields on CompanyAttributeDescriptionSearch {
  id
  name
}`;
exports.CompanyAttributeFields = `fragment CompanyAttributeFields on CompanyAttribute {
  id
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ... AttributeDescriptionFields
  }
  companyId
}`;
exports.CompanyAttributeSearchFields = `fragment CompanyAttributeSearchFields on CompanyAttributeSearch {
  id
  value {
    id
    type
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    id
    name
  }
}`;
exports.CompanyAttributeValueSearchFields = `fragment CompanyAttributeValueSearchFields on CompanyAttributeValueSearch {
  id
  type
}`;
exports.CompanyContactSearchFields = `fragment CompanyContactSearchFields on CompanyContactSearch {
  ... ContactFields
}`;
exports.CompanyDataFields = `fragment CompanyDataFields on Company {
  companyId
  attributes (input: \$companyAttributesInput) {
    items {
      ... AttributeResultFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  addresses {
    ... AddressFields
  }
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
}`;
exports.CompanyFields = `fragment CompanyFields on Company {
  companyId
  addresses {
    ... AddressFields
  }
  attributes {
    items {
      ... AttributeResultFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
  contacts {
    items {
      ... ContactListFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  managers {
    ... on Contact { ...ContactListFields }
  }
}`;
exports.CompanyListFields = `fragment CompanyListFields on Company {
  companyId
  name
  taxNumber
  cocNumber
  debtorId
  phone
  email
}`;
exports.ContactAttributeFields = `fragment ContactAttributeFields on ContactAttribute {
  id
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ... AttributeDescriptionFields
  }
  contactId
}`;
exports.ContactFields = `fragment ContactFields on Contact {
  contactId
  attributes (input: \$contactAttributesInput) {
    items {
      ... AttributeResultFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  favoriteLists {
    items {
      ... FavoriteListOnlyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  userId
  debtorId
  gender
  firstName
  middleName
  lastName
  phone
  mobile
  email
  login
  iban
  bankAccount
  bic
  notes
  primaryLanguage
  expires
  externalId
  dateOfBirth
  mailingList
  isLoggedIn
  createdAt
  lastModifiedAt
  parentCompanyId
  company {
    ... CompanyDataFields
  }
  companies {
    items {
      ... CompanyDataFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  purchaseAuthorizationConfigs (input: \$contactPAConfigInput) {
    items {
      ... PurchaseAuthorizationConfigFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;
exports.ContactListFields = `fragment ContactListFields on Contact {
  contactId
  gender
  firstName
  middleName
  lastName
  phone
  mobile
  email
  login
  iban
  bankAccount
  bic
  notes
  primaryLanguage
  expires
  externalId
  dateOfBirth
  mailingList
  isLoggedIn
  createdAt
  lastModifiedAt
  parentCompanyId
  purchaseAuthorizationConfigs {
    items {
      ... PurchaseAuthorizationConfigFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;
exports.ContactViewerFields = `fragment ContactViewerFields on Contact {
  contactId
  userId
  debtorId
  gender
  firstName
  middleName
  lastName
  phone
  mobile
  email
  login
  iban
  bankAccount
  bic
  notes
  primaryLanguage
  expires
  externalId
  dateOfBirth
  mailingList
  isLoggedIn
  createdAt
  lastModifiedAt
  parentCompanyId
} `;
exports.ContactsResponseFields = `fragment ContactsResponseFields on ContactsResponse {
  items {
    ... ContactFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.CostPriceFields = `fragment CostPriceFields on CostPrice {
  id
  priceId
  createdAt
  lastModifiedAt
  quantityFrom
  value
}`;
exports.CostPriceResponseFields = `fragment CostPriceResponseFields on CostPriceResponse {
  items {
    id
    priceId
    createdAt
    lastModifiedAt
    quantityFrom
    value
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.CrossupsellFields = `fragment CrossupsellFields on Crossupsell {
  id
  createdAt
  lastModifiedAt
  type
  subType
  productTo {
    ... on Cluster { ...ClusterGridFields }
    ... on Product { ...ProductGridFields }
  }
  productFrom {
    ... on Cluster { ...ClusterGridFields }
    ... on Product { ...ProductGridFields }
  }
  clusterTo {
    ... on Cluster { ...ClusterGridFields }
    ... on Product { ...ProductGridFields }
  }
  clusterFrom {
    ... on Cluster { ...ClusterGridFields }
    ... on Product { ...ProductGridFields }
  }
}`;
exports.CrossupsellsResponseFields = `fragment CrossupsellsResponseFields on CrossupsellsResponse {
  items {
    ... CrossupsellFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.CustomerAttributeFields = `fragment CustomerAttributeFields on CustomerAttribute {
  id
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ... AttributeDescriptionFields
  }
  customerId
}`;
exports.CustomerFields = `fragment CustomerFields on Customer {
  customerId
  addresses {
    ... AddressFields
  }
  attributes (input: \$customerAttributesInput) {
    items {
      ... AttributeResultFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  favoriteLists {
    items {
      ... FavoriteListOnlyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  userId
  debtorId
  gender
  firstName
  middleName
  lastName
  phone
  mobile
  email
  login
  iban
  bankAccount
  bic
  notes
  primaryLanguage
  expires
  externalId
  dateOfBirth
  mailingList
  isLoggedIn
  createdAt
  lastModifiedAt
  parentUsergroupId
}`;
exports.CustomerListFields = `fragment CustomerListFields on Customer {
  customerId
  userId
  debtorId
  gender
  firstName
  middleName
  lastName
  phone
  mobile
  email
  login
  iban
  bankAccount
  bic
  notes
  primaryLanguage
  expires
  externalId
  dateOfBirth
  mailingList
  isLoggedIn
  createdAt
  lastModifiedAt
  parentUsergroupId
}`;
exports.CustomerViewerFields = `fragment CustomerViewerFields on Customer {
  customerId
  userId
  debtorId
  gender
  firstName
  middleName
  lastName
  phone
  mobile
  email
  login
  iban
  bankAccount
  bic
  notes
  primaryLanguage
  expires
  externalId
  dateOfBirth
  mailingList
  isLoggedIn
  createdAt
  lastModifiedAt
  parentUsergroupId
} `;
exports.CustomersResponseFields = `fragment CustomersResponseFields on CustomersResponse {
  items {
    ... CustomerFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.DiscountFields = `fragment DiscountFields on Discount {
  categoryId
  id
  createdAt
  lastModifiedAt
  value
  quantityFrom
  validFrom
  validTo
  pricesheetId
  productId
  priceGroup
  discountType
}`;
exports.DocumentTemplateFields = `fragment DocumentTemplateFields on DocumentTemplate {
  id
  contents { ...LocalizedTemplateContentFields }
  names { ...LocalizedStringFields }
  content
  customQuery
  queryVariables
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  fileNames { ...LocalizedStringFields }
  isDefaultOrderPdf
  isDefaultQuotePdf
}`;
exports.ExternalAddressFields = `fragment ExternalAddressFields on ExternalAddress {
  id
  firstName
  middleName
  lastName
  gender
  company
  street
  number
  numberExtension
  postalCode
  city
  region
  country
  phone
  mobile
  email
  fax
  code
  notes
  icp
  url
  name
}`;
exports.FavoriteListFields = `fragment FavoriteListFields on FavoriteList {
  id
  name
  companyId
  contactId
  customerId
  isDefault
  slug
  createdAt
  updatedAt
  products {
    items {
      ... on Cluster { ...ClusterGridFields }
      ... on Product { ...ProductGridFields }
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
  }
  clusters {
    items {
      ... ClusterGridFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
  }
}`;
exports.FavoriteListOnlyFields = `fragment FavoriteListOnlyFields on FavoriteList {
  id
  name
  companyId
  contactId
  customerId
  isDefault
  slug
  createdAt
  updatedAt
  products {
    items {
      ... on Cluster { clusterId }
      ... on Product { productId }
    }
  }
  clusters {
    items {
      ... on Cluster {
        clusterId
      }
      ... on Product {
        productId
      }
    }
  }
}`;
exports.FavoriteListsResponseFields = `fragment FavoriteListsResponseFields on FavoriteListsResponse {
  items {
    ... FavoriteListOnlyFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.GCIPProviderDataFields = `fragment GCIPProviderDataFields on GCIPProviderData {
  uid
  providerId
  displayName
  photoUrl
  federatedId
  email
  rawId
  screenName
  phoneNumber
}`;
exports.GCIPUserFields = `fragment GCIPUserFields on GCIPUser {
  uid
  email
  emailVerified
  displayName
  photoUrl
  phoneNumber
  disabled
  isAnonymous
  metadata {
    lastSignInTime
    creationTime
    lastRefreshTime
  }
  tokensValidAfterTime
  tenantId
  providerData {
    uid
    providerId
    displayName
    photoUrl
    federatedId
    email
    rawId
    screenName
    phoneNumber
  }
  passwordHash
  passwordSalt
  authDomain
  lastLoginAt
  createdAt
  accessToken
  refreshToken
  expirationTime
  multiFactor {
    enrolledFactors {
      factorId
      phoneNumber
    }
  }
}`;
exports.IBaseProductCartFields = `fragment IBaseProductCartFields on IBaseProduct {
  language
  class
  hidden
  names {
    ... LocalizedStringFields
  }
  descriptions {
    ... LocalizedStringFields
  }
  shortDescriptions {
    ... LocalizedStringFields
  }
  slugs {
    ... LocalizedStringFields
  }
  sku
}
`;
exports.IBaseProductFields = `fragment IBaseProductFields on IBaseProduct {
  language
  class
  hidden
  names {
    ... LocalizedStringFields
  }
  descriptions {
    ... LocalizedStringFields
  }
  shortDescriptions {
    ... LocalizedStringFields
  }
  slugs {
    ... LocalizedStringFields
  }
  sku
  categoryId
  priority
  metadataTitles {
    ... LocalizedStringFields
  }
  metadataDescriptions {
    ... LocalizedStringFields
  }
  metadataCanonicalUrls {
    ... LocalizedStringFields
  }
}
`;
exports.IBaseTemplateFields = `fragment IBaseTemplateFields on IBaseTemplate {
  ... on DocumentTemplate { ...DocumentTemplateFields }
  ... on EmailTemplate { ...EmailTemplateFields }
}`;
exports.ImageVariantFields = `fragment ImageVariantFields on ImageVariant {
  name
  language
  url
  mimeType
}`;
exports.InventoryDeleteResponseFields = `fragment InventoryDeleteResponseFields on InventoryDeleteResponse {
  messages
}`;
exports.InventoryFields = `fragment InventoryFields on Inventory {
  id
  productId
  quantity
  costPrice
  supplier
  supplierCode
  sku
  dateModified
  warehouseId
  location
  nextDeliveryDate
  notes
}`;
exports.InventoryResponseFields = `fragment InventoryResponseFields on InventoryResponse {
  id
  productId
  quantity
  costPrice
  supplier
  supplierCode
  sku
  dateModified
  warehouseId
  location
  nextDeliveryDate
  notes
  messages
  total
  warehouse {
    ... WarehouseFields
  }
}`;
exports.LocalizedAttachmentFields = `fragment LocalizedAttachmentFields on LocalizedAttachment {
  language
  originalUrl
  mimeType
}`;
exports.LocalizedDocumentFields = `fragment LocalizedDocumentFields on LocalizedDocument {
  language
  originalUrl
  mimeType
}`;
exports.LocalizedImageFields = `fragment LocalizedImageFields on LocalizedImage {
  language
  originalUrl
  mimeType
}`;
exports.LocalizedStringArrayFields = `fragment LocalizedStringArrayFields on LocalizedStringArray {
  language
  values
}`;
exports.LocalizedStringFields = `fragment LocalizedStringFields on LocalizedString {
  language
  value
}`;
exports.LocalizedTemplateContentFields = `fragment LocalizedTemplateContentFields on LocalizedTemplateContent {
  language
  content
  precompiled
}`;
exports.LocalizedVideoFields = `fragment LocalizedVideoFields on LocalizedVideo {
  language
  uri
  mimeType
}`;
exports.LoginFields = `fragment LoginFields on Login {
  providerId
  operationType
  session {
    ... GCIPUserFields
  }
}`;
exports.LogoutFields = `fragment LogoutFields on Logout {
  todo
}`;
exports.MagicTokenFields = `fragment MagicTokenFields on MagicToken {
  id
  contactId
  customerId
  expiresAt
  lastAccessedAt
  failedLogins
  successfulLogins
  oneTimeUse
  extra
}`;
exports.MagicTokenResponseFields = `fragment MagicTokenResponseFields on MagicTokenResponse {
  items {
    ... MagicTokenFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.MediaAttachmentFields = `fragment MediaAttachmentFields on MediaAttachment {
  id
  sparePartsMachineId
  alt {
    ... LocalizedStringArray
  }
  description {
    ... LocalizedStringArray
  }
  tags {
    ... LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  attachments {
    language
    originalUrl
    mimeType
  }
  orderId
  companyId
  customerId
}`;
exports.MediaDocumentFields = `fragment MediaDocumentFields on MediaDocument {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ... LocalizedStringFields
  }
  description {
    ... LocalizedStringFields
  }
  tags {
    ... LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  documents {
    language
    originalUrl
    mimeType
  }
}`;
exports.MediaFields = `fragment MediaFields on Media {
  image {
    ... MediaImageFields
  }
  images {
    items {
      ... MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  video {
    ... MediaVideoFields
  }
  videos {
    items {
      ... MediaVideoFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  document {
    ... MediaDocumentFields
  }
  documents {
    items {
      ... MediaDocumentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  attachment {
    ... MediaAttachmentFields
  }
  attachments {
    items {
      ... MediaAttachmentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;
exports.MediaImageFields = `fragment MediaImageFields on MediaImage {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt (language: \$language) {
    ... LocalizedStringFields
  }
  description {
    ... LocalizedStringFields
  }
  tags {
    ... LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  images {
    language
    originalUrl
    mimeType
  }
  imageVariants(input: \$imageVariantFilters) {
    name
    language
    url
    mimeType
  }
}`;
exports.MediaVideoFields = `fragment MediaVideoFields on MediaVideo {
  id
  productId
  clusterId
  categoryId
  sparePartsMachineId
  alt {
    ... LocalizedStringFields
  }
  description {
    ... LocalizedStringFields
  }
  tags {
    ... LocalizedStringArrayFields
  }
  type
  createdAt
  lastModifiedAt
  priority
  videos {
    language
    uri
    mimeType
  }
}`;
exports.OrderAddressFields = `fragment OrderAddressFields on OrderAddress {
  id
  orderId
  createdAt
  lastModifiedAt
  firstName
  middleName
  lastName
  gender
  company
  street
  number
  numberExtension
  postalCode
  city
  region
  country
  phone
  mobile
  email
  code
  notes
  type
  icp
  url
  name
}`;
exports.OrderDataFields = `fragment OrderDataFields on Order {
  id
  userId
  accountManagerId
  cartId
  channelId
  shopId
  uuid
  externalId
  debtorId
  status
  type
  source
  email
  emailDate
  remarks
  reference
  extra3
  extra4
  currency
  currencyRatio
  language
  createdAt
  statusDate
  total {
    ... OrderTotalsFields
  }
  invoiceUserId
  validUntil
  companyId
}`;
exports.OrderFields = `fragment OrderFields on Order {
  id
  media {
    ... OrderMediaFields
  }
  userId
  accountManagerId
  cartId
  channelId
  shopId
  uuid
  externalId
  debtorId
  status
  type
  source
  email
  emailDate
  remarks
  reference
  extra3
  extra4
  currency
  currencyRatio
  language
  date
  createdAt
  statusDate
  postageData {
    ... OrderPostageDataFields
  }
  paymentData {
    ... OrderPaymentDataFields
  }
  total {
    ... OrderTotalsFields
  }
  items {
    ... OrderItemFields
  }
  shipments {
    ... ShipmentFields
  }
  addresses {
    ... AddressFields
  }
  invoiceUserId
  validUntil
  companyId
  lastModifiedAt
  originalOrderId
  exportedAt
  exportStatus
  exportMessage
  orderAddresses {
    ... OrderAddressFields
  }
}`;
exports.OrderItemFields = `fragment OrderItemFields on OrderItem {
  id
  orderId
  uuid
  class
  productId
  parentOrderItemId
  quantity
  sku
  notes
  name
  supplier
  supplierCode
  manufacturer
  manufacturerCode
  eanCode
  originalPrice
  price
  priceTotal
  priceNet
  priceTotalNet
  customerPrice
  costPrice
  discount
  tax
  taxPercentage
  taxCode
  isBonus
  minimumQuantity
  unit
  package
  packageUnit
  packageUnitQuantity
  purchaseUnit
  purchaseMinimumQuantity
  requestDate
  product {
    ... ProductCartFields
  }
}`;
exports.OrderMediaFields = `fragment OrderMediaFields on OrderMedia {
  attachments {
    items {
      id
      sparePartsMachineId
      alt {
        language
        value
      }
      description {
        language
        value
      }
      tags {
        language
        values
      }
      type
      createdAt
      lastModifiedAt
      priority
      attachments {
        language
        originalUrl
        mimeType
      }
      orderId
      companyId
      customerId
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;
exports.OrderPaymentDataFields = `fragment OrderPaymentDataFields on OrderPaymentData {
  net
  gross
  tax
  taxPercentage
  method
  status
  statusDate
  accountingId
  overruled
}`;
exports.OrderPostageDataFields = `fragment OrderPostageDataFields on OrderPostageData {
  method
  taxPercentage
  requestDate
  gross
  net
  tax
  partialDeliveryAllowed
  pickUpLocationId
  carrier
  overruled
  warehouse {
  ... WarehouseFields
  }
}`;
exports.OrderResponseFields = `fragment OrderResponseFields on OrderResponse {
  items {
    ... OrderDataFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.OrderTotalTaxPercentageFields = `fragment OrderTotalTaxPercentageFields on OrderTotalTaxPercentage {
  percentage
  total
}`;
exports.OrderTotalsFields = `fragment OrderTotalsFields on OrderTotals {
  gross
  net
  tax
  discountType
  discountValue
  taxPercentages {
    percentage
    total
  }
}`;
exports.OrderlistFields = `fragment OrderlistFields on Orderlist {
  id
  createdAt
  lastModifiedAt
  descriptions {
    language
    value
  }
  extras {
    language
    value
  }
  code
  validFrom
  validTo
  type
  partnerEntity
  active
  products {
    items {
      ... on Cluster { ...ClusterGridFields }
      ... on Product { ...ProductGridFields }
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
    filters {
      ... AttributeFilterFields
    }
  }
  clusters {
    items {
      ... on Cluster { ...ClusterGridFields }
      ... on Product { ...ProductGridFields }
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
    filters {
      ... AttributeFilterFields
    }
  }
  users {
    ... on Contact { ...ContactFields }
    ... on Customer { ...CustomerFields }
  }
  usersPaginated {
    items {
      ... on Contact { ...ContactFields }
      ... on Customer { ...CustomerFields }
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  companies {
    ... CompanyDataFields
  }
}`;
exports.OrderlistsResponseFields = `fragment OrderlistsResponseFields on OrderlistsResponse {
  items {
    ... OrderlistFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.PaginatedMediaAttachmentResponseFields = `fragment PaginatedMediaAttachmentResponseFields on PaginatedMediaAttachmentResponse {
  items {
    ... MediaAttachmentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.PaginatedMediaDocumentResponseFields = `fragment PaginatedMediaDocumentResponseFields on PaginatedMediaDocumentResponse {
  items {
    ... MediaDocumentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.PaginatedMediaImageResponseFields = `fragment PaginatedMediaImageResponseFields on PaginatedMediaImageResponse {
  items {
    ... MediaImageFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.PaginatedMediaVideoResponseFields = `fragment PaginatedMediaVideoResponseFields on PaginatedMediaVideoResponse {
  items {
    ... MediaVideoFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.PayMethodFields = `fragment PayMethodFields on PayMethod {
  id
  createdAt
  lastModifiedAt
  names {
    ... LocalizedStringFields
  }
  externalCode
  logo
}`;
exports.PayMethodsResponseFields = `fragment PayMethodsResponseFields on PayMethodsResponse {
  items {
    ... PayMethodFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.PaymentFields = `fragment PaymentFields on Payment {
  id
  userId
  anonymousId
  paymentId
  orderId
  amount
  currency
  method
  status
  transactions {
    ... TransactionFields
  }
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}`;
exports.PaymentsResponseFields = `fragment PaymentsResponseFields on PaymentsResponse {
  items {
    ... PaymentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.PriceFields = `fragment PriceFields on Price {
  id
  createdAt
  lastModifiedAt
  productId
  per
  list
  costPrices {
    ... BulkCostPriceFields
  }
  suggested
  store
  bulkPriceDiscountType
  defaultTaxCode
  display
  cost
}`;
exports.PriceResponseFields = `fragment PriceResponseFields on PriceResponse {
  items {
    ... PriceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.PricesheetFields = `fragment PricesheetFields on Pricesheet {
  id
  createdAt
  lastModifiedAt
  code
  names {
    ... LocalizedStringFields
  }
  descriptions {
    ... LocalizedStringFields
  }
  priority
  readonly
  usergroups
  contacts {
    ... ContactFields
  }
  contactsPaginated {
    items {
      ... ContactFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  customers {
    ... CustomerFields
  }
  customersPaginated {
    items {
      ... CustomerFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  companies {
    ... CompanyFields
  }
  companiesPaginated {
    items {
      ... CompanyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;
exports.PricesheetResponseFields = `fragment PricesheetResponseFields on PricesheetResponse {
  items {
    ... PricesheetFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.ProductAttributeFields = `fragment ProductAttributeFields on ProductAttribute {
  id
  value {
    ... on AttributeColorValue { ...AttributeColorValueFields }
    ... on AttributeDateTimeValue { ...AttributeDateTimeValueFields }
    ... on AttributeDecimalValue { ...AttributeDecimalValueFields }
    ... on AttributeEnumValue { ...AttributeEnumValueFields }
    ... on AttributeIntValue { ...AttributeIntValueFields }
    ... on AttributeTextValue { ...AttributeTextValueFields }
  }
  createdAt
  lastModifiedAt
  createdBy
  lastModifiedBy
  attributeDescription {
    ... AttributeDescriptionFields
  }
  productId
}`;
exports.ProductCartFields = `fragment ProductCartFields on Product {
  ... IBaseProductCartFields
  productId
  inventory {
    ... ProductInventoryFields
  }
  media {
    ... ProductMediaImagesOnlyFields
  }
  manufacturerCode
  eanCode
  manufacturer
  supplierCode
  status
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
}`;
exports.ProductFields = `fragment ProductFields on Product {
  ... IBaseProductFields
  productId
  categoryId
  attributes (input: \$attributeResultSearchInput) {
    ... AttributeResultResponseFields
  }
  bundles {
    ... BundleFields
  }
  category {
    ... CategoryMinimalFields
  }
  categoryPath {
    ... CategoryMinimalFields
  }
  favoriteLists {
    items {
      ... FavoriteListOnlyFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  inventory {
    ... ProductInventoryFields
  }
  media {
    ... ProductMediaFields
  }
  price (input: \$priceCalculateProductInput) {
    ... ProductPriceFields
  }
  priceData {
    display
  }
  bulkPrices (input: \$userBulkPriceProductInput) {
    ... ProductPriceFields
  }
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  barCode
  turnoverGroup
  taxonomy
  priceGroup
  orderable
  returnable
  physical
  hasBundle
  isBundleLeader
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  economicOrderQuantity
  orderableFrom
  orderableTo
  releaseDate
  createdAt
  lastModifiedAt
  containerClass
  surcharges {
    ... SurchargeFields
  }
}`;
exports.ProductGridFields = `fragment ProductGridFields on Product {
  ... IBaseProductFields
  productId
  categoryId
  inventory {
    ... ProductInventoryFields
  }
  media {
    ... ProductMediaImagesOnlyFields
  }
  price (input: \$priceCalculateProductInput) {
    ... ProductPriceFields
  }
  priceData {
    display
  }
  shortName
  manufacturerCode
  eanCode
  manufacturer
  supplier
  supplierCode
  status
  statusExtra
  orderable
  package
  packageUnit
  packageUnitQuantity
  minimumQuantity
  unit
  purchaseUnit
  purchaseMinimumQuantity
  orderableFrom
  orderableTo
  containerClass
}`;
exports.ProductInventoryFields = `fragment ProductInventoryFields on ProductInventory {
  productId
  totalQuantity
  supplierQuantity
  localQuantity
  nextDeliveryDate
  balance {
    id
    productId
    quantity
    costPrice
    supplier
    supplierCode
    sku
    dateModified
    warehouseId
    location
    nextDeliveryDate
    notes
  }
}`;
exports.ProductMediaFields = `fragment ProductMediaFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ... MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  videos(search: \$mediaVideoSearchInput) {
    items {
      ... MediaVideoFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  documents(search: \$mediaDocumentSearchInput) {
    items {
      ... MediaDocumentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;
exports.ProductMediaImagesOnlyFields = `fragment ProductMediaImagesOnlyFields on ProductMedia {
  images(search: \$imageSearchFilters) {
    items {
      ... MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;
exports.ProductOfferFields = `fragment ProductOfferFields on ProductOffer {
  price
  validFrom
  validTo
}`;
exports.ProductPriceFields = `fragment ProductPriceFields on ProductPrice {
  productId
  type
  discountType
  list
  cost
  net
  gross
  discount {
    ... on BulkCostPrice { ...BulkCostPriceFields }
    ... on BulkPrice { ...BulkPriceFields }
    ... on Discount { ...DiscountFields }
  }
  taxCode
  quantity
}`;
exports.ProductsResponseFields = `fragment ProductsResponseFields on ProductsResponse {
  items {
    ... on Cluster { ... ClusterGridFields }
    ... on Product { ... ProductGridFields }
  }
  itemsFound
  offset
  page
  pages
  start
  end
  minPrice
  maxPrice
  filters (input: \$filterAvailableAttributeInput) {
    ... AttributeFilterFields
  }
}`;
exports.PurchaseAuthorizationConfigFields = `fragment PurchaseAuthorizationConfigFields on PurchaseAuthorizationConfig {
  id
  purchaseRole
  authorizationLimit
  createdAt
  lastModifiedAt
  company {
    companyId
  }
  contact {
    contactId
  }
}`;
exports.PurchaseAuthorizationConfigResponseFields = `fragment PurchaseAuthorizationConfigResponseFields on PurchaseAuthorizationConfigResponse {
  items {
    ... PurchaseAuthorizationConfigFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.RefreshTokenResponseFields = `fragment RefreshTokenResponseFields on RefreshTokenResponse {
  access_token
  refresh_token
  expires_in
  token_type
  user_id
}`;
exports.RegisterContactResponseFields = `fragment RegisterContactResponseFields on RegisterContactResponse {
  contact {
    ... on Contact { ...ContactFields }
  }
  session {
    accessToken
    refreshToken
    expirationTime
  }
}`;
exports.RegisterCustomerResponseFields = `fragment RegisterCustomerResponseFields on RegisterCustomerResponse {
  customer {
    ... on Customer { ...CustomerFields }
  }
  session {
    accessToken
    refreshToken
    expirationTime
  }
}`;
exports.SendOrderConfirmResponseTypeFields = `fragment SendOrderConfirmResponseTypeFields on SendOrderConfirmResponseType {
  messageId
  success
}`;
exports.ShipmentFields = `fragment ShipmentFields on Shipment {
  id
  createdAt
  lastModifiedAt
  expectedDeliveryAt
  status
  orderId
  items {
    ... ShipmentItemFields
  }
  trackAndTraces {
    ... TrackAndTraceFields
  }
}`;
exports.ShipmentItemFields = `fragment ShipmentItemFields on ShipmentItem {
  id
  createdAt
  lastModifiedAt
  name
  sku
  quantity
  shipmentId
  orderItemId
  orderItem {
    ... OrderItemFields
  }
}`;
exports.ShipmentItemResponseFields = `fragment ShipmentItemResponseFields on ShipmentItemResponse {
  items {
    ... ShipmentItemFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.ShipmentResponseFields = `fragment ShipmentResponseFields on ShipmentResponse {
  items {
    ... ShipmentFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.SourceFields = `fragment SourceFields on Source {
  id
  name
}`;
exports.SparePartFields = `fragment SparePartFields on SparePart {
  id
  sku
  quantity
  name {
    ... LocalizedStringFields
  }
  product {
    ... on Cluster { ...ClusterGridFields }
    ... on Product { ...ProductGridFields }
  }
}`;
exports.SparePartsMachineFields = `fragment SparePartsMachineFields on SparePartsMachine {
  id
  media {
    ... SparePartsMachineMediaImagesOnlyFields
  }
  sparePartProducts {
    items {
      ... SparePartFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
    minPrice
    maxPrice
    filters {
      ... AttributeFilterFields
    }
  }
  name {
    ... LocalizedStringFields
  }
  description {
    ... LocalizedStringFields
  }
  slug {
    ... LocalizedStringFields
  }
  machines {
    id
    media {
      ... SparePartsMachineMediaImagesOnlyFields
    }
    sparePartProducts {
      items {
        ... SparePartFields
      }
      itemsFound
      offset
      page
      pages
      start
      end
      minPrice
      maxPrice
      filters {
        ... AttributeFilterFields
      }
    }
    name {
      ... LocalizedStringFields
    }
    description {
      ... LocalizedStringFields
    }
    slug {
      ... LocalizedStringFields
    }
  }
}`;
exports.SparePartsMachineMediaFields = `fragment SparePartsMachineMediaFields on SparePartsMachineMedia {
  images (search: \$machineimageSearchFilters) {
    items {
      ... MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  videos (search: \$machineMediaVideoSearchInput) {
    items {
      ... MediaVideoFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  documents (search: \$machineMediaDocumentSearchInput) {
    items {
      ... MediaDocumentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
  attachments (search: \$machineMediaAttachmentSearchInput) {
    items {
      ... MediaAttachmentFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;
exports.SparePartsMachineMediaImagesOnlyFields = `fragment SparePartsMachineMediaImagesOnlyFields on SparePartsMachineMedia {
  images {
    items {
      ... MediaImageFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;
exports.SparePartsMachineResponseFields = `fragment SparePartsMachineResponseFields on SparePartsMachineResponse {
  items {
    ... SparePartsMachineFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.SparePartsResponseFields = `fragment SparePartsResponseFields on SparePartsResponse {
  items {
    ... SparePartFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
  minPrice
  maxPrice
  filters {
    ... AttributeFilterFields
  }
}`;
exports.SurchargeFields = `fragment SurchargeFields on Surcharge {
  id
  name {
    ... LocalizedStringFields
  }
  description {
    ... LocalizedStringFields
  }
  type
  value
  taxCode
  taxZone
  enabled
  validFrom
  validTo
}`;
exports.SurchargeProductFields = `fragment SurchargeProductFields on SurchargeProduct {
  surchargeId
  productId
  surcharge {
    ... SurchargeFields
  }
}`;
exports.SurchargeProductResponseFields = `fragment SurchargeProductResponseFields on SurchargeProductResponse {
  items {
    ... SurchargeProduct
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.SurchargesResponseFields = `fragment SurchargesResponseFields on SurchargesResponse {
  items {
    ... SurchargeProductResponse
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.TaxFields = `fragment TaxFields on Tax {
  id
  shopId
  code
  zone
  percentage
  exportCode
  createdAt
  createdBy
  lastModifiedAt
  lastModifiedBy
}`;
exports.TaxesResponseFields = `fragment TaxesResponseFields on TaxesResponse {
  items {
    ... TaxFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.TrackAndTraceFields = `fragment TrackAndTraceFields on TrackAndTrace {
  carrierId
  id
  createdAt
  lastModifiedAt
  code
  shipmentId
}`;
exports.TrackAndTraceResponseFields = `fragment TrackAndTraceResponseFields on TrackAndTraceResponse {
  items {
    ... TrackAndTraceFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.TransactionFields = `fragment TransactionFields on Transaction {
  id
  transactionId
  paymentId
  orderId
  amount
  currency
  description
  timestamp
  type
  provider
  status
}`;
exports.UsersResponseFields = `fragment UsersResponseFields on UsersResponse {
  items {
    ... on Contact { ...ContactFields }
    ... on Customer { ...CustomerFields }
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.ValuesetFields = `fragment ValuesetFields on Valueset {
  id
  name
  type
  descriptions {
    ... LocalizedStringFields
  }
  lastModifiedBy
  lastModifiedAt
  createdBy
  createdAt
  valuesetItems {
    items {
      ... ValuesetItemFields
    }
    itemsFound
    offset
    page
    pages
    start
    end
  }
}`;
exports.ValuesetItemFields = `fragment ValuesetItemFields on ValuesetItem {
  id
  valuesetId
  value
  descriptions {
    ... LocalizedStringFields
  }
  extra
}`;
exports.ValuesetItemResponseFields = `fragment ValuesetItemResponseFields on ValuesetItemResponse {
  items {
    ValuesetItemFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.ValuesetResponseFields = `fragment ValuesetResponseFields on ValuesetResponse {
  items {
    ... ValuesetFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.VerifyTokenFields = `fragment VerifyTokenFields on VerifyToken {
  uid
  name
  claims
  iss
  aud
  auth_time
  user_id
  sub
  iat
  exp
  email
  email_verified
  firebase {
    identities
    sign_in_provider
    sign_in_second_factor
    second_factor_identifier
    tenant
  }
}`;
exports.WarehouseAddressFields = `fragment WarehouseAddressFields on WarehouseAddress {
  id
  firstName
  middleName
  lastName
  gender
  company
  street
  number
  numberExtension
  postalCode
  city
  region
  country
  phone
  mobile
  email
  fax
  code
  notes
  icp
  url
  name
}`;
exports.WarehouseFields = `fragment WarehouseFields on Warehouse {
  id
  addressId
  address {
    ... WarehouseAddressFields
  }
  name
  description
  notes
  isActive
  isStore
  isPickupLocation
  shopId
  businessHours {
    ... BusinessHoursFields
  }
  createdAt
  lastModifiedAt
}`;
exports.WarehousesResponseFields = `fragment WarehousesResponseFields on WarehousesResponse {
  items {
    ... WarehouseFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.ZoneTaxCodeFields = `fragment ZoneTaxCodeFields on ZoneTaxCode {
  id
  priceId
  createdAt
  lastModifiedAt
  zone
  taxCode
}`;
exports.ZoneTaxCodeResponseFields = `fragment ZoneTaxCodeResponseFields on ZoneTaxCodeResponse {
  items {
    ... ZoneTaxCodeFields
  }
  itemsFound
  offset
  page
  pages
  start
  end
}`;
exports.fragments = {
    AddressFields: exports.AddressFields,
    AttributeColorValueFields: exports.AttributeColorValueFields,
    AttributeDateTimeValueFields: exports.AttributeDateTimeValueFields,
    AttributeDecimalRangeFilterFields: exports.AttributeDecimalRangeFilterFields,
    AttributeDecimalValueFields: exports.AttributeDecimalValueFields,
    AttributeDescriptionFields: exports.AttributeDescriptionFields,
    AttributeDescriptionResponseFields: exports.AttributeDescriptionResponseFields,
    AttributeEnumValueFields: exports.AttributeEnumValueFields,
    AttributeFields: exports.AttributeFields,
    AttributeFilterFields: exports.AttributeFilterFields,
    AttributeIntValueFields: exports.AttributeIntValueFields,
    AttributeIntegerRangeFilterFields: exports.AttributeIntegerRangeFilterFields,
    AttributeResponseFields: exports.AttributeResponseFields,
    AttributeResultFields: exports.AttributeResultFields,
    AttributeResultResponseFields: exports.AttributeResultResponseFields,
    AttributeTextFilterFields: exports.AttributeTextFilterFields,
    AttributeTextValueFields: exports.AttributeTextValueFields,
    Base64FileFields: exports.Base64FileFields,
    BulkCostPriceFields: exports.BulkCostPriceFields,
    BulkCostPriceResponseFields: exports.BulkCostPriceResponseFields,
    BulkPriceFields: exports.BulkPriceFields,
    BulkPriceResponseFields: exports.BulkPriceResponseFields,
    BundleFields: exports.BundleFields,
    BundleItemFields: exports.BundleItemFields,
    BundlePriceFields: exports.BundlePriceFields,
    BundlesResponseFields: exports.BundlesResponseFields,
    BusinessHoursFields: exports.BusinessHoursFields,
    CarrierFields: exports.CarrierFields,
    CarriersResponseFields: exports.CarriersResponseFields,
    CartAddressFields: exports.CartAddressFields,
    CartBaseItemFields: exports.CartBaseItemFields,
    CartCarrierFields: exports.CartCarrierFields,
    CartFields: exports.CartFields,
    CartIncentiveFields: exports.CartIncentiveFields,
    CartItemSurchargeFields: exports.CartItemSurchargeFields,
    CartMainItemFields: exports.CartMainItemFields,
    CartPaymentDataFields: exports.CartPaymentDataFields,
    CartPaymethodFields: exports.CartPaymethodFields,
    CartPostageDataFields: exports.CartPostageDataFields,
    CartProcessResponseFields: exports.CartProcessResponseFields,
    CartResponseFields: exports.CartResponseFields,
    CartShippingMethodFields: exports.CartShippingMethodFields,
    CartTaxLevelFields: exports.CartTaxLevelFields,
    CartTotalFields: exports.CartTotalFields,
    CartUnOrderableItemFields: exports.CartUnOrderableItemFields,
    CartVoucherFields: exports.CartVoucherFields,
    CategoryAttributeFields: exports.CategoryAttributeFields,
    CategoryFields: exports.CategoryFields,
    CategoryMinimalFields: exports.CategoryMinimalFields,
    CategoryResponseFields: exports.CategoryResponseFields,
    ClusterAttributeFields: exports.ClusterAttributeFields,
    ClusterConfigFields: exports.ClusterConfigFields,
    ClusterConfigResponseFields: exports.ClusterConfigResponseFields,
    ClusterConfigSettingFields: exports.ClusterConfigSettingFields,
    ClusterFields: exports.ClusterFields,
    ClusterGridFields: exports.ClusterGridFields,
    ClusterOptionFields: exports.ClusterOptionFields,
    CompaniesResponseFields: exports.CompaniesResponseFields,
    CompanyAddressSearchFields: exports.CompanyAddressSearchFields,
    CompanyAttributeDescriptionSearchFields: exports.CompanyAttributeDescriptionSearchFields,
    CompanyAttributeFields: exports.CompanyAttributeFields,
    CompanyAttributeSearchFields: exports.CompanyAttributeSearchFields,
    CompanyAttributeValueSearchFields: exports.CompanyAttributeValueSearchFields,
    CompanyContactSearchFields: exports.CompanyContactSearchFields,
    CompanyDataFields: exports.CompanyDataFields,
    CompanyFields: exports.CompanyFields,
    CompanyListFields: exports.CompanyListFields,
    ContactAttributeFields: exports.ContactAttributeFields,
    ContactFields: exports.ContactFields,
    ContactListFields: exports.ContactListFields,
    ContactViewerFields: exports.ContactViewerFields,
    ContactsResponseFields: exports.ContactsResponseFields,
    CostPriceFields: exports.CostPriceFields,
    CostPriceResponseFields: exports.CostPriceResponseFields,
    CrossupsellFields: exports.CrossupsellFields,
    CrossupsellsResponseFields: exports.CrossupsellsResponseFields,
    CustomerAttributeFields: exports.CustomerAttributeFields,
    CustomerFields: exports.CustomerFields,
    CustomerListFields: exports.CustomerListFields,
    CustomerViewerFields: exports.CustomerViewerFields,
    CustomersResponseFields: exports.CustomersResponseFields,
    DiscountFields: exports.DiscountFields,
    DocumentTemplateFields: exports.DocumentTemplateFields,
    ExternalAddressFields: exports.ExternalAddressFields,
    FavoriteListFields: exports.FavoriteListFields,
    FavoriteListOnlyFields: exports.FavoriteListOnlyFields,
    FavoriteListsResponseFields: exports.FavoriteListsResponseFields,
    GCIPProviderDataFields: exports.GCIPProviderDataFields,
    GCIPUserFields: exports.GCIPUserFields,
    IBaseProductCartFields: exports.IBaseProductCartFields,
    IBaseProductFields: exports.IBaseProductFields,
    IBaseTemplateFields: exports.IBaseTemplateFields,
    ImageVariantFields: exports.ImageVariantFields,
    InventoryDeleteResponseFields: exports.InventoryDeleteResponseFields,
    InventoryFields: exports.InventoryFields,
    InventoryResponseFields: exports.InventoryResponseFields,
    LocalizedAttachmentFields: exports.LocalizedAttachmentFields,
    LocalizedDocumentFields: exports.LocalizedDocumentFields,
    LocalizedImageFields: exports.LocalizedImageFields,
    LocalizedStringArrayFields: exports.LocalizedStringArrayFields,
    LocalizedStringFields: exports.LocalizedStringFields,
    LocalizedTemplateContentFields: exports.LocalizedTemplateContentFields,
    LocalizedVideoFields: exports.LocalizedVideoFields,
    LoginFields: exports.LoginFields,
    LogoutFields: exports.LogoutFields,
    MagicTokenFields: exports.MagicTokenFields,
    MagicTokenResponseFields: exports.MagicTokenResponseFields,
    MediaAttachmentFields: exports.MediaAttachmentFields,
    MediaDocumentFields: exports.MediaDocumentFields,
    MediaFields: exports.MediaFields,
    MediaImageFields: exports.MediaImageFields,
    MediaVideoFields: exports.MediaVideoFields,
    OrderAddressFields: exports.OrderAddressFields,
    OrderDataFields: exports.OrderDataFields,
    OrderFields: exports.OrderFields,
    OrderItemFields: exports.OrderItemFields,
    OrderMediaFields: exports.OrderMediaFields,
    OrderPaymentDataFields: exports.OrderPaymentDataFields,
    OrderPostageDataFields: exports.OrderPostageDataFields,
    OrderResponseFields: exports.OrderResponseFields,
    OrderTotalTaxPercentageFields: exports.OrderTotalTaxPercentageFields,
    OrderTotalsFields: exports.OrderTotalsFields,
    OrderlistFields: exports.OrderlistFields,
    OrderlistsResponseFields: exports.OrderlistsResponseFields,
    PaginatedMediaAttachmentResponseFields: exports.PaginatedMediaAttachmentResponseFields,
    PaginatedMediaDocumentResponseFields: exports.PaginatedMediaDocumentResponseFields,
    PaginatedMediaImageResponseFields: exports.PaginatedMediaImageResponseFields,
    PaginatedMediaVideoResponseFields: exports.PaginatedMediaVideoResponseFields,
    PayMethodFields: exports.PayMethodFields,
    PayMethodsResponseFields: exports.PayMethodsResponseFields,
    PaymentFields: exports.PaymentFields,
    PaymentsResponseFields: exports.PaymentsResponseFields,
    PriceFields: exports.PriceFields,
    PriceResponseFields: exports.PriceResponseFields,
    PricesheetFields: exports.PricesheetFields,
    PricesheetResponseFields: exports.PricesheetResponseFields,
    ProductAttributeFields: exports.ProductAttributeFields,
    ProductCartFields: exports.ProductCartFields,
    ProductFields: exports.ProductFields,
    ProductGridFields: exports.ProductGridFields,
    ProductInventoryFields: exports.ProductInventoryFields,
    ProductMediaFields: exports.ProductMediaFields,
    ProductMediaImagesOnlyFields: exports.ProductMediaImagesOnlyFields,
    ProductOfferFields: exports.ProductOfferFields,
    ProductPriceFields: exports.ProductPriceFields,
    ProductsResponseFields: exports.ProductsResponseFields,
    PurchaseAuthorizationConfigFields: exports.PurchaseAuthorizationConfigFields,
    PurchaseAuthorizationConfigResponseFields: exports.PurchaseAuthorizationConfigResponseFields,
    RefreshTokenResponseFields: exports.RefreshTokenResponseFields,
    RegisterContactResponseFields: exports.RegisterContactResponseFields,
    RegisterCustomerResponseFields: exports.RegisterCustomerResponseFields,
    SendOrderConfirmResponseTypeFields: exports.SendOrderConfirmResponseTypeFields,
    ShipmentFields: exports.ShipmentFields,
    ShipmentItemFields: exports.ShipmentItemFields,
    ShipmentItemResponseFields: exports.ShipmentItemResponseFields,
    ShipmentResponseFields: exports.ShipmentResponseFields,
    SourceFields: exports.SourceFields,
    SparePartFields: exports.SparePartFields,
    SparePartsMachineFields: exports.SparePartsMachineFields,
    SparePartsMachineMediaFields: exports.SparePartsMachineMediaFields,
    SparePartsMachineMediaImagesOnlyFields: exports.SparePartsMachineMediaImagesOnlyFields,
    SparePartsMachineResponseFields: exports.SparePartsMachineResponseFields,
    SparePartsResponseFields: exports.SparePartsResponseFields,
    SurchargeFields: exports.SurchargeFields,
    SurchargeProductFields: exports.SurchargeProductFields,
    SurchargeProductResponseFields: exports.SurchargeProductResponseFields,
    SurchargesResponseFields: exports.SurchargesResponseFields,
    TaxFields: exports.TaxFields,
    TaxesResponseFields: exports.TaxesResponseFields,
    TrackAndTraceFields: exports.TrackAndTraceFields,
    TrackAndTraceResponseFields: exports.TrackAndTraceResponseFields,
    TransactionFields: exports.TransactionFields,
    UsersResponseFields: exports.UsersResponseFields,
    ValuesetFields: exports.ValuesetFields,
    ValuesetItemFields: exports.ValuesetItemFields,
    ValuesetItemResponseFields: exports.ValuesetItemResponseFields,
    ValuesetResponseFields: exports.ValuesetResponseFields,
    VerifyTokenFields: exports.VerifyTokenFields,
    WarehouseAddressFields: exports.WarehouseAddressFields,
    WarehouseFields: exports.WarehouseFields,
    WarehousesResponseFields: exports.WarehousesResponseFields,
    ZoneTaxCodeFields: exports.ZoneTaxCodeFields,
    ZoneTaxCodeResponseFields: exports.ZoneTaxCodeResponseFields
};
exports.default = exports.fragments;
//# sourceMappingURL=fragments.js.map