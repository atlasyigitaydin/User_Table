import { faker } from '@faker-js/faker'
import { uuid } from 'vue-uuid'
import type { User } from '~/core/types'

export const useUsersStore = defineStore('Users', () => {
  const users
   = ref<User[]>([])
  const statuses: User['social']['status'][] = ['Online', 'Sleep', 'Offline', 'Busy']
  const getRandomStatus = (): User['social']['status'] => {
    return statuses[Math.floor(Math.random() * statuses.length)]
  }

  const selectedUser = ref<User>()

  const setUsers = async () => {
    for (let i = 0; i < 100; i++) {
      const _name = faker.person.fullName()
      users.value.push({
        id: uuid.v1(),
        fullName: _name,
        email: faker.internet.email(),
        vip: Math.floor(Math.random() * 5) === 3,
        avatar: {
          large: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`,
          medium: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`,
          thumbnail: `https://randomuser.me/api/portraits/thumb/men/${i}.jpg`,
        },
        social: {
          status: getRandomStatus(),
        },
        finance: {
          creditCard: {
            name: _name,
            no: faker.finance.creditCardNumber(),
            cvv: faker.finance.creditCardCVV(),
            date: `${Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0')}/2${Math.floor(Math.random() * 10)}`,
            issuer: faker.finance.creditCardIssuer(),
            img: Math.floor(Math.random() * 4),
          },
          amount: faker.finance.amount(),
          currency: faker.finance.currency(),
          iban: faker.finance.iban(),
        },
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
