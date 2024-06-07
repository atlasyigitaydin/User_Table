import { faker } from '@faker-js/faker'
import type { User } from '~/core/types'

export const useUsersStore = defineStore('Users', () => {
  const users
   = ref<User[]>([])
  const statuses: User['status'][] = ['Online', 'Sleep', 'Offline', 'Busy']
  const getRandomStatus = (): User['status'] => {
    return statuses[Math.floor(Math.random() * statuses.length)]
  }

  const selectedUser = ref<User>()

  const setUsers = async () => {
    for (let i = 0; i < 100; i++) {
      users.value.push({
        fullName: faker.person.fullName(),
        avatar: {
          large: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`,
          medium: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`,
          thumbnail: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`,
        },
        status: getRandomStatus(),
      })
    }
    selectedUser.value = users.value[0]
  }

  return {
    users,
    selectedUser,
    setUsers,
  }
})
