import { ADD_TO_CART,REMOVE_TO_CART } from "../constants";

const initialState = {
    cardData : []
};
export default function cardItems(state = [],action){
    // console.log('reducer : ',action);
    switch(action.type){
        case ADD_TO_CART:
            return [
                ...state,
                {cardData : action.data}
            ]
        case REMOVE_TO_CART:
            let data = JSON.parse(JSON.stringify(action.data))
            data.pop()
            console.log(data,"sdsadsadsad")
            // state.pop();
            return [
               ... data

            ]
        default: return state;
    }
}
