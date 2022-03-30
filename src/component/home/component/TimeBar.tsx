import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {styled} from "@mui/material/styles";



const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 15,
        background: 'unset',
        padding: 0,
        width: 70,
        height: 70,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -70%) rotate(-45deg) scale(0.7)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -70%) rotate(-405deg) scale(1.5)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

function valuetext(value:number) {
    return `${value}year`;
}

function valueLabelFormat(value:number) {
    return `${value}`;
}
type timeBarProps={
    timeArray:number[]
    setCurrentYear(value:number):void
    currentYear:number


}
export  function YearSlider(props:timeBarProps) {
    return (
        <Box sx={{
            width:'80%',
            marginLeft:'10%',
        }}>
            <PrettoSlider
                aria-label="Restricted values"
                defaultValue={2027}
                valueLabelFormat={valuetext}
                getAriaValueText={valueLabelFormat}
                value={props.currentYear}
                step={null}
                valueLabelDisplay="auto"
                marks={props.timeArray.map(function(value){return {'value':value}})}
                max={props.timeArray.reduce(function (a, b) {return Math.max(a, b);})}
                min={props.timeArray.reduce(function (a, b) {return Math.min(a, b);})}
                onChange={(event,value )=>props.setCurrentYear(value as number)}
            />
        </Box>
    );
}
