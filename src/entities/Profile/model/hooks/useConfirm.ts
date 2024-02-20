// import { useCallback } from 'react'
// import { Profile } from '../types/profile'
// import { postProfile } from '../service/postProfile/updateProfile'
// import { useThunkDispatch } from 'shared/lib'

// export const useConfirm = (profile: Profile | undefined) => {
//   const dispatch = useThunkDispatch()

//   return useCallback(() => {
//     return dispatch(postProfile())
//   }, [dispatch])
// }

// return useCallback(() => {
//   if (
//     !profile?.username ||
//     !profile?.age ||
//     !profile?.bio ||
//     !profile?.country ||
//     !profile?.avatar
//   ) {
//     return
//   }

//   return dispatch(
//     setProfile({
//       username: profile.username,
//       age: profile.age,
//       country: profile.country,
//       avatar: profile.avatar,
//       bio: profile.bio
//     })
//   )
// }, [
//   dispatch,
//   profile?.age,
//   profile?.avatar,
//   profile?.bio,
//   profile?.country,
//   profile?.username
// ])
