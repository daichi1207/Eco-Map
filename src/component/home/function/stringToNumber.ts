export function StringToNumber(doubleArray:[string,(string|number)][]):[string,(string|number)][] {

    return doubleArray.map(function(dataArray){
        if(Number.isNaN(Number(dataArray[1]))){
            return dataArray
        } else {
            return [dataArray[0],Number(dataArray[1])]
        }
    }
    )

}
