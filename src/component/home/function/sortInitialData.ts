
export function initialSort(objectString: { [key:string]:string }){
    let keyArray=Object.keys(objectString)
    keyArray.sort(function(prev, cons){
        let prevNums=prev.match(/[0-9]+|[a-z]+/g)
        if(prevNums!==null){prevNums.concat(["1","2","3","4"])}else{prevNums=["1","2","3","4"]}
        let consNums=cons.match(/[0-9]+|[a-z]+/g)
        if(consNums!==null){consNums.concat(["1","2","3","4"])}else {consNums=["1","2","3","4"]}

        if (Number(prevNums[0]) > Number(consNums[0])){ return 1
        }else if (Number(prevNums[0]) < Number(consNums[0])){ return -1
        }else{
            if (Number(prevNums[1])!==undefined && Number(consNums[1]!==undefined)){
                if (Number(prevNums[1]) > Number(consNums[1])){ return 1
                }else if (Number(prevNums[1]) < Number(consNums[1])){ return -1}else{
                    if (Number(prevNums[2])!==undefined && Number(consNums[2])!==undefined){
                        if (Number(prevNums[2]) > Number(consNums[2])){ return 1
                        }else if (Number(prevNums[2]) < Number(consNums[2])){ return -1}else{return 0}
                    } else {
                        if (prevNums[2] > consNums[2]){ return 1
                        }else if (prevNums[2] < consNums[2]){ return -1}else{return 0}
                    }
            }}else {
                if (prevNums[1] > consNums[1]){ return 1
                }else if (prevNums[1] < consNums[1]){ return -1}else{
                    if (Number(prevNums[2]!==undefined && consNums[2]!==undefined)){
                        if (Number(prevNums[2]) > Number(consNums[2])){ return 1
                        }else if (Number(prevNums[2]) < Number(consNums[2])){ return -1}else{return 0}
                    } else {
                        if (prevNums[2] > consNums[2]){ return 1
                        }else if (prevNums[2] < consNums[2]){ return -1}else{return 0}}
                }
            }
        }
        return 0;
    });

    return keyArray;
}
