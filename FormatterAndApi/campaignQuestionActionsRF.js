obj = {

}


const  iternateActionsAndReturnObject = (arr) =>{
    const newArr = [];
    arr.forEach(item =>{
        if(item.action_types[0].toLowerCase() ===  'show')
        {
            const newObj = {
                campaign_id : item.campaign_id,
                question_id : item.question_id 
            }
           // console.log(newObj);
            newArr.push(newObj);
        }
    })
    // console.log(newArr);
    return newArr;
}

const iterateQuestionChoiceArrayAndReturnObject = (arr) =>{
    const newArr = [];
    const newObj = {};
    
    arr.forEach(element => {
        newObj[element.id] = iternateActionsAndReturnObject(element.actions);
    });
    return newObj;
}

const createObject = (objEle) =>{
    // console.log("create object called ! ",objEle.id);
   
    toBeReturned = {
        [objEle.id] : {
                          [objEle.question.id] : iterateQuestionChoiceArrayAndReturnObject(objEle.question.question_choices)
            }
    };
    return toBeReturned;
    
}

const formatData = (response) =>{
    const objReturedn = {};
    response.campaign_question_actions.forEach(item => {
       Object.assign(objReturedn, createObject(item));
    })

        //was checking for one response
        //  const objReturedn = createObject(response.campaign_question_actions[0]);
    
    console.log(objReturedn);
        //checking whether array is accessible or not.
        // console.log(objReturedn['500']['300']['1001']);
}


formatData(obj);