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
          monthDiffAmount: (Math.random() * 40).toFixed(2),
          liability: !!(Math.random() < 0.5),
          // @ts-expect-error: Unreachable code error
          transactions: computed(() => {
            const transactions: User['finance']['transactions'] = []
            transactions.length = 0
            const transactionCount = Math.floor(Math.random() * 200)
            for (let i = 0; i < transactionCount; i++) {
              transactions.push({
                name: faker.person.fullName(),
                amount: faker.commerce.price(),
                iban: faker.finance.iban(),
                description: faker.commerce.productDescription(),
                liability: !!(Math.random() < 0.5),
                date: faker.date.between({ from: '2023-01-01T00:00:00.000Z', to: '2024-12-30T00:00:00.000Z' }),
                depth: !!(Math.random() < 0.5),
              })
            }
            return transactions
          }),
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
