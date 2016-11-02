export function selectNumber(number, index){
  return {
    type: 'SELECT_NUMBER', number, index
  };
}

export function resetNumbers(){
  return {
    type: 'RESET_NUMBERS'
  };
}

export function updateEmail(email){
  return {
    type: 'UPDATE_EMAIL', email
  };
}

export function fillNumbers(allstate) {
  return{
    type: 'FILL_NUMBERS', allstate
  };
}

export function importStats(allstats) {
  return{
    type: 'FILL_STATS', allstats
  };
}
