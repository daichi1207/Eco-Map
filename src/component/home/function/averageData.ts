
export function getAverage(defaultArray:[string,(string|number)][]){
    let total=defaultArray.reduce(function(sum,element){
    if(typeof element[1]==="number"){return sum + element[1]}
    else {return sum}},0)
    return Math.round((total/(defaultArray.length-1)*10))/10
}
