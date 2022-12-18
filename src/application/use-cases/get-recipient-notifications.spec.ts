import { inMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository"

import { makeNotification } from "@test/factories/notification-factory";
import { GetRecipientNotifications } from "./get-recipient-notifications";

describe("Count recipients notifications", () => {
    it('should be able to get recipient notification', async () => {
        const notificationsRepository = new inMemoryNotificationRepository
        const getRecipientNotification = new GetRecipientNotifications(notificationsRepository)

        await notificationsRepository.create(makeNotification({
            recipientId: 'recipient-1'
        }))

        await notificationsRepository.create(makeNotification({
            recipientId: 'recipient-1'
        }))

        await notificationsRepository.create(makeNotification({
            recipientId: 'recipient-2'
        }))
        
        const { notifications } = await getRecipientNotification.execute({ // o CancelNotification chama o método create
            recipientId: 'recipient-1',
        });

        expect(notifications).toHaveLength(2)
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId: 'recipient-1'}),
            expect.objectContaining({ recipientId: 'recipient-1'})
        ]))

    });
});