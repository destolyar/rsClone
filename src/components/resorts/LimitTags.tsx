import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { LimitTagsProps } from '../../types'
import { SyntheticEventData } from 'react-dom/test-utils';

import { useDispatch } from 'react-redux';

export const LimitTags: React.FunctionComponent<LimitTagsProps> = (props) => {  
  let dispatch = useDispatch()

  let items: string[] = props.items
  let modifedItems: {title: string}[] = [];
  
  items.map((i: any) => {
    modifedItems.push({title: i})
  })

  const displayItems = () => {
    
  }

  return (
    <Autocomplete
      onChange={(event, value) => {
        let picked:any = [];
        if(picked !== undefined) {
          value.forEach((i) => {
            picked.push(i.title)
          })
          if(props.type === 'Country'){
            dispatch({type: `ADD_COUNTRY`, country: picked})}
          }
          if(props.type === 'Tags'){
            dispatch({type: `ADD_TAGS`, tags: picked})} 
      }}
      color='primary'
      multiple
      limitTags={2}
      id="size-small-filled-multi"
      size="small"
      style={{ width: 260 }}
      options={modifedItems}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label='' placeholder={props.type}/>
      )}
    />
  );
}
