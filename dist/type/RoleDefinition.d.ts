import { RoleAccess } from '../enum/RoleAccess';
import { LocalizedString } from './LocalizedString';
import { Role } from './Role';
/**
 Object class for RoleDefinition
 */
export declare class RoleDefinition {
    /** The unique identifier of the role definition */
    private _id;
    /** The domain name of the role definition */
    private _name;
    /** The descriptions of the role definition */
    private _descriptions;
    /** The default access for the role definition */
    private _defaultAccess;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** createdBy field */
    private _createdBy?;
    /** lastModifiedBy field */
    private _lastModifiedBy?;
    /** roles field */
    private _roles;
    /**
     Creates a new instance of RoleDefinition
     */
    constructor(data?: Partial<RoleDefinition>);
    /**
     The unique identifier of the role definition
     */
    get id(): string | number;
    /**
     The unique identifier of the role definition
     */
    set id(value: string | number);
    /**
     The domain name of the role definition
     */
    get name(): string;
    /**
     The domain name of the role definition
     */
    set name(value: string);
    /**
     The descriptions of the role definition
     */
    get descriptions(): LocalizedString[];
    /**
     The descriptions of the role definition
     */
    set descriptions(value: LocalizedString[]);
    /**
     The default access for the role definition
     */
    get defaultAccess(): RoleAccess;
    /**
     The default access for the role definition
     */
    set defaultAccess(value: RoleAccess);
    /**
     Creation date
     */
    get createdAt(): string;
    /**
     Creation date
     */
    set createdAt(value: string);
    /**
     Last modified date
     */
    get lastModifiedAt(): string;
    /**
     Last modified date
     */
    set lastModifiedAt(value: string);
    /**
     createdBy field
     */
    get createdBy(): number | undefined;
    /**
     createdBy field
     */
    set createdBy(value: number | undefined);
    /**
     lastModifiedBy field
     */
    get lastModifiedBy(): number | undefined;
    /**
     lastModifiedBy field
     */
    set lastModifiedBy(value: number | undefined);
    /**
     roles field
     */
    get roles(): Role[];
    /**
     roles field
     */
    set roles(value: Role[]);
}
//# sourceMappingURL=RoleDefinition.d.ts.map