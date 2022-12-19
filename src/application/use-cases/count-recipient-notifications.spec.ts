import { inMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository"
import { CountRecipientNotification } from "./count-recipient-notifications";
import { makeNotification } from "@test/factories/notification-factory";

describe("Count recipients notifications", () => {
    it('should be able to count recipient notification', async () => {
        const notificationsRepository = new inMemoryNotificationRepository();
        const countRecipientNotification = new CountRecipientNotification(notificationsRepository)

        await notificationsRepository.create(makeNotification({
            recipientId: 'recipient-1'
        }))

        await notificationsRepository.create(makeNotification({
            recipientId: 'recipient-1'
        }))

        await notificationsRepository.create(makeNotification({
            recipientId: 'recipient-2'
        }))
        
        const { count } = await countRecipientNotification.execute({ // o CancelNotification chama o método create
            recipientId: 'recipient-1',
        });

        expect(count).toEqual(2)
    });
});