import { YesNo } from '../enum/YesNo';
import { CompaniesResponse } from './CompaniesResponse';
import { Customer } from './Customer';
/**
 Object class for Usergroup
 */
export declare class Usergroup {
    /** The id of the usergroup. */
    private _usergroupId;
    /** The name of the usergroup. */
    private _name;
    /** Shows whether this usergroup is hidden and should only be used for background operations. */
    private _hidden?;
    /** inheritProductList field */
    private _inheritProductList?;
    /** The path in id's to the root of the inheritance tree. */
    private _path?;
    /** The slug of the usergroup. */
    private _slug?;
    /** The slug of the usergroup. */
    private _tag?;
    /** createdAt field */
    private _createdAt?;
    /** lastModifiedAt field */
    private _lastModifiedAt?;
    /** The id of parent usergroup. */
    private _parentUsergroupId;
    /** Children companies of the usergroup. */
    private _companies?;
    /** customers field */
    private _customers;
    /**
     Creates a new instance of Usergroup
     */
    constructor(data?: Partial<Usergroup>);
    /**
     The id of the usergroup.
     */
    get usergroupId(): number;
    /**
     The id of the usergroup.
     */
    set usergroupId(value: number);
    /**
     The name of the usergroup.
     */
    get name(): string;
    /**
     The name of the usergroup.
     */
    set name(value: string);
    /**
     Shows whether this usergroup is hidden and should only be used for background operations.
     */
    get hidden(): YesNo | undefined;
    /**
     Shows whether this usergroup is hidden and should only be used for background operations.
     */
    set hidden(value: YesNo | undefined);
    /**
     inheritProductList field
     */
    get inheritProductList(): YesNo | undefined;
    /**
     inheritProductList field
     */
    set inheritProductList(value: YesNo | undefined);
    /**
     The path in id's to the root of the inheritance tree.
     */
    get path(): string | undefined;
    /**
     The path in id's to the root of the inheritance tree.
     */
    set path(value: string | undefined);
    /**
     The slug of the usergroup.
     */
    get slug(): string | undefined;
    /**
     The slug of the usergroup.
     */
    set slug(value: string | undefined);
    /**
     The slug of the usergroup.
     */
    get tag(): string | undefined;
    /**
     The slug of the usergroup.
     */
    set tag(value: string | undefined);
    /**
     createdAt field
     */
    get createdAt(): string | undefined;
    /**
     createdAt field
     */
    set createdAt(value: string | undefined);
    /**
     lastModifiedAt field
     */
    get lastModifiedAt(): string | undefined;
    /**
     lastModifiedAt field
     */
    set lastModifiedAt(value: string | undefined);
    /**
     The id of parent usergroup.
     */
    get parentUsergroupId(): number;
    /**
     The id of parent usergroup.
     */
    set parentUsergroupId(value: number);
    /**
     Children companies of the usergroup.
     */
    get companies(): CompaniesResponse | undefined;
    /**
     Children companies of the usergroup.
     */
    set companies(value: CompaniesResponse | undefined);
    /**
     customers field
     */
    get customers(): Customer[];
    /**
     customers field
     */
    set customers(value: Customer[]);
}
//# sourceMappingURL=Usergroup.d.ts.map