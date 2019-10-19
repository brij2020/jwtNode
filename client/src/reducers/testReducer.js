import {TESTACTION,TESTACTION_FALSE} from '../redux-type'



const testReducer = (state="",{type,payload})=>{
    console.log("payload",payload,type)
    switch(type) {
        case TESTACTION :
            return payload ;
        case TESTACTION_FALSE :
            return payload;
        default :
            return state
    }
}
export default  testReducer;
