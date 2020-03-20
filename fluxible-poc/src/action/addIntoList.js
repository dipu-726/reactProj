module.exports = function(context,payload,done){
    
    console.log("Inside action ! ");

    context.dispatch("CREATE_NEW_NAME",payload);
    context.dispatch("UPDATE_NAME",payload);
    done();
}