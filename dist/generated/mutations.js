"use strict";
/**
 * Generated GraphQL mutations bundle
 * This file is auto-generated. Do not edit manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryAddProductsClusters = exports.cartUpdateItem = exports.cartUpdateAddress = exports.cartUpdate = exports.cartStart = exports.cartSetUser = exports.cartSetCustomer = exports.cartSetContact = exports.cartRequestPurchaseAuthorization = exports.cartRemoveActionCode = exports.cartProcess = exports.cartItemBulk = exports.cartDeleteItem = exports.cartDelete = exports.cartAddItem = exports.cartAddBundle = exports.cartAddActionCode = exports.cartAcceptPurchaseAuthorizationRequest = exports.carrierUpdate = exports.carrierCreate = exports.businessRuleUpdate = exports.businessRuleDecisionTableUpdate = exports.businessRuleDecisionTableSetCell = exports.businessRuleDecisionTableMoveRow = exports.businessRuleDecisionTableDeleteRow = exports.businessRuleDecisionTableDeleteColumn = exports.businessRuleDecisionTableAddRow = exports.businessRuleDecisionTableAddColumn = exports.businessRuleCreate = exports.bundleUpdate = exports.bundleCreate = exports.bundleAddItems = exports.bulkPricesCreate = exports.bulkPriceUpdate = exports.bulkPriceCsvImport = exports.bulkPriceCreate = exports.bulkCostPricesBulk = exports.bulkCostPriceUpdate = exports.bulkCostPriceCsvImport = exports.bulkCostPriceCreate = exports.authenticationCreate = exports.attributeDescriptionUpdate = exports.attributeDescriptionCsvImport = exports.attributeDescriptionCreate = exports.attributeCsvImport = exports.adminUserUpdate = exports.adminUserTenantDelete = exports.adminUserTenantCreate = exports.adminUserCreate = exports.addSurchargesToProduct = void 0;
exports.emailTemplateCreate = exports.emailTemplateAddAttachment = exports.documentTemplateUpdate = exports.documentTemplateRenderToPDF = exports.documentTemplateCreate = exports.discountUpdate = exports.discountCsvImport = exports.discountCreate = exports.customerUpdate = exports.customerRegister = exports.customerCsvImport = exports.customerCreateAccount = exports.customerCreate = exports.customerAddressUpdate = exports.customerAddressDelete = exports.customerAddressCreate = exports.crossupsellUpdate = exports.crossupsellCreate = exports.costPricesBulk = exports.costPriceUpdate = exports.costPriceCreate = exports.contactUpdate = exports.contactRemoveFromCompanies = exports.contactRegister = exports.contactCsvImport = exports.contactCreateAccount = exports.contactCreate = exports.contactAddToCompanies = exports.companyUpdate = exports.companyCsvImport = exports.companyCreate = exports.companyAddressUpdate = exports.companyAddressDelete = exports.companyAddressCreate = exports.clusterUpdate = exports.clusterUnassignProducts = exports.clusterProductUpdate = exports.clusterProductCreate = exports.clusterOptionUpdate = exports.clusterOptionCreate = exports.clusterCsvImport = exports.clusterCreate = exports.clusterConfigUpdateSetting = exports.clusterConfigCreate = exports.clusterConfigAddSetting = exports.clusterAssignProducts = exports.categoryUpdate = exports.categoryRemoveProductsClusters = exports.categoryCsvImport = exports.categoryCreate = void 0;
exports.orderSetStatus = exports.orderSendConfirmationEmail = exports.orderItemUpdate = exports.orderItemCreate = exports.orderCreate = exports.orderAddressUpdate = exports.mediaVideoUpdate = exports.mediaVideoDelete = exports.mediaVideoCsvImport = exports.mediaVideoCreate = exports.mediaImageUpdate = exports.mediaImageDelete = exports.mediaImageCsvImport = exports.mediaImageCreate = exports.mediaDocumentUpdate = exports.mediaDocumentDelete = exports.mediaDocumentCsvImport = exports.mediaDocumentCreate = exports.mediaAttachmentUpdate = exports.mediaAttachmentDelete = exports.mediaAttachmentCreate = exports.magicTokenUpdate = exports.magicTokenLogin = exports.magicTokenCreate = exports.machineUpsert = exports.machineCreate = exports.logout = exports.login = exports.inventoryUpdate = exports.inventoryDelete = exports.inventoryCsvImport = exports.inventoryCreate = exports.incentiveRuleSetOrderItemConditions = exports.incentiveRuleSetAction = exports.incentiveRuleCreate = exports.favoriteListUpdate = exports.favoriteListRemoveItems = exports.favoriteListDelete = exports.favoriteListCreate = exports.favoriteListClearItems = exports.favoriteListAddItems = exports.externalAddressUpdate = exports.externalAddressCreate = exports.exchangeRefreshToken = exports.eventToWebHookConfigUpdate = exports.eventToWebHookConfigCreate = exports.eventToEmailConfigUpdate = exports.eventToEmailConfigCreate = exports.emailTemplateUpdate = exports.emailTemplateRemoveAttachment = void 0;
exports.taxCreate = exports.surchargeUpdate = exports.surchargeDelete = exports.surchargeCreate = exports.startSession = exports.shipmentUpdate = exports.shipmentItemUpdate = exports.shipmentItemCreate = exports.shipmentCreate = exports.roleUpdate = exports.roleDefinitionUpdate = exports.roleDefinitionCreate = exports.roleCreate = exports.removeSurchargesFromProduct = exports.purchaseAuthorizationConfigUpdate = exports.purchaseAuthorizationConfigCreate = exports.publishPasswordResetEmailEvent = exports.publishEmailSendEvent = exports.publishEmailEvent = exports.productUpdate = exports.productCsvImport = exports.productCreate = exports.pricesheetUpdate = exports.pricesheetUnassign = exports.pricesheetCsvImport = exports.pricesheetCreate = exports.pricesheetAssign = exports.priceUpdate = exports.priceCsvImport = exports.priceCreate = exports.paymentUpdate = exports.paymentDelete = exports.paymentCreate = exports.payMethodUpdate = exports.payMethodCreate = exports.orderlistUpdate = exports.orderlistUnassignUsers = exports.orderlistUnassignCompanies = exports.orderlistRemoveItems = exports.orderlistCreate = exports.orderlistAssignUsers = exports.orderlistAssignCompanies = exports.orderlistAddItems = exports.orderUpdate = exports.orderStatusUpdate = exports.orderStatusSetUpdate = exports.orderStatusSetRemoveOrderStatuses = exports.orderStatusSetCreate = exports.orderStatusSetAddOrderStatuses = exports.orderStatusCreate = void 0;
exports.mutations = exports.zoneTaxCodesCreate = exports.zoneTaxCodeUpdate = exports.zoneTaxCodeCreate = exports.warehouseUpdate = exports.warehouseDelete = exports.warehouseCreate = exports.warehouseAddressUpdate = exports.warehouseAddressCreate = exports.verifyToken = exports.valuesetUpdate = exports.valuesetItemUpdate = exports.valuesetItemCreate = exports.valuesetCreate = exports.usergroupUpdate = exports.usergroupCreate = exports.userAddressUpdate = exports.userAddressDelete = exports.userAddressCreate = exports.trackAndTraceUpdate = exports.trackAndTraceCreate = exports.tenderUpdatePostage = exports.tenderUpdatePayment = exports.tenderUpdateItem = exports.tenderUpdateInvoiceUser = exports.tenderUpdateDiscount = exports.tenderUpdateAddress = exports.tenderUpdate = exports.tenderStart = exports.tenderProcess = exports.tenderDeleteItem = exports.tenderApplyIncentives = exports.tenderAddItems = exports.taxUpdate = void 0;
exports.addSurchargesToProduct = `mutation addSurchargesToProduct(\$input: AddSurchargesToProductInput!) {
  addSurchargesToProduct(input: \$input) {
    ...ConfirmationResponseFields
  }
}`;
exports.adminUserCreate = `mutation adminUserCreate(\$input: CreateUserDto!) {
  adminUserCreate(input: \$input) {
    ...AdminUserFields
  }
}`;
exports.adminUserTenantCreate = `mutation adminUserTenantCreate(\$input: CreateTenantDto!) {
  adminUserTenantCreate(input: \$input) {
    ...AdminUserTenantFields
  }
}`;
exports.adminUserTenantDelete = `mutation adminUserTenantDelete(\$id: Int!) {
  adminUserTenantDelete(id: \$id) {
    ...AdminUserTenantFields
  }
}`;
exports.adminUserUpdate = `mutation adminUserUpdate(\$email: String!, \$input: UpdateUserDto!) {
  adminUserUpdate(email: \$email, input: \$input) {
    ...AdminUserFields
  }
}`;
exports.attributeCsvImport = `mutation attributeCsvImport(\$input: AttributeCsvInput!) {
  attributeCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.attributeDescriptionCreate = `mutation attributeDescriptionCreate(\$input: AttributeDescriptionCreateInput!) {
  attributeDescriptionCreate(input: \$input) {
    ...AttributeDescriptionFields
  }
}`;
exports.attributeDescriptionCsvImport = `mutation attributeDescriptionCsvImport(\$input: AttributeDescriptionCsvInput!) {
  attributeDescriptionCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.attributeDescriptionUpdate = `mutation attributeDescriptionUpdate(\$id: String!, \$input: AttributeDescriptionUpdateInput!) {
  attributeDescriptionUpdate(id: \$id, input: \$input) {
    ...AttributeDescriptionFields
  }
}`;
exports.authenticationCreate = `mutation authenticationCreate(\$input: CreateAuthenticationInput!) {
  authenticationCreate(input: \$input) {
    ...LoginFields
  }
}`;
exports.bulkCostPriceCreate = `mutation bulkCostPriceCreate(\$input: BulkCostPriceCreateInput!) {
  bulkCostPriceCreate(input: \$input) {
    ...BulkCostPriceFields
  }
}`;
exports.bulkCostPriceCsvImport = `mutation bulkCostPriceCsvImport(\$input: BulkCostPriceCsvInput!) {
  bulkCostPriceCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.bulkCostPriceUpdate = `mutation bulkCostPriceUpdate(\$id: String!, \$input: BulkCostPriceUpdateInput!) {
  bulkCostPriceUpdate(id: \$id, input: \$input) {
    ...BulkCostPriceFields
  }
}`;
exports.bulkCostPricesBulk = `mutation bulkCostPricesBulk(\$input: [BulkCostPriceCreateInput!]!) {
  bulkCostPricesBulk(input: \$input) {
    ...BulkResponseDataFields
  }
}`;
exports.bulkPriceCreate = `mutation bulkPriceCreate(\$input: BulkPriceCreateInput!) {
  bulkPriceCreate(input: \$input) {
    ...BulkPriceFields
  }
}`;
exports.bulkPriceCsvImport = `mutation bulkPriceCsvImport(\$input: BulkPriceCsvInput!) {
  bulkPriceCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.bulkPriceUpdate = `mutation bulkPriceUpdate(\$id: String!, \$input: BulkPriceUpdateInput!) {
  bulkPriceUpdate(id: \$id, input: \$input) {
    ...BulkPriceFields
  }
}`;
exports.bulkPricesCreate = `mutation bulkPricesCreate(\$input: [BulkPriceCreateInput!]!) {
  bulkPricesCreate(input: \$input) {
    ...BulkResponseDataFields
  }
}`;
exports.bundleAddItems = `mutation bundleAddItems(\$id: String!, \$input: BundleAddItemsInput!) {
  bundleAddItems(id: \$id, input: \$input) {
    ...BundleItemFields
  }
}`;
exports.bundleCreate = `mutation bundleCreate(\$input: BundleCreateInput!) {
  bundleCreate(input: \$input) {
    ...BundleFields
  }
}`;
exports.bundleUpdate = `mutation bundleUpdate(\$id: String!, \$input: BundleUpdateInput!) {
  bundleUpdate(id: \$id, input: \$input) {
    ...BundleFields
  }
}`;
exports.businessRuleCreate = `mutation businessRuleCreate(\$input: BusinessRuleCreateInput!) {
  businessRuleCreate(input: \$input) {
    ...BusinessRuleFields
  }
}`;
exports.businessRuleDecisionTableAddColumn = `mutation businessRuleDecisionTableAddColumn(\$input: BusinessRuleDecisionTableAddColumnInput!) {
  businessRuleDecisionTableAddColumn(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;
exports.businessRuleDecisionTableAddRow = `mutation businessRuleDecisionTableAddRow(\$input: BusinessRuleDecisionTableSearchInput!) {
  businessRuleDecisionTableAddRow(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;
exports.businessRuleDecisionTableDeleteColumn = `mutation businessRuleDecisionTableDeleteColumn(\$input: BusinessRuleDecisionTableDeleteColumnInput!) {
  businessRuleDecisionTableDeleteColumn(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;
exports.businessRuleDecisionTableDeleteRow = `mutation businessRuleDecisionTableDeleteRow(\$input: BusinessRuleDecisionTableDeleteRowInput!) {
  businessRuleDecisionTableDeleteRow(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;
exports.businessRuleDecisionTableMoveRow = `mutation businessRuleDecisionTableMoveRow(\$input: BusinessRuleDecisionTableMoveRowInput!) {
  businessRuleDecisionTableMoveRow(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;
exports.businessRuleDecisionTableSetCell = `mutation businessRuleDecisionTableSetCell(\$input: BusinessRuleDecisionTableSetCellInput!) {
  businessRuleDecisionTableSetCell(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;
exports.businessRuleDecisionTableUpdate = `mutation businessRuleDecisionTableUpdate(\$input: BusinessRuleDecisionTableUpdateInput!) {
  businessRuleDecisionTableUpdate(input: \$input) {
    ...BusinessRuleDecisionTableFields
  }
}`;
exports.businessRuleUpdate = `mutation businessRuleUpdate(\$id: ID!, \$input: BusinessRuleUpdateInput!) {
  businessRuleUpdate(id: \$id, input: \$input) {
    ...BusinessRuleFields
  }
}`;
exports.carrierCreate = `mutation carrierCreate(\$input: CarrierCreateInput!) {
  carrierCreate(input: \$input) {
    ...CarrierFields
  }
}`;
exports.carrierUpdate = `mutation carrierUpdate(\$id: Int!, \$input: CarrierUpdateInput!) {
  carrierUpdate(id: \$id, input: \$input) {
    ...CarrierFields
  }
}`;
exports.cartAcceptPurchaseAuthorizationRequest = `mutation cartAcceptPurchaseAuthorizationRequest(
  \$id: String!
  \$input: CartAcceptPurchaseAuthorizationRequestInput
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartAcceptPurchaseAuthorizationRequest(id: \$id, input: \$input) {
    ...CartFields
  }
}`;
exports.cartAddActionCode = `mutation cartAddActionCode(
  \$id: String!
  \$input: CartActionCodeInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartAddActionCode(id: \$id, input: \$input) {
    ...CartFields
  }
}`;
exports.cartAddBundle = `mutation cartAddBundle(
  \$id: String!
  \$input: CartAddBundleInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartAddBundle(id: \$id, input: \$input) {
    ...CartFields
  }
}`;
exports.cartAddItem = `mutation cartAddItem(
  \$id: String!
  \$input: CartAddItemInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartAddItem(id: \$id, input: \$input) {
    ... CartFields
  }
}`;
exports.cartDelete = `mutation cartDelete(\$id: String!) {
  cartDelete(id: \$id)
}`;
exports.cartDeleteItem = `mutation cartDeleteItem(
  \$id: String!
  \$input: CartDeleteItemInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartDeleteItem(id: \$id, input: \$input) {
    ...CartFields
  }
}`;
exports.cartItemBulk = `mutation cartItemBulk(\$input: CartItemsBulkUpsertInput!) {
  cartItemBulk(input: \$input) {
    ...BulkResponseDataFields
  }
}`;
exports.cartProcess = `mutation cartProcess(\$id: String!, \$input: CartProcessInput!) {
  cartProcess(id: \$id, input: \$input) {
    cartOrderId
    cart {
      cartId
    }
  }
}`;
exports.cartRemoveActionCode = `mutation cartRemoveActionCode(
  \$id: String!
  \$input: CartActionCodeInput!
  \$language: String
  \$priceCalculateProductInput: PriceCalculateProductInput
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartRemoveActionCode(id: \$id, input: \$input) {
    ...CartFields
  }
}`;
exports.cartRequestPurchaseAuthorization = `mutation cartRequestPurchaseAuthorization(\$id: String!) {
  cartRequestPurchaseAuthorization(id: \$id) {
    cartId
  }
}`;
exports.cartSetContact = `mutation cartSetContact(\$id: String!, \$input: CartSetContactInput!) {
  cartSetContact(id: \$id, input: \$input) {
    ...CartFields
  }
}`;
exports.cartSetCustomer = `mutation cartSetCustomer(\$id: String!, \$input: CartSetCustomerInput!) {
  cartSetCustomer(id: \$id, input: \$input) {
    ...CartFields
  }
}`;
exports.cartSetUser = `mutation cartSetUser(\$id: String!, \$input: CartSetUserInput!) {
  cartSetUser(id: \$id, input: \$input) {
    ...CartFields
  }
}`;
exports.cartStart = `mutation cartStart(
  \$input: CartStartInput
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartStart(input: \$input) {
    ...CartFields
  }
}`;
exports.cartUpdate = `mutation cartUpdate(
  \$id: String!
  \$input: CartUpdateInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartUpdate(id: \$id, input: \$input) {
    ...CartFields
  }
}`;
exports.cartUpdateAddress = `mutation cartUpdateAddress(
  \$id: String! 
  \$input: CartUpdateAddressInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartUpdateAddress(id: \$id, input: \$input) {
    ...CartFields
  }
}`;
exports.cartUpdateItem = `mutation cartUpdateItem(
  \$id: String!
  \$itemId: String!
  \$input: CartUpdateItemInput!
  \$language: String
  \$imageSearchFilters: MediaImageProductSearchInput
  \$imageVariantFilters: TransformationsInput!) {
  cartUpdateItem(id: \$id, itemId: \$itemId, input: \$input) {
    ...CartFields
  }
}`;
exports.categoryAddProductsClusters = `mutation categoryAddProductsClusters(\$id: Int!, \$input: CategoryAddProductsClustersInput!) {
  categoryAddProductsClusters(id: \$id, input: \$input) {
    ...CategoryAddProductsClustersResponseFields
  }
}`;
exports.categoryCreate = `mutation categoryCreate(\$input: CreateCategoryInput!) {
  categoryCreate(input: \$input) {
    ...CategoryFields
  }
}`;
exports.categoryCsvImport = `mutation categoryCsvImport(\$input: CategoryCsvInput!) {
  categoryCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.categoryRemoveProductsClusters = `mutation categoryRemoveProductsClusters(\$id: Int!, \$input: CategoryRemoveProductsClustersInput!) {
  categoryRemoveProductsClusters(id: \$id, input: \$input) {
    ...CategoryRemoveProductsClustersResponseFields
  }
}`;
exports.categoryUpdate = `mutation categoryUpdate(\$categoryId: Float!, \$input: UpdateCategoryInput!) {
  categoryUpdate(categoryId: \$categoryId, input: \$input) {
    ...CategoryFields
  }
}`;
exports.clusterAssignProducts = `mutation clusterAssignProducts(\$clusterId: Int!, \$input: ClusterAssignProductsInput!) {
  clusterAssignProducts(clusterId: \$clusterId, input: \$input) {
    ...ClusterAssignProductsResponseFields
  }
}`;
exports.clusterConfigAddSetting = `mutation clusterConfigAddSetting(\$clusterConfigId: Int!, \$input: ClusterConfigSettingInput!) {
  clusterConfigAddSetting(clusterConfigId: \$clusterConfigId, input: \$input) {
    ...ClusterConfigSettingResponseFields
  }
}`;
exports.clusterConfigCreate = `mutation clusterConfigCreate(\$input: ClusterConfigCreateInput!) {
  clusterConfigCreate(input: \$input) {
    ...ClusterConfigResponseFields
  }
}`;
exports.clusterConfigUpdateSetting = `mutation clusterConfigUpdateSetting(\$clusterConfigId: Int!, \$settingId: Int!, \$input: ClusterConfigSettingUpdateInput!) {
  clusterConfigUpdateSetting(clusterConfigId: \$clusterConfigId, settingId: \$settingId, input: \$input) {
    ...UpdateClusterConfigSettingResponseFields
  }
}`;
exports.clusterCreate = `mutation clusterCreate(\$input: ClusterCreateInput!) {
  clusterCreate(input: \$input) {
    ...ClusterFields
  }
}`;
exports.clusterCsvImport = `mutation clusterCsvImport(\$input: ClusterCsvInput!) {
  clusterCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.clusterOptionCreate = `mutation clusterOptionCreate(\$clusterId: Int!, \$input: ClusterOptionCreateInput!) {
  clusterOptionCreate(clusterId: \$clusterId, input: \$input) {
    ...ClusterOptionFields
  }
}`;
exports.clusterOptionUpdate = `mutation clusterOptionUpdate(\$clusterId: Int!, \$optionId: Int!, \$input: ClusterOptionUpdateInput!) {
  clusterOptionUpdate(clusterId: \$clusterId, optionId: \$optionId, input: \$input) {
    ...ClusterOptionFields
  }
}`;
exports.clusterProductCreate = `mutation clusterProductCreate(\$id: Int!, \$input: CreateProductInput!) {
  clusterProductCreate(id: \$id, input: \$input) {
    ...ProductFields
  }
}`;
exports.clusterProductUpdate = `mutation clusterProductUpdate(\$id: Int!, \$productId: Int!, \$input: UpdateProductInput!) {
  clusterProductUpdate(id: \$id, productId: \$productId, input: \$input) {
    ...ProductFields
  }
}`;
exports.clusterUnassignProducts = `mutation clusterUnassignProducts(\$clusterId: Int!, \$input: ClusterUnassignProductsInput!) {
  clusterUnassignProducts(clusterId: \$clusterId, input: \$input) {
    ...ClusterUnassignProductsResponseFields
  }
}`;
exports.clusterUpdate = `mutation clusterUpdate(\$id: Int!, \$input: ClusterUpdateInput!) {
  clusterUpdate(id: \$id, input: \$input) {
    ...ClusterFields
  }
}`;
exports.companyAddressCreate = `mutation companyAddressCreate(\$input: CompanyAddressCreateInput!) {
  companyAddressCreate(input: \$input) {
    ...AddressFields
  }
}`;
exports.companyAddressDelete = `mutation companyAddressDelete(\$input: CompanyAddressDeleteInput!) {
  companyAddressDelete(input: \$input)
}`;
exports.companyAddressUpdate = `mutation companyAddressUpdate(\$input: CompanyAddressUpdateInput!) {
  companyAddressUpdate(input: \$input) {
    ...AddressFields
  }
}`;
exports.companyCreate = `mutation companyCreate(\$input: CreateCompanyInput!) {
  companyCreate(input: \$input) {
    ...CompanyFields
  }
}`;
exports.companyCsvImport = `mutation companyCsvImport(\$input: CompanyCsvInput!) {
  companyCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.companyUpdate = `mutation companyUpdate(\$id: Int!, \$input: UpdateCompanyInput!) {
  companyUpdate(id: \$id, input: \$input) {
    ...CompanyFields
  }
}`;
exports.contactAddToCompanies = `mutation contactAddToCompanies(\$id: Int!, \$input: ContactAddToCompaniesInput!) {
  contactAddToCompanies(id: \$id, input: \$input) {
    ...ContactAddToCompaniesResponseFields
  }
}`;
exports.contactCreate = `mutation contactCreate(\$input: CreateContactInput!) {
  contactCreate(input: \$input) {
    ...ContactFields
  }
}`;
exports.contactCreateAccount = `mutation contactCreateAccount(\$id: Int!, \$input: CreateAccountInput) {
  contactCreateAccount(id: \$id, input: \$input) {
    ...RegisterContactResponseFields
  }
}`;
exports.contactCsvImport = `mutation contactCsvImport(\$input: ContactCsvInput!) {
  contactCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.contactRegister = `mutation contactRegister(\$input: RegisterContactInput!) {
  contactRegister(input: \$input) {
    ...RegisterContactResponseFields
  }
}`;
exports.contactRemoveFromCompanies = `mutation contactRemoveFromCompanies(\$id: Int!, \$input: ContactRemoveFromCompaniesInput!) {
  contactRemoveFromCompanies(id: \$id, input: \$input) {
    ...ContactRemoveFromCompaniesResponseFields
  }
}`;
exports.contactUpdate = `mutation contactUpdate(\$id: Int!, \$input: UpdateContactInput!) {
  contactUpdate(id: \$id, input: \$input) {
    ...ContactFields
  }
}`;
exports.costPriceCreate = `mutation costPriceCreate(\$input: CostPriceCreateInput!) {
  costPriceCreate(input: \$input) {
    ...CostPriceFields
  }
}`;
exports.costPriceUpdate = `mutation costPriceUpdate(\$id: String!, \$input: CostPriceUpdateInput!) {
  costPriceUpdate(id: \$id, input: \$input) {
    ...CostPriceFields
  }
}`;
exports.costPricesBulk = `mutation costPricesBulk(\$input: [CostPriceCreateInput!]!) {
  costPricesBulk(input: \$input) {
    ...BulkResponseDataFields
  }
}`;
exports.crossupsellCreate = `mutation crossupsellCreate(\$input: CrossupsellCreateInput!) {
  crossupsellCreate(input: \$input) {
    ...CrossupsellFields
  }
}`;
exports.crossupsellUpdate = `mutation crossupsellUpdate(\$id: String!, \$input: CrossupsellUpdateInput!) {
  crossupsellUpdate(id: \$id, input: \$input) {
    ...CrossupsellFields
  }
}`;
exports.customerAddressCreate = `mutation customerAddressCreate(\$input: CustomerAddressCreateInput!) {
  customerAddressCreate(input: \$input) {
    ...AddressFields
  }
}`;
exports.customerAddressDelete = `mutation customerAddressDelete(\$input: CustomerAddressDeleteInput!) {
  customerAddressDelete(input: \$input)
}`;
exports.customerAddressUpdate = `mutation customerAddressUpdate(\$input: CustomerAddressUpdateInput!) {
  customerAddressUpdate(input: \$input) {
    ...AddressFields
  }
}`;
exports.customerCreate = `mutation customerCreate(\$input: CustomerInput!) {
  customerCreate(input: \$input) {
    ...CustomerFields
  }
}`;
exports.customerCreateAccount = `mutation customerCreateAccount(\$id: Int!, \$input: CreateAccountInput) {
  customerCreateAccount(id: \$id, input: \$input) {
    ...RegisterCustomerResponseFields
  }
}`;
exports.customerCsvImport = `mutation customerCsvImport(\$input: CustomerCsvInput!) {
  customerCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.customerRegister = `mutation customerRegister(\$input: RegisterCustomerInput!) {
  customerRegister(input: \$input) {
    ...RegisterCustomerResponseFields
  }
}`;
exports.customerUpdate = `mutation customerUpdate(\$id: Int!, \$input: UpdateCustomerInput!) {
  customerUpdate(id: \$id, input: \$input) {
    ...CustomerFields
  }
}`;
exports.discountCreate = `mutation discountCreate(\$input: DiscountCreateInput!) {
  discountCreate(input: \$input) {
    ...DiscountFields
  }
}`;
exports.discountCsvImport = `mutation discountCsvImport(\$input: DiscountCsvInput!) {
  discountCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.discountUpdate = `mutation discountUpdate(\$id: String!, \$input: DiscountUpdateInput!) {
  discountUpdate(id: \$id, input: \$input) {
    ...DiscountFields
  }
}`;
exports.documentTemplateCreate = `mutation documentTemplateCreate(\$input: DocumentTemplateCreateInput!) {
  documentTemplateCreate(input: \$input) {
    ...DocumentTemplateFields
  }
}`;
exports.documentTemplateRenderToPDF = `mutation documentTemplateRenderToPDF(\$id: String!, \$input: TemplateRenderInput!) {
  documentTemplateRenderToPDF(id: \$id, input: \$input) {
    ...Base64FileFields
  }
}`;
exports.documentTemplateUpdate = `mutation documentTemplateUpdate(\$id: String!, \$input: DocumentTemplateUpdateInput!) {
  documentTemplateUpdate(id: \$id, input: \$input) {
    ...DocumentTemplateFields
  }
}`;
exports.emailTemplateAddAttachment = `mutation emailTemplateAddAttachment(\$id: String!, \$documentTemplateId: String!) {
  emailTemplateAddAttachment(id: \$id, documentTemplateId: \$documentTemplateId) {
    ...EmailTemplateFields
  }
}`;
exports.emailTemplateCreate = `mutation emailTemplateCreate(\$input: EmailTemplateCreateInput!) {
  emailTemplateCreate(input: \$input) {
    ...EmailTemplateFields
  }
}`;
exports.emailTemplateRemoveAttachment = `mutation emailTemplateRemoveAttachment(\$id: String!, \$documentTemplateId: String!) {
  emailTemplateRemoveAttachment(id: \$id, documentTemplateId: \$documentTemplateId) {
    ...EmailTemplateFields
  }
}`;
exports.emailTemplateUpdate = `mutation emailTemplateUpdate(\$id: String!, \$input: EmailTemplateUpdateInput!) {
  emailTemplateUpdate(id: \$id, input: \$input) {
    ...EmailTemplateFields
  }
}`;
exports.eventToEmailConfigCreate = `mutation eventToEmailConfigCreate(\$input: EventToEmailConfigCreateInput!) {
  eventToEmailConfigCreate(input: \$input) {
    ...EventToEmailConfigFields
  }
}`;
exports.eventToEmailConfigUpdate = `mutation eventToEmailConfigUpdate(\$id: String!, \$input: EventToEmailConfigUpdateInput!) {
  eventToEmailConfigUpdate(id: \$id, input: \$input) {
    ...EventToEmailConfigFields
  }
}`;
exports.eventToWebHookConfigCreate = `mutation eventToWebHookConfigCreate(\$input: EventToWebHookConfigCreateInput!) {
  eventToWebHookConfigCreate(input: \$input) {
    ...EventToWebHookConfigFields
  }
}`;
exports.eventToWebHookConfigUpdate = `mutation eventToWebHookConfigUpdate(\$id: String!, \$input: EventToWebHookConfigUpdateInput!) {
  eventToWebHookConfigUpdate(id: \$id, input: \$input) {
    ...EventToWebHookConfigFields
  }
}`;
exports.exchangeRefreshToken = `mutation exchangeRefreshToken(\$input: ExchangeRefreshTokenInput!) {
  exchangeRefreshToken(input: \$input) {
    ...RefreshTokenResponseFields
  }
}`;
exports.externalAddressCreate = `mutation externalAddressCreate(\$input: ExternalAddressCreateInput!) {
  externalAddressCreate(input: \$input) {
    ...ExternalAddressFields
  }
}`;
exports.externalAddressUpdate = `mutation externalAddressUpdate(\$input: ExternalAddressUpdateInput!) {
  externalAddressUpdate(input: \$input) {
    ...ExternalAddressFields
  }
}`;
exports.favoriteListAddItems = `mutation favoriteListAddItems(\$id: String!, \$input: FavoriteListsItemsInput!) {
  favoriteListAddItems(id: \$id, input: \$input) {
    ...FavoriteListFields
  }
}`;
exports.favoriteListClearItems = `mutation favoriteListClearItems(\$id: String!, \$products: Boolean, \$clusters: Boolean) {
  favoriteListClearItems(id: \$id, products: \$products, clusters: \$clusters) {
    ...FavoriteListFields
  }
}`;
exports.favoriteListCreate = `mutation favoriteListCreate(\$input: FavoriteListsCreateInput!) {
  favoriteListCreate(input: \$input) {
    ...FavoriteListOnlyFields
  }
}`;
exports.favoriteListDelete = `mutation favoriteListDelete(\$id: String!) {
  favoriteListDelete(id: \$id)
}`;
exports.favoriteListRemoveItems = `mutation favoriteListRemoveItems(\$id: String!, \$input: FavoriteListsItemsInput!) {
  favoriteListRemoveItems(id: \$id, input: \$input) {
    ...FavoriteListFields
  }
}`;
exports.favoriteListUpdate = `mutation favoriteListUpdate(\$id: String!, \$input: FavoriteListsUpdateInput!) {
  favoriteListUpdate(id: \$id, input: \$input) {
    ...FavoriteListOnlyFields
  }
}`;
exports.incentiveRuleCreate = `mutation incentiveRuleCreate(\$input: BusinessRuleCreateInput!) {
  incentiveRuleCreate(input: \$input) {
    ...BusinessRuleFields
  }
}`;
exports.incentiveRuleSetAction = `mutation incentiveRuleSetAction(\$input: IncentiveRuleSetActionInput!) {
  incentiveRuleSetAction(input: \$input) {
    ...BusinessRuleFields
  }
}`;
exports.incentiveRuleSetOrderItemConditions = `mutation incentiveRuleSetOrderItemConditions(\$input: IncentiveRuleOrderItemSetCellInput!) {
  incentiveRuleSetOrderItemConditions(input: \$input) {
    ...BusinessRuleFields
  }
}`;
exports.inventoryCreate = `mutation inventoryCreate(\$input: CreateInventoryInput!) {
  inventoryCreate(input: \$input) {
    ...InventoryResponseFields
  }
}`;
exports.inventoryCsvImport = `mutation inventoryCsvImport(\$input: InventoryCsvInput!) {
  inventoryCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.inventoryDelete = `mutation inventoryDelete(\$id: Int!) {
  inventoryDelete(id: \$id) {
    ...InventoryDeleteResponseFields
  }
}`;
exports.inventoryUpdate = `mutation inventoryUpdate(\$id: Int!, \$input: UpdateInventoryInput!) {
  inventoryUpdate(id: \$id, input: \$input) {
    ...InventoryResponseFields
  }
}`;
exports.login = `mutation login(\$input: LoginInput!) {
  login(input: \$input) {
    ...LoginFields
  }
}`;
exports.logout = `mutation logout {
  logout {
    ...LogoutFields
  }
}`;
exports.machineCreate = `mutation machineCreate(\$input: CreateSparePartsMachineInput!) {
  machineCreate(input: \$input) {
    ...SparePartsMachineFields
  }
}`;
exports.machineUpsert = `mutation machineUpsert(\$input: UpsertSparePartsMachineInput!) {
  machineUpsert(input: \$input) {
    ...SparePartsMachineFields
  }
}`;
exports.magicTokenCreate = `mutation magicTokenCreate(\$input: MagicTokenCreateInput!) {
  magicTokenCreate(input: \$input) {
    ...MagicTokenFields
  }
}`;
exports.magicTokenLogin = `mutation magicTokenLogin(\$id: String!) {
  magicTokenLogin(id: \$id) {
    ...LoginFields
  }
}`;
exports.magicTokenUpdate = `mutation magicTokenUpdate(\$id: String!, \$input: MagicTokenUpdateInput!) {
  magicTokenUpdate(id: \$id, input: \$input) {
    ...MagicTokenFields
  }
}`;
exports.mediaAttachmentCreate = `mutation mediaAttachmentCreate(\$input: MediaAttachmentInput!) {
  mediaAttachmentCreate(input: \$input) {
    ...MediaAttachmentFields
  }
}`;
exports.mediaAttachmentDelete = `mutation mediaAttachmentDelete(\$id: String!) {
  mediaAttachmentDelete(id: \$id) {
    ...DeleteMediaAttachmentResponseFields
  }
}`;
exports.mediaAttachmentUpdate = `mutation mediaAttachmentUpdate(\$id: String!, \$input: UpdateMediaAttachmentInput!) {
  mediaAttachmentUpdate(id: \$id, input: \$input) {
    ...MediaAttachmentFields
  }
}`;
exports.mediaDocumentCreate = `mutation mediaDocumentCreate(\$input: MediaDocumentInput!) {
  mediaDocumentCreate(input: \$input) {
    ...MediaDocumentFields
  }
}`;
exports.mediaDocumentCsvImport = `mutation mediaDocumentCsvImport(\$input: DocumentCsvInput!) {
  mediaDocumentCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.mediaDocumentDelete = `mutation mediaDocumentDelete(\$mediaId: String!) {
  mediaDocumentDelete(mediaId: \$mediaId) {
    ...DeleteMediaDocumentResponseFields
  }
}`;
exports.mediaDocumentUpdate = `mutation mediaDocumentUpdate(\$input: UpdateMediaDocumentInput!) {
  mediaDocumentUpdate(input: \$input) {
    ...MediaDocumentFields
  }
}`;
exports.mediaImageCreate = `mutation mediaImageCreate(\$input: MediaImageInput!) {
  mediaImageCreate(input: \$input) {
    ...MediaImageFields
  }
}`;
exports.mediaImageCsvImport = `mutation mediaImageCsvImport(\$input: ImageCsvInput!) {
  mediaImageCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.mediaImageDelete = `mutation mediaImageDelete(\$mediaId: String!) {
  mediaImageDelete(mediaId: \$mediaId) {
    ...DeleteMediaImageResponseFields
  }
}`;
exports.mediaImageUpdate = `mutation mediaImageUpdate(\$input: UpdateMediaImageInput!) {
  mediaImageUpdate(input: \$input) {
    ...MediaImageFields
  }
}`;
exports.mediaVideoCreate = `mutation mediaVideoCreate(\$input: MediaVideoInput!) {
  mediaVideoCreate(input: \$input) {
    ...MediaVideoFields
  }
}`;
exports.mediaVideoCsvImport = `mutation mediaVideoCsvImport(\$input: VideoCsvInput!) {
  mediaVideoCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.mediaVideoDelete = `mutation mediaVideoDelete(\$mediaId: String!) {
  mediaVideoDelete(mediaId: \$mediaId) {
    ...DeleteMediaVideoResponseFields
  }
}`;
exports.mediaVideoUpdate = `mutation mediaVideoUpdate(\$input: UpdateMediaVideoInput!) {
  mediaVideoUpdate(input: \$input) {
    ...MediaVideoFields
  }
}`;
exports.orderAddressUpdate = `mutation orderAddressUpdate(\$id: Int!, \$orderId: Int!, \$input: OrderAddressUpdateInput!) {
  orderAddressUpdate(id: \$id, orderId: \$orderId, input: \$input) {
    ...OrderAddressFields
  }
}`;
exports.orderCreate = `mutation orderCreate(\$order: OrderCreateInput!) {
  orderCreate(order: \$order) {
    ...OrderFields
  }
}`;
exports.orderItemCreate = `mutation orderItemCreate(\$orderId: Int!, \$orderItem: OrderItemCreateInput!) {
  orderItemCreate(orderId: \$orderId, orderItem: \$orderItem) {
    ...OrderItemFields
  }
}`;
exports.orderItemUpdate = `mutation orderItemUpdate(\$orderId: Int!, \$orderItem: OrderItemUpdateInput!) {
  orderItemUpdate(orderId: \$orderId, orderItem: \$orderItem) {
    ...OrderItemFields
  }
}`;
exports.orderSendConfirmationEmail = `mutation orderSendConfirmationEmail(\$orderId: Int!, \$attachments: [Base64FileInput!]) {
  orderSendConfirmationEmail(orderId: \$orderId, attachments: \$attachments) {
    ...SendOrderConfirmResponseTypeFields
  }
}`;
exports.orderSetStatus = `mutation orderSetStatus(\$input: OrderSetStatusInput!) {
  orderSetStatus(input: \$input) {
    id
  }
}`;
exports.orderStatusCreate = `mutation orderStatusCreate(\$input: CreateOrderStatusInput!) {
  orderStatusCreate(input: \$input) {
    ...OrderStatusFields
  }
}`;
exports.orderStatusSetAddOrderStatuses = `mutation orderStatusSetAddOrderStatuses(\$id: Int!, \$input: AddOrderStatusesToOrderStatusSetInput!) {
  orderStatusSetAddOrderStatuses(id: \$id, input: \$input) {
    ...OrderStatusSetFields
  }
}`;
exports.orderStatusSetCreate = `mutation orderStatusSetCreate(\$input: CreateOrderStatusSetInput!) {
  orderStatusSetCreate(input: \$input) {
    ...OrderStatusSetFields
  }
}`;
exports.orderStatusSetRemoveOrderStatuses = `mutation orderStatusSetRemoveOrderStatuses(\$id: Int!, \$input: RemoveOrderStatusesFromOrderStatusSetInput!) {
  orderStatusSetRemoveOrderStatuses(id: \$id, input: \$input) {
    ...OrderStatusSetFields
  }
}`;
exports.orderStatusSetUpdate = `mutation orderStatusSetUpdate(\$id: Int!, \$input: UpdateOrderStatusSetInput!) {
  orderStatusSetUpdate(id: \$id, input: \$input) {
    ...OrderStatusSetFields
  }
}`;
exports.orderStatusUpdate = `mutation orderStatusUpdate(\$id: Int!, \$input: UpdateOrderStatusInput!) {
  orderStatusUpdate(id: \$id, input: \$input) {
    ...OrderStatusFields
  }
}`;
exports.orderUpdate = `mutation orderUpdate(\$orderId: Int!, \$order: OrderUpdateInput!) {
  orderUpdate(orderId: \$orderId, order: \$order) {
    ...OrderFields
  }
}`;
exports.orderlistAddItems = `mutation orderlistAddItems(\$id: Int!, \$input: OrderlistItemsInput!) {
  orderlistAddItems(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;
exports.orderlistAssignCompanies = `mutation orderlistAssignCompanies(\$id: Int!, \$input: OrderlistCompaniesInput!) {
  orderlistAssignCompanies(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;
exports.orderlistAssignUsers = `mutation orderlistAssignUsers(\$id: Int!, \$input: OrderlistUsersInput!) {
  orderlistAssignUsers(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;
exports.orderlistCreate = `mutation orderlistCreate(\$input: OrderlistCreateInput!) {
  orderlistCreate(input: \$input) {
    ...OrderlistFields
  }
}`;
exports.orderlistRemoveItems = `mutation orderlistRemoveItems(\$id: Int!, \$input: OrderlistItemsInput!) {
  orderlistRemoveItems(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;
exports.orderlistUnassignCompanies = `mutation orderlistUnassignCompanies(\$id: Int!, \$input: OrderlistCompaniesInput!) {
  orderlistUnassignCompanies(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;
exports.orderlistUnassignUsers = `mutation orderlistUnassignUsers(\$id: Int!, \$input: OrderlistUsersInput!) {
  orderlistUnassignUsers(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;
exports.orderlistUpdate = `mutation orderlistUpdate(\$id: Int!, \$input: OrderlistUpdateInput!) {
  orderlistUpdate(id: \$id, input: \$input) {
    ...OrderlistFields
  }
}`;
exports.payMethodCreate = `mutation payMethodCreate(\$input: PayMethodCreateInput!) {
  payMethodCreate(input: \$input) {
    ...PayMethodFields
  }
}`;
exports.payMethodUpdate = `mutation payMethodUpdate(\$id: Int!, \$input: PayMethodUpdateInput!) {
  payMethodUpdate(id: \$id, input: \$input) {
    ...PayMethodFields
  }
}`;
exports.paymentCreate = `mutation paymentCreate(\$input: CreatePaymentInput!) {
  paymentCreate(input: \$input) {
    ...PaymentFields
  }
}`;
exports.paymentDelete = `mutation paymentDelete(\$searchBy: SearchByInput!) {
  paymentDelete(searchBy: \$searchBy) {
    ...PaymentFields
  }
}`;
exports.paymentUpdate = `mutation paymentUpdate(\$searchBy: SearchByInput!, \$input: UpdatePaymentInput!) {
  paymentUpdate(searchBy: \$searchBy, input: \$input) {
    ...PaymentFields
  }
}`;
exports.priceCreate = `mutation priceCreate(\$input: PriceCreateInput!) {
  priceCreate(input: \$input) {
    id
    productId
  }
}`;
exports.priceCsvImport = `mutation priceCsvImport(\$input: PriceCsvInput!) {
  priceCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.priceUpdate = `mutation priceUpdate(\$id: String!, \$input: PriceUpdateInput!) {
  priceUpdate(id: \$id, input: \$input) {
    ...PriceFields
  }
}`;
exports.pricesheetAssign = `mutation pricesheetAssign(\$id: String!, \$input: PricesheetAssignInput!) {
  pricesheetAssign(id: \$id, input: \$input) {
    ...PricesheetFields
  }
}`;
exports.pricesheetCreate = `mutation pricesheetCreate(\$input: PricesheetCreateInput!) {
  pricesheetCreate(input: \$input) {
    ...PricesheetFields
  }
}`;
exports.pricesheetCsvImport = `mutation pricesheetCsvImport(\$input: PricesheetCsvInput!) {
  pricesheetCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.pricesheetUnassign = `mutation pricesheetUnassign(\$id: String!, \$input: PricesheetUnassignInput!) {
  pricesheetUnassign(id: \$id, input: \$input) {
    ...PricesheetFields
  }
}`;
exports.pricesheetUpdate = `mutation pricesheetUpdate(\$id: String!, \$input: PricesheetUpdateInput!) {
  pricesheetUpdate(id: \$id, input: \$input) {
    ...PricesheetFields
  }
}`;
exports.productCreate = `mutation productCreate(\$input: CreateProductInput!) {
  productCreate(input: \$input) {
    productId
  }
}`;
exports.productCsvImport = `mutation productCsvImport(\$input: ProductCsvInput!) {
  productCsvImport(input: \$input) {
    ...CsvImportResponseFields
  }
}`;
exports.productUpdate = `mutation productUpdate(\$productId: Int!, \$input: UpdateProductInput!) {
  productUpdate(productId: \$productId, input: \$input) {
    ...ProductFields
  }
}`;
exports.publishEmailEvent = `mutation publishEmailEvent(\$input: EmailEventInput!) {
  publishEmailEvent(input: \$input) {
    ...PublishEmailEventResponseFields
  }
}`;
exports.publishEmailSendEvent = `mutation publishEmailSendEvent(\$input: EmailSendEventInput!) {
  publishEmailSendEvent(input: \$input) {
    ...PublishEmailEventResponseFields
  }
}`;
exports.publishPasswordResetEmailEvent = `mutation publishPasswordResetEmailEvent(\$input: PasswordResetLinkEmailInput!) {
  publishPasswordResetEmailEvent(input: \$input) {
    ...PublishEmailEventResponseFields
  }
}`;
exports.purchaseAuthorizationConfigCreate = `mutation purchaseAuthorizationConfigCreate(\$input: PurchaseAuthorizationConfigCreateInput) {
  purchaseAuthorizationConfigCreate(input: \$input) {
    ...PurchaseAuthorizationConfigFields
  }
}`;
exports.purchaseAuthorizationConfigUpdate = `mutation purchaseAuthorizationConfigUpdate(\$id: String!, \$input: PurchaseAuthorizationConfigUpdateInput) {
  purchaseAuthorizationConfigUpdate(id: \$id, input: \$input) {
    ...PurchaseAuthorizationConfigFields
  }
}`;
exports.removeSurchargesFromProduct = `mutation removeSurchargesFromProduct(\$input: RemoveSurchargesFromProductInput!) {
  removeSurchargesFromProduct(input: \$input) {
    ...ConfirmationResponseFields
  }
}`;
exports.roleCreate = `mutation roleCreate(\$input: RoleCreateInput!) {
  roleCreate(input: \$input) {
    ...RoleFields
  }
}`;
exports.roleDefinitionCreate = `mutation roleDefinitionCreate(\$input: RoleDefinitionCreateInput!) {
  roleDefinitionCreate(input: \$input) {
    ...RoleDefinitionFields
  }
}`;
exports.roleDefinitionUpdate = `mutation roleDefinitionUpdate(\$id: ID!, \$input: RoleDefinitionUpdateInput!) {
  roleDefinitionUpdate(id: \$id, input: \$input) {
    ...RoleDefinitionFields
  }
}`;
exports.roleUpdate = `mutation roleUpdate(\$id: ID!, \$input: RoleUpdateInput!) {
  roleUpdate(id: \$id, input: \$input) {
    ...RoleFields
  }
}`;
exports.shipmentCreate = `mutation shipmentCreate(\$input: ShipmentCreateInput!) {
  shipmentCreate(input: \$input) {
    ...ShipmentFields
  }
}`;
exports.shipmentItemCreate = `mutation shipmentItemCreate(\$input: ShipmentItemCreateInput!) {
  shipmentItemCreate(input: \$input) {
    ...ShipmentItemFields
  }
}`;
exports.shipmentItemUpdate = `mutation shipmentItemUpdate(\$id: String!, \$input: ShipmentItemUpdateInput!) {
  shipmentItemUpdate(id: \$id, input: \$input) {
    ...ShipmentItemFields
  }
}`;
exports.shipmentUpdate = `mutation shipmentUpdate(\$id: String!, \$input: ShipmentUpdateInput!) {
  shipmentUpdate(id: \$id, input: \$input) {
    ...ShipmentFields
  }
}`;
exports.startSession = `mutation startSession(\$siteId: Int) {
  startSession(siteId: \$siteId) {
    ...LoginFields
  }
}`;
exports.surchargeCreate = `mutation surchargeCreate(\$input: CreateSurchargeInput!) {
  surchargeCreate(input: \$input) {
    ...SurchargeFields
  }
}`;
exports.surchargeDelete = `mutation surchargeDelete(\$id: String!) {
  surchargeDelete(id: \$id) {
    ...SurchargeFields
  }
}`;
exports.surchargeUpdate = `mutation surchargeUpdate(\$id: String!, \$input: UpdateSurchargeInput!) {
  surchargeUpdate(id: \$id, input: \$input) {
    ...SurchargeFields
  }
}`;
exports.taxCreate = `mutation taxCreate(\$input: TaxCreateInput!) {
  taxCreate(input: \$input) {
    ...TaxFields
  }
}`;
exports.taxUpdate = `mutation taxUpdate(\$id: String!, \$input: TaxUpdateInput!) {
  taxUpdate(id: \$id, input: \$input) {
    ...TaxFields
  }
}`;
exports.tenderAddItems = `mutation tenderAddItems(\$id: String!, \$input: TenderAddItemsInput!) {
  tenderAddItems(id: \$id, input: \$input) {
    ...TenderResponseFields
  }
}`;
exports.tenderApplyIncentives = `mutation tenderApplyIncentives(\$id: String!) {
  tenderApplyIncentives(id: \$id) {
    ...TenderFields
  }
}`;
exports.tenderDeleteItem = `mutation tenderDeleteItem(\$id: String!, \$itemId: String!) {
  tenderDeleteItem(id: \$id, itemId: \$itemId) {
    ...TenderFields
  }
}`;
exports.tenderProcess = `mutation tenderProcess(\$id: String!) {
  tenderProcess(id: \$id) {
    ...TenderProcessResponseFields
  }
}`;
exports.tenderStart = `mutation tenderStart(\$input: TenderStartInput!) {
  tenderStart(input: \$input) {
    ...TenderFields
  }
}`;
exports.tenderUpdate = `mutation tenderUpdate(\$id: String!, \$input: TenderUpdateInput!) {
  tenderUpdate(id: \$id, input: \$input) {
    ...TenderFields
  }
}`;
exports.tenderUpdateAddress = `mutation tenderUpdateAddress(\$id: String!, \$input: TenderUpdateAddressInput!) {
  tenderUpdateAddress(id: \$id, input: \$input) {
    ...TenderFields
  }
}`;
exports.tenderUpdateDiscount = `mutation tenderUpdateDiscount(\$id: String!, \$input: TenderDiscountInput!) {
  tenderUpdateDiscount(id: \$id, input: \$input) {
    ...TenderFields
  }
}`;
exports.tenderUpdateInvoiceUser = `mutation tenderUpdateInvoiceUser(\$id: String!, \$userId: Int!) {
  tenderUpdateInvoiceUser(id: \$id, userId: \$userId) {
    ...TenderFields
  }
}`;
exports.tenderUpdateItem = `mutation tenderUpdateItem(\$id: String!, \$itemId: String!, \$input: TenderUpdateItemInput!) {
  tenderUpdateItem(id: \$id, itemId: \$itemId, input: \$input) {
    ...TenderFields
  }
}`;
exports.tenderUpdatePayment = `mutation tenderUpdatePayment(\$id: String!, \$input: TenderPaymentInput!) {
  tenderUpdatePayment(id: \$id, input: \$input) {
    ...TenderFields
  }
}`;
exports.tenderUpdatePostage = `mutation tenderUpdatePostage(\$id: String!, \$input: TenderPostageInput!) {
  tenderUpdatePostage(id: \$id, input: \$input) {
    ...TenderFields
  }
}`;
exports.trackAndTraceCreate = `mutation trackAndTraceCreate(\$input: TrackAndTraceCreateInput!) {
  trackAndTraceCreate(input: \$input) {
    ...TrackAndTraceFields
  }
}`;
exports.trackAndTraceUpdate = `mutation trackAndTraceUpdate(\$id: String!, \$input: TrackAndTraceUpdateInput!) {
  trackAndTraceUpdate(id: \$id, input: \$input) {
    ...TrackAndTraceFields
  }
}`;
exports.userAddressCreate = `mutation userAddressCreate(\$input: UserAddressCreateInput!) {
  userAddressCreate(input: \$input) {
    ...AddressFields
  }
}`;
exports.userAddressDelete = `mutation userAddressDelete(\$addressId: String!) {
  userAddressDelete(addressId: \$addressId)
}`;
exports.userAddressUpdate = `mutation userAddressUpdate(\$input: UserAddressUpdateInput!) {
  userAddressUpdate(input: \$input) {
    ...AddressFields
  }
}`;
exports.usergroupCreate = `mutation usergroupCreate(\$input: CreateUsergroupInput!) {
  usergroupCreate(input: \$input) {
    ...UsergroupFields
  }
}`;
exports.usergroupUpdate = `mutation usergroupUpdate(\$id: Int!, \$input: UpdateUsergroupInput!) {
  usergroupUpdate(id: \$id, input: \$input) {
    ...UsergroupFields
  }
}`;
exports.valuesetCreate = `mutation valuesetCreate(\$input: ValuesetCreateInput!) {
  valuesetCreate(input: \$input) {
    ...ValuesetFields
  }
}`;
exports.valuesetItemCreate = `mutation valuesetItemCreate(\$input: ValuesetItemCreateInput!) {
  valuesetItemCreate(input: \$input) {
    ...ValuesetItemFields
  }
}`;
exports.valuesetItemUpdate = `mutation valuesetItemUpdate(\$id: Int!, \$input: ValuesetItemUpdateInput!) {
  valuesetItemUpdate(id: \$id, input: \$input) {
    ...ValuesetItemFields
  }
}`;
exports.valuesetUpdate = `mutation valuesetUpdate(\$id: Int!, \$input: ValuesetUpdateInput!) {
  valuesetUpdate(id: \$id, input: \$input) {
    ...ValuesetFields
  }
}`;
exports.verifyToken = `mutation verifyToken(\$input: VerifyTokenInput!) {
  verifyToken(input: \$input) {
    ...VerifyTokenFields
  }
}`;
exports.warehouseAddressCreate = `mutation warehouseAddressCreate(\$id: Float!, \$input: CreateWarehouseAddressInput!) {
  warehouseAddressCreate(id: \$id, input: \$input) {
    ...WarehouseAddressFields
  }
}`;
exports.warehouseAddressUpdate = `mutation warehouseAddressUpdate(\$id: Float!, \$input: UpdateWarehouseAddressInput!) {
  warehouseAddressUpdate(id: \$id, input: \$input) {
    ...WarehouseAddressFields
  }
}`;
exports.warehouseCreate = `mutation warehouseCreate(\$input: CreateWarehouseInput!) {
  warehouseCreate(input: \$input) {
    ...WarehouseFields
  }
}`;
exports.warehouseDelete = `mutation warehouseDelete(\$id: Float!) {
  warehouseDelete(id: \$id) {
    ...WarehouseFields
  }
}`;
exports.warehouseUpdate = `mutation warehouseUpdate(\$id: Float!, \$input: UpdateWarehouseInput!) {
  warehouseUpdate(id: \$id, input: \$input) {
    ...WarehouseFields
  }
}`;
exports.zoneTaxCodeCreate = `mutation zoneTaxCodeCreate(\$input: ZoneTaxCodeCreateInput!) {
  zoneTaxCodeCreate(input: \$input) {
    ...ZoneTaxCodeFields
  }
}`;
exports.zoneTaxCodeUpdate = `mutation zoneTaxCodeUpdate(\$id: String!, \$input: ZoneTaxCodeUpdateInput!) {
  zoneTaxCodeUpdate(id: \$id, input: \$input) {
    ...ZoneTaxCodeFields
  }
}`;
exports.zoneTaxCodesCreate = `mutation zoneTaxCodesCreate(\$input: [ZoneTaxCodeCreateInput!]!) {
  zoneTaxCodesCreate(input: \$input) {
    ...ZoneTaxCodeFields
  }
}`;
exports.mutations = {
    addSurchargesToProduct: exports.addSurchargesToProduct,
    adminUserCreate: exports.adminUserCreate,
    adminUserTenantCreate: exports.adminUserTenantCreate,
    adminUserTenantDelete: exports.adminUserTenantDelete,
    adminUserUpdate: exports.adminUserUpdate,
    attributeCsvImport: exports.attributeCsvImport,
    attributeDescriptionCreate: exports.attributeDescriptionCreate,
    attributeDescriptionCsvImport: exports.attributeDescriptionCsvImport,
    attributeDescriptionUpdate: exports.attributeDescriptionUpdate,
    authenticationCreate: exports.authenticationCreate,
    bulkCostPriceCreate: exports.bulkCostPriceCreate,
    bulkCostPriceCsvImport: exports.bulkCostPriceCsvImport,
    bulkCostPriceUpdate: exports.bulkCostPriceUpdate,
    bulkCostPricesBulk: exports.bulkCostPricesBulk,
    bulkPriceCreate: exports.bulkPriceCreate,
    bulkPriceCsvImport: exports.bulkPriceCsvImport,
    bulkPriceUpdate: exports.bulkPriceUpdate,
    bulkPricesCreate: exports.bulkPricesCreate,
    bundleAddItems: exports.bundleAddItems,
    bundleCreate: exports.bundleCreate,
    bundleUpdate: exports.bundleUpdate,
    businessRuleCreate: exports.businessRuleCreate,
    businessRuleDecisionTableAddColumn: exports.businessRuleDecisionTableAddColumn,
    businessRuleDecisionTableAddRow: exports.businessRuleDecisionTableAddRow,
    businessRuleDecisionTableDeleteColumn: exports.businessRuleDecisionTableDeleteColumn,
    businessRuleDecisionTableDeleteRow: exports.businessRuleDecisionTableDeleteRow,
    businessRuleDecisionTableMoveRow: exports.businessRuleDecisionTableMoveRow,
    businessRuleDecisionTableSetCell: exports.businessRuleDecisionTableSetCell,
    businessRuleDecisionTableUpdate: exports.businessRuleDecisionTableUpdate,
    businessRuleUpdate: exports.businessRuleUpdate,
    carrierCreate: exports.carrierCreate,
    carrierUpdate: exports.carrierUpdate,
    cartAcceptPurchaseAuthorizationRequest: exports.cartAcceptPurchaseAuthorizationRequest,
    cartAddActionCode: exports.cartAddActionCode,
    cartAddBundle: exports.cartAddBundle,
    cartAddItem: exports.cartAddItem,
    cartDelete: exports.cartDelete,
    cartDeleteItem: exports.cartDeleteItem,
    cartItemBulk: exports.cartItemBulk,
    cartProcess: exports.cartProcess,
    cartRemoveActionCode: exports.cartRemoveActionCode,
    cartRequestPurchaseAuthorization: exports.cartRequestPurchaseAuthorization,
    cartSetContact: exports.cartSetContact,
    cartSetCustomer: exports.cartSetCustomer,
    cartSetUser: exports.cartSetUser,
    cartStart: exports.cartStart,
    cartUpdate: exports.cartUpdate,
    cartUpdateAddress: exports.cartUpdateAddress,
    cartUpdateItem: exports.cartUpdateItem,
    categoryAddProductsClusters: exports.categoryAddProductsClusters,
    categoryCreate: exports.categoryCreate,
    categoryCsvImport: exports.categoryCsvImport,
    categoryRemoveProductsClusters: exports.categoryRemoveProductsClusters,
    categoryUpdate: exports.categoryUpdate,
    clusterAssignProducts: exports.clusterAssignProducts,
    clusterConfigAddSetting: exports.clusterConfigAddSetting,
    clusterConfigCreate: exports.clusterConfigCreate,
    clusterConfigUpdateSetting: exports.clusterConfigUpdateSetting,
    clusterCreate: exports.clusterCreate,
    clusterCsvImport: exports.clusterCsvImport,
    clusterOptionCreate: exports.clusterOptionCreate,
    clusterOptionUpdate: exports.clusterOptionUpdate,
    clusterProductCreate: exports.clusterProductCreate,
    clusterProductUpdate: exports.clusterProductUpdate,
    clusterUnassignProducts: exports.clusterUnassignProducts,
    clusterUpdate: exports.clusterUpdate,
    companyAddressCreate: exports.companyAddressCreate,
    companyAddressDelete: exports.companyAddressDelete,
    companyAddressUpdate: exports.companyAddressUpdate,
    companyCreate: exports.companyCreate,
    companyCsvImport: exports.companyCsvImport,
    companyUpdate: exports.companyUpdate,
    contactAddToCompanies: exports.contactAddToCompanies,
    contactCreate: exports.contactCreate,
    contactCreateAccount: exports.contactCreateAccount,
    contactCsvImport: exports.contactCsvImport,
    contactRegister: exports.contactRegister,
    contactRemoveFromCompanies: exports.contactRemoveFromCompanies,
    contactUpdate: exports.contactUpdate,
    costPriceCreate: exports.costPriceCreate,
    costPriceUpdate: exports.costPriceUpdate,
    costPricesBulk: exports.costPricesBulk,
    crossupsellCreate: exports.crossupsellCreate,
    crossupsellUpdate: exports.crossupsellUpdate,
    customerAddressCreate: exports.customerAddressCreate,
    customerAddressDelete: exports.customerAddressDelete,
    customerAddressUpdate: exports.customerAddressUpdate,
    customerCreate: exports.customerCreate,
    customerCreateAccount: exports.customerCreateAccount,
    customerCsvImport: exports.customerCsvImport,
    customerRegister: exports.customerRegister,
    customerUpdate: exports.customerUpdate,
    discountCreate: exports.discountCreate,
    discountCsvImport: exports.discountCsvImport,
    discountUpdate: exports.discountUpdate,
    documentTemplateCreate: exports.documentTemplateCreate,
    documentTemplateRenderToPDF: exports.documentTemplateRenderToPDF,
    documentTemplateUpdate: exports.documentTemplateUpdate,
    emailTemplateAddAttachment: exports.emailTemplateAddAttachment,
    emailTemplateCreate: exports.emailTemplateCreate,
    emailTemplateRemoveAttachment: exports.emailTemplateRemoveAttachment,
    emailTemplateUpdate: exports.emailTemplateUpdate,
    eventToEmailConfigCreate: exports.eventToEmailConfigCreate,
    eventToEmailConfigUpdate: exports.eventToEmailConfigUpdate,
    eventToWebHookConfigCreate: exports.eventToWebHookConfigCreate,
    eventToWebHookConfigUpdate: exports.eventToWebHookConfigUpdate,
    exchangeRefreshToken: exports.exchangeRefreshToken,
    externalAddressCreate: exports.externalAddressCreate,
    externalAddressUpdate: exports.externalAddressUpdate,
    favoriteListAddItems: exports.favoriteListAddItems,
    favoriteListClearItems: exports.favoriteListClearItems,
    favoriteListCreate: exports.favoriteListCreate,
    favoriteListDelete: exports.favoriteListDelete,
    favoriteListRemoveItems: exports.favoriteListRemoveItems,
    favoriteListUpdate: exports.favoriteListUpdate,
    incentiveRuleCreate: exports.incentiveRuleCreate,
    incentiveRuleSetAction: exports.incentiveRuleSetAction,
    incentiveRuleSetOrderItemConditions: exports.incentiveRuleSetOrderItemConditions,
    inventoryCreate: exports.inventoryCreate,
    inventoryCsvImport: exports.inventoryCsvImport,
    inventoryDelete: exports.inventoryDelete,
    inventoryUpdate: exports.inventoryUpdate,
    login: exports.login,
    logout: exports.logout,
    machineCreate: exports.machineCreate,
    machineUpsert: exports.machineUpsert,
    magicTokenCreate: exports.magicTokenCreate,
    magicTokenLogin: exports.magicTokenLogin,
    magicTokenUpdate: exports.magicTokenUpdate,
    mediaAttachmentCreate: exports.mediaAttachmentCreate,
    mediaAttachmentDelete: exports.mediaAttachmentDelete,
    mediaAttachmentUpdate: exports.mediaAttachmentUpdate,
    mediaDocumentCreate: exports.mediaDocumentCreate,
    mediaDocumentCsvImport: exports.mediaDocumentCsvImport,
    mediaDocumentDelete: exports.mediaDocumentDelete,
    mediaDocumentUpdate: exports.mediaDocumentUpdate,
    mediaImageCreate: exports.mediaImageCreate,
    mediaImageCsvImport: exports.mediaImageCsvImport,
    mediaImageDelete: exports.mediaImageDelete,
    mediaImageUpdate: exports.mediaImageUpdate,
    mediaVideoCreate: exports.mediaVideoCreate,
    mediaVideoCsvImport: exports.mediaVideoCsvImport,
    mediaVideoDelete: exports.mediaVideoDelete,
    mediaVideoUpdate: exports.mediaVideoUpdate,
    orderAddressUpdate: exports.orderAddressUpdate,
    orderCreate: exports.orderCreate,
    orderItemCreate: exports.orderItemCreate,
    orderItemUpdate: exports.orderItemUpdate,
    orderSendConfirmationEmail: exports.orderSendConfirmationEmail,
    orderSetStatus: exports.orderSetStatus,
    orderStatusCreate: exports.orderStatusCreate,
    orderStatusSetAddOrderStatuses: exports.orderStatusSetAddOrderStatuses,
    orderStatusSetCreate: exports.orderStatusSetCreate,
    orderStatusSetRemoveOrderStatuses: exports.orderStatusSetRemoveOrderStatuses,
    orderStatusSetUpdate: exports.orderStatusSetUpdate,
    orderStatusUpdate: exports.orderStatusUpdate,
    orderUpdate: exports.orderUpdate,
    orderlistAddItems: exports.orderlistAddItems,
    orderlistAssignCompanies: exports.orderlistAssignCompanies,
    orderlistAssignUsers: exports.orderlistAssignUsers,
    orderlistCreate: exports.orderlistCreate,
    orderlistRemoveItems: exports.orderlistRemoveItems,
    orderlistUnassignCompanies: exports.orderlistUnassignCompanies,
    orderlistUnassignUsers: exports.orderlistUnassignUsers,
    orderlistUpdate: exports.orderlistUpdate,
    payMethodCreate: exports.payMethodCreate,
    payMethodUpdate: exports.payMethodUpdate,
    paymentCreate: exports.paymentCreate,
    paymentDelete: exports.paymentDelete,
    paymentUpdate: exports.paymentUpdate,
    priceCreate: exports.priceCreate,
    priceCsvImport: exports.priceCsvImport,
    priceUpdate: exports.priceUpdate,
    pricesheetAssign: exports.pricesheetAssign,
    pricesheetCreate: exports.pricesheetCreate,
    pricesheetCsvImport: exports.pricesheetCsvImport,
    pricesheetUnassign: exports.pricesheetUnassign,
    pricesheetUpdate: exports.pricesheetUpdate,
    productCreate: exports.productCreate,
    productCsvImport: exports.productCsvImport,
    productUpdate: exports.productUpdate,
    publishEmailEvent: exports.publishEmailEvent,
    publishEmailSendEvent: exports.publishEmailSendEvent,
    publishPasswordResetEmailEvent: exports.publishPasswordResetEmailEvent,
    purchaseAuthorizationConfigCreate: exports.purchaseAuthorizationConfigCreate,
    purchaseAuthorizationConfigUpdate: exports.purchaseAuthorizationConfigUpdate,
    removeSurchargesFromProduct: exports.removeSurchargesFromProduct,
    roleCreate: exports.roleCreate,
    roleDefinitionCreate: exports.roleDefinitionCreate,
    roleDefinitionUpdate: exports.roleDefinitionUpdate,
    roleUpdate: exports.roleUpdate,
    shipmentCreate: exports.shipmentCreate,
    shipmentItemCreate: exports.shipmentItemCreate,
    shipmentItemUpdate: exports.shipmentItemUpdate,
    shipmentUpdate: exports.shipmentUpdate,
    startSession: exports.startSession,
    surchargeCreate: exports.surchargeCreate,
    surchargeDelete: exports.surchargeDelete,
    surchargeUpdate: exports.surchargeUpdate,
    taxCreate: exports.taxCreate,
    taxUpdate: exports.taxUpdate,
    tenderAddItems: exports.tenderAddItems,
    tenderApplyIncentives: exports.tenderApplyIncentives,
    tenderDeleteItem: exports.tenderDeleteItem,
    tenderProcess: exports.tenderProcess,
    tenderStart: exports.tenderStart,
    tenderUpdate: exports.tenderUpdate,
    tenderUpdateAddress: exports.tenderUpdateAddress,
    tenderUpdateDiscount: exports.tenderUpdateDiscount,
    tenderUpdateInvoiceUser: exports.tenderUpdateInvoiceUser,
    tenderUpdateItem: exports.tenderUpdateItem,
    tenderUpdatePayment: exports.tenderUpdatePayment,
    tenderUpdatePostage: exports.tenderUpdatePostage,
    trackAndTraceCreate: exports.trackAndTraceCreate,
    trackAndTraceUpdate: exports.trackAndTraceUpdate,
    userAddressCreate: exports.userAddressCreate,
    userAddressDelete: exports.userAddressDelete,
    userAddressUpdate: exports.userAddressUpdate,
    usergroupCreate: exports.usergroupCreate,
    usergroupUpdate: exports.usergroupUpdate,
    valuesetCreate: exports.valuesetCreate,
    valuesetItemCreate: exports.valuesetItemCreate,
    valuesetItemUpdate: exports.valuesetItemUpdate,
    valuesetUpdate: exports.valuesetUpdate,
    verifyToken: exports.verifyToken,
    warehouseAddressCreate: exports.warehouseAddressCreate,
    warehouseAddressUpdate: exports.warehouseAddressUpdate,
    warehouseCreate: exports.warehouseCreate,
    warehouseDelete: exports.warehouseDelete,
    warehouseUpdate: exports.warehouseUpdate,
    zoneTaxCodeCreate: exports.zoneTaxCodeCreate,
    zoneTaxCodeUpdate: exports.zoneTaxCodeUpdate,
    zoneTaxCodesCreate: exports.zoneTaxCodesCreate
};
exports.default = exports.mutations;
//# sourceMappingURL=mutations.js.map