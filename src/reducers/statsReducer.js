const initialState = {
 stats: {}
};

export default function statsReducer(state = initialState, action) {
  switch(action.type){
    case 'FILL_STATS':
      return action.allstats;


    default:
      return state;
  }
}
