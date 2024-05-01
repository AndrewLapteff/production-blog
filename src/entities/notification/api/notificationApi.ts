import { rtkApi } from 'shared/api/rtkQuery'
import { Notification } from '../model/types/notification'

interface NotificationsApiProps {
  limit: number
  profileId: number
}

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], NotificationsApiProps>({
      query: ({ limit, profileId }) => ({
        url: 'notifications',
        params: { _limit: limit, _expand: 'profileId', profileId }
      })
    })
  }),
  overrideExisting: false
})

export const useNotifications = notificationsApi.useGetNotificationsQuery
