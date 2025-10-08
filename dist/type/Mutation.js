"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
/**
 Object class for Mutation
 */
class Mutation {
    /**
     Creates a new instance of Mutation
     */
    constructor(data = {}) {
        this._userAddressCreate = data.userAddressCreate;
        this._customerAddressCreate = data.customerAddressCreate;
        this._companyAddressCreate = data.companyAddressCreate;
        this._externalAddressCreate = data.externalAddressCreate;
        this._userAddressUpdate = data.userAddressUpdate;
        this._customerAddressUpdate = data.customerAddressUpdate;
        this._companyAddressUpdate = data.companyAddressUpdate;
        this._externalAddressUpdate = data.externalAddressUpdate;
        this._userAddressDelete = data.userAddressDelete;
        this._customerAddressDelete = data.customerAddressDelete;
        this._companyAddressDelete = data.companyAddressDelete;
        this._externalAddressDelete = data.externalAddressDelete;
        this._adminUserCreate = data.adminUserCreate;
        this._adminUserUpdate = data.adminUserUpdate;
        this._adminUserDelete = data.adminUserDelete;
        this._adminUserTenantCreate = data.adminUserTenantCreate;
        this._adminUserTenantDelete = data.adminUserTenantDelete;
        this._attributeDescriptionCreate = data.attributeDescriptionCreate;
        this._attributeDescriptionUpdate = data.attributeDescriptionUpdate;
        this._attributeDescriptionDelete = data.attributeDescriptionDelete;
        this._attributeDescriptionCsvImport = data.attributeDescriptionCsvImport;
        this._attributeCreate = data.attributeCreate;
        this._attributeUpdate = data.attributeUpdate;
        this._attributeDelete = data.attributeDelete;
        this._attributeCsvImport = data.attributeCsvImport;
        this._startSession = data.startSession;
        this._login = data.login;
        this._logout = data.logout;
        this._authenticationCreate = data.authenticationCreate;
        this._authenticationDelete = data.authenticationDelete;
        this._claimsReset = data.claimsReset;
        this._verifyToken = data.verifyToken;
        this._exchangeRefreshToken = data.exchangeRefreshToken;
        this._triggerPasswordSendResetEmailEvent = data.triggerPasswordSendResetEmailEvent;
        this._triggerPasswordSendInitEmailEvent = data.triggerPasswordSendInitEmailEvent;
        this._passwordResetLink = data.passwordResetLink;
        this._magicTokenCreate = data.magicTokenCreate;
        this._magicTokenUpdate = data.magicTokenUpdate;
        this._magicTokenDelete = data.magicTokenDelete;
        this._magicTokenLogin = data.magicTokenLogin;
        this._bundleCreate = data.bundleCreate;
        this._bundleUpdate = data.bundleUpdate;
        this._bundleDelete = data.bundleDelete;
        this._bundleAddItems = data.bundleAddItems;
        this._bundleRemoveItem = data.bundleRemoveItem;
        this._businessRuleCreate = data.businessRuleCreate;
        this._businessRuleUpdate = data.businessRuleUpdate;
        this._businessRuleDelete = data.businessRuleDelete;
        this._businessRuleDecisionTableAddColumn = data.businessRuleDecisionTableAddColumn;
        this._businessRuleDecisionTableUpdate = data.businessRuleDecisionTableUpdate;
        this._businessRuleDecisionTableDeleteColumn = data.businessRuleDecisionTableDeleteColumn;
        this._businessRuleDecisionTableAddRow = data.businessRuleDecisionTableAddRow;
        this._businessRuleDecisionTableMoveRow = data.businessRuleDecisionTableMoveRow;
        this._businessRuleDecisionTableDeleteRow = data.businessRuleDecisionTableDeleteRow;
        this._businessRuleDecisionTableSetCell = data.businessRuleDecisionTableSetCell;
        this._incentiveRuleCreate = data.incentiveRuleCreate;
        this._incentiveRuleSetOrderItemConditions = data.incentiveRuleSetOrderItemConditions;
        this._incentiveRuleSetAction = data.incentiveRuleSetAction;
        this._carrierCreate = data.carrierCreate;
        this._carrierUpdate = data.carrierUpdate;
        this._carrierDelete = data.carrierDelete;
        this._carrierAssignWarehouse = data.carrierAssignWarehouse;
        this._carrierUnassignWarehouse = data.carrierUnassignWarehouse;
        this._cartStart = data.cartStart;
        this._cartSetUser = data.cartSetUser;
        this._cartSetContact = data.cartSetContact;
        this._cartSetCustomer = data.cartSetCustomer;
        this._cartUpdate = data.cartUpdate;
        this._cartDelete = data.cartDelete;
        this._cartProcess = data.cartProcess;
        this._cartAddActionCode = data.cartAddActionCode;
        this._cartRemoveActionCode = data.cartRemoveActionCode;
        this._cartUpdateAddress = data.cartUpdateAddress;
        this._cartRequestPurchaseAuthorization = data.cartRequestPurchaseAuthorization;
        this._cartAcceptPurchaseAuthorizationRequest = data.cartAcceptPurchaseAuthorizationRequest;
        this._cartAddItem = data.cartAddItem;
        this._cartAddBundle = data.cartAddBundle;
        this._cartUpdateItem = data.cartUpdateItem;
        this._cartItemBulk = data.cartItemBulk;
        this._cartDeleteItem = data.cartDeleteItem;
        this._cartInvalidateCache = data.cartInvalidateCache;
        this._categoryAddProductsClusters = data.categoryAddProductsClusters;
        this._categoryRemoveProductsClusters = data.categoryRemoveProductsClusters;
        this._categoryCreate = data.categoryCreate;
        this._categoryUpdate = data.categoryUpdate;
        this._categoryCsvImport = data.categoryCsvImport;
        this._categoryDelete = data.categoryDelete;
        this._channelInvalidateCache = data.channelInvalidateCache;
        this._paymentCreate = data.paymentCreate;
        this._paymentUpdate = data.paymentUpdate;
        this._paymentDelete = data.paymentDelete;
        this._crossupsellCreate = data.crossupsellCreate;
        this._crossupsellUpdate = data.crossupsellUpdate;
        this._crossupsellDelete = data.crossupsellDelete;
        this._eventActionConfigDelete = data.eventActionConfigDelete;
        this._triggerCustomEvent = data.triggerCustomEvent;
        this._eventToEmailConfigCreate = data.eventToEmailConfigCreate;
        this._eventToEmailConfigUpdate = data.eventToEmailConfigUpdate;
        this._eventToWebHookConfigCreate = data.eventToWebHookConfigCreate;
        this._eventToWebHookConfigUpdate = data.eventToWebHookConfigUpdate;
        this._favoriteListCreate = data.favoriteListCreate;
        this._favoriteListUpdate = data.favoriteListUpdate;
        this._favoriteListDelete = data.favoriteListDelete;
        this._favoriteListAddItems = data.favoriteListAddItems;
        this._favoriteListRemoveItems = data.favoriteListRemoveItems;
        this._favoriteListClearItems = data.favoriteListClearItems;
        this._inventoryCreate = data.inventoryCreate;
        this._inventoryCsvImport = data.inventoryCsvImport;
        this._inventoryUpdate = data.inventoryUpdate;
        this._inventoryDelete = data.inventoryDelete;
        this._mediaImageCreate = data.mediaImageCreate;
        this._mediaImageUpdate = data.mediaImageUpdate;
        this._mediaImageDelete = data.mediaImageDelete;
        this._mediaImageCsvImport = data.mediaImageCsvImport;
        this._mediaVideoCreate = data.mediaVideoCreate;
        this._mediaVideoUpdate = data.mediaVideoUpdate;
        this._mediaVideoDelete = data.mediaVideoDelete;
        this._mediaVideoCsvImport = data.mediaVideoCsvImport;
        this._mediaDocumentCreate = data.mediaDocumentCreate;
        this._mediaDocumentUpdate = data.mediaDocumentUpdate;
        this._mediaDocumentDelete = data.mediaDocumentDelete;
        this._mediaDocumentCsvImport = data.mediaDocumentCsvImport;
        this._mediaAttachmentCreate = data.mediaAttachmentCreate;
        this._mediaAttachmentUpdate = data.mediaAttachmentUpdate;
        this._mediaAttachmentDelete = data.mediaAttachmentDelete;
        this._publishEmailEvent = data.publishEmailEvent;
        this._publishEmailSendEvent = data.publishEmailSendEvent;
        this._publishPasswordResetEmailEvent = data.publishPasswordResetEmailEvent;
        this._emailTemplateCreate = data.emailTemplateCreate;
        this._emailTemplateUpdate = data.emailTemplateUpdate;
        this._documentTemplateCreate = data.documentTemplateCreate;
        this._documentTemplateUpdate = data.documentTemplateUpdate;
        this._templateDelete = data.templateDelete;
        this._emailTemplateAddAttachment = data.emailTemplateAddAttachment;
        this._emailTemplateRemoveAttachment = data.emailTemplateRemoveAttachment;
        this._templateRenderToHTML = data.templateRenderToHTML;
        this._emailTemplateRenderAndSend = data.emailTemplateRenderAndSend;
        this._documentTemplateRenderToPDF = data.documentTemplateRenderToPDF;
        this._orderStatusCreate = data.orderStatusCreate;
        this._orderStatusUpdate = data.orderStatusUpdate;
        this._orderStatusDelete = data.orderStatusDelete;
        this._orderStatusSetCreate = data.orderStatusSetCreate;
        this._orderStatusSetUpdate = data.orderStatusSetUpdate;
        this._orderStatusSetAddOrderStatuses = data.orderStatusSetAddOrderStatuses;
        this._orderStatusSetRemoveOrderStatuses = data.orderStatusSetRemoveOrderStatuses;
        this._orderStatusSetDelete = data.orderStatusSetDelete;
        this._orderCreate = data.orderCreate;
        this._orderUpdate = data.orderUpdate;
        this._orderDelete = data.orderDelete;
        this._orderSendConfirmationEmail = data.orderSendConfirmationEmail;
        this._triggerOrderSendConfirm = data.triggerOrderSendConfirm;
        this._triggerQuoteSendRequest = data.triggerQuoteSendRequest;
        this._triggerQuoteSendValidation = data.triggerQuoteSendValidation;
        this._triggerQuoteSend = data.triggerQuoteSend;
        this._orderSetStatus = data.orderSetStatus;
        this._orderItemCreate = data.orderItemCreate;
        this._orderItemUpdate = data.orderItemUpdate;
        this._orderItemDelete = data.orderItemDelete;
        this._orderAddressUpdate = data.orderAddressUpdate;
        this._orderUpdateAddress = data.orderUpdateAddress;
        this._shipmentCreate = data.shipmentCreate;
        this._shipmentUpdate = data.shipmentUpdate;
        this._shipmentDelete = data.shipmentDelete;
        this._shipmentItemCreate = data.shipmentItemCreate;
        this._shipmentItemUpdate = data.shipmentItemUpdate;
        this._shipmentItemDelete = data.shipmentItemDelete;
        this._trackAndTraceCreate = data.trackAndTraceCreate;
        this._trackAndTraceUpdate = data.trackAndTraceUpdate;
        this._trackAndTraceDelete = data.trackAndTraceDelete;
        this._orderlistCreate = data.orderlistCreate;
        this._orderlistUpdate = data.orderlistUpdate;
        this._orderlistAddItems = data.orderlistAddItems;
        this._orderlistRemoveItems = data.orderlistRemoveItems;
        this._orderlistAssignUsers = data.orderlistAssignUsers;
        this._orderlistUnassignUsers = data.orderlistUnassignUsers;
        this._orderlistAssignCompanies = data.orderlistAssignCompanies;
        this._orderlistUnassignCompanies = data.orderlistUnassignCompanies;
        this._orderlistDelete = data.orderlistDelete;
        this._payMethodCreate = data.payMethodCreate;
        this._payMethodUpdate = data.payMethodUpdate;
        this._payMethodDelete = data.payMethodDelete;
        this._priceCreate = data.priceCreate;
        this._priceCsvImport = data.priceCsvImport;
        this._priceUpdate = data.priceUpdate;
        this._priceDelete = data.priceDelete;
        this._costPriceCreate = data.costPriceCreate;
        this._costPriceUpdate = data.costPriceUpdate;
        this._costPriceDelete = data.costPriceDelete;
        this._costPricesBulk = data.costPricesBulk;
        this._costPricesDelete = data.costPricesDelete;
        this._pricesheetCreate = data.pricesheetCreate;
        this._pricesheetUpdate = data.pricesheetUpdate;
        this._pricesheetCsvImport = data.pricesheetCsvImport;
        this._pricesheetDelete = data.pricesheetDelete;
        this._pricesheetAssign = data.pricesheetAssign;
        this._pricesheetUnassign = data.pricesheetUnassign;
        this._discountCreate = data.discountCreate;
        this._discountUpdate = data.discountUpdate;
        this._discountDelete = data.discountDelete;
        this._discountsDeleteByPricesheetId = data.discountsDeleteByPricesheetId;
        this._discountCsvImport = data.discountCsvImport;
        this._bulkPriceCreate = data.bulkPriceCreate;
        this._bulkPriceUpdate = data.bulkPriceUpdate;
        this._bulkPriceCsvImport = data.bulkPriceCsvImport;
        this._bulkPriceDelete = data.bulkPriceDelete;
        this._bulkPricesCreate = data.bulkPricesCreate;
        this._bulkPricesDelete = data.bulkPricesDelete;
        this._bulkCostPriceCreate = data.bulkCostPriceCreate;
        this._bulkCostPriceUpdate = data.bulkCostPriceUpdate;
        this._bulkCostPriceCsvImport = data.bulkCostPriceCsvImport;
        this._bulkCostPriceDelete = data.bulkCostPriceDelete;
        this._bulkCostPricesBulk = data.bulkCostPricesBulk;
        this._bulkCostPricesDelete = data.bulkCostPricesDelete;
        this._zoneTaxCodeCreate = data.zoneTaxCodeCreate;
        this._zoneTaxCodeUpdate = data.zoneTaxCodeUpdate;
        this._zoneTaxCodeDelete = data.zoneTaxCodeDelete;
        this._zoneTaxCodesCreate = data.zoneTaxCodesCreate;
        this._zoneTaxCodesDelete = data.zoneTaxCodesDelete;
        this._taxCreate = data.taxCreate;
        this._taxUpdate = data.taxUpdate;
        this._taxDelete = data.taxDelete;
        this._productCreate = data.productCreate;
        this._productUpdate = data.productUpdate;
        this._productDelete = data.productDelete;
        this._productCsvImport = data.productCsvImport;
        this._clusterOptionCreate = data.clusterOptionCreate;
        this._clusterOptionUpdate = data.clusterOptionUpdate;
        this._clusterOptionDelete = data.clusterOptionDelete;
        this._clusterProductCreate = data.clusterProductCreate;
        this._clusterProductUpdate = data.clusterProductUpdate;
        this._clusterProductDelete = data.clusterProductDelete;
        this._clusterCreate = data.clusterCreate;
        this._clusterUpdate = data.clusterUpdate;
        this._clusterCsvImport = data.clusterCsvImport;
        this._clusterDelete = data.clusterDelete;
        this._clusterAssignProducts = data.clusterAssignProducts;
        this._clusterUnassignProducts = data.clusterUnassignProducts;
        this._clusterConfigCreate = data.clusterConfigCreate;
        this._clusterConfigDelete = data.clusterConfigDelete;
        this._clusterConfigAddSetting = data.clusterConfigAddSetting;
        this._clusterConfigUpdateSetting = data.clusterConfigUpdateSetting;
        this._clusterConfigRemoveSetting = data.clusterConfigRemoveSetting;
        this._roleDefinitionCreate = data.roleDefinitionCreate;
        this._roleDefinitionUpdate = data.roleDefinitionUpdate;
        this._roleDefinitionDelete = data.roleDefinitionDelete;
        this._roleCreate = data.roleCreate;
        this._roleUpdate = data.roleUpdate;
        this._roleDelete = data.roleDelete;
        this._shopInvalidateCache = data.shopInvalidateCache;
        this._machineCreate = data.machineCreate;
        this._machineDelete = data.machineDelete;
        this._machineUpsert = data.machineUpsert;
        this._surchargeCreate = data.surchargeCreate;
        this._surchargeUpdate = data.surchargeUpdate;
        this._surchargeDelete = data.surchargeDelete;
        this._addSurchargesToProduct = data.addSurchargesToProduct;
        this._removeSurchargesFromProduct = data.removeSurchargesFromProduct;
        this._tenderStart = data.tenderStart;
        this._tenderUpdateAddress = data.tenderUpdateAddress;
        this._tenderAddItems = data.tenderAddItems;
        this._tenderUpdateItem = data.tenderUpdateItem;
        this._tenderDeleteItem = data.tenderDeleteItem;
        this._tenderUpdateInvoiceUser = data.tenderUpdateInvoiceUser;
        this._tenderUpdate = data.tenderUpdate;
        this._tenderUpdateDiscount = data.tenderUpdateDiscount;
        this._tenderUpdatePostage = data.tenderUpdatePostage;
        this._tenderUpdatePayment = data.tenderUpdatePayment;
        this._tenderApplyIncentives = data.tenderApplyIncentives;
        this._tenderProcess = data.tenderProcess;
        this._tenderDelete = data.tenderDelete;
        this._usergroupCreate = data.usergroupCreate;
        this._usergroupUpdate = data.usergroupUpdate;
        this._usergroupDelete = data.usergroupDelete;
        this._companyCreate = data.companyCreate;
        this._companyUpdate = data.companyUpdate;
        this._companyDelete = data.companyDelete;
        this._companyCsvImport = data.companyCsvImport;
        this._contactCreate = data.contactCreate;
        this._contactRegister = data.contactRegister;
        this._contactUpdate = data.contactUpdate;
        this._contactAddToCompanies = data.contactAddToCompanies;
        this._contactRemoveFromCompanies = data.contactRemoveFromCompanies;
        this._contactDelete = data.contactDelete;
        this._contactCreateAccount = data.contactCreateAccount;
        this._contactDeleteAccount = data.contactDeleteAccount;
        this._contactCsvImport = data.contactCsvImport;
        this._triggerContactSendWelcomeEmailEvent = data.triggerContactSendWelcomeEmailEvent;
        this._customerCreate = data.customerCreate;
        this._customerRegister = data.customerRegister;
        this._customerUpdate = data.customerUpdate;
        this._customerDelete = data.customerDelete;
        this._customerCreateAccount = data.customerCreateAccount;
        this._customerDeleteAccount = data.customerDeleteAccount;
        this._triggerCustomerSendWelcomeEmailEvent = data.triggerCustomerSendWelcomeEmailEvent;
        this._customerCsvImport = data.customerCsvImport;
        this._addCompanyManager = data.addCompanyManager;
        this._removeCompanyManager = data.removeCompanyManager;
        this._purchaseAuthorizationConfigCreate = data.purchaseAuthorizationConfigCreate;
        this._purchaseAuthorizationConfigUpdate = data.purchaseAuthorizationConfigUpdate;
        this._purchaseAuthorizationConfigDelete = data.purchaseAuthorizationConfigDelete;
        this._valuesetCreate = data.valuesetCreate;
        this._valuesetUpdate = data.valuesetUpdate;
        this._valuesetDelete = data.valuesetDelete;
        this._valuesetItemCreate = data.valuesetItemCreate;
        this._valuesetItemUpdate = data.valuesetItemUpdate;
        this._valuesetItemDelete = data.valuesetItemDelete;
        this._warehouseCreate = data.warehouseCreate;
        this._warehouseUpdate = data.warehouseUpdate;
        this._warehouseDelete = data.warehouseDelete;
        this._warehouseAddressCreate = data.warehouseAddressCreate;
        this._warehouseAddressUpdate = data.warehouseAddressUpdate;
        this._warehouseAddressDelete = data.warehouseAddressDelete;
    }
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get userAddressCreate() {
        return this._userAddressCreate;
    }
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set userAddressCreate(value) {
        this._userAddressCreate = value;
    }
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get customerAddressCreate() {
        return this._customerAddressCreate;
    }
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set customerAddressCreate(value) {
        this._customerAddressCreate = value;
    }
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    get companyAddressCreate() {
        return this._companyAddressCreate;
    }
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    set companyAddressCreate(value) {
        this._companyAddressCreate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get externalAddressCreate() {
        return this._externalAddressCreate;
    }
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set externalAddressCreate(value) {
        this._externalAddressCreate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get userAddressUpdate() {
        return this._userAddressUpdate;
    }
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set userAddressUpdate(value) {
        this._userAddressUpdate = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get customerAddressUpdate() {
        return this._customerAddressUpdate;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set customerAddressUpdate(value) {
        this._customerAddressUpdate = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    get companyAddressUpdate() {
        return this._companyAddressUpdate;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    set companyAddressUpdate(value) {
        this._companyAddressUpdate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get externalAddressUpdate() {
        return this._externalAddressUpdate;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set externalAddressUpdate(value) {
        this._externalAddressUpdate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get userAddressDelete() {
        return this._userAddressDelete;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set userAddressDelete(value) {
        this._userAddressDelete = value;
    }
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get customerAddressDelete() {
        return this._customerAddressDelete;
    }
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set customerAddressDelete(value) {
        this._customerAddressDelete = value;
    }
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    get companyAddressDelete() {
        return this._companyAddressDelete;
    }
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    set companyAddressDelete(value) {
        this._companyAddressDelete = value;
    }
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get externalAddressDelete() {
        return this._externalAddressDelete;
    }
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set externalAddressDelete(value) {
        this._externalAddressDelete = value;
    }
    /**
     AUTH: Role=[role.OWNER]
     */
    get adminUserCreate() {
        return this._adminUserCreate;
    }
    /**
     AUTH: Role=[role.OWNER]
     */
    set adminUserCreate(value) {
        this._adminUserCreate = value;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR] OR (('user is authenticated') AND ('email if present in input matches JWT'))
     */
    get adminUserUpdate() {
        return this._adminUserUpdate;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR] OR (('user is authenticated') AND ('email if present in input matches JWT'))
     */
    set adminUserUpdate(value) {
        this._adminUserUpdate = value;
    }
    /**
     AUTH: Role=[role.OWNER]
     */
    get adminUserDelete() {
        return this._adminUserDelete;
    }
    /**
     AUTH: Role=[role.OWNER]
     */
    set adminUserDelete(value) {
        this._adminUserDelete = value;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
     */
    get adminUserTenantCreate() {
        return this._adminUserTenantCreate;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
     */
    set adminUserTenantCreate(value) {
        this._adminUserTenantCreate = value;
    }
    /**
     AUTH: Role=[role.OWNER]
     */
    get adminUserTenantDelete() {
        return this._adminUserTenantDelete;
    }
    /**
     AUTH: Role=[role.OWNER]
     */
    set adminUserTenantDelete(value) {
        this._adminUserTenantDelete = value;
    }
    /**
     attributeDescriptionCreate field
     */
    get attributeDescriptionCreate() {
        return this._attributeDescriptionCreate;
    }
    /**
     attributeDescriptionCreate field
     */
    set attributeDescriptionCreate(value) {
        this._attributeDescriptionCreate = value;
    }
    /**
     attributeDescriptionUpdate field
     */
    get attributeDescriptionUpdate() {
        return this._attributeDescriptionUpdate;
    }
    /**
     attributeDescriptionUpdate field
     */
    set attributeDescriptionUpdate(value) {
        this._attributeDescriptionUpdate = value;
    }
    /**
     attributeDescriptionDelete field
     */
    get attributeDescriptionDelete() {
        return this._attributeDescriptionDelete;
    }
    /**
     attributeDescriptionDelete field
     */
    set attributeDescriptionDelete(value) {
        this._attributeDescriptionDelete = value;
    }
    /**
     attributeDescriptionCsvImport field
     */
    get attributeDescriptionCsvImport() {
        return this._attributeDescriptionCsvImport;
    }
    /**
     attributeDescriptionCsvImport field
     */
    set attributeDescriptionCsvImport(value) {
        this._attributeDescriptionCsvImport = value;
    }
    /**
     attributeCreate field
     */
    get attributeCreate() {
        return this._attributeCreate;
    }
    /**
     attributeCreate field
     */
    set attributeCreate(value) {
        this._attributeCreate = value;
    }
    /**
     attributeUpdate field
     */
    get attributeUpdate() {
        return this._attributeUpdate;
    }
    /**
     attributeUpdate field
     */
    set attributeUpdate(value) {
        this._attributeUpdate = value;
    }
    /**
     attributeDelete field
     */
    get attributeDelete() {
        return this._attributeDelete;
    }
    /**
     attributeDelete field
     */
    set attributeDelete(value) {
        this._attributeDelete = value;
    }
    /**
     attributeCsvImport field
     */
    get attributeCsvImport() {
        return this._attributeCsvImport;
    }
    /**
     attributeCsvImport field
     */
    set attributeCsvImport(value) {
        this._attributeCsvImport = value;
    }
    /**
     Starts an anonymous firebase session
     */
    get startSession() {
        return this._startSession;
    }
    /**
     Starts an anonymous firebase session
     */
    set startSession(value) {
        this._startSession = value;
    }
    /**
     Logs in the authenticated user and returns a GCIP user session which includes the accessToken and refreshToken.
     */
    get login() {
        return this._login;
    }
    /**
     Logs in the authenticated user and returns a GCIP user session which includes the accessToken and refreshToken.
     */
    set login(value) {
        this._login = value;
    }
    /**
     AUTH: Role=[] OR ('user is authenticated')
     */
    get logout() {
        return this._logout;
    }
    /**
     AUTH: Role=[] OR ('user is authenticated')
     */
    set logout(value) {
        this._logout = value;
    }
    /**
     AUTH: Role=[system] OR ('user is anonymous')
     */
    get authenticationCreate() {
        return this._authenticationCreate;
    }
    /**
     AUTH: Role=[system] OR ('user is anonymous')
     */
    set authenticationCreate(value) {
        this._authenticationCreate = value;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get authenticationDelete() {
        return this._authenticationDelete;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set authenticationDelete(value) {
        this._authenticationDelete = value;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get claimsReset() {
        return this._claimsReset;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set claimsReset(value) {
        this._claimsReset = value;
    }
    /**
     verifyToken field
     */
    get verifyToken() {
        return this._verifyToken;
    }
    /**
     verifyToken field
     */
    set verifyToken(value) {
        this._verifyToken = value;
    }
    /**
     exchangeRefreshToken field
     */
    get exchangeRefreshToken() {
        return this._exchangeRefreshToken;
    }
    /**
     exchangeRefreshToken field
     */
    set exchangeRefreshToken(value) {
        this._exchangeRefreshToken = value;
    }
    /**
     Trigger the event to send out an reset password email. AUTH: Role=[] OR ('undefined')
     */
    get triggerPasswordSendResetEmailEvent() {
        return this._triggerPasswordSendResetEmailEvent;
    }
    /**
     Trigger the event to send out an reset password email. AUTH: Role=[] OR ('undefined')
     */
    set triggerPasswordSendResetEmailEvent(value) {
        this._triggerPasswordSendResetEmailEvent = value;
    }
    /**
     Trigger the event to send out an initialize password email. AUTH: Role=[user.OWNER]
     */
    get triggerPasswordSendInitEmailEvent() {
        return this._triggerPasswordSendInitEmailEvent;
    }
    /**
     Trigger the event to send out an initialize password email. AUTH: Role=[user.OWNER]
     */
    set triggerPasswordSendInitEmailEvent(value) {
        this._triggerPasswordSendInitEmailEvent = value;
    }
    /**
     Generates a password recovery link, that can be included in a password recovery e-mail. AUTH: Role=[user.OWNER]
     */
    get passwordResetLink() {
        return this._passwordResetLink;
    }
    /**
     Generates a password recovery link, that can be included in a password recovery e-mail. AUTH: Role=[user.OWNER]
     */
    set passwordResetLink(value) {
        this._passwordResetLink = value;
    }
    /**
     AUTH: Role=[system]
     */
    get magicTokenCreate() {
        return this._magicTokenCreate;
    }
    /**
     AUTH: Role=[system]
     */
    set magicTokenCreate(value) {
        this._magicTokenCreate = value;
    }
    /**
     AUTH: Role=[system]
     */
    get magicTokenUpdate() {
        return this._magicTokenUpdate;
    }
    /**
     AUTH: Role=[system]
     */
    set magicTokenUpdate(value) {
        this._magicTokenUpdate = value;
    }
    /**
     AUTH: Role=[system]
     */
    get magicTokenDelete() {
        return this._magicTokenDelete;
    }
    /**
     AUTH: Role=[system]
     */
    set magicTokenDelete(value) {
        this._magicTokenDelete = value;
    }
    /**
     Authenticates and logs in a contact or customer using a magic token, returning a session object with access and refresh tokens.
     */
    get magicTokenLogin() {
        return this._magicTokenLogin;
    }
    /**
     Authenticates and logs in a contact or customer using a magic token, returning a session object with access and refresh tokens.
     */
    set magicTokenLogin(value) {
        this._magicTokenLogin = value;
    }
    /**
     bundleCreate field
     */
    get bundleCreate() {
        return this._bundleCreate;
    }
    /**
     bundleCreate field
     */
    set bundleCreate(value) {
        this._bundleCreate = value;
    }
    /**
     bundleUpdate field
     */
    get bundleUpdate() {
        return this._bundleUpdate;
    }
    /**
     bundleUpdate field
     */
    set bundleUpdate(value) {
        this._bundleUpdate = value;
    }
    /**
     bundleDelete field
     */
    get bundleDelete() {
        return this._bundleDelete;
    }
    /**
     bundleDelete field
     */
    set bundleDelete(value) {
        this._bundleDelete = value;
    }
    /**
     bundleAddItems field
     */
    get bundleAddItems() {
        return this._bundleAddItems;
    }
    /**
     bundleAddItems field
     */
    set bundleAddItems(value) {
        this._bundleAddItems = value;
    }
    /**
     bundleRemoveItem field
     */
    get bundleRemoveItem() {
        return this._bundleRemoveItem;
    }
    /**
     bundleRemoveItem field
     */
    set bundleRemoveItem(value) {
        this._bundleRemoveItem = value;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get businessRuleCreate() {
        return this._businessRuleCreate;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set businessRuleCreate(value) {
        this._businessRuleCreate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleUpdate() {
        return this._businessRuleUpdate;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleUpdate(value) {
        this._businessRuleUpdate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get businessRuleDelete() {
        return this._businessRuleDelete;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set businessRuleDelete(value) {
        this._businessRuleDelete = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableAddColumn() {
        return this._businessRuleDecisionTableAddColumn;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableAddColumn(value) {
        this._businessRuleDecisionTableAddColumn = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableUpdate() {
        return this._businessRuleDecisionTableUpdate;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableUpdate(value) {
        this._businessRuleDecisionTableUpdate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableDeleteColumn() {
        return this._businessRuleDecisionTableDeleteColumn;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableDeleteColumn(value) {
        this._businessRuleDecisionTableDeleteColumn = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableAddRow() {
        return this._businessRuleDecisionTableAddRow;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableAddRow(value) {
        this._businessRuleDecisionTableAddRow = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableMoveRow() {
        return this._businessRuleDecisionTableMoveRow;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableMoveRow(value) {
        this._businessRuleDecisionTableMoveRow = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableDeleteRow() {
        return this._businessRuleDecisionTableDeleteRow;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableDeleteRow(value) {
        this._businessRuleDecisionTableDeleteRow = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableSetCell() {
        return this._businessRuleDecisionTableSetCell;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableSetCell(value) {
        this._businessRuleDecisionTableSetCell = value;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get incentiveRuleCreate() {
        return this._incentiveRuleCreate;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set incentiveRuleCreate(value) {
        this._incentiveRuleCreate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get incentiveRuleSetOrderItemConditions() {
        return this._incentiveRuleSetOrderItemConditions;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set incentiveRuleSetOrderItemConditions(value) {
        this._incentiveRuleSetOrderItemConditions = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get incentiveRuleSetAction() {
        return this._incentiveRuleSetAction;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set incentiveRuleSetAction(value) {
        this._incentiveRuleSetAction = value;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get carrierCreate() {
        return this._carrierCreate;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set carrierCreate(value) {
        this._carrierCreate = value;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    get carrierUpdate() {
        return this._carrierUpdate;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    set carrierUpdate(value) {
        this._carrierUpdate = value;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get carrierDelete() {
        return this._carrierDelete;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set carrierDelete(value) {
        this._carrierDelete = value;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    get carrierAssignWarehouse() {
        return this._carrierAssignWarehouse;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    set carrierAssignWarehouse(value) {
        this._carrierAssignWarehouse = value;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    get carrierUnassignWarehouse() {
        return this._carrierUnassignWarehouse;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    set carrierUnassignWarehouse(value) {
        this._carrierUnassignWarehouse = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    get cartStart() {
        return this._cartStart;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    set cartStart(value) {
        this._cartStart = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get cartSetUser() {
        return this._cartSetUser;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set cartSetUser(value) {
        this._cartSetUser = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    get cartSetContact() {
        return this._cartSetContact;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    set cartSetContact(value) {
        this._cartSetContact = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get cartSetCustomer() {
        return this._cartSetCustomer;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set cartSetCustomer(value) {
        this._cartSetCustomer = value;
    }
    /**
     Update existing cart
     */
    get cartUpdate() {
        return this._cartUpdate;
    }
    /**
     Update existing cart
     */
    set cartUpdate(value) {
        this._cartUpdate = value;
    }
    /**
     Delete existing cart
     */
    get cartDelete() {
        return this._cartDelete;
    }
    /**
     Delete existing cart
     */
    set cartDelete(value) {
        this._cartDelete = value;
    }
    /**
     Process cart
     */
    get cartProcess() {
        return this._cartProcess;
    }
    /**
     Process cart
     */
    set cartProcess(value) {
        this._cartProcess = value;
    }
    /**
     Add action code to the cart
     */
    get cartAddActionCode() {
        return this._cartAddActionCode;
    }
    /**
     Add action code to the cart
     */
    set cartAddActionCode(value) {
        this._cartAddActionCode = value;
    }
    /**
     Remove action code from the cart
     */
    get cartRemoveActionCode() {
        return this._cartRemoveActionCode;
    }
    /**
     Remove action code from the cart
     */
    set cartRemoveActionCode(value) {
        this._cartRemoveActionCode = value;
    }
    /**
     Update cart address
     */
    get cartUpdateAddress() {
        return this._cartUpdateAddress;
    }
    /**
     Update cart address
     */
    set cartUpdateAddress(value) {
        this._cartUpdateAddress = value;
    }
    /**
     Request cart purchase authorization. Use it to finalize a cart that cannot be processed because purchase authorization (by an anuthorization manager) is required. The cart status will be changed to PENDING_PURCHASE_AUTHORIZATION. AUTH: Role=[order.OWNER,order.EDITOR] OR ('user is authenticated')
     */
    get cartRequestPurchaseAuthorization() {
        return this._cartRequestPurchaseAuthorization;
    }
    /**
     Request cart purchase authorization. Use it to finalize a cart that cannot be processed because purchase authorization (by an anuthorization manager) is required. The cart status will be changed to PENDING_PURCHASE_AUTHORIZATION. AUTH: Role=[order.OWNER,order.EDITOR] OR ('user is authenticated')
     */
    set cartRequestPurchaseAuthorization(value) {
        this._cartRequestPurchaseAuthorization = value;
    }
    /**
     Accept cart purchase authorization request. Use it to accept ownership of a cart that requires purchase authorization and finalize it. AUTH: Role=[supervisor,admin,system,internal,order.OWNER,order.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    get cartAcceptPurchaseAuthorizationRequest() {
        return this._cartAcceptPurchaseAuthorizationRequest;
    }
    /**
     Accept cart purchase authorization request. Use it to accept ownership of a cart that requires purchase authorization and finalize it. AUTH: Role=[supervisor,admin,system,internal,order.OWNER,order.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    set cartAcceptPurchaseAuthorizationRequest(value) {
        this._cartAcceptPurchaseAuthorizationRequest = value;
    }
    /**
     Add item to the cart
     */
    get cartAddItem() {
        return this._cartAddItem;
    }
    /**
     Add item to the cart
     */
    set cartAddItem(value) {
        this._cartAddItem = value;
    }
    /**
     Add bundle item to the cart
     */
    get cartAddBundle() {
        return this._cartAddBundle;
    }
    /**
     Add bundle item to the cart
     */
    set cartAddBundle(value) {
        this._cartAddBundle = value;
    }
    /**
     Update item in the cart
     */
    get cartUpdateItem() {
        return this._cartUpdateItem;
    }
    /**
     Update item in the cart
     */
    set cartUpdateItem(value) {
        this._cartUpdateItem = value;
    }
    /**
     Update multiple items in the cart
     */
    get cartItemBulk() {
        return this._cartItemBulk;
    }
    /**
     Update multiple items in the cart
     */
    set cartItemBulk(value) {
        this._cartItemBulk = value;
    }
    /**
     Delete item from the cart
     */
    get cartDeleteItem() {
        return this._cartDeleteItem;
    }
    /**
     Delete item from the cart
     */
    set cartDeleteItem(value) {
        this._cartDeleteItem = value;
    }
    /**
     Invalidate cache for a specific cart or all carts if no id is provided
     */
    get cartInvalidateCache() {
        return this._cartInvalidateCache;
    }
    /**
     Invalidate cache for a specific cart or all carts if no id is provided
     */
    set cartInvalidateCache(value) {
        this._cartInvalidateCache = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get categoryAddProductsClusters() {
        return this._categoryAddProductsClusters;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set categoryAddProductsClusters(value) {
        this._categoryAddProductsClusters = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get categoryRemoveProductsClusters() {
        return this._categoryRemoveProductsClusters;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set categoryRemoveProductsClusters(value) {
        this._categoryRemoveProductsClusters = value;
    }
    /**
     AUTH: Role=[product.OWNER] OR ('user is authenticated')
     */
    get categoryCreate() {
        return this._categoryCreate;
    }
    /**
     AUTH: Role=[product.OWNER] OR ('user is authenticated')
     */
    set categoryCreate(value) {
        this._categoryCreate = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR] OR ('user is authenticated')
     */
    get categoryUpdate() {
        return this._categoryUpdate;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR] OR ('user is authenticated')
     */
    set categoryUpdate(value) {
        this._categoryUpdate = value;
    }
    /**
     AUTH: Role=[product.OWNER] OR ('user is authenticated')
     */
    get categoryCsvImport() {
        return this._categoryCsvImport;
    }
    /**
     AUTH: Role=[product.OWNER] OR ('user is authenticated')
     */
    set categoryCsvImport(value) {
        this._categoryCsvImport = value;
    }
    /**
     Delete category by category Id
     */
    get categoryDelete() {
        return this._categoryDelete;
    }
    /**
     Delete category by category Id
     */
    set categoryDelete(value) {
        this._categoryDelete = value;
    }
    /**
     channelInvalidateCache field
     */
    get channelInvalidateCache() {
        return this._channelInvalidateCache;
    }
    /**
     channelInvalidateCache field
     */
    set channelInvalidateCache(value) {
        this._channelInvalidateCache = value;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    get paymentCreate() {
        return this._paymentCreate;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    set paymentCreate(value) {
        this._paymentCreate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get paymentUpdate() {
        return this._paymentUpdate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set paymentUpdate(value) {
        this._paymentUpdate = value;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    get paymentDelete() {
        return this._paymentDelete;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    set paymentDelete(value) {
        this._paymentDelete = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get crossupsellCreate() {
        return this._crossupsellCreate;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set crossupsellCreate(value) {
        this._crossupsellCreate = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get crossupsellUpdate() {
        return this._crossupsellUpdate;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set crossupsellUpdate(value) {
        this._crossupsellUpdate = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get crossupsellDelete() {
        return this._crossupsellDelete;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set crossupsellDelete(value) {
        this._crossupsellDelete = value;
    }
    /**
     Deletes an EventActionConfig entity by ID
     */
    get eventActionConfigDelete() {
        return this._eventActionConfigDelete;
    }
    /**
     Deletes an EventActionConfig entity by ID
     */
    set eventActionConfigDelete(value) {
        this._eventActionConfigDelete = value;
    }
    /**
     Triggers a custom event with a custom payload
     */
    get triggerCustomEvent() {
        return this._triggerCustomEvent;
    }
    /**
     Triggers a custom event with a custom payload
     */
    set triggerCustomEvent(value) {
        this._triggerCustomEvent = value;
    }
    /**
     Creates a new EventToEmailConfig entity
     */
    get eventToEmailConfigCreate() {
        return this._eventToEmailConfigCreate;
    }
    /**
     Creates a new EventToEmailConfig entity
     */
    set eventToEmailConfigCreate(value) {
        this._eventToEmailConfigCreate = value;
    }
    /**
     Updates an existing EventToEmailConfig entity
     */
    get eventToEmailConfigUpdate() {
        return this._eventToEmailConfigUpdate;
    }
    /**
     Updates an existing EventToEmailConfig entity
     */
    set eventToEmailConfigUpdate(value) {
        this._eventToEmailConfigUpdate = value;
    }
    /**
     Creates a new EventToWebHookConfig entity
     */
    get eventToWebHookConfigCreate() {
        return this._eventToWebHookConfigCreate;
    }
    /**
     Creates a new EventToWebHookConfig entity
     */
    set eventToWebHookConfigCreate(value) {
        this._eventToWebHookConfigCreate = value;
    }
    /**
     Updates an existing  entity
     */
    get eventToWebHookConfigUpdate() {
        return this._eventToWebHookConfigUpdate;
    }
    /**
     Updates an existing  entity
     */
    set eventToWebHookConfigUpdate(value) {
        this._eventToWebHookConfigUpdate = value;
    }
    /**
     AUTH: Role=[shop.OWNER] OR (('user is authenticated') AND ('undefined'))
     */
    get favoriteListCreate() {
        return this._favoriteListCreate;
    }
    /**
     AUTH: Role=[shop.OWNER] OR (('user is authenticated') AND ('undefined'))
     */
    set favoriteListCreate(value) {
        this._favoriteListCreate = value;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get favoriteListUpdate() {
        return this._favoriteListUpdate;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set favoriteListUpdate(value) {
        this._favoriteListUpdate = value;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get favoriteListDelete() {
        return this._favoriteListDelete;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set favoriteListDelete(value) {
        this._favoriteListDelete = value;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get favoriteListAddItems() {
        return this._favoriteListAddItems;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set favoriteListAddItems(value) {
        this._favoriteListAddItems = value;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get favoriteListRemoveItems() {
        return this._favoriteListRemoveItems;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set favoriteListRemoveItems(value) {
        this._favoriteListRemoveItems = value;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get favoriteListClearItems() {
        return this._favoriteListClearItems;
    }
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set favoriteListClearItems(value) {
        this._favoriteListClearItems = value;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get inventoryCreate() {
        return this._inventoryCreate;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set inventoryCreate(value) {
        this._inventoryCreate = value;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get inventoryCsvImport() {
        return this._inventoryCsvImport;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set inventoryCsvImport(value) {
        this._inventoryCsvImport = value;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    get inventoryUpdate() {
        return this._inventoryUpdate;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    set inventoryUpdate(value) {
        this._inventoryUpdate = value;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get inventoryDelete() {
        return this._inventoryDelete;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set inventoryDelete(value) {
        this._inventoryDelete = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaImageCreate() {
        return this._mediaImageCreate;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaImageCreate(value) {
        this._mediaImageCreate = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get mediaImageUpdate() {
        return this._mediaImageUpdate;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set mediaImageUpdate(value) {
        this._mediaImageUpdate = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaImageDelete() {
        return this._mediaImageDelete;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaImageDelete(value) {
        this._mediaImageDelete = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaImageCsvImport() {
        return this._mediaImageCsvImport;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaImageCsvImport(value) {
        this._mediaImageCsvImport = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaVideoCreate() {
        return this._mediaVideoCreate;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaVideoCreate(value) {
        this._mediaVideoCreate = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get mediaVideoUpdate() {
        return this._mediaVideoUpdate;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set mediaVideoUpdate(value) {
        this._mediaVideoUpdate = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaVideoDelete() {
        return this._mediaVideoDelete;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaVideoDelete(value) {
        this._mediaVideoDelete = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaVideoCsvImport() {
        return this._mediaVideoCsvImport;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaVideoCsvImport(value) {
        this._mediaVideoCsvImport = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaDocumentCreate() {
        return this._mediaDocumentCreate;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaDocumentCreate(value) {
        this._mediaDocumentCreate = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get mediaDocumentUpdate() {
        return this._mediaDocumentUpdate;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set mediaDocumentUpdate(value) {
        this._mediaDocumentUpdate = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaDocumentDelete() {
        return this._mediaDocumentDelete;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaDocumentDelete(value) {
        this._mediaDocumentDelete = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaDocumentCsvImport() {
        return this._mediaDocumentCsvImport;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaDocumentCsvImport(value) {
        this._mediaDocumentCsvImport = value;
    }
    /**
     AUTH: Role=[order.OWNER,product.OWNER] OR (('user is authenticated') AND ('customerId or companyId if present in input matches JWT'))
     */
    get mediaAttachmentCreate() {
        return this._mediaAttachmentCreate;
    }
    /**
     AUTH: Role=[order.OWNER,product.OWNER] OR (('user is authenticated') AND ('customerId or companyId if present in input matches JWT'))
     */
    set mediaAttachmentCreate(value) {
        this._mediaAttachmentCreate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,product.OWNER,product.EDITOR]
     */
    get mediaAttachmentUpdate() {
        return this._mediaAttachmentUpdate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,product.OWNER,product.EDITOR]
     */
    set mediaAttachmentUpdate(value) {
        this._mediaAttachmentUpdate = value;
    }
    /**
     AUTH: Role=[order.OWNER,product.OWNER]
     */
    get mediaAttachmentDelete() {
        return this._mediaAttachmentDelete;
    }
    /**
     AUTH: Role=[order.OWNER,product.OWNER]
     */
    set mediaAttachmentDelete(value) {
        this._mediaAttachmentDelete = value;
    }
    /**
     Publishes an email trigger event to pub/sub, containing the abstract event data. AUTH: Role=[system]
     */
    get publishEmailEvent() {
        return this._publishEmailEvent;
    }
    /**
     Publishes an email trigger event to pub/sub, containing the abstract event data. AUTH: Role=[system]
     */
    set publishEmailEvent(value) {
        this._publishEmailEvent = value;
    }
    /**
     Publishes an email send trigger event to pub/sub containing all (processed) fields needed to send a single email. AUTH: Role=[system]
     */
    get publishEmailSendEvent() {
        return this._publishEmailSendEvent;
    }
    /**
     Publishes an email send trigger event to pub/sub containing all (processed) fields needed to send a single email. AUTH: Role=[system]
     */
    set publishEmailSendEvent(value) {
        this._publishEmailSendEvent = value;
    }
    /**
     Publishes an email trigger event to pub/sub, containing the abstract event data and the password reset link
     */
    get publishPasswordResetEmailEvent() {
        return this._publishPasswordResetEmailEvent;
    }
    /**
     Publishes an email trigger event to pub/sub, containing the abstract event data and the password reset link
     */
    set publishPasswordResetEmailEvent(value) {
        this._publishPasswordResetEmailEvent = value;
    }
    /**
     Create a new EmailTemplateAUTH: Role=[configuration.OWNER]
     */
    get emailTemplateCreate() {
        return this._emailTemplateCreate;
    }
    /**
     Create a new EmailTemplateAUTH: Role=[configuration.OWNER]
     */
    set emailTemplateCreate(value) {
        this._emailTemplateCreate = value;
    }
    /**
     Update an EmailTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get emailTemplateUpdate() {
        return this._emailTemplateUpdate;
    }
    /**
     Update an EmailTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set emailTemplateUpdate(value) {
        this._emailTemplateUpdate = value;
    }
    /**
     Create a new DocumentTemplateAUTH: Role=[configuration.OWNER]
     */
    get documentTemplateCreate() {
        return this._documentTemplateCreate;
    }
    /**
     Create a new DocumentTemplateAUTH: Role=[configuration.OWNER]
     */
    set documentTemplateCreate(value) {
        this._documentTemplateCreate = value;
    }
    /**
     Update a DocumentTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get documentTemplateUpdate() {
        return this._documentTemplateUpdate;
    }
    /**
     Update a DocumentTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set documentTemplateUpdate(value) {
        this._documentTemplateUpdate = value;
    }
    /**
     Delete an existing Template by IDAUTH: Role=[configuration.OWNER]
     */
    get templateDelete() {
        return this._templateDelete;
    }
    /**
     Delete an existing Template by IDAUTH: Role=[configuration.OWNER]
     */
    set templateDelete(value) {
        this._templateDelete = value;
    }
    /**
     Add an attachment to an EmailTemplate by ID
     */
    get emailTemplateAddAttachment() {
        return this._emailTemplateAddAttachment;
    }
    /**
     Add an attachment to an EmailTemplate by ID
     */
    set emailTemplateAddAttachment(value) {
        this._emailTemplateAddAttachment = value;
    }
    /**
     Remove an attachment from an EmailTemplate by ID
     */
    get emailTemplateRemoveAttachment() {
        return this._emailTemplateRemoveAttachment;
    }
    /**
     Remove an attachment from an EmailTemplate by ID
     */
    set emailTemplateRemoveAttachment(value) {
        this._emailTemplateRemoveAttachment = value;
    }
    /**
     Render a Template to HTML string, this mutation can be used to preview your template with a given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get templateRenderToHTML() {
        return this._templateRenderToHTML;
    }
    /**
     Render a Template to HTML string, this mutation can be used to preview your template with a given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set templateRenderToHTML(value) {
        this._templateRenderToHTML = value;
    }
    /**
     Send out an email based on the provided email template and payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get emailTemplateRenderAndSend() {
        return this._emailTemplateRenderAndSend;
    }
    /**
     Send out an email based on the provided email template and payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set emailTemplateRenderAndSend(value) {
        this._emailTemplateRenderAndSend = value;
    }
    /**
     Render a DocumentTemplate to a PDF file (Base64 string) with the given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get documentTemplateRenderToPDF() {
        return this._documentTemplateRenderToPDF;
    }
    /**
     Render a DocumentTemplate to a PDF file (Base64 string) with the given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set documentTemplateRenderToPDF(value) {
        this._documentTemplateRenderToPDF = value;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    get orderStatusCreate() {
        return this._orderStatusCreate;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    set orderStatusCreate(value) {
        this._orderStatusCreate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderStatusUpdate() {
        return this._orderStatusUpdate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderStatusUpdate(value) {
        this._orderStatusUpdate = value;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    get orderStatusDelete() {
        return this._orderStatusDelete;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    set orderStatusDelete(value) {
        this._orderStatusDelete = value;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    get orderStatusSetCreate() {
        return this._orderStatusSetCreate;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    set orderStatusSetCreate(value) {
        this._orderStatusSetCreate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderStatusSetUpdate() {
        return this._orderStatusSetUpdate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderStatusSetUpdate(value) {
        this._orderStatusSetUpdate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderStatusSetAddOrderStatuses() {
        return this._orderStatusSetAddOrderStatuses;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderStatusSetAddOrderStatuses(value) {
        this._orderStatusSetAddOrderStatuses = value;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    get orderStatusSetRemoveOrderStatuses() {
        return this._orderStatusSetRemoveOrderStatuses;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    set orderStatusSetRemoveOrderStatuses(value) {
        this._orderStatusSetRemoveOrderStatuses = value;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    get orderStatusSetDelete() {
        return this._orderStatusSetDelete;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    set orderStatusSetDelete(value) {
        this._orderStatusSetDelete = value;
    }
    /**
     AUTH: Role=[order.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    get orderCreate() {
        return this._orderCreate;
    }
    /**
     AUTH: Role=[order.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    set orderCreate(value) {
        this._orderCreate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderUpdate() {
        return this._orderUpdate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderUpdate(value) {
        this._orderUpdate = value;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    get orderDelete() {
        return this._orderDelete;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    set orderDelete(value) {
        this._orderDelete = value;
    }
    /**
     Deprecated in favor of using triggerOrderSendConfirm
     */
    get orderSendConfirmationEmail() {
        return this._orderSendConfirmationEmail;
    }
    /**
     Deprecated in favor of using triggerOrderSendConfirm
     */
    set orderSendConfirmationEmail(value) {
        this._orderSendConfirmationEmail = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get triggerOrderSendConfirm() {
        return this._triggerOrderSendConfirm;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set triggerOrderSendConfirm(value) {
        this._triggerOrderSendConfirm = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get triggerQuoteSendRequest() {
        return this._triggerQuoteSendRequest;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set triggerQuoteSendRequest(value) {
        this._triggerQuoteSendRequest = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get triggerQuoteSendValidation() {
        return this._triggerQuoteSendValidation;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set triggerQuoteSendValidation(value) {
        this._triggerQuoteSendValidation = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get triggerQuoteSend() {
        return this._triggerQuoteSend;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set triggerQuoteSend(value) {
        this._triggerQuoteSend = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderSetStatus() {
        return this._orderSetStatus;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderSetStatus(value) {
        this._orderSetStatus = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderItemCreate() {
        return this._orderItemCreate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderItemCreate(value) {
        this._orderItemCreate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderItemUpdate() {
        return this._orderItemUpdate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderItemUpdate(value) {
        this._orderItemUpdate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderItemDelete() {
        return this._orderItemDelete;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderItemDelete(value) {
        this._orderItemDelete = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderAddressUpdate() {
        return this._orderAddressUpdate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderAddressUpdate(value) {
        this._orderAddressUpdate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderUpdateAddress() {
        return this._orderUpdateAddress;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderUpdateAddress(value) {
        this._orderUpdateAddress = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get shipmentCreate() {
        return this._shipmentCreate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set shipmentCreate(value) {
        this._shipmentCreate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get shipmentUpdate() {
        return this._shipmentUpdate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set shipmentUpdate(value) {
        this._shipmentUpdate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get shipmentDelete() {
        return this._shipmentDelete;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set shipmentDelete(value) {
        this._shipmentDelete = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get shipmentItemCreate() {
        return this._shipmentItemCreate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set shipmentItemCreate(value) {
        this._shipmentItemCreate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get shipmentItemUpdate() {
        return this._shipmentItemUpdate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set shipmentItemUpdate(value) {
        this._shipmentItemUpdate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get shipmentItemDelete() {
        return this._shipmentItemDelete;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set shipmentItemDelete(value) {
        this._shipmentItemDelete = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get trackAndTraceCreate() {
        return this._trackAndTraceCreate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set trackAndTraceCreate(value) {
        this._trackAndTraceCreate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get trackAndTraceUpdate() {
        return this._trackAndTraceUpdate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set trackAndTraceUpdate(value) {
        this._trackAndTraceUpdate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get trackAndTraceDelete() {
        return this._trackAndTraceDelete;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set trackAndTraceDelete(value) {
        this._trackAndTraceDelete = value;
    }
    /**
     AUTH: Role=[shop.OWNER] OR ('user is authenticated')
     */
    get orderlistCreate() {
        return this._orderlistCreate;
    }
    /**
     AUTH: Role=[shop.OWNER] OR ('user is authenticated')
     */
    set orderlistCreate(value) {
        this._orderlistCreate = value;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistUpdate() {
        return this._orderlistUpdate;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistUpdate(value) {
        this._orderlistUpdate = value;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistAddItems() {
        return this._orderlistAddItems;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistAddItems(value) {
        this._orderlistAddItems = value;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistRemoveItems() {
        return this._orderlistRemoveItems;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistRemoveItems(value) {
        this._orderlistRemoveItems = value;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistAssignUsers() {
        return this._orderlistAssignUsers;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistAssignUsers(value) {
        this._orderlistAssignUsers = value;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistUnassignUsers() {
        return this._orderlistUnassignUsers;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistUnassignUsers(value) {
        this._orderlistUnassignUsers = value;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistAssignCompanies() {
        return this._orderlistAssignCompanies;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistAssignCompanies(value) {
        this._orderlistAssignCompanies = value;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistUnassignCompanies() {
        return this._orderlistUnassignCompanies;
    }
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistUnassignCompanies(value) {
        this._orderlistUnassignCompanies = value;
    }
    /**
     AUTH: Role=[shop.OWNER]
     */
    get orderlistDelete() {
        return this._orderlistDelete;
    }
    /**
     AUTH: Role=[shop.OWNER]
     */
    set orderlistDelete(value) {
        this._orderlistDelete = value;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get payMethodCreate() {
        return this._payMethodCreate;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set payMethodCreate(value) {
        this._payMethodCreate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get payMethodUpdate() {
        return this._payMethodUpdate;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set payMethodUpdate(value) {
        this._payMethodUpdate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get payMethodDelete() {
        return this._payMethodDelete;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set payMethodDelete(value) {
        this._payMethodDelete = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get priceCreate() {
        return this._priceCreate;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set priceCreate(value) {
        this._priceCreate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get priceCsvImport() {
        return this._priceCsvImport;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set priceCsvImport(value) {
        this._priceCsvImport = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get priceUpdate() {
        return this._priceUpdate;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set priceUpdate(value) {
        this._priceUpdate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get priceDelete() {
        return this._priceDelete;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set priceDelete(value) {
        this._priceDelete = value;
    }
    /**
     costPriceCreate field
     */
    get costPriceCreate() {
        return this._costPriceCreate;
    }
    /**
     costPriceCreate field
     */
    set costPriceCreate(value) {
        this._costPriceCreate = value;
    }
    /**
     costPriceUpdate field
     */
    get costPriceUpdate() {
        return this._costPriceUpdate;
    }
    /**
     costPriceUpdate field
     */
    set costPriceUpdate(value) {
        this._costPriceUpdate = value;
    }
    /**
     costPriceDelete field
     */
    get costPriceDelete() {
        return this._costPriceDelete;
    }
    /**
     costPriceDelete field
     */
    set costPriceDelete(value) {
        this._costPriceDelete = value;
    }
    /**
     costPricesBulk field
     */
    get costPricesBulk() {
        return this._costPricesBulk;
    }
    /**
     costPricesBulk field
     */
    set costPricesBulk(value) {
        this._costPricesBulk = value;
    }
    /**
     costPricesDelete field
     */
    get costPricesDelete() {
        return this._costPricesDelete;
    }
    /**
     costPricesDelete field
     */
    set costPricesDelete(value) {
        this._costPricesDelete = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get pricesheetCreate() {
        return this._pricesheetCreate;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set pricesheetCreate(value) {
        this._pricesheetCreate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get pricesheetUpdate() {
        return this._pricesheetUpdate;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set pricesheetUpdate(value) {
        this._pricesheetUpdate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get pricesheetCsvImport() {
        return this._pricesheetCsvImport;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set pricesheetCsvImport(value) {
        this._pricesheetCsvImport = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get pricesheetDelete() {
        return this._pricesheetDelete;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set pricesheetDelete(value) {
        this._pricesheetDelete = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get pricesheetAssign() {
        return this._pricesheetAssign;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set pricesheetAssign(value) {
        this._pricesheetAssign = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get pricesheetUnassign() {
        return this._pricesheetUnassign;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set pricesheetUnassign(value) {
        this._pricesheetUnassign = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get discountCreate() {
        return this._discountCreate;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set discountCreate(value) {
        this._discountCreate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get discountUpdate() {
        return this._discountUpdate;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set discountUpdate(value) {
        this._discountUpdate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get discountDelete() {
        return this._discountDelete;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set discountDelete(value) {
        this._discountDelete = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get discountsDeleteByPricesheetId() {
        return this._discountsDeleteByPricesheetId;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set discountsDeleteByPricesheetId(value) {
        this._discountsDeleteByPricesheetId = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get discountCsvImport() {
        return this._discountCsvImport;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set discountCsvImport(value) {
        this._discountCsvImport = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkPriceCreate() {
        return this._bulkPriceCreate;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkPriceCreate(value) {
        this._bulkPriceCreate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get bulkPriceUpdate() {
        return this._bulkPriceUpdate;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set bulkPriceUpdate(value) {
        this._bulkPriceUpdate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkPriceCsvImport() {
        return this._bulkPriceCsvImport;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkPriceCsvImport(value) {
        this._bulkPriceCsvImport = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkPriceDelete() {
        return this._bulkPriceDelete;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkPriceDelete(value) {
        this._bulkPriceDelete = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkPricesCreate() {
        return this._bulkPricesCreate;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkPricesCreate(value) {
        this._bulkPricesCreate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkPricesDelete() {
        return this._bulkPricesDelete;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkPricesDelete(value) {
        this._bulkPricesDelete = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkCostPriceCreate() {
        return this._bulkCostPriceCreate;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkCostPriceCreate(value) {
        this._bulkCostPriceCreate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get bulkCostPriceUpdate() {
        return this._bulkCostPriceUpdate;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set bulkCostPriceUpdate(value) {
        this._bulkCostPriceUpdate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkCostPriceCsvImport() {
        return this._bulkCostPriceCsvImport;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkCostPriceCsvImport(value) {
        this._bulkCostPriceCsvImport = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkCostPriceDelete() {
        return this._bulkCostPriceDelete;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkCostPriceDelete(value) {
        this._bulkCostPriceDelete = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkCostPricesBulk() {
        return this._bulkCostPricesBulk;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkCostPricesBulk(value) {
        this._bulkCostPricesBulk = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkCostPricesDelete() {
        return this._bulkCostPricesDelete;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkCostPricesDelete(value) {
        this._bulkCostPricesDelete = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get zoneTaxCodeCreate() {
        return this._zoneTaxCodeCreate;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set zoneTaxCodeCreate(value) {
        this._zoneTaxCodeCreate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get zoneTaxCodeUpdate() {
        return this._zoneTaxCodeUpdate;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set zoneTaxCodeUpdate(value) {
        this._zoneTaxCodeUpdate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get zoneTaxCodeDelete() {
        return this._zoneTaxCodeDelete;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set zoneTaxCodeDelete(value) {
        this._zoneTaxCodeDelete = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get zoneTaxCodesCreate() {
        return this._zoneTaxCodesCreate;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set zoneTaxCodesCreate(value) {
        this._zoneTaxCodesCreate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get zoneTaxCodesDelete() {
        return this._zoneTaxCodesDelete;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set zoneTaxCodesDelete(value) {
        this._zoneTaxCodesDelete = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get taxCreate() {
        return this._taxCreate;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set taxCreate(value) {
        this._taxCreate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get taxUpdate() {
        return this._taxUpdate;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set taxUpdate(value) {
        this._taxUpdate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get taxDelete() {
        return this._taxDelete;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set taxDelete(value) {
        this._taxDelete = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get productCreate() {
        return this._productCreate;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set productCreate(value) {
        this._productCreate = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get productUpdate() {
        return this._productUpdate;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set productUpdate(value) {
        this._productUpdate = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get productDelete() {
        return this._productDelete;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set productDelete(value) {
        this._productDelete = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get productCsvImport() {
        return this._productCsvImport;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set productCsvImport(value) {
        this._productCsvImport = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterOptionCreate() {
        return this._clusterOptionCreate;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterOptionCreate(value) {
        this._clusterOptionCreate = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get clusterOptionUpdate() {
        return this._clusterOptionUpdate;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set clusterOptionUpdate(value) {
        this._clusterOptionUpdate = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterOptionDelete() {
        return this._clusterOptionDelete;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterOptionDelete(value) {
        this._clusterOptionDelete = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterProductCreate() {
        return this._clusterProductCreate;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterProductCreate(value) {
        this._clusterProductCreate = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get clusterProductUpdate() {
        return this._clusterProductUpdate;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set clusterProductUpdate(value) {
        this._clusterProductUpdate = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterProductDelete() {
        return this._clusterProductDelete;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterProductDelete(value) {
        this._clusterProductDelete = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterCreate() {
        return this._clusterCreate;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterCreate(value) {
        this._clusterCreate = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get clusterUpdate() {
        return this._clusterUpdate;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set clusterUpdate(value) {
        this._clusterUpdate = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterCsvImport() {
        return this._clusterCsvImport;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterCsvImport(value) {
        this._clusterCsvImport = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterDelete() {
        return this._clusterDelete;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterDelete(value) {
        this._clusterDelete = value;
    }
    /**
     AUTH: Role=[product.OWNER] Assigns existing products to a cluster.
     */
    get clusterAssignProducts() {
        return this._clusterAssignProducts;
    }
    /**
     AUTH: Role=[product.OWNER] Assigns existing products to a cluster.
     */
    set clusterAssignProducts(value) {
        this._clusterAssignProducts = value;
    }
    /**
     AUTH: Role=[product.OWNER] Unassigns specified products from a cluster, moving them to either a specified category or another cluster.
     */
    get clusterUnassignProducts() {
        return this._clusterUnassignProducts;
    }
    /**
     AUTH: Role=[product.OWNER] Unassigns specified products from a cluster, moving them to either a specified category or another cluster.
     */
    set clusterUnassignProducts(value) {
        this._clusterUnassignProducts = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterConfigCreate() {
        return this._clusterConfigCreate;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterConfigCreate(value) {
        this._clusterConfigCreate = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterConfigDelete() {
        return this._clusterConfigDelete;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterConfigDelete(value) {
        this._clusterConfigDelete = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterConfigAddSetting() {
        return this._clusterConfigAddSetting;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterConfigAddSetting(value) {
        this._clusterConfigAddSetting = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterConfigUpdateSetting() {
        return this._clusterConfigUpdateSetting;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterConfigUpdateSetting(value) {
        this._clusterConfigUpdateSetting = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterConfigRemoveSetting() {
        return this._clusterConfigRemoveSetting;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterConfigRemoveSetting(value) {
        this._clusterConfigRemoveSetting = value;
    }
    /**
     roleDefinitionCreate field
     */
    get roleDefinitionCreate() {
        return this._roleDefinitionCreate;
    }
    /**
     roleDefinitionCreate field
     */
    set roleDefinitionCreate(value) {
        this._roleDefinitionCreate = value;
    }
    /**
     roleDefinitionUpdate field
     */
    get roleDefinitionUpdate() {
        return this._roleDefinitionUpdate;
    }
    /**
     roleDefinitionUpdate field
     */
    set roleDefinitionUpdate(value) {
        this._roleDefinitionUpdate = value;
    }
    /**
     roleDefinitionDelete field
     */
    get roleDefinitionDelete() {
        return this._roleDefinitionDelete;
    }
    /**
     roleDefinitionDelete field
     */
    set roleDefinitionDelete(value) {
        this._roleDefinitionDelete = value;
    }
    /**
     AUTH: Role=[role.OWNER]
     */
    get roleCreate() {
        return this._roleCreate;
    }
    /**
     AUTH: Role=[role.OWNER]
     */
    set roleCreate(value) {
        this._roleCreate = value;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR]
     */
    get roleUpdate() {
        return this._roleUpdate;
    }
    /**
     AUTH: Role=[role.OWNER,role.EDITOR]
     */
    set roleUpdate(value) {
        this._roleUpdate = value;
    }
    /**
     AUTH: Role=[role.OWNER]
     */
    get roleDelete() {
        return this._roleDelete;
    }
    /**
     AUTH: Role=[role.OWNER]
     */
    set roleDelete(value) {
        this._roleDelete = value;
    }
    /**
     shopInvalidateCache field
     */
    get shopInvalidateCache() {
        return this._shopInvalidateCache;
    }
    /**
     shopInvalidateCache field
     */
    set shopInvalidateCache(value) {
        this._shopInvalidateCache = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get machineCreate() {
        return this._machineCreate;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set machineCreate(value) {
        this._machineCreate = value;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    get machineDelete() {
        return this._machineDelete;
    }
    /**
     AUTH: Role=[product.OWNER]
     */
    set machineDelete(value) {
        this._machineDelete = value;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get machineUpsert() {
        return this._machineUpsert;
    }
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set machineUpsert(value) {
        this._machineUpsert = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get surchargeCreate() {
        return this._surchargeCreate;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set surchargeCreate(value) {
        this._surchargeCreate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get surchargeUpdate() {
        return this._surchargeUpdate;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set surchargeUpdate(value) {
        this._surchargeUpdate = value;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get surchargeDelete() {
        return this._surchargeDelete;
    }
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set surchargeDelete(value) {
        this._surchargeDelete = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get addSurchargesToProduct() {
        return this._addSurchargesToProduct;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set addSurchargesToProduct(value) {
        this._addSurchargesToProduct = value;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get removeSurchargesFromProduct() {
        return this._removeSurchargesFromProduct;
    }
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set removeSurchargesFromProduct(value) {
        this._removeSurchargesFromProduct = value;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    get tenderStart() {
        return this._tenderStart;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    set tenderStart(value) {
        this._tenderStart = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdateAddress() {
        return this._tenderUpdateAddress;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdateAddress(value) {
        this._tenderUpdateAddress = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderAddItems() {
        return this._tenderAddItems;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderAddItems(value) {
        this._tenderAddItems = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdateItem() {
        return this._tenderUpdateItem;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdateItem(value) {
        this._tenderUpdateItem = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderDeleteItem() {
        return this._tenderDeleteItem;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderDeleteItem(value) {
        this._tenderDeleteItem = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdateInvoiceUser() {
        return this._tenderUpdateInvoiceUser;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdateInvoiceUser(value) {
        this._tenderUpdateInvoiceUser = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdate() {
        return this._tenderUpdate;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdate(value) {
        this._tenderUpdate = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdateDiscount() {
        return this._tenderUpdateDiscount;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdateDiscount(value) {
        this._tenderUpdateDiscount = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdatePostage() {
        return this._tenderUpdatePostage;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdatePostage(value) {
        this._tenderUpdatePostage = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdatePayment() {
        return this._tenderUpdatePayment;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdatePayment(value) {
        this._tenderUpdatePayment = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderApplyIncentives() {
        return this._tenderApplyIncentives;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderApplyIncentives(value) {
        this._tenderApplyIncentives = value;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderProcess() {
        return this._tenderProcess;
    }
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderProcess(value) {
        this._tenderProcess = value;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    get tenderDelete() {
        return this._tenderDelete;
    }
    /**
     AUTH: Role=[order.OWNER]
     */
    set tenderDelete(value) {
        this._tenderDelete = value;
    }
    /**
     usergroupCreate field
     */
    get usergroupCreate() {
        return this._usergroupCreate;
    }
    /**
     usergroupCreate field
     */
    set usergroupCreate(value) {
        this._usergroupCreate = value;
    }
    /**
     usergroupUpdate field
     */
    get usergroupUpdate() {
        return this._usergroupUpdate;
    }
    /**
     usergroupUpdate field
     */
    set usergroupUpdate(value) {
        this._usergroupUpdate = value;
    }
    /**
     usergroupDelete field
     */
    get usergroupDelete() {
        return this._usergroupDelete;
    }
    /**
     usergroupDelete field
     */
    set usergroupDelete(value) {
        this._usergroupDelete = value;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    get companyCreate() {
        return this._companyCreate;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    set companyCreate(value) {
        this._companyCreate = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    get companyUpdate() {
        return this._companyUpdate;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    set companyUpdate(value) {
        this._companyUpdate = value;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    get companyDelete() {
        return this._companyDelete;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    set companyDelete(value) {
        this._companyDelete = value;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    get companyCsvImport() {
        return this._companyCsvImport;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    set companyCsvImport(value) {
        this._companyCsvImport = value;
    }
    /**
     Creates a new contact, if you want this new contact to be able to login, please use contactRegister. AUTH: Role=[user.OWNER]
     */
    get contactCreate() {
        return this._contactCreate;
    }
    /**
     Creates a new contact, if you want this new contact to be able to login, please use contactRegister. AUTH: Role=[user.OWNER]
     */
    set contactCreate(value) {
        this._contactCreate = value;
    }
    /**
     Creates a new contact and a new login account for this contact. AUTH: Role=[user.OWNER]
     */
    get contactRegister() {
        return this._contactRegister;
    }
    /**
     Creates a new contact and a new login account for this contact. AUTH: Role=[user.OWNER]
     */
    set contactRegister(value) {
        this._contactRegister = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    get contactUpdate() {
        return this._contactUpdate;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    set contactUpdate(value) {
        this._contactUpdate = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    get contactAddToCompanies() {
        return this._contactAddToCompanies;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    set contactAddToCompanies(value) {
        this._contactAddToCompanies = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    get contactRemoveFromCompanies() {
        return this._contactRemoveFromCompanies;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    set contactRemoveFromCompanies(value) {
        this._contactRemoveFromCompanies = value;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    get contactDelete() {
        return this._contactDelete;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    set contactDelete(value) {
        this._contactDelete = value;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    get contactCreateAccount() {
        return this._contactCreateAccount;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    set contactCreateAccount(value) {
        this._contactCreateAccount = value;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    get contactDeleteAccount() {
        return this._contactDeleteAccount;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    set contactDeleteAccount(value) {
        this._contactDeleteAccount = value;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    get contactCsvImport() {
        return this._contactCsvImport;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    set contactCsvImport(value) {
        this._contactCsvImport = value;
    }
    /**
     triggerContactSendWelcomeEmailEvent field
     */
    get triggerContactSendWelcomeEmailEvent() {
        return this._triggerContactSendWelcomeEmailEvent;
    }
    /**
     triggerContactSendWelcomeEmailEvent field
     */
    set triggerContactSendWelcomeEmailEvent(value) {
        this._triggerContactSendWelcomeEmailEvent = value;
    }
    /**
     Creates a new customer, if you want this new customer to be able to login, please use customerRegister. AUTH: Role=[user.OWNER]
     */
    get customerCreate() {
        return this._customerCreate;
    }
    /**
     Creates a new customer, if you want this new customer to be able to login, please use customerRegister. AUTH: Role=[user.OWNER]
     */
    set customerCreate(value) {
        this._customerCreate = value;
    }
    /**
     Creates a new customer and a new login account for this customer. AUTH: Role=[user.OWNER]
     */
    get customerRegister() {
        return this._customerRegister;
    }
    /**
     Creates a new customer and a new login account for this customer. AUTH: Role=[user.OWNER]
     */
    set customerRegister(value) {
        this._customerRegister = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get customerUpdate() {
        return this._customerUpdate;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set customerUpdate(value) {
        this._customerUpdate = value;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    get customerDelete() {
        return this._customerDelete;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    set customerDelete(value) {
        this._customerDelete = value;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    get customerCreateAccount() {
        return this._customerCreateAccount;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    set customerCreateAccount(value) {
        this._customerCreateAccount = value;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    get customerDeleteAccount() {
        return this._customerDeleteAccount;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    set customerDeleteAccount(value) {
        this._customerDeleteAccount = value;
    }
    /**
     triggerCustomerSendWelcomeEmailEvent field
     */
    get triggerCustomerSendWelcomeEmailEvent() {
        return this._triggerCustomerSendWelcomeEmailEvent;
    }
    /**
     triggerCustomerSendWelcomeEmailEvent field
     */
    set triggerCustomerSendWelcomeEmailEvent(value) {
        this._triggerCustomerSendWelcomeEmailEvent = value;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    get customerCsvImport() {
        return this._customerCsvImport;
    }
    /**
     AUTH: Role=[user.OWNER]
     */
    set customerCsvImport(value) {
        this._customerCsvImport = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR]
     */
    get addCompanyManager() {
        return this._addCompanyManager;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR]
     */
    set addCompanyManager(value) {
        this._addCompanyManager = value;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR]
     */
    get removeCompanyManager() {
        return this._removeCompanyManager;
    }
    /**
     AUTH: Role=[user.OWNER,user.EDITOR]
     */
    set removeCompanyManager(value) {
        this._removeCompanyManager = value;
    }
    /**
     Creates a PurchaseAuthorizationConfig entity for a contact within a company. AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')),
     */
    get purchaseAuthorizationConfigCreate() {
        return this._purchaseAuthorizationConfigCreate;
    }
    /**
     Creates a PurchaseAuthorizationConfig entity for a contact within a company. AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')),
     */
    set purchaseAuthorizationConfigCreate(value) {
        this._purchaseAuthorizationConfigCreate = value;
    }
    /**
     Updates a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER,user.EDITOR] OR ('user is authenticated'),
     */
    get purchaseAuthorizationConfigUpdate() {
        return this._purchaseAuthorizationConfigUpdate;
    }
    /**
     Updates a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER,user.EDITOR] OR ('user is authenticated'),
     */
    set purchaseAuthorizationConfigUpdate(value) {
        this._purchaseAuthorizationConfigUpdate = value;
    }
    /**
     Deletes a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER] OR ('user is authenticated'),
     */
    get purchaseAuthorizationConfigDelete() {
        return this._purchaseAuthorizationConfigDelete;
    }
    /**
     Deletes a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER] OR ('user is authenticated'),
     */
    set purchaseAuthorizationConfigDelete(value) {
        this._purchaseAuthorizationConfigDelete = value;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get valuesetCreate() {
        return this._valuesetCreate;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set valuesetCreate(value) {
        this._valuesetCreate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get valuesetUpdate() {
        return this._valuesetUpdate;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set valuesetUpdate(value) {
        this._valuesetUpdate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get valuesetDelete() {
        return this._valuesetDelete;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set valuesetDelete(value) {
        this._valuesetDelete = value;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get valuesetItemCreate() {
        return this._valuesetItemCreate;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set valuesetItemCreate(value) {
        this._valuesetItemCreate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get valuesetItemUpdate() {
        return this._valuesetItemUpdate;
    }
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set valuesetItemUpdate(value) {
        this._valuesetItemUpdate = value;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get valuesetItemDelete() {
        return this._valuesetItemDelete;
    }
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set valuesetItemDelete(value) {
        this._valuesetItemDelete = value;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get warehouseCreate() {
        return this._warehouseCreate;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set warehouseCreate(value) {
        this._warehouseCreate = value;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    get warehouseUpdate() {
        return this._warehouseUpdate;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    set warehouseUpdate(value) {
        this._warehouseUpdate = value;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get warehouseDelete() {
        return this._warehouseDelete;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set warehouseDelete(value) {
        this._warehouseDelete = value;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get warehouseAddressCreate() {
        return this._warehouseAddressCreate;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set warehouseAddressCreate(value) {
        this._warehouseAddressCreate = value;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    get warehouseAddressUpdate() {
        return this._warehouseAddressUpdate;
    }
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    set warehouseAddressUpdate(value) {
        this._warehouseAddressUpdate = value;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get warehouseAddressDelete() {
        return this._warehouseAddressDelete;
    }
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set warehouseAddressDelete(value) {
        this._warehouseAddressDelete = value;
    }
}
exports.Mutation = Mutation;
//# sourceMappingURL=Mutation.js.map