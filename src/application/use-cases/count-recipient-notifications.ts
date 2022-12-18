import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface CountRecipientNotificationRequest {
    recipientId: string;
}

interface CountRecipientNotificationRespose {
    count: number
}

@Injectable()
export class CountRecipientNotification {
    constructor(private notificationRepository: NotificationsRepository) {}

    async execute(request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationRespose> {
        const { recipientId } = request

        const count = await this.notificationRepository.countManyByRecipientId(recipientId)

        return { 
            count,
        };
    }
}