import { Content } from "./content";

export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private props: NotificationProps

    constructor(props: NotificationProps) {
        this.props = props;
    }

    public set recipientId (recipientId : string) { // setter
        this.props.recipientId = recipientId;
    }

    public get recipientId(): string { // getter
        return this.props.recipientId;
    }
    
    public set content (content : Content) { // setter
        this.props.content = content;
    }

    public get content(): Content { // getter
        return this.props.content;
    }
    
    public set category (category : string) { // setter
        this.props.category = category;
    }

    public get category(): string { // getter
        return this.props.category;
    }

    public set readAt (readAt : Date | null | undefined) { // setter
        this.props.readAt = readAt;
    }

    public get readAt(): Date | null | undefined { // getter
        return this.props.readAt;
    }

    public get createdAt(): Date { // getter
        return this.props.createdAt;
    }
}