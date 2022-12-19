import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface GetRecipientNotificationsRequest {
    recipientId: string;
}

interface GetRecipientNotificationsRespose {
    notifications: Notification[]
}

@Injectable()
export class GetRecipientNotifications {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsRespose> {
        const { recipientId } = request

        const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId)

        return { 
            notifications,
        };
    }
}