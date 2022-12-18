import { inMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository"
import { SendNotification } from "./send-notification"

describe("Send notification", () => {
    it('should be able to send a notification', async () => {
        const notificationRepository = new inMemoryNotificationRepository()
        const sendNotification = new SendNotification(notificationRepository)

        const { notification } = await sendNotification.execute({ // o sendNotification chama o método create
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipient-id'
        });

        expect(notificationRepository.notifications).toHaveLength(1);
        expect(notificationRepository.notifications[0]).toEqual(notification)
    });
});