import {Autocomplete, TextField} from "@mui/material";
import {allCountriesMetaData} from "../Data/dataExmples";
import Button from "@mui/material/Button";
import * as React from "react";

type AutoCompleteYearProps={
    countryComponent(name:string):void
    size:number

}
export function AutoCompleteYear(props:AutoCompleteYearProps){
    return(
        <div className='modalAutoComplete'>
            <Autocomplete

                disablePortal
                id="combo-box-demo"
                options={Object.keys(allCountriesMetaData)}
                sx={{
                    width: "calc("+(100-props.size)+"%)" ,
                    marginLeft:"3%"

                }}
                renderInput={(params) => <TextField {...params} label="Country or Region" />}
                onInputChange={(event, value, reason)=>props.countryComponent(allCountriesMetaData[value])}
            />
            <Button sx={{width:'calc('+props.size+'%)',fontSize:'85%'}} variant='contained' className="resetButton" onClick={()=>props.countryComponent('world')}>Reset to World&nbsp;Map</Button>
        </div>)
}
