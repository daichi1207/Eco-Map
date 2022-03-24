import * as React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import '../style/map.css'
import {getKeyByValue} from "../function/getKeyValue";
import {allCountriesMetaData} from "../Data/dataExmples";
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    fontSize:'90%',
    textAlign: 'center',

    color: theme.palette.text.secondary,
    height: 80,
    lineHeight: '30px',
    fontWeight:'bolder',


}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
type AverageBoxType={
    averageData:string
    UnitData:string
    regionData:string
}
export  function AverageBox(props:AverageBoxType) {
    return (
        <div className="AverageBox">


                <ThemeProvider theme={darkTheme}  >
                    <Box
                        sx={{
                            p: 2,
                            borderRadius:'30px',
                            backgroundColor: 'background.default',
                            display: 'grid',

                            gap: 1,
                        }}
                    >
                        <Item key={24} elevation={24}>
                            <div className='AverageBoxContent'>&nbsp;UNIT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{props.UnitData}&nbsp;</div>
                            <div className='AverageBoxContent'>&nbsp;AVERAGE&nbsp;:&nbsp;{props.averageData}&nbsp;</div>
                            <div className='AverageBoxContent'>&nbsp;REGION&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{getKeyByValue(allCountriesMetaData,props.regionData)}&nbsp;</div>
                        </Item>

                    </Box>
                </ThemeProvider>
        </div>

    );
}
