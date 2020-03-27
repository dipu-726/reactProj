obj = {
    "campaign_question_actions": [
      {
        "id": 500,
        "question": {
          "id": 300,
          "question_choices": [
            {
              "id": 1001,
              "actions": [
                {
                  "question_id": 300,
                  "campaign_id": 100,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 301,
                  "campaign_id": 100,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 235,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 111111,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 236,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                }
              ]
            },
            {
              "id": 1002,
              "actions": [
                {
                  "question_id": 300,
                  "campaign_id": 100,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 302,
                  "campaign_id": 100,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 235,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 111111,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 236,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                }
              ]
            },
            {
              "id": 1003,
              "actions": [
                {
                  "question_id": 300,
                  "campaign_id": 100,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 303,
                  "campaign_id": 100,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 235,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 111111,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 236,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                }
              ]
            },
            {
              "id": 1004,
              "actions": [
                {
                  "question_id": 300,
                  "campaign_id": 100,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 304,
                  "campaign_id": 100,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 235,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 111111,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 236,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                }
              ]
            },
            {
              "id": 1005,
              "actions": [
                {
                  "question_id": 300,
                  "campaign_id": 100,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 305,
                  "campaign_id": 100,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 235,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 111111,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 236,
                  "campaign_id": 101,
                  "action_types": [
                    "show"
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        "id": 501,
        "question": {
          "id": 301,
          "question_choices": [
            {
              "id": 1012,
              "actions": [
                {
                  "question_id": 300,
                  "campaign_id": 100,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 301,
                  "campaign_id": 100,
                  "action_types": [
                    "show"
                  ]
                },
                {
                  "question_id": 235,
                  "campaign_id": 101,
                  "action_types": [
                    "hide"
                  ]
                },
                {
                  "question_id": 111111,
                  "campaign_id": 101,
                  "action_types": [
                    "hide"
                  ]
                },
                {
                  "question_id": 236,
                  "campaign_id": 101,
                  "action_types": [
                    "hide"
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        "id": 506,
        "question": {
          "id": 235,
          "question_choices": [
            {
              "id": 535,
              "actions": [
                {
                  "question_id": 236,
                  "campaign_id": 101,
                  "action_types": [
                    "show",
                    "required"
                  ]
                }
              ]
            },
            {
              "id": 536,
              "actions": [
                {
                  "question_id": 236,
                  "campaign_id": 101,
                  "action_types": [
                    "show",
                    "required"
                  ]
                }
              ]
            }
          ]
        }
      }
    ]
  };


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