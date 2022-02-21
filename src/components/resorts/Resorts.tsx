import { ResortsCard } from './ResortsCard';
import '../../styles/components/resorts.scss';
import { Response } from '../utils/Response';
import { Requests } from '../utils/Requests'
import { LimitTags } from './LimitTags';
import { RangeSlider } from './RangeSlider';
import { useSelector } from 'react-redux';
import { ResortsCardInfo, SearchParametrs } from '../../types';
import { normalizeHeigh } from '../utils/normalize';
import { useState } from 'react';

import data from './resorts_list.json'

export const Resorts: React.FunctionComponent = () => {
  //let requests = new Requests();
  //let data: any = requests.getResorts()
  let response = new Response(data);

  const defaultState = {
    country: response.getCountry(),
    heigh: response.getMinMaxHeigh(),
    slopes: response.getMinMaxSlopes(),
    cabel: response.getMinMaxCabel(),
    rating: response.getMinMaxRating(),
    tags: response.getTags()
  }

  let SearchParametrs: SearchParametrs | any = useSelector(state => state)
  let [numCardsForDisplay, setNumCardsForDisplay] = useState<number>(10)
  let [loadButtonDisplay, setLoadButtonDisplay] = useState<{display: string}>({display: 'flex'})

  let displayData: ResortsCardInfo[] = data;

  if(SearchParametrs?.country !== undefined || 
    SearchParametrs?.heigh !== undefined ||
    SearchParametrs?.slopes !== undefined || 
    SearchParametrs?.cabel !== undefined || 
    SearchParametrs?.rating !== undefined ||
    SearchParametrs?.tags !== undefined) {

      if(SearchParametrs.country !== undefined) {
        displayData = displayData.filter((i) => SearchParametrs.country.includes(i.country))
      }

      if(SearchParametrs.heigh !== undefined) {
        displayData = displayData.filter((i) => normalizeHeigh(i.heigh, SearchParametrs.heigh))
      }

      if(SearchParametrs.slopes !== undefined) {
        displayData = displayData.filter((i) => i.slopes.total !== null && 
        i.slopes.total >= SearchParametrs.slopes[0] && 
        i.slopes.total <= SearchParametrs.slopes[1])
      }

      if(SearchParametrs.cabel !== undefined) {
        displayData = displayData.filter((i) => i.cabel.total !== null &&
        i.cabel.total >= SearchParametrs.cabel[0] &&
        i.cabel.total <= SearchParametrs.cabel[1])
      }

      if(SearchParametrs.rating !== undefined) {
        displayData = displayData.filter((i) => i.rate !== null &&
        i.rate >= SearchParametrs.rating[0] &&
        i.rate <= SearchParametrs.rating[1])
      }
      
      if(SearchParametrs.tags !== undefined) {
        displayData = displayData.filter((i) => SearchParametrs.tags !== null && 
        SearchParametrs.tags.includes('winter' || 'snowboard' || 'ski' || 'active'))
      }
  }

  let filtredData: ResortsCardInfo[] = [];
  for(let i = 0; i < numCardsForDisplay; i++) {
    if(displayData[i] === undefined){
      break
    }
    filtredData.push(displayData[i])
  }


  return(
    <div className='resorts container'>
      <div className='resorts__filters'>
        <LimitTags items={defaultState.country} type = 'Country'/>
        <RangeSlider range={defaultState.heigh} type='Heigh'/>
        <RangeSlider range={defaultState.slopes} type='Slopes'/>
        <RangeSlider range={defaultState.cabel} type='Cabel'/>
        <RangeSlider range={defaultState.rating} type='Rating'/>
        <LimitTags items={defaultState.tags} type = 'Tags'/>

        <div className='resorts__filters__controls'>
          <a href='' className='resorts__filters__controls__reset'>Сбросить фильтры</a>n
        </div>
        
      </div>
      <div className='resorts__results'>
        {filtredData?.map((i: ResortsCardInfo) => {
          return <ResortsCard 
          name={i.name} 
          country={i.country} 
          heigh={i.heigh} 
          slopes={i.slopes} 
          cabel={i.cabel} 
          rate={i.rate} 
          img={i.img} 
          tag={i.tag}
          key={`resort${i.id}`}/>
        })}
      </div>
      <div style={loadButtonDisplay} onClick={() => {setNumCardsForDisplay(numCardsForDisplay += 10)}} className='resorts__load-more-cards'>
        <h1 className='resorts__load-more-cards__title'>Загрузить ещё 10</h1>
      </div>
    </div>
  )
}
