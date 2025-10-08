import { CartStatus } from '../enum/CartStatus';
import { CartVoucher } from './CartVoucher';
import { CartPaymentData } from './CartPaymentData';
import { CartPostageData } from './CartPostageData';
import { CartTotal } from './CartTotal';
import { CartMainItem } from './CartMainItem';
import { CartBaseItem } from './CartBaseItem';
import { CartUnOrderableItem } from './CartUnOrderableItem';
import { CartAddress } from './CartAddress';
import { CartTaxLevel } from './CartTaxLevel';
import { CartPaymethod } from './CartPaymethod';
import { CartCarrier } from './CartCarrier';
import { CartIncentive } from './CartIncentive';
import { CartShippingMethod } from './CartShippingMethod';
import { IBaseUser } from './IBaseUser';
import { Contact } from './Contact';
import { Customer } from './Customer';
import { Company } from './Company';
/**
 Object class for Cart
 */
export declare class Cart {
    /** Cart's primary identifier */
    private _cartId;
    /** Channel identifier this cart belongs to. */
    private _channelId?;
    /** Shop identifier this cart belongs to. */
    private _shopId;
    /** userId field */
    /** @deprecated This field will be removed in a future release, use contact+companyId or customerId instead */
    private _userId?;
    /** ContactId for this cart. Goes in combination with companyId */
    private _contactId?;
    /** CustomerId for this cart. */
    private _customerId?;
    /** CompanyId the contact belongs to. Goes in combination with contactId */
    private _companyId?;
    /** User's remarks for this cart. */
    private _notes?;
    /** User's reference for this cart. */
    private _reference?;
    /** Additional information field that can be stored with a cart and order. */
    private _extra3?;
    /** Additional information field that can be stored with a cart and order. */
    private _extra4?;
    /** Status of the order after processing the cart. When order status is UNFINISHED, the cart is pending payment from PSP. */
    private _orderStatus?;
    /** Action code that is applied to this cart. Is only filled when a valid action code is applied */
    private _actionCode?;
    /** Array of voucher codes that are applied to this cart. Is only filled when a valid action is applied. */
    private _vouchers?;
    /** Payment data for this cart. */
    private _paymentData?;
    /** Postage data for this cart. */
    private _postageData?;
    /** Totals for this cart. */
    private _total?;
    /** Cart's main items */
    private _items?;
    /** Bonus items that are added to this cart through incentives. */
    private _bonusItems?;
    /** Items that are added to the Cart, but can't be ordered. */
    private _unOrderableItems?;
    /** Address the invoice for the order should be sent to. */
    private _invoiceAddress;
    /** Address the order should be sent to. */
    private _deliveryAddress;
    /** Amount of tax that applies to this cart per tax code */
    private _taxLevels?;
    /** List of selectable paymethods for this cart and applied user. */
    private _payMethods?;
    /** List of selectable carriers for this cart. */
    private _carriers?;
    /** Date this cart has been created. */
    private _createdAt?;
    /** Date this cart has been last updated. */
    private _lastModifiedAt?;
    /** User which created the cart. */
    private _createdBy?;
    /** User which last updated the cart. */
    private _lastModifiedBy?;
    /** All incentives that apply to this cart. */
    private _appliedIncentives?;
    /** Total amount of value-points that apply to this cart */
    private _valuePoints?;
    /** All shipping methods available for this cart. */
    private _shippingMethods?;
    /** Language of the order that will be created from this cart. Order confirmation email will be sent in that language. */
    private _language?;
    /** Indicates whether authorization is required to finalize the cart */
    private _purchaseAuthorizationRequired;
    /** Indicates cart status */
    private _status?;
    /** Cart User */
    /** @deprecated Deprecated in favor of `contact` or `customer` */
    private _user?;
    /** Tender Contact */
    private _contact?;
    /** Tender Customer */
    private _customer?;
    /** Tender Company */
    private _company?;
    /**
     Creates a new instance of Cart
     */
    constructor(data?: Partial<Cart>);
    /**
     Cart's primary identifier
     */
    get cartId(): string;
    /**
     Cart's primary identifier
     */
    set cartId(value: string);
    /**
     Channel identifier this cart belongs to.
     */
    get channelId(): number | undefined;
    /**
     Channel identifier this cart belongs to.
     */
    set channelId(value: number | undefined);
    /**
     Shop identifier this cart belongs to.
     */
    get shopId(): number;
    /**
     Shop identifier this cart belongs to.
     */
    set shopId(value: number);
    /**
     userId field
     */
    get userId(): number | undefined;
    /**
     userId field
     */
    set userId(value: number | undefined);
    /**
     ContactId for this cart. Goes in combination with companyId
     */
    get contactId(): number | undefined;
    /**
     ContactId for this cart. Goes in combination with companyId
     */
    set contactId(value: number | undefined);
    /**
     CustomerId for this cart.
     */
    get customerId(): number | undefined;
    /**
     CustomerId for this cart.
     */
    set customerId(value: number | undefined);
    /**
     CompanyId the contact belongs to. Goes in combination with contactId
     */
    get companyId(): number | undefined;
    /**
     CompanyId the contact belongs to. Goes in combination with contactId
     */
    set companyId(value: number | undefined);
    /**
     User's remarks for this cart.
     */
    get notes(): string | undefined;
    /**
     User's remarks for this cart.
     */
    set notes(value: string | undefined);
    /**
     User's reference for this cart.
     */
    get reference(): string | undefined;
    /**
     User's reference for this cart.
     */
    set reference(value: string | undefined);
    /**
     Additional information field that can be stored with a cart and order.
     */
    get extra3(): string | undefined;
    /**
     Additional information field that can be stored with a cart and order.
     */
    set extra3(value: string | undefined);
    /**
     Additional information field that can be stored with a cart and order.
     */
    get extra4(): string | undefined;
    /**
     Additional information field that can be stored with a cart and order.
     */
    set extra4(value: string | undefined);
    /**
     Status of the order after processing the cart. When order status is UNFINISHED, the cart is pending payment from PSP.
     */
    get orderStatus(): string | undefined;
    /**
     Status of the order after processing the cart. When order status is UNFINISHED, the cart is pending payment from PSP.
     */
    set orderStatus(value: string | undefined);
    /**
     Action code that is applied to this cart. Is only filled when a valid action code is applied
     */
    get actionCode(): string | undefined;
    /**
     Action code that is applied to this cart. Is only filled when a valid action code is applied
     */
    set actionCode(value: string | undefined);
    /**
     Array of voucher codes that are applied to this cart. Is only filled when a valid action is applied.
     */
    get vouchers(): CartVoucher[] | undefined;
    /**
     Array of voucher codes that are applied to this cart. Is only filled when a valid action is applied.
     */
    set vouchers(value: CartVoucher[] | undefined);
    /**
     Payment data for this cart.
     */
    get paymentData(): CartPaymentData | undefined;
    /**
     Payment data for this cart.
     */
    set paymentData(value: CartPaymentData | undefined);
    /**
     Postage data for this cart.
     */
    get postageData(): CartPostageData | undefined;
    /**
     Postage data for this cart.
     */
    set postageData(value: CartPostageData | undefined);
    /**
     Totals for this cart.
     */
    get total(): CartTotal | undefined;
    /**
     Totals for this cart.
     */
    set total(value: CartTotal | undefined);
    /**
     Cart's main items
     */
    get items(): CartMainItem[] | undefined;
    /**
     Cart's main items
     */
    set items(value: CartMainItem[] | undefined);
    /**
     Bonus items that are added to this cart through incentives.
     */
    get bonusItems(): CartBaseItem[] | undefined;
    /**
     Bonus items that are added to this cart through incentives.
     */
    set bonusItems(value: CartBaseItem[] | undefined);
    /**
     Items that are added to the Cart, but can't be ordered.
     */
    get unOrderableItems(): CartUnOrderableItem[] | undefined;
    /**
     Items that are added to the Cart, but can't be ordered.
     */
    set unOrderableItems(value: CartUnOrderableItem[] | undefined);
    /**
     Address the invoice for the order should be sent to.
     */
    get invoiceAddress(): CartAddress;
    /**
     Address the invoice for the order should be sent to.
     */
    set invoiceAddress(value: CartAddress);
    /**
     Address the order should be sent to.
     */
    get deliveryAddress(): CartAddress;
    /**
     Address the order should be sent to.
     */
    set deliveryAddress(value: CartAddress);
    /**
     Amount of tax that applies to this cart per tax code
     */
    get taxLevels(): CartTaxLevel[] | undefined;
    /**
     Amount of tax that applies to this cart per tax code
     */
    set taxLevels(value: CartTaxLevel[] | undefined);
    /**
     List of selectable paymethods for this cart and applied user.
     */
    get payMethods(): CartPaymethod[] | undefined;
    /**
     List of selectable paymethods for this cart and applied user.
     */
    set payMethods(value: CartPaymethod[] | undefined);
    /**
     List of selectable carriers for this cart.
     */
    get carriers(): CartCarrier[] | undefined;
    /**
     List of selectable carriers for this cart.
     */
    set carriers(value: CartCarrier[] | undefined);
    /**
     Date this cart has been created.
     */
    get createdAt(): string | undefined;
    /**
     Date this cart has been created.
     */
    set createdAt(value: string | undefined);
    /**
     Date this cart has been last updated.
     */
    get lastModifiedAt(): string | undefined;
    /**
     Date this cart has been last updated.
     */
    set lastModifiedAt(value: string | undefined);
    /**
     User which created the cart.
     */
    get createdBy(): number | undefined;
    /**
     User which created the cart.
     */
    set createdBy(value: number | undefined);
    /**
     User which last updated the cart.
     */
    get lastModifiedBy(): number | undefined;
    /**
     User which last updated the cart.
     */
    set lastModifiedBy(value: number | undefined);
    /**
     All incentives that apply to this cart.
     */
    get appliedIncentives(): CartIncentive[] | undefined;
    /**
     All incentives that apply to this cart.
     */
    set appliedIncentives(value: CartIncentive[] | undefined);
    /**
     Total amount of value-points that apply to this cart
     */
    get valuePoints(): number | undefined;
    /**
     Total amount of value-points that apply to this cart
     */
    set valuePoints(value: number | undefined);
    /**
     All shipping methods available for this cart.
     */
    get shippingMethods(): CartShippingMethod[] | undefined;
    /**
     All shipping methods available for this cart.
     */
    set shippingMethods(value: CartShippingMethod[] | undefined);
    /**
     Language of the order that will be created from this cart. Order confirmation email will be sent in that language.
     */
    get language(): string | undefined;
    /**
     Language of the order that will be created from this cart. Order confirmation email will be sent in that language.
     */
    set language(value: string | undefined);
    /**
     Indicates whether authorization is required to finalize the cart
     */
    get purchaseAuthorizationRequired(): boolean;
    /**
     Indicates whether authorization is required to finalize the cart
     */
    set purchaseAuthorizationRequired(value: boolean);
    /**
     Indicates cart status
     */
    get status(): CartStatus | undefined;
    /**
     Indicates cart status
     */
    set status(value: CartStatus | undefined);
    /**
     Cart User
     */
    get user(): IBaseUser | undefined;
    /**
     Cart User
     */
    set user(value: IBaseUser | undefined);
    /**
     Tender Contact
     */
    get contact(): Contact | undefined;
    /**
     Tender Contact
     */
    set contact(value: Contact | undefined);
    /**
     Tender Customer
     */
    get customer(): Customer | undefined;
    /**
     Tender Customer
     */
    set customer(value: Customer | undefined);
    /**
     Tender Company
     */
    get company(): Company | undefined;
    /**
     Tender Company
     */
    set company(value: Company | undefined);
}
//# sourceMappingURL=Cart.d.ts.map