import "./style/map.css"
import React, {ReactNode, Ref, useCallback, useEffect, useState} from "react";
import Chart from "react-google-charts";
import {collection,  getDocs, query,where,documentId} from "firebase/firestore";
import {data1,  SDGStargetNames, data1_re} from "./Data/dataExmples";
import {db} from "./firebase/firebaseCongig";
import {areaChartOptions, barChartOption, options, pieChartOption, tableOption} from "./component/chartOptions";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


import { enableIndexedDbPersistence } from "firebase/firestore";
import {swap} from "./function/sortData";

import {BasicModal} from "./component/modalMake";

import {AverageBox} from "./component/AverageBox";
import {getAverage} from "./function/averageData";
import {


    StyledOption,
    StyledButton,
    StyledListbox,
    StyledPopper
} from "./component/listBoxSample";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import {YearSlider} from "./component/TimeBar";
import {RowAndColumnSpacing} from "./component/TimeBarLegend";
import {SDGsTable} from "./component/SDGsTable";
import {SDGsTargetObject} from "./Data/SDGsTargetData";

enableIndexedDbPersistence(db)
    .catch((err) => {
        if (err.code == 'failed-precondition') {

        } else if (err.code == 'unimplemented') {

        }
    });



interface dragon{ [key:string]: {[key:number]:{'Data':{[key:string]:(string|number)} },'Unit':string,'Source':string}; }

export function Map(){
    useEffect(()=>{
        let firstDataTitle="1.1.1 Proportion of population below international poverty line (%)"
        takeSnapshot(firstDataTitle.charAt(0),firstDataTitle)
        setListBoxValue("1.1.1 Proportion of population below international poverty line (%)")
    },[])


    const [dataset,setDataset]=useState(data1)

    const [regions,setRegions]=useState("world")
    const [documentCache,setDocCache]=useState({"data1":{2021:{'Data':data1_re,'Unit':'person','Source':'Google'},'Unit':'person','Source':'Google'}} as dragon)
    const [red,setRed]=useState("50")
    const [green,setGreen]=useState("50")
    const [blue,setBlue]=useState("50")
    const [unit,setUnit]=useState("cm")
    const [averageArray,setAverageArray]=useState(100)
    const [listBoxValue,setListBoxValue]=useState("first")
    const [sourceOfData,setSourceOfData]=useState('google')
    const [dataYears,setDataYears]=useState([2021])
    const [currentYear,setCurrentYear]=useState(2021)
    const [targetName,setTargetName]=useState("google")
    const [yearByData,setYearByData]=useState(data1)


    const [docNowName,setDocNowName]=useState("google")
    options.region=regions
    barChartOption.colors[0]='rgb('+red+','+green+','+blue+')'









    const takeSnapshot=(documentName:string,tableName:string)=>{
        setTargetName(tableName)
        if(documentName !=docNowName) {

            const snapshot = getDocs(query(collection(db, "sdgs"), where(documentId(), "==", documentName)))
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


                            let sortValue=[...Object.entries(doc.data()[tableName][currentYearCache]['Data'])]

                            let yearByDataCache=[["Country",unitCache+" "+"BY YEAR"]] as [string,(string|number)][]
                            for(let oneYearData of yearsCacheData){yearByDataCache.push(
                                [oneYearData.toString(),getAverage(Object.entries(doc.data()[tableName][oneYearData]['Data']))])
                            }

                            setYearByData(yearByDataCache)


                            setAverageArray(getAverage(Object.entries(doc.data()[tableName][currentYearCache]['Data'])))
                            let newSortValue=swap(sortValue as [string, (string|number)][])

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
            let sortValue=[...Object.entries(documentCache[tableName][currentYearCache]['Data'])]
            let newSortValue=swap(sortValue )
            let yearByDataCache=[["Country",unitCache]] as [string,(string|number)][]
            for(let oneYearData of yearsCacheData){yearByDataCache.push(
                [oneYearData.toString(),getAverage(Object.entries(documentCache[tableName][oneYearData]['Data']))])
            }


            setYearByData(yearByDataCache)

            setAverageArray(getAverage(sortValue))

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

                    takeSnapshot(changeData.charAt(0),changeData)

            }

        }}

    const dataChangeButton =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        switch(e.currentTarget.value) {
            case "first":
                setDataset(swap(data1));setAverageArray(getAverage(data1));break;
            default:
                const changeData=e.currentTarget.value.toString() as string
                setListBoxValue(changeData)

                takeSnapshot(changeData.charAt(0),changeData)
                console.log(SDGsTargetObject['1.2.1　Proportion of population living below the national poverty line (%)'],targetName)


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
        if (!Array.isArray(yearInput)){
            setCurrentYear(yearInput)
            let sortValue=[...Object.entries(documentCache[targetName][yearInput]['Data'])]
            let newSortValue=swap(sortValue )

            setAverageArray(getAverage(sortValue))

            setDataset(newSortValue)
        }
    }
    useEffect(() => {
        // delay 後 debounce の対象 state をアップデート
        const timer = setTimeout(() => {
            yearChangeProgress(currentYear);
        },80);

        // 次の effect が実行される直前に timer キャンセル
        return () => {
            clearTimeout(timer);
        };

        // value、delay がアップデートするたびに effect 実行
    }, [currentYear]);






    return (
        <div className="App">



            <div className="topTable">
                <CustomSelect className="change_table"   value={listBoxValue}>
                    {SDGStargetNames.map((tableTitle)=>
                        <StyledOption value={tableTitle} key={tableTitle}>{tableTitle}</StyledOption>
                    )}
                </CustomSelect>
                <BasicModal
                    clickComponent={dataChangeButton}
                    countryComponent={setRegions}
                    dataSource={sourceOfData}
                    timeArray={dataYears}
                    yearChange={setCurrentYear}
                    currentStatus={currentYear+" "+targetName}
                    targetName={targetName}
                    defaultYear={dataYears.reduce(function (a, b) {return Math.max(a, b);})}
                    currentYearData={currentYear}
                    unit={unit}

                />
            </div>
            <AverageBox  averageData={averageArray.toString()} UnitData={unit}/>




            <Chart chartType="GeoChart" width="100%" height="420px" data={dataset} options={options} className="geoChart" />
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
            <YearSlider timeArray={dataYears} yearChange={setCurrentYear} currentYearData={currentYear}/>
            <Chart chartType='AreaChart' data={yearByData.map(function(yearByData1){if(yearByData1[0]!='Country' ){return [Number(yearByData1[0]),yearByData1[1]]}else{return yearByData1}})} options={areaChartOptions(listBoxValue)}/>

            <div className="chartGrandParent">
                <div className="chartParent">
                    <SDGsTable dataset={dataset}/>
                    <Chart className="pieChartClass" chartType="PieChart" data={dataset} width="100%" height="300px" options={pieChartOption}/>
                </div>
                <div className="chartParent2">
                    <div className="BarChartHead">Top 10 Countries</div>
                    <Chart chartType="BarChart" data={dataset.slice(0,11) } options={barChartOption}/>
                </div>
            </div>
            <input type="range" className="input-range-red" name="foo" min="0" max="255" onChange={(e)=>setRed(e.target.value)} />
            <input type="range" className="input-range-green" name="foo" min="0" max="255" onChange={(e)=>setGreen(e.target.value)} />
            <input type="range" className="input-range-blue" name="foo" min="0" max="255" onChange={(e)=>setBlue(e.target.value)} />



        </div>
    );

}



