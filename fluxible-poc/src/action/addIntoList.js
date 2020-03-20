let addIntoList = function(context,payload,done){
    
    console.log("Inside action ! ");

    context.dispatch("CREATE_AND_APPEND",payload);
    context.dispatch("UPDATE_CURRENT_NAME",payload);
    done();
}
export default addIntoList;