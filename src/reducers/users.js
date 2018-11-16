export default (state = {}, action) => {
  switch(action.type){
    case 'SAVE_CURRENT_USERS':
    return {
      data: action.users
    }
    default:
    return state;
  };
};
