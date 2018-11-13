export default (state = {}, action) => {
  switch(action.type){
    case 'SAVE_ALL_SALES_DATA':
    return {
      data: action.data
    }
    default:
    return state;
  };
};
