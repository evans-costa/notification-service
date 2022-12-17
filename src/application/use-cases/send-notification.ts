import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationRespose{
    notification: Notification;
}

export class SendNotification {
    constructor(private notificationRepository: NotificationsRepository) {}

    async execute(request: SendNotificationRequest): Promise<SendNotificationRespose> {
        const { recipientId, content, category } = request

        const notification = new Notification({
            recipientId, 
            content: new Content(content),
            category,
        });

        await this.notificationRepository.create(notification) // o método create chama o repositório

        return {
            notification,
        };
    }
}