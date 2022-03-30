import "./style/map.css"
import React, {ReactNode, Ref,  useEffect, useState} from "react";
import Chart from "react-google-charts";
import {collection,  getDocs, query,where,documentId} from "firebase/firestore";
import {data1,  data1_re,SDGsInitialObject} from "./Data/dataExmples";
import {db} from "./firebase/firebaseCongig";
import {areaChartOptions, barChartOption, geoChartOptions, pieChartOption} from "./component/chartOptions";

import {swap} from "./function/sortData";

import {BasicModal} from "./component/modalMake";

import {AverageBox} from "./component/AverageBox";
import {getAverage} from "./function/averageData";
import {


    StyledOption,
    StyledButton,
    StyledListbox,
    StyledPopper
} from "./component/listBoxIndicators";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import {YearSlider} from "./component/TimeBar";
import {RowAndColumnSpacing} from "./component/TimeBarLegend";
import {SDGsTable} from "./component/SDGsTable";

import {AutoCompleteCountries} from "./component/autoCompleteCountries";
import {AutoCompleteYear} from "./component/autoCompleteYear";

import {StringToNumber} from "./function/stringToNumber";
import {StringToDelete} from "./function/stringToDelete";
import {initialSort} from "./function/sortInitialData";





interface dragon{ [key:string]: {[key:number]:{'Data':{[key:string]:(string|number)} },'Unit':string,'Source':string}; }

export function Map(){
    useEffect(()=>{
        metaDataGet("indicators")

    },[])
    useEffect(()=>{
        let firstDataTitle="1.1.1 Proportion of population below international poverty line (%)"
        takeSnapshot(firstDataTitle.substring(0,2),firstDataTitle)
        setListBoxValue("1.1.1 Proportion of population below international poverty line (%)")
    },[])



    const [dataset,setDataset]=useState(data1)

    const [regions,setRegions]=useState("world")
    const [documentCache,setDocCache]=useState({"1.1.1 Proportion of population below international poverty line (%)":{2019:{'Data':data1_re,'Unit':'person','Source':'Google'},'Unit':'person','Source':'Google'}} as dragon)

    const [unit,setUnit]=useState("cm")
    const [averageArray,setAverageArray]=useState(100)
    const [listBoxValue,setListBoxValue]=useState("first")
    const [sourceOfData,setSourceOfData]=useState('google')
    const [dataYears,setDataYears]=useState([2019])
    const [currentYear,setCurrentYear]=useState(2019)
    const [targetName,setTargetName]=useState("1.1.1 Proportion of population below international poverty line (%)")
    const [yearByData,setYearByData]=useState(data1)
    const [SDGsTargetObject,setSDGsTargetObject]=useState(SDGsInitialObject as {[key:string]:string})


    const [docNowName,setDocNowName]=useState("google")
    geoChartOptions.region=regions




    const metaDataGet=(initiateText:string)=>{
        const metaData = getDocs(query(collection(db, "metadata"), where(documentId(), "==", initiateText)))
        metaData.then((querySnapshot) => {
            querySnapshot.docs
                .forEach((doc) => {
                    if (doc.id == "indicators") {

                        setSDGsTargetObject(doc.data())

                    }
                });
        });
    }





    const takeSnapshot=(documentName:string,tableName:string)=>{
        documentName=documentName.replace("\.","")
        setTargetName(tableName)
        if(documentName !=docNowName) {

            const snapshot = getDocs(query(collection(db, "SDGs"), where(documentId(), "==", documentName)))
            snapshot.then((querySnapshot) => {
                querySnapshot.docs
                    .forEach((doc) => {

                        if (doc.id == documentName) {


                            let yearsCacheData=Object.keys(doc.data()[tableName]).map(function(yearLog){ return Number(yearLog)})
                            yearsCacheData=yearsCacheData.filter(Boolean)
                            setDataYears(yearsCacheData)

                            let currentYearCache=yearsCacheData.reduce(function (a, b) {return Math.max(a, b);})
                            setCurrentYear(currentYearCache)



                            let unitCache=doc.data()[tableName]['Unit']
                            setUnit(unitCache)
                            setSourceOfData(doc.data()[tableName]['Source'])

                            let currentYearDataCache=doc.data()[tableName][currentYearCache]['Data']



                            let sortValue=[...StringToDelete(StringToNumber(Object.entries(currentYearDataCache)))]

                            let yearByDataCache=[["Country",unitCache+" "+"BY YEAR"]] as [string,(string|number)][]
                            for(let oneYearData of yearsCacheData){yearByDataCache.push(
                                [oneYearData.toString(),getAverage(StringToNumber(Object.entries(doc.data()[tableName][oneYearData]['Data'])))])
                            }

                            setYearByData(yearByDataCache)

                            let newSortValue=swap(sortValue)
                            setAverageArray(getAverage(sortValue))


                            setDataset(newSortValue)
                            setDocCache(doc.data())
                            setDocNowName(doc.id)




                        }
                    });
            });
        }else{

            let yearsCacheData=Object.keys(documentCache[tableName]).map(function(yearLog){return Number(yearLog)})
            yearsCacheData=yearsCacheData.filter(Boolean)
            setDataYears(yearsCacheData)
            let currentYearCache=yearsCacheData.reduce(function (a, b) {return Math.max(a, b);})
            setCurrentYear(currentYearCache)
            let unitCache=documentCache[tableName]['Unit']

            setUnit(unitCache)
            setSourceOfData(documentCache[tableName]['Source'])
            let sortValue=[...StringToNumber(Object.entries(documentCache[tableName][currentYearCache]['Data']))]

            let yearByDataCache=[["Country",unitCache]] as [string,(string|number)][]
            for(let oneYearData of yearsCacheData){yearByDataCache.push(
                [oneYearData.toString(),getAverage(StringToNumber(Object.entries(documentCache[tableName][oneYearData]['Data'])))])
            }


            setYearByData(yearByDataCache)

            setAverageArray(getAverage(sortValue))
            let newSortValue=swap(StringToDelete(sortValue))
            setDataset(newSortValue)

        }


    }



    const dataChangeMaterialUI =(value:{} | null) => {
        if(value!=null){
            const changeData=value.toString() as string
            setListBoxValue(changeData)
            switch(value) {
                case "first":
                    setDataset(data1);
                    setAverageArray(getAverage(data1));

                    break;

                default:
                    const changeData=value.toString() as string
                    setListBoxValue(changeData)

                    takeSnapshot(changeData.substring(0,2),changeData)

            }

        }}

    const dataChangeButton =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        switch(e.currentTarget.value) {
            case "first":
                setDataset(swap(data1));setAverageArray(getAverage(data1));break;
            default:
                const changeData=e.currentTarget.value.toString() as string
                setListBoxValue(changeData)

                takeSnapshot(changeData.substring(0,2),changeData)



        }

    }

    const CustomSelect = React.forwardRef(function CustomSelect(props:{ [key:string]: ReactNode; components: { [key:string]:ReactNode}}, ref:Ref<HTMLElement> | undefined) {
        const components = {
            Root: StyledButton,
            Listbox: StyledListbox,
            Popper: StyledPopper,


            ...props.components,

        };


        return <SelectUnstyled {...props} ref={ref} components={components} onChange={(value )=>dataChangeMaterialUI(value)} />;
    });

    const yearChangeProgress=(yearInput:number|number[])=>{
        if (!Array.isArray(yearInput) && dataYears.includes(yearInput) ){
            setCurrentYear(yearInput)

            let sortValue=[...Object.entries(documentCache[targetName][yearInput]['Data'])]
            let newSortValue=swap(StringToDelete(StringToNumber(sortValue) ))

            setAverageArray(getAverage(StringToDelete(StringToNumber(sortValue))))


            setDataset(newSortValue)


        }
    }
    useEffect(() => {

        const timer = setTimeout(() => {
            yearChangeProgress(currentYear);
        },80);


        return () => {
            clearTimeout(timer);
        };


    }, [currentYear]);






    return (
        <div className="App">



            <div className="topTable">
                <CustomSelect className="change_table"   value={listBoxValue}>
                    {initialSort(SDGsTargetObject).map((tableTitle)=>
                        <StyledOption value={tableTitle} key={tableTitle}>{tableTitle}</StyledOption>
                    )}
                </CustomSelect>
                <BasicModal
                    dataChangeButton={dataChangeButton}
                    setRegions={setRegions}
                    dataSource={sourceOfData}
                    timeArray={dataYears}
                    setCurrentYear={setCurrentYear}
                    currentStatus={currentYear+" "+targetName}
                    targetName={targetName}
                    defaultYear={dataYears.reduce(function (a, b) {return Math.max(a, b);})}
                    currentYear={currentYear}
                    unit={unit}
                    SDGsTargetObjects={SDGsTargetObject}

                />
            </div>




            <div className='topTable2'>

                    <AutoCompleteCountries size={48} timeArray={dataYears} setCurrentYear={setCurrentYear} defaultYear={dataYears.reduce(function (a, b) {return Math.max(a, b);})}/>
                    <AutoCompleteYear size={48} setRegions={setRegions}/>

            </div>



            <div className="geochartParent">
                <AverageBox  regionData={regions} averageData={averageArray.toString()} UnitData={unit}/>
                <Chart className="geoChart" chartType="GeoChart" width="98%" height="420px" data={dataset} options={geoChartOptions}  />
            </div>

            <div className="regionButtonParent">

                <button className="regionButton" onClick={()=>setRegions("world")}>World</button>
                <button className="regionButton" onClick={()=>setRegions("002")}>Africa</button>
                <button className="regionButton" onClick={()=>setRegions("150")}>Europe</button>
                <button className="regionButton" onClick={()=>setRegions("021")}>North America</button>
                <button className="regionButton" onClick={()=>setRegions("005")}>South America</button>
                <button className="regionButton" onClick={()=>setRegions("142")}>Asia</button>
                <button className="regionButton" onClick={()=>setRegions("009")}>Oceania</button>


            </div>
            <RowAndColumnSpacing/>
            <YearSlider timeArray={dataYears} setCurrentYear={setCurrentYear} currentYear={currentYear}/>
            <div className="BarChartHead2">Data Change Progress</div>
            <Chart chartType='AreaChart' data={yearByData.map(function(yearByData1){if(yearByData1[0]!='Country' ){return [Number(yearByData1[0]),yearByData1[1]]}else{return yearByData1}})} options={areaChartOptions(listBoxValue)}/>

            <div className="chartGrandParent">
                <div className="chartParent2">
                    <div className="BarChartHead">Pie Chart of Countries</div>
                    <Chart className="pieChartClass" chartType="PieChart" data={dataset} width="100%" height="300px" options={pieChartOption}/>

                </div>
                <div className="chartParent2">
                    <div className="BarChartHead">Top 10 Countries</div>
                    <Chart chartType="BarChart" data={dataset.slice(0,11) } options={barChartOption} width="100%" height="300px"/>
                </div>
                <div className="chartParent2">
                    <div className="BarChartHead">Table of All Countries</div>
                    <SDGsTable dataset={dataset} unit={unit}/>

                </div>


            </div>
            <RowAndColumnSpacing/>
            <YearSlider timeArray={dataYears} setCurrentYear={setCurrentYear} currentYear={currentYear}/>
            <div>&nbsp;</div>


        </div>
    );

}



