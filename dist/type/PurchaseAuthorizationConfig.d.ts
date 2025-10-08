import { PurchaseRole } from '../enum/PurchaseRole';
import { Company } from './Company';
import { Contact } from './Contact';
/**
 Object class for PurchaseAuthorizationConfig
 */
export declare class PurchaseAuthorizationConfig {
    /** The primary ID of the purchase authorization config, uuid v7 format */
    private _id;
    /** The purchase role of the contact within the company. Defaults to PURCHASER */
    private _purchaseRole;
    /** The purchaser's authorization limit i.e. maximum amount that can be spent per order */
    private _authorizationLimit?;
    /** The creation date of this PurchaseAuthorizationConfig */
    private _createdAt;
    /** The last modified date of this PurchaseAuthorizationConfig */
    private _lastModifiedAt;
    /** The company the purchase authorization config is valid for */
    private _company?;
    /** The contact the purchase authorization config is valid for */
    private _contact?;
    /**
     Creates a new instance of PurchaseAuthorizationConfig
     */
    constructor(data?: Partial<PurchaseAuthorizationConfig>);
    /**
     The primary ID of the purchase authorization config, uuid v7 format
     */
    get id(): string;
    /**
     The primary ID of the purchase authorization config, uuid v7 format
     */
    set id(value: string);
    /**
     The purchase role of the contact within the company. Defaults to PURCHASER
     */
    get purchaseRole(): PurchaseRole;
    /**
     The purchase role of the contact within the company. Defaults to PURCHASER
     */
    set purchaseRole(value: PurchaseRole);
    /**
     The purchaser's authorization limit i.e. maximum amount that can be spent per order
     */
    get authorizationLimit(): number | undefined;
    /**
     The purchaser's authorization limit i.e. maximum amount that can be spent per order
     */
    set authorizationLimit(value: number | undefined);
    /**
     The creation date of this PurchaseAuthorizationConfig
     */
    get createdAt(): string;
    /**
     The creation date of this PurchaseAuthorizationConfig
     */
    set createdAt(value: string);
    /**
     The last modified date of this PurchaseAuthorizationConfig
     */
    get lastModifiedAt(): string;
    /**
     The last modified date of this PurchaseAuthorizationConfig
     */
    set lastModifiedAt(value: string);
    /**
     The company the purchase authorization config is valid for
     */
    get company(): Company | undefined;
    /**
     The company the purchase authorization config is valid for
     */
    set company(value: Company | undefined);
    /**
     The contact the purchase authorization config is valid for
     */
    get contact(): Contact | undefined;
    /**
     The contact the purchase authorization config is valid for
     */
    set contact(value: Contact | undefined);
}
//# sourceMappingURL=PurchaseAuthorizationConfig.d.ts.map