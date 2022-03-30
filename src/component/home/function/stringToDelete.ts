export function StringToDelete(doubleArray:[string,(string|number)][]):[string,(string|number)][] {
    return doubleArray.filter(dataArray=>{
        if(dataArray[0]=="Country"){

            return dataArray

        }else if(Number.isNaN(Number(dataArray[1]))){

        } else {

            return [dataArray[0],Number(dataArray[1])]
        }
    }
    )

}
