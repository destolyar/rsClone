import { ResortsCardInfo } from '../../types'

export class Response {
  responseObject: ResortsCardInfo[] = [];

  constructor(response: ResortsCardInfo[]) {
    this.responseObject = response;
  }

  getCountry(): string[] {
    let country: string[] = []
    this.responseObject.forEach((i) => {
      if (country.includes(i.country)) {
        ;
      } else {
        country.push(i.country);
      }
    })
    
    return country;
  }

  getTags(): string[] {
    let tags: string[] = []
    this.responseObject.forEach((i) => {
      (i.tag)?.forEach((i) => {
        if(tags.includes(i)) {
          ;
        } else {
          tags.push(i)
        }
      })
    })

    return tags;
  }
  
  getMinMaxHeigh(): number[] {
    let heigh: string[] = []
    let heighSorted: number[] = [];
    this.responseObject.map((i) => {
      if(i.heigh !== null && i.heigh !== undefined) {
        heigh.push(i.heigh)
      }
    })

    heigh.map((i) => {
      heighSorted.push(Number(i.slice(i.indexOf('-') + 2)))
      heighSorted.push(Number(i.slice(0, i.indexOf('-') - 1)))
    })
    
    heighSorted = heighSorted.filter(item => !isNaN(item));

    let min: number = Math.min(...heighSorted)
    let max: number = Math.max(...heighSorted)

    return [min, max];
  }

  getMinMaxSlopes(): number[] {
    let arrOfSlopes: number[] = [];

    this.responseObject.forEach((i) => {
      if(i.slopes.total !== undefined) {
        arrOfSlopes.push(Number(i.slopes.total))
      }
    })

    const min: number = Math.min(...arrOfSlopes)
    const max: number = Math.max(...arrOfSlopes)
    
    return [min, max]
  }

  getMinMaxCabel(): number[] {
    let arrOfCabels: number[] = [];
    
    this.responseObject.forEach((i) => {
      if(i.cabel.total !== undefined) {
        arrOfCabels.push(Number(i.cabel.total))
      }
    })

    const min: number = Math.min(...arrOfCabels)
    const max: number = Math.max(...arrOfCabels)
    
    return [min, max]
  }

  getMinMaxRating(): number[] {
    let arrOfRates: number[] = [];
    
    this.responseObject.forEach((i) => {
      if(i.rate !== undefined) {
        arrOfRates.push(Number(i.rate))
      }
    })

    const min: number = Math.min(...arrOfRates)
    const max: number = Math.max(...arrOfRates)
    
    return [min, max]
  
  }
}
