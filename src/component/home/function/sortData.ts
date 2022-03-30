

export function swap(doubleArray:[string,(string|number)][]){
    let firstArrayIndex=0
    let columnArrayIndex=0
    for(let indexA=0; indexA <doubleArray.length;indexA++){
        if(doubleArray[indexA][0]=="Country"){
            columnArrayIndex=indexA
            break
        }
    }
    doubleArray[firstArrayIndex]=[doubleArray[columnArrayIndex],doubleArray[columnArrayIndex]=doubleArray[firstArrayIndex]][0];

    doubleArray.sort(function(prev, cons){
        if (prev[1] > cons[1]) return -1;
        if (prev[1] < cons[1]) return 1;
        return 0;
    });

    return doubleArray;
}

