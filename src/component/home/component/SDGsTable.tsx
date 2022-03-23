import * as React from 'react';
import {
    DataGrid,
    GridToolbar,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import Box from '@mui/material/Box';

function CustomToolbar() {
    return (
        <GridToolbarContainer>

            <GridToolbarFilterButton />

            <GridToolbarExport />
        </GridToolbarContainer>
    );
}

type tableProps={
    dataset:[string, (string | number)][]
}
export function SDGsTable(props:tableProps){
    return(
        <Box sx={{
            height: 300,
            width: '100%',
            fontWeight: 'bold',

            '& .super-app-theme--header': {


                fontWeight: 'bold',

            },
        }}>
            <DataGrid
                sx={{
                    fontWeight: 'bold',
                    '& .MuiDataGrid-columnHeaders':{

                        backgroundColor:'green'
                    }

                }

                }
                pageSize={3}
                components={{
                    Toolbar: CustomToolbar,
                }}

                columns={[
                    { field: 'col1', headerName: props.dataset[0][0], width: 100 ,headerClassName: 'super-app-theme--header',},
                    { field: 'col2', headerName: "Value" as string,width: 100 ,headerClassName: 'super-app-theme--header',hideable:false},
                ]}
                rows={props.dataset.map(function(value,index){

                    if(index!=0 ){

                        let inputColumn2=Number(value[1])

                        if(typeof inputColumn2==='number') {

                            return {id: index, col1: value[0], col2: inputColumn2}
                        }
                    }
                }).filter(Boolean) as { id: number; col1: string; col2: number; }[]}
            />
        </Box>


    )
}
