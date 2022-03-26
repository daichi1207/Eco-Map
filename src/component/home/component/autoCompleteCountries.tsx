import * as React from 'react';

import Button from '@mui/material/Button';
import '../style/map.css'

import {Autocomplete} from "@mui/material";
import {TextField} from "@mui/material";



type countriesCompleteProps={
    timeArray:number[]
    yearChange(value:number):void
    defaultYear:number
    size:number
}

export function AutoCompleteCountries(props:countriesCompleteProps){
    return(

        <div className='modalAutoComplete'>
            <Autocomplete

                disablePortal
                id="combo-box-demo"
                options={props.timeArray.map(function(yearLog){ return yearLog.toString()})}
                sx={{
                    width: "calc("+(100-props.size)+"%)" ,
                    marginLeft:"3%"


                }}
                renderInput={(params) => <TextField {...params} label="years" />}
                onInputChange={(event, value, reason)=>props.yearChange(Number(value))}
            />
            <Button sx={{width:'calc('+props.size+'%)',fontSize:'85%'}} variant='contained' className="resetButton" onClick={()=>props.yearChange(props.defaultYear)}>Reset to LatestYear</Button>
        </div>
    )

}
