import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

import { RangeSliderProps } from '../../types';
import { useDispatch } from 'react-redux';

export const RangeSlider: React.FunctionComponent<RangeSliderProps> = (props) => {
  const dispatch = useDispatch()

  let minValue: number, maxValue: number, step: number;

  minValue = props.range[0];
  maxValue = props.range[1];
  step = 1;

  if(props.type === 'Rating') {
    step = 0.1;
  }

  let [value, setValue] = React.useState<number[]>([minValue, maxValue]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    if(props.type === 'Heigh') {
      dispatch({type: "ADD_HEIGH", heigh: newValue})
    } else if (props.type === 'Slopes') {
      dispatch({type: "ADD_SLOPES", slopes: newValue})
    } else if (props.type === 'Cabel') {
      dispatch({type: "ADD_CABEL", cabel: newValue})
    } else if (props.type === 'Rating') {
      dispatch({type: "ADD_RATING", rating: newValue})
    }
  };

  return (
    <Box sx={{ width: 230 }}>
      <Typography color='white'>
        {props.type}
      </Typography>
      <Slider
        getAriaLabel={() => `${props.type}`}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={minValue}
        max={maxValue}
        step={step}
      />
    </Box>
  );
}