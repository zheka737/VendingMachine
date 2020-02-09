import { Injectable } from "@angular/core";

@Injectable()
export class ContextualHelpService {
  private _messages: ContextualHelpMessage[] = [];

  get messages(): ContextualHelpMessage[] {
    return this._messages;
  }

  showMessage(message: string) {
    let messageObject = new ContextualHelpMessage(message);

    this._messages.unshift(messageObject);

    setTimeout(() => {
      messageObject.show = false;
    }, 3000);
  }
}

class ContextualHelpMessage {
  constructor(message: string) {
    this.message = message;
  }

  show: boolean = true;

  message: string;
}
