import { ResortsCardInfo } from '../../types'

export class Requests {
  async getResorts(): Promise<any> {
    let request: Response = await fetch('https://rs-clone-travel.herokuapp.com/resorts').then((i) => i.json()).then((req) => JSON.parse(req))
    let modifedResponse;
    return modifedResponse = await Promise.resolve(request)
  }
}