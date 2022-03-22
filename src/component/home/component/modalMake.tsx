import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { allCountriesMetaData,  SDGStargetNames} from "../Data/dataExmples";
import '../style/map.css'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import {Autocomplete} from "@mui/material";
import {TextField} from "@mui/material";
import {YearSlider} from "./TimeBar";
import {SDGsTargetObject} from "../Data/SDGsTargetData";


const ButtonStyle={
    width:'100%',
    height: '100%',
    color:"white",
    backgroundColor:'#FF6600',
    fontSize:'160%',
    fontWeight:'bolder'

}

type ModalMake={
    clickComponent(e :React.MouseEvent<HTMLButtonElement, MouseEvent>):void,
    countryComponent(name:string):void
    dataSource:string
    timeArray:number[]
    yearChange(value:number):void
    currentStatus:string
    defaultYear:number
    currentYearData:number
    targetName:string
    unit:string


}




export function BasicModal(props:ModalMake) {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper" as "paper" | "body" | undefined);

    const handleClickOpen = (scrollType:"paper" | "body" | undefined) => () => {
        setOpen(true);
        setScroll(scrollType );
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);


    return (
        <div>
            <Button variant='contained' onClick={handleClickOpen("paper")} sx={ButtonStyle}>OPTIONS</Button>

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <Typography variant='h4'>&nbsp;SDGs Map Options</Typography>
                <Typography variant='h6' sx={{marginLeft:2.5}}>Current Data</Typography>
                <Typography sx={{marginLeft:4}}>{props.currentStatus}</Typography>



                <DialogContent dividers={scroll === 'paper'}>
                    <Typography variant='h6' sx={{marginLeft:2}}>Target</Typography>
                    <Typography sx={{marginLeft:4}}>{SDGsTargetObject[props.targetName]}</Typography>
                    <Typography variant='h6' sx={{marginLeft:2}}>Unit</Typography>
                    <Typography sx={{marginLeft:4}}>{props.unit}</Typography>

                    <YearSlider timeArray={props.timeArray} yearChange={props.yearChange} currentYearData={props.currentYearData}/>
                    <Typography variant='h6' sx={{marginLeft:2}}>Select Years</Typography>
                    <div className='modalAutoComplete'>
                        <Autocomplete

                            disablePortal
                            id="combo-box-demo"
                            options={props.timeArray.map(function(yearLog){ return yearLog.toString()})}
                            sx={{
                                width: "80%" ,
                                marginLeft:'3%',

                            }}
                            renderInput={(params) => <TextField {...params} label="years" />}
                            onInputChange={(event, value, reason)=>props.yearChange(Number(value))}
                        />
                        <Button sx={{width:'50%'}} variant='contained' className="resetButton" onClick={()=>props.yearChange(props.defaultYear)}>Reset to latest&nbsp;Year</Button>
                    </div>
                    <Typography variant='h6' sx={{marginLeft:2}}>Select Map Region</Typography>
                    <div className='modalAutoComplete'>
                        <Autocomplete

                            disablePortal
                            id="combo-box-demo"
                            options={Object.keys(allCountriesMetaData)}
                            sx={{
                                width: "80%" ,
                                marginLeft:'3%'
                            }}
                            renderInput={(params) => <TextField {...params} label="Country or Region" />}
                            onInputChange={(event, value, reason)=>props.countryComponent(allCountriesMetaData[value])}
                        />
                        <Button sx={{width:'50%'}} variant='contained' className="resetButton" onClick={()=>props.countryComponent('world')}>Reset to World&nbsp;&nbsp;Map</Button>
                    </div>
                    <Typography id="modal-modal-description" sx={{ mt: 2,marginLeft:2 }} variant="h6">
                        Click SDGs target!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2,marginLeft:2 }} variant="h6">
                        Map Change
                    </Typography>
                    {SDGStargetNames.map((tableTitle)=>
                        <Button sx={{

                            marginLeft:'10%',
                            textAlign: 'left',
                        }} value={tableTitle} key={tableTitle} onClick={(event => props.clickComponent(event))}>{tableTitle}</Button>
                    )}
                    <Typography variant='h6' sx={{marginLeft:2}}>Source of data</Typography>
                    <Typography id="modal-modal-description" sx={{
                        mt: 2,
                        width:'90%',
                        overflowWrap: 'break-word',
                        marginLeft:4
                    }}>
                        © {props.dataSource}
                    </Typography>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
