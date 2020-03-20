import {createStore} from "fluxible/addons"

module.exports = createStore({
    storeName: "NameStore",
    handlers: {
        'CREATE_NEW_NAME': '_createName',
        'UPDATE_NAME': '_updateName'   
    },
    initialize: function(){
        this.name=[];
        this.currentName=null;
    },

    populateList: function(payload){
       if(payload)
       {
            this.name.push(payload);
       }
       this.emitChange();
    },

    updateCurrentName: function(payload){
       if(payload)
       {
            this.currentName = payload;
       }
       this.emitChange();
    },

    getCurrentName: function(){
        return this.currentName;
    },
    
    getListOfNames: function(){
        return this.name;
    },
    
    dehydrate: function(){
        return {
            name: this.name,
            currentName: this.currentName
        }
    },

    rehydrate: function(state){
        this.name = state.name;
        this.currentName = state.currentName;
    }
});