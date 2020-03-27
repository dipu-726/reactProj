import React, { Component } from 'react';
import Card from '../Card';
import ResultModal from './ResultModal';

class Survey extends Component{

    constructor(props){
        super(props);
        this.state = {
            showResultModal : false,
            message: null,
            suggestion: null
        }
    }

        userInputSymptoms = new Array(10);
        
        oftenCount = 0;
        somtimesCount = 0;
        rareCount = 0;

        listOfSymptoms = [
            {
                symptomName: 'Cough',
                imageUrl: "https://i.dlpng.com/static/png/1651633-question-1-cough-png-275_275_preview.png"
            },
            {
                symptomName: 'Fever',
                imageUrl: "https://www.netclipart.com/pp/m/195-1955892_fever-clipart-tummy-pain-cartoon.png"
            },
            {
                symptomName: 'Fatigue',
                imageUrl: "https://www.pngitem.com/pimgs/m/117-1177149_fatigue-is-a-common-phenomenon-occurring-because-of.png"
            },
            {
                symptomName: 'Shortness of Breath',
                imageUrl: "https://thumbs.dreamstime.com/z/shortness-breath-person-breathing-problem-asthma-shortness-breath-person-breathing-problem-asthma-disease-symptom-160462759.jpg"
            },
            {
                symptomName:'Snuffy Nose',
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVhIHwOysxyPCHTSHJaRM-zHiG5wED4Ap-k-7X5A_jNpXj2GI-"
            },
            {
                symptomName:'Sneezing',
                imageUrl: "https://thumbs.dreamstime.com/b/man-sneezing-ill-fever-sick-influenza-cartoon-flat-illustration-vector-man-sneezing-ill-fever-sick-influenza-cartoon-168091915.jpg"
            },
            {
                symptomName:'Sore throat',
                imageUrl: "https://st3.depositphotos.com/4297405/16450/v/450/depositphotos_164509284-stock-illustration-illustration-depicts-a-child-character.jpg"
            },
            {
                symptomName:'Headache',
                imageUrl: "https://t4.ftcdn.net/jpg/02/82/12/99/240_F_282129985_4pPu8qWD4C5eSeQNdrPVQAT4df9ZPGeJ.jpg"
            },
            {
                symptomName:'Body Aches',
                imageUrl: "https://us.123rf.com/450wm/lcosmo/lcosmo1602/lcosmo160200053/52128786-stock-vector-mascot-person-man-with-back-pain-symptoms-ideal-for-informational-and-institutional-related-to-medic.jpg?ver=6"
            },
            {
                symptomName:'Diarrhea',
                imageUrl: "https://cdn4.vectorstock.com/i/1000x1000/49/13/boy-is-diarrhea-front-toilet-men-vector-25564913.jpg"
            }
    ];

    decideClassName = (index)=>{
        if( index%2 === 0)
        {
            return true;
        }
        return false;
    }

    rednerAllSymptoms = () =>{
        return this.listOfSymptoms.map((item,index) => {
            return <Card
                    key={index}
                    index={index} 
                    question={item.symptomName} 
                    imgUrl={item.imageUrl} 
                    classname={this.decideClassName(index) ? "u-card-blue":"u-card-yellow"}
                    symtomSelectedByUser = {this.symtomSelectedByUser}
            />
        })
    }

    symtomSelectedByUser  = (index,optionID) =>{
        this.userInputSymptoms[index] = optionID;
    }

    // *********************** calculate options count **************************//

    calOftenOption = () => {
        let count = 0;
        this.userInputSymptoms.forEach(item =>{
            if(item === 2){
               ++count;
            }
        })
        return count;
    }

    calRareOption = () => {
        let count = 0;
        this.userInputSymptoms.forEach(item =>{
            if(item === 0){
               ++count;
            }
        })
        return count;
    }
    calSometimesOption = () => {
        let count = 0;
        this.userInputSymptoms.forEach(item =>{
            if(item === 1){
               ++count;
            }
        })
        return count;
    }

    // *********************** calculate options count ****************************//


    // ********************** calcualate result *********************************** //

    checkEqualityForAll = (num1,num2,num3) =>{
        if(num1 === num2){
            if(num1 === num3)
                return true;
        }
        return false;
    }

    checkEqualityForTwo = (num1,num2,num3) =>{

        if(num1 === num2 && num1>num3){
            this.setState({
                message : "A little more exposure may put in DANGER.",
                suggestion: "Take Precautions ! "
            })
        }
        else if(num2 === num3 && num2>num1){
            this.setState({
                message : "You are more likely to have Flu..",
                suggestion: "Proper Medication is must ! "
            })
        }
        else if(num3 === num1 && num3 > num2){
            this.setState({
                message : "You are more likely to have Flu..",
                suggestion: "Take Precautions ! "
            })
        }
        else{

        }
    }

    checkForMoreLikelyToHave = (num1,num2,num3) =>{
            if(num1 > num2)
            {
            	if(num1 > num3 )
            	{
                   if(num1 >5){ 
                    this.setState({
                        message : "Oopss !! It seems like your are prone to CVOID-19",
                        suggestion: "Observe your Symptoms, Consult Doctor as soons as possible"
                    })
                   }
                   else{
                    this.setState({
                        message : "Seems like U are prone to flu ! Observe your Symptoms.",
                        suggestion: "Isolation is the best reward you can give to yourself !"
                    })
                   }
                } 
                else{
                    this.setState({
                        message : "No worries ! You may have common Cold.",
                        suggestion: "Take Precautions ! "
                    })
                }
            }
            else if(num2 > num1)
            {
            	if(num2 > num3 )
            	{ 	
                    this.setState({
                        message : "You are more likely to have Flu !",
                        suggestion: "Proper Medication is must."
                    })
            	}
            	else
                {
                    this.setState({
                        message : "No worries ! You may have common Cold.",
                        suggestion: "Take Precautions ! "
                    })
                }
            }
            else{
                this.setState({
                    message : "No worries ! You may have common Cold.",
                    suggestion: "Take Precautions ! "
                })
            }
    }
    
    calResultForUserInput = ()=>{

        const ifAllAreSame = this.checkEqualityForAll(this.oftenCount,this.somtimesCount,this.rareCount);

       if(ifAllAreSame){
           this.setState({
               message: "You are more likely to have Flu.."
           })
           return;
        }
        this.checkEqualityForTwo(this.oftenCount,this.somtimesCount,this.rareCount);
        this.checkForMoreLikelyToHave(this.oftenCount,this.somtimesCount,this.rareCount);        
    }

    // ********************** calcualate result *********************************** //

    handleSubmit = () => {
       
        let count = 0;

        this.userInputSymptoms.forEach(item=>{
            if(item === 0 || item ===1 || item===2)
            {
                ++count;
                if(count === 10){
                    this.oftenCount = this.calOftenOption();
                    this.somtimesCount = this.calSometimesOption();
                    this.rareCount = this.calRareOption();
                     this.calResultForUserInput();
                }
            }
        })
        if(count === 10 )
        {
            this.setState({
                showResultModal: true
            })
        }
        else    
            alert('Pls fill all the options ! ')          
    }

    render(){
        return(
            <div>
                {
                    this.state.showResultModal ? 
                    <ResultModal message={this.state.message} suggestion={this.state.suggestion} /> :
                    <div>
                        {this.rednerAllSymptoms()}
                        <button className="u-xx-large-margin u-btn u-btn-submit u-spacer--thin-top" onClick={this.handleSubmit}>SUBMIT</button>
                    </div>
                } 
            </div>
        )
    }   
}
export default Survey;