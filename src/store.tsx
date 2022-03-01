import { createStore } from 'redux'
import { SearchParametrs } from './types'


let searchState: SearchParametrs = {
  country: undefined,
  heigh: undefined,
  slopes: undefined,
  cabel: undefined,
  rating: undefined,
  tags: undefined
}

const defaultSearchState: SearchParametrs = {
  country: undefined,
  heigh: undefined,
  slopes: undefined,
  cabel: undefined,
  rating: undefined,
  tags: undefined
}



const reducer: any = (state = searchState, action: SearchParametrs) => {
  switch (action.type) {
    case "ADD_COUNTRY":
      return {...state, country: action.country }
    case "ADD_TAGS":
      return {...state, tags: action.tags}
    case "ADD_HEIGH": 
      return {...state, heigh: action.heigh}
    case "ADD_SLOPES": 
      return {...state, slopes: state.slopes = action.slopes}
    case "ADD_CABEL": 
      return {...state, cabel: state.cabel = action.cabel}
    case "ADD_RATING": 
      return {...state, rating: state.rating = action.rating}
    case "RESET_STATE":
      return {state: defaultSearchState}
    default: 
      return state
  }
}

export const store = createStore(reducer)