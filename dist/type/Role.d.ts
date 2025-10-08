import { RoleAccess } from '../enum/RoleAccess';
import { RoleDefinition } from './RoleDefinition';
/**
 Object class for Role
 */
export declare class Role {
    /** The unique identifier of the role */
    private _id;
    /** The role definition for this role */
    private _roleDefinition;
    /** The id of the user this role belongs to */
    private _userId;
    /** The access for this role */
    private _access;
    /** Creation date */
    private _createdAt;
    /** Last modified date */
    private _lastModifiedAt;
    /** createdBy field */
    private _createdBy?;
    /** lastModifiedBy field */
    private _lastModifiedBy?;
    /**
     Creates a new instance of Role
     */
    constructor(data?: Partial<Role>);
    /**
     The unique identifier of the role
     */
    get id(): string | number;
    /**
     The unique identifier of the role
     */
    set id(value: string | number);
    /**
     The role definition for this role
     */
    get roleDefinition(): RoleDefinition;
    /**
     The role definition for this role
     */
    set roleDefinition(value: RoleDefinition);
    /**
     The id of the user this role belongs to
     */
    get userId(): number;
    /**
     The id of the user this role belongs to
     */
    set userId(value: number);
    /**
     The access for this role
     */
    get access(): RoleAccess;
    /**
     The access for this role
     */
    set access(value: RoleAccess);
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
}
//# sourceMappingURL=Role.d.ts.map