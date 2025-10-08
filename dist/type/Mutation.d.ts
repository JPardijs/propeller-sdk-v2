import { Address } from './Address';
import { ExternalAddress } from './ExternalAddress';
import { AdminUser } from './AdminUser';
import { AdminUserTenant } from './AdminUserTenant';
import { AttributeDescription } from './AttributeDescription';
import { CsvImportResponse } from './CsvImportResponse';
import { Attribute } from './Attribute';
import { Login } from './Login';
import { Logout } from './Logout';
import { VerifyToken } from './VerifyToken';
import { RefreshTokenResponse } from './RefreshTokenResponse';
import { MagicToken } from './MagicToken';
import { Bundle } from './Bundle';
import { BundleItem } from './BundleItem';
import { BusinessRule } from './BusinessRule';
import { BusinessRuleDecisionTable } from './BusinessRuleDecisionTable';
import { Carrier } from './Carrier';
import { Cart } from './Cart';
import { CartProcessResponse } from './CartProcessResponse';
import { BulkResponseData } from './BulkResponseData';
import { CategoryAddProductsClustersResponse } from './CategoryAddProductsClustersResponse';
import { CategoryRemoveProductsClustersResponse } from './CategoryRemoveProductsClustersResponse';
import { Category } from './Category';
import { Payment } from './Payment';
import { Crossupsell } from './Crossupsell';
import { EventToEmailConfig } from './EventToEmailConfig';
import { EventToWebHookConfig } from './EventToWebHookConfig';
import { FavoriteList } from './FavoriteList';
import { InventoryResponse } from './InventoryResponse';
import { InventoryDeleteResponse } from './InventoryDeleteResponse';
import { MediaImage } from './MediaImage';
import { DeleteMediaImageResponse } from './DeleteMediaImageResponse';
import { MediaVideo } from './MediaVideo';
import { DeleteMediaVideoResponse } from './DeleteMediaVideoResponse';
import { MediaDocument } from './MediaDocument';
import { DeleteMediaDocumentResponse } from './DeleteMediaDocumentResponse';
import { MediaAttachment } from './MediaAttachment';
import { DeleteMediaAttachmentResponse } from './DeleteMediaAttachmentResponse';
import { PublishEmailEventResponse } from './PublishEmailEventResponse';
import { EmailTemplate } from './EmailTemplate';
import { DocumentTemplate } from './DocumentTemplate';
import { Base64File } from './Base64File';
import { OrderStatus } from './OrderStatus';
import { OrderStatusSet } from './OrderStatusSet';
import { Order } from './Order';
import { SendOrderConfirmResponseType } from './SendOrderConfirmResponseType';
import { OrderItem } from './OrderItem';
import { OrderAddress } from './OrderAddress';
import { Shipment } from './Shipment';
import { ShipmentItem } from './ShipmentItem';
import { TrackAndTrace } from './TrackAndTrace';
import { Orderlist } from './Orderlist';
import { PayMethod } from './PayMethod';
import { Price } from './Price';
import { CostPrice } from './CostPrice';
import { Pricesheet } from './Pricesheet';
import { Discount } from './Discount';
import { BulkPrice } from './BulkPrice';
import { BulkCostPrice } from './BulkCostPrice';
import { ZoneTaxCode } from './ZoneTaxCode';
import { Tax } from './Tax';
import { Product } from './Product';
import { ClusterOption } from './ClusterOption';
import { Cluster } from './Cluster';
import { ClusterAssignProductsResponse } from './ClusterAssignProductsResponse';
import { ClusterUnassignProductsResponse } from './ClusterUnassignProductsResponse';
import { ClusterConfigResponse } from './ClusterConfigResponse';
import { ClusterConfigSettingResponse } from './ClusterConfigSettingResponse';
import { UpdateClusterConfigSettingResponse } from './UpdateClusterConfigSettingResponse';
import { RoleDefinition } from './RoleDefinition';
import { Role } from './Role';
import { SparePartsMachine } from './SparePartsMachine';
import { Surcharge } from './Surcharge';
import { ConfirmationResponse } from './ConfirmationResponse';
import { Tender } from './Tender';
import { TenderResponse } from './TenderResponse';
import { TenderProcessResponse } from './TenderProcessResponse';
import { Usergroup } from './Usergroup';
import { Company } from './Company';
import { Contact } from './Contact';
import { RegisterContactResponse } from './RegisterContactResponse';
import { ContactAddToCompaniesResponse } from './ContactAddToCompaniesResponse';
import { ContactRemoveFromCompaniesResponse } from './ContactRemoveFromCompaniesResponse';
import { Customer } from './Customer';
import { RegisterCustomerResponse } from './RegisterCustomerResponse';
import { PurchaseAuthorizationConfig } from './PurchaseAuthorizationConfig';
import { Valueset } from './Valueset';
import { ValuesetItem } from './ValuesetItem';
import { Warehouse } from './Warehouse';
import { WarehouseAddress } from './WarehouseAddress';
/**
 Object class for Mutation
 */
export declare class Mutation {
    /** AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
    private _userAddressCreate;
    /** AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
    private _customerAddressCreate;
    /** AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')) */
    private _companyAddressCreate;
    /** AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
    private _externalAddressCreate;
    /** AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
    private _userAddressUpdate;
    /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
    private _customerAddressUpdate;
    /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')) */
    private _companyAddressUpdate;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
    private _externalAddressUpdate;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
    private _userAddressDelete;
    /** AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
    private _customerAddressDelete;
    /** AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')) */
    private _companyAddressDelete;
    /** AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
    private _externalAddressDelete;
    /** AUTH: Role=[role.OWNER] */
    private _adminUserCreate;
    /** AUTH: Role=[role.OWNER,role.EDITOR] OR (('user is authenticated') AND ('email if present in input matches JWT')) */
    private _adminUserUpdate;
    /** AUTH: Role=[role.OWNER] */
    private _adminUserDelete;
    /** AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER] */
    private _adminUserTenantCreate;
    /** AUTH: Role=[role.OWNER] */
    private _adminUserTenantDelete;
    /** attributeDescriptionCreate field */
    private _attributeDescriptionCreate;
    /** attributeDescriptionUpdate field */
    private _attributeDescriptionUpdate;
    /** attributeDescriptionDelete field */
    private _attributeDescriptionDelete;
    /** attributeDescriptionCsvImport field */
    private _attributeDescriptionCsvImport;
    /** attributeCreate field */
    private _attributeCreate;
    /** attributeUpdate field */
    private _attributeUpdate;
    /** attributeDelete field */
    private _attributeDelete;
    /** attributeCsvImport field */
    private _attributeCsvImport;
    /** Starts an anonymous firebase session */
    private _startSession;
    /** Logs in the authenticated user and returns a GCIP user session which includes the accessToken and refreshToken. */
    private _login;
    /** AUTH: Role=[] OR ('user is authenticated') */
    /** @deprecated signOut mutation will be available in the future */
    private _logout?;
    /** AUTH: Role=[system] OR ('user is anonymous') */
    private _authenticationCreate;
    /** AUTH: Role=[system] OR ('user is authenticated') */
    private _authenticationDelete;
    /** AUTH: Role=[system] OR ('user is authenticated') */
    private _claimsReset;
    /** verifyToken field */
    private _verifyToken;
    /** exchangeRefreshToken field */
    private _exchangeRefreshToken;
    /** Trigger the event to send out an reset password email. AUTH: Role=[] OR ('undefined') */
    private _triggerPasswordSendResetEmailEvent;
    /** Trigger the event to send out an initialize password email. AUTH: Role=[user.OWNER] */
    private _triggerPasswordSendInitEmailEvent;
    /** Generates a password recovery link, that can be included in a password recovery e-mail. AUTH: Role=[user.OWNER] */
    private _passwordResetLink;
    /** AUTH: Role=[system] */
    private _magicTokenCreate;
    /** AUTH: Role=[system] */
    private _magicTokenUpdate;
    /** AUTH: Role=[system] */
    private _magicTokenDelete;
    /** Authenticates and logs in a contact or customer using a magic token, returning a session object with access and refresh tokens. */
    private _magicTokenLogin;
    /** bundleCreate field */
    private _bundleCreate;
    /** bundleUpdate field */
    private _bundleUpdate;
    /** bundleDelete field */
    private _bundleDelete;
    /** bundleAddItems field */
    private _bundleAddItems;
    /** bundleRemoveItem field */
    private _bundleRemoveItem;
    /** AUTH: Role=[configuration.OWNER] */
    private _businessRuleCreate;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _businessRuleUpdate;
    /** AUTH: Role=[configuration.OWNER] */
    private _businessRuleDelete;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _businessRuleDecisionTableAddColumn;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _businessRuleDecisionTableUpdate;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _businessRuleDecisionTableDeleteColumn;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _businessRuleDecisionTableAddRow;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _businessRuleDecisionTableMoveRow;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _businessRuleDecisionTableDeleteRow;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _businessRuleDecisionTableSetCell;
    /** AUTH: Role=[configuration.OWNER] */
    private _incentiveRuleCreate;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _incentiveRuleSetOrderItemConditions;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _incentiveRuleSetAction;
    /** AUTH: Role=[logistics.OWNER] */
    private _carrierCreate;
    /** AUTH: Role=[logistics.OWNER,logistics.EDITOR] */
    private _carrierUpdate;
    /** AUTH: Role=[logistics.OWNER] */
    private _carrierDelete;
    /** AUTH: Role=[logistics.OWNER,logistics.EDITOR] */
    private _carrierAssignWarehouse;
    /** AUTH: Role=[logistics.OWNER,logistics.EDITOR] */
    private _carrierUnassignWarehouse;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT')) */
    private _cartStart;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT')) */
    /** @deprecated Will be removed in the future, please use `cartSetContact` or `cartSetCustomer` mutations instead. */
    private _cartSetUser;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT')) */
    private _cartSetContact;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
    private _cartSetCustomer;
    /** Update existing cart */
    private _cartUpdate;
    /** Delete existing cart */
    private _cartDelete;
    /** Process cart */
    private _cartProcess;
    /** Add action code to the cart */
    private _cartAddActionCode;
    /** Remove action code from the cart */
    private _cartRemoveActionCode;
    /** Update cart address */
    private _cartUpdateAddress;
    /** Request cart purchase authorization. Use it to finalize a cart that cannot be processed because purchase authorization (by an anuthorization manager) is required. The cart status will be changed to PENDING_PURCHASE_AUTHORIZATION. AUTH: Role=[order.OWNER,order.EDITOR] OR ('user is authenticated') */
    private _cartRequestPurchaseAuthorization;
    /** Accept cart purchase authorization request. Use it to accept ownership of a cart that requires purchase authorization and finalize it. AUTH: Role=[supervisor,admin,system,internal,order.OWNER,order.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT')) */
    private _cartAcceptPurchaseAuthorizationRequest;
    /** Add item to the cart */
    private _cartAddItem;
    /** Add bundle item to the cart */
    private _cartAddBundle;
    /** Update item in the cart */
    private _cartUpdateItem;
    /** Update multiple items in the cart */
    private _cartItemBulk;
    /** Delete item from the cart */
    private _cartDeleteItem;
    /** Invalidate cache for a specific cart or all carts if no id is provided */
    private _cartInvalidateCache;
    /** AUTH: Role=[product.OWNER,product.EDITOR] */
    private _categoryAddProductsClusters;
    /** AUTH: Role=[product.OWNER,product.EDITOR] */
    private _categoryRemoveProductsClusters;
    /** AUTH: Role=[product.OWNER] OR ('user is authenticated') */
    private _categoryCreate;
    /** AUTH: Role=[product.OWNER,product.EDITOR] OR ('user is authenticated') */
    private _categoryUpdate;
    /** AUTH: Role=[product.OWNER] OR ('user is authenticated') */
    private _categoryCsvImport;
    /** Delete category by category Id */
    private _categoryDelete;
    /** channelInvalidateCache field */
    private _channelInvalidateCache;
    /** AUTH: Role=[order.OWNER] */
    private _paymentCreate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _paymentUpdate;
    /** AUTH: Role=[order.OWNER] */
    private _paymentDelete;
    /** AUTH: Role=[product.OWNER] */
    private _crossupsellCreate;
    /** AUTH: Role=[product.OWNER,product.EDITOR] */
    private _crossupsellUpdate;
    /** AUTH: Role=[product.OWNER] */
    private _crossupsellDelete;
    /** Deletes an EventActionConfig entity by ID */
    private _eventActionConfigDelete;
    /** Triggers a custom event with a custom payload */
    private _triggerCustomEvent;
    /** Creates a new EventToEmailConfig entity */
    private _eventToEmailConfigCreate;
    /** Updates an existing EventToEmailConfig entity */
    private _eventToEmailConfigUpdate;
    /** Creates a new EventToWebHookConfig entity */
    private _eventToWebHookConfigCreate;
    /** Updates an existing  entity */
    private _eventToWebHookConfigUpdate;
    /** AUTH: Role=[shop.OWNER] OR (('user is authenticated') AND ('undefined')) */
    private _favoriteListCreate;
    /** AUTH: Role=[system] OR ('user is authenticated') */
    private _favoriteListUpdate;
    /** AUTH: Role=[system] OR ('user is authenticated') */
    private _favoriteListDelete;
    /** AUTH: Role=[system] OR ('user is authenticated') */
    private _favoriteListAddItems;
    /** AUTH: Role=[system] OR ('user is authenticated') */
    private _favoriteListRemoveItems;
    /** AUTH: Role=[system] OR ('user is authenticated') */
    private _favoriteListClearItems;
    /** AUTH: Role=[logistics.OWNER] */
    private _inventoryCreate;
    /** AUTH: Role=[logistics.OWNER] */
    private _inventoryCsvImport;
    /** AUTH: Role=[logistics.OWNER,logistics.EDITOR] */
    private _inventoryUpdate;
    /** AUTH: Role=[logistics.OWNER] */
    private _inventoryDelete;
    /** AUTH: Role=[product.OWNER] */
    private _mediaImageCreate;
    /** AUTH: Role=[product.OWNER,product.EDITOR] */
    private _mediaImageUpdate;
    /** AUTH: Role=[product.OWNER] */
    private _mediaImageDelete;
    /** AUTH: Role=[product.OWNER] */
    private _mediaImageCsvImport;
    /** AUTH: Role=[product.OWNER] */
    private _mediaVideoCreate;
    /** AUTH: Role=[product.OWNER,product.EDITOR] */
    private _mediaVideoUpdate;
    /** AUTH: Role=[product.OWNER] */
    private _mediaVideoDelete;
    /** AUTH: Role=[product.OWNER] */
    private _mediaVideoCsvImport;
    /** AUTH: Role=[product.OWNER] */
    private _mediaDocumentCreate;
    /** AUTH: Role=[product.OWNER,product.EDITOR] */
    private _mediaDocumentUpdate;
    /** AUTH: Role=[product.OWNER] */
    private _mediaDocumentDelete;
    /** AUTH: Role=[product.OWNER] */
    private _mediaDocumentCsvImport;
    /** AUTH: Role=[order.OWNER,product.OWNER] OR (('user is authenticated') AND ('customerId or companyId if present in input matches JWT')) */
    private _mediaAttachmentCreate;
    /** AUTH: Role=[order.OWNER,order.EDITOR,product.OWNER,product.EDITOR] */
    private _mediaAttachmentUpdate;
    /** AUTH: Role=[order.OWNER,product.OWNER] */
    private _mediaAttachmentDelete;
    /** Publishes an email trigger event to pub/sub, containing the abstract event data. AUTH: Role=[system] */
    private _publishEmailEvent;
    /** Publishes an email send trigger event to pub/sub containing all (processed) fields needed to send a single email. AUTH: Role=[system] */
    private _publishEmailSendEvent;
    /** Publishes an email trigger event to pub/sub, containing the abstract event data and the password reset link */
    /** @deprecated Deprecated in favor of using the triggerPasswordSendResetEmailEvent that utilizes the event-action-manager and template-engine */
    private _publishPasswordResetEmailEvent;
    /** Create a new EmailTemplateAUTH: Role=[configuration.OWNER] */
    private _emailTemplateCreate;
    /** Update an EmailTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _emailTemplateUpdate;
    /** Create a new DocumentTemplateAUTH: Role=[configuration.OWNER] */
    private _documentTemplateCreate;
    /** Update a DocumentTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _documentTemplateUpdate;
    /** Delete an existing Template by IDAUTH: Role=[configuration.OWNER] */
    private _templateDelete;
    /** Add an attachment to an EmailTemplate by ID */
    private _emailTemplateAddAttachment;
    /** Remove an attachment from an EmailTemplate by ID */
    private _emailTemplateRemoveAttachment;
    /** Render a Template to HTML string, this mutation can be used to preview your template with a given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
    private _templateRenderToHTML;
    /** Send out an email based on the provided email template and payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
    private _emailTemplateRenderAndSend;
    /** Render a DocumentTemplate to a PDF file (Base64 string) with the given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER] */
    private _documentTemplateRenderToPDF;
    /** AUTH: Role=[order.OWNER] */
    private _orderStatusCreate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _orderStatusUpdate;
    /** AUTH: Role=[order.OWNER] */
    private _orderStatusDelete;
    /** AUTH: Role=[order.OWNER] */
    private _orderStatusSetCreate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _orderStatusSetUpdate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _orderStatusSetAddOrderStatuses;
    /** AUTH: Role=[order.OWNER] */
    private _orderStatusSetRemoveOrderStatuses;
    /** AUTH: Role=[order.OWNER] */
    private _orderStatusSetDelete;
    /** AUTH: Role=[order.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT')) */
    private _orderCreate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _orderUpdate;
    /** AUTH: Role=[order.OWNER] */
    private _orderDelete;
    /** Deprecated in favor of using triggerOrderSendConfirm */
    private _orderSendConfirmationEmail;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
    private _triggerOrderSendConfirm;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
    private _triggerQuoteSendRequest;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
    private _triggerQuoteSendValidation;
    /** AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] */
    private _triggerQuoteSend;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _orderSetStatus;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _orderItemCreate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _orderItemUpdate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _orderItemDelete;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _orderAddressUpdate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    /** @deprecated Use orderAddressUpdate */
    private _orderUpdateAddress;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _shipmentCreate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _shipmentUpdate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _shipmentDelete;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _shipmentItemCreate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _shipmentItemUpdate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _shipmentItemDelete;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _trackAndTraceCreate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _trackAndTraceUpdate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _trackAndTraceDelete;
    /** AUTH: Role=[shop.OWNER] OR ('user is authenticated') */
    private _orderlistCreate;
    /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
    private _orderlistUpdate;
    /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
    private _orderlistAddItems;
    /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
    private _orderlistRemoveItems;
    /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
    private _orderlistAssignUsers;
    /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
    private _orderlistUnassignUsers;
    /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
    private _orderlistAssignCompanies;
    /** AUTH: Role=[shop.OWNER,shop.EDITOR] */
    private _orderlistUnassignCompanies;
    /** AUTH: Role=[shop.OWNER] */
    private _orderlistDelete;
    /** AUTH: Role=[configuration.OWNER] */
    private _payMethodCreate;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _payMethodUpdate;
    /** AUTH: Role=[configuration.OWNER] */
    private _payMethodDelete;
    /** AUTH: Role=[pricing.OWNER] */
    private _priceCreate;
    /** AUTH: Role=[pricing.OWNER] */
    private _priceCsvImport;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
    private _priceUpdate;
    /** AUTH: Role=[pricing.OWNER] */
    private _priceDelete;
    /** costPriceCreate field */
    private _costPriceCreate;
    /** costPriceUpdate field */
    private _costPriceUpdate;
    /** costPriceDelete field */
    private _costPriceDelete;
    /** costPricesBulk field */
    private _costPricesBulk;
    /** costPricesDelete field */
    private _costPricesDelete;
    /** AUTH: Role=[pricing.OWNER] */
    private _pricesheetCreate;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
    private _pricesheetUpdate;
    /** AUTH: Role=[pricing.OWNER] */
    private _pricesheetCsvImport;
    /** AUTH: Role=[pricing.OWNER] */
    private _pricesheetDelete;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
    private _pricesheetAssign;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
    private _pricesheetUnassign;
    /** AUTH: Role=[pricing.OWNER] */
    private _discountCreate;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
    private _discountUpdate;
    /** AUTH: Role=[pricing.OWNER] */
    private _discountDelete;
    /** AUTH: Role=[pricing.OWNER] */
    private _discountsDeleteByPricesheetId;
    /** AUTH: Role=[pricing.OWNER] */
    private _discountCsvImport;
    /** AUTH: Role=[pricing.OWNER] */
    private _bulkPriceCreate;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
    private _bulkPriceUpdate;
    /** AUTH: Role=[pricing.OWNER] */
    private _bulkPriceCsvImport;
    /** AUTH: Role=[pricing.OWNER] */
    private _bulkPriceDelete;
    /** AUTH: Role=[pricing.OWNER] */
    private _bulkPricesCreate;
    /** AUTH: Role=[pricing.OWNER] */
    private _bulkPricesDelete;
    /** AUTH: Role=[pricing.OWNER] */
    private _bulkCostPriceCreate;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
    private _bulkCostPriceUpdate;
    /** AUTH: Role=[pricing.OWNER] */
    private _bulkCostPriceCsvImport;
    /** AUTH: Role=[pricing.OWNER] */
    private _bulkCostPriceDelete;
    /** AUTH: Role=[pricing.OWNER] */
    private _bulkCostPricesBulk;
    /** AUTH: Role=[pricing.OWNER] */
    private _bulkCostPricesDelete;
    /** AUTH: Role=[pricing.OWNER] */
    private _zoneTaxCodeCreate;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
    private _zoneTaxCodeUpdate;
    /** AUTH: Role=[pricing.OWNER] */
    private _zoneTaxCodeDelete;
    /** AUTH: Role=[pricing.OWNER] */
    private _zoneTaxCodesCreate;
    /** AUTH: Role=[pricing.OWNER] */
    private _zoneTaxCodesDelete;
    /** AUTH: Role=[pricing.OWNER] */
    private _taxCreate;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
    private _taxUpdate;
    /** AUTH: Role=[pricing.OWNER] */
    private _taxDelete;
    /** AUTH: Role=[product.OWNER] */
    private _productCreate;
    /** AUTH: Role=[product.OWNER,product.EDITOR] */
    private _productUpdate;
    /** AUTH: Role=[product.OWNER] */
    private _productDelete;
    /** AUTH: Role=[product.OWNER] */
    private _productCsvImport;
    /** AUTH: Role=[product.OWNER] */
    private _clusterOptionCreate;
    /** AUTH: Role=[product.OWNER,product.EDITOR] */
    private _clusterOptionUpdate;
    /** AUTH: Role=[product.OWNER] */
    private _clusterOptionDelete;
    /** AUTH: Role=[product.OWNER] */
    private _clusterProductCreate;
    /** AUTH: Role=[product.OWNER,product.EDITOR] */
    private _clusterProductUpdate;
    /** AUTH: Role=[product.OWNER] */
    private _clusterProductDelete;
    /** AUTH: Role=[product.OWNER] */
    private _clusterCreate;
    /** AUTH: Role=[product.OWNER,product.EDITOR] */
    private _clusterUpdate;
    /** AUTH: Role=[product.OWNER] */
    private _clusterCsvImport;
    /** AUTH: Role=[product.OWNER] */
    private _clusterDelete;
    /** AUTH: Role=[product.OWNER] Assigns existing products to a cluster. */
    private _clusterAssignProducts;
    /** AUTH: Role=[product.OWNER] Unassigns specified products from a cluster, moving them to either a specified category or another cluster. */
    private _clusterUnassignProducts;
    /** AUTH: Role=[product.OWNER] */
    private _clusterConfigCreate;
    /** AUTH: Role=[product.OWNER] */
    private _clusterConfigDelete;
    /** AUTH: Role=[product.OWNER] */
    private _clusterConfigAddSetting;
    /** AUTH: Role=[product.OWNER] */
    private _clusterConfigUpdateSetting;
    /** AUTH: Role=[product.OWNER] */
    private _clusterConfigRemoveSetting;
    /** roleDefinitionCreate field */
    private _roleDefinitionCreate;
    /** roleDefinitionUpdate field */
    private _roleDefinitionUpdate;
    /** roleDefinitionDelete field */
    private _roleDefinitionDelete;
    /** AUTH: Role=[role.OWNER] */
    private _roleCreate;
    /** AUTH: Role=[role.OWNER,role.EDITOR] */
    private _roleUpdate;
    /** AUTH: Role=[role.OWNER] */
    private _roleDelete;
    /** shopInvalidateCache field */
    private _shopInvalidateCache;
    /** AUTH: Role=[product.OWNER] */
    private _machineCreate;
    /** AUTH: Role=[product.OWNER] */
    private _machineDelete;
    /** AUTH: Role=[product.OWNER,product.EDITOR] */
    private _machineUpsert;
    /** AUTH: Role=[pricing.OWNER] */
    private _surchargeCreate;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
    private _surchargeUpdate;
    /** AUTH: Role=[pricing.OWNER] */
    private _surchargeDelete;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
    private _addSurchargesToProduct;
    /** AUTH: Role=[pricing.OWNER,pricing.EDITOR] */
    private _removeSurchargesFromProduct;
    /** AUTH: Role=[order.OWNER] */
    private _tenderStart;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _tenderUpdateAddress;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _tenderAddItems;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _tenderUpdateItem;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _tenderDeleteItem;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _tenderUpdateInvoiceUser;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _tenderUpdate;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _tenderUpdateDiscount;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _tenderUpdatePostage;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _tenderUpdatePayment;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _tenderApplyIncentives;
    /** AUTH: Role=[order.OWNER,order.EDITOR] */
    private _tenderProcess;
    /** AUTH: Role=[order.OWNER] */
    private _tenderDelete;
    /** usergroupCreate field */
    /** @deprecated This mutation is deprecated and will be removed in a future */
    private _usergroupCreate;
    /** usergroupUpdate field */
    /** @deprecated This mutation is deprecated and will be removed in a future */
    private _usergroupUpdate;
    /** usergroupDelete field */
    /** @deprecated This mutation is deprecated and will be removed in a future */
    private _usergroupDelete;
    /** AUTH: Role=[user.OWNER] */
    private _companyCreate;
    /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')) */
    private _companyUpdate;
    /** AUTH: Role=[user.OWNER] */
    private _companyDelete;
    /** AUTH: Role=[user.OWNER] */
    private _companyCsvImport;
    /** Creates a new contact, if you want this new contact to be able to login, please use contactRegister. AUTH: Role=[user.OWNER] */
    private _contactCreate;
    /** Creates a new contact and a new login account for this contact. AUTH: Role=[user.OWNER] */
    private _contactRegister;
    /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT')) */
    private _contactUpdate;
    /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT')) */
    private _contactAddToCompanies;
    /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT')) */
    private _contactRemoveFromCompanies;
    /** AUTH: Role=[user.OWNER] */
    private _contactDelete;
    /** AUTH: Role=[user.OWNER] */
    private _contactCreateAccount;
    /** AUTH: Role=[user.OWNER] */
    private _contactDeleteAccount;
    /** AUTH: Role=[user.OWNER] */
    private _contactCsvImport;
    /** triggerContactSendWelcomeEmailEvent field */
    private _triggerContactSendWelcomeEmailEvent;
    /** Creates a new customer, if you want this new customer to be able to login, please use customerRegister. AUTH: Role=[user.OWNER] */
    private _customerCreate;
    /** Creates a new customer and a new login account for this customer. AUTH: Role=[user.OWNER] */
    private _customerRegister;
    /** AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT')) */
    private _customerUpdate;
    /** AUTH: Role=[user.OWNER] */
    private _customerDelete;
    /** AUTH: Role=[user.OWNER] */
    private _customerCreateAccount;
    /** AUTH: Role=[user.OWNER] */
    private _customerDeleteAccount;
    /** triggerCustomerSendWelcomeEmailEvent field */
    private _triggerCustomerSendWelcomeEmailEvent;
    /** AUTH: Role=[user.OWNER] */
    private _customerCsvImport;
    /** AUTH: Role=[user.OWNER,user.EDITOR] */
    private _addCompanyManager;
    /** AUTH: Role=[user.OWNER,user.EDITOR] */
    private _removeCompanyManager;
    /** Creates a PurchaseAuthorizationConfig entity for a contact within a company. AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')), */
    private _purchaseAuthorizationConfigCreate;
    /** Updates a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER,user.EDITOR] OR ('user is authenticated'), */
    private _purchaseAuthorizationConfigUpdate;
    /** Deletes a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER] OR ('user is authenticated'), */
    private _purchaseAuthorizationConfigDelete;
    /** AUTH: Role=[configuration.OWNER] */
    private _valuesetCreate;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _valuesetUpdate;
    /** AUTH: Role=[configuration.OWNER] */
    private _valuesetDelete;
    /** AUTH: Role=[configuration.OWNER] */
    private _valuesetItemCreate;
    /** AUTH: Role=[configuration.OWNER,configuration.EDITOR] */
    private _valuesetItemUpdate;
    /** AUTH: Role=[configuration.OWNER] */
    private _valuesetItemDelete;
    /** AUTH: Role=[logistics.OWNER] */
    private _warehouseCreate;
    /** AUTH: Role=[logistics.OWNER,logistics.EDITOR] */
    private _warehouseUpdate;
    /** AUTH: Role=[logistics.OWNER] */
    private _warehouseDelete;
    /** AUTH: Role=[logistics.OWNER] */
    private _warehouseAddressCreate;
    /** AUTH: Role=[logistics.OWNER,logistics.EDITOR] */
    private _warehouseAddressUpdate;
    /** AUTH: Role=[logistics.OWNER] */
    private _warehouseAddressDelete;
    /**
     Creates a new instance of Mutation
     */
    constructor(data?: Partial<Mutation>);
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get userAddressCreate(): Address;
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set userAddressCreate(value: Address);
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get customerAddressCreate(): Address;
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set customerAddressCreate(value: Address);
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    get companyAddressCreate(): Address;
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    set companyAddressCreate(value: Address);
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get externalAddressCreate(): ExternalAddress;
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set externalAddressCreate(value: ExternalAddress);
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get userAddressUpdate(): Address;
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set userAddressUpdate(value: Address);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get customerAddressUpdate(): Address;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set customerAddressUpdate(value: Address);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    get companyAddressUpdate(): Address;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    set companyAddressUpdate(value: Address);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get externalAddressUpdate(): ExternalAddress;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set externalAddressUpdate(value: ExternalAddress);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get userAddressDelete(): boolean;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set userAddressDelete(value: boolean);
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get customerAddressDelete(): boolean;
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set customerAddressDelete(value: boolean);
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    get companyAddressDelete(): boolean;
    /**
     AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    set companyAddressDelete(value: boolean);
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get externalAddressDelete(): boolean;
    /**
     AUTH: Role=[configuration.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set externalAddressDelete(value: boolean);
    /**
     AUTH: Role=[role.OWNER]
     */
    get adminUserCreate(): AdminUser;
    /**
     AUTH: Role=[role.OWNER]
     */
    set adminUserCreate(value: AdminUser);
    /**
     AUTH: Role=[role.OWNER,role.EDITOR] OR (('user is authenticated') AND ('email if present in input matches JWT'))
     */
    get adminUserUpdate(): AdminUser;
    /**
     AUTH: Role=[role.OWNER,role.EDITOR] OR (('user is authenticated') AND ('email if present in input matches JWT'))
     */
    set adminUserUpdate(value: AdminUser);
    /**
     AUTH: Role=[role.OWNER]
     */
    get adminUserDelete(): boolean;
    /**
     AUTH: Role=[role.OWNER]
     */
    set adminUserDelete(value: boolean);
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
     */
    get adminUserTenantCreate(): AdminUserTenant;
    /**
     AUTH: Role=[role.OWNER,role.EDITOR,role.VIEWER]
     */
    set adminUserTenantCreate(value: AdminUserTenant);
    /**
     AUTH: Role=[role.OWNER]
     */
    get adminUserTenantDelete(): AdminUserTenant;
    /**
     AUTH: Role=[role.OWNER]
     */
    set adminUserTenantDelete(value: AdminUserTenant);
    /**
     attributeDescriptionCreate field
     */
    get attributeDescriptionCreate(): AttributeDescription;
    /**
     attributeDescriptionCreate field
     */
    set attributeDescriptionCreate(value: AttributeDescription);
    /**
     attributeDescriptionUpdate field
     */
    get attributeDescriptionUpdate(): AttributeDescription;
    /**
     attributeDescriptionUpdate field
     */
    set attributeDescriptionUpdate(value: AttributeDescription);
    /**
     attributeDescriptionDelete field
     */
    get attributeDescriptionDelete(): boolean;
    /**
     attributeDescriptionDelete field
     */
    set attributeDescriptionDelete(value: boolean);
    /**
     attributeDescriptionCsvImport field
     */
    get attributeDescriptionCsvImport(): CsvImportResponse;
    /**
     attributeDescriptionCsvImport field
     */
    set attributeDescriptionCsvImport(value: CsvImportResponse);
    /**
     attributeCreate field
     */
    get attributeCreate(): Attribute;
    /**
     attributeCreate field
     */
    set attributeCreate(value: Attribute);
    /**
     attributeUpdate field
     */
    get attributeUpdate(): Attribute;
    /**
     attributeUpdate field
     */
    set attributeUpdate(value: Attribute);
    /**
     attributeDelete field
     */
    get attributeDelete(): boolean;
    /**
     attributeDelete field
     */
    set attributeDelete(value: boolean);
    /**
     attributeCsvImport field
     */
    get attributeCsvImport(): CsvImportResponse;
    /**
     attributeCsvImport field
     */
    set attributeCsvImport(value: CsvImportResponse);
    /**
     Starts an anonymous firebase session
     */
    get startSession(): Login;
    /**
     Starts an anonymous firebase session
     */
    set startSession(value: Login);
    /**
     Logs in the authenticated user and returns a GCIP user session which includes the accessToken and refreshToken.
     */
    get login(): Login;
    /**
     Logs in the authenticated user and returns a GCIP user session which includes the accessToken and refreshToken.
     */
    set login(value: Login);
    /**
     AUTH: Role=[] OR ('user is authenticated')
     */
    get logout(): Logout | undefined;
    /**
     AUTH: Role=[] OR ('user is authenticated')
     */
    set logout(value: Logout | undefined);
    /**
     AUTH: Role=[system] OR ('user is anonymous')
     */
    get authenticationCreate(): Login;
    /**
     AUTH: Role=[system] OR ('user is anonymous')
     */
    set authenticationCreate(value: Login);
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get authenticationDelete(): boolean;
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set authenticationDelete(value: boolean);
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get claimsReset(): boolean;
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set claimsReset(value: boolean);
    /**
     verifyToken field
     */
    get verifyToken(): VerifyToken;
    /**
     verifyToken field
     */
    set verifyToken(value: VerifyToken);
    /**
     exchangeRefreshToken field
     */
    get exchangeRefreshToken(): RefreshTokenResponse;
    /**
     exchangeRefreshToken field
     */
    set exchangeRefreshToken(value: RefreshTokenResponse);
    /**
     Trigger the event to send out an reset password email. AUTH: Role=[] OR ('undefined')
     */
    get triggerPasswordSendResetEmailEvent(): boolean;
    /**
     Trigger the event to send out an reset password email. AUTH: Role=[] OR ('undefined')
     */
    set triggerPasswordSendResetEmailEvent(value: boolean);
    /**
     Trigger the event to send out an initialize password email. AUTH: Role=[user.OWNER]
     */
    get triggerPasswordSendInitEmailEvent(): string;
    /**
     Trigger the event to send out an initialize password email. AUTH: Role=[user.OWNER]
     */
    set triggerPasswordSendInitEmailEvent(value: string);
    /**
     Generates a password recovery link, that can be included in a password recovery e-mail. AUTH: Role=[user.OWNER]
     */
    get passwordResetLink(): string;
    /**
     Generates a password recovery link, that can be included in a password recovery e-mail. AUTH: Role=[user.OWNER]
     */
    set passwordResetLink(value: string);
    /**
     AUTH: Role=[system]
     */
    get magicTokenCreate(): MagicToken;
    /**
     AUTH: Role=[system]
     */
    set magicTokenCreate(value: MagicToken);
    /**
     AUTH: Role=[system]
     */
    get magicTokenUpdate(): MagicToken;
    /**
     AUTH: Role=[system]
     */
    set magicTokenUpdate(value: MagicToken);
    /**
     AUTH: Role=[system]
     */
    get magicTokenDelete(): boolean;
    /**
     AUTH: Role=[system]
     */
    set magicTokenDelete(value: boolean);
    /**
     Authenticates and logs in a contact or customer using a magic token, returning a session object with access and refresh tokens.
     */
    get magicTokenLogin(): Login;
    /**
     Authenticates and logs in a contact or customer using a magic token, returning a session object with access and refresh tokens.
     */
    set magicTokenLogin(value: Login);
    /**
     bundleCreate field
     */
    get bundleCreate(): Bundle;
    /**
     bundleCreate field
     */
    set bundleCreate(value: Bundle);
    /**
     bundleUpdate field
     */
    get bundleUpdate(): Bundle;
    /**
     bundleUpdate field
     */
    set bundleUpdate(value: Bundle);
    /**
     bundleDelete field
     */
    get bundleDelete(): boolean;
    /**
     bundleDelete field
     */
    set bundleDelete(value: boolean);
    /**
     bundleAddItems field
     */
    get bundleAddItems(): BundleItem[];
    /**
     bundleAddItems field
     */
    set bundleAddItems(value: BundleItem[]);
    /**
     bundleRemoveItem field
     */
    get bundleRemoveItem(): boolean;
    /**
     bundleRemoveItem field
     */
    set bundleRemoveItem(value: boolean);
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get businessRuleCreate(): BusinessRule;
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set businessRuleCreate(value: BusinessRule);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleUpdate(): BusinessRule;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleUpdate(value: BusinessRule);
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get businessRuleDelete(): boolean;
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set businessRuleDelete(value: boolean);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableAddColumn(): BusinessRuleDecisionTable;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableAddColumn(value: BusinessRuleDecisionTable);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableUpdate(): BusinessRuleDecisionTable;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableUpdate(value: BusinessRuleDecisionTable);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableDeleteColumn(): BusinessRuleDecisionTable;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableDeleteColumn(value: BusinessRuleDecisionTable);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableAddRow(): BusinessRuleDecisionTable;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableAddRow(value: BusinessRuleDecisionTable);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableMoveRow(): BusinessRuleDecisionTable;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableMoveRow(value: BusinessRuleDecisionTable);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableDeleteRow(): BusinessRuleDecisionTable;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableDeleteRow(value: BusinessRuleDecisionTable);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get businessRuleDecisionTableSetCell(): BusinessRuleDecisionTable;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set businessRuleDecisionTableSetCell(value: BusinessRuleDecisionTable);
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get incentiveRuleCreate(): BusinessRule;
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set incentiveRuleCreate(value: BusinessRule);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get incentiveRuleSetOrderItemConditions(): BusinessRule;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set incentiveRuleSetOrderItemConditions(value: BusinessRule);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get incentiveRuleSetAction(): BusinessRule;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set incentiveRuleSetAction(value: BusinessRule);
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get carrierCreate(): Carrier;
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set carrierCreate(value: Carrier);
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    get carrierUpdate(): Carrier;
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    set carrierUpdate(value: Carrier);
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get carrierDelete(): boolean;
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set carrierDelete(value: boolean);
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    get carrierAssignWarehouse(): boolean;
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    set carrierAssignWarehouse(value: boolean);
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    get carrierUnassignWarehouse(): boolean;
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    set carrierUnassignWarehouse(value: boolean);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    get cartStart(): Cart;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'contactId if present in input matches JWT' AND 'customerId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    set cartStart(value: Cart);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    get cartSetUser(): Cart;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('userId if present in input matches JWT'))
     */
    set cartSetUser(value: Cart);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    get cartSetContact(): Cart;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('contactId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    set cartSetContact(value: Cart);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get cartSetCustomer(): Cart;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set cartSetCustomer(value: Cart);
    /**
     Update existing cart
     */
    get cartUpdate(): Cart;
    /**
     Update existing cart
     */
    set cartUpdate(value: Cart);
    /**
     Delete existing cart
     */
    get cartDelete(): boolean;
    /**
     Delete existing cart
     */
    set cartDelete(value: boolean);
    /**
     Process cart
     */
    get cartProcess(): CartProcessResponse;
    /**
     Process cart
     */
    set cartProcess(value: CartProcessResponse);
    /**
     Add action code to the cart
     */
    get cartAddActionCode(): Cart;
    /**
     Add action code to the cart
     */
    set cartAddActionCode(value: Cart);
    /**
     Remove action code from the cart
     */
    get cartRemoveActionCode(): Cart;
    /**
     Remove action code from the cart
     */
    set cartRemoveActionCode(value: Cart);
    /**
     Update cart address
     */
    get cartUpdateAddress(): Cart;
    /**
     Update cart address
     */
    set cartUpdateAddress(value: Cart);
    /**
     Request cart purchase authorization. Use it to finalize a cart that cannot be processed because purchase authorization (by an anuthorization manager) is required. The cart status will be changed to PENDING_PURCHASE_AUTHORIZATION. AUTH: Role=[order.OWNER,order.EDITOR] OR ('user is authenticated')
     */
    get cartRequestPurchaseAuthorization(): Cart;
    /**
     Request cart purchase authorization. Use it to finalize a cart that cannot be processed because purchase authorization (by an anuthorization manager) is required. The cart status will be changed to PENDING_PURCHASE_AUTHORIZATION. AUTH: Role=[order.OWNER,order.EDITOR] OR ('user is authenticated')
     */
    set cartRequestPurchaseAuthorization(value: Cart);
    /**
     Accept cart purchase authorization request. Use it to accept ownership of a cart that requires purchase authorization and finalize it. AUTH: Role=[supervisor,admin,system,internal,order.OWNER,order.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    get cartAcceptPurchaseAuthorizationRequest(): Cart;
    /**
     Accept cart purchase authorization request. Use it to accept ownership of a cart that requires purchase authorization and finalize it. AUTH: Role=[supervisor,admin,system,internal,order.OWNER,order.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    set cartAcceptPurchaseAuthorizationRequest(value: Cart);
    /**
     Add item to the cart
     */
    get cartAddItem(): Cart;
    /**
     Add item to the cart
     */
    set cartAddItem(value: Cart);
    /**
     Add bundle item to the cart
     */
    get cartAddBundle(): Cart;
    /**
     Add bundle item to the cart
     */
    set cartAddBundle(value: Cart);
    /**
     Update item in the cart
     */
    get cartUpdateItem(): Cart;
    /**
     Update item in the cart
     */
    set cartUpdateItem(value: Cart);
    /**
     Update multiple items in the cart
     */
    get cartItemBulk(): BulkResponseData;
    /**
     Update multiple items in the cart
     */
    set cartItemBulk(value: BulkResponseData);
    /**
     Delete item from the cart
     */
    get cartDeleteItem(): Cart;
    /**
     Delete item from the cart
     */
    set cartDeleteItem(value: Cart);
    /**
     Invalidate cache for a specific cart or all carts if no id is provided
     */
    get cartInvalidateCache(): boolean;
    /**
     Invalidate cache for a specific cart or all carts if no id is provided
     */
    set cartInvalidateCache(value: boolean);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get categoryAddProductsClusters(): CategoryAddProductsClustersResponse;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set categoryAddProductsClusters(value: CategoryAddProductsClustersResponse);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get categoryRemoveProductsClusters(): CategoryRemoveProductsClustersResponse;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set categoryRemoveProductsClusters(value: CategoryRemoveProductsClustersResponse);
    /**
     AUTH: Role=[product.OWNER] OR ('user is authenticated')
     */
    get categoryCreate(): Category;
    /**
     AUTH: Role=[product.OWNER] OR ('user is authenticated')
     */
    set categoryCreate(value: Category);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR] OR ('user is authenticated')
     */
    get categoryUpdate(): Category;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR] OR ('user is authenticated')
     */
    set categoryUpdate(value: Category);
    /**
     AUTH: Role=[product.OWNER] OR ('user is authenticated')
     */
    get categoryCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[product.OWNER] OR ('user is authenticated')
     */
    set categoryCsvImport(value: CsvImportResponse);
    /**
     Delete category by category Id
     */
    get categoryDelete(): boolean;
    /**
     Delete category by category Id
     */
    set categoryDelete(value: boolean);
    /**
     channelInvalidateCache field
     */
    get channelInvalidateCache(): boolean;
    /**
     channelInvalidateCache field
     */
    set channelInvalidateCache(value: boolean);
    /**
     AUTH: Role=[order.OWNER]
     */
    get paymentCreate(): Payment;
    /**
     AUTH: Role=[order.OWNER]
     */
    set paymentCreate(value: Payment);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get paymentUpdate(): Payment;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set paymentUpdate(value: Payment);
    /**
     AUTH: Role=[order.OWNER]
     */
    get paymentDelete(): Payment;
    /**
     AUTH: Role=[order.OWNER]
     */
    set paymentDelete(value: Payment);
    /**
     AUTH: Role=[product.OWNER]
     */
    get crossupsellCreate(): Crossupsell;
    /**
     AUTH: Role=[product.OWNER]
     */
    set crossupsellCreate(value: Crossupsell);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get crossupsellUpdate(): Crossupsell;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set crossupsellUpdate(value: Crossupsell);
    /**
     AUTH: Role=[product.OWNER]
     */
    get crossupsellDelete(): boolean;
    /**
     AUTH: Role=[product.OWNER]
     */
    set crossupsellDelete(value: boolean);
    /**
     Deletes an EventActionConfig entity by ID
     */
    get eventActionConfigDelete(): boolean;
    /**
     Deletes an EventActionConfig entity by ID
     */
    set eventActionConfigDelete(value: boolean);
    /**
     Triggers a custom event with a custom payload
     */
    get triggerCustomEvent(): boolean;
    /**
     Triggers a custom event with a custom payload
     */
    set triggerCustomEvent(value: boolean);
    /**
     Creates a new EventToEmailConfig entity
     */
    get eventToEmailConfigCreate(): EventToEmailConfig;
    /**
     Creates a new EventToEmailConfig entity
     */
    set eventToEmailConfigCreate(value: EventToEmailConfig);
    /**
     Updates an existing EventToEmailConfig entity
     */
    get eventToEmailConfigUpdate(): EventToEmailConfig;
    /**
     Updates an existing EventToEmailConfig entity
     */
    set eventToEmailConfigUpdate(value: EventToEmailConfig);
    /**
     Creates a new EventToWebHookConfig entity
     */
    get eventToWebHookConfigCreate(): EventToWebHookConfig;
    /**
     Creates a new EventToWebHookConfig entity
     */
    set eventToWebHookConfigCreate(value: EventToWebHookConfig);
    /**
     Updates an existing  entity
     */
    get eventToWebHookConfigUpdate(): EventToWebHookConfig;
    /**
     Updates an existing  entity
     */
    set eventToWebHookConfigUpdate(value: EventToWebHookConfig);
    /**
     AUTH: Role=[shop.OWNER] OR (('user is authenticated') AND ('undefined'))
     */
    get favoriteListCreate(): FavoriteList;
    /**
     AUTH: Role=[shop.OWNER] OR (('user is authenticated') AND ('undefined'))
     */
    set favoriteListCreate(value: FavoriteList);
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get favoriteListUpdate(): FavoriteList;
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set favoriteListUpdate(value: FavoriteList);
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get favoriteListDelete(): boolean;
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set favoriteListDelete(value: boolean);
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get favoriteListAddItems(): FavoriteList;
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set favoriteListAddItems(value: FavoriteList);
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get favoriteListRemoveItems(): FavoriteList;
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set favoriteListRemoveItems(value: FavoriteList);
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    get favoriteListClearItems(): FavoriteList;
    /**
     AUTH: Role=[system] OR ('user is authenticated')
     */
    set favoriteListClearItems(value: FavoriteList);
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get inventoryCreate(): InventoryResponse;
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set inventoryCreate(value: InventoryResponse);
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get inventoryCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set inventoryCsvImport(value: CsvImportResponse);
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    get inventoryUpdate(): InventoryResponse;
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    set inventoryUpdate(value: InventoryResponse);
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get inventoryDelete(): InventoryDeleteResponse;
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set inventoryDelete(value: InventoryDeleteResponse);
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaImageCreate(): MediaImage;
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaImageCreate(value: MediaImage);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get mediaImageUpdate(): MediaImage;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set mediaImageUpdate(value: MediaImage);
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaImageDelete(): DeleteMediaImageResponse;
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaImageDelete(value: DeleteMediaImageResponse);
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaImageCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaImageCsvImport(value: CsvImportResponse);
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaVideoCreate(): MediaVideo;
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaVideoCreate(value: MediaVideo);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get mediaVideoUpdate(): MediaVideo;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set mediaVideoUpdate(value: MediaVideo);
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaVideoDelete(): DeleteMediaVideoResponse;
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaVideoDelete(value: DeleteMediaVideoResponse);
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaVideoCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaVideoCsvImport(value: CsvImportResponse);
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaDocumentCreate(): MediaDocument;
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaDocumentCreate(value: MediaDocument);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get mediaDocumentUpdate(): MediaDocument;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set mediaDocumentUpdate(value: MediaDocument);
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaDocumentDelete(): DeleteMediaDocumentResponse;
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaDocumentDelete(value: DeleteMediaDocumentResponse);
    /**
     AUTH: Role=[product.OWNER]
     */
    get mediaDocumentCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[product.OWNER]
     */
    set mediaDocumentCsvImport(value: CsvImportResponse);
    /**
     AUTH: Role=[order.OWNER,product.OWNER] OR (('user is authenticated') AND ('customerId or companyId if present in input matches JWT'))
     */
    get mediaAttachmentCreate(): MediaAttachment;
    /**
     AUTH: Role=[order.OWNER,product.OWNER] OR (('user is authenticated') AND ('customerId or companyId if present in input matches JWT'))
     */
    set mediaAttachmentCreate(value: MediaAttachment);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,product.OWNER,product.EDITOR]
     */
    get mediaAttachmentUpdate(): MediaAttachment;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,product.OWNER,product.EDITOR]
     */
    set mediaAttachmentUpdate(value: MediaAttachment);
    /**
     AUTH: Role=[order.OWNER,product.OWNER]
     */
    get mediaAttachmentDelete(): DeleteMediaAttachmentResponse;
    /**
     AUTH: Role=[order.OWNER,product.OWNER]
     */
    set mediaAttachmentDelete(value: DeleteMediaAttachmentResponse);
    /**
     Publishes an email trigger event to pub/sub, containing the abstract event data. AUTH: Role=[system]
     */
    get publishEmailEvent(): PublishEmailEventResponse;
    /**
     Publishes an email trigger event to pub/sub, containing the abstract event data. AUTH: Role=[system]
     */
    set publishEmailEvent(value: PublishEmailEventResponse);
    /**
     Publishes an email send trigger event to pub/sub containing all (processed) fields needed to send a single email. AUTH: Role=[system]
     */
    get publishEmailSendEvent(): PublishEmailEventResponse;
    /**
     Publishes an email send trigger event to pub/sub containing all (processed) fields needed to send a single email. AUTH: Role=[system]
     */
    set publishEmailSendEvent(value: PublishEmailEventResponse);
    /**
     Publishes an email trigger event to pub/sub, containing the abstract event data and the password reset link
     */
    get publishPasswordResetEmailEvent(): PublishEmailEventResponse;
    /**
     Publishes an email trigger event to pub/sub, containing the abstract event data and the password reset link
     */
    set publishPasswordResetEmailEvent(value: PublishEmailEventResponse);
    /**
     Create a new EmailTemplateAUTH: Role=[configuration.OWNER]
     */
    get emailTemplateCreate(): EmailTemplate;
    /**
     Create a new EmailTemplateAUTH: Role=[configuration.OWNER]
     */
    set emailTemplateCreate(value: EmailTemplate);
    /**
     Update an EmailTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get emailTemplateUpdate(): EmailTemplate;
    /**
     Update an EmailTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set emailTemplateUpdate(value: EmailTemplate);
    /**
     Create a new DocumentTemplateAUTH: Role=[configuration.OWNER]
     */
    get documentTemplateCreate(): DocumentTemplate;
    /**
     Create a new DocumentTemplateAUTH: Role=[configuration.OWNER]
     */
    set documentTemplateCreate(value: DocumentTemplate);
    /**
     Update a DocumentTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get documentTemplateUpdate(): DocumentTemplate;
    /**
     Update a DocumentTemplate by IDAUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set documentTemplateUpdate(value: DocumentTemplate);
    /**
     Delete an existing Template by IDAUTH: Role=[configuration.OWNER]
     */
    get templateDelete(): boolean;
    /**
     Delete an existing Template by IDAUTH: Role=[configuration.OWNER]
     */
    set templateDelete(value: boolean);
    /**
     Add an attachment to an EmailTemplate by ID
     */
    get emailTemplateAddAttachment(): EmailTemplate;
    /**
     Add an attachment to an EmailTemplate by ID
     */
    set emailTemplateAddAttachment(value: EmailTemplate);
    /**
     Remove an attachment from an EmailTemplate by ID
     */
    get emailTemplateRemoveAttachment(): EmailTemplate;
    /**
     Remove an attachment from an EmailTemplate by ID
     */
    set emailTemplateRemoveAttachment(value: EmailTemplate);
    /**
     Render a Template to HTML string, this mutation can be used to preview your template with a given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get templateRenderToHTML(): string;
    /**
     Render a Template to HTML string, this mutation can be used to preview your template with a given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set templateRenderToHTML(value: string);
    /**
     Send out an email based on the provided email template and payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get emailTemplateRenderAndSend(): boolean;
    /**
     Send out an email based on the provided email template and payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set emailTemplateRenderAndSend(value: boolean);
    /**
     Render a DocumentTemplate to a PDF file (Base64 string) with the given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    get documentTemplateRenderToPDF(): Base64File;
    /**
     Render a DocumentTemplate to a PDF file (Base64 string) with the given payloadAUTH: Role=[configuration.OWNER,configuration.EDITOR,configuration.VIEWER]
     */
    set documentTemplateRenderToPDF(value: Base64File);
    /**
     AUTH: Role=[order.OWNER]
     */
    get orderStatusCreate(): OrderStatus;
    /**
     AUTH: Role=[order.OWNER]
     */
    set orderStatusCreate(value: OrderStatus);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderStatusUpdate(): OrderStatus;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderStatusUpdate(value: OrderStatus);
    /**
     AUTH: Role=[order.OWNER]
     */
    get orderStatusDelete(): boolean;
    /**
     AUTH: Role=[order.OWNER]
     */
    set orderStatusDelete(value: boolean);
    /**
     AUTH: Role=[order.OWNER]
     */
    get orderStatusSetCreate(): OrderStatusSet;
    /**
     AUTH: Role=[order.OWNER]
     */
    set orderStatusSetCreate(value: OrderStatusSet);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderStatusSetUpdate(): OrderStatusSet;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderStatusSetUpdate(value: OrderStatusSet);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderStatusSetAddOrderStatuses(): OrderStatusSet;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderStatusSetAddOrderStatuses(value: OrderStatusSet);
    /**
     AUTH: Role=[order.OWNER]
     */
    get orderStatusSetRemoveOrderStatuses(): OrderStatusSet;
    /**
     AUTH: Role=[order.OWNER]
     */
    set orderStatusSetRemoveOrderStatuses(value: OrderStatusSet);
    /**
     AUTH: Role=[order.OWNER]
     */
    get orderStatusSetDelete(): boolean;
    /**
     AUTH: Role=[order.OWNER]
     */
    set orderStatusSetDelete(value: boolean);
    /**
     AUTH: Role=[order.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    get orderCreate(): Order;
    /**
     AUTH: Role=[order.OWNER] OR (('user is authenticated') AND ('userId if present in input matches JWT' AND 'companyId(s) if present in input matches JWT'))
     */
    set orderCreate(value: Order);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderUpdate(): Order;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderUpdate(value: Order);
    /**
     AUTH: Role=[order.OWNER]
     */
    get orderDelete(): boolean;
    /**
     AUTH: Role=[order.OWNER]
     */
    set orderDelete(value: boolean);
    /**
     Deprecated in favor of using triggerOrderSendConfirm
     */
    get orderSendConfirmationEmail(): SendOrderConfirmResponseType;
    /**
     Deprecated in favor of using triggerOrderSendConfirm
     */
    set orderSendConfirmationEmail(value: SendOrderConfirmResponseType);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get triggerOrderSendConfirm(): boolean;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set triggerOrderSendConfirm(value: boolean);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get triggerQuoteSendRequest(): boolean;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set triggerQuoteSendRequest(value: boolean);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get triggerQuoteSendValidation(): boolean;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set triggerQuoteSendValidation(value: boolean);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    get triggerQuoteSend(): boolean;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR,order.VIEWER]
     */
    set triggerQuoteSend(value: boolean);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderSetStatus(): Order;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderSetStatus(value: Order);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderItemCreate(): OrderItem;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderItemCreate(value: OrderItem);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderItemUpdate(): OrderItem;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderItemUpdate(value: OrderItem);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderItemDelete(): boolean;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderItemDelete(value: boolean);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderAddressUpdate(): OrderAddress;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderAddressUpdate(value: OrderAddress);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get orderUpdateAddress(): boolean;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set orderUpdateAddress(value: boolean);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get shipmentCreate(): Shipment;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set shipmentCreate(value: Shipment);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get shipmentUpdate(): Shipment;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set shipmentUpdate(value: Shipment);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get shipmentDelete(): boolean;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set shipmentDelete(value: boolean);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get shipmentItemCreate(): ShipmentItem;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set shipmentItemCreate(value: ShipmentItem);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get shipmentItemUpdate(): ShipmentItem;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set shipmentItemUpdate(value: ShipmentItem);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get shipmentItemDelete(): boolean;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set shipmentItemDelete(value: boolean);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get trackAndTraceCreate(): TrackAndTrace;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set trackAndTraceCreate(value: TrackAndTrace);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get trackAndTraceUpdate(): TrackAndTrace;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set trackAndTraceUpdate(value: TrackAndTrace);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get trackAndTraceDelete(): boolean;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set trackAndTraceDelete(value: boolean);
    /**
     AUTH: Role=[shop.OWNER] OR ('user is authenticated')
     */
    get orderlistCreate(): Orderlist;
    /**
     AUTH: Role=[shop.OWNER] OR ('user is authenticated')
     */
    set orderlistCreate(value: Orderlist);
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistUpdate(): Orderlist;
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistUpdate(value: Orderlist);
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistAddItems(): Orderlist;
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistAddItems(value: Orderlist);
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistRemoveItems(): Orderlist;
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistRemoveItems(value: Orderlist);
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistAssignUsers(): Orderlist;
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistAssignUsers(value: Orderlist);
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistUnassignUsers(): Orderlist;
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistUnassignUsers(value: Orderlist);
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistAssignCompanies(): Orderlist;
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistAssignCompanies(value: Orderlist);
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    get orderlistUnassignCompanies(): Orderlist;
    /**
     AUTH: Role=[shop.OWNER,shop.EDITOR]
     */
    set orderlistUnassignCompanies(value: Orderlist);
    /**
     AUTH: Role=[shop.OWNER]
     */
    get orderlistDelete(): boolean;
    /**
     AUTH: Role=[shop.OWNER]
     */
    set orderlistDelete(value: boolean);
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get payMethodCreate(): PayMethod;
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set payMethodCreate(value: PayMethod);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get payMethodUpdate(): PayMethod;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set payMethodUpdate(value: PayMethod);
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get payMethodDelete(): boolean;
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set payMethodDelete(value: boolean);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get priceCreate(): Price;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set priceCreate(value: Price);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get priceCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set priceCsvImport(value: CsvImportResponse);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get priceUpdate(): Price;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set priceUpdate(value: Price);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get priceDelete(): boolean;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set priceDelete(value: boolean);
    /**
     costPriceCreate field
     */
    get costPriceCreate(): CostPrice;
    /**
     costPriceCreate field
     */
    set costPriceCreate(value: CostPrice);
    /**
     costPriceUpdate field
     */
    get costPriceUpdate(): CostPrice;
    /**
     costPriceUpdate field
     */
    set costPriceUpdate(value: CostPrice);
    /**
     costPriceDelete field
     */
    get costPriceDelete(): boolean;
    /**
     costPriceDelete field
     */
    set costPriceDelete(value: boolean);
    /**
     costPricesBulk field
     */
    get costPricesBulk(): BulkResponseData;
    /**
     costPricesBulk field
     */
    set costPricesBulk(value: BulkResponseData);
    /**
     costPricesDelete field
     */
    get costPricesDelete(): boolean;
    /**
     costPricesDelete field
     */
    set costPricesDelete(value: boolean);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get pricesheetCreate(): Pricesheet;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set pricesheetCreate(value: Pricesheet);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get pricesheetUpdate(): Pricesheet;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set pricesheetUpdate(value: Pricesheet);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get pricesheetCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set pricesheetCsvImport(value: CsvImportResponse);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get pricesheetDelete(): boolean;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set pricesheetDelete(value: boolean);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get pricesheetAssign(): Pricesheet;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set pricesheetAssign(value: Pricesheet);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get pricesheetUnassign(): Pricesheet;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set pricesheetUnassign(value: Pricesheet);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get discountCreate(): Discount;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set discountCreate(value: Discount);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get discountUpdate(): Discount;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set discountUpdate(value: Discount);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get discountDelete(): boolean;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set discountDelete(value: boolean);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get discountsDeleteByPricesheetId(): boolean;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set discountsDeleteByPricesheetId(value: boolean);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get discountCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set discountCsvImport(value: CsvImportResponse);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkPriceCreate(): BulkPrice;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkPriceCreate(value: BulkPrice);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get bulkPriceUpdate(): BulkPrice;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set bulkPriceUpdate(value: BulkPrice);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkPriceCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkPriceCsvImport(value: CsvImportResponse);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkPriceDelete(): boolean;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkPriceDelete(value: boolean);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkPricesCreate(): BulkResponseData;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkPricesCreate(value: BulkResponseData);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkPricesDelete(): boolean;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkPricesDelete(value: boolean);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkCostPriceCreate(): BulkCostPrice;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkCostPriceCreate(value: BulkCostPrice);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get bulkCostPriceUpdate(): BulkCostPrice;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set bulkCostPriceUpdate(value: BulkCostPrice);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkCostPriceCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkCostPriceCsvImport(value: CsvImportResponse);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkCostPriceDelete(): boolean;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkCostPriceDelete(value: boolean);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkCostPricesBulk(): BulkResponseData;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkCostPricesBulk(value: BulkResponseData);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get bulkCostPricesDelete(): boolean;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set bulkCostPricesDelete(value: boolean);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get zoneTaxCodeCreate(): ZoneTaxCode;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set zoneTaxCodeCreate(value: ZoneTaxCode);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get zoneTaxCodeUpdate(): ZoneTaxCode;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set zoneTaxCodeUpdate(value: ZoneTaxCode);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get zoneTaxCodeDelete(): boolean;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set zoneTaxCodeDelete(value: boolean);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get zoneTaxCodesCreate(): ZoneTaxCode;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set zoneTaxCodesCreate(value: ZoneTaxCode);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get zoneTaxCodesDelete(): boolean;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set zoneTaxCodesDelete(value: boolean);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get taxCreate(): Tax;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set taxCreate(value: Tax);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get taxUpdate(): Tax;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set taxUpdate(value: Tax);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get taxDelete(): boolean;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set taxDelete(value: boolean);
    /**
     AUTH: Role=[product.OWNER]
     */
    get productCreate(): Product;
    /**
     AUTH: Role=[product.OWNER]
     */
    set productCreate(value: Product);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get productUpdate(): Product;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set productUpdate(value: Product);
    /**
     AUTH: Role=[product.OWNER]
     */
    get productDelete(): boolean;
    /**
     AUTH: Role=[product.OWNER]
     */
    set productDelete(value: boolean);
    /**
     AUTH: Role=[product.OWNER]
     */
    get productCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[product.OWNER]
     */
    set productCsvImport(value: CsvImportResponse);
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterOptionCreate(): ClusterOption;
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterOptionCreate(value: ClusterOption);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get clusterOptionUpdate(): ClusterOption;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set clusterOptionUpdate(value: ClusterOption);
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterOptionDelete(): boolean;
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterOptionDelete(value: boolean);
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterProductCreate(): Product;
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterProductCreate(value: Product);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get clusterProductUpdate(): Product;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set clusterProductUpdate(value: Product);
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterProductDelete(): boolean;
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterProductDelete(value: boolean);
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterCreate(): Cluster;
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterCreate(value: Cluster);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get clusterUpdate(): Cluster;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set clusterUpdate(value: Cluster);
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterCsvImport(value: CsvImportResponse);
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterDelete(): boolean;
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterDelete(value: boolean);
    /**
     AUTH: Role=[product.OWNER] Assigns existing products to a cluster.
     */
    get clusterAssignProducts(): ClusterAssignProductsResponse;
    /**
     AUTH: Role=[product.OWNER] Assigns existing products to a cluster.
     */
    set clusterAssignProducts(value: ClusterAssignProductsResponse);
    /**
     AUTH: Role=[product.OWNER] Unassigns specified products from a cluster, moving them to either a specified category or another cluster.
     */
    get clusterUnassignProducts(): ClusterUnassignProductsResponse;
    /**
     AUTH: Role=[product.OWNER] Unassigns specified products from a cluster, moving them to either a specified category or another cluster.
     */
    set clusterUnassignProducts(value: ClusterUnassignProductsResponse);
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterConfigCreate(): ClusterConfigResponse;
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterConfigCreate(value: ClusterConfigResponse);
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterConfigDelete(): boolean;
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterConfigDelete(value: boolean);
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterConfigAddSetting(): ClusterConfigSettingResponse;
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterConfigAddSetting(value: ClusterConfigSettingResponse);
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterConfigUpdateSetting(): UpdateClusterConfigSettingResponse;
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterConfigUpdateSetting(value: UpdateClusterConfigSettingResponse);
    /**
     AUTH: Role=[product.OWNER]
     */
    get clusterConfigRemoveSetting(): boolean;
    /**
     AUTH: Role=[product.OWNER]
     */
    set clusterConfigRemoveSetting(value: boolean);
    /**
     roleDefinitionCreate field
     */
    get roleDefinitionCreate(): RoleDefinition;
    /**
     roleDefinitionCreate field
     */
    set roleDefinitionCreate(value: RoleDefinition);
    /**
     roleDefinitionUpdate field
     */
    get roleDefinitionUpdate(): RoleDefinition;
    /**
     roleDefinitionUpdate field
     */
    set roleDefinitionUpdate(value: RoleDefinition);
    /**
     roleDefinitionDelete field
     */
    get roleDefinitionDelete(): boolean;
    /**
     roleDefinitionDelete field
     */
    set roleDefinitionDelete(value: boolean);
    /**
     AUTH: Role=[role.OWNER]
     */
    get roleCreate(): Role;
    /**
     AUTH: Role=[role.OWNER]
     */
    set roleCreate(value: Role);
    /**
     AUTH: Role=[role.OWNER,role.EDITOR]
     */
    get roleUpdate(): Role;
    /**
     AUTH: Role=[role.OWNER,role.EDITOR]
     */
    set roleUpdate(value: Role);
    /**
     AUTH: Role=[role.OWNER]
     */
    get roleDelete(): boolean;
    /**
     AUTH: Role=[role.OWNER]
     */
    set roleDelete(value: boolean);
    /**
     shopInvalidateCache field
     */
    get shopInvalidateCache(): boolean;
    /**
     shopInvalidateCache field
     */
    set shopInvalidateCache(value: boolean);
    /**
     AUTH: Role=[product.OWNER]
     */
    get machineCreate(): SparePartsMachine;
    /**
     AUTH: Role=[product.OWNER]
     */
    set machineCreate(value: SparePartsMachine);
    /**
     AUTH: Role=[product.OWNER]
     */
    get machineDelete(): boolean;
    /**
     AUTH: Role=[product.OWNER]
     */
    set machineDelete(value: boolean);
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    get machineUpsert(): SparePartsMachine;
    /**
     AUTH: Role=[product.OWNER,product.EDITOR]
     */
    set machineUpsert(value: SparePartsMachine);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get surchargeCreate(): Surcharge;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set surchargeCreate(value: Surcharge);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get surchargeUpdate(): Surcharge;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set surchargeUpdate(value: Surcharge);
    /**
     AUTH: Role=[pricing.OWNER]
     */
    get surchargeDelete(): Surcharge;
    /**
     AUTH: Role=[pricing.OWNER]
     */
    set surchargeDelete(value: Surcharge);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get addSurchargesToProduct(): ConfirmationResponse;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set addSurchargesToProduct(value: ConfirmationResponse);
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    get removeSurchargesFromProduct(): ConfirmationResponse;
    /**
     AUTH: Role=[pricing.OWNER,pricing.EDITOR]
     */
    set removeSurchargesFromProduct(value: ConfirmationResponse);
    /**
     AUTH: Role=[order.OWNER]
     */
    get tenderStart(): Tender;
    /**
     AUTH: Role=[order.OWNER]
     */
    set tenderStart(value: Tender);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdateAddress(): Tender;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdateAddress(value: Tender);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderAddItems(): TenderResponse;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderAddItems(value: TenderResponse);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdateItem(): Tender;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdateItem(value: Tender);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderDeleteItem(): Tender;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderDeleteItem(value: Tender);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdateInvoiceUser(): Tender;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdateInvoiceUser(value: Tender);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdate(): Tender;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdate(value: Tender);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdateDiscount(): Tender;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdateDiscount(value: Tender);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdatePostage(): Tender;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdatePostage(value: Tender);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderUpdatePayment(): Tender;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderUpdatePayment(value: Tender);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderApplyIncentives(): Tender;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderApplyIncentives(value: Tender);
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    get tenderProcess(): TenderProcessResponse;
    /**
     AUTH: Role=[order.OWNER,order.EDITOR]
     */
    set tenderProcess(value: TenderProcessResponse);
    /**
     AUTH: Role=[order.OWNER]
     */
    get tenderDelete(): string;
    /**
     AUTH: Role=[order.OWNER]
     */
    set tenderDelete(value: string);
    /**
     usergroupCreate field
     */
    get usergroupCreate(): Usergroup;
    /**
     usergroupCreate field
     */
    set usergroupCreate(value: Usergroup);
    /**
     usergroupUpdate field
     */
    get usergroupUpdate(): Usergroup;
    /**
     usergroupUpdate field
     */
    set usergroupUpdate(value: Usergroup);
    /**
     usergroupDelete field
     */
    get usergroupDelete(): boolean;
    /**
     usergroupDelete field
     */
    set usergroupDelete(value: boolean);
    /**
     AUTH: Role=[user.OWNER]
     */
    get companyCreate(): Company;
    /**
     AUTH: Role=[user.OWNER]
     */
    set companyCreate(value: Company);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    get companyUpdate(): Company;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT'))
     */
    set companyUpdate(value: Company);
    /**
     AUTH: Role=[user.OWNER]
     */
    get companyDelete(): string;
    /**
     AUTH: Role=[user.OWNER]
     */
    set companyDelete(value: string);
    /**
     AUTH: Role=[user.OWNER]
     */
    get companyCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[user.OWNER]
     */
    set companyCsvImport(value: CsvImportResponse);
    /**
     Creates a new contact, if you want this new contact to be able to login, please use contactRegister. AUTH: Role=[user.OWNER]
     */
    get contactCreate(): Contact;
    /**
     Creates a new contact, if you want this new contact to be able to login, please use contactRegister. AUTH: Role=[user.OWNER]
     */
    set contactCreate(value: Contact);
    /**
     Creates a new contact and a new login account for this contact. AUTH: Role=[user.OWNER]
     */
    get contactRegister(): RegisterContactResponse;
    /**
     Creates a new contact and a new login account for this contact. AUTH: Role=[user.OWNER]
     */
    set contactRegister(value: RegisterContactResponse);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    get contactUpdate(): Contact;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    set contactUpdate(value: Contact);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    get contactAddToCompanies(): ContactAddToCompaniesResponse;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    set contactAddToCompanies(value: ContactAddToCompaniesResponse);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    get contactRemoveFromCompanies(): ContactRemoveFromCompaniesResponse;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('contactId if present in input matches JWT'))
     */
    set contactRemoveFromCompanies(value: ContactRemoveFromCompaniesResponse);
    /**
     AUTH: Role=[user.OWNER]
     */
    get contactDelete(): boolean;
    /**
     AUTH: Role=[user.OWNER]
     */
    set contactDelete(value: boolean);
    /**
     AUTH: Role=[user.OWNER]
     */
    get contactCreateAccount(): RegisterContactResponse;
    /**
     AUTH: Role=[user.OWNER]
     */
    set contactCreateAccount(value: RegisterContactResponse);
    /**
     AUTH: Role=[user.OWNER]
     */
    get contactDeleteAccount(): boolean;
    /**
     AUTH: Role=[user.OWNER]
     */
    set contactDeleteAccount(value: boolean);
    /**
     AUTH: Role=[user.OWNER]
     */
    get contactCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[user.OWNER]
     */
    set contactCsvImport(value: CsvImportResponse);
    /**
     triggerContactSendWelcomeEmailEvent field
     */
    get triggerContactSendWelcomeEmailEvent(): boolean;
    /**
     triggerContactSendWelcomeEmailEvent field
     */
    set triggerContactSendWelcomeEmailEvent(value: boolean);
    /**
     Creates a new customer, if you want this new customer to be able to login, please use customerRegister. AUTH: Role=[user.OWNER]
     */
    get customerCreate(): Customer;
    /**
     Creates a new customer, if you want this new customer to be able to login, please use customerRegister. AUTH: Role=[user.OWNER]
     */
    set customerCreate(value: Customer);
    /**
     Creates a new customer and a new login account for this customer. AUTH: Role=[user.OWNER]
     */
    get customerRegister(): RegisterCustomerResponse;
    /**
     Creates a new customer and a new login account for this customer. AUTH: Role=[user.OWNER]
     */
    set customerRegister(value: RegisterCustomerResponse);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    get customerUpdate(): Customer;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR] OR (('user is authenticated') AND ('customerId if present in input matches JWT'))
     */
    set customerUpdate(value: Customer);
    /**
     AUTH: Role=[user.OWNER]
     */
    get customerDelete(): boolean;
    /**
     AUTH: Role=[user.OWNER]
     */
    set customerDelete(value: boolean);
    /**
     AUTH: Role=[user.OWNER]
     */
    get customerCreateAccount(): RegisterCustomerResponse;
    /**
     AUTH: Role=[user.OWNER]
     */
    set customerCreateAccount(value: RegisterCustomerResponse);
    /**
     AUTH: Role=[user.OWNER]
     */
    get customerDeleteAccount(): boolean;
    /**
     AUTH: Role=[user.OWNER]
     */
    set customerDeleteAccount(value: boolean);
    /**
     triggerCustomerSendWelcomeEmailEvent field
     */
    get triggerCustomerSendWelcomeEmailEvent(): boolean;
    /**
     triggerCustomerSendWelcomeEmailEvent field
     */
    set triggerCustomerSendWelcomeEmailEvent(value: boolean);
    /**
     AUTH: Role=[user.OWNER]
     */
    get customerCsvImport(): CsvImportResponse;
    /**
     AUTH: Role=[user.OWNER]
     */
    set customerCsvImport(value: CsvImportResponse);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR]
     */
    get addCompanyManager(): string;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR]
     */
    set addCompanyManager(value: string);
    /**
     AUTH: Role=[user.OWNER,user.EDITOR]
     */
    get removeCompanyManager(): string;
    /**
     AUTH: Role=[user.OWNER,user.EDITOR]
     */
    set removeCompanyManager(value: string);
    /**
     Creates a PurchaseAuthorizationConfig entity for a contact within a company. AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')),
     */
    get purchaseAuthorizationConfigCreate(): PurchaseAuthorizationConfig;
    /**
     Creates a PurchaseAuthorizationConfig entity for a contact within a company. AUTH: Role=[user.OWNER] OR (('user is authenticated') AND ('companyId(s) if present in input matches JWT')),
     */
    set purchaseAuthorizationConfigCreate(value: PurchaseAuthorizationConfig);
    /**
     Updates a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER,user.EDITOR] OR ('user is authenticated'),
     */
    get purchaseAuthorizationConfigUpdate(): PurchaseAuthorizationConfig;
    /**
     Updates a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER,user.EDITOR] OR ('user is authenticated'),
     */
    set purchaseAuthorizationConfigUpdate(value: PurchaseAuthorizationConfig);
    /**
     Deletes a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER] OR ('user is authenticated'),
     */
    get purchaseAuthorizationConfigDelete(): boolean;
    /**
     Deletes a PurchaseAuthorizationConfig entity by ID. AUTH: Role=[user.OWNER] OR ('user is authenticated'),
     */
    set purchaseAuthorizationConfigDelete(value: boolean);
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get valuesetCreate(): Valueset;
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set valuesetCreate(value: Valueset);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get valuesetUpdate(): Valueset;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set valuesetUpdate(value: Valueset);
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get valuesetDelete(): boolean;
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set valuesetDelete(value: boolean);
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get valuesetItemCreate(): ValuesetItem;
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set valuesetItemCreate(value: ValuesetItem);
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    get valuesetItemUpdate(): ValuesetItem;
    /**
     AUTH: Role=[configuration.OWNER,configuration.EDITOR]
     */
    set valuesetItemUpdate(value: ValuesetItem);
    /**
     AUTH: Role=[configuration.OWNER]
     */
    get valuesetItemDelete(): boolean;
    /**
     AUTH: Role=[configuration.OWNER]
     */
    set valuesetItemDelete(value: boolean);
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get warehouseCreate(): Warehouse;
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set warehouseCreate(value: Warehouse);
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    get warehouseUpdate(): Warehouse;
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    set warehouseUpdate(value: Warehouse);
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get warehouseDelete(): Warehouse;
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set warehouseDelete(value: Warehouse);
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get warehouseAddressCreate(): WarehouseAddress;
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set warehouseAddressCreate(value: WarehouseAddress);
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    get warehouseAddressUpdate(): WarehouseAddress;
    /**
     AUTH: Role=[logistics.OWNER,logistics.EDITOR]
     */
    set warehouseAddressUpdate(value: WarehouseAddress);
    /**
     AUTH: Role=[logistics.OWNER]
     */
    get warehouseAddressDelete(): boolean;
    /**
     AUTH: Role=[logistics.OWNER]
     */
    set warehouseAddressDelete(value: boolean);
}
//# sourceMappingURL=Mutation.d.ts.map