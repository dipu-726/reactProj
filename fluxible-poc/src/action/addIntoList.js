module.exports = function(context,payload,done){
    context.dispatch("CREATE_NEW_NAME",payload.text);
    context.dispatch("UPDATE_NAME",payload.text);
    done();
}