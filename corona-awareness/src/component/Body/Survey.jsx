import React, { Component } from 'react';
import Card from '../Card';

class Survey extends Component{

        listOfSymptoms = [
            {
                symptomName: 'Cough',
                imageUrl: "https://i.dlpng.com/static/png/1651633-question-1-cough-png-275_275_preview.png"
            },
            {
                symptomName: 'Fever',
                imageUrl: "https://i.dlpng.com/static/png/1651633-question-1-cough-png-275_275_preview.png"
            },
            {
                symptomName: 'Fatigue',
                imageUrl: "https://i.dlpng.com/static/png/1651633-question-1-cough-png-275_275_preview.png"
            },
            {
                symptomName: 'Shortness of Breath',
                imageUrl: "https://i.dlpng.com/static/png/1651633-question-1-cough-png-275_275_preview.png"
            },
            {
                symptomName:'Snuffy Nose',
                imageUrl: "https://i.dlpng.com/static/png/1651633-question-1-cough-png-275_275_preview.png"
            },
            {
                symptomName:'Sneezing',
                imageUrl: "https://i.dlpng.com/static/png/1651633-question-1-cough-png-275_275_preview.png"
            },
            {
                symptomName:'Sore throat',
                imageUrl: "https://i.dlpng.com/static/png/1651633-question-1-cough-png-275_275_preview.png"
            },
            {
                symptomName:'Headache',
                imageUrl: "https://i.dlpng.com/static/png/1651633-question-1-cough-png-275_275_preview.png"
            },
            {
                symptomName:'Body Aches',
                imageUrl: "https://i.dlpng.com/static/png/1651633-question-1-cough-png-275_275_preview.png"
            },
            {
                symptomName:'Diarrhea',
                imageUrl: "https://i.dlpng.com/static/png/1651633-question-1-cough-png-275_275_preview.png"
            }
    ];

    decideClassName = (index)=>{
        console.log(index);
        if( index%2 === 0)
        {
            return true;
        }
        return false;
    }

    rednerAllSymptoms = () =>{
        return this.listOfSymptoms.map((item,index) => {
            return <Card key={index} question={item.symptomName} imgUrl={item.imageUrl} classname={this.decideClassName(index) ? "u-card-blue":"u-card-yellow"}/>
        })
    }

    render(){
        return(
            <div>

                {console.log("nested")}
                {this.rednerAllSymptoms()}
            </div>
        )
    }   
}
export default Survey;