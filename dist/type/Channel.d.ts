import { Shop } from './Shop';
/**
 Object class for Channel
 */
export declare class Channel {
    /** channelId field */
    private _channelId;
    /** id field */
    private _id;
    /** name field */
    private _name;
    /** Catalog root id */
    private _catalogRootId?;
    /** Channel default letter id */
    private _defaultLetterId?;
    /** Channel anonymous user id */
    private _anonymousUserId?;
    /** shop field */
    private _shop?;
    /**
     Creates a new instance of Channel
     */
    constructor(data?: Partial<Channel>);
    /**
     channelId field
     */
    get channelId(): number;
    /**
     channelId field
     */
    set channelId(value: number);
    /**
     id field
     */
    get id(): number;
    /**
     id field
     */
    set id(value: number);
    /**
     name field
     */
    get name(): string;
    /**
     name field
     */
    set name(value: string);
    /**
     Catalog root id
     */
    get catalogRootId(): number | undefined;
    /**
     Catalog root id
     */
    set catalogRootId(value: number | undefined);
    /**
     Channel default letter id
     */
    get defaultLetterId(): number | undefined;
    /**
     Channel default letter id
     */
    set defaultLetterId(value: number | undefined);
    /**
     Channel anonymous user id
     */
    get anonymousUserId(): number | undefined;
    /**
     Channel anonymous user id
     */
    set anonymousUserId(value: number | undefined);
    /**
     shop field
     */
    get shop(): Shop | undefined;
    /**
     shop field
     */
    set shop(value: Shop | undefined);
}
//# sourceMappingURL=Channel.d.ts.map