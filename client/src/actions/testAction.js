import { TESTACTION ,TESTACTION_FALSE} from '../redux-type';
import axios from 'axios';
const testAction =  (data) => dispatch => {
      axios.post('/api/user/login',data)
.then(res =>{ console.log("result",res)
    return dispatch({
    type:TESTACTION,
    payload :res
}) })
    .catch(error=>dispatch({
        type:TESTACTION_FALSE,
        payload :error
    }))
    
}
export default testAction