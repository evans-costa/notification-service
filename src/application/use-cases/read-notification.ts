import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface ReadNotificationRequest {
    notificationId: string;
}

type ReadNotificationRespose = void;

@Injectable()
export class ReadNotification {
    constructor(private notificationRepository: NotificationsRepository) {}

    async execute(request: ReadNotificationRequest): Promise<ReadNotificationRespose> {
        const { notificationId } = request

        const notification = await this.notificationRepository.findById(notificationId);

        if (!notification) {
            throw new NotificationNotFound();
        }

        notification.read();

        await this.notificationRepository.save(notification)
    }
}