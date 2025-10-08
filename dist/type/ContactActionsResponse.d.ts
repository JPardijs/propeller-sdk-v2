import { ContactActionsData } from './ContactActionsData';
/**
 Object class for ContactActionsResponse
 */
export declare class ContactActionsResponse {
    /** List of output messaged for actions performed */
    private _data;
    /** List of extra messages */
    private _messages;
    /**
     Creates a new instance of ContactActionsResponse
     */
    constructor(data?: Partial<ContactActionsResponse>);
    /**
     List of output messaged for actions performed
     */
    get data(): ContactActionsData[];
    /**
     List of output messaged for actions performed
     */
    set data(value: ContactActionsData[]);
    /**
     List of extra messages
     */
    get messages(): string[];
    /**
     List of extra messages
     */
    set messages(value: string[]);
}
//# sourceMappingURL=ContactActionsResponse.d.ts.map