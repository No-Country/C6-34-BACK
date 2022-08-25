import data from './places'
import dataUser from './users'

class Database {
  constructor() {}

  // Places

  async getAllPlaces(): Promise<TPlace[]> {
    const asArray = Object.values(data)
    await randomDelay()
    return asArray
  }

  async getPlaceById(id: string): Promise<TPlace | null> {
    if (!Object.prototype.hasOwnProperty.call(data, id)) {
      return null
    }

    const entry = data[id]
    await randomDelay()
    return entry
  }


  // Users
  
  async getAllUsers(): Promise<TUser[]> {
    const asArray = Object.values(dataUser)
    await randomDelay()
    return asArray
  }

  async getUserById(id: string): Promise<TPlace | null> {
    if (!Object.prototype.hasOwnProperty.call(dataUser, id)) {
      return null
    }

    const entry = dataUser[id]
    await randomDelay()
    return entry
  }


}

// Let's also add a delay to make it a bit closer to reality
const randomDelay = () =>
  new Promise((resolve) => {
    const max = 350
    const min = 100
    const delay = Math.floor(Math.random() * (max - min + 1)) + min

    setTimeout(resolve, delay)
  })

export default Database