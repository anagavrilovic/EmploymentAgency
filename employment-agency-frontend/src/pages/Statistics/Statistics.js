import React from 'react';
import { useNavigate } from "react-router-dom";

import classes from './Statistics.module.css';

function Statistics() {

    const navigate = useNavigate();

    function goToHomepage() {
        navigate("/");
    }

    return (
        <div className={classes.page}>
            <div className={`${classes.background}`}>
                <h1 className={classes.title}> STATISTICS </h1>
                <p className={classes.description}>
                    Effortlessly access a comprehensive list of all registered candidates through our user-friendly 
                    functionality. Stay organized and gain a complete overview of potential talent, enabling you to 
                    efficiently browse and evaluate candidate profiles. Or 
                </p>
                <button className={classes.backToHomeButton} onClick={goToHomepage}>
                    Go back to homepage
                </button>

                <div className={classes.statistics}>
                    <h4 className={classes.statisticsTitle}>Premium Hiring Applications by Cities</h4>
                    <iframe title='City' src="http://localhost:5601/app/kibana#/visualize/edit/cc271320-18ee-11ee-8252-b749f5294e98?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:now-30d,to:now))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(field:city.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:segment,type:terms)),params:(addLegend:!t,addTooltip:!t,dimensions:(buckets:!((accessor:0,aggType:terms,format:(id:terms,params:(id:string,missingBucketLabel:Missing,otherBucketLabel:Other)),params:())),metric:(accessor:1,aggType:count,format:(id:number),params:())),isDonut:!f,labels:(last_level:!t,show:!t,truncate:100,values:!t),legendPosition:right,type:pie),title:PieChartCities,type:pie))" height="600" width="800"></iframe>
                    <br />

                    <h4 className={classes.statisticsTitle}>Successful Premium Hirings by Employee</h4>
                    <iframe title='Employee' src="http://localhost:5601/app/kibana#/visualize/edit/173dae40-18f0-11ee-8252-b749f5294e98?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:now-30d,to:now))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(vis:(colors:(Count:%23806EB7))),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(field:employee.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:segment,type:terms)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:200),position:left,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:(accessor:0,aggType:terms,format:(id:terms,params:(id:string,missingBucketLabel:Missing,otherBucketLabel:Other)),params:()),y:!((accessor:1,aggType:count,format:(id:number),params:()))),grid:(categoryLines:!f),labels:(),legendPosition:right,seriesParams:!((data:(id:'1',label:Count),drawLinesBetweenPoints:!t,mode:normal,show:!t,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!t,rotate:75,show:!t,truncate:100),name:LeftAxis-1,position:bottom,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:Count),type:value))),title:Employees,type:horizontal_bar))" height="600" width="800"></iframe>
                    <br />

                    <h4 className={classes.statisticsTitle}>Successful Premium Hirings by Company</h4>
                    <iframe title='Company' src="http://localhost:5601/app/kibana#/visualize/edit/986db100-18ef-11ee-8252-b749f5294e98?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:now-30d,to:now))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(vis:(colors:(Count:%23967302))),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(field:company.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:segment,type:terms)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:!n,y:!((accessor:0,aggType:count,format:(id:number),params:()))),grid:(categoryLines:!f),labels:(show:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:Count),drawLinesBetweenPoints:!t,mode:stacked,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),thresholdLine:(color:%2334130C,show:!f,style:full,value:10,width:1),times:!(),type:histogram,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:Count),type:value))),title:Company,type:histogram))" height="600" width="800"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Statistics;