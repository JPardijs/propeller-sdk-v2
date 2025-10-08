import { LocalizedString } from './LocalizedString';
/**
 Object class for EmailSender
 */
export declare class EmailSender {
    /** The email address of the sender */
    private _email;
    /** The name of the sender */
    private _names?;
    /**
     Creates a new instance of EmailSender
     */
    constructor(data?: Partial<EmailSender>);
    /**
     The email address of the sender
     */
    get email(): string;
    /**
     The email address of the sender
     */
    set email(value: string);
    /**
     The name of the sender
     */
    get names(): LocalizedString[] | undefined;
    /**
     The name of the sender
     */
    set names(value: LocalizedString[] | undefined);
}
//# sourceMappingURL=EmailSender.d.ts.map