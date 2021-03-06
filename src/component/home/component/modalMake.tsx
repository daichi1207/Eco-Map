import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import '../style/map.css'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


import {YearSlider} from "./TimeBar";

import {AutoCompleteCountries} from "./autoCompleteCountries";
import {AutoCompleteYear} from "./autoCompleteYear";
import {ShareIcons} from "./shareIcons";
import {initialSort} from "../function/sortInitialData";


const ButtonStyle={
    width:'100%',
    height: '70%',
    color:"white",
    backgroundColor:'#FF6600',
    fontSize:'160%',
    fontWeight:'bolder'


}

type ModalMake={
    dataChangeButton(e :React.MouseEvent<HTMLButtonElement, MouseEvent>):void,
    setRegions(name:string):void
    dataSource:string
    timeArray:number[]
    setCurrentYear(value:number):void
    currentStatus:string
    defaultYear:number
    currentYear:number
    targetName:string
    unit:string
    SDGsTargetObjects:{[key:string]:string}


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
    const componentRef = React.createRef<HTMLElement>();
    const returnTop = () => {
        if (componentRef!==null){componentRef.current?.scrollTo(0,0)};
    };
    const returnBottom = () => {
        if (componentRef!==null){componentRef.current?.scrollTo(0,100000)};
    };
    const returnMiddle = () => {
        if (componentRef!==null){componentRef.current?.scrollTo(0,7000)};
    };




    return (
        <div>
            <Button variant='contained' onClick={handleClickOpen("paper")} sx={ButtonStyle}>OPTIONS</Button>
            <ShareIcons left="10" top="3" width="85%"/>
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
                <ShareIcons left="50" top="0" width="45%"/>



                <DialogContent dividers={scroll === 'paper'} ref={componentRef}>
                    <Typography variant='h6' sx={{marginLeft:2}}>Target</Typography>
                    <Typography sx={{marginLeft:4}}>{props.SDGsTargetObjects[props.targetName]}</Typography>
                    <Typography variant='h6' sx={{marginLeft:2}}>Unit</Typography>
                    <Typography sx={{marginLeft:4}}>{props.unit}</Typography>

                    <YearSlider timeArray={props.timeArray} setCurrentYear={props.setCurrentYear} currentYear={props.currentYear}/>
                    <Typography variant='h6' sx={{marginLeft:2}}>Select Years</Typography>
                    <AutoCompleteCountries size={33} timeArray={props.timeArray} setCurrentYear={props.setCurrentYear} defaultYear={props.defaultYear}/>

                    <Typography variant='h6' sx={{marginLeft:2}}>Select Map Region</Typography>
                    <AutoCompleteYear size={33} setRegions={props.setRegions}/>
                    <Typography id="modal-modal-description" sx={{ mt: 2,marginLeft:2 }} variant="h6">
                        Click SDGs target!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2,marginLeft:2 }} variant="h6">
                        Map Change
                    </Typography>
                    {initialSort(props.SDGsTargetObjects).map((tableTitle)=>
                        <Button sx={{

                            marginLeft:'10%',
                            textAlign: 'left',
                        }} value={tableTitle} key={tableTitle} onClick={(event => props.dataChangeButton(event))}>{tableTitle}</Button>
                    )}
                    <Typography variant='h6' sx={{marginLeft:2}}>Source of data</Typography>
                    <Typography id="modal-modal-description" sx={{
                        mt: 2,
                        width:'90%',
                        overflowWrap: 'break-word',
                        marginLeft:4
                    }}>
                        ?? {props.dataSource}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={returnTop}>Top</Button>
                    <Button onClick={returnMiddle}>Middle</Button>
                    <Button onClick={returnBottom}>Bottom</Button>

                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
