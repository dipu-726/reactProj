const campaign_question_actions = require('../Response/CampaignQuestionActions');


const iternate_Actions_And_Return_Object = (arr) => {
    const newArr = [];
    arr.forEach(item =>{
        if(item.action_types[0].toLowerCase() ===  'show')
        {
            // const cID_and_qID = {
            //     campaign_id : item.campaign_id,
            //     question_id : item.question_id 
            // }
            const cID_and_qID = {
               [item.campaign_id] : item.question_id
            }
        //    console.log(newObj);
            newArr.push(cID_and_qID);
        }
    })
    // console.log(newArr);
    return newArr;
}

const iterate_Question_Choice_Array_And_Return_Object = (arr) =>{
    const objectForAnswerID = {};

    arr.forEach(element => {
        objectForAnswerID[element.id] = iternate_Actions_And_Return_Object(element.actions);
    });
    return objectForAnswerID;
}
const create_Object_With_Campaign_Question_ID_as_Key = (item) => {
    toBeReturned = {
        [item.id] : {
            [item.question.id] : iterate_Question_Choice_Array_And_Return_Object(item.question.question_choices)
        }
    }
    return toBeReturned;
}

const formatCampaignQuestionActions = (response) => {
    const formattedResponse = {};
    response.campaign_question_actions.forEach(item => {
        Object.assign(formattedResponse, create_Object_With_Campaign_Question_ID_as_Key(item))
    })

    console.log(formattedResponse);
  //  console.log(formattedResponse[501][301]);
}


formatCampaignQuestionActions(campaign_question_actions); 
