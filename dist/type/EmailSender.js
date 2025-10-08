"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSender = void 0;
/**
 Object class for EmailSender
 */
class EmailSender {
    /**
     Creates a new instance of EmailSender
     */
    constructor(data = {}) {
        this._email = data.email;
        this._names = data.names;
    }
    /**
     The email address of the sender
     */
    get email() {
        return this._email;
    }
    /**
     The email address of the sender
     */
    set email(value) {
        this._email = value;
    }
    /**
     The name of the sender
     */
    get names() {
        return this._names;
    }
    /**
     The name of the sender
     */
    set names(value) {
        this._names = value;
    }
}
exports.EmailSender = EmailSender;
//# sourceMappingURL=EmailSender.js.map