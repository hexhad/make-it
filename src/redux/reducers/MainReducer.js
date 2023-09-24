import { MAIN } from "../types/MainTypes";

const initialState = {
  dummy:{
    loading:false,
    data:[],
    error:null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {

    case MAIN.LOADING :
      return {
        ...state,
       dummy: {
          ...state.dummy,
         loading: true
       }
      };
    case MAIN.SUCCESS :
      return {
        ...state,
        dummy: {
          ...state.dummy,
          loading: false,
          data:action.payload,
        }
      };
    case MAIN.FAILED :
      return {
        ...state,
        dummy: {
          ...state.dummy,
          loading: false,
          error:action.payload,
        }
      };
    default:
      return state;
  }
}

