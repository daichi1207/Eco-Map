export const geoChartOptions = {
    region:"world",
    sizeAxis: { minSize: 100, maxSize: 100 },


    colorAxis: {colors: ["blue","green","yellow","red"]},
    legend:{position:'bottom',textStyle: {color: 'black', fontSize: 0}},
    tooltip:{textStyle: {fontSize: 17,bold:true}, showColorCode: true,zIndex:30},

    backgroundColor: '#81d4fa',
    datalessRegionColor: 'white',
    defaultColor: '#f5f5f5',
    magnifyingGlass: {enable: true, zoomFactor: 7.5}

};

export const areaChartOptions=(titleName:string)=>{

    return {
        annotations: {
            boxStyle: {
                // Color of the box outline.
                stroke: '#888',
                // Thickness of the box outline.
                strokeWidth: 1,
                // x-radius of the corner curvature.
                rx: 10,
                // y-radius of the corner curvature.
                ry: 10,
                // Attributes for linear gradient fill.
                gradient: {
                    // Start color for gradient.
                    color1: '#fbf6a7',
                    // Finish color for gradient.
                    color2: '#33b679',
                    // Where on the boundary to start and
                    // end the color1/color2 gradient,
                    // relative to the upper left corner
                    // of the boundary.
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%',
                    // If true, the boundary for x1,
                    // y1, x2, and y2 is the box. If
                    // false, it's the entire chart.
                    useObjectBoundingBoxUnits: true
                }
            }
        },

        chartArea:{backgroundColor:'grey'},
        colors:['red'],
        areaOpacity:0.2,
        animation:{easing:'linear',duration:700,startup:true},
        pointSize:10,
        pointShape: 'diamond',
        legend:{position:'bottom'},
        title:titleName,
        hAxis:{gridlines:{minSpacing:50}},
        tooltip:{textStyle: {fontSize: 17,bold:true}, showColorCode: true},

}}

export const pieChartOption={
    chartArea:{left:"0%",right:"0%",top:20,width:'60%',height:'80%'},
    fontSize:12,
    tooltip:{textStyle: {fontSize: 15,bold:true}, showColorCode: true},

    legend:{position: 'bottom', maxLines:2,textStyle: {color: 'blue', fontSize: 11}}
}
export const barChartOption={
    colors:["green"],
    fontSize:12,
    chartArea: {width:'100%',left:'20%',height: '80%'},
    legend:{position: 'bottom'},
    tooltip:{textStyle:{fontSize:15}, showColorCode: true}
}
