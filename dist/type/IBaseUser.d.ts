/**
 Base interface for user entities
 */
export interface IBaseUser {
    /** Unique identifier */
    id: string;
    /** User's email address */
    email?: string;
    /** User's first name */
    firstName?: string;
    /** User's last name */
    lastName?: string;
    /** Whether the user is active */
    enabled?: boolean;
}
//# sourceMappingURL=IBaseUser.d.ts.map