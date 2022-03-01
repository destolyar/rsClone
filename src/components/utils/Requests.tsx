export class Requests {
  static async getResorts(): Promise<any> {
    let request: Response = await fetch('https://rs-clone-travel.herokuapp.com/resorts').then((i) => i.json())
    .then((req) => JSON.parse(req))

    return await Promise.resolve(request)
  }

  static async getTrips(): Promise<any> {
    let request: Response = await fetch('https://rs-clone-travel.herokuapp.com/trips').then((i) => i.json())
    .then((req) => JSON.parse(req))
    return await Promise.resolve(request)
  }

  static async userRegistration(login: string, email: string, password: string) {
    await fetch('https://rs-clone-travel.herokuapp.com/user', {
      headers: {
        'Content-type':'application/json'
      },
      method: "PUT",
      body: JSON.stringify({
        login: login,
        email: email,
        pwd: password
      })
    })
  }

  static async userLogin(login: string, password: string) {
    let request: Response = await fetch('https://rs-clone-travel.herokuapp.com/user', {
      headers: {
        'Content-type':'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        login: login,
        pwd: password
      })
    }).then((i) => i.json()).then((req) => JSON.parse(req))
    return await Promise.resolve(request)
  }

  static async getAllUsers() {
    let request: Response = await fetch('https://rs-clone-travel.herokuapp.com/user')
    .then((i) => i.json()).then((req) => JSON.parse(req))
    return await Promise.resolve(request)
  }
}